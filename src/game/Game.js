import * as THREE from 'three';
import { World } from '../world/World.js';
import { makeMonkey, makeRelic } from '../world/models.js';
import { Player } from './Player.js';
import { CameraRig } from './CameraRig.js';
import { Enemy, Boss, Projectile } from './Enemy.js';
import { CHAPTERS, CHARACTERS, DIFFICULTIES, SHRINE_LINES, DEATH_QUOTES, ENDING_CHOICES, LOADING_TIPS } from '../data/story.js';
import { angleDelta, clamp, dist2D, rand, wait } from '../core/utils.js';
import { writeSave } from '../core/Save.js';

const UPGRADE_COSTS = [80, 130, 200, 300, 430];

const PROLOGUE_ITEM = {
  id: 'manual',
  name: '员工手册',
  item: '入职礼物 · 非卖品',
  desc: '一本薄薄的小册子。第一页写着“公司是你家”，第二页写着“请勿留宿”。第三页被撕掉了，据说是年假那一页。',
  quote: '“欢迎加入大家庭。现在，请把这里当成自己家，然后立刻开始加班。”',
};

const BAJIE_FLAVOR = {
  prologue: '我？我就是个路过的。你继续，别管我。',
  blackwind: '黑熊精的面试我参加过。他问我能不能接受无偿加班，我说能。他当场把我录用了。',
  yellowwind: '我跟黄风大圣不熟。真的。那三十七块五是我凭本事欠的。',
  xiaoxitian: '黄眉的课我上过。三天两夜，我睡了三天两夜。醒来发现尾款已经扣了。',
  pansi: '百眼魔君卖我的洗脚盆，现在还在用。别说，确实能洗脚。',
  flame: '红孩儿那孩子……其实挺可怜的。他爸连他读几年级都不知道。',
  final: '我跟大师兄五百年没见了。他要是真在海南，我高低得让他请顿海鲜。',
};

export class Game {
  constructor(app) {
    this.app = app;
    this.engine = app.engine;
    this.ui = app.ui;
    this.audio = app.audio;
    this.input = app.input;
    this.save = app.save;
    this.settings = app.settings;
    this.chapterIndex = 0;
    this.chapter = CHAPTERS[0];
    this.time = 0;
    this.active = false;
    this.paused = false;
    this.dialogueOpen = false;
    this.shopOpen = false;
    this.hitStopTimer = 0;
    this.slowTimer = 0;
    this.slowScale = 1;
    this.enemies = [];
    this.projectiles = [];
    this.boss = null;
    this.generation = 0;
    this.hudTimer = 0;
    this.objectiveTimer = 0;
    this.gateOpen = false;
    this.gatePending = 0;
    this.kills = 0;
    this.requiredKills = 0;
    this.phase = 'explore';
    this.deathHandled = false;
    this.relic = null;
    this.relicCollecting = false;
    this.bossTriggered = false;
    this.bossDefeated = false;
    this.interactTarget = null;
    this.objectiveText = '';
    this.objectiveProgress = '';
    this.arrowTarget = null;
    this.dirtySaveTimer = 0;
    this.tutorialShown = false;
    this.lastTip = '';
    this.debugStartedBoss = false;
  }

  get difficulty() {
    return DIFFICULTIES.find((d) => d.id === this.save.difficulty) || DIFFICULTIES[1];
  }

