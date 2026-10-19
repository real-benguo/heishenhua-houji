import * as THREE from 'three';
import { angleLerp, clamp, damp, lerp } from '../core/utils.js';
import { optimizeModel } from '../world/models.js';

export class Player {
  constructor(game) {
    this.game = game;
    this.world = game.world;
    this.difficulty = game.difficulty;
    this.save = game.save;
    this.model = game.models.player;
    optimizeModel(this.model);
    this.rig = this.model.userData.rig;
    this.world.scene.add(this.model);
    this.model.position.copy(this.world.spawnPoint);
    this.model.rotation.y = Math.PI;
    this.position = this.model.position;
    this.facing = Math.PI;
    this.radius = 0.65;

    const bodyLv = this.save.upgrades?.body ?? 0;
    const staffLv = this.save.upgrades?.staff ?? 0;
    const gourdLv = this.save.upgrades?.gourd ?? 0;
    this.maxHp = Math.round((150 + bodyLv * 24) * this.difficulty.playerHp);
    this.hp = this.maxHp;
    this.maxStamina = 100;
    this.stamina = 100;
    this.maxMana = 100;
    this.mana = 100;
    this.attackPower = this.difficulty.playerDamage * (1 + staffLv * 0.13);
    this.maxGourd = 3 + gourdLv;
    this.gourd = this.maxGourd;
    this.focus = 0;
    this.maxFocus = 3;

    this.state = 'idle';
    this.stateTime = 0;
    this.attackStep = 0;
    this.attackHitDone = false;
    this.queuedAttack = false;
    this.invuln = 0;
    this.dodgeTime = 0;
    this.perfectWindow = 0;
    this.perfectUsed = false;
    this.cooldownSkill = 0;
    this.cooldownHeal = 0;
    this.staminaDelay = 0;
    this.isMoving = false;
    this.moveDir = new THREE.Vector3(0, 0, -1);
    this.knockback = new THREE.Vector3();
    this.animTime = 0;
    this.slashes = [];
    this.dead = false;
    this.afterimages = 0;
    this.stats = { damageDealt: 0, perfectDodges: 0, heavies: 0 };
  }

  get alive() {
    return !this.dead;
  }

  get hpRatio() {
    return clamp(this.hp / this.maxHp, 0, 1);
  }

  get forward() {
    return new THREE.Vector3(Math.sin(this.facing), 0, Math.cos(this.facing));
  }

  update(dt) {
    if (this.dead) return;
    this.animTime += dt;
    this.stateTime += dt;
    this.invuln = Math.max(0, this.invuln - dt);
    this.perfectWindow = Math.max(0, this.perfectWindow - dt);
    this.cooldownSkill = Math.max(0, this.cooldownSkill - dt);
    this.cooldownHeal = Math.max(0, this.cooldownHeal - dt);
    this.staminaDelay = Math.max(0, this.staminaDelay - dt);
    this.regen(dt);
    if (!this.game.input.blocked) this.handleActions();

    if (this.state === 'dodge') {
      this.updateDodge(dt);
    } else if (this.state === 'attack') {
      this.updateAttack(dt);
    } else if (this.state === 'heavy') {
      this.updateHeavy(dt);
    } else if (this.state === 'hurt') {
      this.updateHurt(dt);
    } else if (this.state === 'heal') {
      this.updateHeal(dt);
    } else if (this.state === 'skill') {
      this.updateSkill(dt);
    } else {
      this.updateMovement(dt);
    }

    this.position.addScaledVector(this.knockback, dt);
    this.knockback.multiplyScalar(Math.exp(-9 * dt));
    this.world.resolveCollision(this.position, this.radius);
    this.model.position.y = 0;
    this.animate(dt);
  }

  regen(dt) {
    if (this.state !== 'dodge' && this.staminaDelay <= 0) {
      this.stamina = Math.min(this.maxStamina, this.stamina + 30 * dt);
    }
    this.mana = Math.min(this.maxMana, this.mana + 3.2 * dt);
  }

