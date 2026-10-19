import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const PI = Math.PI;

const cache = new Map();

export function material(color, opts = {}) {
  const key = `m:${color}:${opts.roughness ?? 0.88}:${opts.metalness ?? 0}:${opts.emissive ?? 0}:${opts.emissiveIntensity ?? 1}:${opts.flatShading !== false}:${opts.transparent ? 1 : 0}:${opts.opacity ?? 1}`;
  if (!opts.unique && cache.has(key)) return cache.get(key);
  const m = new THREE.MeshStandardMaterial({
    color,
    roughness: opts.roughness ?? 0.88,
    metalness: opts.metalness ?? 0,
    emissive: opts.emissive ?? 0x000000,
    emissiveIntensity: opts.emissiveIntensity ?? 1,
    flatShading: opts.flatShading !== false,
    transparent: opts.transparent ?? false,
    opacity: opts.opacity ?? 1,
    side: opts.side ?? THREE.FrontSide,
  });
  if (!opts.unique) cache.set(key, m);
  return m;
}

export function toonMaterial(color, opts = {}) {
  return material(color, opts);
}

export function mesh(parent, geometry, colorOrMat, pos = [0, 0, 0], rot = [0, 0, 0], scale = [1, 1, 1]) {
  const mat = colorOrMat?.isMaterial ? colorOrMat : material(colorOrMat);
  const item = new THREE.Mesh(geometry, mat);
  item.position.set(pos[0], pos[1], pos[2]);
  item.rotation.set(rot[0], rot[1], rot[2]);
  item.scale.set(scale[0], scale[1], scale[2]);
  item.castShadow = true;
  item.receiveShadow = true;
  if (parent) parent.add(item);
  return item;
}

export const box = (w, h, d, color, pos, rot, parent) =>
  mesh(parent, new THREE.BoxGeometry(w, h, d), color, pos, rot);

export const sphere = (r, color, pos, parent, detail = 1) =>
  mesh(parent, new THREE.IcosahedronGeometry(r, detail), color, pos);

export const cyl = (rt, rb, h, color, pos, rot, parent, seg = 8) =>
  mesh(parent, new THREE.CylinderGeometry(rt, rb, h, seg), color, pos, rot);

export const cone = (r, h, color, pos, rot, parent, seg = 6) =>
  mesh(parent, new THREE.ConeGeometry(r, h, seg), color, pos, rot);

export const torus = (r, tube, color, pos, rot, parent, seg = 8, radial = 6) =>
  mesh(parent, new THREE.TorusGeometry(r, tube, radial, seg), color, pos, rot);

export function group(parent, pos = [0, 0, 0], rot = [0, 0, 0]) {
  const g = new THREE.Group();
  g.position.set(...pos);
  g.rotation.set(...rot);
  parent?.add(g);
  return g;
}

export function textTexture(text, opts = {}) {
  const {
    width = 512,
    height = 256,
    bg = 'rgba(0,0,0,0)',
    color = '#e8c374',
    fontSize = 96,
    font = '"Noto Serif SC", "STKaiti", "KaiTi", serif',
    vertical = false,
    align = 'center',
    border = false,
    borderColor = '#b98938',
    padding = 30,
    weight = 700,
  } = opts;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, width, height);
  if (bg && bg !== 'transparent') {
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);
  }
  if (border) {
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 6;
    ctx.strokeRect(8, 8, width - 16, height - 16);
  }
  ctx.fillStyle = color;
  ctx.textAlign = align;
  ctx.textBaseline = 'middle';
  ctx.font = `${weight} ${fontSize}px ${font}`;
  if (vertical) {
    const chars = [...text];
    const step = Math.min(fontSize * 1.12, (height - padding * 2) / Math.max(chars.length, 1));
    const startY = height / 2 - ((chars.length - 1) * step) / 2;
    chars.forEach((char, i) => {
      ctx.save();
      if (char === '·') ctx.fillText('·', width / 2, startY + i * step);
      else ctx.fillText(char, width / 2, startY + i * step);
      ctx.restore();
    });
  } else {
    const lines = text.split('\n');
    const lineHeight = fontSize * 1.18;
    const startY = height / 2 - ((lines.length - 1) * lineHeight) / 2;
    lines.forEach((line, i) => {
      ctx.fillText(line, align === 'left' ? padding : align === 'right' ? width - padding : width / 2, startY + i * lineHeight);
    });
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

export function signPlane(text, w, h, opts = {}) {
  const texture = textTexture(text, opts);
  const mat = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    side: opts.side ?? THREE.DoubleSide,
    depthWrite: false,
    toneMapped: false,
  });
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
  plane.renderOrder = 2;
  return plane;
}

export function banner(text, w, h, opts = {}) {
  const g = new THREE.Group();
  const cloth = new THREE.Mesh(
    new THREE.PlaneGeometry(w, h, 5, 3),
    new THREE.MeshStandardMaterial({
      color: opts.bg ?? 0x8f1d1d,
      roughness: 0.95,
      side: THREE.DoubleSide,
      flatShading: true,
    })
  );
  cloth.receiveShadow = true;
  g.add(cloth);
  const plate = signPlane(text, w * 0.92, h * 0.92, {
    color: opts.color ?? '#e8c374',
    fontSize: opts.fontSize ?? 86,
    vertical: opts.vertical ?? true,
    width: 256,
    height: 768,
  });
  plate.position.z = 0.012;
  g.add(plate);
  return g;
}

function addFaceDetails(head, opts = {}) {
  const skin = opts.skin ?? 0xe4b98e;
  const fur = opts.fur ?? 0x5e3b25;
  const face = mesh(head, new THREE.SphereGeometry(0.4, 7, 6), skin, [0, -0.06, 0.37], [0, 0, 0], [1.02, 0.95, 0.42]);
  face.castShadow = false;
  mesh(head, new THREE.SphereGeometry(0.09, 7, 5), 0x17110e, [-0.16, 0.1, 0.51], [0, 0, 0], [0.9, 1.2, 0.5]);
  mesh(head, new THREE.SphereGeometry(0.09, 7, 5), 0x17110e, [0.16, 0.1, 0.51], [0, 0, 0], [0.9, 1.2, 0.5]);
  mesh(head, new THREE.SphereGeometry(0.026, 5, 4), 0xfff4d6, [-0.16, 0.13, 0.555], [0, 0, 0], [0.8, 0.8, 0.4]);
  mesh(head, new THREE.SphereGeometry(0.026, 5, 4), 0xfff4d6, [0.16, 0.13, 0.555], [0, 0, 0], [0.8, 0.8, 0.4]);
  const muzzle = mesh(head, new THREE.SphereGeometry(0.24, 7, 5), opts.muzzle ?? 0xf0cfaa, [0, -0.23, 0.48], [0, 0, 0], [1.1, 0.72, 0.5]);
  muzzle.castShadow = false;
  mesh(head, new THREE.BoxGeometry(0.13, 0.07, 0.05), 0x2a1712, [0, -0.19, 0.63]);
  mesh(head, new THREE.BoxGeometry(0.17, 0.03, 0.03), 0x3a1c16, [0, -0.35, 0.6]);
  // 金色眼影 / 猴王妆
  mesh(head, new THREE.BoxGeometry(0.24, 0.045, 0.04), opts.eyeShadow ?? 0xc59035, [-0.17, 0.22, 0.53], [0, 0, -0.14]);
  mesh(head, new THREE.BoxGeometry(0.24, 0.045, 0.04), opts.eyeShadow ?? 0xc59035, [0.17, 0.22, 0.53], [0, 0, 0.14]);
  // 两个大耳朵
  for (const side of [-1, 1]) {
    const ear = mesh(head, new THREE.CylinderGeometry(0.2, 0.2, 0.09, 8), fur, [side * 0.48, 0.01, -0.01], [0, 0, PI / 2]);
    mesh(ear, new THREE.CylinderGeometry(0.12, 0.12, 0.02, 8), opts.earInner ?? 0xd79f80, [0, side * 0.055, 0], [0, 0, 0]);
  }
  return head;
}

