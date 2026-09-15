import { expect, test } from '@artui/e2e';

test.describe('art-message', () => {
  test('the avatar sits at the start (or end) of the row and the bubble column follows the alignment', async ({ page }) => {
    await page.setContent(`<div style="width:480px"><art-message id="s"><art-avatar slot="avatar" size="sm">A</art-avatar><art-bubble variant="muted">Hello</art-bubble></art-message><art-message id="e" align="end"><art-avatar slot="avatar" size="sm">M</art-avatar><art-bubble>Hi</art-bubble><span slot="footer">Sent</span></art-message></div>`);
    const sa = await page.locator('#s art-avatar').boundingBox();
    const sb = await page.locator('#s art-bubble').boundingBox();
    expect(sa!.x).toBeLessThan(sb!.x);
    const ea = await page.locator('#e art-avatar').boundingBox();
    const eb = await page.locator('#e art-bubble').boundingBox();
    expect(ea!.x).toBeGreaterThan(eb!.x + eb!.width - 1);
    const row = await page.locator('#e').boundingBox();
    expect(Math.round(eb!.x + eb!.width)).toBeLessThanOrEqual(Math.round(ea!.x)); // bubble hugs the avatar on the end side
    expect(row!.width).toBe(480);
  });
});
