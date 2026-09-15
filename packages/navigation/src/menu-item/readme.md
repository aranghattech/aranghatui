# art-menu-item



<!-- Auto Generated Below -->


## Overview

Dropdown Menu Item — an action (`type="item"`), a toggle (`type="checkbox"`) or a choice
(`type="radio"`, inside `art-menu-radio-group`); with `href` it is a link.
Emits `select` when activated (cancelable: `preventDefault()` keeps the menu open); checkbox
and radio items also emit `change`.

## Properties

| Property   | Attribute  | Description                                                   | Type                              | Default     |
| ---------- | ---------- | ------------------------------------------------------------- | --------------------------------- | ----------- |
| `checked`  | `checked`  | Checkbox / radio state.                                       | `boolean`                         | `false`     |
| `disabled` | `disabled` |                                                               | `boolean`                         | `false`     |
| `href`     | `href`     | Renders the item as a link.                                   | `string \| undefined`             | `undefined` |
| `inset`    | `inset`    | Indent to align with checkbox / radio items.                  | `boolean`                         | `false`     |
| `target`   | `target`   |                                                               | `string \| undefined`             | `undefined` |
| `type`     | `type`     |                                                               | `"checkbox" \| "item" \| "radio"` | `'item'`    |
| `value`    | `value`    | Value reported by `select` / `change` (radio items need one). | `string`                          | `''`        |
| `variant`  | `variant`  |                                                               | `"default" \| "destructive"`      | `'default'` |


## Events

| Event    | Description                                                                                                                | Type                                                              |
| -------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `change` | Checkbox / radio state changed; `detail.checked`, `detail.value`.                                                          | `CustomEvent<{ value: string; checked: boolean; }>`               |
| `select` | Emitted when the item is activated; `detail.value`, `detail.checked`. Cancelable — `preventDefault()` keeps the menu open. | `CustomEvent<{ value: string; checked?: boolean \| undefined; }>` |


## Slots

| Slot         | Description                         |
| ------------ | ----------------------------------- |
|              | The label (with an icon before it). |
| `"shortcut"` | A keyboard hint at the end.         |


## Shadow Parts

| Part          | Description                                 |
| ------------- | ------------------------------------------- |
| `"indicator"` | The check / dot of a checkbox / radio item. |
| `"item"`      | The `role="menuitem*"` element.             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
