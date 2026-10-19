import * as THREE from 'three';
import { clamp, damp, lerp } from '../core/utils.js';

export class CameraRig {
  constructor(game) {
    this.game = game;
    this.camera = game.world.camera;
    this.yaw = 0;
    this.pitch = 0.18;
    this.distance = window.innerWidth < 760 ? 9.2 : 8.0;
    this.targetHeight = 2.15;
    this.current = new THREE.Vector3(0, 4, 38);
    this.lookTarget = new THREE.Vector3(0, 2, 25);
    this.shakeAmount = 0;
    this.shakeTime = 0;
    this.shakeDuration = 0;
    this.offset = new THREE.Vector3();
    this.focus = null;
    this.sensitivity = 1;
    this.camera.fov = window.innerWidth < 760 ? 64 : 58;
    this.camera.updateProjectionMatrix();
  }

  setPlayer(player) {
    this.player = player;
    this.current.set(player.position.x, player.position.y + 4, player.position.z + 9);
    this.lookTarget.copy(player.position).add(new THREE.Vector3(0, this.targetHeight, 0));
  }

  update(dt, input) {
    if (!this.player) return;
    const look = input.takeLook();
    this.yaw -= look.x * (input.isTouch ? 1.15 : 1.0);
    this.pitch = clamp(this.pitch + look.y * 0.9, -0.34, 0.88);

    const p = this.player.position;
    const target = new THREE.Vector3(p.x, p.y + this.targetHeight, p.z);
    if (this.focus) {
      target.lerp(this.focus.position, this.focus.weight);
    }
    const dist = this.distance * (this.focus ? 0.85 : 1);
    const horizontal = Math.cos(this.pitch) * dist;
    const shoulder = input.isTouch ? 0.55 : 0.92;
    const desired = new THREE.Vector3(
      target.x + Math.sin(this.yaw) * horizontal + Math.cos(this.yaw) * shoulder,
      target.y + Math.sin(this.pitch) * dist + 1.25,
      target.z + Math.cos(this.yaw) * horizontal - Math.sin(this.yaw) * shoulder
    );
    if (desired.y < 1.2) desired.y = 1.2;
    const follow = 1 - Math.exp(-(this.focus ? 3 : 10) * dt);
    this.current.lerp(desired, follow);
    this.lookTarget.lerp(target, 1 - Math.exp(-(this.focus ? 4 : 14) * dt));
    this.camera.position.copy(this.current);

    if (this.shakeTime > 0) {
      this.shakeTime = Math.max(0, this.shakeTime - dt);
      const strength = this.shakeAmount * (this.shakeTime / Math.max(this.shakeDuration, 0.001));
      this.camera.position.x += (Math.random() - 0.5) * strength;
      this.camera.position.y += (Math.random() - 0.5) * strength * 0.7;
      this.camera.position.z += (Math.random() - 0.5) * strength * 0.5;
      this.lookTarget.x += (Math.random() - 0.5) * strength * 0.25;
      this.lookTarget.y += (Math.random() - 0.5) * strength * 0.18;
    }
    this.camera.lookAt(this.lookTarget);
  }

  shake(amount = 0.3, duration = 0.25) {
    if (!this.game.settings.shake) return;
    this.shakeAmount = Math.max(this.shakeAmount * 0.4, amount);
    this.shakeDuration = duration;
    this.shakeTime = duration;
  }

  setFocus(position, weight = 0.5) {
    this.focus = { position: position.clone(), weight };
  }

  clearFocus() {
    this.focus = null;
  }

  reset() {
    this.yaw = 0;
    this.pitch = 0.18;
    this.focus = null;
    if (this.player) {
      this.current.set(this.player.position.x, 4, this.player.position.z + 9);
      this.lookTarget.copy(this.player.position).add(new THREE.Vector3(0, this.targetHeight, 0));
    }
  }
}