  handleActions() {
    const input = this.game.input;
    const locked = this.state === 'dodge' || this.state === 'hurt' || this.state === 'heal' || this.state === 'skill' || this.state === 'dead';
    if (!locked) {
      if (input.consume('attack')) {
        if (this.state === 'attack') this.queuedAttack = true;
        else this.startAttack(1);
      } else if (input.consume('heavy') && this.focus >= 1) {
        this.startHeavy();
      } else if (input.consume('dodge')) {
        this.startDodge();
      } else if (input.consume('skill') && this.mana >= 30 && this.cooldownSkill <= 0) {
        this.startSkill();
      } else if (input.consume('heal') && this.gourd > 0 && this.hp < this.maxHp && this.cooldownHeal <= 0) {
        this.startHeal();
      }
    } else {
      input.consume('attack');
      input.consume('heavy');
      input.consume('skill');
      input.consume('heal');
      if (this.state === 'dodge') input.consume('dodge');
    }
  }

  updateMovement(dt) {
    const input = this.game.input;
    const move = input.moveVector;
    const mag = Math.hypot(move.x, move.y);
    this.isMoving = mag > 0.08;
    if (this.isMoving) {
      const yaw = this.game.cameraRig.yaw;
      const fx = -Math.sin(yaw);
      const fz = -Math.cos(yaw);
      const rx = Math.cos(yaw);
      const rz = -Math.sin(yaw);
      const dx = fx * -move.y + rx * move.x;
      const dz = fz * -move.y + rz * move.x;
      const len = Math.hypot(dx, dz) || 1;
      this.moveDir.set(dx / len, 0, dz / len);
      this.facing = angleLerp(this.facing, Math.atan2(this.moveDir.x, this.moveDir.z), 1 - Math.exp(-12 * dt));
      const sprint = input.sprinting && this.stamina > 1;
      const speed = sprint ? 7.0 : 4.5;
      if (sprint) {
        this.stamina = Math.max(0, this.stamina - 18 * dt);
        this.staminaDelay = 0.3;
      }
      this.position.addScaledVector(this.moveDir, speed * dt);
      this.model.rotation.y = this.facing;
      if (sprint && Math.random() < dt * 8) this.game.world.spawnSparks(this.position.clone().add(new THREE.Vector3(0, 0.1, 0)), 0xc9b58b, 2);
    } else {
      this.moveDir.set(0, 0, 0);
    }
  }

  startAttack(step) {
    this.state = 'attack';
    this.stateTime = 0;
    this.attackStep = step;
    this.attackHitDone = false;
    this.queuedAttack = false;
    this.model.rotation.y = this.facing;
    this.stamina = Math.max(0, this.stamina - 5);
    this.staminaDelay = 0.5;
    this.game.audio.sfx(step === 3 ? 'heavySwing' : 'swing');
  }

  updateAttack(dt) {
    const input = this.game.input;
    const windup = this.attackStep === 3 ? 0.28 : 0.16;
    const activeEnd = windup + (this.attackStep === 3 ? 0.17 : 0.13);
    const total = this.attackStep === 3 ? 0.62 : 0.44;
    if (this.stateTime >= windup && this.stateTime <= activeEnd && !this.attackHitDone) {
      this.attackHitDone = true;
      const dmg = [0, 16, 18, 28][this.attackStep] * this.attackPower;
      const range = this.attackStep === 3 ? 3.8 : 3.2;
      const arc = this.attackStep === 3 ? Math.PI * 1.15 : Math.PI * 0.75;
      const hits = this.game.damageEnemiesInArc(this.position, range, arc, dmg, this.facing, { knockback: this.attackStep === 3 ? 5 : 2, type: 'light' });
      if (hits) {
        this.focus = Math.min(this.maxFocus, this.focus + 0.34);
        this.game.hitStop(this.attackStep === 3 ? 0.09 : 0.05);
        this.game.cameraRig.shake(0.16 + this.attackStep * 0.03, 0.16);
      }
      this.spawnSlash(this.attackStep === 3 ? 1.6 : 1, this.attackStep === 2 ? -1 : 1);
    }
    if (this.stateTime >= total) {
      if (this.queuedAttack && this.attackStep < 3) {
        this.startAttack(this.attackStep + 1);
      } else {
        this.state = 'idle';
        this.stateTime = 0;
        this.attackStep = 0;
      }
    }
    if (this.stateTime > 0.1) {
      const forwardPush = this.attackStep === 3 ? 0.9 : 1.3;
      this.position.addScaledVector(this.forward, forwardPush * dt);
    }
  }

