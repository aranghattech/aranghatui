# art-toggle



<!-- Auto Generated Below -->


## Overview

Toggle — shadcn/ui parity. A two-state button (`aria-pressed`), variants `default | outline`,
sizes `sm | md | lg`. Inside `<art-toggle-group>` the group owns the pressed state.
Form-associated: submits `value` while pressed.

## Properties

| Property               | Attribute           | Description                                                                               | Type                          | Default     |
| ---------------------- | ------------------- | ----------------------------------------------------------------------------------------- | ----------------------------- | ----------- |
| `disabled`             | `disabled`          |                                                                                           | `boolean`                     | `false`     |
| `hostAriaDescription`  | `aria-description`  | Set on the host by `art-tooltip`; moves onto the native button, which is what gets focus. | `null \| string \| undefined` | `undefined` |
| `hostAriaKeyshortcuts` | `aria-keyshortcuts` | The shortcut that toggles (`Control+B`); announced with the focused native button.        | `null \| string \| undefined` | `undefined` |
| `hostAriaLabel`        | `aria-label`        |                                                                                           | `null \| string \| undefined` | `undefined` |
| `hostAriaLabelledby`   | `aria-labelledby`   |                                                                                           | `null \| string \| undefined` | `undefined` |
| `icon`                 | `icon`              | Square icon-only toggle.                                                                  | `boolean`                     | `false`     |
| `name`                 | `name`              |                                                                                           | `string \| undefined`         | `undefined` |
| `pressed`              | `pressed`           |                                                                                           | `boolean`                     | `false`     |
| `size`                 | `size`              |                                                                                           | `"lg" \| "md" \| "sm"`        | `'md'`      |
| `value`                | `value`             | Submitted with the form while pressed; also the item value inside a toggle group.         | `string`                      | `'on'`      |
| `variant`              | `variant`           |                                                                                           | `"default" \| "outline"`      | `'default'` |


## Events

| Event    | Description                                                             | Type                                 |
| -------- | ----------------------------------------------------------------------- | ------------------------------------ |
| `change` | Emitted after a user toggle; `detail.pressed` mirrors `target.pressed`. | `CustomEvent<{ pressed: boolean; }>` |


## Slots

| Slot | Description                                                      |
| ---- | ---------------------------------------------------------------- |
|      | Content (icon and/or text). Icon-only toggles need `aria-label`. |


## Shadow Parts

| Part       | Description            |
| ---------- | ---------------------- |
| `"button"` | The native `<button>`. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
