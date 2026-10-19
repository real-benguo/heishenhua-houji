import {
  CHAPTERS,
  CHARACTERS,
  CREDITS,
  DIFFICULTIES,
  RELICS,
} from '../data/story.js';
import { avatarSvg } from './avatars.js';
import { escapeHtml, formatTime } from '../core/utils.js';

const ACTIONS = {
  new: '新的轮回',
  continue: '继续取经',
  chapters: '章节选择',
  gallery: '影神图',
  settings: '设置',
  credits: '制作名单',
};

export class MenuUI {
  constructor(callbacks, save, settings) {
    this.callbacks = callbacks;
    this.save = save;
    this.settings = settings;
    this.selectedDifficulty = 'normal';
    this.currentScreen = null;
    this.toastTimer = null;
    this.el = document.createElement('section');
    this.el.id = 'menu-ui';
    this.el.className = 'menu-ui';
    this.el.innerHTML = this.template();
    document.getElementById('ui-root').appendChild(this.el);
    this.bind();
    this.updateSave(save);
  }

  template() {
    return `
      <div class="menu-shade"></div>
      <header class="menu-topbar">
        <div class="menu-studio">
          <div class="studio-mark">花</div>
          <div>
            <b>花果山第七制片厂</b>
            <small>FLOWER FRUIT MOUNTAIN PICTURES · EST. 2024</small>
          </div>
        </div>
        <div class="menu-top-actions">
          <button class="top-link" data-menu-action="sound"><i></i><span data-sound-label>声音：开</span></button>
          <button class="top-link" data-menu-action="fullscreen">全屏模式 ↗</button>
          <span class="menu-build">VER 1.0.0 · 抢先受苦版</span>
        </div>
      </header>

      <div class="menu-layout">
        <div class="menu-hero">
          <div class="hero-eyebrow"><span>非官方</span> 西游题材 · 抽象动作角色扮演</div>
          <div class="hero-title-wrap">
            <div class="hero-title-line">黑 神 话</div>
            <div class="hero-title-main">猴<span>急</span></div>
            <div class="hero-seal">急</div>
          </div>
          <div class="hero-en"><span>BLACK MYTH</span><i></i><span>MONKEY RUSH</span></div>
          <div class="hero-copy">六根未净，班还没下。<br><em>一个关于转正的恐怖故事。</em></div>
          <nav class="menu-nav">
            <button class="menu-nav-item featured" data-menu-action="new">
              <span class="nav-index">01</span>
              <span class="nav-label">新的轮回</span>
              <span class="nav-sub">NEW GAME</span>
              <span class="nav-arrow">→</span>
            </button>
            <button class="menu-nav-item" data-menu-action="continue">
              <span class="nav-index">02</span>
              <span class="nav-label">继续取经</span>
              <span class="nav-sub" data-continue-label>NO SAVE</span>
              <span class="nav-arrow">→</span>
            </button>
            <button class="menu-nav-item" data-menu-action="chapters">
              <span class="nav-index">03</span>
              <span class="nav-label">章节选择</span>
              <span class="nav-sub">CHAPTERS</span>
              <span class="nav-arrow">→</span>
            </button>
            <button class="menu-nav-item" data-menu-action="gallery">
              <span class="nav-index">04</span>
              <span class="nav-label">影神图</span>
              <span class="nav-sub">BESTIARY</span>
              <span class="nav-arrow">→</span>
            </button>
            <button class="menu-nav-item" data-menu-action="settings">
              <span class="nav-index">05</span>
              <span class="nav-label">设置</span>
              <span class="nav-sub">SETTINGS</span>
              <span class="nav-arrow">→</span>
            </button>
            <button class="menu-nav-item" data-menu-action="credits">
              <span class="nav-index">06</span>
              <span class="nav-label">制作名单</span>
              <span class="nav-sub">CREDITS</span>
              <span class="nav-arrow">→</span>
            </button>
          </nav>
        </div>

        <aside class="menu-archive">
          <div class="archive-head">
            <span class="archive-label">轮回档案 / SAVE DATA</span>
            <span class="archive-dot"></span>
          </div>
          <div data-archive></div>
        </aside>
      </div>

      <footer class="menu-footer">
        <div class="legal">
          非官方恶搞同人作品，与《黑神话：悟空》及游戏科学无关。<br>
          本作不含任何内购、抽卡与真实猴子。请勿在上班时间游玩。
        </div>
        <div class="ticker"><b>公告</b><span>修复了猴子过于帅气的 bug（未成功） · 建议佩戴耳机 · 横屏体验更佳</span></div>
        <div class="keys"><b>建议</b> 横屏 · 耳机 · 下班后</div>
      </footer>

      <div class="menu-screen screen" data-menu-screen></div>
    `;
  }

