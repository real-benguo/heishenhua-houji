import * as THREE from 'three';
import { CHARACTERS, SHRINE_LINES, DIFFICULTIES } from '../data/story.js';
import { avatarSvg } from './avatars.js';
import { clamp, formatTime, isMobileViewport } from '../core/utils.js';

const RELIC_GLYPHS = { eye: '眼', ear: '耳', nose: '鼻', tongue: '舌', body: '身', mind: '意' };
const UPGRADE_META = {
  body: { icon: '体', name: '体质', desc: '上限提高 24 点。多挨几下，才能活得久一点。' },
  staff: { icon: '棍', name: '棍法', desc: '攻击力提高 13%。技术不够，数值来凑。' },
  gourd: { icon: '葫', name: '葫芦', desc: '多一口回血。多一条命，少一次崩溃。' },
};

export class GameUI {
  constructor(settings) {
    this.settings = settings;
    this.input = null;
    this.game = null;
    this.isTouch = isMobileViewport();
    this.damageItems = [];
    this.dialogueResolve = null;
    this.dialogueTyping = false;
    this.dialogueTimer = null;
    this.dialogueLines = null;
    this.dialogueIndex = 0;
    this.dialogueOpts = null;
    this.skipDialogue = null;
    this._keyHandler = null;
    this.bossMoveTimer = null;
    this.toastCount = 0;
    this.joystickActive = false;
    this.joystickId = null;
    this.el = document.createElement('section');
    this.el.className = `game-ui hidden ${this.isTouch ? 'is-touch' : 'is-desktop'}`;
    this.el.id = 'game-ui';
    this.el.innerHTML = this.template();
    document.getElementById('ui-root').appendChild(this.el);
    this.cache();
    this.bind();
    document.body.classList.toggle('is-touch', this.isTouch);
  }

  template() {
    const controls = `
      <div class="joystick-area" data-joystick>
        <div class="joystick-base"></div>
        <div class="joystick-knob" data-joystick-knob></div>
        <div class="joystick-label">移动 / MOVE</div>
      </div>
      <div class="action-pad">
        <button class="action-btn attack" data-control="attack" aria-label="轻击">
          <b>攻</b><small>轻击</small>
        </button>
        <button class="action-btn dodge" data-control="dodge" aria-label="闪避">
          <b>闪</b><small>闪避</small>
        </button>
        <button class="action-btn heavy" data-control="heavy" aria-label="重棍">
          <b>重</b><small>重棍</small>
        </button>
        <button class="action-btn skill" data-control="skill" aria-label="定身">
          <b>定</b><small>定身</small><span class="cd" data-cd="skill"></span>
        </button>
        <button class="action-btn heal" data-control="heal" aria-label="喝葫芦">
          <b>葫</b><small>回血</small><span class="count" data-gourd-count>3</span>
        </button>
      </div>
    `;
    return `
      <div class="vignette"></div>
      <div class="low-hp" data-low-hp></div>
      <div class="hit-flash" data-hit-flash></div>
      <div class="hud" data-hud>
        <div class="hud-left">
          <div class="player-seal">猴</div>
          <div class="vitals">
            <div class="vitals-head">
              <span class="vitals-name">马喽</span>
              <span class="vitals-title">天命人 · 试用期第 999 天</span>
            </div>
            <div class="bar hp"><i data-bar="hp"></i></div>
            <div class="bar-row">
              <div class="bar stamina"><i data-bar="stamina"></i></div>
              <div class="bar mana"><i data-bar="mana"></i></div>
            </div>
            <div class="bar-labels"><span>体力</span><span>法力</span></div>
            <div class="focus-row">
              <span class="focus-label">专注</span>
              <div class="focus-pips">
                <span class="focus-pip"><i data-focus="0"></i></span>
                <span class="focus-pip"><i data-focus="1"></i></span>
                <span class="focus-pip"><i data-focus="2"></i></span>
              </div>
              <div class="gourd-row">
                <span class="gourd-dot"></span><span class="gourd-dot"></span><span class="gourd-dot"></span>
                <span class="gourd-label" data-gourd-label>3 / 3</span>
              </div>
            </div>
          </div>
        </div>

        <div class="quest" data-quest>
          <span class="quest-mark">目</span>
          <div class="quest-body">
            <small>当前任务 / OBJECTIVE</small>
            <b><span data-objective>清理拦路的妖怪</span><em data-progress></em></b>
          </div>
          <span class="quest-arrow" data-quest-arrow>↑</span>
        </div>

        <div class="hud-right">
          <span class="chip relic-chip"><span class="chip-icon">根</span><b data-relic-count>0</b>/6</span>
          <span class="chip"><span class="chip-icon">功</span><b data-coins>0</b></span>
          <button class="util-btn" data-hud-action="pause" aria-label="暂停菜单">Ⅱ</button>
          <span class="coin-pop" data-coin-pop></span>
        </div>

        <div class="boss-wrap" data-boss>
          <div class="boss-head">
            <span class="boss-name" data-boss-name>黑熊精</span>
            <span class="boss-title" data-boss-title>黑风山 · 首席招聘官</span>
          </div>
          <div class="boss-bar"><i data-boss-fill></i></div>
          <div class="boss-meta"><span>妖王 / YAOGUAI</span><span class="phase" data-boss-phase>PHASE 1</span></div>
        </div>
        <div class="boss-move" data-boss-move></div>
        <div class="toast-stack" data-toasts></div>
        <div class="damage-layer" data-damage-layer></div>

        <div class="desktop-hints">
          <span class="key-hint"><b>WASD</b>移动</span>
          <span class="key-hint"><b>鼠标</b>视角</span>
          <span class="key-hint"><b>左键 / J</b>轻击</span>
          <span class="key-hint"><b>右键 / K</b>重棍</span>
          <span class="key-hint"><b>空格</b>闪避</span>
          <span class="key-hint"><b>R</b>定身</span>
          <span class="key-hint"><b>Q</b>葫芦</span>
          <span class="key-hint"><b>E</b>交互</span>
        </div>

        <div class="interact-prompt" data-interact>
          <span class="interact-key">E</span>
          <span class="interact-body"><b>共享香火</b><small>上香 / 升级</small></span>
        </div>

        <div class="touch-controls">${controls}</div>
      </div>
    `;
  }

