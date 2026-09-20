#!/usr/bin/env node
/**
 * Generates a component's docs page and framework samples from its stories file.
 *   node apps/docs/scripts/gen-page.mjs <tier> <art-tag>
 * - apps/docs/components/<tier>/<slug>.md is regenerated (unless it starts with <!-- hand-written -->)
 * - sample files are written only when absent (delete one to regenerate; `manual: true` examples get HTML only)
 * - Angular samples/index.ts and the HTML sandbox main.ts are kept in sync
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const [tier, tag] = process.argv.slice(2);
if (!tier || !tag) { console.error('usage: gen-page <tier> <art-tag>'); process.exit(2); }
const repo = resolve(import.meta.dirname, '../../..');
const catalog = JSON.parse(readFileSync(join(repo, 'tooling/catalog.json'), 'utf8'));
const tierOf = (t) => Object.entries(catalog.tiers).find(([, d]) => d.components.some((c) => c.tag === t))?.[0];
const slug = tag.replace(/^art-/, '');
const pascal = (s) => s.split('-').map((p) => p[0].toUpperCase() + p.slice(1)).join('');
const camel = (s) => { const p = pascal(s); return p[0].toLowerCase() + p.slice(1); };
const { stories } = await import(pathToFileURL(join(repo, 'packages', tier, 'src', slug, `${tag}.stories.ts`)).href);
const d = stories.docs;
if (!d) { console.error(`${tag}: stories.docs is missing`); process.exit(1); }
const name = catalog.tiers[tier].components.find((c) => c.tag === tag)?.name ?? pascal(slug);

// ---------------------------------------------------------------- samples
const S = join(repo, 'apps/sandbox');
const artTags = (html) => [...new Set([...html.matchAll(/<(art-[a-z0-9-]+)/g)].map((m) => m[1]))];
const VOID = /<(input|img|br|hr|meta|link|source|track|wbr)([^>]*?)(?<!\/)>/g;

function toReact(html) {
  let out = html.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
  out = out.replace(/<(\/?)art-([a-z0-9-]+)/g, (_, c, t) => `<${c}${pascal(t)}`);
  out = out.replace(VOID, '<$1$2 />');
  out = out.replace(/\sclass=/g, ' className=').replace(/\sfor=/g, ' htmlFor=').replace(/\stabindex=/g, ' tabIndex=').replace(/\sreadonly\b/g, ' readOnly').replace(/\smaxlength=/g, ' maxLength=').replace(/\sautocomplete=/g, ' autoComplete=').replace(/\scolspan=/g, ' colSpan=').replace(/\srowspan=/g, ' rowSpan=');
  for (const a of ['stroke-width', 'stroke-linecap', 'stroke-linejoin', 'fill-rule', 'clip-rule', 'stroke-dasharray']) out = out.replaceAll(` ${a}=`, ` ${camel(a)}=`);
  // custom properties keep their name (quoted); other declarations become camelCase keys
  out = out.replace(/\sstyle="([^"]*)"/g, (_, css) => ` style={{ ${css.split(';').filter((d) => d.trim()).map((decl) => { const [k, ...v] = decl.split(':'); const key = k.trim(); return `${key.startsWith('--') ? `'${key}'` : camel(key)}: '${v.join(':').trim()}'`; }).join(', ')} }}`);
  // kebab-case props on wrapped components → camelCase (aria-/data- stay)
  out = out.replace(/<[A-Z][\w]*[^>]*>/g, (tagStr) => tagStr.replace(/\s(?!aria-|data-)([a-z]+(?:-[a-z]+)+)=/g, (_, k) => ` ${camel(k)}=`));
  out = out.replace(/<[A-Z][\w]*[^>]*>/g, (tagStr) => tagStr.replace(/\s([a-zA-Z]+)="(true|false)"/g, ' $1={$2}')); // open="false" → open={false}
  out = out.replace(/<([A-Z]\w*)([^>]*)><\/\1>/g, '<$1$2 />'); // empty elements self-close
  return out.trim();
}
function toVue(html) { return html.replace(/<(\/?)art-([a-z0-9-]+)/g, (_, c, t) => `<${c}${pascal(t)}`).replace(/<[A-Z][\w]*[^>]*>/g, (tagStr) => tagStr.replace(/\s([a-z-]+)="(true|false)"/g, ' :$1="$2"')).replace(/<([A-Z]\w*)([^>]*)><\/\1>/g, '<$1$2 />').trim(); }
const indent = (s, n) => s.split('\n').map((l) => ' '.repeat(n) + l).join('\n');

function imports(html, fw) {
  const byTier = {};
  for (const t of artTags(html)) { const tt = tierOf(t) ?? tier; (byTier[tt] ??= []).push(t); }
  return Object.entries(byTier).map(([tt, tags]) => {
    const names = tags.map((t) => (fw === 'angular' ? pascal(t) : pascal(t.replace(/^art-/, '')))).sort().join(', ');
    return `import { ${names} } from '@aranghat/${tt}-${fw}';`;
  }).join('\n');
}

function writeIfAbsent(file, content) {
  if (existsSync(file)) return false;
  mkdirSync(join(file, '..'), { recursive: true });
  writeFileSync(file, content);
  return true;
}

const written = [];
/** key → the Angular sample's class name, so the registry below cannot disagree with the files. */
const ngClass = {};
for (const [key, ex] of Object.entries(stories.examples)) {
  const html = ex.render();
  if (writeIfAbsent(join(S, 'html/src/samples', slug, `${key}.html`), html + '\n')) written.push(`html/${key}`);
  // The React sample's function must not shadow a component it imports (`function FieldGroup()`
  // rendering `<FieldGroup>` recurses forever — React builds an infinite tree until the tab OOMs).
  // Computed before the `manual` bail-out: a hand-written sample is registered under the same name.
  const imported = artTags(html).map((t) => pascal(t.replace(/^art-/, '')));
  const cmp = imported.includes(pascal(key)) ? `${pascal(key)}Example` : pascal(key);
  ngClass[key] = `${pascal(slug)}${cmp}`;
  if (ex.manual) continue;
  if (writeIfAbsent(join(S, 'react/src/samples', slug, `${key}.tsx`), `${imports(html, 'react')}\n\nexport default function ${cmp}() {\n  return (\n    <>\n${indent(toReact(html), 6)}\n    </>\n  );\n}\n`)) written.push(`react/${key}`);
  if (writeIfAbsent(join(S, 'vue/src/samples', slug, `${key}.vue`), `<script setup lang="ts">\n${imports(html, 'vue')}\n</script>\n\n<template>\n${indent(toVue(html), 2)}\n</template>\n`)) written.push(`vue/${key}`);
  // the Angular template is a template literal: backticks and `${` in the sample must be escaped
  const ngHtml = html.replace(/`/g, '\\`').replace(/\$\{/g, '\\${')
    .replace(/<art-[^>]*>/g, (tagStr) => tagStr.replace(/\s([a-z-]+)="(true|false)"/g, (_, k, v) => ` [${camel(k)}]="${v}"`)); // open="false" → [open]="false"
  if (writeIfAbsent(join(S, 'angular/src/app/samples', slug, `${key}.ts`), `import { Component } from '@angular/core';\n${imports(html, 'angular')}\n\n@Component({\n  selector: 'sample-${slug}-${key}',\n  imports: [${artTags(html).map(pascal).sort().join(', ')}],\n  template: \`\n${indent(ngHtml, 4)}\n  \`,\n})\nexport class ${pascal(slug)}${cmp} {}\n`)) written.push(`angular/${key}`);
}

// Angular registry
{
  const p = join(S, 'angular/src/app/samples/index.ts');
  let s = readFileSync(p, 'utf8');
  for (const key of Object.keys(stories.examples)) {
    const cls = ngClass[key];
    if (s.includes(`{ ${cls} }`)) continue;
    s = s.replace(/\n\/\*\* Static array/, `import { ${cls} } from './${slug}/${key}';\n\n/** Static array`);
    s = s.replace(/export const SAMPLE_COMPONENTS = \[([^\]]*)\];/, (_, list) => `export const SAMPLE_COMPONENTS = [${list.trim()}, ${cls}];`);
    s = s.replace(/\];\s*$/, `  { id: '${slug}/${key}', component: ${cls} },\n];\n`);
  }
  writeFileSync(p, s);
}
// HTML sandbox registrations
{
  const p = join(S, 'html/src/main.ts');
  let s = readFileSync(p, 'utf8');
  for (const t of new Set(Object.values(stories.examples).flatMap((ex) => artTags(ex.render())))) {
    const fn = `define${pascal(t.replace(/^art-/, ''))}`;
    if (new RegExp(`\\b${fn}\\(\\)`).test(s)) continue; // whole name: defineSidebar is not defineSidebarProvider
    s = s.replace("import './sandbox.css';", `import { defineCustomElement as ${fn} } from '@aranghat/${tierOf(t) ?? tier}/${t.replace(/^art-/, '')}';\nimport './sandbox.css';`);
    s = s.replace(/\n\n\/\/ Every sample/, `\n${fn}();\n\n// Every sample`);
  }
  writeFileSync(p, s);
}

