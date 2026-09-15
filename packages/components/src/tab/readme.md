# art-tab



<!-- Auto Generated Below -->


## Overview

Tab — one trigger of an `<art-tabs>`. The host itself is the `role="tab"` element (so the
panel can reference it by id), styled per the parent's variant and orientation.

## Properties

| Property   | Attribute  | Description                                 | Type      | Default |
| ---------- | ---------- | ------------------------------------------- | --------- | ------- |
| `disabled` | `disabled` |                                             | `boolean` | `false` |
| `selected` | `selected` | Set by the parent.                          | `boolean` | `false` |
| `tabbable` | `tabbable` | Roving tabindex, set by the parent.         | `boolean` | `false` |
| `value`    | `value`    | Identifies the tab in the parent's `value`. | `string`  | `''`    |


## Slots

| Slot | Description                                            |
| ---- | ------------------------------------------------------ |
|      | The tab label (text, optionally with an `<art-icon>`). |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
