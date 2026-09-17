import { expect } from '@playwright/test';
import { createConfig, matchers } from '@stencil/playwright';

expect.extend(matchers);

export default createConfig({
  testMatch: '**/*.e2e.ts',
  retries: 0,
  use: { colorScheme: 'light', actionTimeout: 5_000 },
  webServer: {
    // The lazy www build must bundle lower tiers (no bundler in the browser); dist is untouched (empty:false).
    env: { ARTUI_BUNDLE_PEERS: '1' },
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