export function makeMonkey(opts = {}) {
  const g = new THREE.Group();
  const fur = opts.fur ?? 0x60402a;
  const cloth = opts.cloth ?? 0xb3422e;
  const gold = opts.gold ?? 0xd9a441;
  const dark = opts.dark ?? false;

  const hips = group(g, [0, 0.95, 0]);
  const torso = group(hips, [0, 0, 0]);
  box(0.88, 1.02, 0.58, cloth, [0, 0.48, 0], [0, 0, 0], torso);
  box(1.0, 0.16, 0.62, 0x2b1b16, [0, 0.03, 0], [0, 0, 0], torso);
  mesh(torso, new THREE.IcosahedronGeometry(0.52, 1), fur, [0, 0.56, -0.03], [0, 0, 0], [1.02, 1.12, 0.62]);
  box(0.44, 0.42, 0.05, gold, [0, 0.53, 0.32], [0, 0, PI / 4], torso).scale.set(0.7, 0.7, 1);
  // 肩甲
  for (const side of [-1, 1]) {
    mesh(torso, new THREE.IcosahedronGeometry(0.28, 0), gold, [side * 0.55, 0.94, 0], [0, 0, 0], [1.2, 0.7, 1]);
  }
  // 围巾尾巴
  const scarf = group(torso, [0, 0.96, -0.3]);
  box(0.18, 0.8, 0.05, 0xc8442d, [0.1, -0.35, -0.12], [0.2, 0, -0.15], scarf);
  box(0.14, 0.62, 0.04, 0xd35d34, [-0.14, -0.28, -0.08], [0.28, 0, 0.2], scarf);

  const head = group(torso, [0, 1.38, 0.03]);
  mesh(head, new THREE.IcosahedronGeometry(0.57, 1), fur, [0, 0, 0], [0, 0, 0], [1.02, 1.03, 0.94]);
  addFaceDetails(head, { fur, skin: opts.face ?? 0xd7a16f });
  // 头箍
  const band = torus(0.55, 0.052, gold, [0, 0.27, 0], [PI / 2, 0, 0], head, 12, 5);
  band.scale.z = 0.95;
  mesh(head, new THREE.BoxGeometry(0.22, 0.22, 0.09), 0xf1c75c, [0, 0.3, 0.53], [0, 0, PI / 4], head);
  mesh(head, new THREE.BoxGeometry(0.1, 0.1, 0.1), 0x9f2b21, [0, 0.3, 0.59], [0, 0, 0], head);
  // 刺头
  const spikeMat = fur;
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * PI * 2;
    cone(0.1, 0.3 + (i % 3) * 0.12, spikeMat, [Math.cos(a) * 0.26, 0.55, Math.sin(a) * 0.2 - 0.03], [0.5 - Math.sin(a) * 0.3, 0, Math.cos(a) * 0.5], head, 5);
  }
  // 耳朵增加额外两只（六耳）
  if (opts.sixEars) {
    for (const side of [-1, 1]) {
      const ear = mesh(head, new THREE.CylinderGeometry(0.17, 0.17, 0.08, 8), fur, [side * 0.5, 0.26, -0.12], [0, 0, PI / 2]);
      mesh(ear, new THREE.CylinderGeometry(0.1, 0.1, 0.02, 8), 0xc69079, [0, side * 0.05, 0], [0, 0, 0]);
    }
  }

  const arms = {};
  for (const side of [-1, 1]) {
    const shoulder = group(torso, [side * 0.58, 0.88, 0]);
    const upper = group(shoulder, [0, -0.18, 0]);
    cyl(0.16, 0.13, 0.56, fur, [0, -0.3, 0], [0, 0, 0], upper);
    const elbow = group(upper, [0, -0.58, 0]);
    cyl(0.13, 0.11, 0.55, opts.sleeve ?? cloth, [0, -0.25, 0], [0, 0, 0], elbow);
    const hand = group(elbow, [0, -0.55, 0]);
    mesh(hand, new THREE.IcosahedronGeometry(0.16, 0), 0xc99567, [0, 0, 0], [0, 0, 0], [1.15, 0.9, 1.1]);
    arms[side < 0 ? 'left' : 'right'] = { shoulder, upper, elbow, hand };
  }

  const legs = {};
  for (const side of [-1, 1]) {
    const hip = group(hips, [side * 0.25, 0.0, 0]);
    cyl(0.17, 0.14, 0.55, fur, [0, -0.26, 0], [0, 0, 0], hip);
    const knee = group(hip, [0, -0.52, 0]);
    cyl(0.14, 0.12, 0.48, fur, [0, -0.22, 0], [0, 0, 0], knee);
    const foot = group(knee, [0, -0.46, 0]);
    box(0.28, 0.16, 0.5, 0x2d211b, [0, -0.02, 0.12], [0, 0, 0], foot);
    legs[side < 0 ? 'left' : 'right'] = { hip, knee, foot };
  }

  // 尾巴
  const tailCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 1.0, -0.28),
    new THREE.Vector3(0.1, 0.7, -0.74),
    new THREE.Vector3(-0.1, 0.8, -1.12),
    new THREE.Vector3(0.3, 1.2, -1.25),
    new THREE.Vector3(0.15, 1.55, -1.16),
  ]);
  const tail = mesh(g, new THREE.TubeGeometry(tailCurve, 12, 0.065, 5, false), fur, [0, 0, 0]);
  tail.userData.noMerge = true;
  mesh(tail, new THREE.IcosahedronGeometry(0.12, 0), fur, [0.15, 1.55, -1.16]);

  let staffPivot = null;
  let staff = null;
  if (opts.staff !== false) {
    staffPivot = group(arms.right.hand, [0, -0.1, 0.03], [0.35, 0, -0.18]);
    staff = group(staffPivot, [0, 0, 0]);
    cyl(0.055, 0.055, 3.4, 0x5f2118, [0, 0.1, 0], [0, 0, 0], staff, 8);
    cyl(0.08, 0.08, 0.4, gold, [0, 1.7, 0], [0, 0, 0], staff, 8);
    cyl(0.08, 0.08, 0.4, gold, [0, -1.5, 0], [0, 0, 0], staff, 8);
    mesh(staff, new THREE.IcosahedronGeometry(0.11, 0), 0xf4d27b, [0, 1.93, 0]);
  }

  if (opts.badge) {
    const badge = box(0.27, 0.38, 0.04, 0xe7dfcb, [0.34, 0.62, 0.31], [0, 0, 0.08], torso);
    box(0.2, 0.06, 0.045, 0x9b2e25, [0, 0.06, 0.01], [0, 0, 0], badge);
  }

  const rig = { hips, torso, head, arms, legs, tail, staffPivot, staff, scarf };
  g.userData.rig = rig;
  return g;
}

export function makeKeeper() {
  const g = new THREE.Group();
  const body = group(g, [0, 0.62, 0]);
  cyl(0.26, 0.48, 0.9, 0x54442d, [0, 0.3, 0], [0, 0, 0], body, 7);
  box(0.65, 0.09, 0.48, 0xb8893b, [0, 0.55, 0], [0, 0, 0], body);
  const head = group(body, [0, 0.92, 0]);
  mesh(head, new THREE.IcosahedronGeometry(0.3, 1), 0xd8b888, [0, 0, 0], [0, 0, 0], [1, 0.95, 0.9]);
  mesh(head, new THREE.ConeGeometry(0.22, 0.65, 6), 0xe9e3d3, [0, -0.3, 0.17], [0.18, 0, 0], head);
  mesh(head, new THREE.BoxGeometry(0.5, 0.15, 0.12), 0x6d1f1b, [0, 0.22, 0.05], [0, 0, 0], head);
  box(0.46, 0.075, 0.3, 0x2b2018, [-0.05, 0.37, 0.02], [0, 0.1, 0], head);
  box(0.28, 0.12, 0.16, 0x151c18, [0, 0.45, 0.05], [0, 0, 0], head);
  mesh(head, new THREE.SphereGeometry(0.04, 5, 4), 0xd7a24a, [-0.09, -0.02, 0.27]);
  mesh(head, new THREE.SphereGeometry(0.04, 5, 4), 0xd7a24a, [0.09, -0.02, 0.27]);
  // 对讲机
  box(0.16, 0.36, 0.12, 0x222824, [0.38, 0.35, 0.1], [0, 0, -0.1], body);
  box(0.04, 0.2, 0.04, 0xa2a49b, [0.43, 0.66, 0.1], [0, 0, 0], body);
  // 拐杖灯笼
  const staff = cyl(0.035, 0.035, 2.1, 0x4d3522, [-0.5, 0.55, 0.02], [0, 0, 0.06], g, 6);
  const lantern = group(g, [-0.62, 1.6, 0.02]);
  cyl(0.16, 0.16, 0.3, 0xd9a441, [0, 0, 0], [0, 0, 0], lantern, 6);
  mesh(lantern, new THREE.IcosahedronGeometry(0.12, 0), 0xff9c42, [0, 0, 0]);
  const pt = new THREE.PointLight(0xff9b48, 1.2, 6, 2);
  pt.position.set(0, 0, 0);
  lantern.add(pt);
  // 工牌
  box(0.26, 0.36, 0.04, 0xd9d2bd, [0.18, 0.22, 0.32], [0, 0, 0.1], body);
  const label = signPlane('物业', 0.24, 0.11, { color: '#3b2d1c', fontSize: 54, width: 256, height: 128 });
  label.position.set(0.18, 0.25, 0.345);
  label.rotation.z = 0.1;
  body.add(label);
  g.userData.rig = { body, head };
  return g;
}

