import { expect, test } from '@artui/e2e';

test.describe('art-checkbox', () => {
  test('Space toggles, Enter does not; label click toggles; form submits value', async ({ page }) => {
    await page.setContent(`<form id="f"><art-checkbox id="c" name="agree" value="yes"></art-checkbox><art-label for="c">Agree</art-label></form>`);
    const change = await page.spyOnEvent('change');
    await page.keyboard.press('Tab');
    await expect(page.locator('art-checkbox input')).toBeFocused();
    await page.keyboard.press('Space');
    expect(await page.locator('art-checkbox').evaluate((el: any) => el.checked)).toBe(true);
    await page.keyboard.press('Enter');
    expect(await page.locator('art-checkbox').evaluate((el: any) => el.checked)).toBe(true);
    expect(change.length).toBe(1);
    expect(await page.evaluate(() => Object.fromEntries(new FormData(document.getElementById('f') as HTMLFormElement)))).toEqual({ agree: 'yes' });
    await page.locator('art-label').click();
    expect(await page.locator('art-checkbox').evaluate((el: any) => el.checked)).toBe(false);
    expect(await page.evaluate(() => Object.fromEntries(new FormData(document.getElementById('f') as HTMLFormElement)))).toEqual({});
    await expect(page.locator('art-checkbox input')).toHaveAccessibleName('Agree');
  });
});
