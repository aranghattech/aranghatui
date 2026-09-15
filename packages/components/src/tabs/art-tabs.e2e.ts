import { expect, test } from '@artui/e2e';

test.describe('art-tabs', () => {
  test('click selects; arrows move and select; disabled is skipped; Tab goes to the panel', async ({ page }) => {
    await page.setContent(`<art-tabs value="a"><art-tab value="a">A</art-tab><art-tab value="b" disabled>B</art-tab><art-tab value="c">C</art-tab><art-tab-panel value="a">pa</art-tab-panel><art-tab-panel value="b">pb</art-tab-panel><art-tab-panel value="c">pc</art-tab-panel></art-tabs>`);
    const change = await page.spyOnEvent('value-change');
    const tabs = page.locator('art-tabs');
    await page.locator('art-tab[value="c"]').click();
    await expect(tabs).toHaveAttribute('value', 'c');
    await expect(page.locator('art-tab-panel[value="c"]')).toBeVisible();
    await expect(page.locator('art-tab-panel[value="a"]')).toBeHidden();
    await page.keyboard.press('ArrowLeft'); // skips the disabled b
    await expect(page.locator('art-tab[value="a"]')).toBeFocused();
    await expect(tabs).toHaveAttribute('value', 'a');
    await page.keyboard.press('End');
    await expect(tabs).toHaveAttribute('value', 'c');
    await page.keyboard.press('Tab');
    await expect(page.locator('art-tab-panel[value="c"]')).toBeFocused();
    expect(change.length).toBe(3);
  });
  test('manual activation: arrows move focus only, Enter selects', async ({ page }) => {
    await page.setContent(`<art-tabs value="a" activation="manual"><art-tab value="a">A</art-tab><art-tab value="b">B</art-tab><art-tab-panel value="a">pa</art-tab-panel><art-tab-panel value="b">pb</art-tab-panel></art-tabs>`);
    await page.keyboard.press('Tab');
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('art-tab[value="b"]')).toBeFocused();
    await expect(page.locator('art-tabs')).toHaveAttribute('value', 'a');
    await page.keyboard.press('Enter');
    await expect(page.locator('art-tabs')).toHaveAttribute('value', 'b');
  });
});
