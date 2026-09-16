import type { Config } from '@stencil/core';
import { createHydrateConfig } from '@artui/stencil-config';

// One hydrate app for every tier (ADR-0023); sources are collected by scripts/collect.mjs.
export const config: Config = createHydrateConfig();
