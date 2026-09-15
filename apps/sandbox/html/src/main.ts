// Consumers import exactly one stylesheet (CLAUDE.md §4) …
import '@aranghat/tokens/aranghat.css';
// … and register only the elements they use.
import { defineCustomElement as defineButton } from '@aranghat/base/button';
import { defineCustomElement as defineHello } from '@aranghat/base/hello';
import { defineCustomElement as defineIcon } from '@aranghat/base/icon';
import { defineCustomElement as defineHelloOverlay } from '@aranghat/modals/hello-overlay';
import { defineCustomElement as defineLabel } from '@aranghat/base/label';
import './sandbox.css';

defineButton();
defineHello();
defineIcon();
defineHelloOverlay();
defineLabel();

// Every sample is a real file under src/samples/<component>/<example>.html — the
// docs site embeds these files verbatim, and the smoke test asserts each renders.
const samples = import.meta.glob('./samples/**/*.html', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const app = document.getElementById('app')!;
for (const [path, html] of Object.entries(samples).sort()) {
  const id = path.replace('./samples/', '').replace(/\.html$/, '');
  const section = document.createElement('section');
  section.dataset.sample = id;
  section.innerHTML = `<h2>${id}</h2>${html}`;
  app.append(section);
}

// theme toggle for manual checks
document.addEventListener('keydown', (e) => {
  if (e.key === 'd' && (e.metaKey || e.ctrlKey)) {
    e.preventDefault();
    const root = document.documentElement;
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  }
});
