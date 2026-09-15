import type { Config } from '@stencil/core';
import { createTierConfig } from '@artui/stencil-config';

export const config: Config = createTierConfig({
  tier: 'components',
  // Vue v-model (CLAUDE.md §3a); React gets `onOpenChange` / `onValueChange` from the kebab-case event names
  componentModels: [
    { elements: ['art-tooltip', 'art-popover', 'art-hover-card', 'art-collapsible'], targetAttr: 'open', event: 'open-change' },
    { elements: ['art-accordion', 'art-tabs'], targetAttr: 'value', event: 'value-change' },
    { elements: ['art-select', 'art-combobox'], targetAttr: 'value', event: 'change' },
  ],
  // Angular ngModel / reactive forms
  valueAccessorConfigs: [
    { elementSelectors: ['art-select', 'art-combobox'], event: 'change', targetAttr: 'value', type: 'select' },
  ],
});
