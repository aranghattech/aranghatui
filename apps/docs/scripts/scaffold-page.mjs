#!/usr/bin/env node
/** Usage: node scripts/scaffold-page.mjs <tier> <tag> — writes the nine-section page skeleton + empty sample files. */
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const [tier, tag] = process.argv.slice(2);
if (!tier || !tag) { console.error('usage: scaffold-page <tier> <art-tag>'); process.exit(2); }
const repo = resolve(import.meta.dirname, '../../..');
const slug = tag.replace(/^art-/, '');
const name = slug.split('-').map((p) => p[0].toUpperCase() + p.slice(1)).join(' ');
const page = join(repo, 'apps/docs/components', tier, `${slug}.md`);
if (existsSync(page)) { console.error(`exists: ${page}`); process.exit(1); }
const s = (ex) => `::: code-group
<<< ../../../sandbox/html/src/samples/${slug}/${ex}.html [HTML]
<<< ../../../sandbox/react/src/samples/${slug}/${ex}.tsx [React]
<<< ../../../sandbox/vue/src/samples/${slug}/${ex}.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/${slug}/${ex}.ts [Angular]
:::`;
mkdirSync(join(repo, 'apps/docs/components', tier), { recursive: true });
writeFileSync(page, `# ${name}

One-line description.

## Preview

<Preview><${tag}></${tag}></Preview>

## Installation

Lives in \`@aranghat/${tier}\`.

::: code-group
\`\`\`bash [HTML]
pnpm add @aranghat/tokens @aranghat/${tier}
\`\`\`
\`\`\`bash [React]
pnpm add @aranghat/tokens @aranghat/${tier} @aranghat/${tier}-react
\`\`\`
\`\`\`bash [Vue]
pnpm add @aranghat/tokens @aranghat/${tier} @aranghat/${tier}-vue
\`\`\`
\`\`\`bash [Angular]
pnpm add @aranghat/tokens @aranghat/${tier} @aranghat/${tier}-angular
\`\`\`
:::

## Usage

${s('basic')}

## Examples

### Basic

<Preview><${tag}></${tag}></Preview>

${s('basic')}

## API Reference

<ApiReference tag="${tag}" />

## Accessibility

| Key | Action |
|---|---|
| \`Tab\` | … |

Roles: … Pattern: [APG …](https://www.w3.org/WAI/ARIA/apg/patterns/).

## Tokens used

| Token | Used for |
|---|---|
| \`--art-…\` | … |

## Do / Don't

| Do | Don't |
|---|---|
| … | … |
`);
for (const [fw, ext, dir] of [['html', 'html', 'src/samples'], ['react', 'tsx', 'src/samples'], ['vue', 'vue', 'src/samples'], ['angular', 'ts', 'src/app/samples']]) {
  const d = join(repo, 'apps/sandbox', fw, dir, slug); mkdirSync(d, { recursive: true });
  const f = join(d, `basic.${ext}`); if (!existsSync(f)) writeFileSync(f, '');
}
console.log(`✔ scaffolded ${page} + sample stubs`);
