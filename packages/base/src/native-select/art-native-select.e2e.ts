import { expect, test } from '@artui/e2e';

test.describe('art-native-select', () => {
  test('keyboard selection emits change; form data, dynamic options and reset', async ({ page }) => {
    await page.setContent(`<form id="f"><art-native-select name="s" value="a" aria-label="Pick"><option value="a">A</option><option value="b">B</option></art-native-select></form>`);
    const change = await page.spyOnEvent('change');
    await page.locator('art-native-select select').selectOption('b');
    expect(change.lastEvent.detail).toEqual({ value: 'b' });
    expect(await page.evaluate(() => Object.fromEntries(new FormData(document.getElementById('f') as HTMLFormElement)))).toEqual({ s: 'b' });
    await page.evaluate(() => { const o = document.createElement('option'); o.value = 'c'; o.textContent = 'C'; document.querySelector('art-native-select')!.append(o); });
    await expect(page.locator('art-native-select select option')).toHaveCount(3);
    await page.evaluate(() => (document.getElementById('f') as HTMLFormElement).reset());
    expect(await page.locator('art-native-select').evaluate((el: any) => el.value)).toBe('a');
  });
});
