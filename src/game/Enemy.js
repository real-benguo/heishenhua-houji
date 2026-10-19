import * as THREE from 'three';
import { angleLerp, clamp, dist2D, rand } from '../core/utils.js';
import { makeBoss, makeHitRing, makeMob, material, mesh, optimizeModel } from '../world/models.js';

const ROLE_STATS = {
  melee: { hp: 1, damage: 1, speed: 2.7, range: 2.35, cooldown: 1.8, radius: 0.56 },
  ranged: { hp: 0.72, damage: 0.8, speed: 2.2, range: 10, cooldown: 2.6, radius: 0.54 },
  bomber: { hp: 0.62, damage: 1.35, speed: 4.0, range: 2.6, cooldown: 2.3, radius: 0.5 },
};

export class Enemy {
  constructor(game, spawn, opts = {}) {
    this.game = game;
    this.world = game.world;
    this.spawn = spawn;
    this.kind = spawn.kind || 'anxious';
    this.role = spawn.role || 'melee';
    this.summoned = !!opts.summoned;
    this.model = makeMob(this.kind, this.world.theme);
    optimizeModel(this.model);
    this.model.position.set(spawn.x, 0, spawn.z);
    this.model.rotation.y = rand(0, Math.PI * 2);
    this.world.scene.add(this.model);
    this.rig = this.model.userData.rig;
    this.position = this.model.position;
    this.radius = ROLE_STATS[this.role].radius;
    const chapter = this.game.chapter.index;
    const baseHp = 44 + chapter * 10;
    this.maxHp = Math.round(baseHp * ROLE_STATS[this.role].hp * this.game.difficulty.enemyHp);
    this.hp = this.maxHp;
    this.baseDamage = (7.5 + chapter * 1.65) * ROLE_STATS[this.role].damage * this.game.difficulty.enemyDamage;
    this.speed = ROLE_STATS[this.role].speed * (this.game.difficulty.id === 'hard' ? 1.1 : 1);
    this.attackRange = ROLE_STATS[this.role].range;
    this.attackCooldownMax = ROLE_STATS[this.role].cooldown;
    this.attackCooldown = rand(0.4, 1.8);
    this.state = 'idle';
    this.stateTime = 0;
    this.frozen = 0;
    this.hitFlash = 0;
    this.dead = false;
    this.deathTime = 0;
    this.aggro = false;
    this.wanderAngle = rand(0, Math.PI * 2);
    this.wanderTimer = rand(1, 4);
    this.knockback = new THREE.Vector3();
    this.telegraph = null;
    this.freezeFx = null;
    this.walkPhase = rand(0, 10);
    this.spawnedAt = this.game.time;
    this.hitMaterials = [];
    this.flashMesh = mesh(this.model, new THREE.IcosahedronGeometry(0.86, 1), new THREE.MeshBasicMaterial({ color: 0xffd9a0, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }), [0, 0.9, 0]);
    this.flashMesh.castShadow = false;
    this.flashMesh.visible = false;
    this.coins = Math.round(8 + chapter * 4 + (this.role === 'bomber' ? 4 : 0));
  }

  get alive() {
    return !this.dead;
  }

  update(dt) {
    if (this.dead) {
      this.deathTime += dt;
      const k = clamp(this.deathTime / 1.1, 0, 1);
      this.model.scale.setScalar(1 - k * 0.55);
      this.model.rotation.z = k * 1.2;
      this.model.position.y = -k * 0.6;
      if (this.deathTime > 1.3) this.remove();
      return;
    }
    this.stateTime += dt;
    this.attackCooldown -= dt;
    this.hitFlash = Math.max(0, this.hitFlash - dt * 5);
    this.flashMesh.visible = this.hitFlash > 0.01;
    this.flashMesh.material.opacity = this.hitFlash * 0.25;
    if (this.frozen > 0) {
      this.frozen -= dt;
      if (this.freezeFx) {
        this.freezeFx.rotation.y += dt * 0.7;
        this.freezeFx.material.opacity = 0.16 + Math.sin(this.game.time * 4) * 0.04;
      }
      if (this.frozen <= 0) this.unfreeze();
      this.animateFrozen(dt);
      return;
    }

    const p = this.game.player;
    if (!p || !p.alive) return;
    const distance = dist2D(this.position, p.position);
    if (!this.aggro && distance < 11.5) {
      this.aggro = true;
      this.state = 'chase';
    }

    this.knockback.multiplyScalar(Math.exp(-10 * dt));
    this.position.addScaledVector(this.knockback, dt);

    if (this.state === 'hit') {
      if (this.stateTime > 0.22) {
        this.state = this.aggro ? 'chase' : 'idle';
        this.stateTime = 0;
      }
    } else if (this.state === 'windup') {
      this.faceTarget(p.position.x, p.position.z, dt, 5);
      this.updateTelegraph(dt);
      const windup = this.role === 'bomber' ? 0.95 : this.role === 'ranged' ? 0.62 : 0.5;
      if (this.stateTime >= windup) {
        this.executeAttack();
      }
    } else if (this.state === 'recover') {
      if (this.stateTime > 0.5) {
        this.state = 'chase';
        this.stateTime = 0;
      }
    } else if (this.aggro) {
      this.updateCombat(dt, distance, p);
    } else {
      this.updateWander(dt);
    }

    this.world.resolveCollision(this.position, this.radius);
    this.separate();
    this.animate(dt);
  }

  updateWander(dt) {
    this.wanderTimer -= dt;
    if (this.wanderTimer <= 0) {
      this.wanderTimer = rand(2, 5);
      this.wanderAngle = rand(0, Math.PI * 2);
    }
    if (this.wanderTimer > 2.4) {
      const dx = Math.cos(this.wanderAngle) * this.speed * 0.3 * dt;
      const dz = Math.sin(this.wanderAngle) * this.speed * 0.3 * dt;
      this.position.x += dx;
      this.position.z += dz;
      this.model.rotation.y = angleLerp(this.model.rotation.y, this.wanderAngle, dt * 3);
    }
  }

