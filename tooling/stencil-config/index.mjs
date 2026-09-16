import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { artuiTailwind } from '@artui/stencil-tailwind';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { TIERS, componentModels, valueAccessorConfigs } from './models.mjs';

export { TIERS, componentModels, valueAccessorConfigs };

const PEERS = [/^@aranghat\//, '@floating-ui/dom', 'embla-carousel'];
const isPeer = (id, extra) => [...PEERS, ...extra].some((m) => (m instanceof RegExp ? m.test(id) : m === id));

/**
 * Lower tiers, primitives and the approved runtime deps are resolved by the consumer's bundler so
 * they are never duplicated (ADR-0002, CLAUDE.md §2). The dev server / e2e `www` build runs in a
 * browser with no bundler, so `ARTUI_BUNDLE_PEERS=1` bundles them there.
 */
const peersPlugin = (extra, bundle) => ({
  name: 'artui-peers',
  resolveId(id) { return !bundle && isPeer(id, extra) ? { id, external: true } : null; },
});

const common = (namespace, srcDir) => ({
  namespace,
  srcDir,
  taskQueue: 'async',
  buildEs5: false,
  hashFileNames: false,
  validatePrimaryPackageOutputTarget: false,
  extras: { enableImportInjection: false },
  plugins: [artuiTailwind()],
});

/**
 * @param {object} o
 * @param {'base'|'components'|'navigation'|'modals'|'widgets'|'extended'} o.tier
 * @param {string[]} [o.external] extra Rollup externals
 */
export function createTierConfig({ tier, external = [] }) {
  const pkg = `@aranghat/${tier}`;
  // ADR-0002 (revised 2026-09-14 after measurement): the runtime is INLINED per tier.
  // Inlined, Stencil tree-shakes it by feature use (~7 kB gzip); the shared external
  // runtime is the whole client (~25 kB gzip). ARTUI_EXTERNAL_RUNTIME=1 is a
  // measurement switch only.
  const externalRuntime = process.env.ARTUI_EXTERNAL_RUNTIME === '1';
  const bundlePeers = process.env.ARTUI_BUNDLE_PEERS === '1';
  // Second build of the same sources (`ARTUI_SSR=1`, ADR-0023): the client that adopts
  // server-rendered shadow roots. Stencil compiles that client-side hydration code only when a
  // hydrate target is present in the build, and it costs ~3 kB gzip per tier runtime — so it
  // lands in dist/components-ssr under the `artui-ssr` export condition, the default build
  // below stays lean, and the tier-only hydrate app this build has to produce is discarded
  // (the real one spans every tier: packages/hydrate).
  const ssr = process.env.ARTUI_SSR === '1';
  const customElements = (dir, extra) => ({
    type: 'dist-custom-elements',
    dir,
    externalRuntime,
    customElementsExportBehavior: 'single-export-module',
    includeGlobalScripts: false,
    ...extra,
  });
  return {
    ...common(`artui-${tier}`, 'src'),
    sourceMap: true,
    // address must be localhost: Chrome blocks sub-resource requests to 0.0.0.0 (Stencil's default), which silently breaks @stencil/playwright's setContent.
    devServer: { address: 'localhost', openBrowser: false, port: { base: 3333, components: 3334, navigation: 3335, modals: 3336, widgets: 3337, extended: 3338 }[tier] },
    rollupConfig: { inputOptions: { external: externalRuntime ? [/^@stencil\//] : [] } },
    rollupPlugins: { before: [peersPlugin(external, bundlePeers)] },
    outputTargets: ssr
      ? [
          customElements('dist/components-ssr', { empty: true, generateTypeDeclarations: false }),
          { type: 'dist-hydrate-script', dir: 'dist/hydrate', empty: true },
        ]
      : [
          // `stencil build --dev` (dev server, Playwright e2e) skips this target but would
          // still empty the directory; the build script cleans dist explicitly instead.
          customElements('dist/components', { empty: false, generateTypeDeclarations: true }),
          { type: 'docs-readme' },
          { type: 'docs-json', file: 'dist/docs.json' },
          // Dev server for @stencil/playwright e2e + `pnpm dev`; not published.
          // the token sheet is copied so e2e pages (via @artui/e2e's setContent) have real token-derived geometry
          { type: 'www', dir: 'www', serviceWorker: null, empty: true, copy: [{ src: '../node_modules/@aranghat/tokens/dist/css/aranghat.css', dest: 'aranghat.css' }] },
          angularOutputTarget({
            componentCorePackage: pkg,
            outputType: 'standalone',
            directivesProxyFile: `../angular/${tier}/src/directives/proxies.ts`,
            directivesArrayFile: `../angular/${tier}/src/directives/index.ts`,
            customElementsDir: 'dist/components',
            valueAccessorConfigs: valueAccessorConfigs[tier],
          }),
        ],
  };
}

/** Tags declared by the `.tsx` files under `dir`. */
function scanTags(dir) {
  const tags = [];
  const walk = (d) => {
    if (!existsSync(d)) return;
    for (const name of readdirSync(d)) {
      const p = join(d, name);
      if (statSync(p).isDirectory()) walk(p);
      else if (name.endsWith('.tsx')) for (const m of readFileSync(p, 'utf8').matchAll(/@Component\(\{[^}]*?tag:\s*'([a-z-]+)'/gs)) tags.push(m[1]);
    }
  };
  walk(dir);
  return tags;
}

/**
 * `@aranghat/hydrate` (ADR-0023): one Node hydrate app compiled from every tier's sources
 * (collected into `src-all/<tier>` by scripts/collect.mjs), so a widget's shadow root and the
 * base elements inside it render in one pass. Peers and runtime deps are bundled: Node has no
 * bundler in front of it. The React and Vue wrappers are generated here as well — with
 * `hydrateModule` set, the React target requires the hydrate target in the same build — each
 * tier's package receiving only its own components.
 */
export function createHydrateConfig() {
  const srcDir = 'src-all';
  const tags = Object.fromEntries(TIERS.map((tier) => [tier, scanTags(join(process.cwd(), srcDir, tier))]));
  const all = Object.values(tags).flat();
  const others = (tier) => all.filter((t) => !tags[tier].includes(t));
  return {
    ...common('artui-hydrate', srcDir),
    sourceMap: false,
    outputTargets: [
      { type: 'dist-hydrate-script', dir: 'dist/hydrate', empty: true },
      ...TIERS.flatMap((tier) => [
        reactOutputTarget({
          outDir: `../react/${tier}/src/components/`,
          esModules: true,
          stencilPackageName: `@aranghat/${tier}`,
          customElementsDir: 'dist/components',
          excludeComponents: others(tier),
          // `<tag>.server.ts` wrappers render through the hydrate app and hand the client wrapper
          // (components.ts, `'use client'`) to React for hydration.
          hydrateModule: '@aranghat/hydrate',
          clientModule: './components.js',
        }),
        vueOutputTarget({
          componentCorePackage: `@aranghat/${tier}`,
          proxiesFile: `../vue/${tier}/src/components/index.ts`,
          includeImportCustomElements: true,
          includeDefineCustomElements: false,
          includePolyfills: false,
          customElementsDir: 'dist/components',
          componentModels: componentModels[tier],
          excludeComponents: others(tier),
          // without a `window` the proxies render through the hydrate app
          hydrateModule: '@aranghat/hydrate',
        }),
      ]),
    ],
  };
}
