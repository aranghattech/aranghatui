# @aranghat/base

## 1.0.2

### Patch Changes

- f08b9b5: Button and Toggle move `aria-keyshortcuts` from the host onto their native button, so the shortcut is announced with the focused control. Toggle does the same for `aria-description`, which Tooltip sets on its trigger. Button's forwarding of `aria-expanded`, `aria-haspopup` and `aria-description` works again: the values were dropped, so popover and dropdown triggers built on Button lost their expanded state.
- Updated dependencies [5eadeca]
- Updated dependencies [88272be]
  - @aranghat/primitives@1.0.2
  - @aranghat/icons@1.0.2
  - @aranghat/tokens@1.0.2

## 1.0.1

### Patch Changes

- Updated dependencies [9421a7f]
- Updated dependencies [e7a422d]
  - @aranghat/tokens@1.0.1
  - @aranghat/primitives@1.0.1
  - @aranghat/icons@1.0.1

## 1.0.0

### Major Changes

- fc79ed8: artui 1.0.0 — first release of the Stencil-authored design system: tokens, primitives, icons, the five component tiers with HTML, React, Vue and Angular bindings, server-side rendering (`@aranghat/hydrate`, `artui-ssr`) and the `@aranghat/ui` meta-package. Lockstep version across every package.

### Patch Changes

- Updated dependencies [fc79ed8]
  - @aranghat/icons@1.0.0
  - @aranghat/primitives@1.0.0
  - @aranghat/tokens@1.0.0
