/**
 * artui Tailwind-in-shadow plugin for Stencil.
 *
 * For every component stylesheet (`art-x.css`) we compile:
 *   @import "@aranghat/tokens/tailwind.css";   ← @theme mapped onto --art-* tokens + recipes
 *   <the component's own CSS>                   ← may use @apply and the recipes
 * with the candidate class list scanned from the sibling `art-x.tsx` (and any
 * `.tsx`/`.ts` files in the same directory). The result is the component's
 * shadow stylesheet — no global Tailwind sheet is ever shipped.
 */
import { readFile, readdir } from 'node:fs/promises';
import { dirname, join, basename } from 'node:path';
import { compile, optimize } from '@tailwindcss/node';
import { Polyfills } from 'tailwindcss';
import { Scanner } from '@tailwindcss/oxide';

/**
 * `@property` rules are ignored inside shadow-root stylesheets, so every Tailwind utility that
 * composes `--tw-*` variables (`translate`, `box-shadow`, `border-style`, …) would be invalid
 * for lack of a defined fallback. Replace the registrations with an explicit defaults rule —
 * exactly what Tailwind's polyfill does for browsers without `@property`.
 */
export function shadowPropertyDefaults(css) {
  const defaults = [];
  const stripped = css.replace(/@property\s+(--[\w-]+)\s*\{([^}]*)\}/g, (_, name, body) => {
    const m = body.match(/initial-value\s*:\s*([^;]+);?/);
    if (m) defaults.push(`${name}:${m[1].trim()}`);
    return '';
  });
  if (!defaults.length) return stripped;
  const rule = `@layer base{*,::before,::after,::backdrop{${defaults.join(';')}}}`;
  // keep the layer-order statement first
  return stripped.replace(/(@layer\s+[^;{]+;)/, `$1\n${rule}\n`);
}

export function artuiTailwind(options = {}) {
  const tokensImport = options.tokensImport ?? '@aranghat/tokens/tailwind.css';
  return {
    name: 'artui-tailwind',
    pluginType: 'css',
    async transform(sourceText, fileName, context) {
      if (!fileName || !fileName.endsWith('.css')) return null;
      const dir = dirname(fileName);
      const files = (await readdir(dir)).filter((f) => /\.(tsx|ts)$/.test(f) && !/\.(spec|e2e|stories|test)\./.test(f));
      const candidates = new Set();
      const scanner = new Scanner({ sources: [] });
      for (const f of files) {
        const content = await readFile(join(dir, f), 'utf8');
        for (const c of scanner.scanFiles([{ content, extension: f.split('.').pop() }])) candidates.add(c);
      }
      const input = `@import "${tokensImport}";\n${sourceText}`;
      const dependencies = [];
      const compiler = await compile(input, {
        base: dir,
        onDependency: (path) => dependencies.push(path),
        // Evergreen targets only: no @property / color-mix fallbacks in every shadow root.
        polyfills: Polyfills.None,
      });
      const built = shadowPropertyDefaults(compiler.build([...candidates]));
      const dev = Boolean(context?.config?.devMode);
      const code = dev ? built : optimize(built, { minify: true }).code;
      return { code, id: fileName, dependencies, diagnostics: [] };
    },
  };
}
