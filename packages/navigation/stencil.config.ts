import type { Config } from '@stencil/core';
import { createTierConfig } from '@artui/stencil-config';

export const config: Config = createTierConfig({
  tier: 'navigation',
  // Vue v-model (CLAUDE.md §3a); React gets `onOpenChange` / `onPageChange` from the kebab-case event names
  componentModels: [
    { elements: ['art-dropdown-menu', 'art-context-menu', 'art-menubar-menu', 'art-navigation-menu-item', 'art-sidebar-provider', 'art-sidebar-menu-item', 'art-top-nav'], targetAttr: 'open', event: 'open-change' },
    { elements: ['art-pagination'], targetAttr: 'page', event: 'page-change' },
    { elements: ['art-tree-view'], targetAttr: 'value', event: 'value-change' },
  ],
});
