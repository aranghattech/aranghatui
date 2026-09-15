import { expect, test } from '@artui/e2e';

test.describe('art-scroll-area', () => {
  test('the viewport scrolls natively and is keyboard reachable', async ({ page }) => {
    await page.setContent(`<art-scroll-area style="height:100px;width:200px">${Array.from({ length: 30 }, (_, i) => `<p>row ${i}</p>`).join('')}</art-scroll-area>`);
    const vp = page.locator('art-scroll-area [part="viewport"]');
    expect(await vp.evaluate((el) => el.scrollHeight > el.clientHeight)).toBe(true);
    expect(await vp.evaluate((el) => getComputedStyle(el).overflowY)).toBe('auto');
    await page.keyboard.press('Tab');
    await expect(vp).toBeFocused();
    await page.keyboard.press('End');
    await expect.poll(() => vp.evaluate((el) => el.scrollTop)).toBeGreaterThan(0);
  });
});
