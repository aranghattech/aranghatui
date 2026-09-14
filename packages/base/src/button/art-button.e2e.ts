import { expect, test } from '@artui/e2e';

test.describe('art-button', () => {
  test('Enter and Space activate; click target is the host', async ({ page }) => {
    await page.setContent(`<art-button>Go</art-button>`);
    await page.evaluate(() => {
      (window as any).__clicks = [] as string[];
      document.addEventListener('click', (e) => (window as any).__clicks.push((e.target as Element).tagName.toLowerCase()));
    });
    await page.keyboard.press('Tab');
    await expect(page.locator('art-button button')).toBeFocused();
    await page.keyboard.press('Enter');
    await page.keyboard.press('Space');
    expect(await page.evaluate(() => (window as any).__clicks)).toEqual(['art-button', 'art-button']);
  });

  test('disabled is skipped by Tab; loading stays focusable; neither emits click', async ({ page }) => {
    await page.setContent(`<art-button disabled>A</art-button><art-button loading>B</art-button><art-button>C</art-button>`);
    await page.evaluate(() => { (window as any).__n = 0; document.addEventListener('click', (e) => { if ((e.target as Element).closest('art-button')) (window as any).__n++; }); });
    await page.keyboard.press('Tab');
    // loading keeps focus (a button that starts loading after a click must not drop focus)
    await expect(page.locator('art-button').nth(1).locator('button')).toBeFocused();
    await page.keyboard.press('Enter');
    await page.keyboard.press('Tab');
    await expect(page.locator('art-button').nth(2).locator('button')).toBeFocused();
    await page.locator('art-button').nth(0).locator('button').click({ force: true });
    await page.locator('art-button').nth(1).locator('button').click({ force: true });
    expect(await page.evaluate(() => (window as any).__n)).toBe(0);
  });

  test('type="submit" submits the surrounding form and type="reset" resets it', async ({ page }) => {
    await page.setContent(`
      <form id="f"><input name="q" value="x"><art-button type="submit">Send</art-button><art-button type="reset" variant="ghost">Reset</art-button></form>`);
    await page.evaluate(() => {
      const f = document.getElementById('f') as HTMLFormElement;
      (window as any).__submitted = 0;
      f.addEventListener('submit', (e) => { e.preventDefault(); (window as any).__submitted++; });
    });
    await page.locator('art-button').nth(0).locator('button').click();
    expect(await page.evaluate(() => (window as any).__submitted)).toBe(1);
    await page.fill('input[name=q]', 'changed');
    await page.locator('art-button').nth(1).locator('button').click();
    expect(await page.inputValue('input[name=q]')).toBe('x');
  });

  test('href renders a focusable anchor that Enter follows', async ({ page }) => {
    await page.setContent(`<art-button href="#target">Jump</art-button>`);
    await page.keyboard.press('Tab');
    await expect(page.locator('art-button a')).toBeFocused();
    await page.keyboard.press('Enter');
    expect(await page.evaluate(() => location.hash)).toBe('#target');
  });
});
