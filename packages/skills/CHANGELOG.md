# @aranghat/skills

## 1.0.1

### Patch Changes

- 9421a7f: Mega Menu, in `@aranghat/extended`: a site navigation bar whose triggers open wide panels of named link groups (`art-mega-menu`, `art-mega-menu-item`, `art-mega-menu-group`, `art-mega-menu-link`). The groups flow in columns (`max-columns`) or rows (`max-rows`); `full-width` spans a panel across the viewport and `full-width-content` lets its content fill it instead of a centred container, each settable on the bar or on one item; `aside` and `footer` slots sit beside and below the groups, and a `trigger` slot (with `hide-chevron`) opens a menu from a burger icon or a logo. Tokens gain `container.5xl`, `6xl` and `7xl`; an overlay can anchor to a floating-ui virtual element.

## 1.0.0

### Major Changes

- fc79ed8: artui 1.0.0 — first release of the Stencil-authored design system: tokens, primitives, icons, the five component tiers with HTML, React, Vue and Angular bindings, server-side rendering (`@aranghat/hydrate`, `artui-ssr`) and the `@aranghat/ui` meta-package. Lockstep version across every package.
