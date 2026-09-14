#!/usr/bin/env node
/**
 * Docs ↔ tests parity (CLAUDE.md §10):
 *  - every component with status in-progress/done has a page with the nine sections in order
 *  - Usage + every Example has a four-tab code group (HTML | React | Vue | Angular)
 *  - Examples headings == stories.examples[*].title, and a sample file exists per framework
 */
import { existsSync, readFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const repo = resolve(import.meta.dirname, '../../..');
const catalog = JSON.parse(readFileSync(join(repo, 'tooling/catalog.json'), 'utf8'));
const SECTIONS = ['Preview', 'Installation', 'Usage', 'Examples', 'API Reference', 'Accessibility', 'Tokens used', 'Do / Don\'t'];
const FRAMEWORKS = { html: 'html', react: 'tsx', vue: 'vue', angular: 'ts' };
let errors = 0;
const fail = (m) => { errors++; console.error('✖ ' + m); };

for (const [tier, def] of Object.entries(catalog.tiers)) {
  for (const c of def.components) {
    if (c.status === 'planned') continue;
    const slug = c.tag.replace(/^art-/, '');
    const page = join(repo, 'apps/docs/components', tier, `${slug}.md`);
    if (!existsSync(page)) { fail(`${c.tag}: missing docs page ${page}`); continue; }
    const md = readFileSync(page, 'utf8');
    // 1. title
    if (!/^# .+/m.test(md)) fail(`${c.tag}: no H1 title`);
    // 2..9 sections in order
    const h2s = [...md.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
    if (h2s.join('|') !== SECTIONS.join('|')) fail(`${c.tag}: sections must be exactly [${SECTIONS.join(', ')}] in order; found [${h2s.join(', ')}]`);
    // code groups: each ::: code-group has the four tabs
    for (const group of md.matchAll(/::: code-group([\s\S]*?):::/g)) {
      const tabs = [...group[1].matchAll(/\[(HTML|React|Vue|Angular)\]/g)].map((m) => m[1]);
      if (tabs.join() !== 'HTML,React,Vue,Angular') fail(`${c.tag}: a code group lacks the four tabs in order (found ${tabs.join(',') || 'none'})`);
    }
    // examples vs stories
    const storiesFile = join(repo, 'packages', tier, 'src', slug, `${c.tag}.stories.ts`);
    if (!existsSync(storiesFile)) { fail(`${c.tag}: missing ${storiesFile}`); continue; }
    const { stories } = await import(pathToFileURL(storiesFile).href);
    const examplesSection = md.split('## Examples')[1]?.split('## API Reference')[0] ?? '';
    const h3s = [...examplesSection.matchAll(/^### (.+)$/gm)].map((m) => m[1].trim());
    const titles = Object.values(stories.examples).map((e) => e.title);
    if (h3s.join('|') !== titles.join('|')) fail(`${c.tag}: Examples headings [${h3s.join(', ')}] must equal stories examples [${titles.join(', ')}]`);
    for (const key of Object.keys(stories.examples)) {
      for (const [fw, ext] of Object.entries(FRAMEWORKS)) {
        const dir = fw === 'angular' ? 'src/app/samples' : 'src/samples';
        const sample = join(repo, 'apps/sandbox', fw, dir, slug, `${key}.${ext}`);
        if (!existsSync(sample)) fail(`${c.tag}: missing ${fw} sample ${sample}`);
      }
    }
    // every variant/size/state in the matrix appears on the page (by name)
    for (const v of stories.variants) if (v !== 'default' && !new RegExp(`\\b${v}\\b`, 'i').test(md)) fail(`${c.tag}: variant "${v}" is in the VRT matrix but not documented`);
    for (const s of stories.sizes) if (!new RegExp(`\\b${s}\\b`).test(md)) fail(`${c.tag}: size "${s}" is in the VRT matrix but not documented`);
  }
}
if (errors) { console.error(`\n✖ docs parity: ${errors} problem(s)`); process.exit(1); }
console.log('✔ docs parity');
