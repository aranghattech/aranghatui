#!/usr/bin/env node
/**
 * @aranghat/tokens build — Style Dictionary 5, DTCG sources.
 *
 * Outputs (dist/):
 *   css/aranghat.css       :root light + [data-theme="dark"] + prefers-color-scheme (guarded)
 *   css/themes/<name>.css  brand override sheets (semantic tokens only)
 *   css/tailwind.css       Tailwind v4 @theme mapping onto --art-* (compiled per component in shadow roots)
 *   scss/_tokens.scss · js/index.js · ts/index.d.ts · json/tokens.json · compose/Tokens.kt · swift/Tokens.swift
 */
import StyleDictionary from 'style-dictionary';
import { formattedVariables, fileHeader } from 'style-dictionary/utils';
import { mkdirSync, readFileSync, writeFileSync, readdirSync, existsSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, 'dist');
const PREFIX = 'art';

// --- custom transforms -------------------------------------------------------
StyleDictionary.registerTransform({
  name: 'name/art',
  type: 'name',
  transform: (token) => {
    // radius.base is THE base radius: expose it as --art-radius (CLAUDE.md §4).
    if (token.path.join('.') === 'radius.base') return `${PREFIX}-radius`;
    return [PREFIX, ...token.path].join('-');
  },
});

const cssTransforms = ['attribute/cti', 'name/art', 'fontFamily/css', 'cubicBezier/css', 'shadow/css/shorthand'];

// --- custom formats ----------------------------------------------------------
const cssBlock = ({ dictionary, selector, extra = '' }) =>
  `${selector} {\n${extra}${formattedVariables({ format: 'css', dictionary, outputReferences: true, usesDtcg: true })}\n}\n`;

StyleDictionary.registerFormat({
  name: 'css/artui-light',
  format: async ({ dictionary, file }) =>
    (await fileHeader({ file })) + cssBlock({ dictionary, selector: ':root', extra: '  color-scheme: light;\n' }),
});

StyleDictionary.registerFormat({
  name: 'css/artui-dark',
  format: ({ dictionary }) => {
    const vars = formattedVariables({ format: 'css', dictionary, outputReferences: true, usesDtcg: true });
    return (
      `[data-theme="dark"] {\n  color-scheme: dark;\n${vars}\n}\n\n` +
      `@media (prefers-color-scheme: dark) {\n  :root:not([data-theme="light"]) {\n    color-scheme: dark;\n${vars.replace(/^/gm, '  ')}\n  }\n}\n`
    );
  },
});

