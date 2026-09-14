#!/usr/bin/env node
/**
 * Generates .size-limit.json from tooling/catalog.json + CLAUDE.md §7 budgets.
 * - per component: esbuild bundle of `defineCustomElement`, runtime chunk + lower tiers external
 * - per tier: runtime chunk (file) and the whole tier imported
 * - reference apps: built sandbox JS + CSS (proxy until the widgets tier exists)
 */
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const repo = resolve(import.meta.dirname, '..');
const catalog = JSON.parse(readFileSync(join(repo, 'tooling/catalog.json'), 'utf8'));
const TIER_BUDGET_KB = { base: 45, components: 90, navigation: 45, modals: 30, widgets: 60 };
const RUNTIME_BUDGET_KB = 20;
const entries = [];
const externals = ['@aranghat/*', '@floating-ui/dom', 'embla-carousel', './index*.js'];

for (const [tier, def] of Object.entries(catalog.tiers)) {
  const distDir = join(repo, 'packages', tier, 'dist', 'components');
  if (!existsSync(distDir)) continue;
  const chunks = readdirSync(distDir).filter((f) => /^index\d+\.js$/.test(f));
  for (const chunk of chunks) {
    entries.push({ name: `${tier}: runtime chunk (${chunk})`, path: `packages/${tier}/dist/components/${chunk}`, limit: `${RUNTIME_BUDGET_KB} kB`, gzip: true });
  }
  // A tier with a single component has no shared chunk: Stencil inlines the runtime
  // into that component's file, so its budget temporarily includes the runtime budget.
  const runtimeInlined = chunks.length === 0;
  for (const c of def.components) {
    if (c.recipe || c.imperative) continue;
    const file = `packages/${tier}/dist/components/${c.tag}.js`;
    if (!existsSync(join(repo, file))) continue;
    const budget = (c.budgetKb ?? def.budgetKb) + (runtimeInlined ? RUNTIME_BUDGET_KB : 0);
    entries.push({ name: `${tier}/${c.tag}${runtimeInlined ? ' (+ inlined runtime: single-component tier)' : ''}`, path: file, import: '{ defineCustomElement }', ignore: externals, limit: `${budget} kB`, gzip: true });
  }
  entries.push({ name: `${tier}: whole tier`, path: `packages/${tier}/dist/components/index.js`, import: '*', ignore: ['@aranghat/*', '@floating-ui/dom', 'embla-carousel'], limit: `${TIER_BUDGET_KB[tier]} kB`, gzip: true });
}
// Primitives (all modules, including @floating-ui/dom): runtime + primitives ≤ 20 kB → primitives ≤ 13 kB.
if (existsSync(join(repo, 'packages/primitives/dist/index.js'))) {
  entries.push({ name: 'primitives: all modules (incl. @floating-ui/dom)', path: 'packages/primitives/dist/index.js', import: '*', limit: '13 kB', gzip: true });
}
// Reference apps (CLAUDE.md §7): real entry modules under tooling/size import what each page needs.
for (const [name, file, limit] of [['landing page (tokens + runtime + button + icon)', 'landing.mjs', '15 kB']]) {
  if (existsSync(join(repo, 'tooling/size', file))) entries.push({ name: `reference: ${name}`, path: `tooling/size/${file}`, limit, gzip: true });
}
writeFileSync(join(repo, '.size-limit.json'), JSON.stringify(entries, null, 2) + '\n');
console.log(`✔ .size-limit.json: ${entries.length} entries`);
