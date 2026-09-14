import { expect, test } from '@artui/e2e';

test.describe('art-hello', () => {
  test('keyboard: Tab focuses the button, Enter emits greet with typed detail', async ({ page }) => {
    await page.setContent(`<art-hello name="Ada"></art-hello>`);
    const greet = await page.spyOnEvent('greet');
    await page.keyboard.press('Tab');
    await expect(page.locator('art-hello button')).toBeFocused();
    await page.keyboard.press('Enter');
    await greet.next();
    expect(greet.lastEvent.detail).toEqual({ name: 'Ada' });
  });

  test('native click reaches the document with the host as composed target', async ({ page }) => {
    await page.setContent(`<art-hello name="Ada"></art-hello>`);
    await page.evaluate(() => {
      (window as any).__clickTarget = null;
      document.addEventListener('click', (e) => ((window as any).__clickTarget = (e.target as Element).tagName.toLowerCase()), { once: true });
    });
    await page.locator('art-hello button').click();
    expect(await page.evaluate(() => (window as any).__clickTarget)).toBe('art-hello');
  });

  test('disabled: no greet on click', async ({ page }) => {
    await page.setContent(`<art-hello name="Ada" disabled></art-hello>`);
    const greet = await page.spyOnEvent('greet');
    await page.locator('art-hello button').click({ force: true });
    await page.waitForChanges();
    expect(greet.length).toBe(0);
  });
});
