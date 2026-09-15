import { expect, test } from '@artui/e2e';

test.describe('art-progress', () => {
  test('exposes progressbar semantics and paints the fill proportionally', async ({ page }) => {
    await page.setContent(`<div style="width:200px"><art-progress value="25" aria-label="Upload"></art-progress></div>`);
    const p = page.locator('art-progress progress');
    await expect(p).toHaveRole('progressbar');
    await expect(p).toHaveAccessibleName('Upload');
    expect(await p.evaluate((el: HTMLProgressElement) => el.position)).toBe(0.25);
    const box = await p.boundingBox();
    expect(box!.width).toBe(200);
    expect(box!.height).toBe(8);
    await page.locator('art-progress').evaluate((el: any) => (el.value = 75));
    await expect.poll(() => p.evaluate((el: HTMLProgressElement) => el.position)).toBe(0.75);
  });
});
