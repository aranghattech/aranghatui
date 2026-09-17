import { expect, test } from '@artui/e2e';

const icon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>';
const nav = (attrs = '') => `<art-nav-rail${attrs} style="height:520px">
  <art-nav-rail-item slot="rail" label="Overview" href="#overview">${icon}</art-nav-rail-item>
  <art-nav-rail-item slot="rail" label="Portfolio" href="#portfolio" active>${icon}</art-nav-rail-item>
  <button slot="header" type="button">Locally inc.</button>
  <art-nav-section label="Portfolio">
    <art-nav-link href="#dashboard"><span slot="icon">${icon}</span>Dashboard</art-nav-link>
    <art-nav-link href="#companies" active><span slot="icon">${icon}</span>Companies</art-nav-link>
    <art-nav-link disabled badge="Soon"><span slot="icon">${icon}</span>Forecast</art-nav-link>
  </art-nav-section>
</art-nav-rail>`;

test.describe('art-nav-rail', () => {
  test('the toggle collapses the panel, tells the sections and links, and reports the choice', async ({ page }) => {
    await page.setContent(nav());
    const rail = page.locator('art-nav-rail');
    const panel = rail.locator('[part="panel"]');
    const spy = await page.spyOnEvent('collapsed-change');
    const wide = (await panel.boundingBox())!.width;

    await rail.locator('[part="toggle"]').click();
    await expect.poll(async () => Math.round((await panel.boundingBox())!.width)).toBeLessThan(wide);
    await expect(rail).toHaveAttribute('collapsed', '');
    await expect(page.locator('art-nav-section')).toHaveAttribute('collapsed', '');
    await expect(page.locator('art-nav-link').first()).toHaveAttribute('collapsed', '');
    // the label is clipped, so the section heading goes with it
    await expect(page.locator('art-nav-section').locator('[part="label"]')).toBeHidden();
    await expect.poll(() => spy.lastEvent?.detail?.collapsed).toBe(true);

    await rail.locator('[part="toggle"]').click();
    await expect(rail).not.toHaveAttribute('collapsed', '');
    await expect(page.locator('art-nav-link').first()).not.toHaveAttribute('collapsed', '');
  });

  test('a collapsed link shows its label in a tooltip on hover and on keyboard focus', async ({ page }) => {
    await page.setContent(nav(' collapsed'));
    const link = page.locator('art-nav-link').first();
    const tip = link.locator('[part="tooltip"]');
    await expect(tip).toBeHidden();
    await link.locator('[part="control"]').hover();
    await expect(tip).toBeVisible();
    await expect(tip).toHaveText('Dashboard');
    await page.mouse.move(0, 0);
    await expect(tip).toBeHidden();
  });

  test('the rail comes before the panel in the tab order and the current rows are announced', async ({ page }) => {
    await page.setContent(nav());
    const name = () => page.evaluate(() => {
      const el = document.activeElement?.shadowRoot?.activeElement ?? document.activeElement;
      return [el?.tagName.toLowerCase(), el?.getAttribute('aria-label') ?? el?.textContent?.trim()].join(':');
    });
    await page.keyboard.press('Tab');
    expect(await name()).toBe('a:Overview');
    await page.keyboard.press('Tab');
    expect(await name()).toBe('a:Portfolio');
    await page.keyboard.press('Tab');
    expect(await name()).toBe('button:Locally inc.');

    await expect(page.locator('art-nav-rail-item[active] a')).toHaveAttribute('aria-current', 'page');
    await expect(page.locator('art-nav-link[active] a')).toHaveAttribute('aria-current', 'page');
    // a disabled destination is never a link, and the badge says why
    await expect(page.locator('art-nav-link[disabled] a')).toHaveCount(0);
    await expect(page.locator('art-nav-link[disabled] [part="badge"]')).toHaveText('Soon');
  });
});
