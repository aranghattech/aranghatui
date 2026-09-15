import { expect, test } from '@artui/e2e';

test.describe('art-hover-card', () => {
  test('opens after hover intent, stays open while the pointer is on the card, closes after leaving', async ({ page }) => {
    await page.setContent(`<div style="padding:40px"><art-hover-card open-delay="50" close-delay="50"><button slot="trigger">@nextjs</button><p>Card content</p></art-hover-card></div>`);
    const host = page.locator('art-hover-card');
    const card = host.locator('[part="content"]');
    await page.locator('button[slot="trigger"]').hover();
    await expect(host).toHaveAttribute('open');
    await expect(card).toBeVisible();
    const b = await card.boundingBox();
    await page.mouse.move(b!.x + b!.width / 2, b!.y + b!.height / 2);
    await page.waitForTimeout(200);
    await expect(host).toHaveAttribute('open');
    await page.mouse.move(5, 5);
    await expect(host).not.toHaveAttribute('open');
  });

  test('keyboard focus opens, Escape closes', async ({ page }) => {
    await page.setContent(`<div style="padding:40px"><art-hover-card><a slot="trigger" href="#">docs</a><p>Preview</p></art-hover-card></div>`);
    await page.keyboard.press('Tab');
    await expect(page.locator('art-hover-card')).toHaveAttribute('open');
    await page.keyboard.press('Escape');
    await expect(page.locator('art-hover-card')).not.toHaveAttribute('open');
  });
});
