# @aranghat/primitives

## 1.0.2

### Patch Changes

- 5eadeca: Roving tabindex skips disabled items toward the key pressed: `End` lands on the last enabled item and `Home` on the first. `End` used to search forward from a disabled last item and wrap around to the start.
- 88272be: Hover intent opens on keyboard focus of a control inside a shadow host. It checked `:focus-visible` on the retargeted event target; a delegates-focus host such as Button or Toggle never matches it, so a Tooltip whose trigger is a Button or a Toggle did not open from the keyboard.
- @aranghat/tokens@1.0.2

## 1.0.1

### Patch Changes

- 9421a7f: Mega Menu, in `@aranghat/extended`: a site navigation bar whose triggers open wide panels of named link groups (`art-mega-menu`, `art-mega-menu-item`, `art-mega-menu-group`, `art-mega-menu-link`). The groups flow in columns (`max-columns`) or rows (`max-rows`); `full-width` spans a panel across the viewport and `full-width-content` lets its content fill it instead of a centred container, each settable on the bar or on one item; `aside` and `footer` slots sit beside and below the groups, and a `trigger` slot (with `hide-chevron`) opens a menu from a burger icon or a logo. Tokens gain `container.5xl`, `6xl` and `7xl`; an overlay can anchor to a floating-ui virtual element.
- e7a422d: Menus size themselves to their content. An open Dropdown or Context Menu is now as tall as its items and scrolls only when the viewport leaves no room, instead of clipping at a fixed height; `visible-items` caps it at a number of rows measured from a real item. The floating primitive publishes the room it has as `--art-available-height`, and a Context Menu written with `open` now opens at the corner of its area rather than staying shut.
- Updated dependencies [9421a7f]
  - @aranghat/tokens@1.0.1

## 1.0.0

### Major Changes

- fc79ed8: artui 1.0.0 — first release of the Stencil-authored design system: tokens, primitives, icons, the five component tiers with HTML, React, Vue and Angular bindings, server-side rendering (`@aranghat/hydrate`, `artui-ssr`) and the `@aranghat/ui` meta-package. Lockstep version across every package.

### Patch Changes

- Updated dependencies [fc79ed8]
  - @aranghat/tokens@1.0.0
