# ADR-0017: Tier 3 `components` may depend on Tier 2 `base`

**Status:** Accepted (2026-09-14)

## Context
§2's dependency table listed `components → tokens, primitives`, while §5 allows a tier to depend on any tier above it. Alert, Calendar, Toast, Carousel and the Data Table recipe all need Button, Checkbox or Table.

## Decision
`@aranghat/components` lists `@aranghat/base` as a peer + dev dependency. The §2 table is amended. No downward dependency is ever allowed.

## Consequences
- Installing `components` requires `base`; the docs installation section states it.
