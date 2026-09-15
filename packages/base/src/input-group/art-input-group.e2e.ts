import { expect, test } from '@artui/e2e';

test.describe('art-input-group', () => {
  test('one frame of control height; the input is borderless inside; ring, invalid and disabled sit on the frame', async ({ page }) => {
    await page.setContent(`<art-input-group><span slot="start">https://</span><art-input aria-label="Domain"></art-input><span slot="end">.com</span></art-input-group>`);
    const group = page.locator('art-input-group');
    const frame = group.locator('[part="frame"]');
    const field = page.locator('art-input [part="field"]');
    expect(Math.round((await frame.boundingBox())!.height)).toBe(36);
    expect(await field.evaluate((el) => [getComputedStyle(el).borderTopColor, getComputedStyle(el).boxShadow])).toEqual(['rgba(0, 0, 0, 0)', 'none']);
    const resting = await frame.evaluate((el) => getComputedStyle(el).boxShadow);
    await page.keyboard.press('Tab');
    await expect(page.locator('art-input input')).toBeFocused();
    await expect(group).toHaveAttribute('data-focus');
    await expect.poll(() => frame.evaluate((el) => getComputedStyle(el).boxShadow)).not.toBe(resting);
    await page.keyboard.press('Tab');
    await expect(group).not.toHaveAttribute('data-focus');
    await expect.poll(() => frame.evaluate((el) => getComputedStyle(el).boxShadow)).toBe(resting);
    await page.locator('art-input').evaluate((el: any) => { el.invalid = true; });
    await expect(page.locator('art-input')).toHaveAttribute('invalid');
    await expect.poll(() => frame.evaluate((el) => getComputedStyle(el).borderTopColor)).not.toBe('rgb(229, 229, 229)');
    await page.locator('art-input').evaluate((el: any) => { el.invalid = false; el.disabled = true; });
    await expect.poll(() => frame.evaluate((el) => getComputedStyle(el).opacity)).toBe('0.5');
  });

  test('a button addon is its own tab stop and clicks normally', async ({ page }) => {
    await page.setContent(`<art-input-group><art-input aria-label="Email"></art-input><art-button slot="end" size="sm" variant="secondary" id="b">Go</art-button></art-input-group>`);
    let clicks = 0;
    await page.exposeFunction('clicked', () => clicks++);
    await page.evaluate(() => document.getElementById('b')!.addEventListener('click', () => (window as any).clicked()));
    await page.keyboard.press('Tab');
    await expect(page.locator('art-input input')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.locator('art-button button')).toBeFocused();
    await page.locator('art-button').click();
    expect(clicks).toBe(1);
  });
});
