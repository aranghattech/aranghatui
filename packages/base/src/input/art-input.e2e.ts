import { expect, test } from '@artui/e2e';

test.describe('art-input', () => {
  test('typing updates value and emits input/change with the host as target', async ({ page }) => {
    await page.setContent(`<art-input placeholder="Email"></art-input>`);
    const input = await page.spyOnEvent('input');
    const change = await page.spyOnEvent('change');
    await page.keyboard.press('Tab');
    await expect(page.locator('art-input input')).toBeFocused();
    await page.keyboard.type('ab');
    await page.keyboard.press('Tab');
    expect(input.length).toBe(2);
    expect(input.lastEvent.detail).toEqual({ value: 'ab' });
    expect(await page.locator('art-input').evaluate((el: any) => el.value)).toBe('ab');
    expect(change.length).toBe(1);
  });

  test('is form-associated: FormData, validation and reset', async ({ page }) => {
    await page.setContent(`<form id="f"><art-input name="user" value="ada" required minlength="2"></art-input><button type="submit">go</button></form>`);
    const data = await page.evaluate(() => Object.fromEntries(new FormData(document.getElementById('f') as HTMLFormElement)));
    expect(data).toEqual({ user: 'ada' });
    await page.locator('art-input input').fill('');
    expect(await page.evaluate(() => (document.getElementById('f') as HTMLFormElement).checkValidity())).toBe(false);
    await page.evaluate(() => (document.getElementById('f') as HTMLFormElement).reset());
    expect(await page.locator('art-input').evaluate((el: any) => el.value)).toBe('ada');
    expect(await page.evaluate(() => (document.getElementById('f') as HTMLFormElement).checkValidity())).toBe(true);
  });

  test('addons render inside the frame; clicking one focuses the input; the ring sits on the frame', async ({ page }) => {
    await page.setContent(`<art-input placeholder="Domain" aria-label="Domain"><span slot="start">https://</span><span slot="end">.com</span></art-input>`);
    const host = page.locator('art-input');
    const frame = host.locator('[part="field"]');
    const input = host.locator('input');
    // the addons and the input share one frame of control height; the input is borderless inside it
    const [f, i, start] = await Promise.all([frame.boundingBox(), input.boundingBox(), page.locator('[slot="start"]').boundingBox()]);
    expect(Math.round(f!.height)).toBe(36);
    expect(i!.x).toBeGreaterThan(start!.x + start!.width - 1);
    expect(await input.evaluate((el) => getComputedStyle(el).borderTopWidth)).toBe('0px');
    await page.locator('[slot="end"]').click();
    await expect(input).toBeFocused();
    await page.keyboard.press('Tab'); // leave, then come back by keyboard → focus-visible ring on the frame
    await page.keyboard.press('Shift+Tab');
    await expect(input).toBeFocused();
    await expect.poll(() => frame.evaluate((el) => getComputedStyle(el).boxShadow)).not.toBe('none');
  });

  test('label names the input across the shadow boundary', async ({ page }) => {
    await page.setContent(`<art-label for="e">Email address</art-label><art-input id="e"></art-input>`);
    await expect(page.locator('art-input input')).toHaveAccessibleName('Email address');
    await page.locator('art-label').click();
    await expect(page.locator('art-input input')).toBeFocused();
  });
});