export function makeBajie() {
  const g = new THREE.Group();
  const body = group(g, [0, 0.9, 0]);
  mesh(body, new THREE.IcosahedronGeometry(0.78, 1), 0x4a6b87, [0, 0.32, 0], [0, 0, 0], [1.12, 1.0, 0.9]);
  box(0.9, 0.5, 0.24, 0x3e5e77, [0, 0.38, 0.62], [0, 0, 0], body);
  box(0.7, 0.12, 0.26, 0xe2b140, [0, 0.39, 0.75], [0, 0, 0], body);
  const head = group(body, [0, 1.18, 0.05]);
  mesh(head, new THREE.IcosahedronGeometry(0.52, 1), 0xe59a9c, [0, 0, 0], [0, 0, 0], [1, 0.9, 0.92]);
  mesh(head, new THREE.CylinderGeometry(0.3, 0.38, 0.25, 8), 0xd9888e, [0, -0.18, 0.35], [PI / 2, 0, 0], head);
  mesh(head, new THREE.CylinderGeometry(0.11, 0.11, 0.08, 6), 0xb56872, [0, -0.16, 0.55], [PI / 2, 0, 0], head);
  for (const side of [-1, 1]) {
    const ear = mesh(head, new THREE.ConeGeometry(0.2, 0.38, 5), 0xd68a92, [side * 0.45, 0.28, -0.06], [0, 0, side * 0.6], head);
    mesh(head, new THREE.SphereGeometry(0.065, 5, 4), 0x211512, [side * 0.18, 0.08, 0.46]);
    mesh(head, new THREE.SphereGeometry(0.02, 4, 3), 0xfff3d8, [side * 0.18, 0.1, 0.52]);
  }
  // 外卖帽
  cyl(0.3, 0.36, 0.16, 0xe6b13a, [0, 0.48, 0], [0, 0, 0], head, 7);
  box(0.4, 0.05, 0.4, 0xe6b13a, [0, 0.44, 0.27], [0, 0, 0], head);
  const cap = signPlane('八戒快送', 0.5, 0.16, { color: '#2d2617', fontSize: 40, width: 512, height: 128 });
  cap.position.set(0, 0.56, 0.31);
  head.add(cap);
  // 外套数字
  const badge = signPlane('08', 0.28, 0.22, { color: '#f5d276', fontSize: 100, width: 256, height: 256 });
  badge.position.set(0.33, 0.38, 0.73);
  body.add(badge);
  // 行李箱
  const caseGroup = group(g, [0.8, 0.35, 0.1], [0, 0.1, 0]);
  box(0.52, 0.65, 0.34, 0x7e3b2d, [0, 0, 0], [0, 0, 0], caseGroup);
  box(0.54, 0.1, 0.36, 0xc99a4a, [0, 0.2, 0], [0, 0, 0], caseGroup);
  box(0.22, 0.05, 0.05, 0x3b2b20, [0, 0.42, 0], [0, 0, 0], caseGroup);
  // 九齿钉耙
  const rake = group(g, [-0.85, 1.1, 0.1], [0, 0, -0.22]);
  cyl(0.035, 0.035, 1.9, 0x6f4a2b, [0, 0, 0], [0, 0, 0], rake, 6);
  box(0.6, 0.12, 0.12, 0x9a9a8f, [0, 0.95, 0], [0, 0, 0], rake);
  for (let i = -2; i <= 2; i++) box(0.06, 0.36, 0.06, 0xb4b4a8, [i * 0.13, 1.13, 0], [0, 0, 0], rake);
  g.userData.rig = { body, head };
  return g;
}

export function makeMob(kind, theme = {}) {
  const g = new THREE.Group();
  const accent = theme.accent ?? 0xb45a3c;
  const bodyColor = theme.enemy ?? 0x6d7b55;
  const skin = theme.enemySkin ?? 0xc4a37a;
  const body = group(g, [0, 0.68, 0]);
  let head;
  if (kind === 'resume') {
    for (let i = 0; i < 4; i++) box(0.72 - i * 0.04, 0.08, 0.5, 0xe4ddca, [0, 0.2 + i * 0.1, 0], [0, 0.05 * i, 0], body);
    box(0.66, 0.7, 0.08, 0xece5d2, [0, 0.55, 0], [0, 0, 0], body);
    box(0.5, 0.08, 0.02, 0x3f4a54, [0, 0.65, 0.05], [0, 0, 0], body);
    box(0.36, 0.07, 0.02, 0x7c342c, [0, 0.5, 0.05], [0, 0, 0], body);
    box(0.14, 0.3, 0.08, 0x9b2e25, [0, 0.15, 0.28], [0, 0, 0], body);
    head = group(body, [0, 0.95, 0]);
    mesh(head, new THREE.IcosahedronGeometry(0.35, 0), 0xd9cfb8, [0, 0, 0], [0, 0, 0], [1, 0.8, 0.6]);
    mesh(head, new THREE.SphereGeometry(0.06, 5, 4), 0x1a1a18, [-0.12, 0, 0.29]);
    mesh(head, new THREE.SphereGeometry(0.06, 5, 4), 0x1a1a18, [0.12, 0, 0.29]);
    box(0.18, 0.03, 0.02, 0x1a1a18, [0, -0.13, 0.32]);
  } else if (kind === 'takeout') {
    box(0.8, 0.86, 0.6, 0xd8b06a, [0, 0.32, 0], [0, 0, 0], body);
    box(0.84, 0.12, 0.64, 0x975b2e, [0, 0.7, 0], [0, 0, 0], body);
    box(0.52, 0.18, 0.04, 0xe5d9b7, [0, 0.42, 0.32], [0, 0, 0], body);
    head = group(body, [0, 0.98, 0]);
    mesh(head, new THREE.IcosahedronGeometry(0.34, 0), 0xd2a276, [0, 0, 0], [0, 0, 0], [1, 0.9, 0.9]);
    cyl(0.38, 0.4, 0.11, accent, [0, 0.16, 0], [0, 0, 0], head, 8);
    box(0.46, 0.1, 0.4, accent, [0, 0.11, 0.18], [0, 0, 0], head);
    mesh(head, new THREE.BoxGeometry(0.38, 0.14, 0.12), 0x1b2227, [0, 0.02, 0.3], [0, 0, 0], head);
    box(0.65, 0.4, 0.2, 0xa8432f, [0, 0.58, -0.38], [0.1, 0, 0], body);
    const label = signPlane('超时', 0.35, 0.18, { color: '#f3d88d', fontSize: 58, width: 256, height: 128 });
    label.position.set(0, 0.58, -0.27);
    label.rotation.y = PI;
    body.add(label);
  } else if (kind === 'snowman') {
    for (let i = 0; i < 3; i++) mesh(body, new THREE.IcosahedronGeometry(0.44 - i * 0.07, 1), 0xe8eef0, [0, 0.15 + i * 0.36, 0]);
    head = group(body, [0, 1.16, 0]);
    mesh(head, new THREE.IcosahedronGeometry(0.3, 1), 0xeef4f5, [0, 0, 0]);
    mesh(head, new THREE.ConeGeometry(0.08, 0.34, 5), 0xe8a341, [0, 0, 0.38], [PI / 2, 0, 0], head);
    mesh(head, new THREE.SphereGeometry(0.045, 5, 4), 0x141414, [-0.11, 0.07, 0.27]);
    mesh(head, new THREE.SphereGeometry(0.045, 5, 4), 0x141414, [0.11, 0.07, 0.27]);
    cyl(0.2, 0.25, 0.2, 0x2b2b2b, [0, 0.28, 0], [0, 0, 0], head, 7);
    box(0.48, 0.08, 0.3, 0x1a1c1d, [0, 0.38, 0.05], [0, 0, 0], head);
    box(0.3, 0.45, 0.05, 0xe6c264, [0, 0.3, -0.44], [0, 0, 0], body);
  } else if (kind === 'spider') {
    mesh(body, new THREE.IcosahedronGeometry(0.52, 0), 0x3f274d, [0, 0.32, 0], [0, 0, 0], [0.9, 0.8, 1.15]);
    for (let i = 0; i < 4; i++) {
      for (const side of [-1, 1]) {
        const leg = cyl(0.035, 0.02, 0.95, 0x2a1c35, [side * 0.4, 0.25, -0.18 + i * 0.15], [0, 0, side * 0.85 - (i - 1.5) * 0.12], body, 5);
        leg.rotation.x = (i - 1.5) * 0.25;
      }
    }
    head = group(body, [0, 0.93, 0.15]);
    mesh(head, new THREE.IcosahedronGeometry(0.32, 0), 0x4b2d5a, [0, 0, 0], [0, 0, 0], [1, 0.9, 0.9]);
    for (const side of [-1, 0, 1]) {
      mesh(head, new THREE.SphereGeometry(0.06, 5, 4), 0xd94d6c, [side * 0.11, 0.02, 0.28]);
    }
    box(0.24, 0.34, 0.04, 0xd9c9e8, [0.2, 0.55, 0.24], [0, 0, 0], body);
    const label = signPlane('实习', 0.2, 0.08, { color: '#3f274d', fontSize: 40, width: 256, height: 128 });
    label.position.set(0.2, 0.55, 0.27);
    body.add(label);
  } else if (kind === 'ash') {
    mesh(body, new THREE.IcosahedronGeometry(0.5, 0), 0x4a2d29, [0, 0.3, 0], [0, 0, 0], [1, 0.9, 0.85]);
    head = group(body, [0, 0.9, 0.05]);
    mesh(head, new THREE.IcosahedronGeometry(0.33, 0), 0x6e3b2f, [0, 0, 0]);
    for (let i = 0; i < 5; i++) cone(0.1, 0.45 + (i % 2) * 0.2, 0xf0732a, [Math.cos(i * 1.7) * 0.2, 0.3, Math.sin(i * 1.7) * 0.16], [0, 0, 0], head, 5);
    mesh(head, new THREE.SphereGeometry(0.055, 5, 4), 0xffd27a, [-0.11, 0, 0.29]);
    mesh(head, new THREE.SphereGeometry(0.055, 5, 4), 0xffd27a, [0.11, 0, 0.29]);
    const pt = new THREE.PointLight(0xff5f24, 0.8, 3, 2);
    pt.position.set(0, 0.3, 0);
    body.add(pt);
  } else if (kind === 'clerk') {
    mesh(body, new THREE.IcosahedronGeometry(0.52, 0), 0x51565b, [0, 0.32, 0], [0, 0, 0], [1, 1, 0.8]);
    box(0.36, 0.5, 0.05, 0xe8e4d5, [0, 0.3, 0.31], [0, 0, 0], body);
    box(0.12, 0.28, 0.06, 0x8f2c25, [0, 0.3, 0.35], [0, 0, 0], body);
    head = group(body, [0, 0.98, 0.02]);
    mesh(head, new THREE.IcosahedronGeometry(0.34, 0), 0x706b60, [0, 0, 0]);
    mesh(head, new THREE.SphereGeometry(0.05, 5, 4), 0xff6d4a, [-0.11, 0.02, 0.3]);
    mesh(head, new THREE.SphereGeometry(0.05, 5, 4), 0xff6d4a, [0.11, 0.02, 0.3]);
    cyl(0.07, 0.07, 0.28, 0xd8cbb0, [0, 0.43, 0], [0, 0, 0], head, 5);
    const label = signPlane('外包', 0.26, 0.11, { color: '#e8e4d5', fontSize: 42, width: 256, height: 128 });
    label.position.set(0, 0.31, 0.35);
    body.add(label);
  } else {
    // 蕉绿猴
    mesh(body, new THREE.IcosahedronGeometry(0.45, 0), bodyColor, [0, 0.32, 0], [0, 0, 0], [1, 1, 0.85]);
    head = group(body, [0, 0.9, 0.03]);
    mesh(head, new THREE.IcosahedronGeometry(0.34, 0), bodyColor, [0, 0, 0]);
    mesh(head, new THREE.SphereGeometry(0.2, 6, 5), 0xcbb08c, [0, -0.05, 0.25], [0, 0, 0], [1, 0.8, 0.5]);
    mesh(head, new THREE.SphereGeometry(0.045, 5, 4), 0x111111, [-0.1, 0.05, 0.3]);
    mesh(head, new THREE.SphereGeometry(0.045, 5, 4), 0x111111, [0.1, 0.05, 0.3]);
    mesh(head, new THREE.CylinderGeometry(0.1, 0.1, 0.05, 7), 0x8dad58, [-0.36, 0, 0], [0, 0, PI / 2], head);
    mesh(head, new THREE.CylinderGeometry(0.1, 0.1, 0.05, 7), 0x8dad58, [0.36, 0, 0], [0, 0, PI / 2], head);
    // 焦虑汗滴
    mesh(head, new THREE.ConeGeometry(0.05, 0.16, 4), 0x9ee5e0, [0.3, 0.24, 0.08], [0, 0, PI], head);
    box(0.3, 0.36, 0.04, 0xd8d2bb, [0, 0.5, 0.24], [0, 0, 0], body);
    const label = signPlane('KPI', 0.3, 0.1, { color: '#384a25', fontSize: 58, width: 256, height: 128 });
    label.position.set(0, 0.52, 0.265);
    body.add(label);
  }

  const limbs = group(body, [0, 0.05, 0]);
  const arms = {};
  for (const side of [-1, 1]) {
    const pivot = group(limbs, [side * 0.45, 0.58, 0]);
    cyl(0.1, 0.08, 0.62, kind === 'snowman' ? 0xe8eef0 : bodyColor, [0, -0.28, 0], [0, 0, side * 0.1], pivot, 5);
    mesh(pivot, new THREE.IcosahedronGeometry(0.12, 0), skin, [0, -0.62, 0.02]);
    arms[side < 0 ? 'left' : 'right'] = pivot;
  }
  const legs = {};
  for (const side of [-1, 1]) {
    const pivot = group(g, [side * 0.22, 0.5, 0]);
    cyl(0.1, 0.08, 0.5, kind === 'snowman' ? 0xe8eef0 : bodyColor, [0, -0.22, 0], [0, 0, 0], pivot, 5);
    box(0.2, 0.12, 0.34, 0x28211b, [0, -0.46, 0.08], [0, 0, 0], pivot);
    legs[side < 0 ? 'left' : 'right'] = pivot;
  }

  g.userData.rig = { body, head, arms, legs };
  if (kind === 'resume') g.scale.setScalar(0.92);
  return g;
}

