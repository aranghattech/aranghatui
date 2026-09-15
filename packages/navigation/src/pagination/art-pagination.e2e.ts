import { expect, test } from '@artui/e2e';

test.describe('art-pagination', () => {
  test('clicking pages and next / previous updates page and emits page-change; ends disable', async ({ page }) => {
    await page.setContent(`<art-pagination page="2" total="3"></art-pagination>`);
    const p = page.locator('art-pagination');
    const change = await page.spyOnEvent('page-change');
    await p.locator('[part="next"]').click();
    await expect(p).toHaveAttribute('page', '3');
    expect(change.lastEvent.detail.page).toBe(3);
    await expect(p.locator('[part="next"]')).toBeDisabled();
    await p.locator('[part="page"]', { hasText: '1' }).click();
    await expect(p).toHaveAttribute('page', '1');
    await expect(p.locator('[part="previous"]')).toBeDisabled();
    await expect(p.locator('[aria-current="page"]')).toHaveText('1');
    await p.locator('[part="page"]', { hasText: '2' }).focus();
    await page.keyboard.press('Enter');
    await expect(p).toHaveAttribute('page', '2');
    expect(change.length).toBe(3);
  });
});
