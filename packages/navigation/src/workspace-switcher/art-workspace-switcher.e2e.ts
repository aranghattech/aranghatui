import { expect, test } from '@artui/e2e';

const rows = `
  <art-workspace-switcher-item value="acme" name="Acme Inc" plan="Enterprise" shortcut="⌘1"><svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/></svg></art-workspace-switcher-item>
  <art-workspace-switcher-item value="monsters" name="Monsters Inc" plan="Startup" shortcut="⌘2"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg></art-workspace-switcher-item>
  <art-workspace-switcher-item value="closed" name="Closed Co" disabled></art-workspace-switcher-item>
  <art-workspace-switcher-item value="evil" name="Evil Corp" plan="Free" shortcut="⌘3"></art-workspace-switcher-item>
  <art-menu-item slot="action" value="add">Add workspace</art-menu-item>`;

const standalone = (attrs = '') => `<div style="padding:24px"><art-workspace-switcher value="acme"${attrs}>${rows}</art-workspace-switcher></div>`;

const inSidebar = (providerAttrs = '', sidebarAttrs = '') =>
  `<art-sidebar-provider${providerAttrs}><art-sidebar${sidebarAttrs}>` +
  `<art-workspace-switcher slot="header" value="acme">${rows}</art-workspace-switcher>` +
  `<art-sidebar-group label="Platform"><art-sidebar-menu>` +
  `<art-sidebar-menu-item><art-sidebar-menu-button href="#home" tooltip="Home" active><span>Home</span></art-sidebar-menu-button></art-sidebar-menu-item>` +
  `</art-sidebar-menu></art-sidebar-group></art-sidebar>` +
  `<art-sidebar-inset><art-sidebar-trigger></art-sidebar-trigger><p>Page</p></art-sidebar-inset></art-sidebar-provider>`;

/** The focused row's value — focus lands on the row host, which may itself be inside a shadow root. */
const focusedRow = (page: import('@playwright/test').Page) =>
  page.evaluate(() => {
    let a: Element | null = document.activeElement;
    while (a?.shadowRoot?.activeElement) a = a.shadowRoot.activeElement;
    const row = a?.closest?.('art-workspace-switcher-item, art-menu-item');
    return row?.getAttribute('value') ?? a?.tagName ?? '';
  });

