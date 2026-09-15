import { expect, test } from '@artui/e2e';

test.describe('art-item', () => {
  test('outline and default share one box; a linked item is a tab stop with a ring', async ({ page }) => {
    await page.setContent(`<div style="width:320px"><art-item id="a"><p slot="title">T</p></art-item><art-item id="b" variant="outline"><p slot="title">T</p></art-item><art-item id="c" variant="outline" href="#x"><p slot="title">L</p></art-item></div>`);
    const a = await page.locator('#a').boundingBox();
    const b = await page.locator('#b').boundingBox();
    expect(a!.height).toBe(b!.height);
    await page.keyboard.press('Tab');
    await expect(page.locator('#c a')).toBeFocused();
    expect(await page.locator('#c a').evaluate((el) => getComputedStyle(el).boxShadow)).not.toBe('none');
  });
  test('an icon in media is boxed at space-8; an image thumbnail at space-10', async ({ page }) => {
    await page.setContent(`<art-item><art-icon slot="media"><svg viewBox="0 0 24 24"><path d="M0 0h24v24H0z"/></svg></art-icon><p slot="title">T</p></art-item><art-item><img slot="media" alt="" src="data:image/gif;base64,R0lGODlhAQABAAAAACw="><p slot="title">T</p></art-item>`);
    expect((await page.locator('art-icon[slot="media"]').boundingBox())!.width).toBe(32);
    expect((await page.locator('img[slot="media"]').boundingBox())!.width).toBe(40);
  });
});