  startHeavy() {
    if (this.focus < 1) {
      this.game.ui.toast('专注不足。多打几下，或者多挨几下。', 'warn');
      return;
    }
    this.state = 'heavy';
    this.stateTime = 0;
    this.heavyPoints = Math.min(3, Math.floor(this.focus));
    this.focus = Math.max(0, this.focus - this.heavyPoints);
    this.attackHitDone = false;
    this.stats.heavies++;
    this.stamina = Math.max(0, this.stamina - 12);
    this.staminaDelay = 0.6;
    this.game.audio.sfx('heavySwing');
  }

  updateHeavy(dt) {
    if (this.stateTime >= 0.36 && !this.attackHitDone) {
      this.attackHitDone = true;
      const dmg = (52 + this.heavyPoints * 26) * this.attackPower;
      const hits = this.game.damageEnemiesInArc(this.position, 4.6, Math.PI * 2, dmg, this.facing, { knockback: 9, type: 'heavy' });
      this.game.world.spawnShockwave(this.position.clone().add(new THREE.Vector3(0, 0, 1.2)), 0xf3c469);
      this.game.world.spawnSparks(this.position.clone().add(new THREE.Vector3(0, 1.2, 1)), 0xffce72, 24);
      this.game.cameraRig.shake(0.65, 0.38);
      this.game.audio.sfx('heavyHit');
      this.game.audio.sfx('bossSlam');
      this.game.hitStop(0.13);
      if (hits) {
        this.game.ui.toast(`重棍命中 ${hits} 个目标。这就是福报。`, 'good');
      }
    }
    if (this.stateTime >= 0.85) {
      this.state = 'idle';
      this.stateTime = 0;
    }
  }

  startDodge() {
    if (this.stamina < 26) {
      this.game.ui.toast('体力不足。建议先摸一会儿鱼。', 'warn');
      return;
    }
    this.stamina = Math.max(0, this.stamina - 26);
    this.staminaDelay = 0.7;
    this.state = 'dodge';
    this.stateTime = 0;
    this.dodgeTime = 0;
    this.invuln = 0.38;
    this.perfectWindow = 0.32;
    this.perfectUsed = false;
    const move = this.game.input.moveVector;
    if (Math.hypot(move.x, move.y) > 0.1) {
      const yaw = this.game.cameraRig.yaw;
      const fx = -Math.sin(yaw);
      const fz = -Math.cos(yaw);
      const rx = Math.cos(yaw);
      const rz = -Math.sin(yaw);
      const dx = fx * -move.y + rx * move.x;
      const dz = fz * -move.y + rz * move.x;
      const l = Math.hypot(dx, dz) || 1;
      this.moveDir.set(dx / l, 0, dz / l);
    } else {
      this.moveDir.copy(this.forward).multiplyScalar(-1);
    }
    this.facing = Math.atan2(this.moveDir.x, this.moveDir.z);
    this.model.rotation.y = this.facing;
    this.game.audio.sfx('dodge');
  }

  updateDodge(dt) {
    this.dodgeTime += dt;
    const speed = this.dodgeTime < 0.3 ? 12.5 : lerp(10, 0, clamp((this.dodgeTime - 0.3) / 0.2, 0, 1));
    this.position.addScaledVector(this.moveDir, speed * dt);
    if (this.dodgeTime > 0.12 && Math.random() < dt * 30) {
      this.world.spawnSparks(this.position.clone().add(new THREE.Vector3(0, 0.15, 0)), 0xd6c6a0, 2);
    }
    if (this.stateTime >= 0.5) {
      this.state = 'idle';
      this.stateTime = 0;
    }
  }

  startSkill() {
    this.state = 'skill';
    this.stateTime = 0;
    this.mana -= 30;
    this.cooldownSkill = 14;
    this.model.rotation.y = this.facing;
    this.game.audio.sfx('freeze');
    this.game.cameraRig.shake(0.2, 0.25);
  }

  updateSkill(dt) {
    if (this.stateTime >= 0.18 && !this.skillApplied) {
      this.skillApplied = true;
      const count = this.game.immobilizeEnemies(this.position, 9, 2.8);
      this.game.world.spawnShockwave(this.position.clone(), 0x92e4ff);
      this.game.world.spawnRing(this.position.clone(), 0x9fe8ff, 1.5);
      this.game.ui.toast(count ? `定身成功。${count} 个目标开始怀疑人生。` : '定身成功。但没有目标，只有你。', count ? 'good' : 'info');
    }
    if (this.stateTime >= 0.72) {
      this.state = 'idle';
      this.stateTime = 0;
      this.skillApplied = false;
    }
  }

