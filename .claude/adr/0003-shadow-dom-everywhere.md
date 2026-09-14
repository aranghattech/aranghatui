# ADR-0003: Shadow DOM for every component, including Tier 6 widgets

**Status:** Accepted (2026-09-14)

## Context
Open decision: shadow vs `scoped` for layout-heavy widgets. Widgets are compositions of slotted lower-tier components; page-level layout is driven by slots and CSS custom properties, not by global selectors.

## Decision
`shadow: true` on every component. Consumer styling hooks are `::part()` and documented `--art-*` custom properties. A widget that demonstrably cannot work in shadow DOM requires its own ADR before switching to `scoped`.

## Consequences
- Tokens stay the only cross-boundary styling channel (CSS custom properties inherit through shadow roots).
- Tailwind is compiled per component into the shadow stylesheet; no global utility sheet.
