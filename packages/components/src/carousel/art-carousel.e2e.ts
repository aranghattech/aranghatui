import { expect, test } from '@artui/e2e';

const slides = Array.from({ length: 4 }, (_, i) => `<art-carousel-item><div style="height:80px;display:grid;place-items:center;border:1px solid gray">${i + 1}</div></art-carousel-item>`).join('');

test.describe('art-carousel', () => {
  test('next / previous buttons and arrow keys move slides; ends disable the buttons; slide-change fires', async ({ page }) => {
    await page.setContent(`<div style="padding:60px"><art-carousel aria-label="Numbers" style="max-width:240px">${slides}</art-carousel></div>`);
    const c = page.locator('art-carousel');
    const change = await page.spyOnEvent('slide-change');
    const prev = c.locator('[part="previous"]');
    const next = c.locator('[part="next"]');
    await expect(prev).toBeDisabled();
    await expect(next).toBeEnabled();
    await next.click();
    await expect(prev).toBeEnabled();
    await expect.poll(() => c.evaluate((el: any) => el.selectedIndex())).toBe(1);
    expect(change.lastEvent.detail.index).toBe(1);
    await next.click();
    await next.click();
    await expect.poll(() => c.evaluate((el: any) => el.selectedIndex())).toBe(3);
    await expect(next).toBeDisabled();
    await prev.focus();
    await page.keyboard.press('ArrowLeft');
    await expect.poll(() => c.evaluate((el: any) => el.selectedIndex())).toBe(2);
    await c.evaluate((el: any) => el.scrollToSlide(0));
    await expect.poll(() => c.evaluate((el: any) => el.selectedIndex())).toBe(0);
    await expect(prev).toBeDisabled();
  });
  test('loop never disables the buttons and wraps', async ({ page }) => {
    await page.setContent(`<div style="padding:60px"><art-carousel loop aria-label="Numbers" style="max-width:240px">${slides}</art-carousel></div>`);
    const c = page.locator('art-carousel');
    await expect(c.locator('[part="previous"]')).toBeEnabled();
    await c.locator('[part="previous"]').click();
    await expect.poll(() => c.evaluate((el: any) => el.selectedIndex())).toBe(3);
  });
});