  cache() {
    this.hud = this.el.querySelector('[data-hud]');
    this.barHp = this.el.querySelector('[data-bar="hp"]');
    this.barStamina = this.el.querySelector('[data-bar="stamina"]');
    this.barMana = this.el.querySelector('[data-bar="mana"]');
    this.focusEls = [...this.el.querySelectorAll('[data-focus]')];
    this.gourdDots = [...this.el.querySelectorAll('.gourd-dot')];
    this.gourdLabel = this.el.querySelector('[data-gourd-label]');
    this.gourdCount = this.el.querySelector('[data-gourd-count]');
    this.coinsEl = this.el.querySelector('[data-coins]');
    this.relicCountEl = this.el.querySelector('[data-relic-count]');
    this.objectiveEl = this.el.querySelector('[data-objective]');
    this.progressEl = this.el.querySelector('[data-progress]');
    this.questArrow = this.el.querySelector('[data-quest-arrow]');
    this.bossEl = this.el.querySelector('[data-boss]');
    this.bossName = this.el.querySelector('[data-boss-name]');
    this.bossTitle = this.el.querySelector('[data-boss-title]');
    this.bossFill = this.el.querySelector('[data-boss-fill]');
    this.bossPhaseEl = this.el.querySelector('[data-boss-phase]');
    this.bossMoveEl = this.el.querySelector('[data-boss-move]');
    this.toastsEl = this.el.querySelector('[data-toasts]');
    this.damageLayer = this.el.querySelector('[data-damage-layer]');
    this.interactEl = this.el.querySelector('[data-interact]');
    this.toastList = [];
    this.lowHpEl = this.el.querySelector('[data-low-hp]');
    this.hitFlashEl = this.el.querySelector('[data-hit-flash]');
    this.coinPop = this.el.querySelector('[data-coin-pop]');
    this.joystickArea = this.el.querySelector('[data-joystick]');
    this.joystickKnob = this.el.querySelector('[data-joystick-knob]');
    this.cdBtns = {
      skill: this.el.querySelector('[data-control="skill"]'),
      heavy: this.el.querySelector('[data-control="heavy"]'),
      heal: this.el.querySelector('[data-control="heal"]'),
    };
    this.cdSkill = this.el.querySelector('[data-cd="skill"]');
  }

  bind() {
    this.el.addEventListener('click', (e) => {
      const action = e.target.closest('[data-hud-action]');
      if (action) {
        if (action.dataset.hudAction === 'pause') this.game?.app?.togglePause();
        return;
      }
      if (e.target.closest('[data-interact]')) {
        this.input?.trigger('interact');
      }
    });

    this.el.addEventListener('pointerdown', (e) => {
      const btn = e.target.closest('[data-control]');
      if (!btn) return;
      e.preventDefault();
      const action = btn.dataset.control;
      this.input?.trigger(action);
      btn.classList.add('pressed');
      if (navigator.vibrate) navigator.vibrate(8);
    });
    this.el.addEventListener('pointerup', (e) => {
      const btn = e.target.closest('[data-control]');
      btn?.classList.remove('pressed');
    });
    this.el.addEventListener('pointercancel', (e) => {
      const btn = e.target.closest('[data-control]');
      btn?.classList.remove('pressed');
    });

    this.joystickArea.addEventListener('pointerdown', (e) => {
      if (!this.input) return;
      e.preventDefault();
      this.joystickActive = true;
      this.joystickId = e.pointerId;
      this.joystickArea.setPointerCapture(e.pointerId);
      this.moveJoystick(e);
    });
    this.joystickArea.addEventListener('pointermove', (e) => {
      if (!this.joystickActive || e.pointerId !== this.joystickId) return;
      e.preventDefault();
      this.moveJoystick(e);
    });
    const end = (e) => {
      if (e.pointerId !== this.joystickId) return;
      this.joystickActive = false;
      this.joystickId = null;
      this.joystickKnob.style.transform = 'translate(-50%, -50%)';
      this.input?.setJoystick(0, 0);
    };
    this.joystickArea.addEventListener('pointerup', end);
    this.joystickArea.addEventListener('pointercancel', end);

    window.addEventListener('keydown', (e) => {
      if (!this.el.classList.contains('hidden') && e.code === 'KeyH') {
        this.showTutorial(this.game?.player, this.game?.chapter, this.game);
      }
    });
  }

  attachInput(input) {
    this.input = input;
    input.isTouch = this.isTouch;
    input.setSensitivity(this.settings.cameraSensitivity);
    const label = this.el.querySelector('.interact-key');
    if (label) label.textContent = this.isTouch ? '点' : 'E';
  }

  moveJoystick(e) {
    const rect = this.joystickArea.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const radius = rect.width * 0.32;
    let dx = e.clientX - cx;
    let dy = e.clientY - cy;
    const len = Math.hypot(dx, dy);
    if (len > radius) {
      dx = (dx / len) * radius;
      dy = (dy / len) * radius;
    }
    this.joystickKnob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
    this.input?.setJoystick(dx / radius, dy / radius);
  }

  setupGame(chapter, save) {
    this.el.classList.remove('hidden');
    this.setHudVisible(false);
    this.clearDamageNumbers();
    this.hideBossBar();
    this.clearInteractPrompt();
    const relicCount = this.el.querySelector('[data-relic-count]');
    if (relicCount) relicCount.textContent = save.relics?.length ?? 0;
    this.el.dataset.chapter = chapter.id;
    this.game = this.game;
  }

  setGame(game) {
    this.game = game;
  }

