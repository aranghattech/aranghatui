import { expect, test } from '@artui/e2e';

test.describe('art-toggle', () => {
  test('Space toggles; form submits value while pressed', async ({ page }) => {
    await page.setContent(`<form id="f"><art-toggle name="bold" value="1" aria-label="Bold">B</art-toggle></form>`);
    await page.keyboard.press('Tab');
    await page.keyboard.press('Space');
    expect(await page.locator('art-toggle').evaluate((el: any) => el.pressed)).toBe(true);
    expect(await page.evaluate(() => Object.fromEntries(new FormData(document.getElementById('f') as HTMLFormElement)))).toEqual({ bold: '1' });
    await page.keyboard.press('Enter');
    expect(await page.locator('art-toggle').evaluate((el: any) => el.pressed)).toBe(false);
  });
});
