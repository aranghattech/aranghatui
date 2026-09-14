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
      const built = compiler.build([...candidates]);
      const dev = Boolean(context?.config?.devMode);
      const code = dev ? built : optimize(built, { minify: true }).code;
      return { code, id: fileName, dependencies, diagnostics: [] };
    },
  };
}