// Tailwind v4 theme mapping. Only token references — never a literal value —
// except breakpoints/containers, which Tailwind needs as static lengths.
StyleDictionary.registerFormat({
  name: 'css/artui-tailwind',
  format: ({ dictionary }) => {
    const byPath = new Map(dictionary.allTokens.map((t) => [t.path.join('.'), t]));
    const v = (path) => {
      const t = byPath.get(path);
      if (!t) throw new Error(`tailwind mapping references unknown token ${path}`);
      return `var(--${t.name})`;
    };
    const lit = (path) => {
      const t = byPath.get(path);
      if (!t) throw new Error(`tailwind mapping references unknown token ${path}`);
      return t.$value;
    };
    const lines = [];
    const add = (k, val) => lines.push(`  ${k}: ${val};`);

    // colours
    const colours = {
      canvas: 'color.bg.canvas', surface: 'color.bg.surface', popover: 'color.bg.popover', muted: 'color.bg.muted',
      accent: 'color.bg.accent', overlay: 'color.bg.overlay',
      fg: 'color.fg.default', 'fg-muted': 'color.fg.muted', link: 'color.fg.link',
      primary: 'color.primary.solid', 'primary-hover': 'color.primary.hover', 'primary-fg': 'color.fg.on-primary',
      secondary: 'color.secondary.solid', 'secondary-hover': 'color.secondary.hover', 'secondary-fg': 'color.secondary.fg',
      destructive: 'color.destructive.solid', 'destructive-hover': 'color.destructive.hover', 'destructive-muted': 'color.destructive.muted',
      'destructive-fg': 'color.destructive.fg', 'on-destructive': 'color.fg.on-destructive',
      success: 'color.success.solid', 'success-muted': 'color.success.muted', 'success-fg': 'color.success.fg',
      warning: 'color.warning.solid', 'warning-muted': 'color.warning.muted', 'warning-fg': 'color.warning.fg',
      info: 'color.info.solid', 'info-muted': 'color.info.muted', 'info-fg': 'color.info.fg',
      border: 'color.border.default', 'border-strong': 'color.border.strong', ring: 'color.ring',
    };
    for (const [k, p] of Object.entries(colours)) add(`--color-${k}`, v(p));
    add('--color-transparent', 'transparent');
    add('--color-current', 'currentColor');
    add('--color-inherit', 'inherit');
    // shape
    for (const k of ['sm', 'md', 'lg', 'xl']) add(`--radius-${k}`, v(`radius.${k}`));
    add('--radius-none', v('radius.none'));
    add('--radius-full', v('radius.full'));
    // spacing multiplier: p-4 => calc(var(--art-space-1) * 4)
    add('--spacing', v('space.1'));
    // type
    add('--font-sans', v('font.family.sans'));
    add('--font-mono', v('font.family.mono'));
    for (const k of ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']) {
      add(`--text-${k}`, v(`font.size.${k}`));
      add(`--text-${k}--line-height`, v(`font.line-height.${k}`));
    }
    for (const k of ['normal', 'medium', 'semibold', 'bold']) add(`--font-weight-${k}`, v(`font.weight.${k}`));
    for (const k of ['tight', 'normal', 'wide']) add(`--tracking-${k}`, v(`font.tracking.${k}`));
    // elevation + motion
    for (const k of ['raised', 'overlay', 'popover']) add(`--shadow-${k}`, v(`shadow.${k}`));
    for (const k of ['out', 'in-out', 'linear']) add(`--ease-${k}`, v(`ease.${k}`));
    add('--default-transition-duration', v('duration.base'));
    add('--default-transition-timing-function', v('ease.out'));
    // static lengths Tailwind needs at compile time (media queries cannot use var())
    for (const k of ['sm', 'md', 'lg', 'xl', '2xl']) add(`--breakpoint-${k}`, lit(`breakpoint.${k}`));
    for (const k of ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']) add(`--container-${k}`, lit(`container.${k}`));
    // functional motion only (loading indicators); duration from the motion tokens
    add('--animate-spin', `spin ${lit('duration.spin')} linear infinite`);
    lines.push('  @keyframes spin { to { transform: rotate(360deg); } }');

    const utilities = `
/* ---- artui recipes: the ONLY place these patterns are written (CLAUDE.md §8) ---- */
@utility focus-ring {
  outline: none;
  &:focus-visible {
    box-shadow: 0 0 0 ${v('ring.offset')} ${v('color.bg.canvas')}, 0 0 0 calc(${v('ring.width')} + ${v('ring.offset')}) color-mix(in oklab, ${v('color.ring')} 50%, transparent);
  }
}
@utility motion-fast { transition-duration: ${v('duration.fast')}; transition-timing-function: ${v('ease.out')}; }
@utility motion-base { transition-duration: ${v('duration.base')}; transition-timing-function: ${v('ease.out')}; }
@utility control-sm { height: ${v('control.height.sm')}; padding-inline: ${v('control.padding-x.sm')}; }
@utility control-md { height: ${v('control.height.md')}; padding-inline: ${v('control.padding-x.md')}; }
@utility control-lg { height: ${v('control.height.lg')}; padding-inline: ${v('control.padding-x.lg')}; }
@utility icon-sm { width: ${v('size.icon.sm')}; height: ${v('size.icon.sm')}; }
@utility icon-md { width: ${v('size.icon.md')}; height: ${v('size.icon.md')}; }
@utility icon-lg { width: ${v('size.icon.lg')}; height: ${v('size.icon.lg')}; }
@utility border-default { border-width: ${v('border.width')}; border-style: solid; border-color: ${v('color.border.default')}; }
@utility transition-interactive { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, box-shadow, opacity, scale; }
@utility control-icon-start-sm { padding-inline-start: ${v('control.padding-x-icon.sm')}; }
@utility control-icon-start-md { padding-inline-start: ${v('control.padding-x-icon.md')}; }
@utility control-icon-start-lg { padding-inline-start: ${v('control.padding-x-icon.lg')}; }
@utility control-icon-end-sm { padding-inline-end: ${v('control.padding-x-icon.sm')}; }
@utility control-icon-end-md { padding-inline-end: ${v('control.padding-x-icon.md')}; }
@utility control-icon-end-lg { padding-inline-end: ${v('control.padding-x-icon.lg')}; }
@utility field-sm { height: ${v('control.height.sm')}; padding-inline: ${v('control.padding-x-field.sm')}; }
@utility field-md { height: ${v('control.height.md')}; padding-inline: ${v('control.padding-x-field.md')}; }
@utility field-lg { height: ${v('control.height.lg')}; padding-inline: ${v('control.padding-x-field.lg')}; }
@utility invalid-ring { border-color: ${v('color.destructive.solid')}; box-shadow: 0 0 0 ${v('ring.width')} color-mix(in oklab, ${v('color.destructive.solid')} 20%, transparent); }
@utility control-icon-sm { height: ${v('control.height.sm')}; width: ${v('control.height.sm')}; padding: 0; }
@utility control-icon-md { height: ${v('control.height.md')}; width: ${v('control.height.md')}; padding: 0; }
@utility control-icon-lg { height: ${v('control.height.lg')}; width: ${v('control.height.lg')}; padding: 0; }

/* Reduced motion: every transition/animation collapses (CLAUDE.md §8). */
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
}
`;
    // Shadow-scoped base reset: Tailwind's preflight is not imported (it targets html/body),
    // so every shadow root gets this minimal, token-based normalisation instead.
    const base = `
/* ---- shadow-root base reset (compiled into every component; CLAUDE.md N4 one-border rule) ---- */
@layer base {
  *, ::before, ::after { box-sizing: border-box; border: 0 solid ${v('color.border.default')}; }
  button, input, select, textarea { font: inherit; color: inherit; background: transparent; margin: 0; padding: 0; border-radius: 0; appearance: none; }
  a { color: inherit; text-decoration: inherit; }
  svg { display: block; }
}
`;
    // Layer order must be declared first: base (reset) < utilities, or the reset would beat every utility.
    return `/* Generated by @aranghat/tokens — do not edit. Tailwind v4 theme mapped onto --art-* runtime tokens. */\n@layer base, utilities;\n@import "tailwindcss/utilities.css" layer(utilities);\n${base}\n@theme inline {\n${lines.join('\n')}\n}\n${utilities}`;
  },
});

StyleDictionary.registerFormat({
  name: 'json/artui-flat',
  format: ({ dictionary }) => JSON.stringify(dictionary.allTokens.map((t) => ({
    name: `--${t.name}`,
    path: t.path.join('.'),
    type: t.$type,
    value: t.$value,
    original: typeof t.original.$value === 'string' ? t.original.$value : t.$value,
    tier: t.filePath.includes('/primitive/') ? 'primitive' : 'semantic',
    description: t.$description ?? '',
  })), null, 2),
});

// --- builds ------------------------------------------------------------------
const primitive = ['src/primitive/**/*.json', 'src/semantic/shared/**/*.json'];
const light = new StyleDictionary({
  source: [...primitive, 'src/semantic/light/**/*.json'],
  usesDtcg: true,
  log: { verbosity: 'silent', warnings: 'disabled' },
  platforms: {
    css: {
      transforms: cssTransforms,
      buildPath: 'dist/css/',
      files: [{ destination: '_light.css', format: 'css/artui-light' }],
    },
    tailwind: {
      transforms: cssTransforms,
      buildPath: 'dist/css/',
      files: [{ destination: 'tailwind.css', format: 'css/artui-tailwind' }],
    },
    scss: {
      transforms: cssTransforms,
      buildPath: 'dist/scss/',
      files: [{ destination: '_tokens.scss', format: 'scss/variables', options: { outputReferences: true } }],
    },
    js: {
      transforms: [...cssTransforms, 'name/camel'],
      buildPath: 'dist/js/',
      files: [{ destination: 'index.js', format: 'javascript/es6' }],
    },
    ts: {
      transforms: [...cssTransforms, 'name/camel'],
      buildPath: 'dist/ts/',
      files: [{ destination: 'index.d.ts', format: 'typescript/es6-declarations' }],
    },
    json: {
      transforms: cssTransforms,
      buildPath: 'dist/json/',
      files: [{ destination: 'tokens.json', format: 'json/nested' }, { destination: 'tokens.flat.json', format: 'json/artui-flat' }],
    },
    compose: {
      transformGroup: 'compose',
      buildPath: 'dist/compose/',
      files: [{ destination: 'Tokens.kt', format: 'compose/object', options: { className: 'ArtTokens', packageName: 'com.aranghat.tokens' }, filter: (t) => t.$type === 'color' }],
    },
    swift: {
      transformGroup: 'ios-swift',
      buildPath: 'dist/swift/',
      files: [{ destination: 'Tokens.swift', format: 'ios-swift/class.swift', options: { className: 'ArtTokens' }, filter: (t) => t.$type === 'color' }],
    },
  },
});
const dark = new StyleDictionary({
  source: [...primitive, 'src/semantic/dark/**/*.json'],
  usesDtcg: true,
  log: { verbosity: 'silent', warnings: 'disabled' },
  platforms: {
    css: {
      transforms: cssTransforms,
      buildPath: 'dist/css/',
      files: [{ destination: '_dark.css', format: 'css/artui-dark', filter: (t) => t.filePath.includes('/semantic/dark/') }],
    },
    compose: {
      transformGroup: 'compose',
      buildPath: 'dist/compose/',
      files: [{ destination: 'TokensDark.kt', format: 'compose/object', options: { className: 'ArtTokensDark', packageName: 'com.aranghat.tokens' }, filter: (t) => t.$type === 'color' && t.filePath.includes('/semantic/dark/') }],
    },
    swift: {
      transformGroup: 'ios-swift',
      buildPath: 'dist/swift/',
      files: [{ destination: 'TokensDark.swift', format: 'ios-swift/class.swift', options: { className: 'ArtTokensDark' }, filter: (t) => t.$type === 'color' && t.filePath.includes('/semantic/dark/') }],
    },
  },
});

await Promise.all([light.buildAllPlatforms(), dark.buildAllPlatforms()]);

// Stitch aranghat.css
const cssDir = join(dist, 'css');
const stitched = readFileSync(join(cssDir, '_light.css'), 'utf8') + '\n' + readFileSync(join(cssDir, '_dark.css'), 'utf8');
writeFileSync(join(cssDir, 'aranghat.css'), stitched);

// Brand override sheets: themes/<name>/{light,dark}.json → dist/css/themes/<name>.css.
// Scoped to [data-brand="<name>"] so several brands can coexist and a brand can apply
// to a subtree. Mode still comes from data-theme / prefers-color-scheme (CLAUDE.md §4).
const themesDir = join(root, 'themes');
mkdirSync(join(cssDir, 'themes'), { recursive: true });
StyleDictionary.registerFormat({
  name: 'css/artui-theme-part',
  format: ({ dictionary }) => formattedVariables({ format: 'css', dictionary, outputReferences: true, usesDtcg: true }),
});
const themeNames = existsSync(themesDir) ? readdirSync(themesDir).filter((n) => existsSync(join(themesDir, n, 'light.json'))) : [];
for (const name of themeNames) {
  const tdir = join(themesDir, name);
  const hasDark = existsSync(join(tdir, 'dark.json'));
  const mk = (mode) => new StyleDictionary({
    source: [...primitive, `themes/${name}/${mode}.json`],
    usesDtcg: true,
    log: { verbosity: 'silent', warnings: 'disabled' },
    platforms: { css: { transforms: cssTransforms, buildPath: `dist/css/themes/_${name}/`, files: [{ destination: `${mode}.css`, format: 'css/artui-theme-part', filter: (t) => t.filePath.includes(`themes/${name}/`) }] } },
  });
  await mk('light').buildAllPlatforms();
  if (hasDark) await mk('dark').buildAllPlatforms();
  const lightVars = readFileSync(join(cssDir, 'themes', `_${name}`, 'light.css'), 'utf8');
  const darkVars = hasDark ? readFileSync(join(cssDir, 'themes', `_${name}`, 'dark.css'), 'utf8') : '';
  // Guard: a brand sheet may only override semantic tokens.
  let out = `/* artui brand "${name}" — semantic overrides only. Import after aranghat.css; activate with data-brand="${name}" on <html> or any subtree. */\n[data-brand="${name}"] {\n${lightVars}\n}\n`;
  if (hasDark) {
    out += `[data-brand="${name}"][data-theme="dark"], [data-theme="dark"] [data-brand="${name}"] {\n${darkVars}\n}\n` +
      `@media (prefers-color-scheme: dark) {\n  [data-brand="${name}"]:not([data-theme="light"]) {\n${darkVars.replace(/^/gm, '  ')}\n  }\n}\n`;
  }
  writeFileSync(join(cssDir, 'themes', `${name}.css`), out);
  rmSync(join(cssDir, 'themes', `_${name}`), { recursive: true, force: true });
}
console.log('✔ tokens built → dist/{css,scss,js,ts,json,compose,swift}');
