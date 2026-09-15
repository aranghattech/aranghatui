import type { Config } from '@stencil/core';
import { createTierConfig } from '@artui/stencil-config';

export const config: Config = createTierConfig({
  tier: 'modals',
  // Vue v-model:open (CLAUDE.md §3a); React gets `onOpenChange` from the kebab-case event name
  componentModels: [{ elements: ['art-dialog', 'art-alert-dialog', 'art-sheet'], targetAttr: 'open', event: 'open-change' }],
});
