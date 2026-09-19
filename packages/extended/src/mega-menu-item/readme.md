# art-mega-menu-item



<!-- Auto Generated Below -->


## Overview

Mega Menu Item — one entry in the bar: a plain link (`href`), or a trigger (`label`) whose panel
holds `art-mega-menu-group`s. The groups flow in columns or rows, capped by `max-columns` /
`max-rows`; `aside` content sits beside them and `footer` content below. Below the `md`
breakpoint the groups stack in one column and the aside moves under them.

## Properties

| Property           | Attribute            | Description                                                                                                                                     | Type                  | Default     |
| ------------------ | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `active`           | `active`             | Marks the link as the current page (`aria-current="page"`).                                                                                     | `boolean`             | `false`     |
| `fullWidth`        | `full-width`         | The panel spans the full width of the viewport, hanging from the bottom edge of the bar. Also settable on `art-mega-menu` for every panel.      | `boolean`             | `false`     |
| `fullWidthContent` | `full-width-content` | The content fills the panel instead of sitting in a centred container (`--art-mega-menu-content-width`). Also settable on `art-mega-menu`.      | `boolean`             | `false`     |
| `hideChevron`      | `hide-chevron`       | Leave the chevron off the trigger (a burger icon or a logo says "menu" on its own).                                                             | `boolean`             | `false`     |
| `href`             | `href`               | Makes the entry a plain link instead of a trigger.                                                                                              | `string \| undefined` | `undefined` |
| `label`            | `label`              | Trigger text. With a `trigger` slot it is the button's accessible name instead — required for an icon-only trigger.                             | `string`              | `''`        |
| `layout`           | `layout`             | How the groups flow. `columns`: side by side, starting a new line after `max-columns`. `rows`: stacked, starting a new column after `max-rows`. | `"columns" \| "rows"` | `'columns'` |
| `maxColumns`       | `max-columns`        | With `layout="columns"`, the most groups side by side. Unset: every group in one row.                                                           | `number \| undefined` | `undefined` |
| `maxRows`          | `max-rows`           | With `layout="rows"`, the most groups stacked in a column. Unset: every group in one column.                                                    | `number \| undefined` | `undefined` |
| `open`             | `open`               | Whether the panel is open.                                                                                                                      | `boolean`             | `false`     |


## Events

| Event            | Description                                            | Type                              |
| ---------------- | ------------------------------------------------------ | --------------------------------- |
| `mega-menu-open` | Internal: tells the bar to close the other panels.     | `CustomEvent<void>`               |
| `open-change`    | Emitted when the panel opens or closes; `detail.open`. | `CustomEvent<{ open: boolean; }>` |


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

| Slot        | Description                                                                                                                                                                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|             | The panel's `art-mega-menu-group`s.                                                                                                                                                                                                                                 |
| `"aside"`   | Beside the groups: a tutorial card, a sales prompt.                                                                                                                                                                                                                 |
| `"footer"`  | A strip under the groups: a "view all" link, a changelog note.                                                                                                                                                                                                      |
| `"trigger"` | Custom trigger content in place of `label`: a burger icon, a logo, a logo and a name. It sits inside the item's own button, so keyboard, `aria-expanded` and the focus ring are unchanged; with an icon-only trigger, `label` becomes the button's accessible name. |


## Shadow Parts

| Part        | Description                                                               |
| ----------- | ------------------------------------------------------------------------- |
| `"aside"`   | The aside column.                                                         |
| `"chevron"` | The chevron beside the trigger's content (absent with `hide-chevron`).    |
| `"content"` | The panel.                                                                |
| `"footer"`  | The footer strip.                                                         |
| `"groups"`  | The grid the groups flow in.                                              |
| `"inner"`   | The panel's content container (centred and capped in a full-width panel). |
| `"trigger"` | The trigger button (or the link when `href` is set).                      |


## CSS Custom Properties

| Name                            | Description                                                                                                                                                                              |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--art-mega-menu-aside-width`   | Width of the `aside` column. Defaults to the `space.64` token (16rem).                                                                                                                   |
| `--art-mega-menu-column-width`  | The widest a group column grows in a panel that hugs its content. Defaults to the `space.64` token (16rem).                                                                              |
| `--art-mega-menu-content-width` | Width of the centred container a full-width panel's content sits in, unless `full-width-content` is set. Match it to your page container. Defaults to the `container.6xl` token (72rem). |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
