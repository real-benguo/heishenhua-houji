const PALETTES = {
  monkey: { bg1: '#2a2419', bg2: '#0b0b09', fur: '#6d4a2f', fur2: '#4b311f', face: '#d9a572', accent: '#d8a744', cloth: '#a63b2b', rim: '#f0c56e' },
  wukong: { bg1: '#2c2415', bg2: '#0c0a07', fur: '#7c532f', fur2: '#5a3820', face: '#e0ac76', accent: '#f1c666', cloth: '#a57b2a', rim: '#ffe2a0' },
  sixear: { bg1: '#242425', bg2: '#08090a', fur: '#34302e', fur2: '#222020', face: '#b9afa2', accent: '#8d8982', cloth: '#202b34', rim: '#b8c5d3' },
  keeper: { bg1: '#2a251a', bg2: '#0b0a08', fur: '#6d5a3d', fur2: '#4b3d28', face: '#d3b083', accent: '#c6a45e', cloth: '#5a472d', rim: '#e8d19b' },
  pig: { bg1: '#2a1d1f', bg2: '#0b0809', fur: '#d78f96', fur2: '#b36d79', face: '#e7a2a7', accent: '#d6a95b', cloth: '#46647c', rim: '#ffd0d0' },
  bear: { bg1: '#241c16', bg2: '#090807', fur: '#252321', fur2: '#161514', face: '#634735', accent: '#b78b52', cloth: '#2d3240', rim: '#e2b270' },
  rat: { bg1: '#2a2415', bg2: '#0a0907', fur: '#7c6a46', fur2: '#584a31', face: '#a18963', accent: '#d3ac52', cloth: '#4d5c3c', rim: '#f0d28d' },
  yellowbrow: { bg1: '#2b2518', bg2: '#0b0a07', fur: '#d8b06e', fur2: '#b78a4c', face: '#e2b87d', accent: '#e8c35d', cloth: '#9f2e28', rim: '#ffe6a3' },
  spider: { bg1: '#25152a', bg2: '#09060b', fur: '#4a2b56', fur2: '#2e1937', face: '#b28d76', accent: '#d58bc4', cloth: '#3d2349', rim: '#ff9fdc' },
  redboy: { bg1: '#2b1812', bg2: '#0c0706', fur: '#d77d51', fur2: '#a94d32', face: '#e3a272', accent: '#f1a238', cloth: '#a53a2c', rim: '#ffb05e' },
  rock: { bg1: '#24231d', bg2: '#090908', fur: '#6b665b', fur2: '#4d4941', face: '#807a6c', accent: '#b0a276', cloth: '#2b342e', rim: '#d6c79c' },
};

function frameDefs(key, p) {
  return `
  <defs>
    <radialGradient id="bg-${key}" cx="50%" cy="36%" r="80%">
      <stop offset="0%" stop-color="${p.bg1}"/><stop offset="100%" stop-color="${p.bg2}"/>
    </radialGradient>
    <linearGradient id="fur-${key}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${p.fur}"/><stop offset="100%" stop-color="${p.fur2}"/>
    </linearGradient>
    <linearGradient id="face-${key}" x1="0" y1="0" x2="0.7" y2="1">
      <stop offset="0%" stop-color="${p.face}"/><stop offset="100%" stop-color="${p.fur2}"/>
    </linearGradient>
    <linearGradient id="gold-${key}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f6dfa0"/><stop offset="50%" stop-color="${p.accent}"/><stop offset="100%" stop-color="#8c6324"/>
    </linearGradient>
    <pattern id="hatch-${key}" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
      <line x1="0" y1="0" x2="0" y2="7" stroke="${p.rim}" stroke-width="0.6" opacity="0.08"/>
    </pattern>
    <filter id="roughen-${key}">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="7" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="1.1" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>`;
}