  loadChapter(index, opts = {}) {
    this.generation++;
    this.disposed = false;
    this.disposeCurrent();
    this.chapterIndex = index;
    this.chapter = CHAPTERS[index];
    this.time = 0;
    this.active = false;
    this.paused = false;
    this.dialogueOpen = false;
    this.shopOpen = false;
    this.hitStopTimer = 0;
    this.slowTimer = 0;
    this.enemies = [];
    this.projectiles = [];
    this.boss = null;
    this.gateOpen = false;
    this.gatePending = 0;
    this.kills = 0;
    this.requiredKills = this.chapter.enemies.length;
    this.phase = 'explore';
    this.deathHandled = false;
    this.relic = null;
    this.relicCollecting = false;
    this.bossTriggered = false;
    this.bossDefeated = false;
    this.interactTarget = null;
    this.objectiveTimer = 0;
    this.hudTimer = 0;
    this.arrowTarget = null;
    this.tutorialShown = opts.skipIntro || false;
    this.save.chapter = index;
    this.save.started = true;
    if (!this.save.seenCharacters) this.save.seenCharacters = [];
    writeSave(this.save);

    this.world = new World(this.chapter);
    this.models = {
      player: makeMonkey({ badge: true, fur: 0x5b3a24, cloth: 0xb7442e, gold: 0xdba84a, face: 0xd9a572 }),
    };
    this.player = new Player(this);
    this.cameraRig = new CameraRig(this);
    this.cameraRig.setPlayer(this.player);
    this.engine.setScene(this.world.scene, this.world.camera, (dt) => this.update(dt));
    this.engine.setQuality(this.settings.quality === 'auto' ? this.autoQuality() : this.settings.quality);

    for (const spawn of this.chapter.enemies) {
      this.enemies.push(new Enemy(this, spawn));
    }
    this.ui.setupGame(this.chapter, this.save);
    this.ui.setGame(this);
    this.ui.hideBossBar();
    this.ui.setHudVisible(false);
    this.ui.clearInteractPrompt();
    this.ui.setObjective(this.chapter.goal, '');
    this.input.setEnabled(false);
    this.input.setBlocked(true);
    this.input.clearActions();
    this.updateHud(true);
    this.objectiveText = this.chapter.goal;
    this.objectiveProgress = '';
    this.audio.playMusic('menu');
    return this;
  }

  autoQuality() {
    const mobile = window.innerWidth < 820 || /Mobi|Android/i.test(navigator.userAgent);
    return mobile ? 'medium' : 'high';
  }

  async begin(opts = {}) {
    const token = this.generation;
    this.audio.playMusic('field');
    if (!opts.skipChapterCard) {
      await this.ui.chapterCard(this.chapter);
      if (token !== this.generation) return;
    }
    if (!opts.skipIntro && this.chapter.intro?.length) {
      await this.playDialogue(this.chapter.intro, {
        title: `${this.chapter.numeral} · ${this.chapter.name}`,
        subtitle: this.chapter.location,
        cinematic: true,
      });
      if (token !== this.generation) return;
    }
    this.active = true;
    this.input.setEnabled(true);
    this.input.setBlocked(false);
    this.input.clearActions();
    this.ui.setHudVisible(true);
    this.cameraRig.reset();
    this.updateObjectives(true);
    this.updateHud(true);
    if (!this.save.tutorialSeen) {
      this.save.tutorialSeen = true;
      writeSave(this.save);
      setTimeout(() => {
        if (token === this.generation) this.ui.showTutorial(this.player, this.chapter, this);
      }, 600);
    }
    this.audio.sfx('gong');
  }

  async playDialogue(lines, opts = {}) {
    if (!lines?.length) return;
    for (const line of lines) {
      if (line.who && CHARACTERS[line.who] && !this.save.seenCharacters.includes(line.who)) {
        this.save.seenCharacters.push(line.who);
      }
    }
    const token = this.generation;
    this.dialogueOpen = true;
    this.input.setBlocked(true);
    this.ui.clearInteractPrompt();
    const result = await this.ui.dialogue(lines, { ...opts, game: this });
    if (token !== this.generation) return result;
    this.dialogueOpen = false;
    if (!this.paused && !this.shopOpen && this.active) this.input.setBlocked(false);
    writeSave(this.save);
    return result;
  }

  setPaused(value) {
    this.paused = value;
    this.input.setBlocked(value || this.dialogueOpen || this.shopOpen);
    if (value) this.input.setEnabled(false);
    else if (this.active) this.input.setEnabled(true);
    if (!value && this.active) this.input.clearActions();
  }

