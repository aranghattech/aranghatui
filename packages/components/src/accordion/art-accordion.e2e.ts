import { expect, test } from '@artui/e2e';

test.describe('art-accordion', () => {
  test('single: opening one closes the other natively; value-change fires once; arrows move focus', async ({ page }) => {
    await page.setContent(`<art-accordion value="a"><art-accordion-item value="a"><span slot="trigger">A</span><p id="pa">a</p></art-accordion-item><art-accordion-item value="b"><span slot="trigger">B</span><p id="pb">b</p></art-accordion-item><art-accordion-item value="c"><span slot="trigger">C</span><p>c</p></art-accordion-item></art-accordion>`);
    const change = await page.spyOnEvent('value-change');
    await expect(page.locator('#pa')).toBeVisible();
    await page.locator('art-accordion-item[value="b"] summary').click();
    await expect(page.locator('#pb')).toBeVisible();
    await expect(page.locator('#pa')).toBeHidden();
    await expect.poll(() => page.locator('art-accordion').evaluate((el: any) => el.value)).toBe('b');
    expect(change.length).toBe(1);
    await page.keyboard.press('ArrowDown');
    await expect(page.locator('art-accordion-item[value="c"] summary')).toBeFocused();
    await page.keyboard.press('End');
    await expect(page.locator('art-accordion-item[value="c"] summary')).toBeFocused();
    await page.keyboard.press('Home');
    await expect(page.locator('art-accordion-item[value="a"] summary')).toBeFocused();
  });
  test('multiple keeps several open', async ({ page }) => {
    await page.setContent(`<art-accordion type="multiple"><art-accordion-item value="a"><span slot="trigger">A</span><p id="pa">a</p></art-accordion-item><art-accordion-item value="b"><span slot="trigger">B</span><p id="pb">b</p></art-accordion-item></art-accordion>`);
    await page.locator('art-accordion-item[value="a"] summary').click();
    await page.locator('art-accordion-item[value="b"] summary').click();
    await expect(page.locator('#pa')).toBeVisible();
    await expect(page.locator('#pb')).toBeVisible();
    await expect.poll(() => page.locator('art-accordion').evaluate((el: any) => el.value)).toEqual(['a', 'b']);
  });
});
