import type { Config } from '@stencil/core';
import { createTierConfig } from '@artui/stencil-config';

export const config: Config = createTierConfig({
  tier: 'components',
  // Vue `v-model:open` (CLAUDE.md §3a); React gets `onOpenChange` from the kebab-case event name
  componentModels: [{ elements: ['art-tooltip', 'art-popover', 'art-hover-card'], targetAttr: 'open', event: 'open-change' }],
});
