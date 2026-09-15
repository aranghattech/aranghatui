import { expect, test } from '@artui/e2e';

test.describe('art-command', () => {
  test('typing filters, arrows move, Enter runs with item data, click runs', async ({ page }) => {
    await page.setContent(`<art-command><art-command-group label="Go"><art-command-item value="calendar">Calendar</art-command-item><art-command-item value="emoji" keywords="smile">Search Emoji</art-command-item><art-command-item value="calc" disabled>Calculator</art-command-item></art-command-group><art-command-group label="Me"><art-command-item value="profile">Profile</art-command-item></art-command-group></art-command>`);
    await page.evaluate(() => { (document.querySelector('art-command-item[value="profile"]') as any).item = { route: '/me' }; });
    const select = await page.spyOnEvent('select');
    const input = page.locator('art-command input');
    await page.keyboard.press('Tab'); // the load-time highlight must not scrollIntoView, or Chromium's focus start point skips the input
    await expect(input).toBeFocused();
    await expect(page.locator('art-command-item[value="calendar"]')).toHaveAttribute('data-highlighted');
    await page.keyboard.press('ArrowDown');
    await expect(page.locator('art-command-item[value="emoji"]')).toHaveAttribute('data-highlighted');
    await page.keyboard.press('ArrowDown'); // skips the disabled calculator
    await expect(page.locator('art-command-item[value="profile"]')).toHaveAttribute('data-highlighted');
    await page.keyboard.press('Enter');
    expect(select.lastEvent.detail.value).toBe('profile');
    expect(select.lastEvent.detail.item).toEqual({ route: '/me' });
    await page.keyboard.type('smi');
    await expect(page.locator('art-command-item[value="calendar"]')).toBeHidden();
    await expect(page.locator('art-command-item[value="emoji"]')).toBeVisible();
    await expect(page.locator('art-command-group[label="Me"]')).toBeHidden();
    await expect(page.locator('art-command-item[value="emoji"]')).toHaveAttribute('data-highlighted');
    await expect(page.locator('art-command-item[value="calendar"]')).not.toHaveAttribute('data-highlighted'); // a hidden item keeps no stale highlight
    await expect(page.locator('art-command-item[value="emoji"]')).toHaveAttribute('aria-selected', 'true');
    await page.locator('art-command-item[value="emoji"]').click();
    expect(select.lastEvent.detail.value).toBe('emoji');
    await input.fill('zzz');
    await expect(page.locator('art-command [part="empty"]')).toBeVisible();
  });
});
