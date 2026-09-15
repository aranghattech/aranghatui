# art-field-set



<!-- Auto Generated Below -->


## Overview

Field Set — a native `<fieldset>` with a legend, grouping related fields (a radio group with
its question, an address block). `disabled` disables every control inside — the slotted
controls are not DOM descendants of the shadow `<fieldset>`, so the component applies it
(and restores only what it disabled).

## Properties

| Property   | Attribute  | Description | Type      | Default |
| ---------- | ---------- | ----------- | --------- | ------- |
| `disabled` | `disabled` |             | `boolean` | `false` |


## Slots

| Slot       | Description      |
| ---------- | ---------------- |
|            | Fields.          |
| `"legend"` | The group title. |


## Shadow Parts

| Part         | Description              |
| ------------ | ------------------------ |
| `"fieldset"` | The native `<fieldset>`. |
| `"legend"`   | The native `<legend>`.   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
