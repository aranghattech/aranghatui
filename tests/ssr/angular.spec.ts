import { expect, test } from '@playwright/test';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

/**
 * Angular SSR end to end (ADR-0023): the Angular sandbox is prerendered by Angular's server
 * renderer and post-processed by @aranghat/hydrate (apps/sandbox/angular/scripts/ssr-postprocess.mjs),
 * then hydrated by Angular (`provideClientHydration`) and by the `artui-ssr` client. Angular reports
 * a DOM mismatch as a console error (NG05xx); a duplicated artui render would grow a shadow root.
 */
const url = 'http://localhost:4004/';

/**
 * Samples whose Angular template binds an input as a *property* (`[icon]="mail"`, `[page]="3"`,
 * questionnaire items…): Angular's server renderer sets properties on the element object, so they
 * never reach the markup and the element renders its defaults on the server and the real thing on the
 * client. Documented in the SSR guide; attribute-bound samples must hydrate without any re-render.
 */
const samplesDir = resolve(import.meta.dirname, '../../apps/sandbox/angular/src/app/samples');
const propertyBound = new Set(
  readdirSync(samplesDir, { withFileTypes: true }).filter((d) => d.isDirectory()).flatMap((d) =>
    readdirSync(resolve(samplesDir, d.name)).filter((f) => f.endsWith('.ts') && /\[(?!attr\.)[a-zA-Z]+\]=/.test(readFileSync(resolve(samplesDir, d.name, f), 'utf8'))).map((f) => `${d.name}/${f.replace(/\.ts$/, '')}`),
  ),
);

/** Shadow-root element counts keyed by host order, with the sample each host belongs to. */
const shadowCounts = () => {
  const out: Record<string, { n: number; sample: string }> = {};
  const sampleOf = (el: Element): string => {
    let node: Node | null = el;
    while (node) {
      if (node instanceof Element && node.hasAttribute('data-sample')) return node.getAttribute('data-sample')!;
      node = node.parentNode ?? (node instanceof ShadowRoot ? node.host : null);
    }
    return '?';
  };
  const walk = (root: ParentNode) => {
    for (const el of Array.from(root.querySelectorAll('*'))) {
      if (el.shadowRoot) {
        out[`${el.tagName.toLowerCase()}#${Object.keys(out).length}`] = { n: el.shadowRoot.querySelectorAll(':not(style)').length, sample: sampleOf(el) };
        walk(el.shadowRoot);
      }
    }
  };
  walk(document);
  return out;
};

test('the prerendered page carries declarative shadow roots and Angular hydration markers', async ({ request }) => {
  const html = await (await request.get(url)).text();
  expect((html.match(/<template shadowrootmode="open"/g) ?? []).length).toBeGreaterThan(100);
  expect(html).toMatch(/<app-root[^>]* ngh="/);
  expect(html).toContain('<art-button');
});

test('Angular and artui hydrate the prerendered page without errors or duplicated content', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.route('**/*.js', (route) => route.abort());
  await page.goto(url);
  const before = await page.evaluate(shadowCounts);
  expect(Object.keys(before).length).toBeGreaterThan(100);
  expect(propertyBound.size, 'property-bound samples are the documented exception, not the rule').toBeLessThan(30);

  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  await page.unroute('**/*.js');
  await page.goto(url);
  // Angular is hydrated once the root loses its hydration marker; artui once every element is defined
  await expect(page.locator('app-root')).not.toHaveAttribute('ngh', /.*/, { timeout: 30_000 });
  await expect.poll(() => page.evaluate(() => Array.from(document.querySelectorAll('[data-sample] art-button, [data-sample] art-input')).every((el) => el.matches(':defined'))), { timeout: 30_000 }).toBe(true);
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
  const after = await page.evaluate(shadowCounts);
  expect(Object.keys(after), 'the same shadow roots').toEqual(Object.keys(before));
  const strict = Object.entries(after).filter(([, v]) => !propertyBound.has(v.sample));
  expect(strict.length, 'attribute-bound samples under test').toBeGreaterThan(100);
  for (const [key, { n, sample }] of strict) expect(n, `${key} (${sample}): no re-render after hydration`).toBeLessThanOrEqual(before[key]!.n);
  expect(errors.filter((e) => !/Failed to load resource/.test(e))).toEqual([]);
});
