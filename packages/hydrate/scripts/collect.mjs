#!/usr/bin/env node
// Collects every tier's component sources into src-all/<tier>/ for the single hydrate build
// (ADR-0023). Tests, stories and the tiers' own entry files stay behind.
import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { TIERS } from '@artui/stencil-config/models';

const here = resolve(import.meta.dirname, '..');
const out = join(here, 'src-all');
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
const skip = /\.(spec|e2e|stories|test)\.tsx?$|(^|\/)components\.d\.ts$/;
for (const tier of TIERS) {
  cpSync(join(here, '..', tier, 'src'), join(out, tier), {
    recursive: true,
    filter: (src) => !skip.test(src) && !/\/src\/index\.ts$/.test(src),
  });
}
console.log(`✔ src-all: ${TIERS.join(', ')}`);