  bind() {
    this.el.addEventListener('click', (e) => {
      this.callbacks.onSound?.('ui');
      const actionEl = e.target.closest('[data-menu-action]');
      if (actionEl) {
        const action = actionEl.dataset.menuAction;
        if (action === 'sound') this.toggleSound();
        else if (action === 'fullscreen') this.callbacks.onFullscreen?.();
        else this.onAction(action);
        return;
      }
      if (e.target.closest('[data-close-screen]')) {
        this.closeScreen();
        return;
      }
      const diff = e.target.closest('[data-difficulty]');
      if (diff) {
        this.selectedDifficulty = diff.dataset.difficulty;
        this.renderDifficulty();
        return;
      }
      if (e.target.closest('[data-start-difficulty]')) {
        const id = this.selectedDifficulty;
        this.closeScreen();
        this.callbacks.onStartNewGame?.(id);
        return;
      }
      const chapter = e.target.closest('[data-chapter]');
      if (chapter && !chapter.classList.contains('locked')) {
        const index = Number(chapter.dataset.chapter);
        this.closeScreen();
        this.callbacks.onStartChapter?.(index);
        return;
      }
      const gallery = e.target.closest('[data-gallery]');
      if (gallery && !gallery.classList.contains('locked')) {
        this.openGalleryDetail(gallery.dataset.gallery);
        return;
      }
      if (e.target.closest('[data-confirm-yes]')) {
        const cb = this.confirmResolve;
        this.confirmResolve = null;
        this.closeScreen();
        cb?.(true);
        return;
      }
      if (e.target.closest('[data-confirm-no]')) {
        const cb = this.confirmResolve;
        this.confirmResolve = null;
        this.closeScreen();
        cb?.(false);
        return;
      }
      if (e.target.closest('[data-reset-save]')) {
        this.confirm('清空轮回档案？', '所有六根、功德、死亡记录与结局都会被删除。土地公不会退款。', '确认清空', '再想想').then((yes) => {
          if (yes) {
            this.closeScreen();
            this.callbacks.onResetSave?.();
          }
        });
        return;
      }
      if (e.target.closest('[data-screen-close]')) {
        this.closeScreen();
      }
    });

    this.el.addEventListener('input', (e) => {
      const input = e.target.closest('[data-setting]');
      if (!input) return;
      const key = input.dataset.setting;
      if (input.type === 'range') {
        this.settings[key] = Number(input.value) / 100;
      }
      this.syncSettingsUI();
      this.callbacks.onSettingsChange?.(this.settings);
    });

    this.el.addEventListener('click', (e) => {
      const seg = e.target.closest('[data-seg-setting]');
      if (seg) {
        const [key, value] = seg.dataset.segSetting.split(':');
        this.settings[key] = value;
        this.syncSettingsUI();
        this.callbacks.onSettingsChange?.(this.settings);
        return;
      }
      const toggle = e.target.closest('[data-toggle-setting]');
      if (toggle) {
        const key = toggle.dataset.toggleSetting;
        this.settings[key] = !this.settings[key];
        toggle.classList.toggle('on', !!this.settings[key]);
        this.callbacks.onSettingsChange?.(this.settings);
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && this.currentScreen) this.closeScreen();
    });
  }

