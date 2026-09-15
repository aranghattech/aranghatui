import { expect, test } from '@artui/e2e';

test.describe('art-attachment', () => {
  test('the trigger emits and the action stays clickable above it; the group is a focusable region', async ({ page }) => {
    await page.setContent(`<art-attachment-group><art-attachment trigger-label="Preview a.pdf" name="a.pdf" description="1 KB"><button slot="actions" id="rm">x</button></art-attachment></art-attachment-group>`);
    const trigger = await page.spyOnEvent('trigger');
    await expect(page.locator('art-attachment')).toHaveAttribute('data-has-actions'); // slotted state mirrored → styles are live
    await page.locator('#rm').click();
    expect(trigger.length).toBe(0); // the action does not activate the card
    await page.locator('art-attachment [part="trigger"]').click(); // the overlay covers the card (title included) — that is the point
    expect(trigger.length).toBe(1);
    await page.locator('art-attachment-group').focus();
    await expect(page.locator('art-attachment-group')).toBeFocused(); // tabindex="0": the strip itself can be scrolled by keyboard
    await expect(page.locator('art-attachment-group')).toHaveAttribute('role', 'group');
    await page.keyboard.press('Tab');
    await expect(page.locator('art-attachment [part="trigger"]')).toBeFocused(); // then the card trigger, then its actions
  });
});