function wrap(key, p, inner) {
  return `<svg class="avatar-svg" viewBox="0 0 220 260" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    ${frameDefs(key, p)}
    <rect width="220" height="260" fill="url(#bg-${key})"/>
    <rect width="220" height="260" fill="url(#hatch-${key})"/>
    <circle cx="110" cy="110" r="88" fill="none" stroke="${p.accent}" stroke-width="0.7" opacity="0.22"/>
    <circle cx="110" cy="110" r="78" fill="none" stroke="${p.rim}" stroke-width="0.35" opacity="0.12" stroke-dasharray="2 7"/>
    <g filter="url(#roughen-${key})">${inner}</g>
    <path d="M18 22 h28 M18 22 v28 M202 22 h-28 M202 22 v28 M18 238 h28 M18 238 v-28 M202 238 h-28 M202 238 v-28" fill="none" stroke="${p.accent}" stroke-width="1" opacity="0.55"/>
    <rect x="8" y="8" width="204" height="244" fill="none" stroke="${p.accent}" stroke-width="0.5" opacity="0.22"/>
  </svg>`;
}

function simian(key, p, extra = '') {
  return wrap(key, p, `
    <path d="M110 238 C56 238 39 207 39 176 C39 152 55 143 68 143 L152 143 C169 143 182 154 182 177 C182 209 162 238 110 238 Z" fill="${p.cloth}"/>
    <path d="M68 143 L92 168 L110 158 L128 168 L152 143 Z" fill="${p.accent}" opacity="0.55"/>
    <path d="M82 154 L110 205 L138 154" fill="none" stroke="${p.rim}" stroke-width="2" opacity="0.28"/>
    <ellipse cx="60" cy="106" rx="23" ry="29" fill="url(#fur-${key})" transform="rotate(-12 60 106)"/>
    <ellipse cx="160" cy="106" rx="23" ry="29" fill="url(#fur-${key})" transform="rotate(12 160 106)"/>
    <ellipse cx="60" cy="106" rx="11" ry="16" fill="${p.face}" opacity="0.8"/>
    <ellipse cx="160" cy="106" rx="11" ry="16" fill="${p.face}" opacity="0.8"/>
    <path d="M110 44 C153 44 178 70 178 108 C178 148 151 178 110 178 C69 178 42 148 42 108 C42 70 67 44 110 44 Z" fill="url(#fur-${key})"/>
    <path d="M110 70 C137 70 149 89 149 111 C149 138 132 154 110 154 C88 154 71 138 71 111 C71 89 83 70 110 70 Z" fill="${p.face}" opacity="0.92"/>
    <path d="M71 106 C71 83 85 68 110 68 C135 68 149 83 149 106" fill="none" stroke="${p.accent}" stroke-width="7" opacity="0.95"/>
    <path d="M110 68 l11 10 l-11 11 l-11 -11 Z" fill="url(#gold-${key})"/>
    <path d="M91 110 q10 -9 20 0" fill="none" stroke="#20140e" stroke-width="5" stroke-linecap="round"/>
    <path d="M119 110 q10 -9 20 0" fill="none" stroke="#20140e" stroke-width="5" stroke-linecap="round"/>
    <circle cx="101" cy="115" r="3.5" fill="${p.rim}"/><circle cx="129" cy="115" r="3.5" fill="${p.rim}"/>
    <path d="M99 128 q11 -8 22 0" fill="none" stroke="${p.accent}" stroke-width="3" opacity="0.8"/>
    <path d="M110 126 q-5 11 3 13 q7 2 8 -7" fill="none" stroke="#3a2017" stroke-width="2.4"/>
    <path d="M97 139 q13 9 26 0" fill="none" stroke="#4a251c" stroke-width="3" stroke-linecap="round"/>
    <path d="M62 55 l-8 -21 l19 9 l-3 16 Z" fill="${p.fur2}"/>
    <path d="M158 55 l8 -21 l-19 9 l3 16 Z" fill="${p.fur2}"/>
    ${extra}
  `);
}