function bossBase(scale = 1) {
  const g = new THREE.Group();
  const body = group(g, [0, 0.9 * scale, 0]);
  return { g, body, scale };
}

export function makeBoss(type, theme = {}) {
  const g = new THREE.Group();
  const rig = {};
  const accent = theme.bossAccent ?? 0xc44835;
  if (type === 'bear') {
    const body = group(g, [0, 0.8, 0]);
    mesh(body, new THREE.IcosahedronGeometry(1.25, 1), 0x2e2724, [0, 0.85, 0], [0, 0, 0], [1.15, 1.25, 0.9]);
    mesh(body, new THREE.IcosahedronGeometry(1.02, 1), 0x342c28, [0, 0.8, 0.24], [0, 0, 0], [0.9, 1.1, 0.6]);
    // 西装
    box(1.7, 1.0, 0.18, 0x363c4a, [0, 0.65, 0.92], [0, 0, 0], body);
    box(0.72, 0.66, 0.2, 0xd5d0c2, [0, 0.78, 1.01], [0, 0, 0], body);
    box(0.18, 0.58, 0.22, 0x96352d, [0, 0.8, 1.06], [0, 0, 0.06], body);
    box(0.36, 0.08, 0.05, 0x2d3240, [0.25, 0.91, 1.12], [0, 0, 0], body);
    box(0.36, 0.08, 0.05, 0x2d3240, [0.4, 0.84, 1.12], [0, 0, 0], body);
    for (const side of [-1, 1]) {
      const leg = group(g, [side * 0.5, 0.62, 0]);
      cyl(0.28, 0.3, 0.7, 0x242322, [0, -0.25, 0], [0, 0, 0], leg, 6);
      box(0.48, 0.22, 0.75, 0x191817, [0, -0.58, 0.15], [0, 0, 0], leg);
      const arm = group(body, [side * 1.22, 1.28, 0]);
      cyl(0.22, 0.18, 0.8, 0x211f1e, [0, -0.35, 0], [0, 0, side * 0.12], arm, 6);
      mesh(arm, new THREE.IcosahedronGeometry(0.25, 0), 0x1b1a19, [0, -0.8, 0]);
      rig[side < 0 ? 'armL' : 'armR'] = arm;
    }
    const head = group(body, [0, 2.02, 0.12]);
    mesh(head, new THREE.IcosahedronGeometry(0.68, 1), 0x1e1c1b, [0, 0, 0], [0, 0, 0], [1.1, 0.95, 0.9]);
    for (const side of [-1, 1]) {
      mesh(head, new THREE.CylinderGeometry(0.22, 0.22, 0.16, 7), 0x171615, [side * 0.5, 0.52, 0], [0, 0, PI / 2], head);
      mesh(head, new THREE.CylinderGeometry(0.12, 0.12, 0.18, 7), 0x5a4031, [side * 0.51, 0.52, 0], [0, 0, PI / 2], head);
    }
    mesh(head, new THREE.SphereGeometry(0.35, 7, 5), 0x654936, [0, -0.16, 0.5], [0, 0, 0], [1.1, 0.7, 0.6]);
    box(0.22, 0.1, 0.08, 0x12100f, [0, -0.05, 0.72]);
    box(0.62, 0.18, 0.12, 0x0d0d0c, [0, 0.17, 0.58], [0, 0, 0], head);
    box(0.24, 0.1, 0.02, 0x5e8b90, [-0.18, 0.17, 0.65], [0, 0, 0], head);
    box(0.24, 0.1, 0.02, 0x5e8b90, [0.18, 0.17, 0.65], [0, 0, 0], head);
    // 红袖章
    box(0.3, 0.42, 0.12, 0xa52f29, [-1.1, 0.42, 0.22], [0, 0, 0], g);
    const hr = signPlane('HR', 0.22, 0.11, { color: '#f4d97b', fontSize: 68, width: 256, height: 128 });
    hr.position.set(-1.1, 0.42, 0.28);
    g.add(hr);
    // 简历板
    const clipboard = group(body, [1.32, 1.25, 0.35], [0.1, -0.2, -0.2]);
    box(0.72, 0.92, 0.08, 0x8a5c32, [0, 0, 0], [0, 0, 0], clipboard);
    box(0.58, 0.76, 0.03, 0xece3ce, [0, 0, 0.06], [0, 0, 0], clipboard);
    box(0.28, 0.07, 0.04, 0x6d3128, [0, 0.28, 0.08], [0, 0, 0], clipboard);
    box(0.4, 0.035, 0.04, 0x4b4d4c, [-0.04, 0.05, 0.08], [0, 0, 0], clipboard);
    box(0.32, 0.035, 0.04, 0x4b4d4c, [-0.08, -0.08, 0.08], [0, 0, 0], clipboard);
    rig.head = head;
    rig.body = body;
    g.userData.baseScale = 1.05;
  } else if (type === 'rat') {
    const body = group(g, [0, 0.9, 0]);
    mesh(body, new THREE.IcosahedronGeometry(0.9, 1), 0x7f7046, [0, 0.4, 0], [0, 0, 0], [1.0, 1.1, 0.85]);
    // 黄风斗篷
    mesh(body, new THREE.ConeGeometry(1.2, 1.7, 7, 1, true), 0xb4903c, [0, 0.5, -0.1], [0, 0, 0], body);
    box(0.68, 0.7, 0.22, 0x9e793f, [0, 0.46, 0.66], [0, 0, 0], body);
    box(0.44, 0.4, 0.1, 0x574437, [0, 0.44, 0.79], [0, 0, 0], body);
    // 外卖箱
    box(1.05, 1.0, 0.55, 0x9b3a2e, [0, 1.1, -0.86], [0, 0, 0], g);
    const logo = signPlane('黄风快送', 0.8, 0.3, { color: '#f5d174', fontSize: 56, width: 512, height: 256 });
    logo.position.set(0, 1.16, -1.15);
    logo.rotation.y = PI;
    g.add(logo);
    for (const side of [-1, 1]) {
      const leg = group(g, [side * 0.35, 0.68, 0]);
      cyl(0.18, 0.15, 0.68, 0x5e4b33, [0, -0.28, 0], [0, 0, 0], leg, 5);
      box(0.3, 0.18, 0.65, 0x2c2720, [0, -0.58, 0.1], [0, 0, 0], leg);
      const arm = group(body, [side * 0.82, 1.1, 0]);
      cyl(0.13, 0.1, 0.8, 0x705d3f, [0, -0.33, 0], [0, 0, side * 0.1], arm, 5);
      handMesh(arm);
      rig[side < 0 ? 'armL' : 'armR'] = arm;
    }
    const head = group(body, [0, 1.55, 0.08]);
    mesh(head, new THREE.IcosahedronGeometry(0.52, 1), 0x7e6b48, [0, 0, 0], [0, 0, 0], [1, 0.9, 1.05]);
    mesh(head, new THREE.ConeGeometry(0.08, 0.6, 5), 0x8c7450, [0.1, -0.1, 0.64], [PI / 2, 0, 0.1], head);
    for (const side of [-1, 1]) {
      mesh(head, new THREE.CylinderGeometry(0.17, 0.17, 0.1, 7), 0x6e5b3e, [side * 0.46, 0.34, -0.04], [0, 0, PI / 2], head);
      mesh(head, new THREE.SphereGeometry(0.06, 5, 4), 0x151515, [side * 0.16, 0.06, 0.46]);
    }
    // 头盔
    mesh(head, new THREE.SphereGeometry(0.55, 8, 5, 0, PI * 2, 0, PI / 2), 0xd3a63e, [0, 0.2, 0], [0, 0, 0], head);
    box(0.8, 0.08, 0.3, 0xd3a63e, [0, 0.22, 0.48], [0.1, 0, 0], head);
    box(0.56, 0.18, 0.08, 0x2c2e2a, [0, 0.05, 0.5], [0, 0, 0], head);
    // 大风扇
    const fan = group(body, [-1.25, 1.45, 0.15], [0.1, 0, 0.2]);
    cyl(0.07, 0.07, 2.3, 0x6f4a28, [0, -0.7, 0], [0, 0, 0], fan, 5);
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * PI * 2;
      box(0.12, 1.2, 0.04, 0xd5b46a, [Math.cos(a) * 0.58, 0.8, Math.sin(a) * 0.58], [a, 0, 0], fan);
    }
    mesh(fan, new THREE.CylinderGeometry(0.18, 0.18, 0.14, 7), 0xc69334, [0, 0.8, 0], [0, 0, 0], fan);
    rig.head = head;
    rig.body = body;
    rig.fan = fan;
  } else if (type === 'yellowbrow') {
    const body = group(g, [0, 1.0, 0]);
    mesh(body, new THREE.IcosahedronGeometry(1.22, 1), 0xd8bd6b, [0, 0.5, 0], [0, 0, 0], [1.1, 1.3, 0.96]);
    // 袈裟
    box(1.9, 1.6, 0.2, 0xa02e28, [0, 0.52, 0.88], [0, 0, 0], body);
    box(0.18, 1.55, 0.22, 0xdab34d, [0.35, 0.52, 0.99], [0, 0, 0.2], body);
    for (const side of [-1, 1]) {
      const arm = group(body, [side * 1.0, 1.18, 0]);
      cyl(0.24, 0.2, 0.85, 0xd3b45e, [0, -0.35, 0], [0, 0, side * 0.15], arm, 6);
      mesh(arm, new THREE.IcosahedronGeometry(0.24, 0), 0xc9a071, [0, -0.82, 0]);
      rig[side < 0 ? 'armL' : 'armR'] = arm;
    }
    for (const side of [-1, 1]) {
      const leg = group(g, [side * 0.45, 0.62, 0]);
      cyl(0.26, 0.32, 0.6, 0xd5b76a, [0, -0.2, 0], [0, 0, 0], leg, 6);
    }
    const head = group(body, [0, 1.68, 0.05]);
    mesh(head, new THREE.IcosahedronGeometry(0.6, 1), 0xe0b87d, [0, 0, 0], [0, 0, 0], [1, 1.08, 0.95]);
    mesh(head, new THREE.SphereGeometry(0.28, 7, 5), 0xc8a06e, [0, -0.22, 0.48], [0, 0, 0], [1, 0.8, 0.45]);
    for (const side of [-1, 1]) {
      mesh(head, new THREE.SphereGeometry(0.17, 6, 4), 0x2b241b, [side * 0.46, 0.06, 0.3], [0, 0, 0], [1, 1.4, 0.6]);
      mesh(head, new THREE.SphereGeometry(0.19, 6, 4), 0xe5d7bc, [side * 0.46, 0.12, 0.33], [0, 0, 0], [1, 1.2, 0.5]);
      mesh(head, new THREE.SphereGeometry(0.055, 5, 4), 0x151311, [side * 0.16, 0.04, 0.54]);
    }
    box(0.36, 0.05, 0.02, 0x5b382c, [0, -0.16, 0.61]);
    // 金铙光环
    const halo = group(g, [0, 2.4, -0.5], [PI / 2, 0, 0]);
    torus(1.3, 0.08, 0xe5bc52, [0, 0, 0], [0, 0, 0], halo, 20, 5);
    torus(1.08, 0.04, 0xffdf8e, [0, 0, 0], [0, 0, 0], halo, 20, 4);
    rig.halo = halo;
    // 麦克风
    const mic = group(body, [1.05, 1.25, 0.55], [0.2, 0, -0.3]);
    cyl(0.05, 0.05, 0.7, 0x33312e, [0, -0.2, 0], [0, 0, 0], mic, 5);
    mesh(mic, new THREE.IcosahedronGeometry(0.13, 0), 0x4a4a46, [0, 0.18, 0]);
    box(0.38, 0.26, 0.12, 0x2d2c2a, [1.05, 1.38, 0.38], [0, 0, 0], body);
    rig.head = head;
    rig.body = body;
  } else if (type === 'hundredEyes') {
    const body = group(g, [0, 1.0, 0]);
    mesh(body, new THREE.CylinderGeometry(0.5, 0.9, 2.1, 7), 0x3a2147, [0, 0.55, 0], [0, 0, 0], body);
    mesh(body, new THREE.IcosahedronGeometry(0.85, 0), 0x2c1936, [0, 0.2, 0], [0, 0, 0], [1, 0.7, 0.8]);
    for (const side of [-1, 1]) {
      const arm = group(body, [side * 0.78, 1.15, 0], [0, 0, side * 0.22]);
      cyl(0.15, 0.11, 1.0, 0x4b2b5a, [0, -0.42, 0], [0, 0, 0], arm, 5);
      mesh(arm, new THREE.IcosahedronGeometry(0.18, 0), 0xc19a7b, [0, -0.95, 0]);
      rig[side < 0 ? 'armL' : 'armR'] = arm;
    }
    const head = group(body, [0, 1.65, 0.02]);
    mesh(head, new THREE.IcosahedronGeometry(0.43, 1), 0xb18d75, [0, 0, 0], [0, 0, 0], [0.9, 1.1, 0.9]);
    for (const side of [-1, 1]) {
      mesh(head, new THREE.SphereGeometry(0.1, 5, 4), 0x1b1218, [side * 0.17, 0.08, 0.36]);
      mesh(head, new THREE.SphereGeometry(0.04, 5, 4), 0xd4475b, [side * 0.17, 0.08, 0.44]);
    }
    box(0.34, 0.06, 0.03, 0x401a2e, [0, -0.22, 0.4]);
    // 身上一百只眼（其实是12只，预算有限）
    const eyes = [];
    for (let i = 0; i < 14; i++) {
      const a = (i / 14) * PI * 2;
      const eye = mesh(body, new THREE.SphereGeometry(0.08, 5, 4), 0xe1c76f, [Math.cos(a) * 0.55, 0.55 + Math.sin(i * 2.1) * 0.75, Math.sin(a) * 0.5 + 0.3]);
      mesh(eye, new THREE.SphereGeometry(0.035, 4, 3), 0x3c1520, [0, 0, 0.07]);
      eyes.push(eye);
    }
    // 环形补光灯
    const ring = group(g, [0, 2.05, -0.55], [0, 0, 0]);
    torus(0.9, 0.06, 0xffe4c1, [0, 0, 0], [0, 0, 0], ring, 24, 5);
    const light = new THREE.PointLight(0xffb3d1, 2.2, 8, 2);
    light.position.set(0, 0, 0.2);
    ring.add(light);
    // 自拍杆
    const stick = group(body, [0.95, 1.2, 0.55], [0.1, 0, -0.2]);
    cyl(0.025, 0.025, 1.4, 0x262424, [0, 0, 0], [0, 0, 0], stick, 5);
    box(0.28, 0.5, 0.06, 0x1b1a1a, [0, 0.75, 0], [0, 0, 0], stick);
    rig.head = head;
    rig.body = body;
    rig.eyes = eyes;
    rig.ring = ring;
  } else if (type === 'redboy') {
    const body = group(g, [0, 0.75, 0]);
    mesh(body, new THREE.IcosahedronGeometry(0.62, 1), 0xb44c35, [0, 0.35, 0], [0, 0, 0], [1, 1.05, 0.85]);
    box(0.56, 0.45, 0.08, 0x2d2522, [0, 0.37, 0.51], [0, 0, 0], body);
    box(0.5, 0.35, 0.08, 0x83705a, [0, 0.02, 0.01], [0, 0, 0], body);
    for (const side of [-1, 1]) {
      const leg = group(g, [side * 0.26, 0.5, 0]);
      cyl(0.12, 0.1, 0.48, 0xb87750, [0, -0.2, 0], [0, 0, 0], leg, 5);
      box(0.22, 0.14, 0.4, 0xe34e2c, [0, -0.44, 0.12], [0, 0, 0], leg);
      const arm = group(body, [side * 0.58, 0.85, 0]);
      cyl(0.1, 0.08, 0.55, 0xc98258, [0, -0.24, 0], [0, 0, side * 0.15], arm, 5);
      mesh(arm, new THREE.IcosahedronGeometry(0.12, 0), 0xd79d71, [0, -0.53, 0]);
      rig[side < 0 ? 'armL' : 'armR'] = arm;
    }
    const head = group(body, [0, 1.02, 0.03]);
    mesh(head, new THREE.IcosahedronGeometry(0.4, 1), 0xe0a06d, [0, 0, 0], [0, 0, 0]);
    for (const side of [-1, 1]) {
      mesh(head, new THREE.SphereGeometry(0.055, 5, 4), 0xfff1d8, [side * 0.14, 0.07, 0.34]);
      mesh(head, new THREE.SphereGeometry(0.025, 4, 3), 0x1b1110, [side * 0.14, 0.07, 0.39]);
    }
    box(0.2, 0.05, 0.03, 0x6d251d, [0, -0.16, 0.38]);
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * PI * 2;
      cone(0.1, 0.55 + (i % 3) * 0.2, i % 2 ? 0xf4a02d : 0xe4492c, [Math.cos(a) * 0.28, 0.46, Math.sin(a) * 0.24], [Math.cos(a) * 0.5, 0, Math.sin(a) * 0.5], head, 5);
    }
    // 巨型烤签
    const skewer = group(body, [0.95, 0.8, 0.3], [0.2, 0, -0.1]);
    cyl(0.035, 0.035, 2.8, 0xbc9c6b, [0, 0, 0], [0, 0, 0], skewer, 5);
    for (let i = 0; i < 4; i++) {
      box(0.3, 0.25, 0.22, 0x8e3e2b, [0, -0.8 + i * 0.45, 0], [0, 0.4 * i, 0], skewer);
    }
    cone(0.12, 0.3, 0xcfc4ae, [0, 1.5, 0], [0, 0, 0], skewer, 4);
    rig.head = head;
    rig.body = body;
    rig.skewer = skewer;
  } else if (type === 'sixear') {
    const monkey = makeMonkey({
      fur: 0x2b2523,
      cloth: 0x202b34,
      gold: 0xa9a6a1,
      face: 0xc7b7a6,
      sixEars: true,
      badge: true,
      staff: true,
    });
    monkey.scale.setScalar(1.45);
    g.add(monkey);
    rig.monkey = monkey;
    rig.body = monkey.userData.rig.torso;
    rig.head = monkey.userData.rig.head;
    rig.arms = monkey.userData.rig.arms;
    rig.legs = monkey.userData.rig.legs;
    // 黑气
    const aura = mesh(g, new THREE.IcosahedronGeometry(1.5, 1), material(0x120d12, { transparent: true, opacity: 0.18, side: THREE.BackSide }), [0, 1.5, 0]);
    aura.castShadow = false;
    rig.aura = aura;
  } else if (type === 'rock') {
    const body = group(g, [0, 0.9, 0]);
    mesh(body, new THREE.DodecahedronGeometry(1.1, 0), 0x6b665c, [0, 0.65, 0], [0.1, 0.2, 0.05], [1.1, 1.15, 0.9]);
    mesh(body, new THREE.DodecahedronGeometry(0.7, 0), 0x5a554c, [0, 1.6, 0], [0, 0.5, 0.2]);
    // 保安帽
    cyl(0.42, 0.62, 0.25, 0x232f2b, [0, 2.0, 0], [0, 0, 0], body, 7);
    box(0.75, 0.1, 0.48, 0x232f2b, [0, 1.92, 0.32], [0, 0, 0], body);
    // 眼
    box(0.16, 0.1, 0.05, 0xffb74a, [-0.18, 1.65, 0.66], [0, 0, 0], body);
    box(0.16, 0.1, 0.05, 0xffb74a, [0.18, 1.65, 0.66], [0, 0, 0], body);
    // 工牌
    box(0.3, 0.45, 0.06, 0xd8d0bd, [0, 0.9, 0.8], [0, 0, 0.08], body);
    const label = signPlane('保安', 0.24, 0.1, { color: '#31352e', fontSize: 48, width: 256, height: 128 });
    label.position.set(0, 0.95, 0.85);
    label.rotation.z = 0.08;
    body.add(label);
    // 停车牌
    const stop = group(body, [-1.25, 1.0, 0.2], [0, 0.2, 0.15]);
    cyl(0.04, 0.04, 2.1, 0x8d8a7c, [0, -0.2, 0], [0, 0, 0], stop, 5);
    mesh(stop, new THREE.CylinderGeometry(0.5, 0.5, 0.08, 8), 0xb43a2e, [0, 0.75, 0], [PI / 2, 0, 0]);
    const stopText = signPlane('停', 0.55, 0.55, { color: '#f5e9cf', fontSize: 150, width: 256, height: 256 });
    stopText.position.set(0, 0.75, 0.05);
    stop.add(stopText);
    for (const side of [-1, 1]) {
      const arm = group(body, [side * 0.95, 1.0, 0]);
      mesh(arm, new THREE.DodecahedronGeometry(0.22, 0), 0x6b665c, [0, -0.2, 0]);
      rig[side < 0 ? 'armL' : 'armR'] = arm;
    }
    rig.body = body;
    g.userData.baseScale = 1.1;
  }

  g.userData.rig = rig;
  return g;
}

