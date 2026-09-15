import { test as stencilTest } from '@stencil/playwright';

export { expect } from '@playwright/test';

/**
 * @stencil/playwright's `page.goto` waits for `window.testAppLoaded === true`, but
 * nothing in Stencil 4.45 sets that flag and the adapter passes its timeout in the
 * `arg` position, so `setContent` never resolves. Set the flag ourselves on Stencil's
 * `appload` event (fired once the lazy loader has hydrated the initial components).
 * `actionTimeout` in playwright.config.ts is the safety net.
 *
 * `setContent` also loads the token stylesheet (copied into `www/` by the tier config):
 * without it every token-derived size is 0 and geometry-based tests (drag, layout) are void.
 */
export const test = stencilTest.extend({
  page: async ({ page }, use) => {
    await page.addInitScript(() => {
      window.addEventListener('appload', () => {
        (window as any).testAppLoaded = true;
      });
    });
    const original = page.setContent.bind(page);
    page.setContent = ((html: string, options?: Parameters<typeof original>[1]) => {
      const head = `<link rel="stylesheet" href="/aranghat.css">`;
      const full = /<html/i.test(html) ? html.replace(/<head[^>]*>/i, (m) => `${m}${head}`) : `<html><head>${head}</head><body>${html}</body></html>`;
      return original(full, options);
    }) as typeof page.setContent;
    await use(page);
  },
});
