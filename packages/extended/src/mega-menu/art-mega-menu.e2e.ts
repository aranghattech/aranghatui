import { expect, test } from '@artui/e2e';
import type { Page } from '@playwright/test';

const group = (label: string, ids: string[]) =>
  `<art-mega-menu-group label="${label}">${ids.map((id) => `<art-mega-menu-link id="${id}" href="#${id}">${id}<span slot="description">About ${id}</span></art-mega-menu-link>`).join('')}</art-mega-menu-group>`;
const menu = (barAttrs = '', itemAttrs = '') => `<div style="padding:24px"><art-mega-menu${barAttrs}>
  <art-mega-menu-item label="Products"${itemAttrs}>${group('Build', ['p1', 'p2'])}${group('Observe', ['p3'])}${group('Secure', ['p4'])}</art-mega-menu-item>
  <art-mega-menu-item label="Company">${group('Company', ['c1'])}</art-mega-menu-item>
  <art-mega-menu-item label="Docs" href="#docs"></art-mega-menu-item>
</art-mega-menu><button id="out">out</button></div>`;

const trigger = (page: Page, i: number) => page.locator('art-mega-menu-item').nth(i).locator('[part="trigger"]');
const panel = (page: Page, i = 0) => page.locator('art-mega-menu-item').nth(i).locator('[part="content"]');
/** Waits for the enter motion so a measured box is the settled one. */
const settled = (page: Page, i = 0) =>
  page.locator('art-mega-menu-item').nth(i).evaluate((el) => Promise.all(el.shadowRoot!.querySelector('[part="content"]')!.getAnimations().map((a) => a.finished)));

