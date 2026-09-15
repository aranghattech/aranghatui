// Registers the built custom elements for spec tests (build runs first via Turborepo).
import * as components from './dist/components/index.js';

for (const [k, fn] of Object.entries(components)) if (k.startsWith('defineCustomElement') && typeof fn === 'function') (fn as () => void)();
