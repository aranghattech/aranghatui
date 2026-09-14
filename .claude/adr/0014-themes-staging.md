# ADR-0014: Neutral default theme first; brand themes re-ported later

**Status:** Accepted (2026-09-14)

## Context
Six brand themes (spring, summer, mint, bricks, bluebytes, engineeringv1) existed in the previous incarnation as token overrides.

## Decision
Phase 1 ships the neutral default theme in light and dark plus one small example override (`themes/example.css`) proving the mechanism. The six brand themes are re-ported as semantic-only override sheets after Button has proven the pipeline, one PR per theme, each screenshot-tested against the Tier 2 gallery.

## Consequences
- The VRT matrix stays light/dark of the default theme; brand themes get a reduced smoke matrix (Button, Input, Card) when they land.
- The white-on-primary and border-consistency rules from the previous incarnation are carried into the token lint when the brands are re-ported.
