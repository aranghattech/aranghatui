# ADR-0020: Slider ships at a 4 kB budget

**Status:** Accepted (2026-09-15)

## Context
N1 gives Tier 2 atoms a 3 kB gzip budget and requires an ADR to ship above it. `art-slider` measures ~3.5 kB: it carries pointer capture and drag, one or two thumbs with ordering constraints, the full APG keyboard map (steps, page steps, Home/End, RTL swap), vertical orientation, form association and per-thumb ARIA. That is closer to a Tier 3 composite than to Badge or Label; shadcn's Radix-based Slider is ~6 kB gzip in React.

Trimming decorative styling saved under 100 bytes; removing capability (range, vertical, keyboard) would break shadcn parity (N2).

## Decision
`art-slider` has a 4 kB budget, recorded in `tooling/catalog.json` (`budgetKb`) and enforced by size-limit like every other entry. The Tier 2 default stays 3 kB.

## Consequences
- The base tier package budget (45 kB) is unchanged and remains the binding constraint.
- Any further slider feature (marks, tooltips) must fit in the 4 kB or come as an opt-in sub-component.
