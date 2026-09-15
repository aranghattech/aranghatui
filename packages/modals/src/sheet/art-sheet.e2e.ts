import { expect, test } from '@artui/e2e';

const sheet = (side = 'right', dir = 'ltr') => `<div dir="${dir}"><art-sheet side="${side}"><button slot="trigger" id="t">Open</button><span slot="title">Filters</span><p>Body</p><button slot="footer" dialog-close id="done">Done</button></art-sheet></div>`;
const settled = (el: Element) => Promise.all(el.getAnimations().map((a) => a.finished.catch(() => {})));

test.describe('art-sheet', () => {
  test('slides in from the end edge as a modal; Escape closes and returns focus', async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 600 });
    await page.setContent(sheet('right'));
    const content = page.locator('art-sheet [part="content"]');
    await page.locator('#t').click();
    await expect(content).toBeVisible();
    await content.evaluate(settled);
    const box = (await content.boundingBox())!;
    expect(Math.round(box.x + box.width)).toBe(1000);
    expect(box.height).toBe(600);
    expect(await content.evaluate((el) => el.matches(':modal'))).toBe(true);
    await page.keyboard.press('Escape');
    await expect(content).toBeHidden();
    await expect(page.locator('#t')).toBeFocused();
  });

  test('`right` is the inline end: in RTL it sits at the left and slides from there', async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 600 });
    await page.setContent(sheet('right', 'rtl'));
    const content = page.locator('art-sheet [part="content"]');
    await page.locator('#t').click();
    await expect(content).toBeVisible();
    await content.evaluate(settled);
    expect(Math.round((await content.boundingBox())!.x)).toBe(0);
    expect(await content.evaluate((el) => (el as HTMLElement).style.getPropertyValue('--art-overlay-slide'))).toBe('-100% 0');
  });

  test('`bottom` spans the width at the bottom edge; a dialog-close button closes it', async ({ page }) => {
    await page.setViewportSize({ width: 1000, height: 600 });
    await page.setContent(sheet('bottom'));
    const content = page.locator('art-sheet [part="content"]');
    await page.locator('#t').click();
    await expect(content).toBeVisible();
    await content.evaluate(settled);
    const box = (await content.boundingBox())!;
    expect(box.width).toBe(1000);
    expect(Math.round(box.y + box.height)).toBe(600);
    await page.locator('#done').click();
    await expect(content).toBeHidden();
    await expect(page.locator('art-sheet')).not.toHaveAttribute('open');
  });
});