  update(dt) {
    if (this.disposed) return;
    this.time += dt;
    this.hitStopTimer = Math.max(0, this.hitStopTimer - dt);
    if (this.slowTimer > 0) this.slowTimer -= dt;
    const frozen = this.hitStopTimer > 0;
    let scale = frozen ? 0.06 : this.slowTimer > 0 ? this.slowScale : 1;
    if (this.dialogueOpen) scale *= 0.2;
    if (this.paused || this.shopOpen) scale = 0;
    const sdt = Math.min(dt, 0.05) * scale;

    this.world.update(dt);
    if (this.relic) {
      this.relic.rotation.y += dt * 0.8;
      const rig = this.relic.userData.rig;
      if (rig) {
        rig.core.rotation.y += dt * 1.4;
        rig.core.rotation.x += dt * 0.6;
        rig.ring.rotation.z += dt * 0.5;
        rig.ring2.rotation.x += dt * 0.8;
        rig.core.position.y = 1.1 + Math.sin(this.time * 2.2) * 0.12;
        rig.ring.position.y = 1.1 + Math.sin(this.time * 2.2) * 0.12;
        rig.ring2.position.y = 1.1 + Math.sin(this.time * 2.2) * 0.12;
      }
    }

    if (!this.active) {
      if (this.player && this.cameraRig) this.cameraRig.update(dt, this.input);
      this.ui.updateDamageNumbers?.(this.world.camera, dt);
      return;
    }
    if (this.dialogueOpen || this.paused || this.shopOpen) {
      if (this.player && this.cameraRig) this.cameraRig.update(dt, this.input);
      this.ui.updateDamageNumbers?.(this.world.camera, dt);
      this.updateHud();
      return;
    }

    if (sdt > 0) {
      this.player.update(sdt);
      for (const enemy of [...this.enemies]) enemy.update(sdt);
      if (this.boss) this.boss.update(sdt);
      for (let i = this.projectiles.length - 1; i >= 0; i--) {
        const p = this.projectiles[i];
        p.update(sdt);
        if (p.dead) this.projectiles.splice(i, 1);
      }
    }
    this.cameraRig.update(dt, this.input);
    this.updateInteraction();
    this.updateObjectives();
    this.updateHud();
    this.ui.updateDamageNumbers?.(this.world.camera, dt);
    this.dirtySaveTimer += dt;
    if (this.dirtySaveTimer > 12) {
      this.dirtySaveTimer = 0;
      writeSave(this.save);
    }
  }

  updateInteraction() {
    if (!this.player?.alive || this.dialogueOpen) {
      this.ui.clearInteractPrompt();
      return;
    }
    let nearest = null;
    let nearestDist = Infinity;
    for (const item of this.world.interactables) {
      if (item.used || !item.object?.visible) continue;
      const d = dist2D(this.player.position, item.position);
      if (d < item.radius && d < nearestDist) {
        nearest = item;
        nearestDist = d;
      }
    }
    if (nearest !== this.interactTarget) {
      this.interactTarget = nearest;
      if (nearest) this.ui.setInteractPrompt(nearest);
      else this.ui.clearInteractPrompt();
    }
    if (this.interactTarget && this.input.consume('interact')) {
      this.handleInteraction(this.interactTarget);
    }
  }

  async handleInteraction(item) {
    if (!item) return;
    this.ui.clearInteractPrompt();
    this.interactTarget = null;
    if (item.type === 'shrine') {
      await this.openShrine();
    } else if (item.type === 'npc') {
      await this.talkToNpc(item.id);
    } else if (item.type === 'chest') {
      this.openChest(item);
    } else if (item.type === 'relic') {
      await this.collectRelic();
    }
  }

  openChest(item) {
    if (item.used) return;
    item.used = true;
    const amount = 55 + this.chapterIndex * 18 + Math.round(rand(0, 40));
    this.addCoins(amount);
    this.audio.sfx('coin');
    const p = item.position.clone();
    this.world.spawnSparks(p, 0xffd177, 20);
    this.world.spawnRing(p, 0xffd177, 0.8);
    this.ui.toast(`打开了功德箱。获得 ${amount} 功德。里面还有一张“下次一定”的欠条。`, 'loot');
    item.object.visible = false;
    item.object.traverse((o) => {
      if (o.isLight) o.visible = false;
    });
  }

