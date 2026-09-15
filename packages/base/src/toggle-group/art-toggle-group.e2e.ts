import { expect, test } from '@artui/e2e';

test.describe('art-toggle-group', () => {
  test('arrows move focus within one tab stop; Space toggles; single clears on re-press', async ({ page }) => {
    await page.setContent(`<art-toggle-group type="single" value="b" aria-label="g"><art-toggle value="a">A</art-toggle><art-toggle value="b">B</art-toggle><art-toggle value="c">C</art-toggle></art-toggle-group><button id="after">after</button>`);
    const change = await page.spyOnEvent('change');
    await page.keyboard.press('Tab');
    await expect(page.locator('art-toggle[value="a"] button')).toBeFocused();
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('art-toggle[value="b"] button')).toBeFocused();
    await page.keyboard.press('Space'); // re-press clears
    expect(await page.locator('art-toggle-group').evaluate((el: any) => el.value)).toBe('');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('Space');
    expect(await page.locator('art-toggle-group').evaluate((el: any) => el.value)).toBe('c');
    expect(change.length).toBe(2);
    await page.keyboard.press('Tab');
    await expect(page.locator('#after')).toBeFocused();
  });
});
