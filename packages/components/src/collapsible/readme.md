# art-collapsible



<!-- Auto Generated Below -->


## Overview

Collapsible — shadcn/ui parity on the native `<details>` element: the trigger is its
`<summary>`, so toggling, keyboard activation (Enter / Space) and the expanded state are
platform behaviour. Height animates where the browser can interpolate `::details-content`.

## Properties

| Property   | Attribute  | Description | Type      | Default |
| ---------- | ---------- | ----------- | --------- | ------- |
| `disabled` | `disabled` |             | `boolean` | `false` |
| `open`     | `open`     |             | `boolean` | `false` |


## Events

| Event         | Description                                               | Type                              |
| ------------- | --------------------------------------------------------- | --------------------------------- |
| `open-change` | Emitted when the user toggles the content; `detail.open`. | `CustomEvent<{ open: boolean; }>` |


## Slots

| Slot        | Description                                                           |
| ----------- | --------------------------------------------------------------------- |
|             | The collapsible content.                                              |
| `"trigger"` | What the user clicks to toggle (text, a row with a button-like look). |


## Shadow Parts

| Part        | Description             |
| ----------- | ----------------------- |
| `"content"` | The content wrapper.    |
| `"details"` | The native `<details>`. |
| `"trigger"` | The native `<summary>`. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
