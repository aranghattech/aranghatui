import { expect, test } from '@artui/e2e';

test.describe('art-table', () => {
  test('rows get one-border dividers, headers are medium weight, hover tints, the container scrolls', async ({ page }) => {
    await page.setContent(`<div style="width:300px"><art-table><table><thead><tr><th>Invoice</th><th>Status</th><th>Method</th><th>Amount</th><th>Very long column header text</th></tr></thead><tbody><tr id="r1"><td>INV001</td><td>Paid</td><td>Card</td><td>$250</td><td>x</td></tr><tr id="r2"><td>INV002</td><td>Pending</td><td>PayPal</td><td>$150</td><td>y</td></tr></tbody></table></art-table></div>`);
    expect(await page.locator('#r1').evaluate((el) => getComputedStyle(el).borderBottomWidth)).toBe('1px');
    expect(await page.locator('#r2').evaluate((el) => getComputedStyle(el).borderBottomWidth)).toBe('0px');
    expect(await page.locator('th').first().evaluate((el) => getComputedStyle(el).fontWeight)).toBe('500');
    const before = await page.locator('#r1').evaluate((el) => getComputedStyle(el).backgroundColor);
    await page.locator('#r1').hover();
    await expect.poll(() => page.locator('#r1').evaluate((el) => getComputedStyle(el).backgroundColor)).not.toBe(before);
    expect(await page.locator('art-table').evaluate((el) => el.scrollWidth > el.clientWidth)).toBe(true);
    await expect(page.locator('table')).toHaveRole('table');
  });
});
