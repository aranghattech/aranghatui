import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { artuiTailwind } from '@artui/stencil-tailwind';

/**
 * @param {object} o
 * @param {'base'|'components'|'navigation'|'modals'|'widgets'} o.tier
 * @param {import('@stencil/vue-output-target').ComponentModelConfig[]} [o.componentModels]
 * @param {import('@stencil/angular-output-target').ValueAccessorConfig[]} [o.valueAccessorConfigs]
 * @param {string[]} [o.external] extra Rollup externals
 */
export function createTierConfig({ tier, componentModels = [], valueAccessorConfigs = [], external = [] }) {
  const pkg = `@aranghat/${tier}`;
  // ADR-0002 (revised 2026-09-14 after measurement): the runtime is INLINED per tier.
  // Inlined, Stencil tree-shakes it by feature use (~7 kB gzip); the shared external
  // runtime is the whole client (~25 kB gzip). ARTUI_EXTERNAL_RUNTIME=1 is a
  // measurement switch only.
  const externalRuntime = process.env.ARTUI_EXTERNAL_RUNTIME === '1';
  // Dev server / e2e (`www` lazy build) runs in a browser with no bundler, so lower
  // tiers must be bundled there. Published dist keeps them external (never duplicated).
  const bundlePeers = process.env.ARTUI_BUNDLE_PEERS === '1';
  return {
    namespace: `artui-${tier}`,
    srcDir: 'src',
    taskQueue: 'async',
    sourceMap: true,
    buildEs5: false,
    hashFileNames: false,
    validatePrimaryPackageOutputTarget: false,
    extras: { enableImportInjection: false },
    plugins: [artuiTailwind()],
    // address must be localhost: Chrome blocks sub-resource requests to 0.0.0.0 (Stencil's default), which silently breaks @stencil/playwright's setContent.
    devServer: { address: 'localhost', openBrowser: false, port: { base: 3333, components: 3334, navigation: 3335, modals: 3336, widgets: 3337 }[tier] },
    // Lower tiers, primitives and approved runtime deps are resolved by the
    // consumer's bundler so they are never duplicated (ADR-0002, CLAUDE.md §2).
    rollupConfig: {
      inputOptions: {
        external: bundlePeers ? [] : [/^@aranghat\//, ...(externalRuntime ? [/^@stencil\//] : []), '@floating-ui/dom', 'embla-carousel', ...external],
      },
    },
    outputTargets: [
      {
        type: 'dist-custom-elements',
        dir: 'dist/components',
        externalRuntime,
        customElementsExportBehavior: 'single-export-module',
        // `stencil build --dev` (dev server, Playwright e2e) skips this target but would
        // still empty the directory; the build script cleans dist explicitly instead.
        empty: false,
        generateTypeDeclarations: true,
        includeGlobalScripts: false,
      },
      { type: 'docs-readme' },
      { type: 'docs-json', file: 'dist/docs.json' },
      // Dev server for @stencil/playwright e2e + `pnpm dev`; not published.
      // the token sheet is copied so e2e pages (via @artui/e2e's setContent) have real token-derived geometry
      { type: 'www', dir: 'www', serviceWorker: null, empty: true, copy: [{ src: '../node_modules/@aranghat/tokens/dist/css/aranghat.css', dest: 'aranghat.css' }] },
      reactOutputTarget({
        outDir: `../react/${tier}/src/components/`,
        esModules: true,
        stencilPackageName: pkg,
        customElementsDir: 'dist/components',
      }),
      vueOutputTarget({
        componentCorePackage: pkg,
        proxiesFile: `../vue/${tier}/src/components/index.ts`,
        includeImportCustomElements: true,
        includeDefineCustomElements: false,
        includePolyfills: false,
        customElementsDir: 'dist/components',
        componentModels,
      }),
      angularOutputTarget({
        componentCorePackage: pkg,
        outputType: 'standalone',
        directivesProxyFile: `../angular/${tier}/src/directives/proxies.ts`,
        directivesArrayFile: `../angular/${tier}/src/directives/index.ts`,
        customElementsDir: 'dist/components',
        valueAccessorConfigs,
      }),
    ],
  };
}

