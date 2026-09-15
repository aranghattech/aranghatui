import { expect, test } from '@artui/e2e';

test.describe('art-aspect-ratio', () => {
  test('the box follows the ratio and the child fills it', async ({ page }) => {
    await page.setContent(`<div style="width:320px"><art-aspect-ratio ratio="16/9"><div id="c"></div></art-aspect-ratio></div>`);
    const box = await page.locator('art-aspect-ratio').boundingBox();
    expect(box!.width).toBe(320);
    expect(box!.height).toBe(180);
    const child = await page.locator('#c').boundingBox();
    expect(child!.width).toBe(320);
    expect(child!.height).toBe(180);
  });
});
