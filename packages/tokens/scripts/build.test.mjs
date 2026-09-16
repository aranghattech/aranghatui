import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const css = readFileSync(join(root, 'dist/css/aranghat.css'), 'utf8');

test('emits light root and guarded dark blocks', () => {
  assert.match(css, /:root \{/);
  assert.match(css, /\[data-theme="dark"\] \{/);
  assert.match(css, /:root:not\(\[data-theme="light"\]\)/);
});
test('semantic tokens reference primitives (runtime theming)', () => {
  assert.match(css, /--art-color-bg-canvas: var\(--art-color-white\)/);
  assert.match(css, /--art-radius-lg: var\(--art-radius\)/);
});
test('tailwind mapping contains no literal colours', () => {
  const tw = readFileSync(join(root, 'dist/css/tailwind.css'), 'utf8');
  assert.doesNotMatch(tw, /#[0-9a-f]{3,8}\b/i);
  assert.match(tw, /--color-primary: var\(--art-color-primary-solid\)/);
});

test('figma: Tokens Studio sets keep references and DTCG types', () => {
  const read = (f) => JSON.parse(readFileSync(join(root, 'dist/figma', f), 'utf8'));
  const core = read('core.json'), light = read('light.json'), dark = read('dark.json');
  assert.equal(core.color.white.$type, 'color');
  assert.match(String(core.color.white.$value), /^#[0-9a-f]{6}$/i);
  assert.equal(light.color.bg.canvas.$value, '{color.white}');
  assert.equal(light.color.bg.canvas.$type, 'color');
  assert.ok(String(dark.color.bg.canvas.$value).startsWith('{color.'));
  assert.equal(core.space['4'].$value, '1rem');
  assert.deepEqual(read('$metadata.json').tokenSetOrder, ['core', 'light', 'dark']);
  assert.deepEqual(read('$themes.json').map((t) => t.name), ['Light', 'Dark']);
});
