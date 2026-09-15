# ADR-0021 — Light-DOM styling for deeply nested native content (Table, Typography)

**Status:** accepted (2026-09-15)

## Context

Every artui component renders into a shadow root and is styled by a per-component stylesheet
(Tailwind compiled into the shadow CSS). A shadow stylesheet can reach slotted light-DOM
content only through `::slotted()`, which matches **direct** slotted children and nothing
below them. Two shadcn components are, by nature, nested native markup:

- **Table** — `<table>` → `<thead>/<tbody>/<tfoot>` → `<tr>` → `<th>/<td>`. Rows, cells and
  captions are grandchildren of the slotted `<table>`.
- **Typography** — prose: headings, paragraphs, lists (`<ul>` → `<li>`), quotes, code, links.

Re-implementing either as shadow-rendered markup would mean re-creating the table / the
prose from slotted data (copying nodes, losing framework bindings, breaking `document`
queries and native table semantics), which contradicts ADR-0020 (native controls first).

## Decision

`art-table` and `art-typography` are **light-DOM components** (`shadow: false`): they render
their children in place and ship a stylesheet whose every rule is scoped by the tag name
(`art-table tr {…}`, `art-typography h2 {…}`). The markup stays a real `<table>` / real
prose; nothing outside the wrapper is styled.

Their stylesheets start with a `/* light-dom */` marker. The Tailwind plugin
(`tooling/stencil-tailwind`) recognises it and compiles the file **without** the token
`@theme`, the recipes or the shadow-root base reset — none of those may leak into the
document. Design values are still tokens only (`--art-*` custom properties), enforced by
the token lint like any other stylesheet.

## Consequences

- Consumers write ordinary HTML inside the wrapper; frameworks keep their bindings, and
  Data Table (Tier 3) can drive rows and cells directly.
- These two components have no `::part()` hooks; consumers override with normal CSS
  (`art-table td { … }`), which is the idiomatic escape hatch for light DOM.
- A light-DOM component must never use Tailwind utility classes or `@apply` (the plugin skips
  Tailwind for it) and must scope every selector under its tag.
- Any further light-DOM component needs a line in this ADR; the default remains shadow DOM.
