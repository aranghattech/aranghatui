# ADR-0022 — Overlays render on the platform top layer (Popover API), not in a portal

**Status:** accepted (2026-09-15)

## Context

Tooltip, Popover, Hover Card — and later menus, selects and dialogs — must escape
`overflow: hidden` ancestors and stacking contexts. The classic answer is a portal: move the
panel to a host at the end of `<body>`. In a shadow-DOM design system a portal has a hidden
cost: a node moved out of its shadow root loses the component's stylesheet, so the panel must
become its own custom element (a second definition, more bytes) and framework bindings for its
content get fragile. The user's guidance was "take the right call as long as the size cost is
small".

## Decision

Overlay panels stay where they are authored — inside the component's shadow root, with the
content in a plain `<slot>` — and are shown on the **top layer** with the Popover API
(`popover="manual"`, `showPopover()` / `hidePopover()`). The top layer escapes every overflow
and stacking context without moving DOM, keeps the component's styles, and stacks overlays in
the order they open. Positioning uses `createFloating` with the `fixed` strategy (floating-ui),
because CSS anchor positioning is not yet available everywhere.

The `overlay` primitive wraps this: `open()` shows and positions, `close()` plays the exit
animation (`data-state="closed"`) and hides on `animationend`. Dismissal (Escape, outside
pointer, outside focus) stays with the `dismissable` primitive so nested overlays close one at
a time and dialogs can reuse it. `popover="manual"` is declared in the markup so a closed
panel is hidden by the user agent from the first paint; component CSS additionally hides an
idle panel (no `data-state`) for browsers without the API, where the fixed-position panel
simply stays in place.

The `portal` primitive remains for the rare case where a node genuinely has to move (none yet).

## Consequences

- Zero DOM moves, zero extra elements: Tooltip 1.9 kB, Popover 1.8 kB, Hover Card 1.8 kB gzip.
- Top-layer elements ignore `z-index`; the layer tokens (`--art-z-*`) apply only to portaled
  or fixed elements outside the top layer (toasts, sticky bars).
- A display utility on a panel (`flex`) must not outrank the UA's `:not(:popover-open)` rule —
  every overlay stylesheet carries the explicit hidden rules.
- Native light-dismiss (`popover="auto"`) is deliberately not used: it would hide without the
  exit animation and bypass the shared dismiss stack.