  onAction(action) {
    switch (action) {
      case 'new':
        this.requestNewGame();
        break;
      case 'continue':
        if (this.save.started) this.callbacks.onContinue?.();
        else this.toast('还没有档案。先入职吧。');
        break;
      case 'chapters':
        this.openChapters();
        break;
      case 'gallery':
        this.openGallery();
        break;
      case 'settings':
        this.openSettings();
        break;
      case 'credits':
        this.openCredits();
        break;
      default:
        break;
    }
  }

  async requestNewGame() {
    if (this.save.started) {
      const yes = await this.confirm(
        '开始新的轮回？',
        '上一段取经进度会被覆盖。六根、功德、死亡次数，统统带不走。',
        '喝下孟婆汤',
        '还是继续吧'
      );
      if (!yes) return;
    }
    this.openDifficulty();
  }

  toggleSound() {
    this.settings.master = this.settings.master > 0 ? 0 : 0.8;
    this.syncSoundLabel();
    this.callbacks.onSettingsChange?.(this.settings);
  }

  syncSoundLabel() {
    const label = this.el.querySelector('[data-sound-label]');
    if (label) label.textContent = `声音：${this.settings.master > 0 ? '开' : '关'}`;
  }

  updateSave(save) {
    this.save = save;
    const archive = this.el.querySelector('[data-archive]');
    if (!archive) return;
    const current = CHAPTERS[Math.min(save.chapter ?? 0, CHAPTERS.length - 1)];
    const relicCount = save.relics?.length ?? 0;
    const progress = Math.round((relicCount / RELICS.length) * 100);
    if (!save.started) {
      archive.innerHTML = `
        <div class="archive-chapter"><b>尚未入职</b><span>NO RECORD</span></div>
        <div class="archive-loc">档案为空。你甚至还没开始试用。</div>
        <div class="archive-track"><i style="width:0%"></i></div>
        <div class="archive-stats">
          <div class="archive-stat"><span>六根</span><b>0/6</b></div>
          <div class="archive-stat"><span>功德</span><b>0</b></div>
          <div class="archive-stat"><span>死亡</span><b>0</b></div>
          <div class="archive-stat"><span>结局</span><b>0/3</b></div>
        </div>
        <div class="archive-quote"><em>“转正之后，就可以开始试用期了。”</em><br>—— 灵山集团 HR 部</div>
      `;
    } else {
      archive.innerHTML = `
        <div class="archive-chapter"><b>${escapeHtml(current.chapterLabel)} · ${escapeHtml(current.name)}</b><span>${save.completed ? 'DEAD END' : 'IN PROGRESS'}</span></div>
        <div class="archive-loc">${escapeHtml(current.location)}</div>
        <div class="archive-track"><i style="width:${progress}%"></i></div>
        <div class="archive-stats">
          <div class="archive-stat"><span>六根</span><b>${relicCount}/${RELICS.length}</b></div>
          <div class="archive-stat"><span>功德</span><b>${save.coins ?? 0}</b></div>
          <div class="archive-stat"><span>死亡</span><b>${save.deaths ?? 0}</b></div>
          <div class="archive-stat"><span>结局</span><b>${save.endings?.length ?? 0}/3</b></div>
        </div>
        <div class="archive-quote"><em>“${escapeHtml(current.subtitle)}”</em><br>游玩时长 ${formatTime(save.playTime ?? 0)} · 难度 ${escapeHtml(DIFFICULTIES.find((d) => d.id === save.difficulty)?.name ?? '加班')}</div>
      `;
    }
    const continueBtn = this.el.querySelector('[data-menu-action="continue"]');
    const continueLabel = this.el.querySelector('[data-continue-label]');
    if (continueBtn) continueBtn.disabled = !save.started;
    if (continueLabel) {
      if (!save.started) continueLabel.textContent = 'NO SAVE';
      else if (save.completed) continueLabel.textContent = 'ENDGAME';
      else continueLabel.textContent = `${current.chapterLabel} · ${current.name}`;
    }
    this.syncSoundLabel();
  }