  async talkToNpc(id) {
    if (id === 'keeper') {
      const lines = [...(this.chapter.keeperIdle || [])];
      if (!lines.length) {
        lines.push({ who: 'keeper', text: '继续走吧。前面还有更离谱的。' });
      }
      lines.push({ who: 'keeper', text: '对了，共享香火可以升级。扫码即拜，押金八十。' });
      await this.playDialogue(lines, { title: '土地公 · 花果山物业' });
    } else if (id === 'bajie') {
      const lines = [
        { who: 'bajie', text: BAJIE_FLAVOR[this.chapter.id] || '别看我。我只是个路过的外卖员。' },
        { who: 'bajie', text: '你要是缺功德，就去开宝箱。你要是缺德，就去找六耳。' },
      ];
      await this.playDialogue(lines, { title: '猪八戒 · 灵活就业' });
    }
  }

  async openShrine() {
    if (this.shopOpen) return;
    this.shopOpen = true;
    this.input.setBlocked(true);
    this.audio.sfx('uiOpen');
    this.player.refill();
    this.player.invuln = 0.8;
    this.updateHud(true);
    this.ui.toast('香火已续。生命、体力、法力、葫芦全部回满。', 'good');
    const token = this.generation;
    await this.ui.openShrine({
      game: this,
      chapter: this.chapter,
      onClose: () => {},
    });
    if (token !== this.generation) return;
    this.shopOpen = false;
    if (this.active) {
      this.input.setBlocked(false);
      this.input.setEnabled(true);
      this.input.clearActions();
    }
    writeSave(this.save);
    this.audio.sfx('uiClose');
  }

  getUpgradeCost(key) {
    const level = this.save.upgrades?.[key] ?? 0;
    if (level >= 5) return null;
    return UPGRADE_COSTS[level];
  }

  upgrade(key) {
    const level = this.save.upgrades?.[key] ?? 0;
    if (level >= 5) return { ok: false, message: '已满级。再升就要交个税了。' };
    const cost = this.getUpgradeCost(key);
    if (this.save.coins < cost) {
      this.audio.sfx('back');
      return { ok: false, message: `功德不足。还差 ${cost - this.save.coins}。建议去开点宝箱。` };
    }
    this.save.coins -= cost;
    this.save.upgrades[key] = level + 1;
    if (key === 'body') {
      this.player.maxHp = Math.round((150 + (level + 1) * 24) * this.difficulty.playerHp);
      this.player.hp = Math.min(this.player.maxHp, this.player.hp + 24);
    } else if (key === 'staff') {
      this.player.attackPower = this.difficulty.playerDamage * (1 + (level + 1) * 0.13);
    } else if (key === 'gourd') {
      this.player.maxGourd = 3 + level + 1;
      this.player.gourd = Math.min(this.player.maxGourd, this.player.gourd + 1);
    }
    writeSave(this.save);
    this.audio.sfx('confirm');
    this.ui.updateHud(this.hudPayload(), true);
    const names = { body: '体质', staff: '棍法', gourd: '葫芦' };
    return { ok: true, message: `${names[key]}提升至 Lv.${level + 1}。`, coins: this.save.coins };
  }

