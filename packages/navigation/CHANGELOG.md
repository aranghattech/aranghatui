# @aranghat/navigation

## 1.0.2

### Patch Changes

- 53ce6c7: Workspace Switcher, in `@aranghat/navigation`: the tenant control of a SaaS shell — the current workspace at the start of an `art-top-nav` or the top of an `art-sidebar`, and a menu to change it (`art-workspace-switcher`, `art-workspace-switcher-item`). Rows are `menuitemradio`s that carry the workspace's logo, `name`, `plan` and `shortcut`, and the active row's logo is copied into the trigger; `action` holds the rows after the separator, such as "Add workspace". `display` is `full`, `icon` or `auto`, and `auto` clips the trigger to the logo square, named by a tooltip, inside a sidebar collapsed to icons (ADR-0025). Choosing a row emits `value-change` with the row's `value`, its `item` data object and its element; `visible-items` caps the panel at a number of rows.
- Updated dependencies [f08b9b5]
- Updated dependencies [5eadeca]
- Updated dependencies [88272be]
  - @aranghat/base@1.0.2
  - @aranghat/primitives@1.0.2
  - @aranghat/tokens@1.0.2

## 1.0.1

### Patch Changes

- e7a422d: Menus size themselves to their content. An open Dropdown or Context Menu is now as tall as its items and scrolls only when the viewport leaves no room, instead of clipping at a fixed height; `visible-items` caps it at a number of rows measured from a real item. The floating primitive publishes the room it has as `--art-available-height`, and a Context Menu written with `open` now opens at the corner of its area rather than staying shut.
- Updated dependencies [9421a7f]
- Updated dependencies [e7a422d]
  - @aranghat/tokens@1.0.1
  - @aranghat/primitives@1.0.1
  - @aranghat/base@1.0.1

## 1.0.0

### Major Changes

- fc79ed8: artui 1.0.0 — first release of the Stencil-authored design system: tokens, primitives, icons, the five component tiers with HTML, React, Vue and Angular bindings, server-side rendering (`@aranghat/hydrate`, `artui-ssr`) and the `@aranghat/ui` meta-package. Lockstep version across every package.

### Patch Changes

- Updated dependencies [fc79ed8]
  - @aranghat/base@1.0.0
  - @aranghat/primitives@1.0.0
  - @aranghat/tokens@1.0.0
