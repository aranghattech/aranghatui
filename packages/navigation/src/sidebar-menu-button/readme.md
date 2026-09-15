# art-sidebar-menu-button



<!-- Auto Generated Below -->


## Overview

Sidebar Menu Button — the control of an `art-sidebar-menu-item`: a button, or a link with
`href`; `active` marks the current page. While the sidebar is collapsed to icons it becomes a
square that clips its label and shows `tooltip` beside it on hover / focus. Inside an
`art-sidebar-menu-sub` it renders in the smaller sub style.

## Properties

| Property   | Attribute  | Description                                                                                                           | Type                     | Default     |
| ---------- | ---------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------ | ----------- |
| `active`   | `active`   | Marks the current page (`aria-current="page"` on a link).                                                             | `boolean`                | `false`     |
| `disabled` | `disabled` |                                                                                                                       | `boolean`                | `false`     |
| `expanded` | `expanded` | Disclosure state of the item's nested list — set by `art-sidebar-menu-item`; renders the chevron and `aria-expanded`. | `boolean \| undefined`   | `undefined` |
| `href`     | `href`     | Renders a link instead of a button.                                                                                   | `string \| undefined`    | `undefined` |
| `size`     | `size`     |                                                                                                                       | `"lg" \| "md" \| "sm"`   | `'md'`      |
| `target`   | `target`   |                                                                                                                       | `string \| undefined`    | `undefined` |
| `tooltip`  | `tooltip`  | Text shown beside the button while the sidebar is collapsed to icons.                                                 | `string \| undefined`    | `undefined` |
| `variant`  | `variant`  |                                                                                                                       | `"default" \| "outline"` | `'default'` |


## Slots

| Slot | Description                                       |
| ---- | ------------------------------------------------- |
|      | An icon (`svg`) followed by the label (`<span>`). |


## Shadow Parts

| Part        | Description                                        |
| ----------- | -------------------------------------------------- |
| `"button"`  | The button / link.                                 |
| `"chevron"` | The disclosure chevron (items with a nested list). |
| `"tooltip"` | The icon-mode tooltip.                             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
