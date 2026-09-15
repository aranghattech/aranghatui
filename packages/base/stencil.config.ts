import type { Config } from '@stencil/core';
import { createTierConfig } from '@artui/stencil-config';

export const config: Config = createTierConfig({
  tier: 'base',
  // Vue v-model (CLAUDE.md §3a)
  componentModels: [
    { elements: ['art-input', 'art-textarea'], targetAttr: 'value', event: 'input' },
    { elements: ['art-checkbox', 'art-switch'], targetAttr: 'checked', event: 'change' },
  ],
  // Angular ngModel / reactive forms
  valueAccessorConfigs: [
    { elementSelectors: ['art-input', 'art-textarea'], event: 'input', targetAttr: 'value', type: 'text' },
    { elementSelectors: ['art-checkbox', 'art-switch'], event: 'change', targetAttr: 'checked', type: 'boolean' },
  ],
});
