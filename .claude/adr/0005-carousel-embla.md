# ADR-0005: Carousel uses `embla-carousel`

**Status:** Accepted (2026-09-14)

## Context
shadcn's Carousel is built on Embla. A CSS scroll-snap implementation would be smaller but would not match Embla's drag physics, loop, and plugin behaviour that shadcn parity implies.

## Decision
`@aranghat/components` takes `embla-carousel` (vanilla package, no framework adapter) as a runtime dependency used only by `art-carousel`. It is the second approved runtime dependency after `@floating-ui/dom`.

## Consequences
- Carousel budget: the Tier 3 composite limit of 8 kB applies to our code; Embla's ~5 kB gzip is reported separately in the size table and counted in the package budget.
- Tree-shaking must keep Embla out of any bundle that does not import Carousel (verified by size-limit entry for `components` without carousel).