test.describe('art-workspace-switcher', () => {
  test('keyboard: ↓ opens on the workspace in use, arrows skip disabled and wrap, typing jumps, Enter switches and returns focus', async ({ page }) => {
    await page.setContent(standalone());
    const host = page.locator('art-workspace-switcher');
    const trigger = host.locator('[part="trigger"]');
    const valueChange = await page.spyOnEvent('value-change');

    await trigger.focus();
    await page.keyboard.press('ArrowDown');
    await expect(host).toHaveAttribute('open');
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    // opened from the keyboard: focus starts on the active workspace, not on the first row
    await expect.poll(() => focusedRow(page)).toBe('acme');

    await page.keyboard.press('ArrowDown');
    await expect.poll(() => focusedRow(page)).toBe('monsters');
    await page.keyboard.press('ArrowDown'); // skips the disabled Closed Co
    await expect.poll(() => focusedRow(page)).toBe('evil');
    await page.keyboard.press('End'); // the action row is last in the keyboard order
    await expect.poll(() => focusedRow(page)).toBe('add');
    await page.keyboard.press('ArrowDown'); // wraps
    await expect.poll(() => focusedRow(page)).toBe('acme');
    await page.keyboard.type('m');
    await expect.poll(() => focusedRow(page)).toBe('monsters');

    await page.keyboard.press('Enter');
    expect(valueChange.lastEvent.detail.value).toBe('monsters');
    await expect(host).toHaveAttribute('value', 'monsters');
    await expect(host).not.toHaveAttribute('open');
    await expect(trigger).toBeFocused();
    // the trigger now shows the workspace that was chosen
    await expect(host.locator('[part="trigger"] [part="name"]')).toHaveText('Monsters Inc');
    await expect(host.locator('[part="trigger"] [part="plan"]')).toHaveText('Startup');
  });

  test('Escape closes and returns focus; Enter on the trigger reopens', async ({ page }) => {
    await page.setContent(standalone());
    const host = page.locator('art-workspace-switcher');
    const trigger = host.locator('[part="trigger"]');
    await trigger.focus();
    await page.keyboard.press('Enter');
    await expect(host).toHaveAttribute('open');
    await page.keyboard.press('Escape');
    await expect(host).not.toHaveAttribute('open');
    await expect(trigger).toBeFocused();
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  test('pointer: the trigger opens, a row switches, the action row closes without switching', async ({ page }) => {
    await page.setContent(standalone());
    const host = page.locator('art-workspace-switcher');
    const valueChange = await page.spyOnEvent('value-change');
    const select = await page.spyOnEvent('select');

    await host.locator('[part="trigger"]').click();
    await expect(host).toHaveAttribute('open');
    await expect(host.locator('[part="content"]')).toBeVisible();
    // the active row is the checked one
    await expect(page.locator('art-workspace-switcher-item[value="acme"]')).toHaveAttribute('aria-checked', 'true');

    await page.locator('art-workspace-switcher-item[value="evil"]').click();
    expect(valueChange.lastEvent.detail.value).toBe('evil');
    expect(valueChange.lastEvent.detail.element).toBeTruthy();
    await expect(host).not.toHaveAttribute('open');
    await expect(page.locator('art-workspace-switcher-item[value="evil"]')).toHaveAttribute('aria-checked', 'true');

    await host.locator('[part="trigger"]').click();
    await page.locator('art-menu-item[value="add"]').click();
    expect(select.lastEvent.detail.value).toBe('add');
    await expect(host).not.toHaveAttribute('open');
    await expect(host).toHaveAttribute('value', 'evil'); // the action did not switch workspace
  });

  test('a click outside dismisses the menu', async ({ page }) => {
    await page.setContent(standalone());
    const host = page.locator('art-workspace-switcher');
    await host.locator('[part="trigger"]').click();
    await expect(host).toHaveAttribute('open');
    await page.mouse.click(5, 5);
    await expect(host).not.toHaveAttribute('open');
  });

  test('display="auto": the trigger collapses with the sidebar and the name moves to a tooltip', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.setContent(inSidebar('', ' collapsible="icon"'));
    const host = page.locator('art-workspace-switcher');
    const trigger = host.locator('[part="trigger"]');
    const width = async () => (await trigger.boundingBox())!.width;

    // expanded: the full row, wide enough for the name, which names the button by itself
    expect(await width()).toBeGreaterThan(100);
    await expect(host.locator('[part="trigger"] [part="name"]')).toHaveText('Acme Inc');
    await expect(trigger).not.toHaveAttribute('aria-label');
    await expect(host).not.toHaveAttribute('data-icon');

    await page.locator('art-sidebar-trigger').click();
    await expect(page.locator('art-sidebar')).toHaveAttribute('data-collapsible', 'icon');
    await expect(host).toHaveAttribute('data-icon');
    await expect.poll(width).toBeLessThan(50);

    // the tooltip is decoration: the square button keeps the name itself, or it is nameless to a screen reader
    await expect(trigger).toHaveAttribute('aria-label', 'Acme Inc');
    await trigger.hover();
    await expect(host.locator('[part="tooltip"]')).toBeVisible();
    await expect(host.locator('[part="tooltip"]')).toHaveText('Acme Inc');

    // and back again
    await page.keyboard.press('Control+b');
    await expect(host).not.toHaveAttribute('data-icon');
    await expect.poll(width).toBeGreaterThan(100);
  });

  test('the menu still opens and switches while collapsed to icons', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.setContent(inSidebar(' open="false"', ' collapsible="icon"'));
    const host = page.locator('art-workspace-switcher');
    const valueChange = await page.spyOnEvent('value-change');
    await expect(host).toHaveAttribute('data-icon');

    await host.locator('[part="trigger"]').click();
    await expect(host.locator('[part="content"]')).toBeVisible();
    await page.locator('art-workspace-switcher-item[value="monsters"]').click();
    expect(valueChange.lastEvent.detail.value).toBe('monsters');
    // still a square, now showing the new logo
    await expect(host).toHaveAttribute('data-icon');
    await expect(host.locator('[part="tooltip"]')).toHaveText('Monsters Inc');
  });

  test('display="icon" forces the square outside a sidebar, display="full" keeps the row inside one', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.setContent(
      `${standalone(' display="icon"')}<art-sidebar-provider open="false"><art-sidebar collapsible="icon" id="sb">` +
        `<art-workspace-switcher id="forced" slot="header" value="acme" display="full">${rows}</art-workspace-switcher>` +
        `</art-sidebar><art-sidebar-inset><p>Page</p></art-sidebar-inset></art-sidebar-provider>`,
    );
    await expect(page.locator('art-workspace-switcher').first()).toHaveAttribute('data-icon');
    // `full` overrides the collapsed sidebar it sits in
    await expect(page.locator('#forced')).not.toHaveAttribute('data-icon');
  });

  test('an open menu keeps exactly one tab stop and Tab leaves it', async ({ page }) => {
    await page.setContent(standalone());
    const host = page.locator('art-workspace-switcher');
    await host.locator('[part="trigger"]').click();
    await expect(host).toHaveAttribute('open');
    const tabStops = await page.evaluate(() =>
      Array.from(document.querySelectorAll('art-workspace-switcher-item, art-menu-item')).filter((el) => el.getAttribute('tabindex') === '0').length,
    );
    expect(tabStops).toBe(1);
    await page.keyboard.press('Tab');
    await expect(host).not.toHaveAttribute('open');
  });
});
