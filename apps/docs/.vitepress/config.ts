import { defineConfig } from 'vitepress';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const catalog = JSON.parse(readFileSync(resolve(__dirname, '../../../tooling/catalog.json'), 'utf8'));
const docsDir = resolve(__dirname, '..');

/** Sidebar mirrors the tier hierarchy (CLAUDE.md §10). Only components with a page are linked. */
const componentSidebar = Object.entries(catalog.tiers as Record<string, any>).map(([tier, def]) => ({
  text: def.title,
  collapsed: false,
  items: def.components
    .filter((c: any) => existsSync(resolve(docsDir, 'components', tier, `${c.tag.replace(/^art-/, '')}.md`)))
    .map((c: any) => ({ text: c.name, link: `/components/${tier}/${c.tag.replace(/^art-/, '')}` })),
})).filter((g) => g.items.length);

export default defineConfig({
  title: 'artui',
  description: 'AranghatUI — framework-agnostic design system: Stencil web components for HTML, React, Vue and Angular.',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: componentSidebar[0]?.items[0]?.link ?? '/guide/getting-started' },
    ],
    sidebar: {
      '/guide/': [
        { text: 'Guide', items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Theming', link: '/guide/theming' },
          { text: 'Tokens', link: '/guide/tokens' },
          { text: 'Dark Mode', link: '/guide/dark-mode' },
          { text: 'RTL', link: '/guide/rtl' },
          { text: 'Bundle Size', link: '/guide/bundle-size' },
          { text: 'Primitives', link: '/guide/primitives' },
          { text: 'Migration', link: '/guide/migration' },
          { text: 'Contributing', link: '/guide/contributing' },
        ] },
      ],
      '/components/': componentSidebar,
    },
    search: { provider: 'local' },
  },
  vue: { template: { compilerOptions: { isCustomElement: (tag) => tag.startsWith('art-') } } },
  vite: { server: { fs: { allow: [resolve(__dirname, '../../..')] } } },
});