  updateCombat(dt, distance, player) {
    if (this.role === 'ranged') {
      this.faceTarget(player.position.x, player.position.z, dt, 6);
      if (distance > 9.5) {
        this.moveToward(player.position, this.speed * 0.75, dt);
      } else if (distance < 5.5) {
        this.moveAway(player.position, this.speed * 0.8, dt);
      }
      if (this.attackCooldown <= 0 && distance < 12) {
        this.startWindup();
      }
    } else if (this.role === 'bomber') {
      this.faceTarget(player.position.x, player.position.z, dt, 7);
      if (distance > 2.4) this.moveToward(player.position, this.speed, dt);
      if (distance < 4.2 && this.attackCooldown <= 0) this.startWindup();
    } else {
      this.faceTarget(player.position.x, player.position.z, dt, 6);
      if (distance > this.attackRange - 0.3) {
        this.moveToward(player.position, this.speed, dt);
      }
      if (distance < this.attackRange + 0.5 && this.attackCooldown <= 0) {
        this.startWindup();
      }
    }
  }

  moveToward(target, speed, dt) {
    const dx = target.x - this.position.x;
    const dz = target.z - this.position.z;
    const len = Math.hypot(dx, dz) || 1;
    this.position.x += (dx / len) * speed * dt;
    this.position.z += (dz / len) * speed * dt;
  }

  moveAway(target, speed, dt) {
    const dx = this.position.x - target.x;
    const dz = this.position.z - target.z;
    const len = Math.hypot(dx, dz) || 1;
    this.position.x += (dx / len) * speed * dt;
    this.position.z += (dz / len) * speed * dt;
  }

  faceTarget(x, z, dt, speed = 5) {
    const targetYaw = Math.atan2(x - this.position.x, z - this.position.z);
    this.model.rotation.y = angleLerp(this.model.rotation.y, targetYaw, 1 - Math.exp(-speed * dt));
  }

  startWindup() {
    this.state = 'windup';
    this.stateTime = 0;
    if (this.role === 'melee' || this.role === 'bomber') {
      const radius = this.role === 'bomber' ? 4.8 : 2.8;
      this.telegraph = this.makeTelegraph(this.position, radius, this.role === 'bomber' ? 0.95 : 0.5, this.role === 'bomber' ? 0xff5638 : 0xe3a243);
    }
    if (this.role === 'ranged') {
      this.game.audio.sfx('swing');
    }
  }

