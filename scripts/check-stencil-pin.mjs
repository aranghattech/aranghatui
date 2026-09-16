#!/usr/bin/env node
// ADR-0002: every tier must pin the *same exact* @stencil/core version so the
// inlined runtimes behave identically across tiers.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const tiers = ['base', 'components', 'navigation', 'modals', 'widgets', 'extended', 'hydrate']; // hydrate: the SSR app (ADR-0023)
const versions = new Map();
for (const tier of tiers) {
  const p = join('packages', tier, 'package.json');
  if (!existsSync(p)) continue;
  const pkg = JSON.parse(readFileSync(p, 'utf8'));
  if (pkg.dependencies?.['@stencil/core']) {
    console.error(`✖ ${pkg.name}: @stencil/core is inlined per tier and must be a devDependency, not a dependency (ADR-0002)`);
    process.exit(1);
  }
  const v = pkg.devDependencies?.['@stencil/core'];
  if (!v) {
    console.error(`✖ ${pkg.name}: @stencil/core must be listed under "devDependencies" (ADR-0002)`);
    process.exit(1);
  }
  if (!/^\d+\.\d+\.\d+$/.test(v)) {
    console.error(`✖ ${pkg.name}: @stencil/core must be an exact version, got "${v}"`);
    process.exit(1);
  }
  versions.set(pkg.name, v);
}
const distinct = new Set(versions.values());
if (distinct.size > 1) {
  console.error('✖ @stencil/core versions differ across tiers:', Object.fromEntries(versions));
  process.exit(1);
}
// Lockstep: every publishable package must share one version.
const pkgVersions = new Set();
const dirs = ['packages', 'packages/react', 'packages/vue', 'packages/angular'];
for (const d of dirs) {
  if (!existsSync(d)) continue;
  for (const name of readdirSync(d)) {
    const p = join(d, name, 'package.json');
    if (!existsSync(p)) continue;
    const pkg = JSON.parse(readFileSync(p, 'utf8'));
    if (pkg.name?.startsWith('@aranghat/')) pkgVersions.add(pkg.version);
  }
}
if (pkgVersions.size > 1) {
  console.error('✖ @aranghat/* packages are not in lockstep:', [...pkgVersions]);
  process.exit(1);
}
console.log(`✔ @stencil/core pinned at ${[...distinct][0] ?? 'n/a'} across ${versions.size} tiers; ${pkgVersions.size ? `packages at ${[...pkgVersions][0]}` : 'no packages yet'}`);
