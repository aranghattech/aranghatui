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

  test('label names the input across the shadow boundary', async ({ page }) => {
    await page.setContent(`<art-label for="e">Email address</art-label><art-input id="e"></art-input>`);
    await expect(page.locator('art-input input')).toHaveAccessibleName('Email address');
    await page.locator('art-label').click();
    await expect(page.locator('art-input input')).toBeFocused();
  });
});