  startHeal() {
    this.state = 'heal';
    this.stateTime = 0;
    this.healApplied = false;
    this.gourd--;
    this.cooldownHeal = 3.5;
    this.game.audio.sfx('heal');
  }

  updateHeal(dt) {
    if (this.stateTime >= 0.55 && !this.healApplied) {
      this.healApplied = true;
      const amount = this.maxHp * 0.42;
      this.hp = Math.min(this.maxHp, this.hp + amount);
      this.game.ui.damageNumber(this.position.clone().add(new THREE.Vector3(0, 2.8, 0)), Math.round(amount), 'heal');
      this.game.world.spawnSparks(this.position.clone().add(new THREE.Vector3(0, 1.3, 0)), 0x8fe5b0, 18);
      this.game.audio.sfx('heal');
    }
    if (this.stateTime >= 1.0) {
      this.state = 'idle';
      this.stateTime = 0;
    }
  }

  updateHurt(dt) {
    if (this.stateTime >= 0.4) {
      this.state = 'idle';
      this.stateTime = 0;
    }
  }

  takeDamage(amount, sourcePosition, opts = {}) {
    if (this.dead) return false;
    if (this.invuln > 0) {
      if (this.state === 'dodge' && this.perfectWindow > 0 && !this.perfectUsed) {
        this.perfectUsed = true;
        this.onPerfectDodge();
      }
      return false;
    }
    const dmg = Math.max(1, Math.round(amount));
    this.hp -= dmg;
    this.invuln = 0.85;
    this.state = 'hurt';
    this.stateTime = 0;
    this.game.audio.sfx('hurt');
    this.game.ui.damageNumber(this.position.clone().add(new THREE.Vector3(0, 2.6, 0)), dmg, 'hurt');
    this.game.ui.hitFlash();
    this.game.cameraRig.shake(0.3, 0.22);
    if (sourcePosition) {
      const dir = new THREE.Vector3().subVectors(this.position, sourcePosition).normalize();
      this.knockback.copy(dir).multiplyScalar(5.5);
    }
    if (navigator.vibrate) navigator.vibrate(35);
    if (this.hp <= 0) {
      this.hp = 0;
      this.die();
    }
    return true;
  }

  onPerfectDodge() {
    this.focus = Math.min(this.maxFocus, this.focus + 0.8);
    this.stats.perfectDodges++;
    this.game.audio.sfx('perfect');
    this.game.slowMotion(0.38, 0.35);
    this.game.ui.toast('完美闪避！您已成功躲避一次周一。', 'perfect');
    this.game.ui.flashVignette('#f5d48a');
    this.game.world.spawnRing(this.position.clone(), 0xffe1a0, 1.2);
    this.game.world.spawnSparks(this.position.clone().add(new THREE.Vector3(0, 1.2, 0)), 0xffe1a0, 16);
  }

  heal(amount) {
    this.hp = Math.min(this.maxHp, this.hp + amount);
  }

  refill() {
    this.hp = this.maxHp;
    this.stamina = this.maxStamina;
    this.mana = this.maxMana;
    this.gourd = this.maxGourd;
    this.cooldownHeal = 0;
    this.cooldownSkill = 0;
  }

  addFocus(amount) {
    this.focus = clamp(this.focus + amount, 0, this.maxFocus);
  }

  die() {
    if (this.dead) return;
    this.dead = true;
    this.state = 'dead';
    this.model.rotation.z = 1.35;
    this.game.onPlayerDeath();
  }

  reviveAtSpawn() {
    this.dead = false;
    this.hp = this.maxHp;
    this.stamina = this.maxStamina;
    this.mana = this.maxMana;
    this.gourd = this.maxGourd;
    this.state = 'idle';
    this.stateTime = 0;
    this.invuln = 1.2;
    this.model.rotation.set(0, Math.PI, 0);
    this.position.copy(this.world.spawnPoint);
  }

