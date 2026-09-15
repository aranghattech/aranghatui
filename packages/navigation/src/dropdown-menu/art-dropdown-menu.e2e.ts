import { expect, test } from '@artui/e2e';

const menu = `<div style="padding:24px"><art-dropdown-menu><button slot="trigger">Open</button><art-dropdown-menu-item value="profile">Profile</art-dropdown-menu-item><art-dropdown-menu-item value="billing" disabled>Billing</art-dropdown-menu-item><art-dropdown-menu-item type="checkbox" value="status">Status bar</art-dropdown-menu-item><art-dropdown-menu-radio-group value="top"><art-dropdown-menu-item type="radio" value="top">Top</art-dropdown-menu-item><art-dropdown-menu-item type="radio" value="bottom">Bottom</art-dropdown-menu-item></art-dropdown-menu-radio-group><art-dropdown-menu-sub><art-dropdown-menu-item slot="trigger">Share</art-dropdown-menu-item><art-dropdown-menu-item value="email">Email</art-dropdown-menu-item></art-dropdown-menu-sub><art-dropdown-menu-item value="logout">Log out</art-dropdown-menu-item></art-dropdown-menu></div>`;

test.describe('art-dropdown-menu', () => {
  test('keyboard: ↓ opens on the first item, arrows skip disabled, typing jumps, Enter selects and closes, Escape returns focus', async ({ page }) => {
    await page.setContent(menu);
    const host = page.locator('art-dropdown-menu');
    const trigger = page.locator('button[slot="trigger"]');
    const select = await page.spyOnEvent('select');
    // the focused element is inside an item's shadow root: climb to the item host
    const focused = () => page.evaluate(() => { let a: any = document.activeElement; while (a?.shadowRoot?.activeElement) a = a.shadowRoot.activeElement; const item = a?.closest?.('art-dropdown-menu-item') ?? (a?.getRootNode() as ShadowRoot)?.host?.closest?.('art-dropdown-menu-item'); return item?.getAttribute('value') || item?.textContent?.trim() || a?.tagName; });
    await trigger.focus();
    await page.keyboard.press('ArrowDown');
    await expect(host).toHaveAttribute('open');
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await expect.poll(focused).toBe('profile');
    await page.keyboard.press('ArrowDown'); // skips billing (disabled)
    await expect.poll(focused).toBe('status');
    await page.keyboard.press('End');
    await expect.poll(focused).toBe('logout');
    await page.keyboard.press('ArrowDown'); // wraps
    await expect.poll(focused).toBe('profile');
    await page.keyboard.type('l');
    await expect.poll(focused).toBe('logout');
    await page.keyboard.press('Enter');
    expect(select.lastEvent.detail.value).toBe('logout');
    await expect(host).not.toHaveAttribute('open');
    await expect(trigger).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(host).toHaveAttribute('open');
    await page.keyboard.press('Escape');
    await expect(host).not.toHaveAttribute('open');
    await expect(trigger).toBeFocused();
  });

  test('checkbox and radio items toggle; a submenu opens with → and closes with ←; pointer click selects', async ({ page }) => {
    await page.setContent(menu);
    const focused2 = () => page.evaluate(() => { let a: any = document.activeElement; while (a?.shadowRoot?.activeElement) a = a.shadowRoot.activeElement; const item = a?.closest?.('art-dropdown-menu-item') ?? (a?.getRootNode() as ShadowRoot)?.host?.closest?.('art-dropdown-menu-item'); return item?.getAttribute('value') || item?.textContent?.trim() || a?.tagName; });
    const host = page.locator('art-dropdown-menu');
    const change = await page.spyOnEvent('change');
    const valueChange = await page.spyOnEvent('value-change');
    await page.locator('button[slot="trigger"]').click();
    await expect(host).toHaveAttribute('open');
    await page.locator('art-dropdown-menu-item[value="status"]').click();
    expect(change.lastEvent.detail).toEqual({ value: 'status', checked: true });
    await expect(host).not.toHaveAttribute('open'); // select closes by default
    await page.locator('button[slot="trigger"]').click();
    await page.locator('art-dropdown-menu-item[value="bottom"]').click();
    expect(valueChange.lastEvent.detail.value).toBe('bottom');
    await expect(page.locator('art-dropdown-menu-radio-group')).toHaveAttribute('value', 'bottom');
    await expect(page.locator('art-dropdown-menu-item[value="top"]')).not.toHaveAttribute('checked');
    // submenu by keyboard (park the mouse first: a panel opening under a resting pointer must not steal focus)
    await page.mouse.move(0, 0);
    await page.locator('button[slot="trigger"]').focus();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.type('s'); // "Share" (typeahead: first match after Status? both start with s: "status" is before "share"... status bar comes first)
    await page.keyboard.type('h');
    const sub = page.locator('art-dropdown-menu-sub');
    await page.keyboard.press('ArrowRight');
    await expect(sub).toHaveAttribute('open');
    await expect.poll(focused2).toBe('email');
    await page.keyboard.press('ArrowLeft');
    await expect(sub).not.toHaveAttribute('open');
    await expect.poll(focused2).toBe('Share');
    await expect(host).toHaveAttribute('open');
  });
});
