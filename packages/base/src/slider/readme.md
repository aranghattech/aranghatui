# art-slider



<!-- Auto Generated Below -->


## Overview

Slider — shadcn/ui (Radix) parity. One or two thumbs (`value="50"` or `value="25,75"`),
pointer drag, keyboard steps, horizontal or vertical, RTL-aware, form-associated.
`input` fires while dragging / stepping, `change` on commit; `detail.value` is a number
for one thumb and a number[] for a range.

## Properties

| Property             | Attribute         | Description                                                                     | Type                           | Default        |
| -------------------- | ----------------- | ------------------------------------------------------------------------------- | ------------------------------ | -------------- |
| `disabled`           | `disabled`        |                                                                                 | `boolean`                      | `false`        |
| `hostAriaLabel`      | `aria-label`      |                                                                                 | `null \| string \| undefined`  | `undefined`    |
| `hostAriaLabelledby` | `aria-labelledby` |                                                                                 | `null \| string \| undefined`  | `undefined`    |
| `max`                | `max`             |                                                                                 | `number`                       | `100`          |
| `min`                | `min`             |                                                                                 | `number`                       | `0`            |
| `name`               | `name`            |                                                                                 | `string \| undefined`          | `undefined`    |
| `orientation`        | `orientation`     |                                                                                 | `"horizontal" \| "vertical"`   | `'horizontal'` |
| `size`               | `size`            | Track and thumb thickness.                                                      | `"lg" \| "md" \| "sm"`         | `'md'`         |
| `step`               | `step`            |                                                                                 | `number`                       | `1`            |
| `value`              | `value`           | Current value: a number, an array for a range, or the attribute form `"25,75"`. | `number \| number[] \| string` | `0`            |


## Events

| Event    | Description                                                                          | Type                                          |
| -------- | ------------------------------------------------------------------------------------ | --------------------------------------------- |
| `change` | Emitted when a drag or key interaction ends.                                         | `CustomEvent<{ value: number \| number[]; }>` |
| `input`  | Emitted while the value changes (drag, keys); `detail.value` mirrors `target.value`. | `CustomEvent<{ value: number \| number[]; }>` |


## Shadow Parts

| Part      | Description                   |
| --------- | ----------------------------- |
| `"range"` | The filled range.             |
| `"thumb"` | Each thumb (`role="slider"`). |
| `"track"` | The track.                    |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
