import { expect, test } from '@artui/e2e';

test.describe('art-login', () => {
  test('required fields block an empty submit; a filled form emits submit with the values; Enter submits', async ({ page }) => {
    await page.setContent('<art-login forgot-href="#f" signup-href="#s"></art-login>');
    const submit = await page.spyOnEvent('submit');
    const button = page.locator('art-login art-button').first();
    await button.click();
    expect(submit.events.length).toBe(0);
    const email = page.locator('art-login art-input input[type="email"]');
    const password = page.locator('art-login art-input input[type="password"]');
    await email.fill('ada@example.com');
    await password.fill('secret');
    await button.click();
    expect(submit.events.length).toBe(1);
    expect(submit.lastEvent.detail).toEqual({ email: 'ada@example.com', password: 'secret' });
    await password.focus();
    await page.keyboard.press('Enter');
    expect(submit.events.length).toBe(2);
    await expect(page.locator('art-login a[href="#f"]')).toHaveText('Forgot your password?');
  });
});
