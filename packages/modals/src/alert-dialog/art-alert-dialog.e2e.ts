import { expect, test } from '@artui/e2e';

const alert = `<art-alert-dialog><button slot="trigger" id="t">Delete</button><span slot="title">Delete account?</span><span slot="description">This cannot be undone.</span><button slot="cancel" id="cancel">Cancel</button><button slot="action" id="action">Delete</button></art-alert-dialog>`;

test.describe('art-alert-dialog', () => {
  test('focus starts on cancel, the backdrop does not close it, Escape and cancel do, action emits and closes', async ({ page }) => {
    await page.setContent(alert);
    const content = page.locator('art-alert-dialog [part="content"]');
    const action = await page.spyOnEvent('action');
    await page.locator('#t').click();
    await expect(content).toBeVisible();
    await expect(content).toHaveAttribute('role', 'alertdialog');
    await expect(page.locator('#cancel')).toBeFocused();
    await page.mouse.click(5, 5);
    await expect(content).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(content).toBeHidden();
    await expect(page.locator('#t')).toBeFocused();
    await page.locator('#t').click();
    await page.locator('#action').click();
    expect(action.events.length).toBe(1);
    await expect(content).toBeHidden();
  });
});