  show() {
    this.el.classList.add('visible');
  }

  hide() {
    this.el.classList.remove('visible');
    this.closeScreen();
  }

  openScreen(html, { wide = false } = {}) {
    const screen = this.el.querySelector('[data-menu-screen]');
    screen.classList.add('open');
    screen.innerHTML = `<div class="screen-inner ${wide ? 'wide' : ''}">${html}</div>`;
    this.currentScreen = screen;
    requestAnimationFrame(() => screen.classList.add('open'));
  }

  closeScreen() {
    const screen = this.el.querySelector('[data-menu-screen]');
    if (!screen) return;
    if (this.confirmResolve) {
      const resolve = this.confirmResolve;
      this.confirmResolve = null;
      resolve(false);
    }
    screen.classList.remove('open');
    this.currentScreen = null;
    setTimeout(() => {
      if (!screen.classList.contains('open')) screen.innerHTML = '';
    }, 320);
  }

  screenHead(title, sub, meta = '') {
    return `
      <div class="screen-head">
        <div>
          <div class="screen-title">${title}</div>
          <div class="screen-sub">${sub}</div>
        </div>
        <div class="screen-meta">${meta}</div>
      </div>
      <button class="btn-icon screen-close" data-close-screen aria-label="关闭">×</button>
    `;
  }

  openDifficulty() {
    this.selectedDifficulty = this.save.started ? this.save.difficulty : 'normal';
    this.renderDifficulty();
  }

  renderDifficulty() {
    const cards = DIFFICULTIES.map((d, i) => `
      <button class="difficulty-card ${this.selectedDifficulty === d.id ? 'selected' : ''}" data-difficulty="${d.id}">
        <span class="d-num">0${i + 1} / ${d.id.toUpperCase()}</span>
        <span class="d-name">${d.name}</span>
        <span class="d-en">${d.english}</span>
        <span class="d-desc">${d.desc}</span>
        ${d.id === 'hard' ? '<span class="d-tag">友情提示：不建议第一次玩选这个。</span>' : ''}
      </button>
    `).join('');
    this.openScreen(`
      ${this.screenHead('选择难度', 'DIFFICULTY · 反正最后都要加班', '入职登记表 / 第 1 页')}
      <div class="screen-body">
        <div class="difficulty-grid">${cards}</div>
      </div>
      <div class="screen-footer">
        <div class="screen-note">难度随时不能改。就像你的岗位。</div>
        <button class="btn" data-close-screen>再想想</button>
        <button class="btn primary" data-start-difficulty>签下合同，开始轮回</button>
      </div>
    `);
  }

  openChapters() {
    const cards = CHAPTERS.map((ch) => {
      const unlocked = ch.index <= (this.save.unlocked ?? 0);
      const current = this.save.started && ch.index === this.save.chapter;
      const relic = ch.relic ? `<span class="c-relic"><i></i>${ch.relic.name} · ${ch.relic.item}</span>` : '<span class="c-relic"><i></i>入职培训 · 无六根</span>';
      return `
        <button class="chapter-card ${unlocked ? '' : 'locked'} ${current ? 'current' : ''}" data-chapter="${ch.index}">
          ${current ? '<span class="c-badge">当前</span>' : ''}
          <span class="chapter-num">${ch.numeral}</span>
          <span class="chapter-info">
            <h4>${ch.name}</h4>
            <span class="c-loc">${ch.location}</span>
            ${relic}
          </span>
        </button>
      `;
    }).join('');
    this.openScreen(`
      ${this.screenHead('章节选择', 'CHAPTERS · 已解锁的苦难', `进度 ${this.save.relics?.length ?? 0}/${RELICS.length} 六根`)}
      <div class="screen-body">
        <div class="chapter-progress-line"><span>取经进度</span><i></i><span>${this.save.unlocked + 1}/${CHAPTERS.length}</span></div>
        <div class="chapter-grid">${cards}</div>
      </div>
      <div class="screen-footer">
        <div class="screen-note">未解锁的章节会显示为灰色。这不是 bug，是人生的隐喻。</div>
        <button class="btn" data-close-screen>返回</button>
      </div>
    `);
  }