  setHudVisible(visible) {
    this.hud.classList.toggle('visible', visible);
  }

  show() {
    this.el.classList.remove('hidden');
  }

  hide() {
    this.el.classList.add('hidden');
    this.setHudVisible(false);
    this.clearInteractPrompt();
    this.hideBossBar();
  }

  updateHud(data, force = false) {
    if (!data) return;
    this.barHp.style.width = `${clamp(data.hp / data.maxHp, 0, 1) * 100}%`;
    this.barStamina.style.width = `${clamp(data.stamina / data.maxStamina, 0, 1) * 100}%`;
    this.barMana.style.width = `${clamp(data.mana / data.maxMana, 0, 1) * 100}%`;
    this.focusEls.forEach((el, i) => {
      const fill = clamp(data.focus - i, 0, 1);
      el.style.width = `${fill * 100}%`;
      el.parentElement.classList.toggle('full', fill >= 0.99);
    });
    if (this.gourdDots.length !== data.maxGourd) {
      const row = this.gourdDots[0]?.parentElement;
      if (row) {
        row.querySelectorAll('.gourd-dot').forEach((d) => d.remove());
        for (let i = 0; i < data.maxGourd; i++) {
          const dot = document.createElement('span');
          dot.className = 'gourd-dot';
          row.insertBefore(dot, this.gourdLabel);
        }
        this.gourdDots = [...row.querySelectorAll('.gourd-dot')];
      }
    }
    this.gourdDots.forEach((dot, i) => dot.classList.toggle('empty', i >= data.gourd));
    this.gourdLabel.textContent = `${data.gourd} / ${data.maxGourd}`;
    this.gourdCount.textContent = data.gourd;
    this.coinsEl.textContent = data.coins;
    this.relicCountEl.textContent = data.relics;
    this.objectiveEl.textContent = data.objective || '';
    this.progressEl.textContent = data.objectiveProgress || '';
    this.lowHpEl.classList.toggle('active', data.hpRatio !== undefined ? data.hpRatio < 0.28 : data.hp / data.maxHp < 0.28);

    const ratio = data.skillCd > 0 ? 1 - data.skillCd / 14 : 1;
    if (this.cdSkill) {
      this.cdSkill.style.setProperty('--cd', `${clamp(1 - ratio, 0, 1) * 100}%`);
      this.cdSkill.style.background = data.skillCd > 0 ? '' : 'none';
    }
    this.cdBtns.skill.classList.toggle('disabled', data.skillCd > 0 || data.mana < 30);
    this.cdBtns.heavy.classList.toggle('disabled', data.focus < 1);
    this.cdBtns.heal.classList.toggle('disabled', data.gourd <= 0 || data.healCd > 0);

    if (data.objectivePos && data.playerX !== undefined) {
      const dx = data.objectivePos.x - data.playerX;
      const dz = data.objectivePos.z - data.playerZ;
      const yaw = data.cameraYaw ?? 0;
      const fx = -Math.sin(yaw);
      const fz = -Math.cos(yaw);
      const rx = Math.cos(yaw);
      const rz = -Math.sin(yaw);
      const forward = dx * fx + dz * fz;
      const right = dx * rx + dz * rz;
      const angle = Math.atan2(right, forward) * (180 / Math.PI);
      this.questArrow.style.transform = `rotate(${angle}deg)`;
      this.questArrow.style.opacity = '1';
    } else {
      this.questArrow.style.opacity = '0.2';
    }
  }

  setObjective(text, progress = '') {
    this.objectiveEl.textContent = text;
    this.progressEl.textContent = progress;
  }

  showBossBar(name, title, ratio = 1) {
    this.bossName.textContent = name;
    this.bossTitle.textContent = title;
    this.bossFill.style.width = `${ratio * 100}%`;
    this.bossEl.classList.add('visible');
    this.bossPhaseEl.textContent = 'PHASE 1';
  }

  updateBossBar(ratio) {
    this.bossFill.style.width = `${clamp(ratio, 0, 1) * 100}%`;
  }

  bossPhase(phase) {
    this.bossPhaseEl.textContent = `PHASE ${phase}`;
    this.bossFill.style.background = phase === 2
      ? 'linear-gradient(90deg, #7d1c16, #c34c31 50%, #f0a75e)'
      : 'linear-gradient(90deg, #7e211b, #b1422f 60%, #d99a5e)';
  }

  hideBossBar() {
    this.bossEl?.classList.remove('visible');
  }

  bossMove(text) {
    if (!this.bossMoveEl) return;
    this.bossMoveEl.textContent = text;
    this.bossMoveEl.classList.add('show');
    clearTimeout(this.bossMoveTimer);
    this.bossMoveTimer = setTimeout(() => this.bossMoveEl.classList.remove('show'), 1700);
  }

  setInteractPrompt(item) {
    if (!item) return this.clearInteractPrompt();
    const key = this.el.querySelector('.interact-key');
    const label = this.el.querySelector('.interact-body b');
    const sub = this.el.querySelector('.interact-body small');
    if (key) key.textContent = this.isTouch ? '点' : 'E';
    if (label) label.textContent = item.label || item.prompt || '交互';
    if (sub) sub.textContent = `${item.prompt || '查看'} · ${item.icon || ''}`;
    this.interactEl.classList.add('visible');
  }

  clearInteractPrompt() {
    this.interactEl?.classList.remove('visible');
  }

  toast(text, kind = 'info') {
    if (!text) return;
    const toast = document.createElement('div');
    toast.className = `toast ${kind}`;
    toast.textContent = text;
    this.toastsEl.appendChild(toast);
    this.toastList.push(toast);
    while (this.toastList.length > 4) {
      const old = this.toastList.shift();
      old.remove();
    }
    setTimeout(() => {
      toast.remove();
      this.toastList = this.toastList.filter((t) => t !== toast);
    }, 3600);
  }

