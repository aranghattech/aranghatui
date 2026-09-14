# art-icon



<!-- Auto Generated Below -->


## Overview

Renders an icon from `@aranghat/icons` (ADR-0007). Icons are never bundled
into components: import the icon module you need and pass it as `icon`.

## Properties

| Property | Attribute | Description                                                            | Type                    | Default     |
| -------- | --------- | ---------------------------------------------------------------------- | ----------------------- | ----------- |
| `icon`   | --        | Icon data imported from `@aranghat/icons/<name>`.                      | `IconData \| undefined` | `undefined` |
| `label`  | `label`   | Accessible label. When omitted the icon is decorative (`aria-hidden`). | `string \| undefined`   | `undefined` |
| `size`   | `size`    | Visual size; matches the control size scale.                           | `"lg" \| "md" \| "sm"`  | `'md'`      |


## Slots

| Slot | Description                                       |
| ---- | ------------------------------------------------- |
|      | Raw SVG fallback when no `icon` data is provided. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
