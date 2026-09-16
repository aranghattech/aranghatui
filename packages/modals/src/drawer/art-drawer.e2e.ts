import { expect, test } from '@artui/e2e';

const drawer = (attrs = '') => `<art-drawer${attrs}><button slot="trigger" id="t">Open</button><span slot="title">Move Goal</span><p>Body</p><button slot="footer" dialog-close id="done">Done</button></art-drawer>`;
const settled = (el: Element) => Promise.all(el.getAnimations().map((a) => a.finished.catch(() => {})));

test.describe('art-drawer', () => {
  test('opens from the bottom as a modal; a long swipe down dismisses, a short one springs back', async ({ page }) => {
    await page.setViewportSize({ width: 800, height: 600 });
    await page.setContent(drawer());
    const content = page.locator('art-drawer [part="content"]');
    await page.locator('#t').click();
    await expect(content).toBeVisible();
    await content.evaluate(settled);
    const box = (await content.boundingBox())!;
    expect(box.width).toBe(800);
    expect(Math.round(box.y + box.height)).toBe(600);
    expect(await content.evaluate((el) => el.matches(':modal'))).toBe(true);
    const handle = (await content.locator('[part="handle"]').boundingBox())!;
    const hx = handle.x + handle.width / 2, hy = handle.y + handle.height / 2;
    // short drag: springs back
    await page.mouse.move(hx, hy); await page.mouse.down(); await page.mouse.move(hx, hy + 20, { steps: 4 }); await page.mouse.up();
    await expect(content).toBeVisible();
    // one read, null-safe: the box is briefly unavailable while the panel springs back (a throw would end the poll)
    await expect.poll(async () => { const b = await content.boundingBox(); return b ? Math.round(b.y + b.height) : -1; }).toBe(600);
    // long drag: dismisses
    await page.mouse.move(hx, hy); await page.mouse.down(); await page.mouse.move(hx, hy + 200, { steps: 8 }); await page.mouse.up();
    await expect(content).toBeHidden();
    await expect(page.locator('art-drawer')).not.toHaveAttribute('open');
    await expect(page.locator('#t')).toBeFocused();
  });

  test('persistent ignores Escape and the backdrop; a dialog-close button still closes', async ({ page }) => {
    await page.setViewportSize({ width: 800, height: 600 });
    await page.setContent(drawer(' persistent'));
    const content = page.locator('art-drawer [part="content"]');
    await page.locator('#t').click();
    await expect(content).toBeVisible();
    await page.keyboard.press('Escape');
    await page.mouse.click(10, 10);
    await expect(content).toBeVisible();
    await page.locator('#done').click();
    await expect(content).toBeHidden();
  });

  test('`right` is the inline end: in RTL it sits at the left', async ({ page }) => {
    await page.setViewportSize({ width: 800, height: 600 });
    await page.setContent(`<div dir="rtl">${drawer(' side="right"')}</div>`);
    const content = page.locator('art-drawer [part="content"]');
    await page.locator('#t').click();
    await expect(content).toBeVisible();
    await content.evaluate(settled);
    expect(Math.round((await content.boundingBox())!.x)).toBe(0);
    expect(await content.evaluate((el) => (el as HTMLElement).style.getPropertyValue('--art-overlay-slide'))).toBe('-100% 0');
  });
});
