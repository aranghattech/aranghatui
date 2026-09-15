import { expect, test } from '@artui/e2e';

test.describe('art-breadcrumb', () => {
  test('separators show between items only; links are in the tab order', async ({ page }) => {
    await page.setContent(`<art-breadcrumb><art-breadcrumb-item><a href="#a">A</a></art-breadcrumb-item><art-breadcrumb-item><a href="#b">B</a></art-breadcrumb-item><art-breadcrumb-item current>C</art-breadcrumb-item></art-breadcrumb>`);
    const seps = page.locator('art-breadcrumb-item [part="separator"]');
    await expect(seps.nth(0)).toBeVisible();
    await expect(seps.nth(1)).toBeVisible();
    await expect(seps.nth(2)).toBeHidden();
    await page.locator('a[href="#a"]').focus();
    await page.keyboard.press('Tab');
    await expect(page.locator('a[href="#b"]')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.locator('a')).toHaveCount(2); // the current page is not a link
  });
});