export function avatarSvg(key) {
  const aliases = { mallow: 'monkey', bajie: 'pig', hundredEyes: 'spider' };
  key = aliases[key] || key;
  const p = PALETTES[key] || PALETTES.monkey;
  switch (key) {
    case 'monkey':
      return simian(key, p);
    case 'wukong':
      return simian(key, p, `
        <path d="M54 96 q12 -10 24 0" fill="none" stroke="#1b110c" stroke-width="6"/>
        <path d="M142 96 q12 -10 24 0" fill="none" stroke="#1b110c" stroke-width="6"/>
        <path d="M78 173 l32 34 l32 -34" fill="none" stroke="${p.rim}" stroke-width="2" opacity="0.4"/>
      `);
    case 'sixear':
      return simian(key, p, `
        <ellipse cx="44" cy="74" rx="17" ry="24" fill="${p.fur2}" transform="rotate(-20 44 74)"/>
        <ellipse cx="176" cy="74" rx="17" ry="24" fill="${p.fur2}" transform="rotate(20 176 74)"/>
        <ellipse cx="44" cy="74" rx="8" ry="13" fill="${p.face}" opacity="0.5"/>
        <ellipse cx="176" cy="74" rx="8" ry="13" fill="${p.face}" opacity="0.5"/>
        <rect x="126" y="188" width="42" height="55" rx="2" fill="#e4ddca" transform="rotate(8 147 215)"/>
        <rect x="135" y="207" width="24" height="6" fill="#80332b" transform="rotate(8 147 210)"/>
      `);
    case 'keeper':
      return wrap(key, p, `
        <path d="M110 245 C60 245 45 211 46 176 C48 148 76 144 110 144 C144 144 172 148 174 176 C175 211 160 245 110 245 Z" fill="${p.cloth}"/>
        <path d="M75 146 L110 198 L145 146" fill="none" stroke="${p.accent}" stroke-width="3" opacity="0.5"/>
        <path d="M82 134 C82 102 89 65 110 65 C131 65 138 102 138 134 Z" fill="${p.face}"/>
        <path d="M80 92 C80 58 91 38 110 38 C129 38 140 58 140 92 Z" fill="${p.fur2}"/>
        <path d="M76 102 q34 -18 68 0" fill="none" stroke="${p.accent}" stroke-width="7" stroke-linecap="round"/>
        <path d="M80 100 q30 8 60 0" fill="none" stroke="#2c2018" stroke-width="4" opacity="0.6"/>
        <path d="M90 102 q7 -6 14 0 M116 102 q7 -6 14 0" fill="none" stroke="#20140f" stroke-width="4"/>
        <path d="M89 96 q8 -8 17 -1 M114 95 q8 -7 17 1" fill="none" stroke="#d9d0bd" stroke-width="3" stroke-linecap="round"/>
        <path d="M110 112 q-4 12 4 13" fill="none" stroke="#6a4932" stroke-width="2"/>
        <path d="M100 127 q10 7 20 0" fill="none" stroke="#4a2e20" stroke-width="3"/>
        <path d="M88 137 C87 170 101 193 110 214 C119 193 133 170 132 137 C120 146 100 146 88 137 Z" fill="#e6e0d1" opacity="0.92"/>
        <path d="M97 154 q13 8 26 0 M99 170 q11 7 22 0 M103 185 q7 5 14 0" fill="none" stroke="#b8b29f" stroke-width="1.2"/>
        <path d="M66 157 l-8 66 M154 157 l8 66" stroke="${p.fur2}" stroke-width="2" opacity="0.4"/>
      `);
    case 'pig':
      return wrap(key, p, `
        <path d="M110 246 C52 246 36 214 38 178 C40 151 64 144 110 144 C156 144 180 151 182 178 C184 214 168 246 110 246 Z" fill="${p.cloth}"/>
        <path d="M70 151 L110 200 L150 151" fill="none" stroke="${p.accent}" stroke-width="3" opacity="0.5"/>
        <path d="M110 42 C151 42 174 72 174 112 C174 153 150 180 110 180 C70 180 46 153 46 112 C46 72 69 42 110 42 Z" fill="url(#fur-${key})"/>
        <path d="M53 74 q-19 -42 11 -44 q17 0 21 27 Z" fill="${p.fur2}"/>
        <path d="M167 74 q19 -42 -11 -44 q-17 0 -21 27 Z" fill="${p.fur2}"/>
        <ellipse cx="110" cy="126" rx="39" ry="31" fill="${p.face}"/>
        <ellipse cx="98" cy="124" rx="8" ry="11" fill="${p.fur2}"/>
        <ellipse cx="122" cy="124" rx="8" ry="11" fill="${p.fur2}"/>
        <path d="M82 96 q11 -9 22 -1 M116 95 q11 -8 22 1" fill="none" stroke="#3a1e24" stroke-width="4" stroke-linecap="round"/>
        <circle cx="92" cy="104" r="4" fill="#271419"/><circle cx="128" cy="104" r="4" fill="#271419"/>
        <path d="M96 146 q14 -8 28 0" fill="none" stroke="#7e3c4a" stroke-width="3"/>
        <path d="M60 170 q50 22 100 0" fill="none" stroke="${p.accent}" stroke-width="4" opacity="0.5"/>
        <rect x="130" y="172" width="44" height="54" rx="3" fill="#e2d9c4" transform="rotate(6 152 199)"/>
        <rect x="139" y="190" width="26" height="6" fill="#9c3b31" transform="rotate(6 152 195)"/>
      `);
    case 'bear':
      return wrap(key, p, `
        <path d="M110 246 C52 246 35 211 37 177 C39 150 65 142 110 142 C155 142 181 150 183 177 C185 211 168 246 110 246 Z" fill="${p.cloth}"/>
        <path d="M80 149 L110 224 L140 149" fill="#d9d2c1"/>
        <path d="M104 154 L110 222 L116 154 Z" fill="#8d3028"/>
        <path d="M110 46 C156 46 182 77 182 117 C182 157 155 182 110 182 C65 182 38 157 38 117 C38 77 64 46 110 46 Z" fill="url(#fur-${key})"/>
        <circle cx="48" cy="69" r="27" fill="${p.fur2}"/><circle cx="172" cy="69" r="27" fill="${p.fur2}"/>
        <circle cx="48" cy="69" r="12" fill="#5b4230" opacity="0.7"/><circle cx="172" cy="69" r="12" fill="#5b4230" opacity="0.7"/>
        <ellipse cx="110" cy="134" rx="38" ry="29" fill="${p.face}"/>
        <ellipse cx="110" cy="122" rx="15" ry="11" fill="#201713"/>
        <path d="M64 98 h43 q7 0 7 8 v13 q0 7 -7 7 h-43 q-7 0 -7 -7 v-13 q0 -8 7 -8 Z" fill="#111211" stroke="#5a5b56" stroke-width="1.5"/>
        <path d="M113 98 h43 q7 0 7 8 v13 q0 7 -7 7 h-43 q-7 0 -7 -7 v-13 q0 -8 7 -8 Z" fill="#111211" stroke="#5a5b56" stroke-width="1.5"/>
        <rect x="68" y="104" width="35" height="9" fill="#54777e" opacity="0.6"/>
        <rect x="117" y="104" width="35" height="9" fill="#54777e" opacity="0.6"/>
        <path d="M78 150 q32 20 64 0" fill="none" stroke="#2e201a" stroke-width="3"/>
        <path d="M75 169 L110 224 L145 169" fill="none" stroke="${p.accent}" stroke-width="3" opacity="0.5"/>
        <rect x="127" y="188" width="40" height="50" rx="2" fill="#e5ddca" transform="rotate(7 147 213)"/>
        <rect x="136" y="205" width="22" height="5" fill="#7c302a" transform="rotate(7 147 208)"/>
      `);
    case 'rat':
      return wrap(key, p, `
        <path d="M110 246 C54 246 38 212 40 179 C42 152 66 144 110 144 C154 144 178 152 180 179 C182 212 166 246 110 246 Z" fill="${p.cloth}"/>
        <path d="M42 192 q68 30 136 0 l-10 50 h-116 Z" fill="${p.accent}" opacity="0.5"/>
        <path d="M110 54 C149 54 170 82 170 116 C170 151 149 176 110 176 C71 176 50 151 50 116 C50 82 71 54 110 54 Z" fill="url(#fur-${key})"/>
        <path d="M52 78 q-26 -38 8 -50 q24 0 23 40 Z" fill="${p.fur2}"/>
        <path d="M168 78 q26 -38 -8 -50 q-24 0 -23 40 Z" fill="${p.fur2}"/>
        <path d="M110 164 q-8 18 6 20 q12 2 14 -12" fill="none" stroke="#5f4d34" stroke-width="4"/>
        <path d="M65 101 q45 -17 90 0" fill="none" stroke="#d1a441" stroke-width="11" stroke-linecap="round"/>
        <path d="M67 99 h86 v18 h-86 Z" fill="#202321" opacity="0.9"/>
        <rect x="74" y="102" width="32" height="10" fill="#7f9c8a" opacity="0.5"/>
        <rect x="114" y="102" width="32" height="10" fill="#7f9c8a" opacity="0.5"/>
        <path d="M73 86 q37 -12 74 0" fill="none" stroke="${p.accent}" stroke-width="4" opacity="0.6"/>
        <path d="M82 134 q10 -7 20 0 M118 134 q10 -7 20 0" fill="none" stroke="#3a2c19" stroke-width="3"/>
        <ellipse cx="110" cy="145" rx="13" ry="9" fill="#5d4b34"/>
        <path d="M99 154 q11 8 22 0" fill="none" stroke="#4a3522" stroke-width="2.5"/>
        <path d="M150 176 l38 22" stroke="${p.accent}" stroke-width="5" opacity="0.7"/>
      `);
    case 'yellowbrow':
      return wrap(key, p, `
        <path d="M110 246 C50 246 34 211 36 177 C38 150 64 141 110 141 C156 141 182 150 184 177 C186 211 170 246 110 246 Z" fill="${p.cloth}"/>
        <path d="M74 148 L110 230 L146 148" fill="none" stroke="${p.accent}" stroke-width="5" opacity="0.55"/>
        <circle cx="110" cy="108" r="69" fill="url(#fur-${key})"/>
        <circle cx="110" cy="108" r="69" fill="none" stroke="${p.accent}" stroke-width="2" opacity="0.5"/>
        <path d="M56 83 C67 49 90 38 110 38 C130 38 153 49 164 83 C140 65 80 65 56 83 Z" fill="${p.fur2}" opacity="0.5"/>
        <path d="M79 104 q12 -9 24 -1 M117 103 q12 -8 24 1" fill="none" stroke="#3a2b18" stroke-width="4" stroke-linecap="round"/>
        <path d="M83 116 q27 16 54 0" fill="none" stroke="#5d3d25" stroke-width="4" stroke-linecap="round"/>
        <path d="M84 145 q26 20 52 0" fill="none" stroke="#6d3d29" stroke-width="3"/>
        <path d="M90 151 q20 12 40 0" fill="none" stroke="#d9b681" stroke-width="5" opacity="0.5"/>
        <circle cx="50" cy="128" r="16" fill="none" stroke="url(#gold-${key})" stroke-width="2.4"/>
        <circle cx="170" cy="128" r="16" fill="none" stroke="url(#gold-${key})" stroke-width="2.4"/>
        <path d="M98 172 l12 22 l12 -22" fill="url(#gold-${key})"/>
      `);
    case 'spider':
      return wrap(key, p, `
        <path d="M110 246 C50 246 34 210 36 176 C38 148 66 141 110 141 C154 141 182 148 184 176 C186 210 170 246 110 246 Z" fill="${p.cloth}"/>
        <path d="M110 47 C151 47 174 76 174 112 C174 151 149 178 110 178 C71 178 46 151 46 112 C46 76 69 47 110 47 Z" fill="url(#fur-${key})"/>
        <path d="M72 89 q38 -27 76 0 q5 24 -10 40 q-28 22 -56 0 q-15 -16 -10 -40 Z" fill="${p.face}" opacity="0.92"/>
        <g fill="${p.rim}">
          <circle cx="84" cy="105" r="6"/><circle cx="110" cy="102" r="6"/><circle cx="136" cy="105" r="6"/>
          <circle cx="94" cy="119" r="4"/><circle cx="126" cy="119" r="4"/>
        </g>
        <g fill="#29112e">
          <circle cx="84" cy="105" r="2.4"/><circle cx="110" cy="102" r="2.4"/><circle cx="136" cy="105" r="2.4"/>
          <circle cx="94" cy="119" r="1.6"/><circle cx="126" cy="119" r="1.6"/>
        </g>
        <path d="M87 143 q23 14 46 0" fill="none" stroke="#642644" stroke-width="3"/>
        <path d="M53 63 l-16 -25 M167 63 l16 -25" stroke="${p.fur2}" stroke-width="4" stroke-linecap="round"/>
        <circle cx="110" cy="221" r="46" fill="none" stroke="${p.accent}" stroke-width="4" opacity="0.35"/>
        <circle cx="110" cy="221" r="52" fill="none" stroke="${p.rim}" stroke-width="1" opacity="0.3" stroke-dasharray="3 6"/>
        <rect x="132" y="180" width="38" height="50" rx="3" fill="#e1d7c6" transform="rotate(6 151 205)"/>
        <rect x="140" y="197" width="22" height="5" fill="#8c3458" transform="rotate(6 151 200)"/>
      `);
    case 'redboy':
      return wrap(key, p, `
        <path d="M110 246 C55 246 40 210 42 178 C44 152 68 143 110 143 C152 143 176 152 178 178 C180 210 165 246 110 246 Z" fill="${p.cloth}"/>
        <path d="M110 60 C144 60 164 85 164 116 C164 147 143 169 110 169 C77 169 56 147 56 116 C56 85 76 60 110 60 Z" fill="${p.face}"/>
        <path d="M110 25 l12 26 l23 -9 l-10 25 l26 5 l-25 17 l21 18 l-31 1 l7 29 l-23 -14 l-13 26 l-10 -27 l-25 10 l11 -26 l-26 -4 l25 -18 l-20 -19 l31 1 Z" fill="#f2a02d" opacity="0.9"/>
        <path d="M110 43 l7 20 l17 -9 l-8 21 l18 5 l-18 13 l13 14 l-21 -1 l3 21 l-13 -13 l-10 19 l-5 -21 l-18 8 l8 -20 l-19 -3 l17 -13 l-14 -14 l21 1 Z" fill="#e84b2c" opacity="0.85"/>
        <circle cx="89" cy="109" r="5.5" fill="#fff1d8"/><circle cx="131" cy="109" r="5.5" fill="#fff1d8"/>
        <circle cx="90" cy="110" r="2.4" fill="#2b1410"/><circle cx="130" cy="110" r="2.4" fill="#2b1410"/>
        <path d="M80 96 q10 -9 21 -2 M119 94 q11 -7 21 2" fill="none" stroke="#6c2e20" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M97 133 q13 -8 26 0" fill="none" stroke="#783022" stroke-width="3"/>
        <path d="M70 169 q40 20 80 0" fill="none" stroke="${p.accent}" stroke-width="3" opacity="0.55"/>
        <path d="M140 175 l44 -22" stroke="#c7a477" stroke-width="4"/>
        <rect x="136" y="184" width="34" height="48" rx="3" fill="#d8ccb5" transform="rotate(8 153 208)" opacity="0.8"/>
      `);
    case 'rock':
      return wrap(key, p, `
        <path d="M110 246 C48 246 31 208 35 171 C39 144 69 137 110 137 C151 137 181 144 185 171 C189 208 172 246 110 246 Z" fill="${p.cloth}"/>
        <path d="M42 92 L70 45 L105 62 L138 36 L174 82 L161 145 L128 169 L81 160 L48 140 Z" fill="url(#fur-${key})"/>
        <path d="M42 92 L70 45 L105 62 L87 105 Z" fill="${p.fur2}" opacity="0.7"/>
        <path d="M138 36 L174 82 L161 145 L130 130 Z" fill="#575248" opacity="0.65"/>
        <path d="M62 116 L92 102 L96 117 L67 133 Z" fill="#e9a744"/>
        <path d="M130 103 L158 116 L153 133 L126 118 Z" fill="#e9a744"/>
        <path d="M77 143 L110 155 L143 143" fill="none" stroke="#3d3932" stroke-width="4"/>
        <path d="M70 45 L110 13 L151 47 L138 57 L110 35 L82 57 Z" fill="#242f2a"/>
        <path d="M86 13 h48 l-6 26 h-36 Z" fill="#2d3a33"/>
        <rect x="125" y="174" width="39" height="50" rx="2" fill="#d8d0bd" transform="rotate(6 144 199)"/>
      `);
    default:
      return wrap('monkey', PALETTES.monkey, `<text x="110" y="145" font-size="90" text-anchor="middle" fill="#d9a94e">?</text>`);
  }
}

export function characterPortrait(key) {
  return `<div class="portrait-art">${avatarSvg(key)}</div>`;
}
