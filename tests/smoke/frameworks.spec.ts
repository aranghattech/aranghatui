import { expect, test } from '@playwright/test';
import { readFileSync, readdirSync } from 'node:fs';
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
const catalog = JSON.parse(readFileSync(resolve(import.meta.dirname, '../../tooling/catalog.json'), 'utf8'));

const recipes = new Set<string>(Object.values(catalog.tiers as Record<string, { components: { tag: string; recipe?: boolean; imperative?: boolean }[] }>).flatMap((t) => t.components.filter((c) => c.recipe || c.imperative).map((c) => c.tag)));

for (const [framework, port] of Object.entries(apps)) {
  test.describe(framework, () => {
    for (const id of ids) {
      test(id, async ({ page }) => {
        const errors: string[] = [];
        page.on('pageerror', (e) => errors.push(e.message));
        await page.goto(`http://localhost:${port}/`);
        const section = page.locator(`[data-sample="${id}"]`);
        await expect(section).toBeVisible();
        // A recipe (Data Table, ADR-0006) or an imperative API (Common Dialogs) has no element of its own: its first upgraded component stands in.
        const tag = `art-${id.split('/')[0]}`;
        const el = recipes.has(id.split('/')[0]!) ? section.locator('.hydrated').first() : section.locator(tag).first();
        await expect(el).toBeAttached();
        // upgraded and rendered: a shadow root for shadow components, light-DOM children for the
        // light-DOM ones (art-table, art-typography; ADR-0021)
        await expect.poll(() => el.evaluate((n) => n.matches(':defined') && (!!n.shadowRoot || n.childElementCount > 0))).toBe(true);
        expect(errors).toEqual([]);
      });
    }
  });
}