test.describe('art-mega-menu', () => {
  test('↓ opens on the first link, ↓ ↑ Home End walk the panel, ↑ from the first returns, Escape closes', async ({ page }) => {
    await page.setContent(menu());
    const spy = await page.spyOnEvent('open-change');
    await trigger(page, 0).focus();
    await page.keyboard.press('ArrowDown');
    await expect(page.locator('art-mega-menu-item').first()).toHaveAttribute('open');
    await expect(page.locator('#p1')).toBeFocused();
    await expect.poll(() => spy.lastEvent?.detail?.open).toBe(true);
    await page.keyboard.press('ArrowDown');
    await expect(page.locator('#p2')).toBeFocused();
    await page.keyboard.press('End');
    await expect(page.locator('#p4')).toBeFocused();
    await page.keyboard.press('Home');
    await expect(page.locator('#p1')).toBeFocused();
    await page.keyboard.press('ArrowUp');
    await expect(trigger(page, 0)).toBeFocused();
    await expect(page.locator('art-mega-menu-item').first()).toHaveAttribute('open');
    await page.keyboard.press('ArrowDown'); // on an open trigger: back into the panel
    await expect(page.locator('#p1')).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(page.locator('art-mega-menu-item').first()).not.toHaveAttribute('open');
    await expect(trigger(page, 0)).toBeFocused();
    await expect.poll(() => spy.lastEvent?.detail?.open).toBe(false);
  });

  test('← → move along the bar and wrap; opening one panel closes the other; outside click and Tab out close', async ({ page }) => {
    await page.setContent(menu());
    const items = page.locator('art-mega-menu-item');
    await trigger(page, 0).focus();
    await page.keyboard.press('ArrowRight');
    await expect(trigger(page, 1)).toBeFocused();
    await page.keyboard.press('ArrowRight');
    await expect(trigger(page, 2)).toBeFocused(); // the plain link
    await page.keyboard.press('ArrowRight');
    await expect(trigger(page, 0)).toBeFocused();

    await trigger(page, 0).click();
    await expect(items.nth(0)).toHaveAttribute('open');
    await trigger(page, 1).click();
    await expect(items.nth(1)).toHaveAttribute('open');
    await expect(items.nth(0)).not.toHaveAttribute('open');
    await page.locator('#out').click();
    await expect(items.nth(1)).not.toHaveAttribute('open');

    // Tab through the last link leaves the panel, and the panel closes behind it
    await trigger(page, 1).focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('#c1')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(trigger(page, 2)).toBeFocused();
    await expect(items.nth(1)).not.toHaveAttribute('open');
  });

  test('hovering opens the panel; a click that lands on the hovered trigger keeps it open', async ({ page }) => {
    await page.setContent(menu());
    const item = page.locator('art-mega-menu-item').first();
    await trigger(page, 0).hover();
    await expect(item).toHaveAttribute('open');
    await trigger(page, 0).click();
    await expect(item).toHaveAttribute('open');
    await trigger(page, 0).click();
    await expect(item).not.toHaveAttribute('open');
  });

  test('an icon trigger is a named, square button that opens and closes like any other', async ({ page }) => {
    await page.setContent(`<art-mega-menu><art-mega-menu-item label="Menu" hide-chevron><svg slot="trigger" viewBox="0 0 24 24"><path d="M4 6h16"/></svg>${group('Build', ['p1'])}</art-mega-menu-item></art-mega-menu>`);
    const button = page.getByRole('button', { name: 'Menu' });
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    const box = (await button.boundingBox())!;
    expect(Math.round(box.width)).toBe(Math.round(box.height));
    await button.focus();
    await page.keyboard.press('ArrowDown');
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('#p1')).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(button).toBeFocused();
    await expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  // One setContent per test: @stencil/playwright serves it at `baseURL#`, so a second call is a
  // same-document hash change that keeps the previous DOM.
  test('a hugging panel hangs from its trigger', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.setContent(menu());
    await trigger(page, 0).click();
    await settled(page);
    const t = (await trigger(page, 0).boundingBox())!;
    const hug = (await panel(page).boundingBox())!;
    expect(Math.round(hug.x)).toBe(Math.round(t.x));
    expect(hug.y).toBeGreaterThan(t.y + t.height);
    expect(hug.width).toBeLessThan(1280);
  });

  test('a full-width panel spans the viewport under the bar, its content in the centred container', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.setContent(menu(' full-width'));
    await trigger(page, 0).click();
    await settled(page);
    const bar = (await page.locator('art-mega-menu').boundingBox())!;
    const full = (await panel(page).boundingBox())!;
    const vw = await page.evaluate(() => document.documentElement.clientWidth);
    expect(full.x).toBe(0);
    expect(Math.round(full.width)).toBe(vw);
    expect(full.y).toBeGreaterThanOrEqual(bar.y + bar.height);
    const inner = (await page.locator('art-mega-menu-item').first().locator('[part="inner"]').boundingBox())!;
    expect(Math.round(inner.width)).toBe(72 * 16); // container.6xl
    expect(Math.round(inner.x)).toBe(Math.round((vw - inner.width) / 2));
  });

  test('full-width-content fills the panel', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.setContent(menu(' full-width full-width-content'));
    await trigger(page, 0).click();
    await settled(page);
    const full = (await panel(page).boundingBox())!;
    const inner = (await page.locator('art-mega-menu-item').first().locator('[part="inner"]').boundingBox())!;
    expect(Math.round(inner.width)).toBe(Math.round(full.width));
  });

  const boxes = (page: Page) => Promise.all([0, 1, 2].map(async (i) => (await page.locator('art-mega-menu-group').nth(i).boundingBox())!));

  test('rows with max-rows fill top to bottom, then start a new column', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.setContent(menu('', ' layout="rows" max-rows="2"'));
    await trigger(page, 0).click();
    await settled(page);
    const [a, b, c] = await boxes(page);
    expect(b!.x).toBe(a!.x); // second group under the first
    expect(b!.y).toBeGreaterThan(a!.y);
    expect(c!.x).toBeGreaterThan(a!.x); // third starts the next column
    expect(c!.y).toBe(a!.y);
  });

  test('columns with max-columns fill left to right, then start a new line', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.setContent(menu('', ' max-columns="2"'));
    await trigger(page, 0).click();
    await settled(page);
    const [a, b, c] = await boxes(page);
    expect(b!.y).toBe(a!.y); // second group beside the first
    expect(b!.x).toBeGreaterThan(a!.x);
    expect(c!.x).toBe(a!.x); // third starts the next line
    expect(c!.y).toBeGreaterThan(a!.y);
  });

  test('below the md breakpoint the groups stack in one column', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 720 });
    await page.setContent(menu('', ' max-columns="3"'));
    await trigger(page, 0).click();
    await settled(page);
    const xs = await Promise.all([0, 1, 2].map(async (i) => (await page.locator('art-mega-menu-group').nth(i).boundingBox())!.x));
    expect(new Set(xs).size).toBe(1);
    const p = (await panel(page).boundingBox())!;
    expect(p.x + p.width).toBeLessThanOrEqual(390);
  });
});
