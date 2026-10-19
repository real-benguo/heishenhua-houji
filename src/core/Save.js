const SAVE_KEY = 'houji.save.v2';
const SETTINGS_KEY = 'houji.settings.v2';

export const defaultSettings = {
  master: 0.8,
  music: 0.72,
  sfx: 0.86,
  quality: 'auto',
  shake: true,
  subtitles: true,
  typewriter: true,
  cameraSensitivity: 1,
};

export const defaultSave = {
  version: 2,
  started: false,
  chapter: 0,
  unlocked: 0,
  difficulty: 'normal',
  relics: [],
  coins: 0,
  upgrades: { body: 0, staff: 0, gourd: 0 },
  seenCharacters: ['mallow', 'keeper'],
  endings: [],
  deaths: 0,
  kills: 0,
  playTime: 0,
  completed: false,
  introSeen: false,
  tutorialSeen: false,
  updatedAt: 0,
};

function safeParse(raw) {
  try {
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function loadSave() {
  const raw = safeParse(localStorage.getItem(SAVE_KEY));
  if (!raw) return structuredClone(defaultSave);
  return {
    ...structuredClone(defaultSave),
    ...raw,
    upgrades: { ...defaultSave.upgrades, ...(raw.upgrades || {}) },
    relics: Array.isArray(raw.relics) ? raw.relics : [],
    seenCharacters: Array.isArray(raw.seenCharacters) ? raw.seenCharacters : ['mallow', 'keeper'],
    endings: Array.isArray(raw.endings) ? raw.endings : [],
  };
}

export function writeSave(state) {
  const payload = { ...state, updatedAt: Date.now() };
  state.updatedAt = payload.updatedAt;
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(payload));
  } catch {
    /* 猴子把存储吃掉了 */
  }
  return payload;
}

export function resetSave() {
  const fresh = structuredClone(defaultSave);
  writeSave(fresh);
  return fresh;
}

export function loadSettings() {
  const raw = safeParse(localStorage.getItem(SETTINGS_KEY));
  return { ...defaultSettings, ...(raw || {}) };
}

export function writeSettings(settings) {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch {
    /* ignore */
  }
}

export function clearAll() {
  localStorage.removeItem(SAVE_KEY);
  localStorage.removeItem(SETTINGS_KEY);
}
