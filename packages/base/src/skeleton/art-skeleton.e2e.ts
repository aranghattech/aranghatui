import { expect, test } from '@artui/e2e';

test.describe('art-skeleton', () => {
  test('fills the host size and pulses', async ({ page }) => {
    await page.setContent(`<art-skeleton style="width: 200px; height: 16px"></art-skeleton>`);
    const box = await page.locator('art-skeleton [part="skeleton"]').boundingBox();
    expect(box!.width).toBe(200);
    expect(box!.height).toBe(16);
    expect(await page.locator('art-skeleton [part="skeleton"]').evaluate((el) => getComputedStyle(el).animationName)).toBe('pulse');
  });
});