  openGallery() {
    const seen = new Set(this.save.seenCharacters ?? []);
    const keys = Object.keys(CHARACTERS);
    const cards = keys.map((key) => {
      const c = CHARACTERS[key];
      const unlocked = seen.has(key);
      return `
        <button class="gallery-card ${unlocked ? '' : 'locked'}" data-gallery="${key}">
          <div class="portrait-art">${avatarSvg(key)}</div>
          <b>${unlocked ? c.name : '？？？'}</b>
          <small>${unlocked ? c.title : '尚未遇见'}</small>
        </button>
      `;
    }).join('');
    this.openScreen(`
      ${this.screenHead('影神图', 'BESTIARY · 已遇见的妖魔鬼怪与同事', `${seen.size}/${keys.length} 已收录`)}
      <div class="screen-body">
        <div class="gallery-toolbar">
          <span class="gallery-count">点击已解锁的画像查看档案。未遇见的角色不会剧透。</span>
          <span class="gallery-count">含 3 位人类、7 位妖怪、1 位外包</span>
        </div>
        <div class="gallery-grid">${cards}</div>
        <div class="gallery-detail" data-gallery-detail></div>
      </div>
      <div class="screen-footer">
        <div class="screen-note">“影神图”是内部资料。请勿外传，否则 HR 会找你。</div>
        <button class="btn" data-close-screen>返回</button>
      </div>
    `, { wide: true });
  }

