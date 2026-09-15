import { expect, test } from '@artui/e2e';

test.describe('art-kbd', () => {
  test('keys are 20px tall, at least 20px wide, and inert to the pointer', async ({ page }) => {
    await page.setContent(`<art-kbd-group><art-kbd>⌘</art-kbd><art-kbd>Enter</art-kbd></art-kbd-group>`);
    const a = await page.locator('art-kbd').nth(0).locator('kbd').boundingBox();
    const b = await page.locator('art-kbd').nth(1).locator('kbd').boundingBox();
    expect(a!.height).toBe(20);
    expect(a!.width).toBeGreaterThanOrEqual(20);
    expect(b!.width).toBeGreaterThan(a!.width);
    expect(await page.locator('art-kbd kbd').first().evaluate((el) => getComputedStyle(el).pointerEvents)).toBe('none');
  });
});
