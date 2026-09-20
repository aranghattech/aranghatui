---
'@aranghat/navigation': patch
'@aranghat/skills': patch
---

Workspace Switcher, in `@aranghat/navigation`: the tenant control of a SaaS shell — the current workspace at the start of an `art-top-nav` or the top of an `art-sidebar`, and a menu to change it (`art-workspace-switcher`, `art-workspace-switcher-item`). Rows are `menuitemradio`s that carry the workspace's logo, `name`, `plan` and `shortcut`, and the active row's logo is copied into the trigger; `action` holds the rows after the separator, such as "Add workspace". `display` is `full`, `icon` or `auto`, and `auto` clips the trigger to the logo square, named by a tooltip, inside a sidebar collapsed to icons (ADR-0025). Choosing a row emits `value-change` with the row's `value`, its `item` data object and its element; `visible-items` caps the panel at a number of rows.
