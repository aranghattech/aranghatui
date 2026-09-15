import { expect, test } from '@artui/e2e';

const menu = `<div style="padding:40px"><art-context-menu><div id="area" style="height:120px;width:240px;border:1px dashed gray" tabindex="0">Area</div><art-menu-item slot="menu" value="back">Back</art-menu-item><art-menu-item slot="menu" value="reload">Reload</art-menu-item></art-context-menu></div>`;

test.describe('art-context-menu', () => {
  test('right-click opens at the pointer, arrows move, Enter selects and closes; Shift+F10 opens by keyboard', async ({ page }) => {
    await page.setContent(menu);
    const cm = page.locator('art-context-menu');
    const select = await page.spyOnEvent('select');
    await page.locator('#area').click({ button: 'right', position: { x: 50, y: 40 } });
    await expect(cm).toHaveAttribute('open');
    const panel = cm.locator('[part="content"]');
    await panel.evaluate((el) => Promise.all(el.getAnimations().map((a) => a.finished.catch(() => {}))));
    const area = (await page.locator('#area').boundingBox())!;
    const pb = (await panel.boundingBox())!;
    expect(pb.x).toBeGreaterThanOrEqual(area.x + 50 - 2);
    expect(pb.y).toBeGreaterThanOrEqual(area.y + 40);
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    expect(select.lastEvent.detail.value).toBe('reload');
    await expect(cm).not.toHaveAttribute('open');
    await page.locator('#area').focus();
    await page.keyboard.press('Shift+F10');
    await expect(cm).toHaveAttribute('open');
    await expect.poll(() => page.evaluate(() => document.activeElement?.getAttribute('value'))).toBe('back');
    await page.keyboard.press('Escape');
    await expect(cm).not.toHaveAttribute('open');
    await expect(page.locator('#area')).toBeFocused();
  });
});
