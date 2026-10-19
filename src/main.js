import '@fontsource/noto-serif-sc/400.css';
import '@fontsource/noto-serif-sc/700.css';
import '@fontsource/noto-serif-sc/900.css';
import '@fontsource/ma-shan-zheng/400.css';
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/600.css';

import './styles/base.css';
import './styles/menu.css';
import './styles/game.css';

import { App, showFatalError } from './App.js';

function boot() {
  try {
    const app = new App();
    window.__HOUJI__ = app;
  } catch (error) {
    console.error(error);
    showFatalError(String(error?.message || error));
    const bootEl = document.getElementById('boot');
    if (bootEl) bootEl.classList.add('hidden');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
