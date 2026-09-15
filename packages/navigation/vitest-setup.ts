// Registers the built custom elements for spec tests (build runs first via Turborepo).
import * as components from './dist/components/index.js';

for (const [k, fn] of Object.entries(components)) if (k.startsWith('defineCustomElement') && typeof fn === 'function') (fn as () => void)();

// jsdom has no matchMedia; Embla and the reduced-motion checks call it.
if (typeof window !== 'undefined' && !window.matchMedia) {
  (window as any).matchMedia = (media: string) => ({ matches: false, media, onchange: null, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {}, dispatchEvent: () => false });
}
// jsdom has no observers; Embla uses both.
for (const name of ['IntersectionObserver', 'ResizeObserver']) {
  if (typeof (globalThis as any)[name] === 'undefined') (globalThis as any)[name] = class { observe() {} unobserve() {} disconnect() {} takeRecords() { return []; } };
}
