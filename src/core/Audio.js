import { choose, rand } from './utils.js';

const NOTE = {
  D2: 73.42, A2: 110.0, D3: 146.83, F3: 174.61, G3: 196.0, A3: 220.0,
  C4: 261.63, D4: 293.66, F4: 349.23, G4: 392.0, A4: 440.0,
  C5: 523.25, D5: 587.33, F5: 698.46, G5: 783.99, A5: 880.0,
};

const PATTERNS = {
  menu: {
    step: 0.52,
    melody: [NOTE.D4, 0, NOTE.A4, 0, NOTE.F4, 0, NOTE.C5, 0, NOTE.A4, 0, NOTE.G4, 0, NOTE.F4, 0, NOTE.D4, 0],
    bass: [NOTE.D2, 0, 0, 0, NOTE.A2, 0, 0, 0, NOTE.F4 / 2, 0, 0, 0, NOTE.D2, 0, 0, 0],
    drums: [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    drumGain: 0.12,
    drone: [NOTE.D2, NOTE.A2],
    wind: 0.018,
  },
  field: {
    step: 0.36,
    melody: [NOTE.D4, 0, NOTE.F4, NOTE.G4, 0, NOTE.A4, 0, NOTE.C5, NOTE.A4, 0, NOTE.G4, 0, NOTE.F4, NOTE.D4, 0, 0],
    bass: [NOTE.D2, 0, NOTE.D2, 0, NOTE.F3 / 2, 0, NOTE.C4 / 2, 0, NOTE.D2, 0, NOTE.A2, 0, NOTE.F3 / 2, 0, NOTE.G3 / 2, 0],
    drums: [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0],
    drumGain: 0.16,
    drone: [NOTE.D2, NOTE.F3 / 2],
    wind: 0.012,
  },
  boss: {
    step: 0.245,
    melody: [NOTE.D5, 0, NOTE.C5, 0, NOTE.A4, 0, NOTE.F4, 0, NOTE.G4, 0, NOTE.A4, 0, NOTE.C5, 0, NOTE.A4, NOTE.F4],
    bass: [NOTE.D2, NOTE.D2, 0, NOTE.D2, NOTE.F3 / 2, 0, NOTE.D2, 0, NOTE.A2, NOTE.A2, 0, NOTE.A2, NOTE.F3 / 2, 0, NOTE.G3 / 2, 0],
    drums: [1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1],
    drumGain: 0.2,
    drone: [NOTE.D2, NOTE.G3 / 2],
    wind: 0.006,
  },
  ending: {
    step: 0.6,
    melody: [NOTE.D4, NOTE.A4, NOTE.C5, NOTE.A4, NOTE.G4, NOTE.F4, NOTE.D4, 0, NOTE.F4, NOTE.A4, NOTE.G4, NOTE.F4, NOTE.D4, 0, NOTE.C4, 0],
    bass: [NOTE.D2, 0, 0, 0, NOTE.A2, 0, 0, 0, NOTE.F3 / 2, 0, 0, 0, NOTE.D2, 0, 0, 0],
    drums: [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    drumGain: 0.09,
    drone: [NOTE.D2, NOTE.A2],
    wind: 0.014,
  },
};

export class AudioSystem {
  constructor(settings) {
    this.settings = settings;
    this.ctx = null;
    this.master = null;
    this.musicBus = null;
    this.sfxBus = null;
    this.droneGain = null;
    this.windGain = null;
    this.mode = 'none';
    this.pendingMode = null;
    this.timer = null;
    this.step = 0;
    this.nextTime = 0;
    this.noiseBuffer = null;
    this.suspended = false;
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended' && !this.suspended) this.ctx.resume();
      return;
    }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    this.ctx = new Ctx({ latencyHint: 'interactive' });

    const compressor = this.ctx.createDynamicsCompressor();
    compressor.threshold.value = -16;
    compressor.knee.value = 22;
    compressor.ratio.value = 5;
    compressor.attack.value = 0.004;
    compressor.release.value = 0.22;
    compressor.connect(this.ctx.destination);

    this.master = this.ctx.createGain();
    this.master.gain.value = this.settings.master;
    this.master.connect(compressor);

    this.musicBus = this.ctx.createGain();
    this.musicBus.gain.value = 0.0001;
    this.musicBus.connect(this.master);

    this.sfxBus = this.ctx.createGain();
    this.sfxBus.gain.value = this.settings.sfx * 0.66;
    this.sfxBus.connect(this.master);

    this.noiseBuffer = this.makeNoiseBuffer(2);
    this.buildDrone();
    this.buildWind();
    if (this.pendingMode) {
      const mode = this.pendingMode;
      this.pendingMode = null;
      this.playMusic(mode);
    }
  }

  makeNoiseBuffer(seconds = 2) {
    const length = Math.floor(this.ctx.sampleRate * seconds);
    const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < length; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.2;
    }
    return buffer;
  }

  buildDrone() {
    const ctx = this.ctx;
    this.droneGain = ctx.createGain();
    this.droneGain.gain.value = 0.0001;
    this.droneGain.connect(this.musicBus);
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 420;
    filter.Q.value = 0.6;
    filter.connect(this.droneGain);
    this.droneOsc = [NOTE.D2, NOTE.A2].map((freq, i) => {
      const osc = ctx.createOscillator();
      osc.type = i ? 'sine' : 'triangle';
      osc.frequency.value = freq;
      osc.detune.value = i ? 5 : -6;
      const g = ctx.createGain();
      g.gain.value = i ? 0.12 : 0.18;
      osc.connect(g);
      g.connect(filter);
      osc.start();
      return osc;
    });
  }

  buildWind() {
    const ctx = this.ctx;
    this.windGain = ctx.createGain();
    this.windGain.gain.value = 0.0001;
    this.windGain.connect(this.musicBus);
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.loop = true;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 720;
    filter.Q.value = 0.3;
    src.connect(filter);
    filter.connect(this.windGain);
    src.start();
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.07;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 280;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();
  }

  setSettings(settings) {
    this.settings = settings;
    if (!this.ctx) return;
    this.master.gain.setTargetAtTime(settings.master, this.ctx.currentTime, 0.08);
    this.sfxBus.gain.setTargetAtTime(settings.sfx * 0.66, this.ctx.currentTime, 0.08);
    this.musicBus.gain.setTargetAtTime(this.mode === 'none' ? 0.0001 : settings.music * 0.42, this.ctx.currentTime, 0.16);
  }

  playMusic(mode) {
    if (mode === this.mode) return;
    if (!this.ctx) {
      this.pendingMode = mode;
      return;
    }
    this.mode = mode;
    this.step = 0;
    this.nextTime = this.ctx.currentTime + 0.08;
    const volume = mode === 'none' ? 0.0001 : this.settings.music * 0.42;
    this.musicBus.gain.cancelScheduledValues(this.ctx.currentTime);
    this.musicBus.gain.setTargetAtTime(volume, this.ctx.currentTime, 0.4);
    if (mode === 'none') {
      this.droneGain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.4);
      this.windGain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.4);
      clearInterval(this.timer);
      this.timer = null;
      return;
    }
    const pattern = PATTERNS[mode];
    if (!pattern) return;
    this.droneGain.gain.setTargetAtTime(mode === 'menu' ? 0.055 : 0.075, this.ctx.currentTime, 0.8);
    this.windGain.gain.setTargetAtTime(pattern.wind, this.ctx.currentTime, 1.2);
    this.droneOsc[0].frequency.setTargetAtTime(pattern.drone[0], this.ctx.currentTime, 0.5);
    this.droneOsc[1].frequency.setTargetAtTime(pattern.drone[1], this.ctx.currentTime, 0.5);
    clearInterval(this.timer);
    this.schedule();
    this.timer = setInterval(() => this.schedule(), 100);
  }

  schedule() {
    if (!this.ctx || !this.mode) return;
    const pattern = PATTERNS[this.mode];
    if (!pattern) return;
    const now = this.ctx.currentTime;
    while (this.nextTime < now + 0.3) {
      this.playStep(this.step, this.nextTime, pattern);
      this.step = (this.step + 1) % 16;
      this.nextTime += pattern.step;
    }
  }

  playStep(index, time, pattern) {
    const melody = pattern.melody[index];
    if (melody) this.pluck(melody, time, 0.9, 0.055);
    if (index % 4 === 0 && pattern.bass[index]) {
      this.pluck(pattern.bass[index], time, 1.4, 0.05, true);
    }
    if (pattern.drums[index]) {
      if (index % 4 === 0) this.taiko(time, pattern.drumGain);
      else this.woodblock(time, pattern.drumGain * 0.55);
    }
    if (this.mode === 'boss' && index === 8) this.metal(time, 0.028);
    if (this.mode === 'menu' && index === 0) this.bell(NOTE.D4 * 2, time, 0.035);
  }

  pluck(freq, time, dur = 0.8, gain = 0.05, low = false) {
    const ctx = this.ctx;
    const out = ctx.createGain();
    out.gain.setValueAtTime(0.0001, time);
    out.gain.exponentialRampToValueAtTime(gain, time + 0.008);
    out.gain.exponentialRampToValueAtTime(0.0001, time + dur);
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(low ? 480 : 2600, time);
    filter.frequency.exponentialRampToValueAtTime(low ? 180 : 740, time + dur);
    const osc = ctx.createOscillator();
    osc.type = low ? 'sine' : 'triangle';
    osc.frequency.value = freq;
    const osc2 = ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.value = freq * 2.01;
    const g2 = ctx.createGain();
    g2.gain.value = 0.18;
    osc.connect(filter);
    osc2.connect(g2);
    g2.connect(filter);
    filter.connect(out);
    out.connect(this.musicBus);
    osc.start(time);
    osc2.start(time);
    osc.stop(time + dur + 0.05);
    osc2.stop(time + dur + 0.05);
  }

  taiko(time, gain = 0.16) {
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, time);
    osc.frequency.exponentialRampToValueAtTime(46, time + 0.3);
    g.gain.setValueAtTime(gain, time);
    g.gain.exponentialRampToValueAtTime(0.0001, time + 0.42);
    osc.connect(g);
    g.connect(this.musicBus);
    osc.start(time);
    osc.stop(time + 0.45);
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const nf = ctx.createBiquadFilter();
    nf.type = 'lowpass';
    nf.frequency.value = 220;
    const ng = ctx.createGain();
    ng.gain.setValueAtTime(gain * 0.42, time);
    ng.gain.exponentialRampToValueAtTime(0.0001, time + 0.16);
    src.connect(nf);
    nf.connect(ng);
    ng.connect(this.musicBus);
    src.start(time, rand(0, 1));
    src.stop(time + 0.2);
  }

  woodblock(time, gain = 0.05) {
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(680, time);
    osc.frequency.exponentialRampToValueAtTime(410, time + 0.05);
    g.gain.setValueAtTime(gain, time);
    g.gain.exponentialRampToValueAtTime(0.0001, time + 0.08);
    const f = ctx.createBiquadFilter();
    f.type = 'bandpass';
    f.frequency.value = 900;
    f.Q.value = 2;
    osc.connect(f);
    f.connect(g);
    g.connect(this.musicBus);
    osc.start(time);
    osc.stop(time + 0.1);
  }

  metal(time, gain = 0.03) {
    const freqs = [NOTE.A4 * 2.01, NOTE.D5 * 1.49, NOTE.F5 * 1.86];
    freqs.forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = f;
      g.gain.setValueAtTime(gain / (i + 1), time);
      g.gain.exponentialRampToValueAtTime(0.0001, time + 1.2);
      osc.connect(g);
      g.connect(this.musicBus);
      osc.start(time);
      osc.stop(time + 1.25);
    });
  }

  bell(freq, time, gain = 0.02) {
    [1, 2.76, 5.4].forEach((m, i) => {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq * m;
      g.gain.setValueAtTime(gain / (i + 1), time);
      g.gain.exponentialRampToValueAtTime(0.0001, time + 2.2);
      osc.connect(g);
      g.connect(this.musicBus);
      osc.start(time);
      osc.stop(time + 2.3);
    });
  }

  noise(time, duration, gain, type = 'bandpass', freq = 1200, q = 0.8, bus = this.sfxBus) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const filter = ctx.createBiquadFilter();
    filter.type = type;
    filter.frequency.setValueAtTime(freq, time);
    filter.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(gain, time);
    g.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    src.connect(filter);
    filter.connect(g);
    g.connect(bus);
    src.start(time, rand(0, 1.2));
    src.stop(time + duration + 0.02);
  }

  sfx(name) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + 0.005;
    const ctx = this.ctx;
    switch (name) {
      case 'ui':
        this.tone(880, t, 0.08, 0.035, 'sine', 1500);
        this.tone(1320, t + 0.02, 0.09, 0.02, 'sine');
        break;
      case 'confirm':
        this.tone(392, t, 0.16, 0.05, 'triangle');
        this.tone(587.33, t + 0.08, 0.24, 0.045, 'triangle');
        break;
      case 'back':
        this.tone(330, t, 0.12, 0.035, 'triangle');
        this.tone(220, t + 0.05, 0.16, 0.025, 'sine');
        break;
      case 'dialogue':
        this.tone(520 + rand(-40, 40), t, 0.035, 0.018, 'square', 900);
        break;
      case 'swing':
        this.noise(t, 0.18, 0.13, 'bandpass', 2200, 1.2);
        this.tone(240, t, 0.1, 0.02, 'sawtooth', 420);
        break;
      case 'heavySwing':
        this.noise(t, 0.34, 0.18, 'bandpass', 840, 0.7);
        this.tone(90, t, 0.28, 0.06, 'sawtooth', 250);
        break;
      case 'hit':
        this.noise(t, 0.14, 0.22, 'lowpass', 580, 0.9);
        this.tone(140, t, 0.16, 0.09, 'sine', 280, 55);
        break;
      case 'heavyHit':
        this.noise(t, 0.3, 0.28, 'lowpass', 420, 0.7);
        this.tone(88, t, 0.44, 0.14, 'sine', 220, 38);
        this.metal(t, 0.012);
        break;
      case 'hurt':
        this.noise(t, 0.22, 0.2, 'lowpass', 300, 0.8);
        this.tone(180, t, 0.15, 0.06, 'square', 400, 70);
        break;
      case 'dodge':
        this.noise(t, 0.24, 0.1, 'bandpass', 700, 0.8);
        this.tone(600, t, 0.22, 0.025, 'sine', 1200, 300);
        break;
      case 'perfect':
        this.bell(1046.5, t, 0.08);
        this.noise(t, 0.3, 0.07, 'highpass', 3000, 0.8);
        break;
      case 'freeze':
        [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => this.tone(f, t + i * 0.055, 0.5, 0.035, 'sine'));
        this.noise(t, 0.7, 0.07, 'highpass', 4200, 0.5);
        break;
      case 'heal':
        [293.66, 440, 587.33, 880].forEach((f, i) => this.tone(f, t + i * 0.09, 0.5, 0.038, 'triangle'));
        break;
      case 'coin':
        this.tone(1318.5, t, 0.08, 0.03, 'square', 3200);
        this.tone(1760, t + 0.055, 0.16, 0.025, 'sine', 4200);
        break;
      case 'relic':
        [261.63, 392, 523.25, 783.99, 1046.5].forEach((f, i) => this.bell(f, t + i * 0.1, 0.06));
        break;
      case 'gong':
        this.bell(110, t, 0.14);
        this.noise(t, 1.6, 0.08, 'lowpass', 800, 0.4);
        break;
      case 'death':
        this.bell(98, t, 0.1);
        this.tone(220, t + 0.2, 2.4, 0.06, 'sawtooth', 380, 48);
        this.noise(t + 0.1, 1.8, 0.09, 'lowpass', 400, 0.4);
        break;
      case 'roar':
        this.tone(110, t, 0.75, 0.09, 'sawtooth', 380, 55);
        this.tone(82, t + 0.08, 0.7, 0.08, 'square', 300, 44);
        this.noise(t, 0.65, 0.12, 'bandpass', 500, 0.4);
        break;
      case 'bossSlam':
        this.tone(55, t, 0.7, 0.2, 'sine', 130, 28);
        this.noise(t, 0.5, 0.22, 'lowpass', 350, 0.5);
        break;
      case 'uiOpen':
        this.tone(293.66, t, 0.14, 0.03, 'triangle');
        this.tone(440, t + 0.06, 0.24, 0.025, 'sine');
        break;
      case 'uiClose':
        this.tone(440, t, 0.12, 0.025, 'triangle');
        this.tone(293.66, t + 0.05, 0.2, 0.02, 'sine');
        break;
      default:
        this.noise(t, 0.1, 0.04, 'bandpass', 1000, 1);
    }
  }

  tone(freq, time, dur, gain, type = 'sine', filterFreq = 5000, endFreq = null) {
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = filterFreq;
    osc.type = type;
    osc.frequency.setValueAtTime(freq, time);
    if (endFreq) osc.frequency.exponentialRampToValueAtTime(endFreq, time + dur);
    g.gain.setValueAtTime(gain, time);
    g.gain.exponentialRampToValueAtTime(0.0001, time + dur);
    osc.connect(filter);
    filter.connect(g);
    g.connect(this.sfxBus);
    osc.start(time);
    osc.stop(time + dur + 0.02);
  }

  suspend() {
    if (!this.ctx) return;
    this.suspended = true;
    this.ctx.suspend().catch(() => {});
  }

  resume() {
    if (!this.ctx) return;
    this.suspended = false;
    this.ctx.resume().catch(() => {});
  }
}
