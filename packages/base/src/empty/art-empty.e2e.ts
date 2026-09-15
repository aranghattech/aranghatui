import { expect, test } from '@artui/e2e';

test.describe('art-empty', () => {
  test('centres its content and boxes the media icon', async ({ page }) => {
    await page.setContent(`<div style="width:400px"><art-empty><art-icon slot="media" size="lg"><svg viewBox="0 0 24 24"><path d="M0 0h24v24H0z"/></svg></art-icon><h3 slot="title">Title</h3><p slot="description">Desc</p><button>Go</button></art-empty></div>`);
    const host = await page.locator('art-empty').boundingBox();
    const title = await page.locator('[slot="title"]').boundingBox();
    const centre = host!.x + host!.width / 2;
    expect(Math.abs(title!.x + title!.width / 2 - centre)).toBeLessThan(2);
    expect((await page.locator('art-icon[slot="media"]').boundingBox())!.width).toBe(40);
  });
});
