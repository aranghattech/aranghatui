import type { Config } from '@stencil/core';
import { createTierConfig } from '@artui/stencil-config';

export const config: Config = createTierConfig({
  tier: 'base',
  // Vue v-model (CLAUDE.md §3a): value ↔ `input` event
  componentModels: [{ elements: ['art-input'], targetAttr: 'value', event: 'input' }],
  // Angular ngModel / reactive forms
  valueAccessorConfigs: [{ elementSelectors: ['art-input'], event: 'input', targetAttr: 'value', type: 'text' }],
});
