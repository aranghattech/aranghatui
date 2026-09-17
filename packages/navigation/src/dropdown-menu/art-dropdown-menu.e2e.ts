import { expect, test } from '@artui/e2e';

const menu = `<div style="padding:24px"><art-dropdown-menu><button slot="trigger">Open</button><art-menu-item value="profile">Profile</art-menu-item><art-menu-item value="billing" disabled>Billing</art-menu-item><art-menu-item type="checkbox" value="status">Status bar</art-menu-item><art-menu-radio-group value="top"><art-menu-item type="radio" value="top">Top</art-menu-item><art-menu-item type="radio" value="bottom">Bottom</art-menu-item></art-menu-radio-group><art-menu-sub><art-menu-item slot="trigger">Share</art-menu-item><art-menu-item value="email">Email</art-menu-item></art-menu-sub><art-menu-item value="logout">Log out</art-menu-item></art-dropdown-menu></div>`;

test.describe('art-dropdown-menu', () => {
  test('keyboard: ↓ opens on the first item, arrows skip disabled, typing jumps, Enter selects and closes, Escape returns focus', async ({ page }) => {
    await page.setContent(menu);
    const host = page.locator('art-dropdown-menu');
    const trigger = page.locator('button[slot="trigger"]');
    const select = await page.spyOnEvent('select');
    // the focused element is inside an item's shadow root: climb to the item host
    const focused = () => page.evaluate(() => { let a: any = document.activeElement; while (a?.shadowRoot?.activeElement) a = a.shadowRoot.activeElement; const item = a?.closest?.('art-menu-item') ?? (a?.getRootNode() as ShadowRoot)?.host?.closest?.('art-menu-item'); return item?.getAttribute('value') || item?.textContent?.trim() || a?.tagName; });
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
    const focused2 = () => page.evaluate(() => { let a: any = document.activeElement; while (a?.shadowRoot?.activeElement) a = a.shadowRoot.activeElement; const item = a?.closest?.('art-menu-item') ?? (a?.getRootNode() as ShadowRoot)?.host?.closest?.('art-menu-item'); return item?.getAttribute('value') || item?.textContent?.trim() || a?.tagName; });
    const host = page.locator('art-dropdown-menu');
    const change = await page.spyOnEvent('change');
    const valueChange = await page.spyOnEvent('value-change');
    await page.locator('button[slot="trigger"]').click();
    await expect(host).toHaveAttribute('open');
    await page.locator('art-menu-item[value="status"]').click();
    expect(change.lastEvent.detail).toEqual({ value: 'status', checked: true });
    await expect(host).not.toHaveAttribute('open'); // select closes by default
    await page.locator('button[slot="trigger"]').click();
    await page.locator('art-menu-item[value="bottom"]').click();
    expect(valueChange.lastEvent.detail.value).toBe('bottom');
    await expect(page.locator('art-menu-radio-group')).toHaveAttribute('value', 'bottom');
    await expect(page.locator('art-menu-item[value="top"]')).not.toHaveAttribute('checked');
    // submenu by keyboard (park the mouse first: a panel opening under a resting pointer must not steal focus)
    await page.mouse.move(0, 0);
    await page.locator('button[slot="trigger"]').focus();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.type('s'); // "Share" (typeahead: first match after Status? both start with s: "status" is before "share"... status bar comes first)
    await page.keyboard.type('h');
    const sub = page.locator('art-menu-sub');
    await page.keyboard.press('ArrowRight');
    await expect(sub).toHaveAttribute('open');
    await expect.poll(focused2).toBe('email');
    await page.keyboard.press('ArrowLeft');
    await expect(sub).not.toHaveAttribute('open');
    await expect.poll(focused2).toBe('Share');
    await expect(host).toHaveAttribute('open');
  });

  test('the panel is as tall as its items, and falls back to the room the viewport has', async ({ page }) => {
    const rows = Array.from({ length: 10 }, (_, i) => `<art-menu-item value="i${i}">Item ${i + 1}</art-menu-item>`).join('');
    const read = () =>
      page.locator('art-dropdown-menu').evaluate((el: HTMLElement) => {
        const p = el.shadowRoot!.querySelector('[part="content"]') as HTMLElement;
        return { client: p.clientHeight, scroll: p.scrollHeight, bottom: Math.round(p.getBoundingClientRect().bottom) };
      });

    await page.setViewportSize({ width: 800, height: 900 });
    await page.setContent(`<div style="padding:24px"><art-dropdown-menu><button slot="trigger">Open</button>${rows}</art-dropdown-menu></div>`);
    await page.locator('button[slot="trigger"]').click();
    await expect.poll(async () => (await read()).client > 0).toBe(true);
    const roomy = await read();
    expect(roomy.scroll).toBe(roomy.client); // ten items, no scrollbar

    // the same menu on a short viewport caps at what is left below the trigger instead of overflowing
    await page.setViewportSize({ width: 800, height: 320 });
    await page.setContent(`<div style="padding:24px"><art-dropdown-menu><button slot="trigger">Open</button>${rows}</art-dropdown-menu></div>`);
    await page.locator('button[slot="trigger"]').click();
    await expect.poll(async () => { const r = await read(); return r.client > 0 && r.scroll > r.client; }).toBe(true);
    const tight = await read();
    expect(tight.client).toBeLessThan(roomy.client);
    expect(tight.scroll).toBeGreaterThan(tight.client);
    expect(tight.bottom).toBeLessThanOrEqual(320);
  });
});
