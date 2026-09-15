import { expect, test } from '@artui/e2e';

const shell = `<art-app-shell collapsible="icon" style="height:600px;min-height:0">
  <art-sidebar-group slot="sidebar" label="Platform"><art-sidebar-menu><art-sidebar-menu-item><art-sidebar-menu-button href="#" tooltip="Home"><span>Home</span></art-sidebar-menu-button></art-sidebar-menu-item></art-sidebar-menu></art-sidebar-group>
  <span slot="header">Dashboard</span><art-button slot="actions" size="sm">Share</art-button><p>Page</p>
</art-app-shell>`;

test.describe('art-app-shell', () => {
  test('the built-in trigger collapses the sidebar to icons; slotted groups and buttons follow; open-change reports', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.setContent(shell);
    const sidebar = page.locator('art-app-shell art-sidebar');
    const width = async () => (await sidebar.boundingBox())!.width;
    expect(await width()).toBeGreaterThan(200);
    const change = await page.spyOnEvent('open-change');
    await page.locator('art-app-shell art-sidebar-trigger').click();
    await expect(sidebar).toHaveAttribute('data-collapsible', 'icon');
    await expect(page.locator('art-app-shell')).not.toHaveAttribute('open');
    expect(change.lastEvent.detail.open).toBe(false);
    await expect(page.locator('art-sidebar-group')).toHaveAttribute('data-icon');
    await expect(page.locator('art-sidebar-menu-button')).toHaveAttribute('data-icon');
    await expect.poll(width).toBeLessThan(80);
    await page.keyboard.press('Control+b');
    await expect(page.locator('art-app-shell')).toHaveAttribute('open', '');
    await expect.poll(width).toBeGreaterThan(200);
  });
});
