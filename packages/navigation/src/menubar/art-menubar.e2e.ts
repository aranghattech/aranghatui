import { expect, test } from '@artui/e2e';

const bar = `<div style="padding:24px"><art-menubar aria-label="App"><art-menubar-menu label="File"><art-menu-item value="new">New</art-menu-item><art-menu-item value="open">Open</art-menu-item></art-menubar-menu><art-menubar-menu label="Edit"><art-menu-item value="undo">Undo</art-menu-item></art-menubar-menu><art-menubar-menu label="View" disabled><art-menu-item value="zoom">Zoom</art-menu-item></art-menubar-menu></art-menubar></div>`;

test.describe('art-menubar', () => {
  test('← / → move between triggers, ↓ opens on the first item, → switches open menus, Enter selects, Escape returns', async ({ page }) => {
    await page.setContent(bar);
    const menus = page.locator('art-menubar-menu');
    const file = menus.nth(0), edit = menus.nth(1);
    const select = await page.spyOnEvent('select');
    const focused = () => page.evaluate(() => { let a: any = document.activeElement; while (a?.shadowRoot?.activeElement) a = a.shadowRoot.activeElement; return a?.getAttribute('value') || a?.textContent?.trim(); });
    await file.locator('[part="trigger"]').focus();
    await page.keyboard.press('ArrowRight');
    await expect.poll(focused).toBe('Edit');
    await page.keyboard.press('ArrowLeft');
    await expect.poll(focused).toBe('File');
    await page.keyboard.press('ArrowDown');
    await expect(file).toHaveAttribute('open');
    await expect.poll(focused).toBe('new');
    await page.keyboard.press('ArrowRight'); // switches to Edit while open
    await expect(file).not.toHaveAttribute('open');
    await expect(edit).toHaveAttribute('open');
    await expect.poll(focused).toBe('undo');
    await page.keyboard.press('Enter');
    expect(select.lastEvent.detail.value).toBe('undo');
    await expect(edit).not.toHaveAttribute('open');
    await expect.poll(focused).toBe('Edit');
    await page.keyboard.press('Space');
    await expect(edit).toHaveAttribute('open');
    await page.keyboard.press('Escape');
    await expect(edit).not.toHaveAttribute('open');
    await expect.poll(focused).toBe('Edit');
  });
  test('pointer: click opens, hovering another trigger switches, outside click closes', async ({ page }) => {
    await page.setContent(bar);
    const menus = page.locator('art-menubar-menu');
    await menus.nth(0).locator('[part="trigger"]').click();
    await expect(menus.nth(0)).toHaveAttribute('open');
    await menus.nth(1).locator('[part="trigger"]').hover();
    await expect(menus.nth(1)).toHaveAttribute('open');
    await expect(menus.nth(0)).not.toHaveAttribute('open');
    await page.mouse.click(5, 5);
    await expect(menus.nth(1)).not.toHaveAttribute('open');
  });
});