// ---------------------------------------------------------------- page
const page = join(repo, 'apps/docs/components', tier, `${slug}.md`);
if (existsSync(page) && readFileSync(page, 'utf8').startsWith('<!-- hand-written -->')) { console.log(`✔ ${tag}: page is hand-written, samples ${written.length ? 'written: ' + written.join(', ') : 'unchanged'}`); process.exit(0); }
const cg = (key) => `::: code-group\n<<< ../../../sandbox/html/src/samples/${slug}/${key}.html [HTML]\n<<< ../../../sandbox/react/src/samples/${slug}/${key}.tsx [React]\n<<< ../../../sandbox/vue/src/samples/${slug}/${key}.vue [Vue]\n<<< ../../../sandbox/angular/src/app/samples/${slug}/${key}.ts [Angular]\n:::`;
const pkgs = [tier, ...(d.requires ?? [])].map((t) => `@aranghat/${t}`);
const install = (fw) => `pnpm add @aranghat/tokens ${pkgs.join(' ')}${fw ? ` @aranghat/${tier}-${fw}` : ''}`;
const firstKey = Object.keys(stories.examples)[0];
// The top Preview repeats the first example: suffix every id / idref so the two copies never collide
// (a duplicate id would make `for` / aria-describedby resolve to the first, off-screen copy).
const uniquify = (html, suffix) => html.replace(/\b(id|for|aria-describedby|aria-labelledby|aria-controls)="([^"]+)"/g, (_, attr, val) => `${attr}="${val.split(/\s+/).map((v) => `${v}-${suffix}`).join(' ')}"`);
const table = (rows, h) => `| ${h[0]} | ${h[1]} |\n|---|---|\n${rows.map(([a, b]) => `| ${a} | ${b} |`).join('\n')}`;
const md = `# ${name}

${d.description}

## Preview

<Preview frame="${stories.examples[firstKey].frame ?? stories.frame ?? 'inline'}">
${indent(uniquify(stories.examples[firstKey].render(), 'preview'), 2)}
</Preview>

## Installation

Lives in \`@aranghat/${tier}\`${d.requires?.length ? ` (requires ${d.requires.map((t) => `\`@aranghat/${t}\``).join(', ')})` : ''}.

::: code-group
\`\`\`bash [HTML]
${install('')}
\`\`\`
\`\`\`bash [React]
${install('react')}
\`\`\`
\`\`\`bash [Vue]
${install('vue')}
\`\`\`
\`\`\`bash [Angular]
${install('angular')}
\`\`\`
:::

## Usage

${cg(firstKey)}
${d.usage ? `\n${d.usage}\n` : ''}
## Examples
${Object.entries(stories.examples).map(([key, ex]) => `
### ${ex.title}
${ex.note ? `\n${ex.note}\n` : ''}
<Preview frame="${ex.frame ?? stories.frame ?? 'inline'}">
${indent(ex.render(), 2)}
</Preview>

${cg(key)}
`).join('')}
## API Reference

<ApiReference tag="${tag}" />
${(d.api ?? []).map((t) => `\n<ApiReference tag="${t}" nested />\n`).join('')}
## Accessibility

${table(d.keyboard.map(([k, a]) => [`\`${k}\``, a]), ['Key', 'Action'])}

${d.roles}${d.apg ? ` Pattern: [APG](${d.apg}).` : ''}

States: ${d.states}

## Tokens used

${table(d.tokens.map(([t, u]) => [`\`${t}\``, u]), ['Token', 'Used for'])}

## Do / Don't

${table(d.dos, ['Do', "Don't"])}
`;
mkdirSync(join(page, '..'), { recursive: true });
writeFileSync(page, md);
console.log(`✔ ${tag}: page generated; samples written: ${written.length ? written.join(', ') : 'none (all present)'}`);
