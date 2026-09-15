import { expect, test } from '@artui/e2e';

test.describe('art-typography', () => {
  test('scales headings, spaces paragraphs and styles code, links and quotes; nothing leaks outside', async ({ page }) => {
    await page.setContent(`<h1 id="outside">Outside</h1><art-typography><h1 id="h1">T</h1><p id="p1">A <code id="c">x</code> and <a id="a" href="#">l</a></p><h2 id="h2">S</h2><p id="p2">B</p><blockquote id="q">Q</blockquote></art-typography>`);
    const px = (sel: string, prop: string) => page.locator(sel).evaluate((el, prop) => getComputedStyle(el)[prop as any], prop);
    expect(parseFloat(await px('#h1', 'fontSize'))).toBeGreaterThan(parseFloat(await px('#h2', 'fontSize')));
    expect(parseFloat(await px('#h2', 'fontSize'))).toBeGreaterThan(parseFloat(await px('#p1', 'fontSize')));
    expect(await px('#h2', 'borderBottomWidth')).toBe('1px');
    expect(parseFloat(await px('#p2', 'marginTop'))).toBeGreaterThan(0);
    expect(await px('#c', 'fontFamily')).toContain('mono');
    expect(await px('#a', 'textDecorationLine')).toBe('underline');
    expect(await px('#q', 'fontStyle')).toBe('italic');
    expect(await px('#outside', 'fontSize')).toBe('32px'); // browser default h1 — untouched by the component
  });
});
