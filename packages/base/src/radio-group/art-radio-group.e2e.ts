import { expect, test } from '@artui/e2e';

test.describe('art-radio-group', () => {
  test('arrows move and select, clicking a label selects, form value follows', async ({ page }) => {
    await page.setContent(`<form id="f"><art-radio-group name="d" value="a" aria-label="Density"><art-radio value="a">A</art-radio><art-radio value="b">B</art-radio><art-radio value="c" disabled>C</art-radio></art-radio-group></form>`);
    const change = await page.spyOnEvent('change');
    await page.keyboard.press('Tab');
    await expect(page.locator('art-radio[value="a"] button')).toBeFocused();
    await page.keyboard.press('ArrowDown');
    await expect(page.locator('art-radio[value="b"] button')).toBeFocused();
    expect(await page.locator('art-radio-group').evaluate((el: any) => el.value)).toBe('b');
    await page.keyboard.press('ArrowDown'); // c is disabled → wraps to a
    await expect(page.locator('art-radio[value="a"] button')).toBeFocused();
    expect(change.length).toBe(2);
    await page.locator('art-radio[value="b"]').getByText('B').click();
    expect(await page.locator('art-radio-group').evaluate((el: any) => el.value)).toBe('b');
    expect(await page.evaluate(() => Object.fromEntries(new FormData(document.getElementById('f') as HTMLFormElement)))).toEqual({ d: 'b' });
    await expect(page.locator('art-radio[value="b"] button')).toHaveAccessibleName('B');
  });
});
