# art-hello-overlay



<!-- Auto Generated Below -->


## Overview

Phase 0 proof overlay. Consumes `<art-hello>` from `@aranghat/base` to prove
cross-tier composition: base is a peer dependency, never bundled (ADR-0002).
Removed when Dialog lands.

## Properties

| Property | Attribute | Description                                | Type      | Default   |
| -------- | --------- | ------------------------------------------ | --------- | --------- |
| `name`   | `name`    | Passed through to the inner `<art-hello>`. | `string`  | `'World'` |
| `open`   | `open`    | Whether the overlay is shown.              | `boolean` | `false`   |


## Events

| Event         | Description                                                                      | Type                              |
| ------------- | -------------------------------------------------------------------------------- | --------------------------------- |
| `open-change` | Emitted when `open` changes because of user interaction (Escape / close button). | `CustomEvent<{ open: boolean; }>` |


## Slots

| Slot | Description                                |
| ---- | ------------------------------------------ |
|      | Extra content rendered under the greeting. |


## Shadow Parts

| Part      | Description        |
| --------- | ------------------ |
| `"close"` |                    |
| `"panel"` | The overlay panel. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
