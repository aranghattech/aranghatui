#!/usr/bin/env node
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve, relative } from 'node:path';

const repo = resolve(import.meta.dirname, '../..');
const tiers = ['base', 'components', 'navigation', 'modals', 'widgets'];
const SKIP = /\.(spec|e2e|test|stories)\.(tsx?|mjs)$|readme\.md$|components\.d\.ts$/;

const rules = [
  { id: 'no-color-literal', re: /(#[0-9a-fA-F]{3,8}\b|\b(?:rgba?|hsla?|oklch|oklab|lab|lch|color)\()/g, files: /\.(tsx|ts|css)$/, why: 'colour literal — use a semantic token' },
  { id: 'no-length-literal', re: /(?<![\w.-])(?!0(?:px|rem|em)\b)\d*\.?\d+(?:px|rem|em|vh|vw|ch)\b/g, files: /\.(css)$/, why: 'length literal — use a token or a recipe' },
  { id: 'no-important', re: /!important/g, files: /\.(tsx|ts|css)$/, why: '!important is forbidden' },
  { id: 'no-arbitrary-tailwind', re: /(?<![\w-])[a-z-]+-\[[^\]]+\]/g, files: /\.(tsx|ts)$/, why: 'arbitrary Tailwind value — add a token / recipe instead' },
  { id: 'no-arbitrary-css-var', re: /-\((--(?!art-)[^)]+)\)/g, files: /\.(tsx|ts)$/, why: 'CSS-variable shorthand must reference an --art-* token' },
  { id: 'no-local-token', re: /--art-[a-z0-9-]+\s*:/g, files: /\.(css|tsx|ts)$/, why: 'tokens are born only in packages/tokens' },
  { id: 'no-raw-define', re: /customElements\.define\(/g, files: /\.(tsx|ts)$/, why: 'use defineIdempotent from @aranghat/primitives/define' },
  { id: 'no-camel-event', re: /eventName:\s*['"][a-z]+[A-Z][A-Za-z]*['"]/g, files: /\.(tsx|ts)$/, why: 'custom event names are kebab-case (ADR-0001)' },
];

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { if (name !== 'node_modules') yield* walk(p); }
    else yield p;
  }
}

let errors = 0, files = 0;
for (const tier of tiers) {
  const src = join(repo, 'packages', tier, 'src');
  try { statSync(src); } catch { continue; }
  for (const file of walk(src)) {
    if (SKIP.test(file)) continue;
    const text = readFileSync(file, 'utf8');
    files += 1;
    for (const rule of rules) {
      if (!rule.files.test(file)) continue;
      // allow explicit, reviewed exceptions: `/* token-lint-disable <id> */` on the same line
      const lines = text.split('\n');
      lines.forEach((line, i) => {
        if (line.includes(`token-lint-disable ${rule.id}`)) return;
        if (/^\s*(\/\/|\*|\/\*)/.test(line)) return; // comments
        const m = line.match(rule.re);
        if (m) {
          errors += 1;
          console.error(`${relative(repo, file)}:${i + 1}  [${rule.id}] ${rule.why}: ${m[0]}`);
        }
      });
    }
  }
}
if (errors) { console.error(`\n✖ token-lint: ${errors} violation(s) in ${files} file(s)`); process.exit(1); }
console.log(`✔ token-lint: ${files} file(s) clean`);
