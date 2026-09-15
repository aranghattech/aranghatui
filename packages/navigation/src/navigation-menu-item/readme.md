# art-navigation-menu-item



<!-- Auto Generated Below -->


## Overview

Navigation Menu Item — a bar entry: either a plain link (`href`) or a trigger (`label`) that
reveals the panel in its default slot below the bar.

## Properties

| Property | Attribute | Description                                        | Type                  | Default     |
| -------- | --------- | -------------------------------------------------- | --------------------- | ----------- |
| `active` | `active`  | Marks the link as the current page.                | `boolean`             | `false`     |
| `href`   | `href`    | Makes the entry a plain link instead of a trigger. | `string \| undefined` | `undefined` |
| `label`  | `label`   | Trigger text.                                      | `string`              | `''`        |
| `open`   | `open`    |                                                    | `boolean`             | `false`     |


## Events

| Event                  | Description                                         | Type                              |
| ---------------------- | --------------------------------------------------- | --------------------------------- |
| `navigation-menu-open` | Internal: tells the menu to close the other panels. | `CustomEvent<void>`               |
| `open-change`          |                                                     | `CustomEvent<{ open: boolean; }>` |


## Methods

### `setOpen(open: boolean, byKeyboard?: boolean) => Promise<void>`

Open or close the panel.

#### Parameters

| Name         | Type      | Description |
| ------------ | --------- | ----------- |
| `open`       | `boolean` |             |
| `byKeyboard` | `boolean` |             |

#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description                                                       |
| ---- | ----------------------------------------------------------------- |
|      | The panel content (links, a grid of `art-navigation-menu-link`s). |


## Shadow Parts

| Part        | Description                                          |
| ----------- | ---------------------------------------------------- |
| `"content"` | The panel.                                           |
| `"trigger"` | The trigger button (or the link when `href` is set). |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
