import type { Config } from '@stencil/core';
import { createTierConfig } from '@artui/stencil-config';

// Framework binding metadata (v-model, ngModel) lives in @artui/stencil-config/models.
export const config: Config = createTierConfig({ tier: 'widgets' });
