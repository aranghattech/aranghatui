import { expect, test } from '@playwright/test';
import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';

/**
 * Cross-framework smoke (CLAUDE.md §9): every sample in apps/sandbox/html must
 * exist and render (a shadow root is attached) in all four sandbox apps.
 */
const htmlSamples = resolve(import.meta.dirname, '../../apps/sandbox/html/src/samples');
const ids = readdirSync(htmlSamples, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .flatMap((d) => readdirSync(resolve(htmlSamples, d.name)).map((f) => `${d.name}/${f.replace(/\.html$/, '')}`));

const apps = { html: 4001, react: 4002, vue: 4003, angular: 4004 } as const;

for (const [framework, port] of Object.entries(apps)) {
  test.describe(framework, () => {
    for (const id of ids) {
      test(id, async ({ page }) => {
        const errors: string[] = [];
        page.on('pageerror', (e) => errors.push(e.message));
        await page.goto(`http://localhost:${port}/`);
        const section = page.locator(`[data-sample="${id}"]`);
        await expect(section).toBeVisible();
        const tag = `art-${id.split('/')[0]}`;
        const el = section.locator(tag).first();
        await expect(el).toBeAttached();
        await expect.poll(() => el.evaluate((n) => !!n.shadowRoot && n.shadowRoot.childElementCount >= 0)).toBe(true);
        expect(errors).toEqual([]);
      });
    }
  });
}
