import { expect, test } from '@artui/e2e';

test.describe('art-avatar', () => {
  test('sizes follow the scale and the fallback replaces a broken image', async ({ page }) => {
    await page.setContent(`<art-avatar size="sm" alt="">A</art-avatar><art-avatar alt="">B</art-avatar><art-avatar size="lg" alt="">C</art-avatar><art-avatar id="x" src="/nope.png" alt="Broken">X</art-avatar>`);
    const widths = await page.locator('art-avatar').evaluateAll((els) => els.map((e) => e.getBoundingClientRect().width));
    expect(widths.slice(0, 3)).toEqual([24, 32, 40]);
    await expect(page.locator('#x [part="fallback"]')).toBeVisible();
    await expect(page.locator('#x img')).toHaveCount(0);
  });
});
