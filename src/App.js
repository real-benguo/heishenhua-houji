import * as THREE from 'three';
import { Engine } from './core/Engine.js';
import { Input } from './core/Input.js';
import { AudioSystem } from './core/Audio.js';
import { loadSave, writeSave, resetSave, loadSettings, writeSettings } from './core/Save.js';
import { CHAPTERS, DIFFICULTIES, ENDINGS, LOADING_TIPS, OPENING } from './data/story.js';
import { MenuScene } from './ui/MenuScene.js';
import { MenuUI } from './ui/MenuUI.js';
import { GameUI } from './ui/GameUI.js';
import { Game } from './game/Game.js';
import { choose, isMobileViewport, wait } from './core/utils.js';

export class App {
  constructor() {
    this.settings = loadSettings();
    this.save = loadSave();
    this.currentMode = 'menu';
    this.currentMusic = 'menu';
    this.transitioning = false;
    this.pauseOpen = false;
    this.autoPaused = false;
    this.canvas = document.getElementById('game-canvas');
    this.boot = document.getElementById('boot');
    this.fade = document.getElementById('fade-layer');

    this.engine = new Engine(this.canvas);
    this.input = new Input(this.canvas);
    this.audio = new AudioSystem(this.settings);
    this.ui = new GameUI(this.settings);
    this.ui.attachInput(this.input);
    this.menuScene = new MenuScene();
    this.game = new Game(this);
    this.ui.setGame(this.game);
    this.menu = new MenuUI(
      {
        onSound: (name) => {
          this.audio.init();
          this.audio.setSettings(this.settings);
          if (name) this.audio.sfx(name);
        },
        onFullscreen: () => this.toggleFullscreen(),
        onStartNewGame: (difficulty) => this.startNewGame(difficulty),
        onContinue: () => this.continueGame(),
        onStartChapter: (index) => this.startChapter(index),
        onSettingsChange: (settings) => this.applySettings(settings),
        onResetSave: () => this.resetProgress(),
      },
      this.save,
      this.settings
    );

    this.bind();
    this.applyQuality();
    this.engine.setScene(this.menuScene.scene, this.menuScene.camera, (dt) => this.menuScene.update(dt));
    this.audio.setSettings(this.settings);
    this.audio.playMusic('menu');
    this.input.onFirstGesture = () => {
      this.audio.init();
      this.audio.setSettings(this.settings);
      if (this.currentMusic) this.audio.playMusic(this.currentMusic);
    };
    this.input.onPause = () => this.togglePause();
    this.input.setSensitivity(this.settings.cameraSensitivity);
    this.bootSequence();
  }