  makeTelegraph(position, radius, duration, color = 0xffb04a) {
    const group = new THREE.Group();
    const ring = makeHitRing(color);
    ring.scale.setScalar(radius);
    group.add(ring);
    const disc = new THREE.Mesh(
      new THREE.CircleGeometry(radius, 24),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.1, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending })
    );
    disc.rotation.x = -Math.PI / 2;
    disc.position.y = 0.02;
    group.add(disc);
    group.position.set(position.x, 0.05, position.z);
    this.world.scene.add(group);
    return { group, ring, disc, age: 0, duration, radius, color };
  }

  updateTelegraph(dt) {
    if (!this.telegraph) return;
    this.telegraph.age += dt;
    const pulse = 1 + Math.sin(this.game.time * 14) * 0.04;
    this.telegraph.ring.scale.setScalar(this.telegraph.radius * pulse);
    this.telegraph.disc.material.opacity = 0.05 + Math.min(1, this.telegraph.age / this.telegraph.duration) * 0.12;
  }

  clearTelegraph() {
    if (!this.telegraph) return;
    this.world.scene.remove(this.telegraph.group);
    this.telegraph.group.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) o.material.dispose();
    });
    this.telegraph = null;
  }

  executeAttack() {
    const player = this.game.player;
    if (!player || !player.alive) return;
    const dist = dist2D(this.position, player.position);
    this.clearTelegraph();
    if (this.role === 'bomber') {
      this.game.world.spawnShockwave(this.position.clone(), 0xff6b36);
      this.game.world.spawnSparks(this.position.clone().add(new THREE.Vector3(0, 0.8, 0)), 0xff7b42, 26);
      this.game.cameraRig.shake(0.5, 0.3);
      this.game.audio.sfx('bossSlam');
      if (dist < 4.8) player.takeDamage(this.baseDamage * 1.25, this.position, { explode: true });
      this.die(true);
      return;
    }
    if (this.role === 'ranged') {
      const origin = this.position.clone().add(new THREE.Vector3(0, 1.4, 0));
      const target = player.position.clone().add(new THREE.Vector3(0, 1.2, 0));
      const dir = new THREE.Vector3().subVectors(target, origin).normalize();
      this.game.spawnProjectile({
        position: origin,
        velocity: dir.multiplyScalar(12),
        damage: this.baseDamage,
        kind: this.projectileKind(),
        owner: this,
      });
      this.attackCooldown = this.attackCooldownMax;
      this.state = 'recover';
      this.stateTime = 0;
      this.game.audio.sfx('swing');
      return;
    }
    this.game.audio.sfx('swing');
    if (dist < 3.1) {
      player.takeDamage(this.baseDamage, this.position);
    }
    this.game.world.spawnSparks(this.position.clone().add(new THREE.Vector3(0, 1, 0)), 0xe2b26a, 8);
    this.attackCooldown = this.attackCooldownMax;
    this.state = 'recover';
    this.stateTime = 0;
  }

  projectileKind() {
    if (this.kind === 'resume') return 'resume';
    if (this.kind === 'takeout') return 'takeout';
    if (this.kind === 'snowman') return 'snow';
    if (this.kind === 'spider') return 'tag';
    if (this.kind === 'ash') return 'fire';
    if (this.kind === 'clerk') return 'ink';
    return 'banana';
  }

  separate() {
    for (const other of this.game.enemies) {
      if (other === this || !other.alive) continue;
      const dx = this.position.x - other.position.x;
      const dz = this.position.z - other.position.z;
      const d = Math.hypot(dx, dz);
      const min = this.radius + other.radius;
      if (d < min && d > 0.001) {
        const push = (min - d) * 0.3;
        this.position.x += (dx / d) * push;
        this.position.z += (dz / d) * push;
      }
    }
  }

  takeDamage(amount, opts = {}) {
    if (this.dead) return false;
    if (this.state === 'intro') return false;
    this.hp -= amount;
    this.hitFlash = 1;
    this.game.audio.sfx(opts.heavy ? 'heavyHit' : 'hit');
    this.game.world.spawnSparks(this.position.clone().add(new THREE.Vector3(0, 1.1, 0)), opts.heavy ? 0xffd26a : 0xf6c48a, opts.heavy ? 18 : 7);
    this.game.ui.damageNumber(this.position.clone().add(new THREE.Vector3(0, 1.8, 0)), Math.round(amount), opts.heavy ? 'heavy' : 'enemy');
    if (opts.knockback) {
      const dir = new THREE.Vector3().subVectors(this.position, opts.from || this.game.player.position).normalize();
      this.knockback.copy(dir).multiplyScalar(opts.knockback);
    }
    if (this.hp <= 0) {
      this.die();
    } else if (opts.stagger !== false) {
      this.state = 'hit';
      this.stateTime = 0;
      this.clearTelegraph();
    }
    return true;
  }

  freeze(duration = 2.5) {
    if (this.dead) return false;
    this.frozen = Math.max(this.frozen, duration);
    this.state = 'idle';
    this.stateTime = 0;
    this.clearTelegraph();
    if (!this.freezeFx) {
      this.freezeFx = mesh(
        this.model,
        new THREE.IcosahedronGeometry(0.95, 0),
        new THREE.MeshBasicMaterial({ color: 0x9fe8ff, transparent: true, opacity: 0.2, depthWrite: false, blending: THREE.AdditiveBlending }),
        [0, 0.9, 0]
      );
      this.freezeFx.castShadow = false;
    }
    this.freezeFx.visible = true;
    this.game.world.spawnRing(this.position.clone(), 0x9fe8ff, 0.8);
    return true;
  }

  unfreeze() {
    if (this.freezeFx) this.freezeFx.visible = false;
    this.game.world.spawnSparks(this.position.clone().add(new THREE.Vector3(0, 1, 0)), 0x9fe8ff, 8);
  }

  die(silent = false) {
    if (this.dead) return;
    this.dead = true;
    this.deathTime = 0;
    this.clearTelegraph();
    this.game.onEnemyKilled(this, silent);
    if (!silent) this.game.audio.sfx('hit');
  }

  remove() {
    if (this.removed) return;
    this.removed = true;
    this.world.scene.remove(this.model);
    this.model.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
    });
    const index = this.game.enemies.indexOf(this);
    if (index !== -1) this.game.enemies.splice(index, 1);
  }

  animate(dt) {
    const rig = this.rig;
    if (!rig) return;
    const t = this.game.time + this.walkPhase;
    const moving = this.state === 'chase';
    const stride = moving ? Math.sin(t * 9) : 0;
    if (rig.body) rig.body.position.y = (rig.body.userData.baseY ?? rig.body.position.y);
    if (rig.body) rig.body.position.y = 0.68 + Math.abs(Math.sin(t * 9)) * (moving ? 0.05 : 0.01);
    if (rig.head) {
      rig.head.rotation.y = Math.sin(t * 0.8) * 0.05;
      rig.head.rotation.x = this.state === 'windup' ? -0.2 : 0;
    }
    if (rig.arms) {
      rig.arms.left.rotation.x = stride * 0.5;
      rig.arms.right.rotation.x = -stride * 0.5;
      if (this.state === 'windup') {
        rig.arms.left.rotation.x = -2.2;
        rig.arms.right.rotation.x = -2.2;
      }
    }
    if (rig.legs) {
      rig.legs.left.rotation.x = -stride * 0.65;
      rig.legs.right.rotation.x = stride * 0.65;
    }
    if (this.role === 'bomber' && this.state === 'windup') {
      const p = clamp(this.stateTime / 0.95, 0, 1);
      this.model.scale.setScalar(1 + p * 0.18);
      const flash = Math.sin(this.game.time * 26) > 0;
      this.flashMesh.visible = flash;
      this.flashMesh.material.opacity = 0.3;
    } else if (!this.dead) {
      this.model.scale.lerp(new THREE.Vector3(1, 1, 1), dt * 8);
    }
  }

  animateFrozen(dt) {
    if (this.rig?.head) this.rig.head.rotation.z = Math.sin(this.game.time * 3) * 0.02;
  }
}

