# art-mega-menu



<!-- Auto Generated Below -->


## Overview

Mega Menu — a site navigation bar whose triggers open wide panels of named link groups. The
groups flow in columns or rows with a cap on either; a panel can span the viewport, and its
content can fill that width or sit in a centred container. An `aside` (a tutorial, a sales
prompt) and a `footer` sit beside and below the groups. Panels live on the platform top layer
and one is open at a time (the pattern of shadcn's full mega menu example).

The width settings here apply to every panel; an `art-mega-menu-item` can opt in on its own.

## Properties

| Property           | Attribute            | Description                                                                                                        | Type      | Default  |
| ------------------ | -------------------- | ------------------------------------------------------------------------------------------------------------------ | --------- | -------- |
| `fullWidth`        | `full-width`         | Every panel spans the full width of the viewport, hanging from the bottom edge of this element.                    | `boolean` | `false`  |
| `fullWidthContent` | `full-width-content` | Every panel's content fills its panel instead of sitting in a centred container (`--art-mega-menu-content-width`). | `boolean` | `false`  |
| `label`            | `label`              | Accessible name of the `<nav>`.                                                                                    | `string`  | `'Main'` |


## Slots

| Slot | Description            |
| ---- | ---------------------- |
|      | `art-mega-menu-item`s. |


## Shadow Parts

| Part     | Description              |
| -------- | ------------------------ |
| `"list"` | The list of bar entries. |
| `"nav"`  | The `<nav>`.             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
