# ADR-0025: Workspace Switcher lives in `navigation`, not `extended`

**Status:** Accepted (2026-09-20)

## Context

A workspace (tenant / organisation / team) switcher is the control at the top of a SaaS sidebar or
at the start of its top bar: the current workspace with its logo, and a menu to change it. It is
the shape `shadcn.io/blocks/navbar-workspace-switcher` publishes and the one shadcn's own
`sidebar-07` block hand-assembles from `SidebarMenuButton` + `DropdownMenu`.

It is **not** on `ui.shadcn.com/docs/components`, so N2 does not ask for it, and ADR-0024 would
send anything in that position to `@aranghat/extended`.

Three things argue against extended here.

1. **It has to see the sidebar's collapse state.** The requirement is that the trigger shows the
   full row in a top bar and an icon-only square inside a collapsed sidebar. That state is not
   public: it is `data-collapsible="icon"` read through `bindSidebar` / `isIconMode` in
   `packages/navigation/src/sidebar/context.ts`, an internal module of this tier. `extended`
   peers only on tokens / primitives / base, so a component there cannot read it, and neither can
   a consumer hand-composing the pattern.
2. **It is a menu.** Put it in `extended` and its panel, its roving focus, its typeahead and its
   `visible-items` cap are a second implementation of `menu/menu-list.ts` and
   `menu/visible-items.ts` — the exact duplication §6 exists to prevent, paid for twice in bytes.
3. **Tier 4 is already not a literal mirror.** ADR-0024 says tiers 2–5 "contain nothing else", but
   `art-top-nav` is in navigation today and is not a shadcn component either. The claim was
   already approximate; this ADR states the real rule rather than letting the exception grow
   silently.

## Decision

`art-workspace-switcher` and `art-workspace-switcher-item` ship in `@aranghat/navigation`.

The rule for tier 4 is restated as: **a navigation component belongs here when it is a shadcn
component, or when it is a navigation pattern that depends on this tier's internals.** A pattern
that needs nothing from this tier still goes to `extended` — the Nav Rail and the Mega Menu stay
where ADR-0024 put them, because neither reads sidebar context nor drives a menu level.

- No new tokens. It consumes the sidebar and menu semantic tokens that
  `art-sidebar-menu-button` and `art-menu-item` already use, so the one-border and density rules
  (N4, §8) hold by construction.
- No new runtime dependency, and no new peer: everything it needs is in this tier or in
  `primitives`.
- `art-workspace-switcher` joins `FAMILY` in `sidebar/context.ts`, so it rebinds when it is
  slotted into a sidebar through another shadow root (`art-app-shell`).

## Consequences

- N2 stays checkable, but the check is no longer "diff the tier against shadcn's index". Tier 4
  now carries two names that are not on that index (`art-top-nav`, `art-workspace-switcher`), and
  `tooling/catalog.json` marks them `house: true` so the diff can exclude them mechanically
  instead of by memory.
- Moving this component to another tier later is a breaking change (CLAUDE.md §2), so the bar for
  the next tier-4 addition is the same one stated above, not "it felt like navigation".
- The navigation package budget (45 kB gzip) absorbs the component; the per-component budget is
  the tier-4 8 kB.
- A consumer who wants the switcher must install `navigation`, which they already have: the
  switcher is useless without `art-sidebar` or `art-top-nav` around it.
