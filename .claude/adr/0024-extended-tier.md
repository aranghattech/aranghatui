# ADR-0024: `@aranghat/extended` — a seventh tier for compositions with no shadcn counterpart

**Status:** Accepted (2026-09-16)

## Context

N2 promises parity with `ui.shadcn.com/docs/components`, and Tiers 2–5 deliver it: every name on that page exists here except Chart, and Direction, which is a utility. That parity is easy to verify precisely because those tiers contain nothing else.

Tier 6 (widgets) already breaks that cleanliness a little — App Shell, the auth screens and the ready-made pages have no shadcn counterpart — but they are all *assemblies of shadcn parts* with no new interaction model.

The two-level navigation rail is neither. It is a primary icon rail beside a secondary panel, with a collapse state that fans out to the rows inside it. It is a pattern in its own right (VS Code's activity bar, Linear's sidebar, Material's navigation rail), it is the kind of thing a product asks for and shadcn does not have, and there will be more of them.

Putting it in `navigation` would mean a Tier 4 component that a reader cannot find on shadcn's page, weakening the one rule that makes N2 checkable. Putting it in `widgets` would mean a "ready-made page" that is really a primitive of app layout.

## Decision

A seventh tier, `@aranghat/extended`, holds components that have **no shadcn counterpart and are not assemblies of one**. Tiers 2–5 stay a mirror of shadcn, tier 6 stays ready-made pages, and this is where the house's own patterns live.

- Peers: `tokens`, `primitives`, `base`. It deliberately does **not** peer on `components`, `navigation` or `modals`: a product should be able to take the rail without the rest of the system. When an extended component genuinely needs a higher tier, that peer is added then, not pre-emptively.
- Package budget 30 kB gzip, per-component 8 kB — the same shape as widgets, which it resembles in size.
- Everything else is identical to the other tiers: its own Stencil project (ADR-0009), inlined runtime (ADR-0002), React / Vue / Angular bindings, the `artui-ssr` second build (ADR-0023), and the full Definition of Done.
- It is last in the dependency order, so `@aranghat/ui` and the hydrate app pick it up after widgets.

## Consequences

- N2 stays literally checkable: `tooling/catalog.json` for tiers 2–5 can be diffed against shadcn's index, and a mismatch is a bug rather than a judgement call.
- A consumer who wants only the rail installs `tokens`, `primitives`, `base` and `extended`, and the install-isolation check enforces that nothing else comes with it.
- One more tier to keep in lockstep, one more runtime chunk (~7 kB) for an app that uses both this and other tiers. That is the cost of the split and it is the same cost every tier boundary already carries.
- **The full-admin-shell reference budget moves from 180 kB to 195 kB.** That page is defined as "every tier via `@aranghat/ui`", so it grew by the new tier and its runtime: 171.54 → 182.96 kB gzip. The honest options were to raise the number or to stop calling the reference "all tiers"; the budget tracks how many tiers exist, and it is re-stated here rather than quietly edited. Per-component and per-tier budgets are untouched, and `extended` lands at 11.93 kB against its own 30 kB ceiling.
- If an extended component is later adopted by shadcn, moving it down a tier is a breaking change (CLAUDE.md §2), so the bar for putting something here is that it is *ours*, not that it is merely missing today.
