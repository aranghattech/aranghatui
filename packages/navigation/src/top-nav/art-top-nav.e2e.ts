import { expect, test } from '@artui/e2e';

const nav = (attrs = '') => `<art-top-nav${attrs}><span slot="brand">Acme</span><a href="#a">Alpha</a><a href="#b">Beta</a><button slot="end">Sign in</button></art-top-nav><p style="height:600px">Page</p>`;

test.describe('art-top-nav', () => {
  test('collapsed: the menu button opens the panel, Enter focuses the first link, Escape and outside clicks close it', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.setContent(nav(' collapse="always"'));
    const top = page.locator('art-top-nav');
    const toggle = top.locator('[part="toggle"]');
    const links = top.locator('[part="links"]');
    const openChange = await page.spyOnEvent('open-change');
    await expect(links).toBeHidden();
    await toggle.focus();
    await page.keyboard.press('Enter');
    await expect(top).toHaveAttribute('open', '');
    await expect(links).toBeVisible();
    await expect(page.locator('a[href="#a"]')).toBeFocused();
    expect(openChange.lastEvent.detail.open).toBe(true);
    await page.keyboard.press('Escape');
    await expect(top).not.toHaveAttribute('open');
    await expect(toggle).toBeFocused();
    await toggle.click();
    await expect(links).toBeVisible();
    await page.mouse.click(600, 500);
    await expect(top).not.toHaveAttribute('open');
    await expect(links).toBeHidden();
  });

  test('collapse="auto" follows the md breakpoint', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.setContent(nav());
    const top = page.locator('art-top-nav');
    await expect(top.locator('[part="toggle"]')).toHaveCount(0);
    await expect(page.locator('a[href="#a"]')).toBeVisible();
    await page.setViewportSize({ width: 390, height: 720 });
    await expect(top).toHaveAttribute('data-collapsed', '');
    await expect(top.locator('[part="toggle"]')).toBeVisible();
    await expect(page.locator('a[href="#a"]')).toBeHidden();
  });
});
