import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

/** Every token from @aranghat/tokens (flat export) — the Tokens page is generated from this, never typed. */
export default {
  watch: ['../../../packages/tokens/dist/json/tokens.flat.json'],
  load() {
    return JSON.parse(readFileSync(resolve(__dirname, '../../../packages/tokens/dist/json/tokens.flat.json'), 'utf8')) as Array<{
      name: string; path: string; type: string; value: string | number; original: string; tier: 'primitive' | 'semantic'; description: string;
    }>;
  },
};
