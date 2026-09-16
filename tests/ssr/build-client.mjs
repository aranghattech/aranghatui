#!/usr/bin/env node
// Bundles tests/ssr/client.ts with the `artui-ssr` resolve condition into ssr/.pages/client.js and
// copies the token sheet next to it. Runs on the host (`pnpm build`): esbuild is native, the
// Playwright container only serves the result.
import { build } from 'esbuild';
import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, '.pages');
mkdirSync(out, { recursive: true });
await build({
  entryPoints: [join(here, 'client.ts')],
  bundle: true,
  format: 'esm',
  target: 'es2022',
  conditions: ['artui-ssr'],
  outfile: join(out, 'client.js'),
  logLevel: 'warning',
});
copyFileSync(createRequire(import.meta.url).resolve('@aranghat/tokens/aranghat.css'), join(out, 'aranghat.css'));
// Playwright polls the server root before the tests start; the pages themselves are written per test.
writeFileSync(join(out, 'index.html'), '<!doctype html><title>artui SSR pages</title>');
console.log('✔ tests/ssr/.pages/client.js (artui-ssr)');
