import { expect, test } from '@artui/e2e';

test.describe('art-button-group', () => {
  test('joins outline buttons: shared borders, outer corners only, focused item lifted', async ({ page }) => {
    await page.setContent(`<art-button-group><art-button variant="outline">A</art-button><art-button variant="outline">B</art-button><art-button variant="outline">C</art-button></art-button-group>`);
    const btn = (i: number) => page.locator('art-button').nth(i);
    const [a, b] = await Promise.all([btn(0).boundingBox(), btn(1).boundingBox()]);
    expect(Math.round(b!.x)).toBe(Math.round(a!.x + a!.width - 1)); // overlaps by the border width
    const radii = (i: number) => btn(i).locator('button').evaluate((el) => { const s = getComputedStyle(el); return [s.borderTopLeftRadius, s.borderTopRightRadius]; });
    const [tl0, tr0] = await radii(0);
    expect(tl0).not.toBe('0px'); // outer corner keeps the token radius
    expect(tr0).toBe('0px');
    expect(await radii(1)).toEqual(['0px', '0px']);
    const [tl2, tr2] = await radii(2);
    expect(tl2).toBe('0px');
    expect(tr2).toBe(tl0);
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await expect(btn(1).locator('button')).toBeFocused();
    expect(await btn(1).evaluate((el) => getComputedStyle(el).zIndex)).toBe('1');
  });

  test('vertical stacks and rounds top / bottom; nested groups are spaced', async ({ page }) => {
    await page.setContent(`<art-button-group orientation="vertical"><art-button variant="outline">A</art-button><art-button variant="outline">B</art-button></art-button-group>
      <art-button-group id="n"><art-button-group><art-button>1</art-button></art-button-group><art-button-group><art-button>2</art-button></art-button-group></art-button-group>`);
    const first = page.locator('art-button-group[orientation="vertical"] art-button').first().locator('button');
    const [tl, bl] = await first.evaluate((el) => { const s = getComputedStyle(el); return [s.borderTopLeftRadius, s.borderBottomLeftRadius]; });
    expect(tl).not.toBe('0px');
    expect(bl).toBe('0px');
    const [a, b] = await Promise.all([page.locator('art-button-group[orientation="vertical"] art-button').nth(0).boundingBox(), page.locator('art-button-group[orientation="vertical"] art-button').nth(1).boundingBox()]);
    expect(Math.round(b!.y)).toBe(Math.round(a!.y + a!.height - 1));
    await expect(page.locator('#n')).toHaveAttribute('data-nested', '');
    expect(await page.locator('#n').evaluate((el) => getComputedStyle(el).gap)).toBe('8px');
  });
});
