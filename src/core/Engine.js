import * as THREE from 'three';
import { clamp } from './utils.js';

export class Engine {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
      stencil: false,
    });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setClearColor(0x090b0d, 1);
    this.clock = new THREE.Clock();
    this.scene = null;
    this.camera = null;
    this.update = null;
    this.paused = false;
    this.quality = 'high';
    this.width = 0;
    this.height = 0;
    this.pixelRatio = 1;
    this.onResize = null;
    this.frame = 0;
    this.fps = 60;
    this._fpsAccum = 0;
    this._fpsFrames = 0;
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.loop = this.loop.bind(this);
    requestAnimationFrame(this.loop);
  }

  resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.width = width;
    this.height = height;
    const cap = this.quality === 'low' ? 1 : this.quality === 'medium' ? 1.5 : 2;
    this.pixelRatio = Math.min(window.devicePixelRatio || 1, cap);
    this.renderer.setPixelRatio(this.pixelRatio);
    this.renderer.setSize(width, height, false);
    if (this.camera) {
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
    }
    this.onResize?.(width, height);
  }

  setQuality(quality) {
    this.quality = quality;
    this.renderer.shadowMap.enabled = quality !== 'low';
    this.renderer.shadowMap.type = quality === 'high' ? THREE.PCFSoftShadowMap : THREE.PCFShadowMap;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, quality === 'low' ? 1 : quality === 'medium' ? 1.5 : 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight, false);
    this.scene?.traverse((obj) => {
      if (obj.isLight && obj.isDirectionalLight) {
        obj.castShadow = quality !== 'low';
        if (obj.shadow) obj.shadow.mapSize.set(quality === 'high' ? 1536 : 768, quality === 'high' ? 1536 : 768);
      }
    });
  }

  setScene(scene, camera, update) {
    this.scene = scene;
    this.camera = camera;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    this.update = update;
    this.clock.getDelta();
  }

  loop() {
    requestAnimationFrame(this.loop);
    const rawDelta = this.clock.getDelta();
    const dt = clamp(rawDelta, 0, 0.05);
    this._fpsAccum += rawDelta;
    this._fpsFrames++;
    if (this._fpsAccum > 1) {
      this.fps = Math.round(this._fpsFrames / this._fpsAccum);
      this._fpsAccum = 0;
      this._fpsFrames = 0;
    }
    if (this.scene && this.camera) {
      if (!this.paused && this.update) this.update(dt);
      this.renderer.render(this.scene, this.camera);
    }
    this.frame++;
  }
}
