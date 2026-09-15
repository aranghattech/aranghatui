import { expect, test } from '@artui/e2e';

test.describe('art-spinner', () => {
  test('spins at the icon size and is announced as a status', async ({ page }) => {
    await page.setContent(`<art-spinner></art-spinner>`);
    const svg = page.locator('art-spinner svg');
    expect(await svg.evaluate((el) => getComputedStyle(el).width)).toBe('16px'); // not boundingBox: rotation inflates it
    expect(await svg.evaluate((el) => getComputedStyle(el).animationName)).toBe('spin');
    await expect(page.locator('art-spinner')).toHaveAttribute('role', 'status');
    await expect(page.locator('art-spinner')).toHaveAccessibleName('Loading');
  });
});
