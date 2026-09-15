import type { Config } from '@stencil/core';
import { createTierConfig } from '@artui/stencil-config';

export const config: Config = createTierConfig({
  tier: 'base',
  // Vue v-model (CLAUDE.md §3a)
  componentModels: [
    { elements: ['art-input', 'art-textarea', 'art-native-select', 'art-radio-group', 'art-toggle-group'], targetAttr: 'value', event: 'change' },
    { elements: ['art-checkbox', 'art-switch'], targetAttr: 'checked', event: 'change' },
    { elements: ['art-toggle'], targetAttr: 'pressed', event: 'change' },
    { elements: ['art-slider', 'art-input-otp'], targetAttr: 'value', event: 'input' },
  ],
  // Angular ngModel / reactive forms (one config per accessor type; Toggle binds [pressed] + (change) instead)
  valueAccessorConfigs: [
    { elementSelectors: ['art-input', 'art-textarea', 'art-input-otp'], event: 'input', targetAttr: 'value', type: 'text' },
    { elementSelectors: ['art-native-select', 'art-radio-group', 'art-toggle-group'], event: 'change', targetAttr: 'value', type: 'select' },
    { elementSelectors: ['art-checkbox', 'art-switch'], event: 'change', targetAttr: 'checked', type: 'boolean' },
    { elementSelectors: ['art-slider'], event: 'input', targetAttr: 'value', type: 'number' },
  ],
});
