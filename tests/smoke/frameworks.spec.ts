import { expect, test } from '@playwright/test';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

/**
 * Cross-framework smoke (CLAUDE.md §9): every sample in apps/sandbox/html must exist and render
 * in all four sandbox apps.
 *
 * One page load per framework, not one per sample. Each app renders every sample on a single
 * page, so navigating 345 times to inspect one section each meant re-parsing the whole app 345
 * times — 29 of the 57 minutes a CI run took, and the Angular app is 8 MB prerendered (ADR-0023).
 * The check now runs inside the page and returns every sample that failed, so one bad sample
 * still names itself instead of hiding behind the first failure.
 */
const htmlSamples = resolve(import.meta.dirname, '../../apps/sandbox/html/src/samples');
const ids = readdirSync(htmlSamples, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .flatMap((d) => readdirSync(resolve(htmlSamples, d.name)).map((f) => `${d.name}/${f.replace(/\.html$/, '')}`));

const apps = { html: 4001, react: 4002, vue: 4003, angular: 4004 } as const;
const catalog = JSON.parse(readFileSync(resolve(import.meta.dirname, '../../tooling/catalog.json'), 'utf8'));

/** A recipe (Data Table, ADR-0006) or an imperative API (Common Dialogs) has no element of its own: its first upgraded component stands in. */
const recipes = new Set<string>(
  Object.values(catalog.tiers as Record<string, { components: { tag: string; recipe?: boolean; imperative?: boolean }[] }>).flatMap((t) =>
    t.components.filter((c) => c.recipe || c.imperative).map((c) => c.tag),
  ),
);

const samples = ids.map((id) => {
  const component = id.split('/')[0]!;
  return { id, tag: `art-${component}`, recipe: recipes.has(component) };
});

/** Runs in the page: returns the samples that are missing, absent or not upgraded yet. */
const check = (list: { id: string; tag: string; recipe: boolean }[]) =>
  list.flatMap(({ id, tag, recipe }) => {
    const section = document.querySelector(`[data-sample="${id}"]`);
    if (!section) return [`${id}: no [data-sample] section`];
    if (!(section as HTMLElement).checkVisibility()) return [`${id}: section not visible`];
    const el = recipe ? section.querySelector('.hydrated') : section.querySelector(tag);
    if (!el) return [`${id}: no ${recipe ? '.hydrated element' : `<${tag}>`} in the section`];
    // upgraded and rendered: a shadow root for shadow components, light-DOM children for the
    // light-DOM ones (art-table, art-typography; ADR-0021)
    const ready = el.matches(':defined') && (!!el.shadowRoot || el.childElementCount > 0);
    return ready ? [] : [`${id}: <${el.tagName.toLowerCase()}> has not upgraded`];
  });

for (const [framework, port] of Object.entries(apps)) {
  test(`${framework} renders all ${samples.length} samples`, async ({ page }) => {
    test.setTimeout(120_000); // one page load plus the upgrade poll below, not the default per-test budget
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(`${e.message}`));
    await page.goto(`http://localhost:${port}/`);

    // Poll the whole page rather than each sample: the last elements upgrade well after load.
    let failures: string[] = [];
    const deadline = Date.now() + 30_000;
    do {
      failures = await page.evaluate(check, samples);
      if (failures.length === 0) break;
      await page.waitForTimeout(250);
    } while (Date.now() < deadline);

    expect(failures, `${framework}: ${failures.length} of ${samples.length} samples did not render`).toEqual([]);
    expect(errors, `${framework}: page errors`).toEqual([]);
  });
}
