# ADR-0019: No downward dependencies, even for shadcn compositions

**Status:** Accepted (2026-09-14)

## Context
Two shadcn components compose across our tiers in the wrong direction: `CommandDialog` (Tier 3 Command inside Tier 5 Dialog) and Sidebar's mobile mode (Tier 4 Sidebar inside Tier 5 Sheet).

## Decision
- `art-command` has no built-in dialog mode. The docs page shows the composition `<art-dialog><art-command/></art-dialog>` and the widgets tier may ship it as a ready composition.
- `art-sidebar` implements its off-canvas mobile mode with the `portal`, `focus-trap` and `dismissable` primitives directly, sharing motion tokens with Sheet so the two look identical.

## Consequences
- The primitives grow the shared overlay logic first (§6 rule), which is what keeps Sheet and Sidebar identical.
