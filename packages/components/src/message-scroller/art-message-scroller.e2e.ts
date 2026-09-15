import { expect, test } from '@artui/e2e';

const rows = (from: number, to: number) => Array.from({ length: to - from + 1 }, (_, i) => `<art-message-scroller-item message-id="m${from + i}"><div style="height:60px">Message ${from + i}</div></art-message-scroller-item>`).join('');

test.describe('art-message-scroller', () => {
  test('opens at the end, follows appended rows, stops when the reader scrolls up, the button brings them back', async ({ page }) => {
    await page.setContent(`<art-message-scroller id="s" style="height:240px">${rows(1, 10)}</art-message-scroller>`);
    const s = page.locator('#s');
    const vp = s.locator('[part="viewport"]');
    const state = await page.spyOnEvent('scroll-state-change');
    const atEnd = () => vp.evaluate((el) => el.scrollHeight - el.clientHeight - el.scrollTop <= 1);
    await expect.poll(atEnd).toBe(true);
    await expect(s.locator('[part="button"]')).toHaveAttribute('data-active', 'false');
    await s.evaluate((el) => el.insertAdjacentHTML('beforeend', `<art-message-scroller-item message-id="m11"><div style="height:60px">Message 11</div></art-message-scroller-item>`));
    await expect.poll(atEnd).toBe(true); // followed
    await vp.evaluate((el) => { el.scrollTop = 0; });
    await expect.poll(() => vp.evaluate((el) => el.scrollTop)).toBe(0);
    await expect(s.locator('[part="button"]')).toHaveAttribute('data-active', 'true');
    expect(state.lastEvent.detail.following).toBe(false);
    await s.evaluate((el) => el.insertAdjacentHTML('beforeend', `<art-message-scroller-item message-id="m12"><div style="height:60px">Message 12</div></art-message-scroller-item>`));
    await page.waitForTimeout(150);
    expect(await vp.evaluate((el) => el.scrollTop)).toBe(0); // not moved against the reader
    await s.locator('[part="button"]').click();
    await expect.poll(atEnd).toBe(true);
    await expect(s.locator('[part="button"]')).toHaveAttribute('data-active', 'false');
  });

  test('prepending older rows keeps the visible row in place; scrollToMessage jumps', async ({ page }) => {
    await page.setContent(`<art-message-scroller id="s" default-scroll-position="start" style="height:240px">${rows(5, 14)}</art-message-scroller>`);
    const s = page.locator('#s');
    const vp = s.locator('[part="viewport"]');
    await vp.evaluate((el) => { el.scrollTop = 120; });
    await expect.poll(() => vp.evaluate((el) => el.scrollTop)).toBe(120);
    const before = await s.locator('[message-id="m7"]').boundingBox();
    await s.evaluate((el) => el.insertAdjacentHTML('afterbegin', `<art-message-scroller-item message-id="m3"><div style="height:60px">Message 3</div></art-message-scroller-item><art-message-scroller-item message-id="m4"><div style="height:60px">Message 4</div></art-message-scroller-item>`));
    await page.waitForTimeout(100);
    const after = await s.locator('[message-id="m7"]').boundingBox();
    expect(Math.round(after!.y)).toBe(Math.round(before!.y));
    await s.evaluate((el: any) => el.scrollToMessage('m12', 'instant'));
    await expect.poll(() => s.locator('[message-id="m12"]').evaluate((el) => Math.round(el.getBoundingClientRect().top - el.closest('art-message-scroller')!.getBoundingClientRect().top))).toBeLessThanOrEqual(70); // near the top, with a 64px peek above
  });
});
