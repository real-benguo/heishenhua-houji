import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { clamp, rand, seededRandom } from '../core/utils.js';
import {
  banner,
  box,
  cone,
  cyl,
  group,
  makeBannerPole,
  makeChest,
  makeCloud,
  makeDesk,
  makeDust,
  makeGate,
  makeGrill,
  makeHitRing,
  makeHoloBarrier,
  makeKeeper,
  makeLantern,
  makeMoon,
  makeObjectiveBeam,
  makePagoda,
  makeRock,
  makeScooter,
  makeShrine,
  makeSmokePuff,
  makeSpark,
  makeSpeaker,
  makeTree,
  material,
  mesh,
  optimizeModel,
  signPlane,
  sphere,
} from './models.js';
import { makeBajie } from './models.js';

const THEME_DEFAULTS = {
  skyTop: 0x1a2535,
  skyBottom: 0xc5985b,
  fog: 0x9a8365,
  fogDensity: 0.011,
  ground: 0x4b5539,
  ground2: 0x6d7448,
  path: 0x8a7b5f,
  arena: 0x5d5b4d,
  sun: 0xffd9a0,
  hemi: 0x9db5ca,
  accent: 0xc25b36,
  rim: 0xffb35f,
};

const P = (x, y, z) => new THREE.Vector3(x, y, z);

function disposeObject(root) {
  root.traverse((obj) => {
    if (obj.geometry) obj.geometry.dispose();
  });
}

function makeRibbon(points, width, color, y = 0.035) {
  const positions = [];
  const uvs = [];
  const indices = [];
  const half = width / 2;
  for (let i = 0; i < points.length; i++) {
    const prev = points[Math.max(0, i - 1)];
    const next = points[Math.min(points.length - 1, i + 1)];
    const dir = new THREE.Vector3(next.x - prev.x, 0, next.z - prev.z).normalize();
    const normal = new THREE.Vector3(-dir.z, 0, dir.x);
    const a = points[i].clone().addScaledVector(normal, half);
    const b = points[i].clone().addScaledVector(normal, -half);
    positions.push(a.x, y, a.z, b.x, y, b.z);
    uvs.push(0, i / points.length, 1, i / points.length);
    if (i < points.length - 1) {
      const k = i * 2;
      indices.push(k, k + 1, k + 2, k + 1, k + 3, k + 2);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  const mesh1 = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color, roughness: 0.98, flatShading: true, polygonOffset: true, polygonOffsetFactor: -1 }));
  mesh1.receiveShadow = true;
  return mesh1;
}

function makeSky(top, bottom) {
  const geo = new THREE.SphereGeometry(180, 24, 14);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      topColor: { value: new THREE.Color(top) },
      bottomColor: { value: new THREE.Color(bottom) },
      offset: { value: 20 },
      exponent: { value: 0.72 },
    },
    vertexShader: `
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform float offset;
      uniform float exponent;
      varying vec3 vWorldPosition;
      void main() {
        float h = normalize(vWorldPosition + vec3(0.0, offset, 0.0)).y;
        float t = max(pow(max(h, 0.0), exponent), 0.0);
        gl_FragColor = vec4(mix(bottomColor, topColor, t), 1.0);
      }
    `,
  });
  return new THREE.Mesh(geo, mat);
}