  updateObjectives(force = false) {
    if (this.phase === 'explore' && !this.gateOpen) {
      const alive = this.enemies.filter((e) => !e.summoned && e.alive);
      const remaining = Math.max(0, this.requiredKills - this.kills);
      const text = remaining > 0 ? `清理拦路的妖怪` : '面试通道已开放';
      const progress = remaining > 0 ? `${this.kills}/${this.requiredKills}` : '';
      if (force || text !== this.objectiveText || progress !== this.objectiveProgress) {
        this.objectiveText = text;
        this.objectiveProgress = progress;
        this.ui.setObjective(text, progress);
        this.world.setObjective(null);
      }
      this.objectiveTimer -= 1 / 60;
      if (alive.length && this.objectiveTimer <= 0) {
        this.objectiveTimer = 0.4;
        let nearest = alive[0];
        let nd = Infinity;
        for (const e of alive) {
          const d = dist2D(e.position, this.player.position);
          if (d < nd) {
            nd = d;
            nearest = e;
          }
        }
        this.arrowTarget = nearest.position;
      } else if (!alive.length) {
        this.arrowTarget = new THREE.Vector3(0, 0, -10);
      }
      if (remaining <= 0) {
        this.gatePending += 1 / 60;
        if (this.gatePending > 0.8) this.openGate();
      }
    } else if (this.phase === 'explore' && this.gateOpen && !this.bossTriggered) {
      this.arrowTarget = this.arrowTarget || new THREE.Vector3(0, 0, -10);
      if (this.player.position.z < -10.4 && this.world.gate?.visible) {
        this.world.gate.visible = false;
        if (this.world.gateWalls) this.world.gateWalls.visible = false;
        if (this.world.barrier) this.world.barrier.visible = false;
      }
      if (force) {
        this.objectiveText = '穿过面试通道';
        this.objectiveProgress = '前往面试场';
        this.ui.setObjective(this.objectiveText, this.objectiveProgress);
        this.world.setObjective(new THREE.Vector3(0, 0, -10));
      }
      if (this.player.position.z < -13.4) {
        this.triggerBoss();
      }
    } else if (this.phase === 'boss') {
      this.arrowTarget = null;
      if (force) {
        this.objectiveText = `击败 ${this.boss?.name ?? 'Boss'}`;
        this.objectiveProgress = '';
        this.ui.setObjective(this.objectiveText, '');
        this.world.setObjective(null);
      }
    } else if (this.phase === 'relic' && this.relic) {
      this.arrowTarget = this.relic.position;
      if (force) {
        this.objectiveText = '拾取六根之一';
        this.objectiveProgress = this.chapter.relic?.name ?? '';
        this.ui.setObjective(this.objectiveText, this.objectiveProgress);
        this.world.setObjective(this.relic.position);
      }
    }
  }

  openGate() {
    if (this.gateOpen) return;
    this.gateOpen = true;
    this.phase = 'explore';
    this.world.setGateOpen();
    this.audio.sfx('gong');
    this.ui.toast('面试通道已开放。请携带简历和遗书前往。', 'good');
    this.objectiveText = '穿过面试通道';
    this.objectiveProgress = '前往面试场';
    this.ui.setObjective(this.objectiveText, this.objectiveProgress);
    this.world.setObjective(new THREE.Vector3(0, 0, -10));
    this.arrowTarget = new THREE.Vector3(0, 0, -10);
    writeSave(this.save);
  }

  async triggerBoss() {
    if (this.bossTriggered || this.bossDefeated || !this.active) return;
    this.bossTriggered = true;
    this.phase = 'bossIntro';
    this.input.setBlocked(true);
    this.world.setObjective(null);
    this.world.showArenaSet();
    this.boss = new Boss(this);
    this.ui.showBossBar(this.boss.name, this.boss.title, 1);
    this.audio.playMusic('boss');
    this.audio.sfx('roar');
    this.cameraRig.setFocus(this.boss.position.clone().add(new THREE.Vector3(0, 1.6, 0)), 0.45);
    const token = this.generation;
    await wait(500);
    if (token !== this.generation) return;
    await this.playDialogue(this.boss.def.intro, {
      title: `${this.boss.name} · ${this.boss.title}`,
      subtitle: this.chapter.location,
      cinematic: true,
    });
    if (token !== this.generation) return;
    this.cameraRig.clearFocus();
    this.boss.engage();
    this.phase = 'boss';
    this.input.setBlocked(false);
    this.input.setEnabled(true);
    this.objectiveText = `击败 ${this.boss.name}`;
    this.objectiveProgress = '';
    this.ui.setObjective(this.objectiveText, '');
    this.ui.bossPhase(1);
    this.ui.toast('Boss 战开始。打不过可以跑，但跑不出这个项目。', 'boss');
  }

