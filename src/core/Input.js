import { clamp, isMobileViewport } from './utils.js';

const KEY_ACTIONS = {
  KeyJ: 'attack',
  KeyK: 'heavy',
  Space: 'dodge',
  KeyQ: 'heal',
  KeyR: 'skill',
  KeyE: 'interact',
  KeyF: 'interact',
  Enter: 'continue',
  Escape: 'pause',
};

const MOVE_KEYS = {
  KeyW: [0, -1], ArrowUp: [0, -1],
  KeyS: [0, 1], ArrowDown: [0, 1],
  KeyA: [-1, 0], ArrowLeft: [-1, 0],
  KeyD: [1, 0], ArrowRight: [1, 0],
};

export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.keys = new Set();
    this.actions = [];
    this.joystick = { x: 0, y: 0 };
    this.look = { x: 0, y: 0 };
    this.pointerLocked = false;
    this.dragging = false;
    this.dragId = null;
    this.lastPointer = { x: 0, y: 0 };
    this.blocked = false;
    this.enabled = false;
    this.isTouch = isMobileViewport();
    this.onPause = null;
    this.onFirstGesture = null;
    this.sensitivity = 0.0024;
    this.sensitivityMul = 1;
    this.bind();
  }

  bind() {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Tab') return;
      if (e.code === 'Escape') {
        if (this.enabled) this.onPause?.();
        return;
      }
      if (!this.enabled) return;
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.keys.add('sprint');
      if (MOVE_KEYS[e.code]) {
        this.keys.add(e.code);
        e.preventDefault();
      }
      if (KEY_ACTIONS[e.code]) {
        e.preventDefault();
        if (!e.repeat) this.trigger(KEY_ACTIONS[e.code]);
      }
    });

    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.code);
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.keys.delete('sprint');
    });

    this.canvas.addEventListener('pointerdown', (e) => {
      this.onFirstGesture?.();
      if (!this.enabled || this.blocked) return;
      if (e.pointerType === 'mouse') {
        if (e.button === 2) {
          this.trigger('heavy');
          return;
        }
        if (document.pointerLockElement !== this.canvas) {
          this.requestLock();
          return;
        }
        this.trigger('attack');
        return;
      }
      if (e.pointerType === 'touch' || e.pointerType === 'pen') {
        this.dragging = true;
        this.dragId = e.pointerId;
        this.lastPointer.x = e.clientX;
        this.lastPointer.y = e.clientY;
        this.canvas.setPointerCapture(e.pointerId);
      }
    });

    this.canvas.addEventListener('pointermove', (e) => {
      if (!this.enabled || this.blocked) return;
      if (this.pointerLocked) {
        this.look.x += e.movementX * this.sensitivity * this.sensitivityMul;
        this.look.y += e.movementY * this.sensitivity * 0.82 * this.sensitivityMul;
        return;
      }
      if (this.dragging && e.pointerId === this.dragId) {
        const dx = e.clientX - this.lastPointer.x;
        const dy = e.clientY - this.lastPointer.y;
        this.lastPointer.x = e.clientX;
        this.lastPointer.y = e.clientY;
        this.look.x += dx * 0.0045 * this.sensitivityMul;
        this.look.y += dy * 0.0036 * this.sensitivityMul;
      }
    });

    const endDrag = (e) => {
      if (e.pointerId === this.dragId) {
        this.dragging = false;
        this.dragId = null;
      }
    };
    this.canvas.addEventListener('pointerup', endDrag);
    this.canvas.addEventListener('pointercancel', endDrag);
    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());

    document.addEventListener('pointerlockchange', () => {
      this.pointerLocked = document.pointerLockElement === this.canvas;
      document.body.classList.toggle('pointer-locked', this.pointerLocked);
    });
    document.addEventListener('mousemove', (e) => {
      if (!this.pointerLocked || !this.enabled || this.blocked) return;
      this.look.x += e.movementX * this.sensitivity * this.sensitivityMul;
      this.look.y += e.movementY * this.sensitivity * 0.82 * this.sensitivityMul;
    });

    const wake = () => this.onFirstGesture?.();
    window.addEventListener('pointerdown', wake, { once: true });
    window.addEventListener('keydown', wake, { once: true });
    window.addEventListener('blur', () => this.keys.clear());
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) this.keys.clear();
    });
  }

  setSensitivity(s) {
    this.sensitivityMul = clamp(s || 1, 0.4, 2);
  }

  requestLock() {
    if (this.isTouch) return;
    this.canvas.requestPointerLock?.();
  }

  releaseLock() {
    if (document.pointerLockElement) document.exitPointerLock?.();
  }

  setEnabled(value) {
    this.enabled = value;
    if (!value) {
      this.keys.clear();
      this.joystick.x = 0;
      this.joystick.y = 0;
      this.look.x = 0;
      this.look.y = 0;
      this.releaseLock();
    }
  }

  setBlocked(value) {
    this.blocked = value;
    if (value) {
      this.keys.clear();
      this.joystick.x = 0;
      this.joystick.y = 0;
      this.releaseLock();
    }
  }

  setJoystick(x, y) {
    if (!this.enabled) return;
    this.joystick.x = clamp(x, -1, 1);
    this.joystick.y = clamp(y, -1, 1);
  }

  trigger(action) {
    if (!this.enabled || this.blocked) return;
    this.actions.push(action);
  }

  consume(action) {
    const index = this.actions.indexOf(action);
    if (index === -1) return false;
    this.actions.splice(index, 1);
    return true;
  }

  consumeAny() {
    if (!this.actions.length) return null;
    return this.actions.shift();
  }

  get moveVector() {
    let x = this.joystick.x;
    let y = this.joystick.y;
    for (const key of this.keys) {
      const v = MOVE_KEYS[key];
      if (v) {
        x += v[0];
        y += v[1];
      }
    }
    const length = Math.hypot(x, y);
    if (length > 1) {
      x /= length;
      y /= length;
    }
    return { x, y };
  }

  get sprinting() {
    return this.keys.has('sprint');
  }

  takeLook() {
    const out = { x: this.look.x, y: this.look.y };
    this.look.x = 0;
    this.look.y = 0;
    return out;
  }

  clearActions() {
    this.actions.length = 0;
  }
}