  coinGain(amount) {
    if (!this.coinPop) return;
    this.coinPop.textContent = `+${amount}`;
    this.coinPop.classList.remove('show');
    void this.coinPop.offsetWidth;
    this.coinPop.classList.add('show');
  }

  damageNumber(worldPosition, amount, type = 'enemy') {
    if (!worldPosition) return;
    const el = document.createElement('div');
    el.className = `damage-number ${type}`;
    el.textContent = type === 'heal' ? `+${amount}` : `${amount}`;
    this.damageLayer.appendChild(el);
    this.damageItems.push({
      el,
      position: worldPosition.clone(),
      offsetX: (Math.random() - 0.5) * 32,
      offsetY: (Math.random() - 0.5) * 12,
      life: 0.85,
      age: 0,
    });
  }

  updateDamageNumbers(camera, dt) {
    if (!camera || !this.damageItems.length) return;
    const width = window.innerWidth;
    const height = window.innerHeight;
    for (let i = this.damageItems.length - 1; i >= 0; i--) {
      const item = this.damageItems[i];
      item.age += dt;
      if (item.age > item.life) {
        item.el.remove();
        this.damageItems.splice(i, 1);
        continue;
      }
      const p = item.position.clone().project(camera);
      if (p.z > 1) {
        item.el.style.opacity = '0';
        continue;
      }
      const x = (p.x * 0.5 + 0.5) * width + item.offsetX;
      const y = (-p.y * 0.5 + 0.5) * height + item.offsetY;
      item.el.style.left = `${x}px`;
      item.el.style.top = `${y}px`;
    }
  }

  clearDamageNumbers() {
    this.damageItems.forEach((d) => d.el.remove());
    this.damageItems = [];
  }

  hitFlash() {
    if (!this.hitFlashEl) return;
    this.hitFlashEl.classList.remove('flash');
    void this.hitFlashEl.offsetWidth;
    this.hitFlashEl.classList.add('flash');
  }

  flashVignette(color = '#f5d48a') {
    const el = document.createElement('div');
    el.style.cssText = `position:fixed;inset:0;z-index:44;pointer-events:none;background:radial-gradient(circle at 50% 50%, transparent 30%, ${color}44 100%);opacity:0;transition:opacity .12s;`;
    document.body.appendChild(el);
    requestAnimationFrame(() => {
      el.style.opacity = '1';
      setTimeout(() => {
        el.style.opacity = '0';
        setTimeout(() => el.remove(), 280);
      }, 90);
    });
  }

