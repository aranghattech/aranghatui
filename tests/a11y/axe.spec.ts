import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { THEMES, loadStories, storyUrl } from '../stories';

/** axe-core zero violations on every documented example, both themes (CLAUDE.md §9). */
const stories = await loadStories();

for (const s of stories) {
  for (const [example, { click }] of Object.entries(s.examples)) {
    for (const theme of THEMES) {
      test(`${s.tag} › ${example} › ${theme}`, async ({ page }) => {
        // Decorative motion (a pulsing title while uploading) must not be sampled mid-fade: every
        // animation is gated on reduced motion, which settles it at its final frame.
        await page.emulateMedia({ reducedMotion: 'reduce' });
        await page.goto(storyUrl(s, { example, theme }));
        await page.locator('#stage[data-ready]').waitFor();
        if (click) await page.locator(click).first().click();
        const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice']).include('#stage').analyze();
        expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
      });
    }
  }
}
