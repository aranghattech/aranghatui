import { expect, test } from '@artui/e2e';

test.describe('art-resizable', () => {
  test('drag and keyboard resize within limits; layout-change reports sizes', async ({ page }) => {
    await page.setContent(`<art-resizable style="width:400px;height:100px"><art-resizable-panel id="a" default-size="50" min-size="20"><p>a</p></art-resizable-panel><art-resizable-handle></art-resizable-handle><art-resizable-panel id="b" default-size="50"><p>b</p></art-resizable-panel></art-resizable>`);
    const change = await page.spyOnEvent('layout-change');
    const handle = page.locator('art-resizable-handle');
    const widthA = () => page.locator('#a').evaluate((el) => Math.round(el.getBoundingClientRect().width));
    expect(await widthA()).toBe(200);
    const box = await handle.boundingBox();
    await page.mouse.move(box!.x + box!.width / 2, box!.y + 50);
    await page.mouse.down();
    await page.mouse.move(box!.x + 80, box!.y + 50, { steps: 4 });
    await page.mouse.up();
    await expect.poll(widthA).toBe(280);
    expect(Math.round(change.lastEvent.detail.sizes[0])).toBe(70);
    await handle.focus();
    await page.keyboard.press('ArrowLeft');
    await expect.poll(widthA).toBe(276);
    await page.keyboard.press('Home'); // min-size 20 %
    await expect.poll(widthA).toBe(80);
    await expect(handle).toHaveAttribute('aria-valuenow', '20');
  });
});