  async onBossDefeated(boss) {
    if (this.bossDefeated) return;
    this.bossDefeated = true;
    this.phase = 'bossOutro';
    this.input.setBlocked(true);
    this.input.clearActions();
    this.save.kills += 1;
    this.addCoins(120 + this.chapterIndex * 45);
    for (const enemy of [...this.enemies]) {
      if (enemy.summoned) enemy.die(true);
    }
    this.ui.updateBossBar(0);
    this.slowMotion(0.25, 1.2);
    this.cameraRig.shake(0.5, 0.8);
    this.ui.toast(`击败 ${boss.name}。绩效暂定为 B+。`, 'boss');
    const token = this.generation;
    await wait(1300);
    if (token !== this.generation) return;
    this.ui.hideBossBar();
    await this.playDialogue(this.chapter.boss.outro, {
      title: `${this.chapter.numeral} · 战毕`,
      subtitle: this.chapter.location,
      cinematic: true,
    });
    if (token !== this.generation) return;
    if (!this.chapter.relic) {
      this.phase = 'prologueClear';
      await this.ui.relicReveal(PROLOGUE_ITEM, this.chapter);
      if (token !== this.generation) return;
      await this.playDialogue(this.chapter.completeLines, {
        title: `${this.chapter.numeral} · 完`,
        subtitle: this.chapter.location,
        cinematic: true,
      });
      if (token !== this.generation) return;
      this.active = false;
      this.input.setEnabled(false);
      writeSave(this.save);
      this.app.chapterComplete(this.chapter);
      return;
    }
    this.spawnRelic();
    if (this.boss?.model) this.boss.model.visible = false;
    this.phase = 'relic';
    this.input.setBlocked(false);
    this.input.setEnabled(true);
    this.updateObjectives(true);
    this.audio.playMusic(this.chapter.isFinal ? 'ending' : 'field');
    this.ui.toast('六根现世。去捡起来吧，别让保洁阿姨当垃圾收了。', 'relic');
  }

  spawnRelic() {
    const model = makeRelic();
    model.position.set(0, 0, -20.2);
    this.world.scene.add(model);
    this.relic = model;
    this.world.interactables.push({
      id: 'relic',
      type: 'relic',
      object: model,
      label: this.chapter.relic?.item ?? '六根',
      position: new THREE.Vector3(0, 1.1, -20.2),
      radius: 3.4,
      prompt: '拾取',
      icon: '根',
    });
    this.world.spawnSparks(new THREE.Vector3(0, 1.2, -20.2), 0xffd37a, 30);
    this.world.spawnShockwave(new THREE.Vector3(0, 0, -20.2), 0xffd37a);
    this.arrowTarget = new THREE.Vector3(0, 0, -20.2);
    this.audio.sfx('relic');
  }

  async collectRelic() {
    if (this.relicCollecting || !this.relic) return;
    this.relicCollecting = true;
    this.input.setBlocked(true);
    this.ui.setHudVisible(false);
    this.ui.hideBossBar();
    const relic = this.chapter.relic;
    if (!this.save.relics.includes(relic.id)) this.save.relics.push(relic.id);
    this.save.coins += this.chapter.reward ?? 200;
    writeSave(this.save);
    this.world.setObjective(null);
    this.arrowTarget = null;
    this.world.spawnSparks(new THREE.Vector3(0, 1.2, -20.2), 0xffd37a, 36);
    this.audio.sfx('relic');
    const token = this.generation;
    await this.ui.relicReveal(relic, this.chapter);
    if (token !== this.generation) return;
    this.relic.visible = false;
    this.relic = null;
    const item = this.world.interactables.find((i) => i.type === 'relic');
    if (item) item.used = true;
    if (this.chapter.isFinal) {
      const choice = await this.ui.endingChoice(ENDING_CHOICES, relic);
      if (token !== this.generation) return;
      this.save.completed = true;
      writeSave(this.save);
      this.app.finishEnding(choice);
      return;
    }
    await this.playDialogue(this.chapter.completeLines, {
      title: `${this.chapter.numeral} · 完`,
      subtitle: this.chapter.location,
      cinematic: true,
    });
    if (token !== this.generation) return;
    this.active = false;
    this.input.setEnabled(false);
    writeSave(this.save);
    this.app.chapterComplete(this.chapter);
  }