  openGalleryDetail(key) {
    const c = CHARACTERS[key];
    const detail = this.el.querySelector('[data-gallery-detail]');
    if (!c || !detail) return;
    detail.innerHTML = `
      <div class="portrait-art">${avatarSvg(key)}</div>
      <div class="gallery-detail-info">
        <h3>${c.name}</h3>
        <div class="g-title">${c.title}</div>
        <div class="g-bio">${c.bio}</div>
        <div class="g-quote">${c.quote}</div>
      </div>
    `;
    detail.classList.add('open');
    detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  openSettings() {
    const s = this.settings;
    const quality = s.quality || 'auto';
    this.openScreen(`
      ${this.screenHead('设置', 'SETTINGS · 调完也不会变强', '本地存档 / 自动保存')}
      <div class="screen-body">
        <div class="settings-grid">
          <div class="settings-section">
            <h4>声音 / AUDIO</h4>
            ${this.sliderRow('master', '总音量', s.master)}
            ${this.sliderRow('music', '音乐', s.music)}
            ${this.sliderRow('sfx', '音效', s.sfx)}
            <div class="setting-row">
              <div><label>声音开关</label><span class="setting-hint">关闭后，世界会安静很多。</span></div>
              <button class="toggle ${s.master > 0 ? 'on' : ''}" data-toggle-setting="master" aria-label="声音开关"></button>
            </div>
          </div>
          <div class="settings-section">
            <h4>画面 / DISPLAY</h4>
            <div class="setting-row">
              <div><label>画质</label><span class="setting-hint">自动检测的时候，猴子会自己选。</span></div>
              <div class="segmented">
                ${['auto', 'low', 'medium', 'high'].map((q) => `<button class="${quality === q ? 'on' : ''}" data-seg-setting="quality:${q}">${({ auto: '自动', low: '低', medium: '中', high: '高' })[q]}</button>`).join('')}
              </div>
            </div>
            <div class="setting-row">
              <div><label>屏幕震动</label><span class="setting-hint">关闭后，被 boss 打也不会晕。</span></div>
              <button class="toggle ${s.shake ? 'on' : ''}" data-toggle-setting="shake" aria-label="屏幕震动"></button>
            </div>
            <div class="setting-row">
              <div><label>字幕</label><span class="setting-hint">其实没有语音。但字幕很努力。</span></div>
              <button class="toggle ${s.subtitles ? 'on' : ''}" data-toggle-setting="subtitles" aria-label="字幕"></button>
            </div>
            ${this.sliderRow('cameraSensitivity', '镜头灵敏度', s.cameraSensitivity, 0.6, 1.6)}
          </div>
          <div class="settings-section">
            <h4>叙事 / STORY</h4>
            <div class="setting-row">
              <div><label>打字机效果</label><span class="setting-hint">关闭后，猴子的废话会一次性说完。</span></div>
              <button class="toggle ${s.typewriter ? 'on' : ''}" data-toggle-setting="typewriter" aria-label="打字机效果"></button>
            </div>
          </div>
          <div class="settings-section">
            <h4>关于 / ABOUT</h4>
            <div class="setting-row"><div><label>版本</label></div><div class="setting-value">1.0.0</div></div>
            <div class="setting-row"><div><label>引擎</label></div><div class="setting-hint">Three.js · 纯手工低模</div></div>
            <div class="setting-row"><div><label>开发时长</label></div><div class="setting-hint">比取经短一点</div></div>
          </div>
        </div>
        <div class="settings-danger">
          <p>清空存档会删除所有进度，包括你死过的 999 次。<br>建议先截图留念。</p>
          <button class="btn danger" data-reset-save>清空轮回档案</button>
        </div>
      </div>
      <div class="screen-footer">
        <div class="screen-note">设置会自动保存。和你的努力一样，无人看见。</div>
        <button class="btn primary" data-close-screen>完成</button>
      </div>
    `, { wide: true });
  }

  sliderRow(key, label, value, min = 0, max = 1) {
    return `
      <div class="setting-row">
        <div><label>${label}</label></div>
        <div class="setting-control">
          <input type="range" min="${Math.round(min * 100)}" max="${Math.round(max * 100)}" value="${Math.round((value ?? 1) * 100)}" data-setting="${key}" />
          <span class="setting-value" data-setting-value="${key}">${Math.round((value ?? 1) * 100)}</span>
        </div>
      </div>
    `;
  }

  syncSettingsUI() {
    const values = this.el.querySelectorAll('[data-setting-value]');
    values.forEach((el) => {
      const key = el.dataset.settingValue;
      el.textContent = Math.round((this.settings[key] ?? 0) * 100);
    });
  }

  openCredits() {
    const rows = CREDITS.map(([role, name]) => `<div class="credit-row"><span>${role}</span><span>${escapeHtml(name)}</span></div>`).join('');
    this.openScreen(`
      ${this.screenHead('制作名单', 'CREDITS · 一个人，三只猴子，一台旧电脑', '特别鸣谢：你')}
      <div class="screen-body">
        <div class="credits-scroll">${rows}</div>
        <div class="credits-note">“做游戏很难。做猴子更难。”</div>
        <div class="credits-small">本作是一款非官方恶搞同人作品，与《黑神话：悟空》、游戏科学无任何关联。<br>所有角色、剧情与公司均为虚构。如有雷同，说明你也在加班。<br>没有猴子在制作过程中受到伤害。除了制作人。</div>
      </div>
      <div class="screen-footer">
        <div class="screen-note">感谢游玩。现在，去下班吧。</div>
        <button class="btn" data-close-screen>返回</button>
      </div>
    `, { wide: true });
  }

  confirm(title, text, yes = '确认', no = '取消') {
    return new Promise((resolve) => {
      this.confirmResolve = resolve;
      this.openScreen(`
        <div class="confirm-card">
          <div class="screen-title">${escapeHtml(title)}</div>
          <p>${escapeHtml(text)}</p>
          <div class="confirm-actions">
            <button class="btn" data-confirm-no>${escapeHtml(no)}</button>
            <button class="btn primary" data-confirm-yes>${escapeHtml(yes)}</button>
          </div>
        </div>
      `);
    });
  }

  toast(message) {
    let toast = this.el.querySelector('.menu-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'menu-toast';
      this.el.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  }

  refreshSettings() {
    if (this.currentScreen && this.currentScreen.querySelector('[data-setting]')) {
      this.syncSettingsUI();
    }
    this.syncSoundLabel();
  }
}
