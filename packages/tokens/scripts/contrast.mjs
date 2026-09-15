#!/usr/bin/env node
/**
 * AA contrast sweep over semantic token pairs, light + dark, default + every brand.
 * Text pairs must reach 4.5:1; UI fills (primary/destructive solid on canvas) 3:1.
 * Usage: node scripts/contrast.mjs   (exit 1 on any failure)
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const css = readFileSync(join(root, 'dist/css/aranghat.css'), 'utf8');

function parseBlock(text, selectorRe) {
  const m = text.match(selectorRe);
  if (!m) return {};
  const vars = {};
  for (const line of m[1].split('\n')) {
    const mm = line.match(/^\s*(--art-[a-z0-9-]+):\s*([^;]+);/);
    if (mm) vars[mm[1]] = mm[2].trim();
  }
  return vars;
}
const lightVars = parseBlock(css, /:root \{([\s\S]*?)\n\}/);
const darkVars = { ...lightVars, ...parseBlock(css, /\[data-theme="dark"\] \{([\s\S]*?)\n\}/) };

function resolve(vars, value, depth = 0) {
  if (depth > 10) throw new Error(`cycle resolving ${value}`);
  const m = value.match(/^var\((--art-[a-z0-9-]+)\)$/);
  return m ? resolve(vars, vars[m[1]], depth + 1) : value;
}
function toRgb(v) {
  v = v.trim();
  let m = v.match(/^#([0-9a-f]{6})(?:[0-9a-f]{2})?$/i);
  if (m) return [0, 2, 4].map((i) => parseInt(m[1].slice(i, i + 2), 16));
  m = v.match(/^rgb\((\d+)\s+(\d+)\s+(\d+)/);
  if (m) return [+m[1], +m[2], +m[3]];
  throw new Error(`unsupported colour ${v}`);
}
const lum = ([r, g, b]) => { const f = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
const ratio = (a, b) => { const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x); return (l1 + 0.05) / (l2 + 0.05); };

const TEXT_PAIRS = [
  ['fg-default', 'bg-canvas'], ['fg-default', 'bg-surface'], ['fg-default', 'bg-popover'], ['fg-default', 'bg-muted'], ['fg-default', 'bg-accent'], ['fg-default', 'bg-sidebar'], ['fg-default', 'bg-sidebar-accent'], ['fg-muted', 'bg-sidebar'],
  ['fg-muted', 'bg-canvas'], ['fg-muted', 'bg-surface'], ['fg-muted', 'bg-popover'],
  ['fg-on-primary', 'primary-solid'], ['fg-on-primary', 'primary-hover'],
  ['secondary-fg', 'secondary-solid'], ['secondary-fg', 'secondary-hover'],
  ['fg-on-destructive', 'destructive-solid'], ['fg-on-destructive', 'destructive-hover'],
  ['destructive-fg', 'bg-canvas'], ['destructive-fg', 'destructive-muted'],
  ['success-fg', 'success-muted'], ['warning-fg', 'warning-muted'], ['info-fg', 'info-muted'],
  ['fg-link', 'bg-canvas'],
];
const UI_PAIRS = [['primary-solid', 'bg-canvas'], ['destructive-solid', 'bg-canvas'], ['border-strong', 'bg-canvas']];
const mix = (a, b, t) => a.map((x, i) => Math.round(x * t + b[i] * (1 - t)));

let failures = 0, checks = 0;
function sweep(label, vars) {
  const get = (name) => toRgb(resolve(vars, vars[`--art-color-${name}`] ?? (() => { throw new Error(`missing --art-color-${name}`); })()));
  for (const [fg, bg] of TEXT_PAIRS) { checks++; const r = ratio(get(fg), get(bg)); if (r < 4.5) { failures++; console.error(`✖ ${label}: ${fg} on ${bg} = ${r.toFixed(2)}:1 (< 4.5)`); } }
  for (const [a, b] of UI_PAIRS) { checks++; const r = ratio(get(a), get(b)); if (r < 3) { failures++; console.error(`✖ ${label}: ${a} vs ${b} = ${r.toFixed(2)}:1 (< 3)`); } }
  // The focus-ring recipe paints the ring at 50% alpha over the canvas (tailwind.css): check the halo as rendered.
  { checks++; const halo = mix(get('ring'), get('bg-canvas'), 0.5); const r = ratio(halo, get('bg-canvas')); if (r < 3) { failures++; console.error(`✖ ${label}: ring halo (50% over canvas) = ${r.toFixed(2)}:1 (< 3)`); } }
}
sweep('default/light', lightVars);
sweep('default/dark', darkVars);

const themesDir = join(root, 'dist/css/themes');
if (existsSync(themesDir)) {
  for (const f of readdirSync(themesDir).filter((n) => n.endsWith('.css'))) {
    const t = readFileSync(join(themesDir, f), 'utf8');
    const name = f.replace(/\.css$/, '');
    const bl = parseBlock(t, new RegExp(`\\[data-brand="${name}"\\] \\{([\\s\\S]*?)\\n\\}`));
    const bd = parseBlock(t, new RegExp(`\\[data-brand="${name}"\\]\\[data-theme="dark"\\][^{]*\\{([\\s\\S]*?)\\n\\}`));
    for (const k of Object.keys({ ...bl, ...bd })) if (!(k in lightVars)) { failures++; console.error(`✖ brand ${name}: ${k} is not a token of the default theme (brands may only override existing semantic tokens)`); }
    sweep(`${name}/light`, { ...lightVars, ...bl });
    sweep(`${name}/dark`, { ...darkVars, ...bd });
  }
}
if (failures) { console.error(`\n✖ contrast: ${failures} failure(s) in ${checks} checks`); process.exit(1); }
console.log(`✔ contrast: ${checks} checks AA-clean (default + ${existsSync(themesDir) ? readdirSync(themesDir).filter((n) => n.endsWith('.css')).length : 0} brand theme(s))`);
