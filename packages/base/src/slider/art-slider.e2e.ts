import { expect, test } from '@artui/e2e';

test.describe('art-slider', () => {
  test('keyboard steps emit input + change; form value; drag with the mouse', async ({ page }) => {
    await page.setContent(`<form id="f"><div style="width:400px"><art-slider name="v" value="50" aria-label="Volume"></art-slider></div></form>`);
    const input = await page.spyOnEvent('input');
    const change = await page.spyOnEvent('change');
    await page.keyboard.press('Tab');
    await expect(page.locator('art-slider [role="slider"]')).toBeFocused();
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('PageUp');
    expect(await page.locator('art-slider').evaluate((el: any) => el.value)).toBe(61);
    expect(input.length).toBe(2);
    expect(change.length).toBe(2);
    expect(await page.evaluate(() => Object.fromEntries(new FormData(document.getElementById('f') as HTMLFormElement)))).toEqual({ v: '61' });
    const track = await page.locator('art-slider [part="track"]').boundingBox();
    await page.mouse.move(track!.x + track!.width * 0.61, track!.y + track!.height / 2);
    await page.mouse.down();
    await page.mouse.move(track!.x + track!.width * 0.2, track!.y + track!.height / 2, { steps: 5 });
    await page.mouse.up();
    expect(await page.locator('art-slider').evaluate((el: any) => el.value)).toBe(20);
    expect(change.length).toBe(3);
  });

  test('range thumbs cannot cross; RTL swaps arrow keys', async ({ page }) => {
    await page.setContent(`<div dir="rtl" style="width:400px"><art-slider value="40,60" aria-label="Price"></art-slider></div>`);
    const thumbs = page.locator('art-slider [role="slider"]');
    await thumbs.nth(1).focus();
    await page.keyboard.press('ArrowLeft'); // increases in RTL
    expect(await page.locator('art-slider').evaluate((el: any) => el.value)).toEqual([40, 61]);
    await thumbs.nth(0).focus();
    await page.keyboard.press('End');
    expect(await page.locator('art-slider').evaluate((el: any) => el.value)).toEqual([61, 61]);
  });
});
