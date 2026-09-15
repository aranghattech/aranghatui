import { expect, test } from '@artui/e2e';

test.describe('art-bubble', () => {
  test('end-aligned bubbles sit at the row end; a link bubble is focusable and the reactions pill hangs off the edge', async ({ page }) => {
    await page.setContent(`<div style="display:flex;flex-direction:column;width:400px"><art-bubble id="a" variant="muted">Start</art-bubble><art-bubble id="b" align="end">End<span slot="reactions">👍</span></art-bubble><art-bubble id="c" variant="outline" href="#x">Link</art-bubble></div>`);
    const a = await page.locator('#a').boundingBox();
    const b = await page.locator('#b').boundingBox();
    expect(a!.x).toBeLessThan(b!.x);
    expect(Math.round(b!.x + b!.width)).toBeGreaterThan(Math.round(a!.x + a!.width));
    const pill = await page.locator('#b [part="reactions"]').boundingBox();
    expect(pill!.y + pill!.height).toBeGreaterThan(b!.y + b!.height); // hangs below the bubble
    await page.locator('#c a').focus();
    await expect(page.locator('#c a')).toBeFocused();
    await expect(page.locator('#a [part="reactions"]')).toBeHidden();
  });
});
