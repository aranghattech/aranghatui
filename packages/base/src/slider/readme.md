# art-slider



<!-- Auto Generated Below -->


## Overview

Slider — shadcn/ui parity on a native `<input type="range">` (ADR-0021): the platform
provides drag, keyboard, screen-reader value announcements and form participation; artui
only styles the track, filled range and thumb. Form-associated. `input` fires while moving,
`change` on commit; `detail.value` is a number.

## Properties

| Property              | Attribute          | Description                | Type                          | Default        |
| --------------------- | ------------------ | -------------------------- | ----------------------------- | -------------- |
| `disabled`            | `disabled`         |                            | `boolean`                     | `false`        |
| `hostAriaDescribedby` | `aria-describedby` |                            | `null \| string \| undefined` | `undefined`    |
| `hostAriaLabel`       | `aria-label`       |                            | `null \| string \| undefined` | `undefined`    |
| `hostAriaLabelledby`  | `aria-labelledby`  |                            | `null \| string \| undefined` | `undefined`    |
| `max`                 | `max`              |                            | `number`                      | `100`          |
| `min`                 | `min`              |                            | `number`                      | `0`            |
| `name`                | `name`             |                            | `string \| undefined`         | `undefined`    |
| `orientation`         | `orientation`      |                            | `"horizontal" \| "vertical"`  | `'horizontal'` |
| `size`                | `size`             | Track and thumb thickness. | `"lg" \| "md" \| "sm"`        | `'md'`         |
| `step`                | `step`             |                            | `number`                      | `1`            |
| `value`               | `value`            |                            | `number \| string`            | `0`            |


## Events

| Event    | Description                                                                          | Type                              |
| -------- | ------------------------------------------------------------------------------------ | --------------------------------- |
| `change` | Emitted when the interaction ends.                                                   | `CustomEvent<{ value: number; }>` |
| `input`  | Emitted while the value changes (drag, keys); `detail.value` mirrors `target.value`. | `CustomEvent<{ value: number; }>` |


## Shadow Parts

| Part      | Description                        |
| --------- | ---------------------------------- |
| `"input"` | The native `<input type="range">`. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