function handMesh(parent) {
  mesh(parent, new THREE.IcosahedronGeometry(0.13, 0), 0xb58e63, [0, -0.78, 0]);
}

export function makeScooter(color = 0xd8a439) {
  const g = new THREE.Group();
  box(0.45, 0.18, 1.5, color, [0, 0.55, 0], [0, 0, 0], g);
  box(0.2, 0.55, 0.2, 0x2a2a27, [0, 0.85, 0.55], [0.2, 0, 0], g);
  cyl(0.08, 0.08, 1.1, 0x232321, [0, 1.15, 0.62], [PI / 2, 0, 0], g, 6);
  box(0.5, 0.4, 0.65, 0xa33c2d, [0, 0.75, -0.55], [0, 0, 0], g);
  for (const z of [-0.6, 0.6]) {
    const wheel = cyl(0.28, 0.28, 0.15, 0x1c1c1a, [0, 0.28, z], [0, 0, PI / 2], g, 8);
    wheel.rotation.z = PI / 2;
  }
  return g;
}

export function makeShrine() {
  const g = new THREE.Group();
  // 共享充电宝机柜
  box(1.15, 1.8, 0.5, 0x262b27, [0, 0.9, 0], [0, 0, 0], g);
  box(1.25, 0.16, 0.6, 0x6b5b38, [0, 1.86, 0], [0, 0, 0], g);
  box(0.95, 0.6, 0.06, 0x111713, [0, 1.45, 0.27], [0, 0, 0], g);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      box(0.2, 0.12, 0.04, 0xd9ad50, [-0.3 + j * 0.3, 1.26 + i * 0.16, 0.31], [0, 0, 0], g);
    }
  }
  const header = signPlane('共享香火', 0.95, 0.22, { color: '#f1cf7b', fontSize: 60, width: 512, height: 128 });
  header.position.set(0, 1.74, 0.31);
  g.add(header);
  const sub = signPlane('土地公物业 · 扫码即拜', 0.98, 0.15, { color: '#c9bd99', fontSize: 36, width: 512, height: 96 });
  sub.position.set(0, 1.56, 0.305);
  g.add(sub);
  const glow = new THREE.PointLight(0xffc668, 1.2, 5, 2);
  glow.position.set(0, 1.5, 0.7);
  g.add(glow);
  g.userData.interact = 'shrine';
  g.userData.label = '共享香火';
  return g;
}