const BOSS_MOVES = {
  rock: [
    { id: 'slam', name: '停车牌压制', type: 'slam', radius: 4.2, delay: 0.85, damage: 1.1, range: 22 },
    { id: 'fan', name: '石子三连', type: 'fan', count: 5, spread: 0.9, delay: 0.55, damage: 0.7, range: 26 },
    { id: 'dash', name: '保安冲刺', type: 'dash', delay: 0.55, damage: 1.0, range: 22 },
  ],
  bear: [
    { id: 'slam', name: '已读不回', type: 'slam', radius: 5.0, delay: 0.95, damage: 1.15, range: 20 },
    { id: 'fan', name: '简历风暴', type: 'fan', count: 7, spread: 1.35, delay: 0.65, damage: 0.7, range: 26 },
    { id: 'dash', name: '面试冲刺', type: 'dash', delay: 0.6, damage: 1.05, range: 24 },
    { id: 'summon', name: '叫两个同事', type: 'summon', delay: 0.8, damage: 0, count: 2, range: 30 },
  ],
  rat: [
    { id: 'fan', name: '差评狂风', type: 'fan', count: 9, spread: 1.9, delay: 0.65, damage: 0.68, range: 28 },
    { id: 'rain', name: '外卖雨', type: 'rain', count: 7, delay: 0.9, damage: 0.8, range: 30 },
    { id: 'dash', name: '电瓶车冲锋', type: 'dash', delay: 0.52, damage: 1.1, range: 26 },
  ],
  yellowbrow: [
    { id: 'slam', name: '金铙扣头', type: 'slam', radius: 5.4, delay: 0.95, damage: 1.2, range: 24 },
    { id: 'rings', name: '格局打开', type: 'rings', count: 12, delay: 0.8, damage: 0.65, range: 30 },
    { id: 'rain', name: 'PPT 暴雨', type: 'rain', count: 9, delay: 0.8, damage: 0.75, range: 34 },
    { id: 'summon', name: '优秀学员', type: 'summon', delay: 0.9, damage: 0, count: 2, range: 32 },
  ],
  hundredEyes: [
    { id: 'fan', name: '家人们冲', type: 'fan', count: 11, spread: 2.2, delay: 0.7, damage: 0.62, range: 30 },
    { id: 'rings', name: '全网最低价', type: 'rings', count: 16, delay: 0.8, damage: 0.7, range: 32 },
    { id: 'rain', name: '退款雨', type: 'rain', count: 10, delay: 0.85, damage: 0.8, range: 34 },
    { id: 'slam', name: '补光灯砸脸', type: 'slam', radius: 5.0, delay: 0.9, damage: 1.2, range: 24 },
  ],
  redboy: [
    { id: 'slam', name: '三昧烤串', type: 'slam', radius: 5.6, delay: 0.95, damage: 1.25, range: 24 },
    { id: 'rain', name: '天降孜然', type: 'rain', count: 10, delay: 0.85, damage: 0.82, range: 34 },
    { id: 'dash', name: '熊孩子冲撞', type: 'dash', delay: 0.48, damage: 1.15, range: 26 },
    { id: 'rings', name: '全场免单', type: 'rings', count: 14, delay: 0.8, damage: 0.7, range: 30 },
  ],
  sixear: [
    { id: 'combo', name: '真假猴王·三连', type: 'combo', delay: 0.55, damage: 1.0, range: 26 },
    { id: 'rings', name: '六耳回响', type: 'rings', count: 18, delay: 0.7, damage: 0.72, range: 32 },
    { id: 'rain', name: '外包调令', type: 'rain', count: 12, delay: 0.75, damage: 0.8, range: 38 },
    { id: 'summon', name: '临时工支援', type: 'summon', delay: 0.8, damage: 0, count: 3, range: 34 },
  ],
};

export class Boss {
  constructor(game) {
    this.game = game;
    this.world = game.world;
    this.def = game.chapter.boss;
    this.model = makeBoss(this.def.type, this.world.theme);
    optimizeModel(this.model);
    const bossScales = { rock: 1.55, bear: 1.35, rat: 1.3, yellowbrow: 1.28, hundredEyes: 1.24, redboy: 1.46, sixear: 1.2 };
    this.model.scale.setScalar(bossScales[this.def.type] ?? 1.1);
    this.model.position.copy(this.world.bossPoint);
    this.model.position.y = 0;
    this.model.rotation.y = 0;
    this.world.scene.add(this.model);
    this.rig = this.model.userData.rig;
    this.position = this.model.position;
    this.radius = this.def.type === 'rock' ? 1.2 : 1.45;
    this.maxHp = Math.round(this.def.hp * game.difficulty.enemyHp);
    this.hp = this.maxHp;
    this.baseDamage = this.def.damage * game.difficulty.enemyDamage;
    this.state = 'dormant';
    this.stateTime = 0;
    this.moveCooldown = 1.1;
    this.currentMove = null;
    this.moveTime = 0;
    this.phase = 1;
    this.dead = false;
    this.frozen = 0;
    this.freezeFx = null;
    this.hitFlash = 0;
    this.flashMesh = mesh(this.model, new THREE.IcosahedronGeometry(this.def.type === 'sixear' ? 2.2 : 1.6, 1), new THREE.MeshBasicMaterial({ color: 0xffe3a3, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }), [0, 1.7, 0]);
    this.flashMesh.castShadow = false;
    this.flashMesh.visible = false;
    this.moves = BOSS_MOVES[this.def.type] || BOSS_MOVES.bear;
    this.moveIndex = 0;
    this.telegraphs = [];
    this.comboCount = 0;
    this.summoned = [];
    this.deathTime = 0;
    this.name = this.def.name;
    this.title = this.def.title;
    this.engaged = false;
    this.introLock = true;
  }

  engage() {
    this.state = 'idle';
    this.engaged = true;
    this.introLock = false;
    this.model.rotation.y = Math.PI;
    this.game.audio.sfx('roar');
    this.game.ui.showBossBar(this.name, this.title, 1);
  }

  release() {
    this.introLock = false;
  }

