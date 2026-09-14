#!/usr/bin/env node
// ng-packagr writes the real manifest to dist/package.json. Mirror its entry
// fields onto the workspace package root (prefixed with ./dist/) so workspace
// consumers and the Angular compiler resolve the built FESM + types.
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const dir = resolve(process.argv[2] ?? '.');
const root = JSON.parse(readFileSync(resolve(dir, 'package.json'), 'utf8'));
const built = JSON.parse(readFileSync(resolve(dir, 'dist', 'package.json'), 'utf8'));
const prefix = (v) => (typeof v === 'string' ? v.replace(/^\.\//, './dist/') : Object.fromEntries(Object.entries(v).map(([k, x]) => [k, prefix(x)])));
for (const k of ['module', 'typings', 'types', 'exports', 'sideEffects']) if (built[k] !== undefined) root[k] = k === 'sideEffects' ? built[k] : prefix(built[k]);
root.exports = { ...root.exports, './package.json': './package.json' };
writeFileSync(resolve(dir, 'package.json'), JSON.stringify(root, null, 2) + '\n');
console.log(`✔ ${root.name}: exports mirrored from dist/package.json`);