export function makeChest() {
  const g = new THREE.Group();
  box(0.85, 0.5, 0.55, 0x7a4b2d, [0, 0.25, 0], [0, 0, 0], g);
  box(0.9, 0.12, 0.6, 0xbd8c42, [0, 0.48, 0], [0, 0, 0], g);
  box(0.12, 0.22, 0.06, 0xd4b161, [0, 0.28, 0.3], [0, 0, 0], g);
  const glow = new THREE.PointLight(0xffc35d, 0.6, 2.4, 2);
  glow.position.set(0, 0.7, 0.2);
  g.add(glow);
  return g;
}

export function makeGate(theme = {}) {
  const g = new THREE.Group();
  const color = theme.gate ?? 0x7e2a24;
  const gold = theme.gold ?? 0xd0a14d;
  for (const side of [-1, 1]) {
    cyl(0.28, 0.38, 5.5, color, [side * 4.2, 2.75, 0], [0, 0, 0], g, 7);
    cyl(0.45, 0.55, 0.3, 0x3e3024, [side * 4.2, 0.15, 0], [0, 0, 0], g, 7);
  }
  box(9.6, 0.5, 0.6, color, [0, 5.2, 0], [0, 0, 0], g);
  box(10.5, 0.22, 1.1, gold, [0, 5.55, 0], [0, 0, 0], g);
  box(9.0, 0.2, 0.85, 0x2f2a24, [0, 5.72, 0], [0, 0, 0], g);
  box(9.8, 0.28, 1.4, 0x2f2a24, [0, 5.9, 0], [0, 0, 0], g);
  const sign = signPlane(theme.gateText ?? '面 试 通 道', 4.2, 0.8, { color: '#f0cf7b', fontSize: 92, width: 1024, height: 192 });
  sign.position.set(0, 4.5, 0.36);
  g.add(sign);
  for (const side of [-1, 1]) {
    const lantern = group(g, [side * 2.9, 4.4, 0.1]);
    cyl(0.18, 0.24, 0.55, 0xb53027, [0, 0, 0], [0, 0, 0], lantern, 6);
    mesh(lantern, new THREE.IcosahedronGeometry(0.2, 0), 0xffb35d, [0, -0.02, 0]);
    const pt = new THREE.PointLight(0xff7b3c, 1.4, 8, 2);
    pt.position.set(0, 0, 0.2);
    lantern.add(pt);
  }
  return g;
}

