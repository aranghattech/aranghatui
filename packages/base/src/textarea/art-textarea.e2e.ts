import { expect, test } from '@artui/e2e';

test.describe('art-textarea', () => {
  test('typing emits input/change and grows with content; form data and reset work', async ({ page }) => {
    await page.setContent(`<form id="f"><art-textarea name="msg" value="a"></art-textarea></form>`);
    const input = await page.spyOnEvent('input');
    const ta = page.locator('art-textarea textarea');
    const h1 = (await ta.boundingBox())!.height;
    await ta.focus();
    await ta.evaluate((el: HTMLTextAreaElement) => el.setSelectionRange(el.value.length, el.value.length));
    await page.keyboard.type('\nline 2\nline 3\nline 4');
    expect(input.length).toBeGreaterThan(0);
    expect((await ta.boundingBox())!.height).toBeGreaterThan(h1);
    expect(await page.evaluate(() => Object.fromEntries(new FormData(document.getElementById('f') as HTMLFormElement)))).toEqual({ msg: 'a\nline 2\nline 3\nline 4' });
    await page.evaluate(() => (document.getElementById('f') as HTMLFormElement).reset());
    expect(await page.locator('art-textarea').evaluate((el: any) => el.value)).toBe('a');
  });
});
