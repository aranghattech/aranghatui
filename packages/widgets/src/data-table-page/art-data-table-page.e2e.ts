import { expect, test } from '@artui/e2e';

test.describe('art-data-table-page', () => {
  test('typing filters, the reset clears, the page buttons and rows-per-page emit', async ({ page }) => {
    await page.setContent('<art-data-table-page total="100" page-count="4" page-size="25"><table><tbody><tr><td>row</td></tr></tbody></table></art-data-table-page>');
    const filter = await page.spyOnEvent('filter-change');
    const pageChange = await page.spyOnEvent('page-change');
    const sizeChange = await page.spyOnEvent('page-size-change');
    await page.locator('art-data-table-page art-input input').fill('bug');
    await expect.poll(() => filter.lastEvent?.detail.value).toBe('bug'); // the spy bridge is asynchronous
    await expect(page.locator('art-data-table-page [part="reset"]')).toBeVisible();
    await page.locator('art-data-table-page [part="reset"]').click();
    await expect.poll(() => filter.lastEvent?.detail.value).toBe('');
    await expect(page.locator('art-data-table-page [part="reset"]')).toHaveCount(0);
    await page.locator('art-data-table-page [aria-label="Go to next page"]').click();
    await expect.poll(() => pageChange.lastEvent?.detail.page).toBe(2);
    await page.locator('art-data-table-page [aria-label="Go to last page"]').click();
    await expect.poll(() => pageChange.lastEvent?.detail.page).toBe(4);
    await expect(page.locator('art-data-table-page [aria-label="Go to next page"]')).toHaveAttribute('disabled');
    await page.locator('art-data-table-page art-native-select select').selectOption('50');
    await expect.poll(() => sizeChange.lastEvent?.detail.pageSize).toBe(50);
  });
});
