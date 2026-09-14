# art-hello



<!-- Auto Generated Below -->


## Overview

Phase 0 proof component. Exercises tokens, Tailwind-in-shadow, the focus-ring
recipe, a native `click` passing through and a kebab-case custom event.
Removed when Button lands.

## Properties

| Property   | Attribute  | Description     | Type                     | Default     |
| ---------- | ---------- | --------------- | ------------------------ | ----------- |
| `disabled` | `disabled` | Disabled state. | `boolean`                | `false`     |
| `name`     | `name`     | Who to greet.   | `string`                 | `'World'`   |
| `variant`  | `variant`  | Visual variant. | `"default" \| "outline"` | `'default'` |


## Events

| Event   | Description                                  | Type                             |
| ------- | -------------------------------------------- | -------------------------------- |
| `greet` | Emitted after the greet button is activated. | `CustomEvent<{ name: string; }>` |


## Slots

| Slot | Description    |
| ---- | -------------- |
|      | Greeting body. |


## Shadow Parts

| Part       | Description       |
| ---------- | ----------------- |
| `"button"` | The inner button. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
