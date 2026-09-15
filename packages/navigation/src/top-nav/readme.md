# art-top-nav



<!-- Auto Generated Below -->


## Overview

TopNav — an app header bar: a brand at the start, a row of links, actions at the end. Below
the md breakpoint (or always, `collapse="always"`) the links fold into a panel under the bar
behind a menu button. Links are plain `<a>`s (or router links); `aria-current="page"` marks
the current one.

## Properties

| Property      | Attribute      | Description                                                                            | Type                            | Default         |
| ------------- | -------------- | -------------------------------------------------------------------------------------- | ------------------------------- | --------------- |
| `collapse`    | `collapse`     | When the links fold behind the menu button: below the md breakpoint, always, or never. | `"always" \| "auto" \| "never"` | `'auto'`        |
| `label`       | `label`        | Accessible name of the `nav`.                                                          | `string`                        | `'Main'`        |
| `open`        | `open`         | The collapsed menu is shown.                                                           | `boolean`                       | `false`         |
| `sticky`      | `sticky`       | Stick to the top of the scroll container.                                              | `boolean`                       | `false`         |
| `toggleLabel` | `toggle-label` |                                                                                        | `string`                        | `'Toggle menu'` |


## Events

| Event         | Description                                                              | Type                              |
| ------------- | ------------------------------------------------------------------------ | --------------------------------- |
| `open-change` | Emitted when the user opens or closes the collapsed menu; `detail.open`. | `CustomEvent<{ open: boolean; }>` |


## Slots

| Slot      | Description                                                   |
| --------- | ------------------------------------------------------------- |
|           | The links (`<a>`).                                            |
| `"brand"` | Logo / product name (an `art-sidebar-trigger` fits here too). |
| `"end"`   | Actions at the end (search, theme toggle, user menu).         |


## Shadow Parts

| Part       | Description                             |
| ---------- | --------------------------------------- |
| `"bar"`    | The `<header>`.                         |
| `"brand"`  | The brand wrapper.                      |
| `"end"`    | The actions wrapper.                    |
| `"links"`  | The `<nav>` (the panel when collapsed). |
| `"toggle"` | The menu button (collapsed).            |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
