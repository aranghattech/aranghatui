import { expect, test } from '@artui/e2e';

test.describe('art-switch', () => {
  test('keyboard toggles; label click toggles; form value', async ({ page }) => {
    await page.setContent(`<form id="f"><art-switch id="s" name="wifi"></art-switch><art-label for="s">Wi-Fi</art-label></form>`);
    await page.keyboard.press('Tab');
    await page.keyboard.press('Space');
    expect(await page.locator('art-switch').evaluate((el: any) => el.checked)).toBe(true);
    expect(await page.evaluate(() => Object.fromEntries(new FormData(document.getElementById('f') as HTMLFormElement)))).toEqual({ wifi: 'on' });
    await page.locator('art-label').click();
    expect(await page.locator('art-switch').evaluate((el: any) => el.checked)).toBe(false);
    await expect(page.locator('art-switch button')).toHaveAccessibleName('Wi-Fi');
  });
});