  bind() {
    window.addEventListener('houji-audio', (e) => {
      this.audio.init();
      this.audio.sfx(e.detail);
    });
    this.ui.el.addEventListener('game-fullscreen', () => this.toggleFullscreen());
    window.addEventListener('resize', () => this.applyQuality(true));
    window.addEventListener('beforeunload', () => {
      if (this.game?.active) this.save.playTime = (this.save.playTime ?? 0) + this.game.time;
      writeSave(this.save);
    });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.audio.suspend();
        if (this.game?.active && !this.game.paused && !this.game.dialogueOpen && !this.game.shopOpen) {
          this.game.setPaused(true);
          this.autoPaused = true;
        }
      } else {
        this.audio.resume();
        if (this.autoPaused) {
          this.autoPaused = false;
          if (!this.pauseOpen) this.togglePause(true);
        }
      }
    });
    const rotate = document.getElementById('rotate-anyway');
    rotate?.addEventListener('click', () => {
      document.body.classList.add('allow-portrait');
      this.audio.sfx('confirm');
    });
  }

  async bootSequence() {
    const start = performance.now();
    try {
      await Promise.race([document.fonts.ready, wait(1800)]);
    } catch {
      /* ignore */
    }
    const remain = Math.max(0, 900 - (performance.now() - start));
    await wait(remain);
    this.menu.show();
    this.menu.updateSave(this.save);
    this.boot?.classList.add('hidden');
    setTimeout(() => this.boot?.remove(), 1000);
    this.audio.playMusic('menu');
    this.engine.paused = false;
    const params = new URLSearchParams(window.location.search);
    if (params.get('debug') === '1' && params.get('chapter')) {
      const target = params.get('chapter');
      const index = target === 'prologue' ? 0 : Number(target);
      setTimeout(() => this.startChapter(Number.isFinite(index) ? index : 1, { debug: true }), 350);
    }
  }

  applyQuality(force = false) {
    const q = this.settings.quality === 'auto' ? (isMobileViewport() ? 'medium' : 'high') : this.settings.quality;
    if (force || this.engine.quality !== q) this.engine.setQuality(q);
  }

  applySettings(settings) {
    this.settings = settings;
    writeSettings(settings);
    this.audio.setSettings(settings);
    this.input.setSensitivity(settings.cameraSensitivity);
    this.applyQuality();
    this.ui.settings = settings;
  }

  toggleFullscreen() {
    this.audio.init();
    this.audio.sfx('ui');
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch?.(() => {});
    } else {
      document.exitFullscreen?.();
    }
  }

  setFade(active) {
    this.fade.classList.toggle('active', !!active);
  }

  async startNewGame(difficultyId) {
    const fresh = resetSave();
    Object.assign(this.save, fresh);
    this.save.difficulty = difficultyId || 'normal';
    this.save.started = true;
    this.save.chapter = 0;
    this.save.unlocked = 0;
    this.save.introSeen = false;
    this.save.tutorialSeen = false;
    writeSave(this.save);
    this.menu.updateSave(this.save);
    this.game.save = this.save;
    this.audio.playMusic('none');
    await this.startRun(0, { newGame: true, skipIntro: false, chapterCard: true });
  }

  async continueGame() {
    if (!this.save.started) {
      this.menu.toast('还没有档案。先入职吧。');
      return;
    }
    const index = Math.min(this.save.chapter ?? 0, CHAPTERS.length - 1);
    await this.startRun(index, { skipIntro: true, chapterCard: true });
  }

  async startChapter(index, opts = {}) {
    if (!this.save.started) {
      this.save.started = true;
      this.save.unlocked = Math.max(this.save.unlocked ?? 0, 0);
    }
    if (index > (this.save.unlocked ?? 0) && !opts.debug) {
      this.menu.toast('这一回还没解锁。先去把上一回干完。');
      return;
    }
    this.save.chapter = index;
    writeSave(this.save);
    this.menu.updateSave(this.save);
    await this.startRun(index, { skipIntro: opts.skipIntro ?? false, chapterCard: true });
  }

  async startRun(index, opts = {}) {
    if (this.transitioning) return;
    this.transitioning = true;
    try {
      this.menu.closeScreen();
      this.menu.hide();
      this.ui.show();
      const chapter = CHAPTERS[index];
      const tip = choose(LOADING_TIPS);
      this.ui.showLoading(chapter, tip);
      this.audio.playMusic('none');
      this.currentMode = 'game';
      await wait(120);
      this.ui.setLoadingProgress(34);
      await wait(160);
      this.game.loadChapter(index);
      this.engine.paused = false;
      this.ui.setLoadingProgress(67);
      await wait(420);
      this.ui.setLoadingProgress(88, choose(LOADING_TIPS));
      await wait(360);
      this.ui.setLoadingProgress(100);
      await wait(260);
      this.ui.hideLoading();
      if (opts.newGame && !this.save.introSeen) {
        this.save.introSeen = true;
        writeSave(this.save);
        await this.ui.openingCinematic(OPENING);
      }
      document.body.classList.add('in-game');
      await wait(60);
      await this.game.begin({ skipIntro: opts.skipIntro, skipChapterCard: opts.chapterCard === false });
      this.currentMusic = 'field';
      this.applyQuality();
    } finally {
      this.transitioning = false;
    }
  }

  chapterComplete(chapter) {
    if (!this.save.relics.includes(chapter.relic?.id)) {
      // 游戏里已写入，保险
    }
    this.save.playTime = (this.save.playTime ?? 0) + this.game.time;
    this.save.unlocked = Math.max(this.save.unlocked ?? 0, Math.min(chapter.index + 1, CHAPTERS.length - 1));
    if (chapter.index + 1 < CHAPTERS.length) this.save.chapter = chapter.index + 1;
    writeSave(this.save);
    this.menu.updateSave(this.save);
    this.audio.playMusic('ending');
    this.ui.setHudVisible(false);
    this.ui.chapterComplete(chapter, {
      relics: this.save.relics.length,
      coins: this.save.coins,
      time: this.game.time,
      deaths: this.save.deaths,
    }).then(() => {
      if (chapter.index + 1 < CHAPTERS.length) {
        this.startRun(chapter.index + 1, { skipIntro: false, chapterCard: true });
      } else {
        this.returnToMenu();
      }
    });
  }

  async finishEnding(id) {
    this.save.playTime = (this.save.playTime ?? 0) + this.game.time;
    if (!this.save.endings.includes(id)) this.save.endings.push(id);
    this.save.completed = true;
    writeSave(this.save);
    this.menu.updateSave(this.save);
    this.ui.setHudVisible(false);
    this.ui.hideBossBar();
    this.audio.playMusic('ending');
    const ending = ENDINGS[id];
    await this.ui.showEnding(ending, {
      relics: this.save.relics.length,
      coins: this.save.coins,
      deaths: this.save.deaths,
      endings: this.save.endings.length,
    });
    await this.returnToMenu();
  }

  async retryChapter() {
    const index = Math.min(this.game.chapterIndex ?? 0, CHAPTERS.length - 1);
    this.save.playTime = (this.save.playTime ?? 0) + (this.game.time ?? 0);
    this.save.chapter = index;
    writeSave(this.save);
    await this.startRun(index, { skipIntro: true, chapterCard: false });
  }

  async returnToMenu() {
    if (this.transitioning) return;
    this.transitioning = true;
    try {
      if (this.game?.active) this.save.playTime = (this.save.playTime ?? 0) + this.game.time;
      writeSave(this.save);
      this.menu.updateSave(this.save);
      this.ui.resetToMenu();
      this.game.dispose();
      document.body.classList.remove('in-game', 'allow-portrait');
      this.audio.playMusic('menu');
      this.currentMode = 'menu';
      this.currentMusic = 'menu';
      this.engine.setScene(this.menuScene.scene, this.menuScene.camera, (dt) => this.menuScene.update(dt));
      this.applyQuality(true);
      this.input.setEnabled(false);
      this.input.setBlocked(true);
      this.input.releaseLock();
      this.menu.show();
      this.menu.updateSave(this.save);
      this.setFade(false);
    } finally {
      this.transitioning = false;
    }
  }

  togglePause(auto = false) {
    if (!this.game?.active || this.pauseOpen || this.transitioning) return;
    if (this.game.dialogueOpen || this.game.shopOpen) return;
    this.pauseOpen = true;
    this.game.setPaused(true);
    this.audio.playMusic('none');
    this.ui.pauseScreen({
      chapterLabel: this.game.chapter.chapterLabel,
      chapterName: this.game.chapter.name,
    }).then((choice) => {
      this.pauseOpen = false;
      if (choice === 'resume' || !choice) {
        if (this.game.active) {
          this.game.setPaused(false);
          this.audio.playMusic(this.game.phase === 'boss' ? 'boss' : 'field');
        }
      } else if (choice === 'menu') {
        this.returnToMenu();
      }
    });
  }

  async resetProgress() {
    const fresh = resetSave();
    Object.assign(this.save, fresh);
    this.game.save = this.save;
    this.menu.updateSave(this.save);
    this.menu.toast('档案已清空。你又是新猴子了。');
    this.audio.sfx('gong');
  }
}

export function showFatalError(message) {
  const root = document.getElementById('ui-root');
  if (!root) return;
  const el = document.createElement('div');
  el.style.cssText = 'position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:#07090a;color:#d9c8a4;font-family:serif;text-align:center;padding:30px;';
  el.innerHTML = `<div><div style="font-size:34px;margin-bottom:14px">猴子罢工了</div><div style="font-size:12px;line-height:2;color:#8d8778">${message}<br>请刷新页面，或者换一个支持 WebGL 的浏览器。</div></div>`;
  root.appendChild(el);
}
