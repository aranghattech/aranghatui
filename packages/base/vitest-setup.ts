// Registers the built custom elements for spec tests (build runs first via Turborepo).
import * as base from './dist/components/index.js';

for (const [k, fn] of Object.entries(base)) if (k.startsWith('defineCustomElement') && typeof fn === 'function') (fn as () => void)();
