# Primitives

`@aranghat/primitives` is the shared headless logic every tier builds on (CLAUDE.md §6). One implementation per behaviour is the main lever for both bundle size and consistency: if two components need the same behaviour it lives here first. Consumers of the design system never import it directly; tiers list it as a peer dependency.

| Module | Import | What it does |
|---|---|---|
| `define` | `defineIdempotent(tag, ctor)` | Guarded custom-element registration (two tiers or two versions on one page never throw). |
| `id` | `uniqueId(prefix)` | SSR-stable ids for ARIA wiring. |
| `events` | `redispatch(host, e)`, `emit(host, name, detail)` | Re-dispatches non-composed native events (`input`, `change`, `reset`, `submit`) from the host; typed kebab-case custom events (ADR-0001). |
| `dom` | `getTabbables`, `deepActiveElement`, `closestAcrossShadow`, `containsAcrossShadow`, `isRtl`, `cssLength` | Shadow-DOM-aware DOM helpers; `cssLength(el, '--art-space-1')` reads a token in px so positioning maths stays on tokens. |
| `floating` | `createFloating(reference, floating, options)` | Positioning via `@floating-ui/dom`: placement, offset, flip, shift, arrow, match-width; sets `data-placement`; auto-updates on scroll/resize/layout. |
| `dismissable` | `createDismissable(el, { onDismiss, … })` | Outside pointer, Escape (top-most layer only), focus-outside; optional scroll lock. |
| `scroll-lock` | `lockScroll()`, `unlockScroll()` | Reference-counted document scroll lock with scrollbar compensation. |
| `focus-trap` | `trapFocus(container, { initialFocus, returnFocus })` | APG modal focus containment across shadow roots and slots; traps stack; focus restored on release. |
| `roving-tabindex` | `createRovingTabindex(container, { getItems, orientation, loop })` | Arrow / Home / End navigation with one tabbable item; RTL-aware; click adopts the item. |
| `portal` | `portal(el, { layer })`, `getPortalRoot()` | Moves overlays to one shared host, stacks by `--art-z-*` layer, inherits `data-theme`, `data-brand` and `dir` from the origin. |
| `typeahead` | `createTypeahead({ getItems, getActiveIndex, onMatch })` | APG type-to-select for listboxes and menus, including repeated-character cycling. |

Planned when their first consumers land: `table-state` (Data Table recipe, ADR-0006) and `date` (Calendar; `Intl` only, no date library).

## Rules

- No DOM framework, no Stencil imports — plain TypeScript over the DOM so every tier (and tests in jsdom) can use it.
- Every module has unit tests (`pnpm --filter @aranghat/primitives test:unit`) and a size entry; the runtime + primitives budget is 20 kB gzip.
- New shared behaviour is added here **before** the second component that needs it ships (§6).
