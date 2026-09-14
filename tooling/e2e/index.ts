import { test as stencilTest } from '@stencil/playwright';

export { expect } from '@playwright/test';

/**
 * @stencil/playwright's `page.goto` waits for `window.testAppLoaded === true`, but
 * nothing in Stencil 4.45 sets that flag and the adapter passes its timeout in the
 * `arg` position, so `setContent` never resolves. Set the flag ourselves on Stencil's
 * `appload` event (fired once the lazy loader has hydrated the initial components).
 * `actionTimeout` in playwright.config.ts is the safety net.
 */
export const test = stencilTest.extend({
  page: async ({ page }, use) => {
    await page.addInitScript(() => {
      window.addEventListener('appload', () => {
        (window as any).testAppLoaded = true;
      });
    });
    await use(page);
  },
});
