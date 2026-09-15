import type { Config } from '@stencil/core';
import { createTierConfig } from '@artui/stencil-config';

export const config: Config = createTierConfig({
  tier: 'widgets',
  // Vue v-model:open on the app shell (CLAUDE.md §3a); React gets `onOpenChange` from the kebab-case event name
  componentModels: [
    { elements: ['art-app-shell'], targetAttr: 'open', event: 'open-change' },
    { elements: ['art-data-table-page'], targetAttr: 'filter', event: 'filter-change' },
    { elements: ['art-onboarding-wizard'], targetAttr: 'step', event: 'step-change' },
    { elements: ['art-notification-centre'], targetAttr: 'open', event: 'open-change' },
  ],
});
