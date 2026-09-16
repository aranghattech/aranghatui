#!/usr/bin/env node
/**
 * Phase 0 exit criterion: installing `@aranghat/base` alone pulls in nothing from
 * `@aranghat/modals` (CLAUDE.md §13). Packs every publishable tier and installs
 * base into a scratch project with npm (a stranger's package manager), then
 * inspects the resulting node_modules.
 */
import { execSync } from 'node:child_process';
import { mkdtempSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const repo = resolve(import.meta.dirname, '..');
const run = (cmd, cwd = repo) => execSync(cmd, { cwd, stdio: 'pipe', encoding: 'utf8' });
const tiers = ['tokens', 'primitives', 'icons', 'base', 'components', 'navigation', 'modals', 'widgets', 'hydrate', 'ui', 'skills'];
const scratch = mkdtempSync(join(tmpdir(), 'artui-isolation-'));

const tarballs = {};
for (const t of tiers) {
  const out = run(`pnpm pack --pack-destination ${scratch}`, join(repo, 'packages', t));
  const file = out.trim().split('\n').pop();
  tarballs[t] = file.startsWith('/') ? file : join(scratch, file);
}

const proj = join(scratch, 'consumer');
run(`mkdir -p ${proj}`);
writeFileSync(join(proj, 'package.json'), JSON.stringify({ name: 'consumer', private: true, dependencies: {
  '@aranghat/base': tarballs.base, '@aranghat/tokens': tarballs.tokens, '@aranghat/primitives': tarballs.primitives, '@aranghat/icons': tarballs.icons,
} }, null, 2));
run('npm install --no-audit --no-fund --loglevel=error', proj);

const installed = readdirSync(join(proj, 'node_modules', '@aranghat'));
const leaked = installed.filter((n) => !['base', 'tokens', 'primitives', 'icons'].includes(n));
if (leaked.length) { console.error(`✖ installing base pulled in: ${leaked.join(', ')}`); process.exit(1); }
if (existsSync(join(proj, 'node_modules', '@stencil'))) { console.error('✖ @stencil/* leaked into a consumer install — the runtime is inlined per tier (ADR-0002)'); process.exit(1); }
console.log(`✔ base-only install contains only: @aranghat/{${installed.join(',')}} (no @stencil/*, no modals)`);
