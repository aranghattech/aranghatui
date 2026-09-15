import { expect, test } from '@artui/e2e';

const app = (attrs = '', sidebarAttrs = '') => `<art-sidebar-provider${attrs}><art-sidebar${sidebarAttrs}><art-sidebar-group label="Platform"><art-sidebar-menu>
  <art-sidebar-menu-item><art-sidebar-menu-button href="#home" tooltip="Home" active><span>Home</span></art-sidebar-menu-button></art-sidebar-menu-item>
  <art-sidebar-menu-item><art-sidebar-menu-button tooltip="Docs"><span>Docs</span></art-sidebar-menu-button><art-sidebar-menu-sub><art-sidebar-menu-item><art-sidebar-menu-button href="#install"><span>Install</span></art-sidebar-menu-button></art-sidebar-menu-item></art-sidebar-menu-sub></art-sidebar-menu-item>
</art-sidebar-menu></art-sidebar-group></art-sidebar><art-sidebar-inset><art-sidebar-trigger></art-sidebar-trigger><p>Page</p></art-sidebar-inset></art-sidebar-provider>`;

const activeText = (page: import('@playwright/test').Page) => page.evaluate(() => { let a: Element | null = document.activeElement; while (a?.shadowRoot?.activeElement) a = a.shadowRoot.activeElement; const root = a?.getRootNode(); const el = root instanceof ShadowRoot ? root.host : a; return el?.textContent?.trim() ?? ''; });

test.describe('art-sidebar', () => {
  test('the trigger and Ctrl+B collapse and expand; icon mode shows the tooltip on hover', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.setContent(app('', ' collapsible="icon"'));
    const provider = page.locator('art-sidebar-provider');
    const sidebar = page.locator('art-sidebar');
    const width = async () => (await sidebar.boundingBox())!.width;
    expect(await width()).toBeGreaterThan(200);
    const openChange = await page.spyOnEvent('open-change');
    await page.locator('art-sidebar-trigger').click();
    await expect(sidebar).toHaveAttribute('data-collapsible', 'icon');
    await expect(provider).not.toHaveAttribute('open');
    await expect.poll(width).toBeLessThan(80);
    expect(openChange.lastEvent.detail.open).toBe(false);
    const button = page.locator('art-sidebar-menu-button').first();
    await button.locator('[part="button"]').hover();
    await expect(button.locator('[part="tooltip"]')).toBeVisible();
    await expect(button.locator('[part="tooltip"]')).toHaveText('Home');
    await page.keyboard.press('Control+b');
    await expect(sidebar).toHaveAttribute('data-state', 'expanded');
    await expect.poll(width).toBeGreaterThan(200);
    expect(openChange.lastEvent.detail.open).toBe(true);
  });

  test('a disclosure item opens its nested list with the keyboard', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.setContent(app());
    const docs = page.locator('art-sidebar-menu-button').nth(1);
    await docs.locator('[part="button"]').focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('art-sidebar-menu-item').first().locator('xpath=..')).toBeAttached();
    await expect(page.locator('art-sidebar-menu-sub')).toBeVisible();
    await expect(docs.locator('[part="button"]')).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Tab');
    expect(await activeText(page)).toBe('Install');
    await page.keyboard.press('Shift+Tab');
    await page.keyboard.press('Space');
    await expect(page.locator('art-sidebar-menu-sub')).toBeHidden();
  });

  test('below the md breakpoint the trigger opens a focus-trapped sheet; Escape closes it and refocuses', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 800 });
    await page.setContent(app());
    const sidebar = page.locator('art-sidebar');
    const container = sidebar.locator('[part="container"]');
    await expect(sidebar).toHaveAttribute('data-mobile', '');
    await expect(container).toBeHidden();
    await page.locator('art-sidebar-trigger').click();
    await expect(container).toBeVisible();
    await expect(container).toHaveAttribute('role', 'dialog');
    await expect(page.locator('art-sidebar-provider')).toHaveAttribute('open-mobile', '');
    await page.keyboard.press('Tab');
    expect(await activeText(page)).toBe('Home');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    expect(await activeText(page)).toBe('Home'); // wrapped: the page behind is not reachable
    await page.keyboard.press('Escape');
    await expect(container).toBeHidden();
    await expect(page.locator('art-sidebar-provider')).not.toHaveAttribute('open-mobile');
    await expect(page.locator('art-sidebar-trigger [part="button"]')).toBeFocused();
  });
});
