import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { THEMES, loadStories, storyUrl } from '../stories';

/** axe-core zero violations on every documented example, both themes (CLAUDE.md §9). */
const stories = await loadStories();

for (const s of stories) {
  for (const [example] of Object.entries(s.examples)) {
    for (const theme of THEMES) {
      test(`${s.tag} › ${example} › ${theme}`, async ({ page }) => {
        await page.goto(storyUrl(s, { example, theme }));
        await page.locator('#stage[data-ready]').waitFor();
        const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice']).include('#stage').analyze();
        expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
      });
    }
  }
}
