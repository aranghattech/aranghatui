import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

/** Loads every tier's Stencil docs.json (CLAUDE.md §10.6: API reference is generated, never typed). */
export default {
  watch: ['../../../packages/*/dist/docs.json'],
  load() {
    const out: Record<string, any> = {};
    for (const tier of ['base', 'components', 'navigation', 'modals', 'widgets']) {
      const p = resolve(__dirname, `../../../packages/${tier}/dist/docs.json`);
      if (!existsSync(p)) continue;
      for (const c of JSON.parse(readFileSync(p, 'utf8')).components) out[c.tag] = { tier, ...c };
    }
    return out;
  },
};
