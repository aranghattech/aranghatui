import { expect, test } from '@artui/e2e';

test.describe('art-input-otp', () => {
  test('typing fills slots, caret follows, Backspace clears, complete fires once, paste fills all', async ({ page }) => {
    await page.setContent(`<art-input-otp length="4" aria-label="Code"></art-input-otp>`);
    const host = page.locator('art-input-otp');
    const input = host.locator('input');
    const complete = await page.spyOnEvent('complete');
    const slots = () => host.locator('[part="slot"]').evaluateAll((els) => els.map((e) => [e.textContent!.trim(), e.classList.contains('active')]));
    await page.keyboard.press('Tab');
    await expect(input).toBeFocused();
    await expect.poll(slots).toEqual([['', true], ['', false], ['', false], ['', false]]);
    await page.keyboard.type('12');
    await expect.poll(slots).toEqual([['1', false], ['2', false], ['', true], ['', false]]);
    await page.keyboard.press('Backspace');
    await expect.poll(() => host.evaluate((el: any) => el.value)).toBe('1');
    await page.keyboard.type('x234'); // the letter is filtered
    await expect.poll(() => host.evaluate((el: any) => el.value)).toBe('1234');
    expect(complete.length).toBe(1);
    expect(complete.lastEvent.detail).toEqual({ value: '1234' });
    await expect.poll(slots).toEqual([['1', false], ['2', false], ['3', false], ['4', true]]);
    await input.fill('');
    await page.keyboard.insertText('98x76'); // a paste is one input event with the whole text
    await expect.poll(() => host.evaluate((el: any) => el.value)).toBe('9876');
  });

  test('is form-associated and resets', async ({ page }) => {
    await page.setContent(`<form id="f"><art-input-otp name="code" value="1234" length="4" required></art-input-otp></form>`);
    expect(await page.evaluate(() => Object.fromEntries(new FormData(document.getElementById('f') as HTMLFormElement)))).toEqual({ code: '1234' });
    await page.locator('art-input-otp').evaluate((el: any) => (el.value = ''));
    await expect.poll(() => page.evaluate(() => (document.getElementById('f') as HTMLFormElement).checkValidity())).toBe(false);
    await page.locator('art-input-otp').evaluate((el: any) => (el.value = '5'));
    await page.evaluate(() => (document.getElementById('f') as HTMLFormElement).reset());
    await expect.poll(() => page.locator('art-input-otp').evaluate((el: any) => el.value)).toBe('1234');
  });
});