export function makeTree(type = 'peach', rnd = Math.random) {
  const g = new THREE.Group();
  const trunkColor = type === 'bamboo' ? 0x596d3c : type === 'pine' ? 0x3b2e23 : 0x4b3423;
  const trunkH = type === 'bamboo' ? 5.5 : 2.8 + rnd() * 1.8;
  cyl(0.14, 0.32, trunkH, trunkColor, [0, trunkH / 2, 0], [0, 0, 0], g, 6);
  if (type === 'bamboo') {
    for (let i = 0; i < 4; i++) {
      const a = rnd() * PI * 2;
      const h = 3.5 + rnd() * 2.5;
      const b = group(g, [Math.cos(a) * 0.5, 0, Math.sin(a) * 0.5], [0.05 * (rnd() - 0.5), 0, 0.05 * (rnd() - 0.5)]);
      cyl(0.08, 0.1, h, 0x5d753f, [0, h / 2, 0], [0, 0, 0], b, 5);
      for (let j = 0; j < 5; j++) {
        const blade = box(0.05, 0.02, 0.7, 0x7c8e51, [0, h - j * 0.45, 0], [0.4, rnd() * PI, 0], b);
        blade.rotation.z = 0.5;
      }
    }
  } else {
    const canopyColor = type === 'pine' ? 0x2f5038 : type === 'dead' ? 0x5c4b38 : 0x6d8345;
    if (type === 'pine') {
      for (let i = 0; i < 4; i++) cone(1.8 - i * 0.33, 1.4, canopyColor, [0, trunkH - 0.2 + i * 0.8, 0], [0, rnd() * PI, 0], g, 6);
    } else if (type === 'dead') {
      for (let i = 0; i < 4; i++) {
        const a = rnd() * PI * 2;
        cyl(0.05, 0.1, 1.5, trunkColor, [Math.cos(a) * 0.7, trunkH - 0.8 + i * 0.15, Math.sin(a) * 0.7], [0.9, a, 0], g, 5);
      }
    } else if (type === 'peach') {
      for (let i = 0; i < 7; i++) {
        const a = rnd() * PI * 2;
        const rr = 1.1 + rnd() * 1.5;
        mesh(g, new THREE.IcosahedronGeometry(0.9 + rnd() * 0.6, 0), canopyColor, [Math.cos(a) * rr, trunkH + rnd() * 1.0, Math.sin(a) * rr], [0, rnd() * PI, 0], [1, 0.8, 1]);
        if (i < 4) mesh(g, new THREE.IcosahedronGeometry(0.16, 0), 0xe59a86, [Math.cos(a) * (rr - 0.2), trunkH + 0.2 + rnd() * 1.2, Math.sin(a) * (rr - 0.2)]);
      }
    } else {
      for (let i = 0; i < 5; i++) {
        const a = rnd() * PI * 2;
        mesh(g, new THREE.IcosahedronGeometry(1.1 + rnd() * 0.8, 0), canopyColor, [Math.cos(a) * 1.3, trunkH + rnd() * 1.0, Math.sin(a) * 1.3], [0, rnd() * PI, 0], [1, 0.8, 1]);
      }
    }
  }
  return g;
}

export function makeRock(scale = 1, color = 0x6d6656) {
  const g = new THREE.Group();
  mesh(g, new THREE.DodecahedronGeometry(1.3 * scale, 0), color, [0, 0.75 * scale, 0], [0, Math.random() * PI, 0.1], [1.3, 0.9, 1]);
  mesh(g, new THREE.DodecahedronGeometry(0.6 * scale, 0), 0x585246, [0.9 * scale, 0.3 * scale, 0.3], [0.3, 0.2, 0]);
  return g;
}

export function makeCloud(scale = 1) {
  const g = new THREE.Group();
  for (let i = 0; i < 5; i++) {
    mesh(g, new THREE.IcosahedronGeometry(1.2 * scale, 0), 0xdde5e1, [(i - 2) * 1.1 * scale, Math.sin(i) * 0.25 * scale, Math.random() * 0.8], [0, 0, 0], [1.3, 0.55, 0.9]);
  }
  const mat = g.children[0].material;
  mat.transparent = true;
  mat.opacity = 0.32;
  mat.depthWrite = false;
  return g;
}

export function makePagoda(theme = {}) {
  const g = new THREE.Group();
  for (let i = 0; i < 5; i++) {
    const w = 2.8 - i * 0.45;
    box(w, 1.0, w, theme.wall ?? 0x5a3c2d, [0, 0.5 + i * 1.1, 0], [0, 0, 0], g);
    box(w + 0.8, 0.18, w + 0.8, theme.roof ?? 0x30281e, [0, 1.05 + i * 1.1, 0], [0, 0, 0], g);
    // 翘角
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      box(0.5, 0.14, 0.16, theme.roof ?? 0x30281e, [sx * (w / 2 + 0.3), 1.14 + i * 1.1, sz * (w / 2 + 0.3)], [0, sx * sz * 0.4, 0], g);
    }
  }
  return g;
}

export function makeSpeaker() {
  const g = new THREE.Group();
  box(0.85, 1.5, 0.6, 0x1d1c1b, [0, 0.75, 0], [0, 0, 0], g);
  mesh(g, new THREE.CylinderGeometry(0.28, 0.28, 0.06, 12), 0x4a4742, [0, 1.05, 0.31], [PI / 2, 0, 0]);
  mesh(g, new THREE.CylinderGeometry(0.18, 0.18, 0.06, 12), 0x4a4742, [0, 0.5, 0.31], [PI / 2, 0, 0]);
  return g;
}

export function makeDesk() {
  const g = new THREE.Group();
  box(1.9, 0.12, 0.9, 0x73553a, [0, 0.82, 0], [0, 0, 0], g);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) box(0.12, 0.8, 0.12, 0x40342a, [sx * 0.8, 0.4, sz * 0.35], [0, 0, 0], g);
  box(0.55, 0.35, 0.06, 0x1f2524, [0, 1.15, -0.05], [-0.15, 0, 0], g);
  box(0.2, 0.06, 0.12, 0x2f3633, [0, 0.92, 0.05], [0, 0, 0], g);
  return g;
}

export function makeGrill() {
  const g = new THREE.Group();
  box(1.9, 0.8, 0.85, 0x353535, [0, 0.5, 0], [0, 0, 0], g);
  box(2.0, 0.12, 0.95, 0x5a5a55, [0, 0.95, 0], [0, 0, 0], g);
  for (let i = 0; i < 7; i++) cyl(0.03, 0.03, 1.5, 0x8a745e, [-0.7 + i * 0.23, 1.01, 0], [0, 0, PI / 2], g, 5);
  for (let i = 0; i < 6; i++) box(0.18, 0.08, 0.18, 0x8f3e2a, [-0.6 + i * 0.25, 1.06, 0.1], [0, 0.2 * i, 0], g);
  for (let i = 0; i < 4; i++) {
    const flame = cone(0.15, 0.45, i % 2 ? 0xf06c2a : 0xffb142, [-0.6 + i * 0.4, 0.25, 0], [0, 0, 0], g, 5);
    flame.material.emissive = new THREE.Color(0xff4c19);
    flame.material.emissiveIntensity = 1.8;
  }
  const pt = new THREE.PointLight(0xff7a2b, 2.5, 8, 2);
  pt.position.set(0, 1.3, 0);
  g.add(pt);
  return g;
}

