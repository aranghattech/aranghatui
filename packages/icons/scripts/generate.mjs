#!/usr/bin/env node
// Generates one module per icon from the lucide subset in icons.json.
// Each module exports an `IconData` (viewBox + path children) consumed by <art-icon>.
import { mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as lucide from 'lucide';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const names = JSON.parse(readFileSync(join(root, 'icons.json'), 'utf8'));
const out = join(root, 'src', 'icons');
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

const toPascal = (s) => s.split('-').map((p) => p[0].toUpperCase() + p.slice(1)).join('');
const toCamel = (s) => { const p = toPascal(s); return p[0].toLowerCase() + p.slice(1); };

const indexLines = [`export type { IconData } from './types.js';`];
for (const name of names) {
  const exportName = toPascal(name);
  const node = lucide[exportName];
  if (!node) { console.error(`✖ lucide has no icon "${name}" (${exportName})`); process.exit(1); }
  // lucide IconNode: Array<[tag, attrs]>
  const children = node.map(([tag, attrs]) => [tag, attrs]);
  const src = `import type { IconData } from '../types.js';\n\n/** lucide "${name}" */\nexport const ${toCamel(name)}: IconData = ${JSON.stringify({ name, children }, null, 0)};\nexport default ${toCamel(name)};\n`;
  writeFileSync(join(out, `${name}.ts`), src);
  indexLines.push(`export { ${toCamel(name)} } from './icons/${name}.js';`);
}
writeFileSync(join(root, 'src', 'types.ts'), `export interface IconData {\n  /** lucide icon name */\n  name: string;\n  /** SVG child elements: [tag, attributes] rendered inside a 24×24 viewBox with stroke=currentColor */\n  children: Array<[string, Record<string, string | number>]>;\n}\n`);
writeFileSync(join(root, 'src', 'index.ts'), indexLines.join('\n') + '\n');
console.log(`✔ generated ${names.length} icons`);
