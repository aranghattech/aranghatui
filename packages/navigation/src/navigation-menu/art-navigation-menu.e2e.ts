import { expect, test } from '@artui/e2e';

const nav = `<div style="padding:24px"><art-navigation-menu><art-navigation-menu-item label="Products"><ul><li><a id="p1" href="#p1">Product one</a></li><li><a id="p2" href="#p2">Product two</a></li></ul></art-navigation-menu-item><art-navigation-menu-item label="Company"><a id="c1" href="#c1">About</a></art-navigation-menu-item><art-navigation-menu-item label="Docs" href="#docs"></art-navigation-menu-item></art-navigation-menu><button id="out">out</button></div>`;

test.describe('art-navigation-menu', () => {
  test('↓ opens a panel on its first link, → moves along the bar, opening one closes the other, Escape returns focus, click toggles', async ({ page }) => {
    await page.setContent(nav);
    const items = page.locator('art-navigation-menu-item');
    await items.nth(0).locator('[part="trigger"]').focus();
    await page.keyboard.press('ArrowDown');
    await expect(items.nth(0)).toHaveAttribute('open');
    await expect(page.locator('#p1')).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(items.nth(0)).not.toHaveAttribute('open');
    await expect(items.nth(0).locator('[part="trigger"]')).toBeFocused();
    await page.keyboard.press('ArrowRight');
    await expect(items.nth(1).locator('[part="trigger"]')).toBeFocused();
    await page.keyboard.press('ArrowRight');
    await expect(items.nth(2).locator('[part="trigger"]')).toBeFocused(); // the plain link
    await page.keyboard.press('ArrowRight');
    await expect(items.nth(0).locator('[part="trigger"]')).toBeFocused(); // wraps
    await items.nth(0).locator('[part="trigger"]').click();
    await expect(items.nth(0)).toHaveAttribute('open');
    await items.nth(1).locator('[part="trigger"]').click();
    await expect(items.nth(1)).toHaveAttribute('open');
    await expect(items.nth(0)).not.toHaveAttribute('open');
    await page.locator('#out').click();
    await expect(items.nth(1)).not.toHaveAttribute('open');
  });
});