export class World {
  constructor(def) {
    this.def = def;
    this.theme = { ...THEME_DEFAULTS, ...(def.theme || {}) };
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 240);
    this.colliders = [];
    this.interactables = [];
    this.effects = [];
    this.sway = [];
    this.dust = [];
    this.clouds = [];
    this.lanterns = [];
    this.time = 0;
    this.gateOpen = false;
    this.barrierOpacity = 0.28;
    this.rnd = seededRandom(def.seed ?? 7);
    this.enemySpawns = [];
    this.chests = [];
    this.objectiveTarget = null;
    this.spawnPoint = P(0, 0, 29);
    this.bossPoint = P(0, 0, -24);
    this.shrinePoint = P(6, 0, 27);
    this.keeperPoint = P(-5, 0, 27);
    this.build();
  }

  build() {
    const t = this.theme;
    this.scene.fog = new THREE.FogExp2(t.fog, t.fogDensity);
    this.scene.background = new THREE.Color(t.fog);
    this.buildSky();
    this.buildLights();
    this.buildTerrain();
    this.buildArena();
    this.buildGate();
    this.buildShrine();
    this.buildNpc();
    this.buildProps();
    this.buildAtmosphere();
    this.buildObjective();
    this.optimizeStatic();
    this.camera.position.set(0, 6, 39);
    this.camera.lookAt(0, 2, 0);
  }

  optimizeStatic() {
    this.scene.updateMatrixWorld(true);
    const excluded = new Set([
      this.sky, this.terrain, this.path, this.gate, this.gateWalls, this.barrier,
      this.shrine, this.keeper, this.bajie, this.objective, this.arenaSet,
      this.cloudLayer, this.dustPoints, this.snowPoints, this.ashPoints,
      ...this.chests, ...this.sway.map((s) => s.object), ...this.clouds,
    ]);
    const isExcluded = (obj) => {
      let current = obj;
      while (current && current !== this.scene) {
        if (excluded.has(current)) return true;
        current = current.parent;
      }
      return false;
    };
    const groups = new Map();
    const originals = [];
    this.scene.traverse((obj) => {
      if (!obj.isMesh || obj.isInstancedMesh || obj.isSkinnedMesh) return;
      if (obj.material?.isShaderMaterial || obj.material?.isSpriteMaterial) return;
      if (Array.isArray(obj.material) || obj.material?.map || obj.material?.transparent) return;
      if (obj.material?.vertexColors) return;
      if (obj.castShadow === false && obj.receiveShadow === false && !obj.material?.isMeshStandardMaterial) return;
      if (isExcluded(obj)) return;
      if (!obj.geometry?.attributes?.position) return;
      const key = `${obj.material.uuid}|${obj.castShadow ? 1 : 0}|${obj.receiveShadow ? 1 : 0}`;
      if (!groups.has(key)) groups.set(key, { material: obj.material, geometry: [], cast: obj.castShadow, receive: obj.receiveShadow, meshes: [] });
      const item = groups.get(key);
      let geometry = obj.geometry.index ? obj.geometry.toNonIndexed() : obj.geometry.clone();
      geometry.applyMatrix4(obj.matrixWorld);
      for (const name of Object.keys(geometry.attributes)) {
        if (name !== 'position' && name !== 'normal') geometry.deleteAttribute(name);
      }
      if (!geometry.getAttribute('normal')) geometry.computeVertexNormals();
      item.geometry.push(geometry);
      item.meshes.push(obj);
      originals.push(obj);
    });
    for (const item of groups.values()) {
      if (item.geometry.length < 2) {
        item.geometry.forEach((g) => g.dispose());
        continue;
      }
      const merged = mergeGeometries(item.geometry, false);
      item.geometry.forEach((g) => g.dispose());
      if (!merged) continue;
      const positions = merged.getAttribute('position')?.array;
      let invalid = !positions;
      if (positions) {
        for (let i = 0; i < positions.length; i++) {
          if (Number.isNaN(positions[i])) {
            invalid = true;
            break;
          }
        }
      }
      if (invalid) {
        merged.dispose();
        continue;
      }
      const mesh = new THREE.Mesh(merged, item.material);
      mesh.castShadow = item.cast;
      mesh.receiveShadow = item.receive;
      mesh.matrixAutoUpdate = false;
      mesh.updateMatrix();
      this.scene.add(mesh);
      for (const obj of item.meshes) obj.removeFromParent();
    }
  }

  buildSky() {
    const t = this.theme;
    this.sky = makeSky(t.skyTop, t.skyBottom);
    this.scene.add(this.sky);
    const sunPos = t.sunPosition ?? [18, 36, -108];
    this.sunDisc = makeMoon(t.sun, t.sunSize ?? 17);
    this.sunDisc.position.set(sunPos[0], sunPos[1], sunPos[2]);
    this.scene.add(this.sunDisc);
    const rnd = this.rnd;
    if (t.stars) {
      const count = 260;
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        positions[i * 3] = (rnd() - 0.5) * 180;
        positions[i * 3 + 1] = 35 + rnd() * 80;
        positions[i * 3 + 2] = (rnd() - 0.5) * 180;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const mat = new THREE.PointsMaterial({ color: 0xffe4ae, size: 0.38, transparent: true, opacity: 0.75, depthWrite: false });
      this.scene.add(new THREE.Points(geo, mat));
    }
    this.cloudLayer = new THREE.Group();
    this.scene.add(this.cloudLayer);
    const cloudCount = t.clouds ?? 8;
    for (let i = 0; i < cloudCount; i++) {
      const cloud = makeCloud(2.5 + rnd() * 4);
      cloud.position.set((rnd() - 0.5) * 150, 15 + rnd() * 18, -30 - rnd() * 70);
      cloud.userData.speed = 0.4 + rnd() * 0.6;
      this.cloudLayer.add(cloud);
      this.clouds.push(cloud);
    }
  }

  buildLights() {
    const t = this.theme;
    const hemi = new THREE.HemisphereLight(t.hemi, t.ground, t.night ? 1.45 : 1.6);
    this.scene.add(hemi);
    if (t.night) {
      const ambient = new THREE.AmbientLight(t.hemi, 0.38);
      this.scene.add(ambient);
    }
    const sun = new THREE.DirectionalLight(t.sun, t.night ? 2.1 : 2.45);
    sun.position.set(-22, 36, 18);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1536, 1536);
    sun.shadow.camera.left = -42;
    sun.shadow.camera.right = 42;
    sun.shadow.camera.top = 46;
    sun.shadow.camera.bottom = -38;
    sun.shadow.camera.near = 1;
    sun.shadow.camera.far = 100;
    sun.shadow.bias = -0.0012;
    sun.shadow.normalBias = 0.02;
    this.scene.add(sun);
    this.sunLight = sun;
    const rim = new THREE.DirectionalLight(t.rim, t.night ? 2.2 : 1.05);
    rim.position.set(20, 12, -32);
    this.scene.add(rim);
    this.rimLight = rim;
    const fill = new THREE.PointLight(t.accent, t.night ? 2.2 : 1.1, 48, 2);
    fill.position.set(0, 6, -20);
    this.scene.add(fill);
    this.fillLight = fill;
  }

  buildTerrain() {
    const t = this.theme;
    const rnd = this.rnd;
    const geo = new THREE.PlaneGeometry(120, 120, 34, 34);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    const colors = [];
    const cA = new THREE.Color(t.ground);
    const cB = new THREE.Color(t.ground2 ?? t.ground);
    const cC = new THREE.Color(t.accent);
    const tmp = new THREE.Color();
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const dist = Math.hypot(x, z + 1);
      let y = 0;
      if (dist > 42) {
        const edge = clamp((dist - 42) / 24, 0, 1);
        y = (Math.sin(x * 0.18) + Math.cos(z * 0.15) + rnd() * 0.8) * 2.8 * edge;
      }
      pos.setY(i, y);
      const n = (Math.sin(x * 0.31) + Math.cos(z * 0.23) + 2) / 4;
      tmp.copy(cA).lerp(cB, n);
      if (rnd() > 0.9) tmp.lerp(cC, 0.12);
      colors.push(tmp.r, tmp.g, tmp.b);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    const mat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 1,
      flatShading: true,
      metalness: 0,
    });
    const terrain = new THREE.Mesh(geo, mat);
    terrain.receiveShadow = true;
    this.scene.add(terrain);
    this.terrain = terrain;

    // 主路
    const points = [];
    for (let i = 0; i <= 28; i++) {
      const z = 31 - i * 2.4;
      points.push(P(Math.sin((z + 4) * 0.089) * 1.7, 0, z));
    }
    const path = makeRibbon(points, 6.2, t.path);
    path.receiveShadow = true;
    this.scene.add(path);
    this.path = path;

    // 演武/面试场
    const arena = new THREE.Mesh(
      new THREE.CircleGeometry(13.5, 30),
      new THREE.MeshStandardMaterial({ color: t.arena, roughness: 1, flatShading: true, polygonOffset: true, polygonOffsetFactor: -1 })
    );
    arena.rotation.x = -Math.PI / 2;
    arena.position.set(0, 0.042, -23);
    arena.receiveShadow = true;
    this.scene.add(arena);

    // 石缝与路肩
    for (let i = 0; i < 32; i++) {
      const z = 30 - i * 2.0;
      for (const side of [-1, 1]) {
        if (rnd() > 0.5) {
          const rock = mesh(this.scene, new THREE.DodecahedronGeometry(0.28 + rnd() * 0.24, 0), t.ground2, [side * (3.4 + rnd() * 0.8) + Math.sin(z * 0.1) * 1.7, 0.1, z], [0, rnd() * Math.PI, 0.1], [1.2, 0.6, 1]);
          rock.receiveShadow = true;
        }
      }
    }

    // 边界山体
    for (let i = 0; i < 30; i++) {
      const a = (i / 30) * Math.PI * 2;
      const radius = 54 + rnd() * 12;
      const height = 8 + rnd() * 14;
      const mountain = cone(7 + rnd() * 6, height, i % 3 ? t.ground2 : t.ground, [Math.cos(a) * radius, height / 2 - 1.5, Math.sin(a) * radius - 1], [0, rnd() * Math.PI, 0], this.scene, 7);
      mountain.receiveShadow = true;
      mountain.castShadow = false;
    }

    // 远处背景块，帮助构图
    if (this.def.id !== 'final') {
      const pagoda = makePagoda({ roof: t.roof ?? 0x2d261e, wall: t.wall ?? 0x55382c });
      pagoda.position.set(26, 0, -29);
      pagoda.scale.setScalar(1.8);
      this.scene.add(pagoda);
    }
  }

  buildArena() {
    const t = this.theme;
    const arenaTexts = {
      prologue: '入 职 大 典',
      blackwind: '最 终 面 试',
      yellowwind: '超 时 罚 站',
      xiaoxitian: '结 营 典 礼',
      pansi: '直 播 决 赛',
      flame: '烧 烤 大 赛',
      final: '最 终 面 试',
    };
    // 面试场围柱和火盆
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2;
      if (Math.abs(a - Math.PI / 2) < 0.4) continue;
      const x = Math.cos(a) * 14;
      const z = -23 + Math.sin(a) * 14;
      const pillar = group(this.scene, [x, 0, z]);
      cyl(0.28, 0.4, 2.5, t.wall ?? 0x4a3c2c, [0, 1.25, 0], [0, 0, 0], pillar, 6);
      cyl(0.42, 0.42, 0.18, t.gold ?? 0xb9914d, [0, 2.5, 0], [0, 0, 0], pillar, 6);
      if (i % 3 === 0) {
        const torch = group(pillar, [0, 2.8, 0]);
        mesh(torch, new THREE.IcosahedronGeometry(0.2, 0), 0xffa13b, [0, 0, 0]);
        const light = new THREE.PointLight(0xff7c2c, 1.5, 9, 2);
        light.position.set(0, 0.4, 0);
        torch.add(light);
        this.lanterns.push(torch);
      }
      this.addCollider(x, z, 0.65);
    }
    // 场地金线
    const ringMat = new THREE.MeshBasicMaterial({ color: t.gold ?? 0xd6ad5b, transparent: true, opacity: 0.38, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
    for (const [inner, outer] of [[12.9, 13.2], [12.1, 12.22], [8.2, 8.3]]) {
      const ring = new THREE.Mesh(new THREE.RingGeometry(inner, outer, 72), ringMat.clone());
      ring.rotation.x = -Math.PI / 2;
      ring.position.set(0, 0.09, -23);
      this.scene.add(ring);
    }
    const arenaKey = new THREE.PointLight(t.gold ?? 0xffd48a, 2.4, 34, 2);
    arenaKey.position.set(0, 8.5, -21);
    this.scene.add(arenaKey);
    // 地上的巨大“面”字
    const sigil = signPlane('面', 7, 7, { color: t.sigilColor ?? '#d2b26a', fontSize: 440, width: 512, height: 512 });
    sigil.rotation.x = -Math.PI / 2;
    sigil.rotation.z = 0.15;
    sigil.position.set(0, 0.1, -23);
    sigil.material.opacity = 0.3;
    sigil.renderOrder = 2;
    this.scene.add(sigil);
    // 背后的第二道门，给妖王战一个像样的框景
    this.arenaSet = new THREE.Group();
    this.arenaSet.visible = false;
    this.scene.add(this.arenaSet);
    const backGate = makeGate({
      gate: this.def.gateColor ?? 0x702a25,
      gold: t.gold ?? 0xc59d51,
      gateText: arenaTexts[this.def.id] ?? '最 终 面 试',
    });
    backGate.position.set(0, 0, -36.2);
    backGate.scale.setScalar(1.85);
    optimizeModel(backGate);
    this.arenaSet.add(backGate);
    this.arenaGate = backGate;
    // 两道巨大的长幡
    for (const side of [-1, 1]) {
      const pole = group(this.arenaSet, [side * 11.8, 0, -30]);
      cyl(0.09, 0.12, 9.5, 0x4b3421, [0, 4.7, 0], [0, 0, 0], pole, 6);
      const cloth = new THREE.Mesh(
        new THREE.PlaneGeometry(1.2, 4.6, 4, 8),
        new THREE.MeshStandardMaterial({ color: side < 0 ? 0x8f2b23 : 0x6a2a21, side: THREE.DoubleSide, roughness: 1, flatShading: true })
      );
      cloth.position.set(-side * 0.62, 6.2, 0);
      pole.add(cloth);
      const text = signPlane(side < 0 ? '卷' : '忍', 0.9, 4.1, { color: '#e7c477', fontSize: 260, vertical: true, width: 256, height: 1024 });
      text.position.set(-side * 0.62, 6.2, 0.02);
      pole.add(text);
    }
  }

  showArenaSet() {
    if (this.arenaSet) this.arenaSet.visible = true;
  }

  buildGate() {
    const gate = makeGate({
      gate: this.def.gateColor ?? 0x702a25,
      gold: this.theme.gold ?? 0xc59d51,
      gateText: this.def.gateText ?? '面 试 通 道',
    });
    gate.position.set(0, 0, -9.2);
    this.scene.add(gate);
    this.gate = gate;
    this.barrier = makeHoloBarrier(this.theme.gold ?? 0xe0b35a);
    this.barrier.position.set(0, 0, -9.1);
    this.scene.add(this.barrier);
    this.barrierBase = this.barrier.material.opacity;
    // 两侧封路石墙
    this.gateWalls = new THREE.Group();
    for (const side of [-1, 1]) {
      const wall = new THREE.Group();
      for (let i = 0; i < 5; i++) {
        mesh(wall, new THREE.DodecahedronGeometry(2.4 + this.rnd() * 1.8, 0), this.theme.ground2, [side * (6 + i * 4.4), 1.1, -9 + (this.rnd() - 0.5) * 1.3], [0, this.rnd() * 3, 0], [1, 0.9, 0.8]);
      }
      this.gateWalls.add(wall);
    }
    this.scene.add(this.gateWalls);
  }

  buildShrine() {
    const shrine = makeShrine();
    optimizeModel(shrine);
    shrine.position.copy(this.shrinePoint);
    shrine.rotation.y = -0.45;
    this.scene.add(shrine);
    this.shrine = shrine;
    this.interactables.push({
      id: 'shrine',
      type: 'shrine',
      object: shrine,
      label: '共享香火 · 土地公物业',
      position: this.shrinePoint.clone().add(P(0, 1.1, 0.8)),
      radius: 2.4,
      prompt: '上香 / 升级',
      icon: '香',
    });
    this.addCollider(this.shrinePoint.x, this.shrinePoint.z, 0.9);
  }

  buildNpc() {
    const keeper = makeKeeper();
    optimizeModel(keeper);
    keeper.position.copy(this.keeperPoint);
    keeper.rotation.y = 0.55;
    this.scene.add(keeper);
    this.keeper = keeper;
    this.interactables.push({
      id: 'keeper',
      type: 'npc',
      object: keeper,
      label: '土地公 · 花果山物业',
      position: this.keeperPoint.clone().add(P(0, 1.2, 0)),
      radius: 2.3,
      prompt: '聊天',
      icon: '话',
    });
    this.addCollider(this.keeperPoint.x, this.keeperPoint.z, 0.55);

    if (this.def.companion) {
      const bajie = makeBajie();
      optimizeModel(bajie);
      bajie.position.set(4.2, 0, 23.5);
      bajie.rotation.y = -0.65;
      this.scene.add(bajie);
      this.bajie = bajie;
      this.interactables.push({
        id: 'bajie',
        type: 'npc',
        object: bajie,
        label: '猪八戒 · 灵活就业',
        position: P(4.2, 1.3, 23.5),
        radius: 2.3,
        prompt: '唠两句',
        icon: '猪',
      });
      this.addCollider(4.2, 23.5, 0.65);
    }
  }

  buildProps() {
    const t = this.theme;
    const id = this.def.id;
    const rnd = this.rnd;
    const add = (obj, x, z, ry = rnd() * Math.PI * 2, collider = 0) => {
      obj.position.set(x, 0, z);
      obj.rotation.y = ry;
      this.scene.add(obj);
      if (collider) this.addCollider(x, z, collider);
      return obj;
    };

    const ringSpots = (count, radiusMin, radiusMax, centerZ = 0) => {
      const arr = [];
      for (let i = 0; i < count; i++) {
        const a = rnd() * Math.PI * 2;
        const r = radiusMin + rnd() * (radiusMax - radiusMin);
        const x = Math.cos(a) * r;
        const z = centerZ + Math.sin(a) * r;
        if (z > -9 && Math.abs(x) < 6.5) continue;
        if (z < -9 && Math.hypot(x, z + 23) < 16.2) continue;
        arr.push([x, z]);
      }
      return arr;
    };

    if (id === 'prologue' || id === 'final') {
      for (const [x, z] of ringSpots(16, 9, 29)) add(makeTree(rnd() > 0.25 ? 'peach' : 'dead', rnd), x, z, rnd() * 6, 1.4);
      for (const [x, z] of ringSpots(8, 5, 28)) add(makeRock(0.8 + rnd(), t.ground2), x, z, rnd() * 6, 1.2);
      if (id === 'prologue') {
        // 入职登记处和训练木桩
        const desk = add(makeDesk(), 8.5, 17, -0.8, 1.1);
        box(0.5, 0.08, 0.4, 0x984033, [0, 1.0, 0.1], [0, 0, 0], desk);
        const sign = signPlane('入职登记', 2.2, 0.55, { color: '#efcf7a', fontSize: 72, width: 512, height: 128 });
        sign.position.set(8.5, 1.8, 16.5);
        sign.rotation.y = -0.2;
        this.scene.add(sign);
        for (let i = 0; i < 3; i++) {
          const dummy = group(this.scene, [10 - i * 2.2, 0, 9 - i * 0.4]);
          cyl(0.18, 0.26, 1.1, 0x65442e, [0, 0.55, 0], [0, 0, 0], dummy, 6);
          box(0.9, 1.1, 0.35, 0xbfa36a, [0, 1.2, 0], [0, 0, 0], dummy);
          const label = signPlane('KPI', 0.55, 0.18, { color: '#4c3821', fontSize: 56, width: 256, height: 128 });
          label.position.set(0, 1.2, 0.2);
          dummy.add(label);
        }
      } else {
        // 终局办公楼残骸
        for (let i = 0; i < 5; i++) {
          const x = -23 + i * 9.5;
          const rack = group(this.scene, [x, 0, 4 + rnd() * 2]);
          box(1.2, 2.1, 0.8, 0x272c2d, [0, 1.05, 0], [0, 0, 0], rack);
          for (let j = 0; j < 4; j++) box(0.9, 0.08, 0.03, 0x90a68d, [0, 0.55 + j * 0.35, 0.42], [0, 0, 0], rack);
          this.addCollider(x, 4.5, 0.9);
        }
        const bannerGhost = makeBannerPole('天道酬勤', { bg: 0x5e2720, color: '#d5b77a' });
        add(bannerGhost, -12, -14, 0.2);
        const sign = signPlane('最终面试 · 通过即上岗', 5.2, 1.0, { color: '#e8c678', fontSize: 72, width: 1024, height: 192 });
        sign.position.set(0, 3.0, 11);
        this.scene.add(sign);
      }
    } else if (id === 'blackwind') {
      for (const [x, z] of ringSpots(20, 7, 30)) add(makeTree('bamboo', rnd), x, z, 0, 0.8);
      for (const [x, z] of ringSpots(4, 8, 26)) add(makeRock(0.7 + rnd() * 1.2, 0x5d5b50), x, z, 0, 1.1);
      const banners = ['招', '聘', '卷', '薪', '福报', '上市'];
      banners.forEach((text, i) => {
        const side = i % 2 ? 1 : -1;
        const b = makeBannerPole(text, { bg: i % 3 === 0 ? 0x8e2722 : 0x6f271f });
        add(b, side * (8 + (i % 3) * 3.2), 12 - i * 5.5, 0.1, 0.3);
      });
      for (let i = 0; i < 3; i++) {
        const desk = add(makeDesk(), -11 + i * 3.2, 14 - i * 1.5, 0.2 + i * 0.3, 1.1);
        const sign = signPlane(i === 0 ? '面试' : i === 1 ? '复试' : '终面', 0.8, 0.28, { color: '#d8c596', fontSize: 56, width: 256, height: 128 });
        sign.position.set(0, 1.45, 0.1);
        desk.add(sign);
      }
      for (let i = 0; i < 6; i++) {
        const lantern = makeLantern(i % 2 ? 0xc99a4e : 0xa72f26);
        add(lantern, (i % 2 ? 1 : -1) * (10 + (i % 3) * 2), 8 - i * 3.2, 0, 0);
        lantern.position.y = 3.2;
      }
      add(makePagoda({ roof: 0x2d251d, wall: 0x5a3628 }), 25, -26, 0.2).scale.setScalar(2.2);
    } else if (id === 'yellowwind') {
      for (const [x, z] of ringSpots(14, 10, 31)) add(makeTree('dead', rnd), x, z, 0, 1.0);
      for (const [x, z] of ringSpots(14, 6, 30)) add(makeRock(1 + rnd() * 1.8, 0x8a714a), x, z, 0, 1.5);
      for (let i = 0; i < 3; i++) {
        const scooter = makeScooter(i % 2 ? 0xd6a83d : 0xb64a32);
        add(scooter, -13 + i * 11, 8 - i * 7, 0.4 + i * 0.8, 0.5);
      }
      for (let i = 0; i < 12; i++) {
        const boxGroup = group(this.scene, [(rnd() - 0.5) * 36, 0.4, 14 - rnd() * 30]);
        box(0.8, 0.7, 0.8, 0xc8ab7c, [0, 0, 0], [0, rnd(), 0], boxGroup);
        box(0.82, 0.08, 0.82, 0x8e3c2b, [0, 0.38, 0], [0, 0, 0], boxGroup);
        boxGroup.rotation.y = rnd() * 4;
      }
      // 外卖柜山
      for (let i = 0; i < 6; i++) {
        box(2.2, 2.8, 0.8, 0xc4873d, [22 + (i % 2) * 2.3, 1.4, 12 - i * 2.6], [0, 0.2, 0], this.scene);
      }
      const sign = signPlane('黄风快送 · 超时免单（不免）', 5.4, 1.0, { color: '#f0cf80', fontSize: 66, width: 1024, height: 192 });
      sign.position.set(22, 3.5, 10);
      sign.rotation.y = -0.5;
      this.scene.add(sign);
    } else if (id === 'xiaoxitian') {
      for (const [x, z] of ringSpots(18, 8, 31)) add(makeTree('pine', rnd), x, z, 0, 1.1);
      for (const [x, z] of ringSpots(10, 6, 29)) add(makeRock(0.9 + rnd(), 0xb9c5c4), x, z, 0, 1.1);
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        const bannerPole = makeBannerPole(['团', '建', '共', '赢', '卷'][i], { bg: 0x5c2422, color: '#d7be84' });
        add(bannerPole, Math.cos(a) * 12, -14 + Math.sin(a) * 7, 0, 0.3);
      }
      // 团建投影幕
      const screen = group(this.scene, [0, 0, -31]);
      box(9, 5, 0.3, 0x2f2b2b, [0, 3.2, 0], [0, 0, 0], screen);
      const slide = signPlane('凝心聚力\n卷死同行', 8.2, 4.2, { color: '#f0ead8', fontSize: 100, width: 1024, height: 512, bg: '#e9e6d8' });
      slide.position.set(0, 3.2, 0.2);
      screen.add(slide);
      for (let i = 0; i < 4; i++) {
        const desk = add(makeDesk(), -9 + i * 6, 11, 0.1, 1.1);
        box(0.35, 0.05, 0.28, 0xd5c9a5, [0.2, 0.93, 0.15], [0, 0, 0], desk);
      }
      const speaker = makeSpeaker();
      add(speaker, 8, 17, -0.6, 0.5);
      add(makeSpeaker(), -12, 5, 0.5, 0.5);
    } else if (id === 'pansi') {
      for (const [x, z] of ringSpots(10, 9, 30)) add(makeRock(1.2 + rnd(), 0x4a3357), x, z, 0, 1.4);
      for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI * 2;
        const crystal = group(this.scene, [Math.cos(a) * (18 + rnd() * 8), 0, Math.sin(a) * (18 + rnd() * 8)]);
        for (let j = 0; j < 3; j++) {
          const c = cone(0.5 + rnd() * 0.5, 2 + rnd() * 4, i % 2 ? 0x9a4d8f : 0x6f3d91, [(rnd() - 0.5) * 1.4, 1.2, (rnd() - 0.5) * 1.4], [0.2, rnd(), 0.2], crystal, 5);
          c.material.emissive = new THREE.Color(0x49205a);
          c.material.emissiveIntensity = 1.2;
        }
        const glow = new THREE.PointLight(i % 2 ? 0xff6fb5 : 0x9b73ff, 0.8, 8, 2);
        glow.position.set(0, 2, 0);
        crystal.add(glow);
      }
      // 直播间
      const stage = group(this.scene, [13, 0, -1]);
      box(8, 0.3, 5, 0x2b1e30, [0, 0.15, 0], [0, 0, 0], stage);
      const ring = mesh(stage, new THREE.TorusGeometry(2.0, 0.1, 6, 28), 0xff8fc4, [0, 3.0, -1.2], [0, 0, 0]);
      ring.material.emissive = new THREE.Color(0xff4f9d);
      ring.material.emissiveIntensity = 2;
      const ml = signPlane('家人们！', 3.8, 1.4, { color: '#ffd7e9', fontSize: 160, width: 512, height: 256 });
      ml.position.set(0, 4.2, -1.2);
      stage.add(ml);
      const pt = new THREE.PointLight(0xff5ba6, 3.2, 18, 2);
      pt.position.set(0, 3, 0);
      stage.add(pt);
      for (let i = 0; i < 10; i++) {
        const pkg = group(this.scene, [16 + (rnd() - 0.5) * 8, 0.4 + rnd() * 2, -7 + (rnd() - 0.5) * 10]);
        box(0.8, 0.8, 0.8, 0xc5a1a9, [0, 0, 0], [0, rnd(), 0], pkg);
      }
      // 蛛网
      const lineMat = new THREE.LineBasicMaterial({ color: 0xd3cbe0, transparent: true, opacity: 0.28 });
      for (let i = 0; i < 7; i++) {
        const points = [P(-25 + i * 2, 0.5, 22), P(-10 + i * 1.2, 6.2, 9), P(6 + i * 1.6, 4.4, -8)];
        const geo = new THREE.BufferGeometry().setFromPoints(points);
        this.scene.add(new THREE.Line(geo, lineMat));
      }
    } else if (id === 'flame') {
      for (const [x, z] of ringSpots(12, 11, 31)) add(makeTree('dead', rnd), x, z, 0, 1.0);
      for (const [x, z] of ringSpots(12, 6, 30)) {
        const rock = makeRock(1 + rnd() * 2, 0x5b3b30);
        add(rock, x, z, 0, 1.5);
        const glow = new THREE.PointLight(0xff5e24, 0.8, 8, 2);
        glow.position.set(0, 1.2, 0);
        rock.add(glow);
      }
      const mountain = cone(20, 30, 0x342624, [34, 11, -38], [0, 0, 0], this.scene, 7);
      mountain.material.emissive = new THREE.Color(0x6d1d08);
      mountain.material.emissiveIntensity = 0.28;
      for (let i = 0; i < 4; i++) {
        const grill = add(makeGrill(), -16 + i * 10, 12 - i * 1.5, 0.2 + i * 0.25, 1.0);
        const sign = signPlane(['烧烤', '烤冷面', '悟空同款', '免单券'][i], 1.5, 0.45, { color: '#f7d68b', fontSize: 70, width: 512, height: 128, bg: '#64231d' });
        sign.position.set(0, 1.9, 0.25);
        grill.add(sign);
      }
      for (let i = 0; i < 3; i++) {
        const smoke = makeSmokePuff(0x9a8b80);
        smoke.position.set(-18 + i * 12, 1.8, 10 - i * 2);
        this.scene.add(smoke);
        this.sway.push({ object: smoke, phase: i });
      }
      const giantSkewer = group(this.scene, [20, 0, -7], [0, 0.2, -0.12]);
      cyl(0.13, 0.13, 16, 0xc9ae7b, [0, 8, 0], [0, 0, 0], giantSkewer, 6);
      for (let i = 0; i < 6; i++) box(2.4, 1.8, 1.6, 0x8d3827, [0, 2 + i * 2.4, 0], [0, 0.2 * i, 0], giantSkewer);
    }

    // 隐藏宝箱
    const chestPositions = this.def.chests ?? [[-15, 5], [18, -16]];
    for (const [x, z] of chestPositions) {
      const chest = makeChest();
      optimizeModel(chest);
      chest.position.set(x, 0, z);
      chest.rotation.y = this.rnd() * Math.PI * 2;
      this.scene.add(chest);
      this.chests.push(chest);
      this.interactables.push({
        id: `chest_${this.chests.length}`,
        type: 'chest',
        object: chest,
        label: '功德箱（私人）',
        position: P(x, 0.8, z),
        radius: 2.0,
        prompt: '打开',
        icon: '宝',
        used: false,
      });
    }

    // 场景补光 / 氛围摆设
    if (this.def.lights) {
      for (const l of this.def.lights) {
        const p = new THREE.PointLight(l.color ?? 0xffb15e, l.intensity ?? 2, l.distance ?? 15, 2);
        p.position.set(l.x, l.y ?? 2, l.z);
        this.scene.add(p);
      }
    }
  }

  buildAtmosphere() {
    const t = this.theme;
    const count = t.dustCount ?? 140;
    const dust = makeDust(count, t.dust ?? 0xffd49a, 34, 10);
    this.scene.add(dust);
    this.dustPoints = dust;
    if (t.snow) {
      const snow = makeDust(260, 0xeaf6ff, 42, 22);
      snow.material.size = 0.13;
      snow.material.opacity = 0.85;
      this.scene.add(snow);
      this.snowPoints = snow;
    }
    if (t.ash) {
      const ash = makeDust(160, 0xff9e58, 40, 16);
      ash.material.size = 0.1;
      ash.material.opacity = 0.6;
      this.scene.add(ash);
      this.ashPoints = ash;
    }
    // 地面雾片
    const fogMat = new THREE.MeshBasicMaterial({
      color: t.fog,
      transparent: true,
      opacity: 0.18,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    for (let i = 0; i < 4; i++) {
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(28 + i * 8, 7 + i * 2), fogMat.clone());
      plane.rotation.x = -Math.PI / 2;
      plane.position.set((i % 2 ? -1 : 1) * (8 + i * 3), 0.16 + i * 0.12, 18 - i * 13);
      plane.material.opacity = 0.08 + i * 0.02;
      this.scene.add(plane);
      this.sway.push({ object: plane, phase: i, fog: true });
    }
  }

  buildObjective() {
    const beam = makeObjectiveBeam(this.theme.gold ?? 0xffc75f);
    beam.position.set(0, 0, -8);
    this.scene.add(beam);
    this.objective = beam;
  }

  addCollider(x, z, r) {
    this.colliders.push({ x, z, r });
  }

  setObjective(position) {
    this.objectiveTarget = position?.clone?.() ?? null;
    if (!this.objective) return;
    if (!position) {
      this.objective.visible = false;
      return;
    }
    this.objective.visible = true;
    this.objective.position.set(position.x, 0, position.z);
  }

  addCompanionPoint(pos) {
    this.bajiePoint = pos;
  }

  setGateOpen() {
    if (this.gateOpen) return;
    this.gateOpen = true;
    this.barrierOpenAt = this.time;
  }

  resolveCollision(position, radius = 0.6) {
    // 世界边界
    position.x = clamp(position.x, -33, 33);
    position.z = clamp(position.z, -35.5, 32.5);
    // 面试通道屏障
    if (!this.gateOpen && position.z < -7.7) {
      position.z = -7.7;
    }
    // 碰撞体
    for (const c of this.colliders) {
      const dx = position.x - c.x;
      const dz = position.z - c.z;
      const minDist = c.r + radius;
      const d = Math.hypot(dx, dz);
      if (d < minDist && d > 0.0001) {
        const push = (minDist - d) / d;
        position.x += dx * push;
        position.z += dz * push;
      }
    }
    return position;
  }

  spawnSparks(position, color = 0xffcb6e, count = 12) {
    const spark = makeSpark(color, count);
    spark.position.copy(position);
    this.scene.add(spark);
    this.effects.push({ type: 'spark', object: spark, life: 1.1, age: 0 });
    return spark;
  }

  spawnRing(position, color = 0xffc25c, scale = 1) {
    const ring = makeHitRing(color);
    ring.position.set(position.x, Math.max(0.08, position.y), position.z);
    ring.scale.setScalar(scale);
    this.scene.add(ring);
    this.effects.push({ type: 'ring', object: ring, life: 0.55, age: 0, scale });
    return ring;
  }

  spawnShockwave(position, color = 0xe8b45e) {
    for (let i = 0; i < 3; i++) {
      const ring = makeHitRing(color);
      ring.position.set(position.x, 0.1 + i * 0.02, position.z);
      ring.scale.setScalar(0.6 + i * 0.3);
      this.scene.add(ring);
      this.effects.push({ type: 'shock', object: ring, life: 0.8, age: -i * 0.08, scale: 0.6 + i * 0.3 });
    }
  }

  update(dt) {
    this.time += dt;
    const t = this.time;
    this.objective?.userData.ring && (this.objective.userData.ring.rotation.z = t * 0.4);
    if (this.objective?.visible) {
      this.objective.userData.diamond.rotation.y = t * 1.1;
      this.objective.userData.diamond.position.y = 3.1 + Math.sin(t * 2.2) * 0.18;
      this.objective.userData.ring.scale.setScalar(1 + Math.sin(t * 2.5) * 0.05);
    }
    if (this.barrier) {
      if (this.gateOpen) {
        this.barrierOpacity = Math.max(0, this.barrierOpacity - dt * 0.75);
      } else {
        this.barrierOpacity = 0.2 + Math.sin(t * 1.9) * 0.07;
      }
      this.barrier.material.opacity = this.barrierOpacity;
      this.barrier.userData.runes?.forEach((rune, i) => {
        rune.material.opacity = this.gateOpen ? this.barrierOpacity * 2 : 0.35 + Math.sin(t * 2 + i) * 0.2;
        rune.position.y += Math.sin(t * 1.2 + i) * 0.001;
      });
      this.barrier.visible = this.barrierOpacity > 0.005;
    }
    for (const cloud of this.clouds) {
      cloud.position.x += cloud.userData.speed * dt;
      if (cloud.position.x > 90) cloud.position.x = -90;
    }
    if (this.dustPoints) this.animateDust(this.dustPoints, dt, t, 0.5);
    if (this.snowPoints) this.animateDust(this.snowPoints, dt, t, 1.9);
    if (this.ashPoints) this.animateDust(this.ashPoints, dt, t, 1.2);
    for (const item of this.sway) {
      if (item.fog) {
        item.object.position.x += Math.sin(t * 0.08 + item.phase) * 0.002;
        item.object.material.opacity = 0.07 + Math.sin(t * 0.4 + item.phase) * 0.02;
      } else {
        item.object.position.y += Math.sin(t * 0.7 + item.phase) * 0.001;
        item.object.rotation.y += Math.sin(t * 0.3 + item.phase) * 0.0004;
      }
    }
    if (this.bajie) {
      this.bajie.userData.rig.body.position.y = 0.9 + Math.sin(t * 1.3) * 0.02;
    }
    if (this.keeper) {
      this.keeper.userData.rig.head.rotation.y = Math.sin(t * 0.5) * 0.08;
    }
    if (this.shrine) {
      this.shrine.rotation.y = -0.45 + Math.sin(t * 0.4) * 0.01;
    }
    // 效果
    for (let i = this.effects.length - 1; i >= 0; i--) {
      const fx = this.effects[i];
      fx.age += dt;
      if (fx.type === 'spark') {
        for (const child of fx.object.children) {
          child.userData.vel.y -= 9 * dt;
          child.position.addScaledVector(child.userData.vel, dt);
          child.rotation.x += dt * 8;
          child.material.opacity = clamp(1 - fx.age / fx.life, 0, 1);
        }
      } else if (fx.type === 'ring' || fx.type === 'shock') {
        if (fx.age >= 0) {
          const k = clamp(fx.age / fx.life, 0, 1);
          fx.object.scale.setScalar(fx.scale * (1 + k * 4));
          fx.object.material.opacity = (1 - k) * 0.85;
        }
      }
      if (fx.age > fx.life) {
        this.scene.remove(fx.object);
        disposeObject(fx.object);
        this.effects.splice(i, 1);
      }
    }
  }

  animateDust(points, dt, t, speed) {
    const pos = points.geometry.attributes.position;
    const base = points.userData.base;
    const phases = points.userData.phases;
    for (let i = 0; i < pos.count; i++) {
      const i3 = i * 3;
      const phase = phases[i];
      pos.array[i3] = base[i3] + Math.sin(t * 0.35 + phase) * 0.6;
      pos.array[i3 + 1] = (base[i3 + 1] + t * speed + phase) % 10;
      pos.array[i3 + 2] = base[i3 + 2] + Math.cos(t * 0.3 + phase) * 0.6;
    }
    pos.needsUpdate = true;
  }

  dispose() {
    disposeObject(this.scene);
    this.scene.clear();
    this.colliders = [];
    this.interactables = [];
    this.effects = [];
  }
}
