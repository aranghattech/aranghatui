# art-nav-rail



<!-- Auto Generated Below -->


## Overview

Nav Rail — a two-level application sidebar: a permanent icon rail that switches context, beside
a secondary panel that lists the sections of the context you are in. The panel collapses to
icons; the rail never does.

The rail carries `art-nav-rail-item`s; the panel carries `art-nav-section`s of `art-nav-link`s.
Everything else — the brand mark, the workspace switcher, the promo card, the user row — is a
slot, because those belong to the product, not to the design system.

## Properties

| Property      | Attribute      | Description                                                                   | Type      | Default                         |
| ------------- | -------------- | ----------------------------------------------------------------------------- | --------- | ------------------------------- |
| `collapsed`   | `collapsed`    | Panel collapsed to icons. The rail is always icons.                           | `boolean` | `false`                         |
| `hideToggle`  | `hide-toggle`  | Hide the collapse button (the panel is then controlled by `collapsed` alone). | `boolean` | `false`                         |
| `label`       | `label`        | Accessible name of the panel's navigation.                                    | `string`  | `'Sections'`                    |
| `railLabel`   | `rail-label`   | Accessible name of the rail's navigation.                                     | `string`  | `'Contexts'`                    |
| `toggleLabel` | `toggle-label` | Accessible name of the collapse button.                                       | `string`  | `'Toggle the navigation panel'` |


## Events

| Event              | Description                                                               | Type                                   |
| ------------------ | ------------------------------------------------------------------------- | -------------------------------------- |
| `collapsed-change` | Emitted when the user collapses or expands the panel; `detail.collapsed`. | `CustomEvent<{ collapsed: boolean; }>` |


## Slots

| Slot         | Description                                                                       |
| ------------ | --------------------------------------------------------------------------------- |
|              | `art-nav-section`s: the navigation of the current context.                        |
| `"brand"`    | Logo mark at the top of the rail.                                                 |
| `"footer"`   | A card above the user row (an assistant prompt, an upgrade nudge).                |
| `"header"`   | The panel's header: a workspace switcher, a search field.                         |
| `"rail"`     | `art-nav-rail-item`s: the contexts.                                               |
| `"rail-end"` | `art-nav-rail-item`s pinned to the bottom of the rail (settings, theme, account). |
| `"user"`     | The account row at the very bottom of the panel.                                  |


## Shadow Parts

| Part       | Description                          |
| ---------- | ------------------------------------ |
| `"footer"` | The footer region.                   |
| `"header"` | The panel header.                    |
| `"nav"`    | The `<nav>` wrapping the sections.   |
| `"panel"`  | The secondary column.                |
| `"rail"`   | The icon column.                     |
| `"toggle"` | The button that collapses the panel. |
| `"user"`   | The user region.                     |


## CSS Custom Properties

| Name                    | Description                                                               |
| ----------------------- | ------------------------------------------------------------------------- |
| `--art-nav-panel-width` | Width of the expanded panel. Defaults to the sidebar width token (16rem). |
| `--art-nav-rail-width`  | Width of the icon rail. Defaults to the `space.14` token (3.5rem).        |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