export function makeLantern(color = 0xb13a2a, scale = 1) {
  const g = new THREE.Group();
  cyl(0.2 * scale, 0.26 * scale, 0.6 * scale, color, [0, 0, 0], [0, 0, 0], g, 7);
  cyl(0.3 * scale, 0.3 * scale, 0.06 * scale, 0xd3a34d, [0, 0.31 * scale, 0], [0, 0, 0], g, 7);
  cyl(0.3 * scale, 0.3 * scale, 0.06 * scale, 0xd3a34d, [0, -0.31 * scale, 0], [0, 0, 0], g, 7);
  const light = new THREE.PointLight(0xff8d3e, 1.2, 7, 2);
  light.position.set(0, 0, 0);
  g.add(light);
  return g;
}

export function makeBannerPole(text, opts = {}) {
  const g = new THREE.Group();
  cyl(0.05, 0.07, 3.2, 0x5e4830, [0, 1.6, 0], [0, 0, 0], g, 5);
  const b = banner(text, 0.75, 2.0, { bg: opts.bg ?? 0x9d2922, color: opts.color ?? '#efcf7a', vertical: true, fontSize: 72 });
  b.position.set(0.45, 2.1, 0);
  g.add(b);
  return g;
}

export function makeHoloBarrier(color = 0xf0b94a) {
  const geo = new THREE.PlaneGeometry(8.4, 5.0, 12, 8);
  const mat = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: 0.28,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const plane = new THREE.Mesh(geo, mat);
  plane.position.set(0, 2.5, 0);
  const runes = [];
  for (let i = 0; i < 8; i++) {
    const rune = signPlane(['封', '印', '通', '行', '面', '试', '中', '止'][i], 0.42, 0.42, { color: '#ffe2a0', fontSize: 140, width: 256, height: 256 });
    rune.position.set(-3.2 + (i % 4) * 2.1, 1.4 + Math.floor(i / 4) * 2.1, 0.03);
    rune.material.opacity = 0.55;
    plane.add(rune);
    runes.push(rune);
  }
  plane.userData.runes = runes;
  return plane;
}

export function makeObjectiveBeam(color = 0xffc75f) {
  const g = new THREE.Group();
  const geo = new THREE.CylinderGeometry(0.28, 0.7, 12, 8, 1, true);
  const mat = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: 0.2,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const beam = new THREE.Mesh(geo, mat);
  beam.position.y = 6;
  g.add(beam);
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.1, 0.04, 5, 24),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  ring.rotation.x = PI / 2;
  ring.position.y = 0.06;
  g.add(ring);
  const diamond = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.3, 0),
    new THREE.MeshBasicMaterial({ color: 0xffe1a0, transparent: true, opacity: 0.9 })
  );
  diamond.position.y = 3.2;
  g.add(diamond);
  g.userData.ring = ring;
  g.userData.diamond = diamond;
  g.userData.beam = beam;
  return g;
}

export function makeRelic() {
  const g = new THREE.Group();
  const gold = material(0xe6b957, { metalness: 0.7, roughness: 0.28, emissive: 0x6b3d05, emissiveIntensity: 0.8 });
  const core = mesh(g, new THREE.OctahedronGeometry(0.38, 0), gold, [0, 1.1, 0]);
  const ring = mesh(g, new THREE.TorusGeometry(0.64, 0.035, 5, 28), gold, [0, 1.1, 0], [PI / 2, 0, 0]);
  const ring2 = mesh(g, new THREE.TorusGeometry(0.82, 0.02, 4, 28), gold, [0, 1.1, 0], [PI / 3, PI / 5, 0]);
  const pt = new THREE.PointLight(0xffd47a, 3, 8, 2);
  pt.position.set(0, 1.2, 0);
  g.add(pt);
  g.userData.rig = { core, ring, ring2, pt };
  return g;
}

export function makeDust(count = 120, color = 0xffd49a, radius = 30, height = 8) {
  const positions = new Float32Array(count * 3);
  const phases = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    const a = Math.random() * PI * 2;
    const r = Math.sqrt(Math.random()) * radius;
    positions[i * 3] = Math.cos(a) * r;
    positions[i * 3 + 1] = Math.random() * height;
    positions[i * 3 + 2] = Math.sin(a) * r;
    phases[i] = Math.random() * PI * 2;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const mat = new THREE.PointsMaterial({
    color,
    size: 0.08,
    transparent: true,
    opacity: 0.65,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    sizeAttenuation: true,
  });
  const points = new THREE.Points(geometry, mat);
  points.userData.phases = phases;
  points.userData.base = positions.slice();
  return points;
}

export function makeMoon(color = 0xffe5ae, size = 14) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createRadialGradient(256, 256, 10, 256, 256, 250);
  grad.addColorStop(0, 'rgba(255,247,219,1)');
  grad.addColorStop(0.38, 'rgba(255,228,168,0.92)');
  grad.addColorStop(0.55, 'rgba(255,210,132,0.18)');
  grad.addColorStop(1, 'rgba(255,200,100,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 512);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false, toneMapped: false });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(size, size, 1);
  return sprite;
}

export function makeSmokePuff(color = 0x8f8a82) {
  const group = new THREE.Group();
  for (let i = 0; i < 4; i++) {
    const m = material(color, { transparent: true, opacity: 0.13, depthWrite: false });
    const puff = new THREE.Mesh(new THREE.IcosahedronGeometry(0.6 + Math.random() * 0.8, 0), m);
    puff.position.set((Math.random() - 0.5) * 1.2, i * 0.5, (Math.random() - 0.5) * 1.2);
    group.add(puff);
  }
  return group;
}

export function makeSpark(color = 0xffcf6f, count = 12) {
  const group = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({ color, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
  for (let i = 0; i < count; i++) {
    const mesh1 = new THREE.Mesh(new THREE.TetrahedronGeometry(0.06 + Math.random() * 0.08), mat.clone());
    mesh1.userData.vel = new THREE.Vector3((Math.random() - 0.5) * 6, Math.random() * 5 + 1, (Math.random() - 0.5) * 6);
    mesh1.userData.life = 0.6 + Math.random() * 0.5;
    group.add(mesh1);
  }
  return group;
}

export function makeHitRing(color = 0xffc25c) {
  const mesh1 = new THREE.Mesh(
    new THREE.RingGeometry(0.5, 0.62, 32),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.8, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  mesh1.rotation.x = -PI / 2;
  mesh1.position.y = 0.04;
  return mesh1;
}

function geometryHasNaN(geometry) {
  const arr = geometry?.attributes?.position?.array;
  if (!arr) return true;
  for (let i = 0; i < arr.length; i++) {
    if (Number.isNaN(arr[i])) return true;
  }
  return false;
}

/**
 * 合并“同一个刚体节点”下的静态子网格。
 * 只处理直接子网格，保留动画所需的 Group / 骨骼层级。
 * 低模角色通常有 30+ 个色块，合并后仍能保持那副破破烂烂的样子。
 */
export function optimizeModel(root) {
  if (!root) return root;
  root.updateMatrixWorld(true);
  const parents = [];
  root.traverse((o) => {
    if (o.isObject3D) parents.push(o);
  });
  for (const parent of parents) {
    const buckets = new Map();
    const meshes = [];
    for (const child of [...parent.children]) {
      if (!child.isMesh || child.isSkinnedMesh || child.isInstancedMesh) continue;
      if (child.children.length) continue;
      if (child.userData.noMerge) continue;
      const mat = child.material;
      if (!mat || Array.isArray(mat) || mat.isShaderMaterial || mat.isSpriteMaterial) continue;
      if (mat.map || mat.transparent || mat.vertexColors) continue;
      if (!child.geometry?.attributes?.position) continue;
      const key = `${mat.uuid}|${child.castShadow ? 1 : 0}|${child.receiveShadow ? 1 : 0}`;
      if (!buckets.has(key)) buckets.set(key, { mat, cast: child.castShadow, receive: child.receiveShadow, list: [] });
      const bucket = buckets.get(key);
      child.updateMatrix();
      const geo = child.geometry.index ? child.geometry.toNonIndexed() : child.geometry.clone();
      geo.applyMatrix4(child.matrix);
      for (const name of Object.keys(geo.attributes)) {
        if (name !== 'position' && name !== 'normal') geo.deleteAttribute(name);
      }
      if (!geo.getAttribute('normal')) geo.computeVertexNormals();
      bucket.list.push(geo);
      meshes.push({ child, bucket });
    }
    for (const bucket of buckets.values()) {
      if (bucket.list.length < 2) {
        bucket.list.forEach((g) => g.dispose());
        continue;
      }
      const merged = mergeGeometries(bucket.list, false);
      bucket.list.forEach((g) => g.dispose());
      if (!merged || geometryHasNaN(merged)) {
        merged?.dispose();
        continue;
      }
      const mergedMesh = new THREE.Mesh(merged, bucket.mat);
      mergedMesh.castShadow = bucket.cast;
      mergedMesh.receiveShadow = bucket.receive;
      parent.add(mergedMesh);
      meshes
        .filter((m) => m.bucket === bucket)
        .forEach(({ child }) => child.removeFromParent());
    }
  }
  return root;
}