  spawnSlash(scale = 1, direction = 1) {
    const geo = new THREE.TorusGeometry(2.4 * scale, 0.07 + scale * 0.02, 4, 22, Math.PI * 1.1);
    const mat = new THREE.MeshBasicMaterial({
      color: 0xffd783,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const slash = new THREE.Mesh(geo, mat);
    slash.position.copy(this.position).add(new THREE.Vector3(0, 1.35, 0));
    slash.rotation.x = Math.PI / 2;
    slash.rotation.z = this.facing + (direction > 0 ? -0.5 : 2.4);
    slash.scale.setScalar(0.7);
    this.world.scene.add(slash);
    this.slashes.push({ mesh: slash, life: 0.28, age: 0, direction });
  }

  updateSlashes(dt) {
    for (let i = this.slashes.length - 1; i >= 0; i--) {
      const s = this.slashes[i];
      s.age += dt;
      const k = clamp(s.age / s.life, 0, 1);
      s.mesh.scale.setScalar(0.7 + k * 0.55);
      s.mesh.material.opacity = (1 - k) * 0.85;
      s.mesh.rotation.z += dt * 8 * s.direction;
      if (s.age >= s.life) {
        this.world.scene.remove(s.mesh);
        s.mesh.geometry.dispose();
        s.mesh.material.dispose();
        this.slashes.splice(i, 1);
      }
    }
  }

  animate(dt) {
    this.updateSlashes(dt);
    const rig = this.rig;
    const t = this.animTime;
    const moving = this.isMoving;
    const sprint = moving && this.game.input.sprinting;
    const walkSpeed = sprint ? 12 : 8;
    const stride = moving ? Math.sin(t * walkSpeed) : 0;
    const bob = moving ? Math.abs(Math.sin(t * walkSpeed)) * 0.06 : Math.sin(t * 1.7) * 0.015;

    rig.hips.position.y = 0.95 + bob;
    rig.hips.rotation.y = 0;
    rig.hips.rotation.x = 0;
    rig.torso.rotation.x = moving ? 0.08 : Math.sin(t * 1.2) * 0.02;
    rig.torso.rotation.z = 0;
    rig.head.rotation.y = moving ? 0 : Math.sin(t * 0.6) * 0.1;
    rig.head.rotation.x = 0;
    rig.tail.rotation.y = Math.sin(t * 1.5) * 0.2;
    rig.tail.rotation.x = Math.sin(t * 1.1) * 0.08;
    rig.legs.left.hip.rotation.x = stride * 0.6;
    rig.legs.right.hip.rotation.x = -stride * 0.6;
    rig.legs.left.knee.rotation.x = Math.max(0, -stride) * 0.55;
    rig.legs.right.knee.rotation.x = Math.max(0, stride) * 0.55;
    rig.arms.left.shoulder.rotation.x = -stride * 0.5;
    rig.arms.left.shoulder.rotation.z = 0.08;
    rig.arms.right.shoulder.rotation.x = stride * 0.28;
    rig.arms.right.shoulder.rotation.z = -0.08;
    rig.arms.left.elbow.rotation.x = -0.2;
    rig.arms.right.elbow.rotation.x = -0.22;
    rig.staffPivot.rotation.set(0.35, 0, -0.18);
    rig.staffPivot.position.set(0, -0.1, 0.03);
    this.model.rotation.z = 0;
    this.model.position.y = 0;

    if (this.state === 'attack') {
      const p = clamp(this.stateTime / 0.44, 0, 1);
      const swing = Math.sin(p * Math.PI);
      if (this.attackStep === 1) {
        rig.torso.rotation.y = -0.6 * swing;
        rig.arms.right.shoulder.rotation.x = -1.8 * swing;
        rig.arms.right.shoulder.rotation.z = -0.5 * swing;
        rig.arms.left.shoulder.rotation.x = 0.7 * swing;
        rig.staffPivot.rotation.x = 1.2 - swing * 2.2;
        rig.staffPivot.rotation.z = -0.4 - swing * 0.8;
      } else if (this.attackStep === 2) {
        rig.torso.rotation.y = 0.8 * swing;
        rig.arms.right.shoulder.rotation.x = -0.5;
        rig.arms.right.shoulder.rotation.z = 1.5 * swing;
        rig.arms.left.shoulder.rotation.x = -0.9 * swing;
        rig.staffPivot.rotation.x = 1.5 - swing * 1.8;
        rig.staffPivot.rotation.z = 0.8 * swing;
      } else {
        const q = clamp((this.stateTime - 0.2) / 0.35, 0, 1);
        rig.torso.rotation.x = -0.2 + q * 0.7;
        rig.arms.right.shoulder.rotation.x = -3.0 + q * 4.2;
        rig.arms.left.shoulder.rotation.x = -2.6 + q * 4.0;
        rig.arms.right.shoulder.rotation.z = 0.2;
        rig.arms.left.shoulder.rotation.z = -0.2;
        rig.staffPivot.rotation.x = 0.2;
        rig.staffPivot.rotation.z = Math.sin(q * Math.PI) * 1.5;
        this.model.position.y = Math.sin(q * Math.PI) * 0.15;
      }
    } else if (this.state === 'heavy') {
      const p = clamp(this.stateTime / 0.85, 0, 1);
      if (p < 0.45) {
        const q = p / 0.45;
        rig.arms.right.shoulder.rotation.x = lerp(0, -3.2, q);
        rig.arms.left.shoulder.rotation.x = lerp(0, -3.0, q);
        rig.torso.rotation.x = lerp(0, -0.3, q);
        rig.staffPivot.rotation.x = -0.1;
        this.model.position.y = q * 0.35;
      } else {
        const q = (p - 0.45) / 0.55;
        rig.arms.right.shoulder.rotation.x = lerp(-3.2, 1.0, Math.min(1, q * 2.2));
        rig.arms.left.shoulder.rotation.x = lerp(-3.0, 1.0, Math.min(1, q * 2.2));
        rig.torso.rotation.x = lerp(-0.3, 0.6, Math.min(1, q * 2.2));
        rig.staffPivot.rotation.x = 0.3;
        this.model.position.y = Math.max(0, 0.35 - q * 0.5);
      }
    } else if (this.state === 'dodge') {
      const p = clamp(this.stateTime / 0.5, 0, 1);
      this.model.rotation.z = Math.sin(p * Math.PI) * 0.6;
      rig.torso.rotation.x = 0.55 * Math.sin(p * Math.PI);
      rig.arms.right.shoulder.rotation.x = 0.6;
      rig.arms.left.shoulder.rotation.x = 0.6;
      rig.legs.left.hip.rotation.x = 0.8;
      rig.legs.right.hip.rotation.x = -0.4;
      this.model.position.y = Math.sin(p * Math.PI) * 0.18;
    } else if (this.state === 'hurt') {
      const p = clamp(this.stateTime / 0.4, 0, 1);
      this.model.rotation.z = -Math.sin(p * Math.PI) * 0.3;
      rig.torso.rotation.x = -0.35;
      rig.head.rotation.x = -0.2;
    } else if (this.state === 'heal') {
      const p = clamp(this.stateTime / 1.0, 0, 1);
      rig.arms.right.shoulder.rotation.x = -2.1;
      rig.arms.right.elbow.rotation.x = -1.4;
      rig.arms.left.shoulder.rotation.x = -0.7;
      rig.head.rotation.x = -0.25;
      this.model.rotation.z = Math.sin(p * Math.PI) * 0.05;
    } else if (this.state === 'skill') {
      const p = clamp(this.stateTime / 0.72, 0, 1);
      rig.arms.left.shoulder.rotation.x = -2.7;
      rig.arms.right.shoulder.rotation.x = -2.7;
      rig.arms.left.elbow.rotation.x = -1.1;
      rig.arms.right.elbow.rotation.x = -1.1;
      rig.torso.rotation.x = -0.1;
      this.model.position.y = Math.sin(p * Math.PI) * 0.12;
    } else if (this.dead) {
      this.model.rotation.z = 1.35;
      rig.arms.left.shoulder.rotation.x = 0.4;
      rig.arms.right.shoulder.rotation.x = -0.3;
    }

    if (this.state !== 'attack' && this.state !== 'heavy') {
      rig.torso.rotation.y = moving ? Math.sin(t * walkSpeed) * 0.08 : Math.sin(t * 1.2) * 0.03;
    }
    if (this.state === 'idle' && !moving) {
      rig.arms.left.shoulder.rotation.x = Math.sin(t * 1.2) * 0.03;
      rig.arms.right.shoulder.rotation.x = 0.05 + Math.sin(t * 1.2 + 0.6) * 0.03;
    }
  }
}
