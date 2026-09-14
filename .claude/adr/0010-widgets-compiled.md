# ADR-0010: Widgets ship as compiled components

**Status:** Accepted (2026-09-14)

## Context
A shadcn-style copy-paste registry would require hand-written React, Vue and Angular sources, which N5 forbids.

## Decision
`@aranghat/widgets` ships compiled Stencil components with the same wrappers and docs as every other tier. Customisation is by slots, props, `::part()` and tokens.

## Consequences
- Widgets are held to the same DoD, budgets and VRT matrix as components.