  damageEnemiesInArc(position, range, arc, damage, facing, opts = {}) {
    let hits = 0;
    for (const enemy of this.enemies) {
      if (!enemy.alive) continue;
      const d = dist2D(position, enemy.position);
      if (d > range + enemy.radius) continue;
      const angleTo = Math.atan2(enemy.position.x - position.x, enemy.position.z - position.z);
      if (arc < Math.PI * 1.9 && Math.abs(angleDelta(facing, angleTo)) > arc / 2) continue;
      const finalDamage = damage * rand(0.92, 1.08);
      if (enemy.takeDamage(finalDamage, { heavy: opts.type === 'heavy', knockback: opts.knockback, from: position, stagger: opts.type !== 'heavy' })) {
        hits++;
        this.player.stats.damageDealt += finalDamage;
      }
    }
    if (this.boss && !this.boss.dead && this.boss.engaged && !this.boss.introLock) {
      const d = dist2D(position, this.boss.position);
      if (d <= range + this.boss.radius) {
        const angleTo = Math.atan2(this.boss.position.x - position.x, this.boss.position.z - position.z);
        if (arc >= Math.PI * 1.9 || Math.abs(angleDelta(facing, angleTo)) <= arc / 2 + 0.2) {
          const finalDamage = damage * rand(0.92, 1.08);
          if (this.boss.takeDamage(finalDamage, { heavy: opts.type === 'heavy' })) {
            hits++;
            this.player.stats.damageDealt += finalDamage;
          }
        }
      }
    }
    return hits;
  }

  immobilizeEnemies(position, radius, duration) {
    let count = 0;
    for (const enemy of this.enemies) {
      if (!enemy.alive) continue;
      if (dist2D(position, enemy.position) <= radius) {
        if (enemy.freeze(duration)) count++;
      }
    }
    if (this.boss && this.boss.engaged && !this.boss.dead && dist2D(position, this.boss.position) <= radius + 1.2) {
      if (this.boss.freeze(duration)) count++;
    }
    return count;
  }

  spawnProjectile(opts) {
    this.projectiles.push(new Projectile(this, opts));
  }

  spawnMinion(position, kind) {
    const role = Math.random() < 0.35 ? 'ranged' : 'melee';
    const spawn = { kind, role, x: position.x, z: position.z };
    const enemy = new Enemy(this, spawn, { summoned: true });
    enemy.aggro = true;
    enemy.state = 'chase';
    this.enemies.push(enemy);
    this.world.spawnRing(position.clone(), 0x9c7dc4, 0.7);
    return enemy;
  }

  onEnemyKilled(enemy, silent = false) {
    if (!enemy.summoned) this.kills++;
    this.save.kills = (this.save.kills ?? 0) + 1;
    this.addCoins(enemy.coins);
    this.player.addFocus(0.06);
    if (!silent) {
      this.audio.sfx('coin');
      this.world.spawnSparks(enemy.position.clone().add(new THREE.Vector3(0, 1, 0)), 0xffd37a, 8);
    }
    if (this.ui) this.ui.updateHud(this.hudPayload(), true);
  }

  addCoins(amount) {
    this.save.coins = (this.save.coins ?? 0) + amount;
    this.ui.coinGain?.(amount);
  }

