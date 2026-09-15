import { expect, test } from '@artui/e2e';

test.describe('art-badge', () => {
  test('outline and filled badges share one box; a linked badge is keyboard focusable', async ({ page }) => {
    await page.setContent(`<art-badge>A</art-badge><art-badge variant="outline">A</art-badge><art-badge href="#x" variant="outline">Link</art-badge>`);
    const a = await page.locator('art-badge').nth(0).locator('[part="badge"]').boundingBox();
    const b = await page.locator('art-badge').nth(1).locator('[part="badge"]').boundingBox();
    expect(a!.height).toBe(b!.height);
    expect(a!.width).toBe(b!.width);
    await page.keyboard.press('Tab');
    await expect(page.locator('art-badge a')).toBeFocused();
    expect(await page.locator('art-badge a').evaluate((el) => getComputedStyle(el).boxShadow)).not.toBe('none');
  });
});
