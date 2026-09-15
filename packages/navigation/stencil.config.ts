import type { Config } from '@stencil/core';
import { createTierConfig } from '@artui/stencil-config';

export const config: Config = createTierConfig({
  tier: 'navigation',
  // Vue v-model (CLAUDE.md §3a); React gets `onOpenChange` / `onPageChange` from the kebab-case event names
  componentModels: [
    { elements: ['art-dropdown-menu'], targetAttr: 'open', event: 'open-change' },
    { elements: ['art-pagination'], targetAttr: 'page', event: 'page-change' },
  ],
});
