import { expect, test } from '@artui/e2e';

test.describe('art-separator', () => {
  test('draws a one-border-width rule; vertical stretches to its flex row', async ({ page }) => {
    await page.setContent(`<art-separator></art-separator><div style="display:flex;height:40px"><span>a</span><art-separator orientation="vertical"></art-separator><span>b</span></div>`);
    const h = await page.locator('art-separator').first().locator('hr').boundingBox();
    const v = await page.locator('art-separator').nth(1).locator('hr').boundingBox();
    expect(h!.height).toBe(1);
    expect(v!.width).toBe(1);
    expect(Math.round(v!.height)).toBe(40);
    expect(await page.locator('art-separator').first().locator('hr').getAttribute('role')).toBe('none');
  });
});
