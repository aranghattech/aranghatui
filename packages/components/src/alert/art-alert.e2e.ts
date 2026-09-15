import { expect, test } from '@artui/e2e';

test.describe('art-alert', () => {
  test('lays out icon beside title and description; destructive colours the text', async ({ page }) => {
    await page.setContent(`<div style="width:400px"><art-alert id="a"><svg slot="icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0z"/></svg><h5 slot="title">Title</h5><p slot="description">Desc</p></art-alert><art-alert id="b" variant="destructive"><h5 slot="title">Bad</h5></art-alert></div>`);
    const icon = await page.locator('#a [slot="icon"]').boundingBox();
    const title = await page.locator('#a [slot="title"]').boundingBox();
    expect(title!.x).toBeGreaterThan(icon!.x + icon!.width);
    expect(await page.locator('#a').evaluate((el) => el.getAttribute('role'))).toBe('alert');
    const a = await page.locator('#a [slot="title"]').evaluate((el) => getComputedStyle(el).color);
    const b = await page.locator('#b [slot="title"]').evaluate((el) => getComputedStyle(el).color);
    expect(a).not.toBe(b);
  });
});
