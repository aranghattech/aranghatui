import { expect, test } from '@artui/e2e';

test.describe('art-marker', () => {
  test('separator centres its label between two rules; border draws a bottom rule; link is focusable', async ({ page }) => {
    await page.setContent(`<div style="width:400px"><art-marker id="s" variant="separator">Today</art-marker><art-marker id="b" variant="border">Row</art-marker><art-marker id="l" href="#x">Link</art-marker></div>`);
    const host = await page.locator('#s').boundingBox();
    const content = await page.locator('#s [part="content"]').boundingBox();
    expect(Math.abs(content!.x + content!.width / 2 - (host!.x + host!.width / 2))).toBeLessThan(2);
    expect(await page.locator('#s [part="marker"]').evaluate((el) => getComputedStyle(el, '::before').height)).toBe('1px');
    expect(await page.locator('#b [part="marker"]').evaluate((el) => getComputedStyle(el).borderBottomWidth)).toBe('1px');
    await page.keyboard.press('Tab');
    await expect(page.locator('#l a')).toBeFocused();
  });
});
