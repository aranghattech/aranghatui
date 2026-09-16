#!/usr/bin/env node
// Angular prerendered dist/browser/index.html → the same page with every artui element rendered as
// declarative shadow DOM (ADR-0023). Angular's server renderer leaves custom elements as tags with
// their attributes; @aranghat/hydrate fills in the shadow roots. Angular's own hydration markers
// (comments and `ngh` attributes) are kept.
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { renderToString } from '@aranghat/hydrate';

const file = resolve(import.meta.dirname, '../dist/browser/index.html');
const html = readFileSync(file, 'utf8');
const { html: out, diagnostics, hydratedCount } = await renderToString(html, { fullDocument: true, removeHtmlComments: false, removeUnusedStyles: false });
const errors = diagnostics.filter((d) => d.level === 'error');
if (errors.length || !out) { console.error(errors.map((d) => d.messageText).join('\n') || 'no html'); process.exit(1); }
writeFileSync(file, out);
console.log(`✔ dist/browser/index.html: ${hydratedCount} artui elements server-rendered`);