  update(dt) {
    if (this.dead) {
      this.deathTime += dt;
      const k = clamp(this.deathTime / 2.2, 0, 1);
      this.model.rotation.z = k * 0.7;
      this.model.position.y = -k * 0.7;
      if (this.deathTime > 2.4 && !this.removed) {
        this.removed = true;
        this.world.scene.remove(this.model);
      }
      return;
    }
    if (!this.engaged) return;
    this.stateTime += dt;
    this.moveTime += dt;
    this.moveCooldown -= dt;
    this.hitFlash = Math.max(0, this.hitFlash - dt * 5);
    this.flashMesh.visible = this.hitFlash > 0.02;
    this.flashMesh.material.opacity = this.hitFlash * 0.2;
    if (this.frozen > 0) {
      this.frozen -= dt;
      if (this.freezeFx) this.freezeFx.rotation.y += dt * 0.5;
      if (this.frozen <= 0 && this.freezeFx) this.freezeFx.visible = false;
      this.animateFrozen(dt);
      return;
    }
    const player = this.game.player;
    if (!player || !player.alive) return;
    if (this.hp / this.maxHp < 0.5 && this.phase === 1) this.enterPhaseTwo();
    if (this.state === 'stagger') {
      if (this.stateTime > 0.45) {
        this.state = 'idle';
        this.stateTime = 0;
      }
    } else if (this.state === 'idle') {
      const dist = dist2D(this.position, player.position);
      this.faceTarget(player.position.x, player.position.z, dt, 4);
      if (dist > 4.6) this.moveToward(player.position, this.phase === 2 ? 3.5 : 2.8, dt);
      if (this.moveCooldown <= 0) {
        this.startMove(dist);
      }
    } else if (this.state === 'move') {
      this.updateMove(dt);
    }
    this.world.resolveCollision(this.position, this.radius * 0.6);
    this.updateTelegraphs(dt);
    this.animate(dt);
  }

  faceTarget(x, z, dt, speed = 4) {
    const yaw = Math.atan2(x - this.position.x, z - this.position.z);
    this.model.rotation.y = angleLerp(this.model.rotation.y, yaw, 1 - Math.exp(-speed * dt));
  }

  moveToward(target, speed, dt) {
    const dx = target.x - this.position.x;
    const dz = target.z - this.position.z;
    const len = Math.hypot(dx, dz) || 1;
    this.position.x += (dx / len) * speed * dt;
    this.position.z += (dz / len) * speed * dt;
  }

  startMove(dist) {
    const available = this.moves.filter((m) => dist < m.range);
    if (!available.length) return;
    let move = available[this.moveIndex % available.length];
    this.moveIndex++;
    if (this.phase === 2 && Math.random() < 0.4) {
      move = available[Math.floor(Math.random() * available.length)];
    }
    this.currentMove = move;
    this.state = 'move';
    this.stateTime = 0;
    this.moveTime = 0;
    this.moveDone = false;
    this.moveApplied = false;
    this.moveTarget = this.game.player.position.clone();
    this.moveDir = new THREE.Vector3().subVectors(this.game.player.position, this.position).setY(0).normalize();
    this.game.ui.bossMove(`${this.name}使出了「${move.name}」`);
    this.game.audio.sfx(move.type === 'slam' ? 'bossSlam' : 'roar');
    if (move.type === 'slam') {
      const radius = move.radius * (this.phase === 2 ? 1.15 : 1);
      const target = this.game.player.position.clone();
      this.addTelegraph(target, radius, move.delay, 0xff6e45);
    } else if (move.type === 'dash') {
      this.addDashTelegraph(this.moveDir, move.delay, 12);
    } else if (move.type === 'rain') {
      const target = this.game.player.position.clone();
      this.addTelegraph(target, 7.5, move.delay, 0xffb04a);
    }
  }

  updateMove(dt) {
    const move = this.currentMove;
    if (!move) {
      this.state = 'idle';
      return;
    }
    if (move.type === 'slam') {
      const jump = Math.sin(clamp(this.moveTime / move.delay, 0, 1) * Math.PI);
      this.model.position.y = jump * 1.2;
      if (this.moveTime >= move.delay && !this.moveApplied) {
        this.moveApplied = true;
        this.applySlam(move);
      }
      if (this.moveTime >= move.delay + 0.75) this.endMove();
    } else if (move.type === 'fan') {
      if (this.moveTime >= move.delay && !this.moveApplied) {
        this.moveApplied = true;
        this.applyFan(move);
      }
      if (this.moveTime >= move.delay + 0.8) this.endMove();
    } else if (move.type === 'dash') {
      if (this.moveTime >= move.delay && !this.moveApplied) {
        this.moveApplied = true;
        this.chargeDir = this.moveDir.clone();
        this.game.audio.sfx('swing');
      }
      if (this.moveApplied && this.moveTime < move.delay + 0.42) {
        const speed = 24 * (this.phase === 2 ? 1.2 : 1);
        this.position.addScaledVector(this.chargeDir, speed * dt);
        this.world.spawnSparks(this.position.clone().add(new THREE.Vector3(0, 0.8, 0)), 0xd9b57c, 2);
        if (!this.dashHit && dist2D(this.position, this.game.player.position) < 2.5) {
          this.dashHit = true;
          this.game.player.takeDamage(this.baseDamage * move.damage, this.position);
        }
      }
      if (this.moveTime >= move.delay + 0.85) {
        this.dashHit = false;
        this.endMove();
      }
    } else if (move.type === 'rain') {
      if (this.moveTime >= move.delay && !this.moveApplied) {
        this.moveApplied = true;
        this.applyRain(move);
      }
      if (this.moveTime >= move.delay + 0.8) this.endMove();
    } else if (move.type === 'rings') {
      if (this.moveTime >= move.delay && !this.moveApplied) {
        this.moveApplied = true;
        this.applyRings(move);
      }
      if (this.moveTime >= move.delay + 0.7) this.endMove();
    } else if (move.type === 'summon') {
      if (this.moveTime >= move.delay && !this.moveApplied) {
        this.moveApplied = true;
        this.applySummon(move);
      }
      if (this.moveTime >= move.delay + 0.9) this.endMove();
    } else if (move.type === 'combo') {
      this.updateCombo(dt, move);
    }
  }

  endMove() {
    this.model.position.y = 0;
    this.state = 'idle';
    this.stateTime = 0;
    this.moveCooldown = this.phase === 2 ? 0.7 : 1.1;
    this.currentMove = null;
    this.clearTelegraphs();
  }

