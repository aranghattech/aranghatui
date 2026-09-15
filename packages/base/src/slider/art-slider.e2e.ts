import { expect, test } from '@artui/e2e';

test.describe('art-slider', () => {
  test('native keyboard steps emit input + change; form value; drag with the mouse', async ({ page }) => {
    await page.setContent(`<form id="f"><div style="width:400px"><art-slider name="v" value="50" aria-label="Volume"></art-slider></div></form>`);
    const input = await page.spyOnEvent('input');
    const change = await page.spyOnEvent('change');
    await page.keyboard.press('Tab');
    await expect(page.locator('art-slider input')).toBeFocused();
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('End');
    expect(await page.locator('art-slider').evaluate((el: any) => el.value)).toBe(100);
    expect(input.length).toBe(2);
    expect(change.length).toBe(2);
    expect(await page.evaluate(() => Object.fromEntries(new FormData(document.getElementById('f') as HTMLFormElement)))).toEqual({ v: '100' });
    const box = await page.locator('art-slider input').boundingBox();
    await page.mouse.move(box!.x + box!.width - 8, box!.y + box!.height / 2);
    await page.mouse.down();
    await page.mouse.move(box!.x + box!.width * 0.2, box!.y + box!.height / 2, { steps: 5 });
    await page.mouse.up();
    const v = await page.locator('art-slider').evaluate((el: any) => el.value);
    expect(v).toBeGreaterThan(15);
    expect(v).toBeLessThan(25);
    expect(change.length).toBe(3);
  });

  test('RTL: Left increases (native), thumb fill follows', async ({ page }) => {
    await page.setContent(`<div dir="rtl" style="width:400px"><art-slider value="40" aria-label="Level"></art-slider></div>`);
    await page.locator('art-slider input').focus();
    await page.keyboard.press('ArrowLeft');
    expect(await page.locator('art-slider').evaluate((el: any) => el.value)).toBe(41);
    await expect.poll(() => page.locator('art-slider input').evaluate((el) => (el as HTMLElement).style.getPropertyValue('--fill'))).toBe('41%');
  });
});
