import { expect, test } from '@artui/e2e';

test.describe('art-card', () => {
  test('a content-only card is shorter than one with header and footer; the action sits at the end of the header', async ({ page }) => {
    await page.setContent(`<div style="width:360px"><art-card id="a"><p>c</p></art-card><art-card id="b"><h3 slot="title">T</h3><p slot="description">D</p><button slot="action">x</button><p>c</p><button slot="footer">ok</button></art-card></div>`);
    const a = await page.locator('#a').boundingBox();
    const b = await page.locator('#b').boundingBox();
    expect(a!.height).toBeLessThan(b!.height);
    const action = await page.locator('[slot="action"]').boundingBox();
    const title = await page.locator('[slot="title"]').boundingBox();
    expect(action!.x).toBeGreaterThan(title!.x + title!.width);
    expect(await page.locator('#b [part="card"]').evaluate((el) => getComputedStyle(el).borderTopWidth)).toBe('1px');
  });
});