  applySlam(move) {
    const player = this.game.player;
    const target = this.moveTarget || player.position;
    const radius = move.radius * (this.phase === 2 ? 1.15 : 1);
    this.world.spawnShockwave(target.clone(), 0xf0b15a);
    this.world.spawnRing(target.clone(), 0xffd06e, 2);
    this.world.spawnSparks(target.clone().add(new THREE.Vector3(0, 0.4, 0)), 0xffc46a, 26);
    this.game.cameraRig.shake(0.6, 0.35);
    this.game.audio.sfx('bossSlam');
    if (dist2D(target, player.position) < radius + 0.7) {
      player.takeDamage(this.baseDamage * move.damage, target);
    }
    this.model.position.y = 0;
  }

  applyFan(move) {
    const player = this.game.player;
    const forward = new THREE.Vector3().subVectors(player.position, this.position).setY(0).normalize();
    const baseAngle = Math.atan2(forward.x, forward.z);
    const count = move.count + (this.phase === 2 ? 2 : 0);
    for (let i = 0; i < count; i++) {
      const t = count === 1 ? 0.5 : i / (count - 1);
      const angle = baseAngle - move.spread / 2 + t * move.spread;
      const speed = 14;
      this.game.spawnProjectile({
        position: this.position.clone().add(new THREE.Vector3(0, 1.45, 0)),
        velocity: new THREE.Vector3(Math.sin(angle) * speed, 0.5, Math.cos(angle) * speed),
        damage: this.baseDamage * move.damage,
        kind: this.projectileKind(),
        owner: this,
      });
    }
    this.game.world.spawnSparks(this.position.clone().add(new THREE.Vector3(0, 1.6, 0)), 0xe1b258, 16);
  }

  applyRain(move) {
    const player = this.game.player;
    const count = move.count + (this.phase === 2 ? 3 : 0);
    for (let i = 0; i < count; i++) {
      const angle = rand(0, Math.PI * 2);
      const radius = rand(0, 6);
      const target = player.position.clone().add(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
      this.game.spawnProjectile({
        position: target.clone().add(new THREE.Vector3(0, 12 + i * 0.2, 0)),
        velocity: new THREE.Vector3(rand(-0.4, 0.4), -4.5, rand(-0.4, 0.4)),
        damage: this.baseDamage * move.damage,
        kind: this.projectileKind(),
        owner: this,
        gravity: 8,
        life: 4,
        radius: 1.0,
      });
    }
    this.world.spawnRing(player.position.clone(), 0xffb04a, 2.3);
  }

  applyRings(move) {
    const count = move.count + (this.phase === 2 ? 4 : 0);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + this.game.time * 0.2;
      this.game.spawnProjectile({
        position: this.position.clone().add(new THREE.Vector3(0, 1.2, 0)),
        velocity: new THREE.Vector3(Math.sin(angle) * 9, 0.2, Math.cos(angle) * 9),
        damage: this.baseDamage * move.damage,
        kind: this.projectileKind(),
        owner: this,
        life: 2.4,
      });
    }
    this.world.spawnShockwave(this.position.clone(), 0xffc05e);
    this.game.cameraRig.shake(0.25, 0.2);
  }

  applySummon(move) {
    for (let i = 0; i < move.count; i++) {
      const angle = (i / move.count) * Math.PI * 2;
      const position = this.position.clone().add(new THREE.Vector3(Math.cos(angle) * 4.5, 0, Math.sin(angle) * 4.5));
      const enemy = this.game.spawnMinion(position, this.chapterEnemyKind());
      this.summoned.push(enemy);
    }
    this.world.spawnShockwave(this.position.clone(), 0x8f73b8);
    this.game.ui.bossMove(`${this.name}叫来了 ${move.count} 个同事。`);
  }

  chapterEnemyKind() {
    return this.game.chapter.enemies?.[0]?.kind || 'clerk';
  }

  updateCombo(dt, move) {
    const stepTime = move.delay;
    const total = stepTime * 3 + 0.6;
    this.comboCount = Math.min(3, Math.floor(this.moveTime / stepTime) + 1);
    const local = (this.moveTime % stepTime) / stepTime;
    if (this.moveTime >= (this.comboCount - 1) * stepTime + stepTime * 0.6 && !this['comboHit' + this.comboCount]) {
      this['comboHit' + this.comboCount] = true;
      const dash = 4.0;
      this.position.addScaledVector(this.moveDir, 1.4);
      this.game.world.spawnSlashEffect?.(this.position.clone().add(new THREE.Vector3(0, 1.1, 0)), 0x9e7bff, 2.2);
      this.game.world.spawnSparks(this.position.clone().add(new THREE.Vector3(0, 1.2, 0)), 0xb493ff, 10);
      if (dist2D(this.position, this.game.player.position) < 3.4) {
        this.game.player.takeDamage(this.baseDamage * move.damage * 0.8, this.position);
      }
      this.game.audio.sfx('swing');
    }
    this.model.position.y = Math.abs(Math.sin(local * Math.PI)) * 0.15;
    if (this.moveTime >= total) {
      this.comboHit1 = this.comboHit2 = this.comboHit3 = false;
      this.endMove();
    }
  }

  projectileKind() {
    const map = { bear: 'resume', rat: 'takeout', yellowbrow: 'gold', hundredEyes: 'tag', redboy: 'fire', sixear: 'ink', rock: 'stone' };
    return map[this.def.type] || 'ink';
  }

