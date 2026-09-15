import { expect, test } from '@artui/e2e';

test.describe('art-tooltip', () => {
  test('opens on hover after the delay, closes on leave, on the top layer above the trigger', async ({ page }) => {
    await page.setContent(`<div style="padding:120px"><art-tooltip open-delay="50" close-delay="50"><button slot="trigger">Hover</button>Add to library</art-tooltip></div>`);
    const host = page.locator('art-tooltip');
    const bubble = host.locator('[part="content"]');
    const change = await page.spyOnEvent('open-change');
    await page.locator('button[slot="trigger"]').hover();
    await expect(host).toHaveAttribute('open');
    await expect(bubble).toBeVisible();
    expect(await bubble.evaluate((el) => el.matches(':popover-open'))).toBe(true);
    await bubble.evaluate((el) => Promise.all(el.getAnimations().map((a) => a.finished))); // let the enter motion settle
    const [t, b] = await Promise.all([page.locator('button[slot="trigger"]').boundingBox(), bubble.boundingBox()]);
    expect(b!.y + b!.height).toBeLessThanOrEqual(t!.y + 1); // above the trigger
    expect(change.lastEvent.detail).toEqual({ open: true });
    await page.mouse.move(5, 5);
    await expect(host).not.toHaveAttribute('open');
    await expect(bubble).toBeHidden();
  });

  test('opens on keyboard focus, closes on Escape; trigger is described by the text', async ({ page }) => {
    await page.setContent(`<div style="padding:120px"><art-tooltip><button slot="trigger">Focus</button>Helpful text</art-tooltip></div>`);
    await expect(page.locator('button[slot="trigger"]')).toHaveAccessibleDescription('Helpful text');
    await page.keyboard.press('Tab');
    await expect(page.locator('art-tooltip')).toHaveAttribute('open');
    await page.keyboard.press('Escape');
    await expect(page.locator('art-tooltip')).not.toHaveAttribute('open');
    await expect(page.locator('button[slot="trigger"]')).toBeFocused();
  });
});
