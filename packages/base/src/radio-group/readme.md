# art-radio-group



<!-- Auto Generated Below -->


## Overview

Radio Group — shadcn/ui parity. Owns the selected `value`, form association and keyboard
navigation for its `<art-radio>` children (arrows move focus and select, APG radio group).
The host carries `role="radiogroup"`, so `aria-label` / `aria-labelledby` go straight on it.

## Properties

| Property      | Attribute     | Description                                | Type                         | Default      |
| ------------- | ------------- | ------------------------------------------ | ---------------------------- | ------------ |
| `disabled`    | `disabled`    |                                            | `boolean`                    | `false`      |
| `invalid`     | `invalid`     |                                            | `boolean`                    | `false`      |
| `name`        | `name`        |                                            | `string \| undefined`        | `undefined`  |
| `orientation` | `orientation` | Layout and arrow-key axis.                 | `"horizontal" \| "vertical"` | `'vertical'` |
| `required`    | `required`    |                                            | `boolean`                    | `false`      |
| `size`        | `size`        | Item size, applied to every `<art-radio>`. | `"lg" \| "md" \| "sm"`       | `'md'`       |
| `value`       | `value`       | Selected item value.                       | `string \| undefined`        | `undefined`  |


## Events

| Event    | Description                                                            | Type                              |
| -------- | ---------------------------------------------------------------------- | --------------------------------- |
| `change` | Emitted after a user selection; `detail.value` mirrors `target.value`. | `CustomEvent<{ value: string; }>` |


## Slots

| Slot | Description          |
| ---- | -------------------- |
|      | `<art-radio>` items. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