  addTelegraph(position, radius, duration, color = 0xff5e3a) {
    const group = new THREE.Group();
    const ring = makeHitRing(color);
    ring.scale.setScalar(radius);
    group.add(ring);
    const disc = new THREE.Mesh(
      new THREE.CircleGeometry(radius, 28),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.08, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending })
    );
    disc.rotation.x = -Math.PI / 2;
    disc.position.y = 0.03;
    group.add(disc);
    group.position.set(position.x, 0.06, position.z);
    this.world.scene.add(group);
    this.telegraphs.push({ group, ring, disc, age: 0, duration, radius, color });
  }

  addDashTelegraph(direction, duration, length) {
    const geo = new THREE.PlaneGeometry(2.8, length);
    geo.rotateX(-Math.PI / 2);
    geo.translate(0, 0, -length / 2);
    const mat = new THREE.MeshBasicMaterial({ color: 0xff633f, transparent: true, opacity: 0.13, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
    const plane = new THREE.Mesh(geo, mat);
    plane.position.copy(this.position).add(new THREE.Vector3(0, 0.05, 0));
    plane.rotation.y = Math.atan2(direction.x, direction.z);
    this.world.scene.add(plane);
    this.telegraphs.push({ group: plane, ring: plane, disc: plane, age: 0, duration, radius: 1, color: 0xff633f, dash: true });
  }

  updateTelegraphs(dt) {
    for (let i = this.telegraphs.length - 1; i >= 0; i--) {
      const t = this.telegraphs[i];
      t.age += dt;
      const k = clamp(t.age / t.duration, 0, 1);
      if (t.dash) {
        t.group.material.opacity = 0.05 + k * 0.18;
      } else {
        t.ring.scale.setScalar(t.radius * (1 + Math.sin(this.game.time * 16) * 0.03));
        t.disc.material.opacity = 0.05 + k * 0.16;
      }
      if (t.age > t.duration + 0.15) {
        this.world.scene.remove(t.group);
        t.group.traverse?.((o) => {
          if (o.geometry) o.geometry.dispose();
          if (o.material) o.material.dispose();
        });
        this.telegraphs.splice(i, 1);
      }
    }
  }

  clearTelegraphs() {
    for (const t of this.telegraphs) {
      this.world.scene.remove(t.group);
      t.group.traverse?.((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) o.material.dispose();
      });
    }
    this.telegraphs = [];
  }

  takeDamage(amount, opts = {}) {
    if (this.dead || !this.engaged || this.introLock) return false;
    this.hp -= amount;
    this.hitFlash = 1;
    this.game.audio.sfx(opts.heavy ? 'heavyHit' : 'hit');
    this.game.world.spawnSparks(this.position.clone().add(new THREE.Vector3(0, 1.8, 0)), 0xffd37a, opts.heavy ? 22 : 9);
    this.game.ui.damageNumber(this.position.clone().add(new THREE.Vector3(0, 3.0, 0)), Math.round(amount), opts.heavy ? 'heavy' : 'boss');
    this.game.ui.updateBossBar(clamp(this.hp / this.maxHp, 0, 1));
    this.game.cameraRig.shake(opts.heavy ? 0.45 : 0.15, 0.18);
    if (this.hp <= 0) this.die();
    return true;
  }

  freeze(duration = 2.5) {
    if (this.dead) return false;
    this.frozen = Math.max(this.frozen, Math.min(1.35, duration * 0.55));
    if (!this.freezeFx) {
      this.freezeFx = mesh(
        this.model,
        new THREE.IcosahedronGeometry(this.def.type === 'sixear' ? 2.2 : 1.6, 0),
        new THREE.MeshBasicMaterial({ color: 0x9fe8ff, transparent: true, opacity: 0.16, depthWrite: false, blending: THREE.AdditiveBlending }),
        [0, 1.7, 0]
      );
      this.freezeFx.castShadow = false;
    }
    this.freezeFx.visible = true;
    this.game.world.spawnRing(this.position.clone(), 0x9fe8ff, 1.5);
    return true;
  }

  enterPhaseTwo() {
    this.phase = 2;
    this.game.ui.toast(`${this.name}进入了第二阶段：开始谈情怀。`, 'boss');
    this.game.ui.bossPhase(2);
    this.game.audio.sfx('roar');
    this.game.cameraRig.shake(0.7, 0.6);
    this.world.spawnShockwave(this.position.clone(), 0xff7b4a);
    this.moveCooldown = 0.5;
    this.state = 'stagger';
    this.stateTime = 0;
    // 第二阶段小幅回血，象征“再给你一次机会”
    this.hp = Math.min(this.maxHp, this.hp + this.maxHp * 0.06);
    this.game.ui.updateBossBar(this.hp / this.maxHp);
  }

  die() {
    if (this.dead) return;
    this.dead = true;
    this.deathTime = 0;
    this.clearTelegraphs();
    this.game.audio.sfx('gong');
    this.game.cameraRig.shake(0.8, 0.8);
    this.world.spawnShockwave(this.position.clone(), 0xffd37a);
    this.game.onBossDefeated(this);
  }

  animate(dt) {
    const rig = this.rig;
    if (!rig) return;
    const t = this.game.time;
    if (this.def.type === 'sixear' && rig.monkey) {
      const monkeyRig = rig.monkey.userData.rig;
      monkeyRig.hips.position.y = 0.95 + Math.abs(Math.sin(t * 2)) * 0.02;
      monkeyRig.tail.rotation.y = Math.sin(t * 2) * 0.2;
      monkeyRig.head.rotation.y = Math.sin(t * 0.8) * 0.06;
      if (this.state === 'move') {
        const p = clamp(this.moveTime / 0.8, 0, 1);
        monkeyRig.arms.right.shoulder.rotation.x = -2.8 + p * 3.8;
        monkeyRig.staffPivot.rotation.z = Math.sin(p * Math.PI) * 1.5;
      }
      return;
    }
    if (rig.head) rig.head.rotation.y = Math.sin(t * 0.7) * 0.05;
    if (rig.armL) rig.armL.rotation.x = Math.sin(t * 1.2) * 0.04;
    if (rig.armR) rig.armR.rotation.x = Math.sin(t * 1.2 + 0.7) * 0.04;
    if (this.state === 'move' && this.currentMove) {
      const p = clamp(this.moveTime / Math.max(this.currentMove.delay, 0.2), 0, 1);
      if (this.currentMove.type === 'slam') {
        if (rig.armL) rig.armL.rotation.x = -2.5 + p * 4;
        if (rig.armR) rig.armR.rotation.x = -2.5 + p * 4;
        if (rig.head) rig.head.rotation.x = -0.2 + p * 0.3;
      } else if (this.currentMove.type === 'fan' || this.currentMove.type === 'rings' || this.currentMove.type === 'rain') {
        if (this.currentMove.type === 'fan' && rig.fan) rig.fan.rotation.z = 0.2 - Math.sin(p * Math.PI) * 1.3;
        if (rig.halo) rig.halo.rotation.z += dt * 1.5;
        if (rig.ring) rig.ring.rotation.z += dt * 0.8;
        if (rig.eyes) {
          rig.eyes.forEach((eye, i) => {
            eye.scale.setScalar(1 + Math.sin(t * 4 + i) * 0.1);
          });
        }
      }
    }
    if (rig.body) rig.body.position.y = 0.9 + Math.sin(t * 1.7) * 0.024;
    if (rig.halo) rig.halo.rotation.z += dt * 0.2;
  }

  animateFrozen(dt) {
    if (this.rig?.head) this.rig.head.rotation.z = Math.sin(this.game.time * 2) * 0.012;
  }
}