  // ------------------------------------------------------------
  // 过场 / 加载
  // ------------------------------------------------------------
  openingCinematic(cards) {
    return new Promise((resolve) => {
      const el = document.createElement('div');
      el.className = 'opening-screen';
      el.innerHTML = `
        <div class="opening-inner">
          <div class="opening-kicker" data-open-kicker></div>
          <div class="opening-title" data-open-title></div>
          <div class="opening-rule"></div>
          <div class="opening-text" data-open-text></div>
          <div class="opening-count" data-open-count></div>
          <div class="opening-hint">点击继续 <span>·</span> 空格 / 回车</div>
        </div>
        <button class="opening-skip">跳过序章 ›</button>
      `;
      this.el.appendChild(el);
      requestAnimationFrame(() => el.classList.add('open'));
      let index = 0;
      let done = false;
      const kicker = el.querySelector('[data-open-kicker]');
      const title = el.querySelector('[data-open-title]');
      const text = el.querySelector('[data-open-text]');
      const count = el.querySelector('[data-open-count]');
      const render = () => {
        const card = cards[index];
        kicker.textContent = card.kicker;
        title.textContent = card.title;
        text.textContent = card.text;
        count.textContent = `${String(index + 1).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
        title.style.animation = 'none';
        title.offsetWidth;
        title.style.animation = 'opening-in 0.8s ease forwards';
      };
      const finish = () => {
        if (done) return;
        done = true;
        window.removeEventListener('keydown', keyHandler);
        el.classList.remove('open');
        setTimeout(() => el.remove(), 800);
        resolve();
      };
      const advance = () => {
        index += 1;
        if (index >= cards.length) finish();
        else render();
      };
      const keyHandler = (e) => {
        if (e.code === 'Space' || e.code === 'Enter') {
          e.preventDefault();
          advance();
        }
      };
      render();
      el.addEventListener('pointerdown', (e) => {
        if (e.target.closest('.opening-skip')) finish();
        else advance();
      });
      window.addEventListener('keydown', keyHandler);
    });
  }

  chapterCard(chapter) {
    return new Promise((resolve) => {
      const el = document.createElement('div');
      el.className = 'chapter-card-screen';
      el.innerHTML = `
        <div class="chapter-card-inner">
          <div class="chapter-card-kicker">${chapter.numeral} · ${chapter.index === 0 ? 'PROLOGUE' : `CHAPTER ${chapter.index}`}</div>
          <div class="chapter-card-title">${chapter.name}</div>
          <div class="chapter-card-en">${chapter.english}</div>
          <div class="chapter-card-rule"></div>
          <div class="chapter-card-loc">${chapter.location}</div>
          <div class="chapter-card-poem">${chapter.poem.map((p) => `<div>${p}</div>`).join('')}</div>
        </div>
        <button class="chapter-card-skip">跳过 ›</button>
      `;
      this.el.appendChild(el);
      requestAnimationFrame(() => el.classList.add('open'));
      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        clearTimeout(timer);
        el.classList.remove('open');
        setTimeout(() => el.remove(), 750);
        resolve();
      };
      const timer = setTimeout(finish, 4700);
      el.addEventListener('pointerdown', (e) => {
        if (e.target.closest('.chapter-card-skip')) finish();
        else if (e.isPrimary) finish();
      });
    });
  }

  showLoading(chapter, tip = '') {
    this.hideLoading();
    const el = document.createElement('div');
    el.className = 'loading-screen';
    el.innerHTML = `
      <div class="loading-inner">
        <div class="loading-seal">猴</div>
        <div class="loading-kicker">${chapter.numeral} · ${chapter.english}</div>
        <div class="loading-title">${chapter.name}</div>
        <div class="loading-loc">${chapter.location}</div>
        <div class="loading-bar-wrap">
          <div class="loading-bar"><i data-load-fill></i></div>
          <div class="loading-meta"><span>LOADING · 正在加载猴子</span><span data-load-percent>0%</span></div>
        </div>
        <div class="loading-tip"><b>小提示</b><span data-load-tip>${tip}</span></div>
        <div class="loading-fineprint">非官方恶搞同人作品 · 本作不含真实猴子 · 请勿在上班时间游玩</div>
      </div>
    `;
    this.el.appendChild(el);
    requestAnimationFrame(() => el.classList.add('open'));
    this.loadingEl = el;
    this.setLoadingProgress(8);
  }

  setLoadingProgress(value, tip) {
    if (!this.loadingEl) return;
    const v = clamp(value, 0, 100);
    const fill = this.loadingEl.querySelector('[data-load-fill]');
    const percent = this.loadingEl.querySelector('[data-load-percent]');
    if (fill) fill.style.width = `${v}%`;
    if (percent) percent.textContent = `${Math.round(v)}%`;
    if (tip) {
      const t = this.loadingEl.querySelector('[data-load-tip]');
      if (t) t.textContent = tip;
    }
  }

  hideLoading() {
    if (!this.loadingEl) return;
    const el = this.loadingEl;
    this.loadingEl = null;
    el.classList.remove('open');
    setTimeout(() => el.remove(), 600);
  }

  // ------------------------------------------------------------
  // 对话
  // ------------------------------------------------------------
  dialogue(lines, opts = {}) {
    if (!lines?.length) return Promise.resolve(null);
    return new Promise((resolve) => {
      this.dialogueResolve = resolve;
      this.dialogueLines = lines;
      this.dialogueIndex = 0;
      this.dialogueOpts = opts;
      this.dialogueTyping = false;
      this.el.classList.add('dialogue-mode');
      this.hudWasVisible = this.hud.classList.contains('visible');
      this.hud.classList.remove('visible');
      const layer = this.getDialogueLayer();
      layer.classList.add('open');
      layer.classList.remove('is-narration');
      const title = layer.querySelector('[data-dialogue-chapter]');
      const loc = layer.querySelector('[data-dialogue-location]');
      if (title) title.textContent = opts.title || '';
      if (loc) loc.textContent = opts.subtitle || '';
      const skip = layer.querySelector('.dialogue-skip');
      if (skip) skip.style.display = opts.allowSkip === false ? 'none' : '';
      this.showDialogueLine();
    });
  }

  getDialogueLayer() {
    if (this.dialogueEl) return this.dialogueEl;
    const el = document.createElement('div');
    el.className = 'dialogue-layer';
    el.innerHTML = `
      <div class="dialogue-letterbox"></div>
      <div class="dialogue-letterbox bottom"></div>
      <div class="dialogue-topline"><span class="dialogue-chapter" data-dialogue-chapter></span><span class="dialogue-location" data-dialogue-location></span></div>
      <button class="dialogue-skip">跳过 / SKIP</button>
      <div class="dialogue-choices" data-dialogue-choices></div>
      <div class="dialogue-box">
        <div class="dialogue-portrait" data-dialogue-portrait></div>
        <div class="dialogue-content">
          <div class="dialogue-name-row"><span class="dialogue-name" data-dialogue-name></span><span class="dialogue-title" data-dialogue-speaker-title></span></div>
          <p class="dialogue-text" data-dialogue-text></p>
          <div class="dialogue-next"><span>点击继续</span><span class="tri"></span></div>
        </div>
      </div>
    `;
    this.el.appendChild(el);
    this.dialogueEl = el;
    el.addEventListener('pointerdown', (e) => {
      if (e.target.closest('.dialogue-skip')) {
        this.finishDialogue();
        return;
      }
      if (e.target.closest('.dialogue-choice')) return;
      if (!this.dialogueEl.classList.contains('open')) return;
      this.advanceDialogue();
    });
    el.querySelector('.dialogue-skip').addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      this.finishDialogue();
    });
    this._keyHandler = (e) => {
      if (!this.dialogueEl?.classList.contains('open')) return;
      if (e.code === 'Space' || e.code === 'Enter' || e.code === 'KeyE') {
        e.preventDefault();
        this.advanceDialogue();
      }
    };
    window.addEventListener('keydown', this._keyHandler);
    return el;
  }

  showDialogueLine() {
    const line = this.dialogueLines[this.dialogueIndex];
    if (!line) return this.finishDialogue();
    const layer = this.dialogueEl;
    const speaker = line.who ? CHARACTERS[line.who] : null;
    const isNarration = !line.who;
    layer.classList.toggle('is-narration', isNarration);
    layer.querySelector('[data-dialogue-name]').textContent = speaker?.name ?? '旁白';
    layer.querySelector('[data-dialogue-speaker-title]').textContent = speaker?.title ?? '';
    const portrait = layer.querySelector('[data-dialogue-portrait]');
    if (speaker) {
      portrait.innerHTML = `<div class="portrait-art">${avatarSvg(line.who)}</div>`;
    } else {
      portrait.innerHTML = '';
    }
    const textEl = layer.querySelector('[data-dialogue-text]');
    textEl.textContent = '';
    this.dialogueTyping = true;
    this.audioFeedback('dialogue');
    const text = line.text;
    if (!this.settings.typewriter) {
      textEl.textContent = text;
      this.dialogueTyping = false;
    } else {
      let i = 0;
      clearInterval(this.dialogueTimer);
      this.dialogueTimer = setInterval(() => {
        i += 1;
        textEl.textContent = text.slice(0, i);
        if (i >= text.length) {
          clearInterval(this.dialogueTimer);
          this.dialogueTyping = false;
        }
      }, 26);
    }
    const next = layer.querySelector('.dialogue-next');
    if (next) next.style.opacity = '0';
    setTimeout(() => {
      if (!this.dialogueTyping && next) next.style.opacity = '1';
    }, this.settings.typewriter ? Math.min(1400, text.length * 26) : 60);
  }

  advanceDialogue() {
    if (!this.dialogueEl) return;
    if (this.dialogueTyping) {
      clearInterval(this.dialogueTimer);
      const line = this.dialogueLines[this.dialogueIndex];
      this.dialogueEl.querySelector('[data-dialogue-text]').textContent = line.text;
      this.dialogueTyping = false;
      const next = this.dialogueEl.querySelector('.dialogue-next');
      if (next) next.style.opacity = '1';
      return;
    }
    this.dialogueIndex += 1;
    if (this.dialogueIndex >= this.dialogueLines.length) {
      this.finishDialogue();
    } else {
      this.showDialogueLine();
    }
  }

  finishDialogue(choice = null) {
    if (!this.dialogueEl?.classList.contains('open')) return;
    clearInterval(this.dialogueTimer);
    const resolve = this.dialogueResolve;
    this.dialogueResolve = null;
    this.dialogueEl.classList.remove('open');
    this.el.classList.remove('dialogue-mode');
    if (this.hudWasVisible) this.hud.classList.add('visible');
    if (this._keyHandler) {
      window.removeEventListener('keydown', this._keyHandler);
      this._keyHandler = null;
    }
    setTimeout(() => {
      if (this.dialogueEl) this.dialogueEl.querySelector('[data-dialogue-choices]').innerHTML = '';
    }, 300);
    resolve?.(choice);
  }

  // ------------------------------------------------------------
  // 六根 / 死亡 / 章节完成 / 结局
  // ------------------------------------------------------------
  relicReveal(relic, chapter) {
    return new Promise((resolve) => {
      const el = document.createElement('div');
      el.className = 'relic-reveal';
      el.innerHTML = `
        <div class="relic-reveal-inner">
          <div class="relic-glyph"><span>${relic.id === 'manual' ? '册' : RELIC_GLYPHS[relic.id] || '根'}</span></div>
          <div class="relic-kicker">${relic.id === 'manual' ? '入职礼物 · WELCOME KIT' : `六根 · 其${['一', '二', '三', '四', '五', '六'][chapter.index - 1] ?? '六'}`}</div>
          <div class="relic-title">${relic.name}</div>
          <div class="relic-item">${relic.item}</div>
          <div class="relic-rule"></div>
          <div class="relic-desc">${relic.desc}</div>
          <div class="relic-quote">${relic.quote}</div>
          <button class="btn primary relic-confirm">收入囊中</button>
        </div>
      `;
      this.el.appendChild(el);
      requestAnimationFrame(() => el.classList.add('open'));
      const finish = () => {
        el.classList.remove('open');
        setTimeout(() => el.remove(), 600);
        resolve();
      };
      el.querySelector('.relic-confirm').addEventListener('click', finish);
      el.addEventListener('pointerdown', (e) => {
        if (e.target === el) finish();
      });
    });
  }

  endingChoice(choices, relic) {
    return new Promise((resolve) => {
      const el = document.createElement('div');
      el.className = 'choice-screen';
      el.innerHTML = `
        <div class="choice-inner">
          <div class="choice-kicker">最终面试 · FINAL INTERVIEW</div>
          <div class="choice-title">工牌在等你</div>
          <div class="choice-sub">六根已齐。这是你最后一次面试，面试官是你自己。</div>
          <div class="choice-grid">
            ${choices.map((c) => `
              <button class="choice-card" data-ending="${c.id}">
                <span class="choice-icon">${c.icon}</span>
                <span class="choice-label">${c.label}</span>
                <span class="choice-hint">${c.hint}</span>
              </button>
            `).join('')}
          </div>
          <div class="choice-foot">选择没有对错。只有 KPI 和离职证明。</div>
        </div>
      `;
      this.el.appendChild(el);
      requestAnimationFrame(() => el.classList.add('open'));
      el.querySelectorAll('[data-ending]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.ending;
          el.classList.remove('open');
          setTimeout(() => el.remove(), 650);
          resolve(id);
        });
      });
    });
  }

  deathScreen(data) {
    return new Promise((resolve) => {
      const el = document.createElement('div');
      el.className = 'death-screen';
      el.innerHTML = `
        <div class="death-inner">
          <div class="death-kicker">YOU HAVE BEEN OPTIMIZED</div>
          <div class="death-title">你被优化了</div>
          <div class="death-quote">${data.quote}</div>
          <div class="death-stats">
            <div class="death-stat"><b>${formatTime(data.stats.time)}</b><span>本次存活</span></div>
            <div class="death-stat"><b>${data.stats.kills}</b><span>清理同事</span></div>
            <div class="death-stat"><b>${data.stats.damage}</b><span>造成伤害</span></div>
            <div class="death-stat"><b>${data.stats.perfect}</b><span>完美闪避</span></div>
          </div>
          <div class="death-actions">
            <button class="btn" data-death="menu">回主菜单</button>
            <button class="btn primary" data-death="retry">再次投递</button>
          </div>
        </div>
      `;
      this.el.appendChild(el);
      requestAnimationFrame(() => el.classList.add('open'));
      el.querySelectorAll('[data-death]').forEach((btn) => {
        btn.addEventListener('click', () => {
          el.classList.remove('open');
          setTimeout(() => el.remove(), 600);
          resolve(btn.dataset.death);
        });
      });
    });
  }

  chapterComplete(chapter, data) {
    return new Promise((resolve) => {
      const el = document.createElement('div');
      el.className = 'clear-screen';
      const relic = chapter.relic;
      el.innerHTML = `
        <div class="clear-inner">
          <div class="clear-kicker">${chapter.numeral} · CHAPTER CLEAR</div>
          <div class="clear-title">${chapter.numeral === '序' ? '入职成功' : '此回已了'}</div>
          <div class="clear-sub">${chapter.location} · ${chapter.name}</div>
          ${relic ? `<div class="clear-relic"><b>${relic.name}</b>${relic.item}<span>已收入囊中</span></div>` : ''}
          <div class="clear-stats">
            <div class="clear-stat"><b>${data.relics}/6</b><span>六根</span></div>
            <div class="clear-stat"><b>${data.coins}</b><span>功德</span></div>
            <div class="clear-stat"><b>${Math.round(data.time / 60)}</b><span>分钟</span></div>
            <div class="clear-stat"><b>${data.deaths}</b><span>死亡</span></div>
          </div>
          <div class="clear-next">
            <button class="btn primary">继续取经 →</button>
          </div>
        </div>
      `;
      this.el.appendChild(el);
      requestAnimationFrame(() => el.classList.add('open'));
      el.querySelector('.clear-next .btn').addEventListener('click', () => {
        el.classList.remove('open');
        setTimeout(() => el.remove(), 550);
        resolve();
      });
    });
  }

  showEnding(ending, data) {
    return new Promise((resolve) => {
      const el = document.createElement('div');
      el.className = 'ending-screen';
      el.innerHTML = `
        <div class="ending-scroll scroll" data-ending-scroll>
          <div class="ending-kicker">${ending.numeral} · ENDING</div>
          <div class="ending-title">${ending.title}</div>
          <div class="ending-sub">${ending.subtitle}</div>
          <div class="ending-rule"></div>
          <div class="ending-lines">${ending.lines.map((l) => `<p>${l}</p>`).join('')}</div>
          <div class="ending-quote">${ending.quote}</div>
          <div class="ending-credits">六根 ${data.relics}/6 · 功德 ${data.coins} · 死亡 ${data.deaths} · 结局收集 ${data.endings}/3<br>黑神话：猴急 · BLACK MYTH: MONKEY RUSH<br>感谢游玩。现在，请下班。</div>
        </div>
        <div class="ending-bottom">
          <button class="btn" data-ending-action="credits">制作名单</button>
          <button class="btn primary" data-ending-action="menu">回到主菜单</button>
        </div>
      `;
      this.el.appendChild(el);
      requestAnimationFrame(() => el.classList.add('open'));
      el.querySelectorAll('[data-ending-action]').forEach((btn) => {
        btn.addEventListener('click', () => {
          if (btn.dataset.endingAction === 'credits') {
            const scroll = el.querySelector('[data-ending-scroll]');
            scroll?.scrollTo({ top: scroll.scrollHeight, behavior: 'smooth' });
            return;
          }
          el.classList.remove('open');
          setTimeout(() => el.remove(), 1000);
          resolve();
        });
      });
    });
  }

  // ------------------------------------------------------------
  // 商店 / 暂停 / 教程
  // ------------------------------------------------------------
  openShrine({ game }) {
    this.game = game;
    return new Promise((resolve) => {
      const el = document.createElement('div');
      el.className = 'screen shrine-screen open';
      this.el.appendChild(el);
      this.shrineEl = el;
      let closed = false;
      let escHandler = null;
      const close = () => {
        if (closed) return;
        closed = true;
        if (escHandler) window.removeEventListener('keydown', escHandler);
        el.classList.remove('open');
        setTimeout(() => el.remove(), 350);
        this.shrineEl = null;
        resolve();
      };
      const render = () => {
        const save = game.save;
        const quote = SHRINE_LINES[Math.floor(Math.random() * SHRINE_LINES.length)];
        const cards = Object.keys(UPGRADE_META).map((key) => {
          const meta = UPGRADE_META[key];
          const level = save.upgrades?.[key] ?? 0;
          const cost = game.getUpgradeCost(key);
          const max = level >= 5;
          const affordable = cost !== null && save.coins >= cost;
          return `
            <div class="upgrade-card ${max ? 'max' : ''}">
              <div class="upgrade-icon">${meta.icon}</div>
              <div class="upgrade-name">${meta.name} <span style="font-size:8px;color:var(--muted)">Lv.${level}</span></div>
              <div class="upgrade-desc">${meta.desc}</div>
              <div class="upgrade-levels">${[0, 1, 2, 3, 4].map((i) => `<i class="${i < level ? 'on' : ''}"></i>`).join('')}</div>
              <div class="upgrade-buy">
                <span class="upgrade-cost">${max ? '已满级' : `${cost}<small>功德</small>`}</span>
                <button class="upgrade-buy-btn" data-upgrade="${key}" ${max || !affordable ? 'disabled' : ''}>${max ? '圆满' : '升级'}</button>
              </div>
            </div>
          `;
        }).join('');
        el.innerHTML = `
          <div class="screen-inner">
            <div class="screen-head">
              <div>
                <div class="screen-title">共享香火</div>
                <div class="screen-sub">土地公物业 · 扫码即拜 · 押金八十</div>
              </div>
              <div class="screen-meta">状态已回满 / RESTED</div>
            </div>
            <button class="btn-icon screen-close" data-shrine-close aria-label="关闭">×</button>
            <div class="screen-body">
              <div class="shrine-quote">“${quote}”</div>
              <div class="shrine-top">
                <div class="shrine-coins"><span>可用功德</span><b>${save.coins}</b><span>点</span></div>
                <div class="shrine-hint">升级不可退款。和健身房一样。</div>
              </div>
              <div class="upgrade-grid">${cards}</div>
              <div class="shrine-message" data-shrine-message></div>
            </div>
            <div class="screen-footer">
              <div class="screen-note">离开时会自动保存。土地公不会偷你的功德（大概）。</div>
              <button class="btn primary" data-shrine-close>离开</button>
            </div>
          </div>
        `;
        el.querySelectorAll('[data-shrine-close]').forEach((b) => b.addEventListener('click', close));
        el.querySelectorAll('[data-upgrade]').forEach((btn) => {
          btn.addEventListener('click', () => {
            const result = game.upgrade(btn.dataset.upgrade);
            render();
            const msg = el.querySelector('[data-shrine-message]');
            if (msg) msg.textContent = result.message;
            this.audioFeedback?.(result.ok ? 'confirm' : 'back');
          });
        });
      };
      render();
      escHandler = (e) => {
        if (e.code === 'Escape') close();
      };
      window.addEventListener('keydown', escHandler);
      el.addEventListener('pointerdown', (e) => {
        if (e.target === el) close();
      });
    });
  }

  pauseScreen(data = {}) {
    return new Promise((resolve) => {
      const el = document.createElement('div');
      el.className = 'pause-screen';
      el.innerHTML = `
        <div class="pause-panel">
          <div class="pause-kicker">PAUSED · 暂停营业</div>
          <div class="pause-title">摸鱼中</div>
          <div class="pause-sub">${data.chapterLabel || ''} · ${data.chapterName || ''}</div>
          <div class="pause-buttons">
            <button class="btn primary" data-pause="resume">继续受苦</button>
            <button class="btn" data-pause="fullscreen">切换全屏</button>
            <button class="btn" data-pause="menu">返回主菜单</button>
          </div>
          <div class="pause-controls">${this.isTouch ? '左侧摇杆移动 · 右侧按钮战斗 · 拖动画面旋转视角' : 'WASD 移动 · 鼠标旋转视角 · 左键轻击 · 右键重棍 · 空格闪避 · R 定身 · Q 葫芦 · E 交互'}</div>
        </div>
      `;
      this.el.appendChild(el);
      requestAnimationFrame(() => el.classList.add('open'));
      const finish = (action) => {
        window.removeEventListener('keydown', esc);
        el.classList.remove('open');
        setTimeout(() => el.remove(), 380);
        resolve(action);
      };
      const esc = (e) => {
        if (e.code === 'Escape') finish('resume');
      };
      window.addEventListener('keydown', esc);
      el.querySelectorAll('[data-pause]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const action = btn.dataset.pause;
          if (action === 'fullscreen') {
            this.audioFeedback?.('ui');
            this.el.dispatchEvent(new CustomEvent('game-fullscreen', { bubbles: true }));
            return;
          }
          finish(action);
        });
      });
    });
  }

  showTutorial(player, chapter, game) {
    if (this.tutorialEl) return;
    const isTouch = this.isTouch;
    const el = document.createElement('div');
    el.className = 'tutorial-hint open';
    el.innerHTML = `
      <div class="tutorial-card">
        <div class="tutorial-title">入职须知</div>
        <div class="tutorial-sub">${isTouch ? '手机操作 · 横屏更佳' : '键鼠操作 · 随时可按 ESC 暂停'}</div>
        <div class="tutorial-keys ${isTouch ? 'tutorial-touch' : 'tutorial-keyboard'}">
          ${isTouch ? `
            <div class="tut-key"><b>左</b>摇杆移动</div>
            <div class="tut-key"><b>右</b>拖动视角</div>
            <div class="tut-key"><b>攻</b>轻击 / 连段</div>
            <div class="tut-key"><b>闪</b>闪避 / 无敌帧</div>
            <div class="tut-key"><b>重</b>重棍 / 消耗专注</div>
            <div class="tut-key"><b>定</b>定身术</div>
          ` : `
            <div class="tut-key"><b>WASD</b>移动</div>
            <div class="tut-key"><b>鼠标</b>视角</div>
            <div class="tut-key"><b>左键 / J</b>轻击</div>
            <div class="tut-key"><b>右键 / K</b>重棍</div>
            <div class="tut-key"><b>空格</b>闪避</div>
            <div class="tut-key"><b>R</b>定身</div>
          `}
        </div>
        <div class="tutorial-mobile-note">左侧摇杆移动，右侧拖动画面转视角。<br>打不过就闪，闪不过就跑，跑不过就说是来面试的。<br>靠近目标后点按屏幕提示交互 · 右上角可暂停。</div>
        <button class="btn primary tutorial-close">知道了，开始受苦</button>
      </div>
    `;
    this.el.appendChild(el);
    this.tutorialEl = el;
    const wasPaused = game?.paused;
    game?.setPaused(true);
    const close = () => {
      el.classList.remove('open');
      setTimeout(() => el.remove(), 360);
      this.tutorialEl = null;
      if (game && !wasPaused) game.setPaused(false);
    };
    el.querySelector('.tutorial-close').addEventListener('click', close);
    el.addEventListener('pointerdown', (e) => {
      if (e.target === el) close();
    });
  }

  audioFeedback(name) {
    window.dispatchEvent(new CustomEvent('houji-audio', { detail: name }));
  }

  resetToMenu() {
    clearTimeout(this.bossMoveTimer);
    clearInterval(this.dialogueTimer);
    if (this.dialogueResolve) {
      const resolve = this.dialogueResolve;
      this.dialogueResolve = null;
      resolve(null);
    }
    this.dialogueEl?.classList.remove('open');
    this.el.classList.remove('dialogue-mode');
    this.el.classList.add('hidden');
    this.hud.classList.remove('visible');
    this.clearInteractPrompt();
    this.hideBossBar();
    this.clearDamageNumbers();
    this.toastsEl.innerHTML = '';
    this.toastList = [];
    this.tutorialEl?.remove();
    this.tutorialEl = null;
    if (this.loadingEl) {
      this.loadingEl.remove();
      this.loadingEl = null;
    }
    this.el.querySelectorAll('.chapter-card-screen, .opening-screen, .relic-reveal, .clear-screen, .ending-screen, .choice-screen, .death-screen, .pause-screen, .screen, .tutorial-hint').forEach((n) => n.remove());
    this.shrineEl = null;
    this.setHudVisible(false);
  }

  resize() {}
}