  onPlayerDeath() {
    if (this.deathHandled) return;
    this.deathHandled = true;
    this.active = false;
    this.input.setEnabled(false);
    this.input.setBlocked(true);
    this.save.deaths = (this.save.deaths ?? 0) + 1;
    writeSave(this.save);
    this.audio.playMusic('none');
    this.audio.sfx('death');
    this.ui.setHudVisible(false);
    this.ui.hideBossBar();
    this.ui.clearInteractPrompt();
    this.slowMotion(0.2, 1.4);
    this.cameraRig.shake(0.5, 0.5);
    const token = this.generation;
    setTimeout(async () => {
      if (token !== this.generation) return;
      const quote = DEATH_QUOTES[Math.floor(Math.random() * DEATH_QUOTES.length)];
      const choice = await this.ui.deathScreen({
        quote,
        chapter: this.chapter,
        stats: {
          time: Math.round(this.time),
          kills: this.kills,
          damage: Math.round(this.player.stats.damageDealt),
          perfect: this.player.stats.perfectDodges,
        },
      });
      if (token !== this.generation) return;
      if (choice === 'retry') this.app.retryChapter();
      else this.app.returnToMenu();
    }, 1300);
  }

  hitStop(seconds) {
    this.hitStopTimer = Math.max(this.hitStopTimer, seconds);
  }

  slowMotion(scale, duration) {
    this.slowScale = scale;
    this.slowTimer = duration;
  }

  hudPayload() {
    const p = this.player;
    return {
      hp: Math.max(0, Math.ceil(p.hp)),
      maxHp: Math.ceil(p.maxHp),
      stamina: Math.max(0, Math.ceil(p.stamina)),
      maxStamina: p.maxStamina,
      mana: Math.max(0, Math.ceil(p.mana)),
      maxMana: p.maxMana,
      focus: p.focus,
      maxFocus: p.maxFocus,
      gourd: p.gourd,
      maxGourd: p.maxGourd,
      coins: this.save.coins,
      relics: this.save.relics.length,
      chapter: this.chapter,
      objective: this.objectiveText,
      objectiveProgress: this.objectiveProgress,
      skillCd: p.cooldownSkill,
      healCd: p.cooldownHeal,
      time: this.time,
      challenge: this.chapter.isFinal ? '终回' : this.chapter.chapterLabel,
      playerX: p.position.x,
      playerZ: p.position.z,
      objectivePos: this.arrowTarget || this.world?.objectiveTarget,
      cameraYaw: this.cameraRig?.yaw ?? 0,
    };
  }

  updateHud(force = false) {
    this.hudTimer -= 1 / 60;
    if (!force && this.hudTimer > 0) return;
    this.hudTimer = 0.08;
    this.ui.updateHud(this.hudPayload(), force);
  }

  debugClearEnemies() {
    for (const enemy of [...this.enemies]) {
      if (!enemy.summoned) {
        enemy.hp = 0;
        enemy.die(true);
        enemy.remove();
      }
    }
    this.kills = this.requiredKills;
    this.openGate();
  }

  debugTeleportToBoss() {
    if (!this.gateOpen) this.openGate();
    this.player.position.set(0, 0, -13.6);
    if (this.phase === 'boss' || this.phase === 'bossIntro') return;
    if (this.boss && !this.boss.dead) this.boss.hp = Math.min(this.boss.hp, 1);
    if (this.boss) this.boss.takeDamage(9999, { heavy: true });
  }

  debugKillBoss() {
    if (this.boss && !this.boss.dead) {
      this.boss.hp = 1;
      this.boss.takeDamage(9999, { heavy: true });
    }
  }

  debugSkipBossIntro() {
    if (this.boss) this.boss.engage();
  }

  disposeCurrent() {
    if (this.world) {
      this.player?.slashes?.forEach((s) => {
        this.world.scene.remove(s.mesh);
        s.mesh.geometry.dispose();
        s.mesh.material.dispose();
      });
      for (const p of this.projectiles) p.destroy();
      this.world.dispose();
    }
    this.world = null;
    this.player = null;
    this.cameraRig = null;
    this.enemies = [];
    this.projectiles = [];
    this.boss = null;
    this.relic = null;
    this.interactTarget = null;
    this.ui?.hideBossBar();
    this.ui?.setHudVisible(false);
    this.ui?.clearInteractPrompt();
  }

  dispose() {
    this.disposed = true;
    this.generation++;
    this.active = false;
    this.input?.setEnabled(false);
    this.disposeCurrent();
    this.audio?.playMusic('none');
  }
}