export class Projectile {
  constructor(game, opts) {
    this.game = game;
    this.world = game.world;
    this.position = opts.position.clone();
    this.velocity = opts.velocity.clone();
    this.damage = opts.damage;
    this.kind = opts.kind || 'ink';
    this.owner = opts.owner;
    this.gravity = opts.gravity ?? 0;
    this.life = opts.life ?? 3;
    this.age = 0;
    this.radius = opts.radius ?? 0.45;
    this.dead = false;
    this.mesh = this.makeMesh();
    this.mesh.position.copy(this.position);
    this.world.scene.add(this.mesh);
    this.trailTimer = 0;
  }

  makeMesh() {
    const group = new THREE.Group();
    const colors = {
      resume: 0xe8e1cd,
      takeout: 0xc18a45,
      snow: 0xd7f0ff,
      tag: 0xe6a5d8,
      fire: 0xff7134,
      ink: 0x403047,
      stone: 0x827d72,
      gold: 0xe2b251,
      banana: 0xd9c25a,
    };
    const color = colors[this.kind] || 0xffd37a;
    const mat = new THREE.MeshStandardMaterial({
      color,
      roughness: 0.7,
      metalness: 0.1,
      emissive: color,
      emissiveIntensity: this.kind === 'fire' ? 2.2 : 0.35,
      flatShading: true,
      transparent: true,
      opacity: 0.98,
    });
    let geo;
    if (this.kind === 'resume') geo = new THREE.BoxGeometry(0.55, 0.04, 0.72);
    else if (this.kind === 'takeout') geo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    else if (this.kind === 'snow') geo = new THREE.IcosahedronGeometry(0.28, 0);
    else if (this.kind === 'tag') geo = new THREE.BoxGeometry(0.42, 0.26, 0.04);
    else if (this.kind === 'fire') geo = new THREE.IcosahedronGeometry(0.32, 0);
    else if (this.kind === 'stone') geo = new THREE.DodecahedronGeometry(0.3, 0);
    else geo = new THREE.IcosahedronGeometry(0.26, 0);
    const core = new THREE.Mesh(geo, mat);
    core.castShadow = true;
    group.add(core);
    const glow = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.65, 0),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.12, depthWrite: false, blending: THREE.AdditiveBlending })
    );
    group.add(glow);
    if (this.kind === 'resume') {
      const lines = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.01, 0.03), new THREE.MeshBasicMaterial({ color: 0x3f4f5c }));
      lines.position.set(0, 0.03, 0.08);
      group.add(lines);
    }
    return group;
  }

  update(dt) {
    if (this.dead) return;
    this.age += dt;
    this.velocity.y -= this.gravity * dt;
    this.position.addScaledVector(this.velocity, dt);
    this.mesh.position.copy(this.position);
    this.mesh.rotation.x += dt * 8;
    this.mesh.rotation.z += dt * 5;
    this.trailTimer -= dt;
    if (this.trailTimer <= 0) {
      this.trailTimer = 0.08;
      if (this.kind === 'fire' || this.kind === 'gold' || this.kind === 'tag') {
        this.world.spawnSparks(this.position.clone(), this.kind === 'tag' ? 0xff8fd2 : 0xffb15e, 2);
      }
    }
    const player = this.game.player;
    if (player?.alive) {
      const target = player.position.clone().add(new THREE.Vector3(0, 1.25, 0));
      if (this.position.distanceTo(target) < this.radius + 0.6) {
        if (player.takeDamage(this.damage, this.position)) {
          this.world.spawnSparks(this.position.clone(), 0xff9b5e, 8);
          this.destroy();
          return;
        }
        if (player.state === 'dodge') {
          this.destroy();
          return;
        }
      }
    }
    if (this.position.y < -0.2 || this.age > this.life || this.world.gateOpen === false && this.position.z < -9.1 && this.position.z > -9.5) {
      if (this.position.y < 0.1 && this.age > 0.15) this.world.spawnSparks(this.position.clone(), 0xe1b26a, 5);
      this.destroy();
    }
  }

  destroy() {
    if (this.dead) return;
    this.dead = true;
    this.world.scene.remove(this.mesh);
    this.mesh.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) o.material.dispose();
    });
  }
}
