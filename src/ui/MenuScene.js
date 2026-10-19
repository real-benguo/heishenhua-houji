import * as THREE from 'three';
import {
  box,
  cone,
  cyl,
  group,
  makeDust,
  makeGate,
  makeLantern,
  makeMonkey,
  makeMoon,
  makeRock,
  makeSmokePuff,
  makeTree,
  material,
  mesh,
  signPlane,
  sphere,
} from '../world/models.js';
import { rand, seededRandom } from '../core/utils.js';

export class MenuScene {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 220);
    this.scene.background = new THREE.Color(0x080b0d);
    this.scene.fog = new THREE.FogExp2(0x0d1213, 0.017);
    this.time = 0;
    this.pointer = { x: 0, y: 0 };
    this.target = { x: 0, y: 0 };
    this.rnd = seededRandom(421);
    this.build();
    window.addEventListener('pointermove', (e) => {
      this.target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      this.target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    });
  }

  build() {
    this.buildSky();
    this.buildLights();
    this.buildGround();
    this.buildTemple();
    this.buildStatue();
    this.buildMountains();
    this.buildAtmosphere();
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const portrait = window.innerHeight > window.innerWidth;
    this.camera.fov = portrait ? 58 : 46;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.base = portrait ? new THREE.Vector3(0, 5.2, 21) : new THREE.Vector3(0.4, 5.0, 15.5);
  }

  buildSky() {
    const geo = new THREE.SphereGeometry(160, 28, 16);
    const mat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        top: { value: new THREE.Color(0x050709) },
        bottom: { value: new THREE.Color(0x2a241a) },
      },
      vertexShader: `varying vec3 vWorld; void main(){ vec4 wp=modelMatrix*vec4(position,1.0); vWorld=wp.xyz; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
      fragmentShader: `uniform vec3 top; uniform vec3 bottom; varying vec3 vWorld; void main(){ float h=normalize(vWorld+vec3(0.0,14.0,0.0)).y; float t=pow(max(h,0.0),0.62); gl_FragColor=vec4(mix(bottom,top,t),1.0); }`,
    });
    this.scene.add(new THREE.Mesh(geo, mat));
    const moon = makeMoon(0xffe1a2, 34);
    moon.position.set(17, 20, -54);
    this.scene.add(moon);
    this.moon = moon;
    for (let i = 0; i < 100; i++) {
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.04 + this.rnd() * 0.1, 4, 3),
        new THREE.MeshBasicMaterial({ color: 0xffe8b2, transparent: true, opacity: 0.2 + this.rnd() * 0.5 })
      );
      dot.position.set((this.rnd() - 0.5) * 150, 25 + this.rnd() * 55, -20 - this.rnd() * 100);
      this.scene.add(dot);
    }
  }

  buildLights() {
    this.scene.add(new THREE.HemisphereLight(0x91a9b8, 0x18140f, 0.68));
    const moonLight = new THREE.DirectionalLight(0xbfd8ea, 2.4);
    moonLight.position.set(22, 32, -28);
    moonLight.castShadow = true;
    moonLight.shadow.mapSize.set(1536, 1536);
    moonLight.shadow.camera.left = -26;
    moonLight.shadow.camera.right = 26;
    moonLight.shadow.camera.top = 30;
    moonLight.shadow.camera.bottom = -18;
    moonLight.shadow.camera.far = 90;
    moonLight.shadow.bias = -0.001;
    this.scene.add(moonLight);
    const warm = new THREE.DirectionalLight(0xffb167, 2.1);
    warm.position.set(-16, 9, 10);
    this.scene.add(warm);
    const rim = new THREE.DirectionalLight(0xffd18a, 1.3);
    rim.position.set(10, 6, -20);
    this.scene.add(rim);
    this.warmLight = warm;
    for (let i = 0; i < 4; i++) {
      const lamp = makeLantern(0xb53827, 1.15);
      lamp.position.set(-8 + i * 5.5, 3.4 + Math.sin(i) * 0.5, -4 - i * 1.3);
      this.scene.add(lamp);
      this.lamp = lamp;
    }
  }

  buildGround() {
    const tex = this.makeStoneTexture();
    const geo = new THREE.PlaneGeometry(140, 140, 30, 30);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      if (Math.hypot(x, z + 8) > 18) pos.setY(i, Math.sin(x * 0.24) * 0.8 + Math.cos(z * 0.3) * 0.6);
    }
    geo.computeVertexNormals();
    const ground = new THREE.Mesh(
      geo,
      new THREE.MeshStandardMaterial({ map: tex, color: 0x282824, roughness: 1, metalness: 0.03, flatShading: true })
    );
    ground.receiveShadow = true;
    this.scene.add(ground);
    // 石板路
    for (let i = 0; i < 18; i++) {
      const z = 22 - i * 2.2;
      const slab = box(4.4 + this.rnd() * 1.2, 0.12, 1.7, i % 2 ? 0x38352d : 0x403c32, [(this.rnd() - 0.5) * 0.8, 0.02, z], [0, (this.rnd() - 0.5) * 0.08, 0], this.scene);
      slab.receiveShadow = true;
    }
    // 前景香炉
    const burner = group(this.scene, [-5.5, 0, 7]);
    cyl(0.8, 1.0, 0.5, 0x2d2b27, [0, 0.25, 0], [0, 0, 0], burner, 10);
    for (let i = 0; i < 4; i++) cyl(0.05, 0.05, 1.0 + i * 0.1, 0x3a2b1f, [Math.cos(i * 1.6) * 0.25, 0.75, Math.sin(i * 1.6) * 0.25], [0.1, 0, 0.05], burner, 5);
    const ember = new THREE.PointLight(0xff7d32, 1.2, 6, 2);
    ember.position.set(0, 0.8, 0);
    burner.add(ember);
    for (let i = 0; i < 3; i++) {
      const smoke = makeSmokePuff(0xa9a59b);
      smoke.position.set(-5.5 + (this.rnd() - 0.5) * 1.5, 1.1 + i * 1.0, 7 + (this.rnd() - 0.5) * 0.8);
      this.scene.add(smoke);
      this.smoke = this.smoke || [];
      this.smoke.push(smoke);
    }
    // 前景大石与插在地上的棍子
    const rock = makeRock(2.1, 0x4a4841);
    rock.position.set(-12, 0, 8);
    rock.scale.set(1.4, 1.1, 1.2);
    this.scene.add(rock);
    const staff = group(this.scene, [-11, 0, 8], [0.22, 0, 0.28]);
    cyl(0.07, 0.07, 11, 0x4a231b, [0, 5.3, 0], [0, 0, 0], staff, 8);
    cyl(0.12, 0.12, 1.3, 0xd1a14d, [0, 10.8, 0], [0, 0, 0], staff, 8);
    mesh(staff, new THREE.IcosahedronGeometry(0.16, 0), 0xf2d17d, [0, 11.5, 0]);
  }

  makeStoneTexture() {
    const c = document.createElement('canvas');
    c.width = c.height = 512;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#2b2a26';
    ctx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 5000; i++) {
      const g = 25 + Math.random() * 35;
      ctx.fillStyle = `rgba(${g},${g - 2},${g - 5},${Math.random() * 0.5})`;
      ctx.fillRect(Math.random() * 512, Math.random() * 512, 1 + Math.random() * 3, 1 + Math.random() * 3);
    }
    for (let i = 0; i < 22; i++) {
      ctx.strokeStyle = `rgba(10,10,9,${0.15 + Math.random() * 0.2})`;
      ctx.lineWidth = 0.5 + Math.random();
      ctx.beginPath();
      let x = Math.random() * 512;
      let y = Math.random() * 512;
      ctx.moveTo(x, y);
      for (let j = 0; j < 5; j++) {
        x += (Math.random() - 0.5) * 90;
        y += (Math.random() - 0.5) * 90;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(10, 10);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  buildTemple() {
    const gate = makeGate({ gate: 0x6e211c, gold: 0xc59a4f, gateText: '花 果 山' });
    gate.position.set(1, 0, -19);
    gate.scale.setScalar(2.25);
    this.scene.add(gate);
    const plaque = signPlane('灵山集团 · 花果山分公司', 8.4, 0.85, {
      color: '#e8c477',
      fontSize: 58,
      width: 1024,
      height: 128,
      bg: 'rgba(12,10,8,0.55)',
      border: true,
      borderColor: '#8d6a31',
    });
    plaque.position.set(1, 7.4, -18.2);
    this.scene.add(plaque);
    // 台阶
    for (let i = 0; i < 4; i++) {
      const step = box(17 - i * 0.6, 0.22, 3.2, 0x3a382f, [1, 0.11 + i * 0.22, -10.8], [0, 0, 0], this.scene);
      step.receiveShadow = true;
    }
    // 侧边幡
    for (const side of [-1, 1]) {
      const pole = group(this.scene, [side * 8.5, 0, -10]);
      cyl(0.06, 0.08, 8.5, 0x3e2f22, [0, 4.2, 0], [0, 0, 0], pole, 6);
      const cloth = new THREE.Mesh(
        new THREE.PlaneGeometry(1.15, 4.2, 4, 8),
        new THREE.MeshStandardMaterial({ color: side < 0 ? 0x8c2820 : 0x2e3e33, roughness: 1, side: THREE.DoubleSide, flatShading: true })
      );
      cloth.position.set(0.58, 5.2, 0);
      pole.add(cloth);
      const text = signPlane(side < 0 ? '急' : '猴', 0.9, 3.8, { color: '#d8b25f', fontSize: 250, vertical: true, width: 256, height: 1024 });
      text.position.set(0.58, 5.2, 0.02);
      pole.add(text);
    }
    // 远处的香客（低模猴子）
    const monk = makeMonkey({ fur: 0x3a342d, cloth: 0x3f3a30, gold: 0x8c763e, staff: false, badge: false });
    monk.position.set(4.2, 0.1, -7.5);
    monk.rotation.y = 2.7;
    monk.scale.setScalar(0.9);
    this.scene.add(monk);
    this.monk = monk;
  }

  buildStatue() {
    const statue = makeMonkey({ fur: 0x3a3b37, cloth: 0x343631, gold: 0x897646, face: 0x4f5049, staff: true, badge: false });
    statue.position.set(13.5, 2.3, -14);
    statue.rotation.y = -0.8;
    statue.scale.setScalar(2.25);
    statue.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
      }
    });
    this.scene.add(statue);
    // 石座
    const base = group(this.scene, [13.5, 0, -14]);
    for (let i = 0; i < 4; i++) {
      cone(5.5 - i * 0.55, 1.1, 0x373833, [0, 0.55 + i * 1.1, 0], [0, i * 0.4, 0], base, 7);
    }
    this.statue = statue;
    // 金箍反光
    const rim = new THREE.PointLight(0xffc46b, 1.8, 16, 2);
    rim.position.set(10, 8, -10);
    this.scene.add(rim);
  }

  buildMountains() {
    for (let i = 0; i < 18; i++) {
      const a = this.rnd() * Math.PI * 2;
      const r = 48 + this.rnd() * 30;
      if (Math.sin(a) > 0.2) continue;
      const h = 16 + this.rnd() * 34;
      cone(9 + this.rnd() * 12, h, i % 2 ? 0x161b1b : 0x1c201d, [Math.cos(a) * r, h / 2 - 2, Math.sin(a) * r - 8], [0, this.rnd() * 3, 0], this.scene, 6);
    }
    // 雾中的松树
    for (let i = 0; i < 5; i++) {
      const tree = makeTree('pine', this.rnd);
      tree.position.set(-22 + i * 9, 0, -27 - this.rnd() * 10);
      tree.scale.setScalar(2.3);
      this.scene.add(tree);
    }
  }

  buildAtmosphere() {
    const dust = makeDust(220, 0xffd18a, 34, 18);
    dust.material.size = 0.1;
    dust.material.opacity = 0.8;
    dust.position.z = -2;
    this.scene.add(dust);
    this.dust = dust;
    const fogMat = new THREE.MeshBasicMaterial({ color: 0x8b8a78, transparent: true, opacity: 0.06, depthWrite: false, side: THREE.DoubleSide });
    for (let i = 0; i < 5; i++) {
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(60, 14), fogMat.clone());
      plane.rotation.x = -Math.PI / 2;
      plane.position.set((this.rnd() - 0.5) * 20, 0.25 + i * 0.16, 2 - i * 9);
      plane.material.opacity = 0.04 + i * 0.015;
      this.scene.add(plane);
      this.mist = this.mist || [];
      this.mist.push(plane);
    }
  }

  update(dt) {
    this.time += dt;
    this.pointer.x += (this.target.x - this.pointer.x) * Math.min(1, dt * 2.2);
    this.pointer.y += (this.target.y - this.pointer.y) * Math.min(1, dt * 2.2);
    const t = this.time;
    const drift = Math.sin(t * 0.1) * 0.6;
    const base = this.base || new THREE.Vector3(0.4, 5.0, 15.5);
    this.camera.position.set(
      base.x + drift + this.pointer.x * 1.1,
      base.y + Math.sin(t * 0.24) * 0.08 - this.pointer.y * 0.45,
      base.z + Math.sin(t * 0.12) * 0.35
    );
    this.camera.lookAt(0.5 + this.pointer.x * 0.4, 3.4 - this.pointer.y * 0.2, -8);
    if (this.dust) {
      const pos = this.dust.geometry.attributes.position;
      const baseArr = this.dust.userData.base;
      const phases = this.dust.userData.phases;
      for (let i = 0; i < pos.count; i++) {
        const i3 = i * 3;
        pos.array[i3] = baseArr[i3] + Math.sin(t * 0.22 + phases[i]) * 1.4;
        pos.array[i3 + 1] = (baseArr[i3 + 1] + t * 0.35 + phases[i] * 0.2) % 18;
        pos.array[i3 + 2] = baseArr[i3 + 2] + Math.cos(t * 0.2 + phases[i]) * 1.4;
      }
      pos.needsUpdate = true;
    }
    if (this.monk) {
      this.monk.userData.rig.head.rotation.y = Math.sin(t * 0.5) * 0.15;
      this.monk.userData.rig.tail.rotation.y = Math.sin(t * 0.9) * 0.25;
    }
    if (this.smoke) {
      this.smoke.forEach((s, i) => {
        s.position.y += dt * (0.12 + i * 0.03);
        s.rotation.y += dt * 0.08;
        if (s.position.y > 8) s.position.y = 1.1;
      });
    }
    if (this.mist) {
      this.mist.forEach((m, i) => {
        m.position.x = Math.sin(t * 0.05 + i) * 3 + (i % 2 ? 4 : -4);
        m.material.opacity = 0.04 + i * 0.012 + Math.sin(t * 0.2 + i) * 0.01;
      });
    }
    if (this.warmLight) this.warmLight.intensity = 2.0 + Math.sin(t * 1.3) * 0.14;
    if (this.moon) this.moon.material.opacity = 0.92 + Math.sin(t * 0.5) * 0.04;
    if (this.statue) this.statue.rotation.y = -0.8 + Math.sin(t * 0.08) * 0.02;
  }
}
