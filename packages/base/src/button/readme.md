# art-button



<!-- Auto Generated Below -->


## Overview

Button — shadcn/ui parity (ADR-0012): variants `default | secondary | outline | ghost |
destructive | link`, sizes `sm | md | lg`, square `icon` buttons, `full` width, a `rounded`
pill, `loading`, and `href` rendering an anchor. Wraps a native `<button>` so `click` stays native (CLAUDE.md §3a);
form-associated so `type="submit"` / `type="reset"` work inside a plain `<form>`.

## Properties

| Property              | Attribute          | Description                                                                                                                                                                                                                                                                                                            | Type                                                                          | Default     |
| --------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------- |
| `disabled`            | `disabled`         | Disabled: no interaction, no events.                                                                                                                                                                                                                                                                                   | `boolean`                                                                     | `false`     |
| `full`                | `full`             | Full width: the button fills its container, for stacked forms and dialog footers.                                                                                                                                                                                                                                      | `boolean`                                                                     | `false`     |
| `hostAriaDescription` | `aria-description` |                                                                                                                                                                                                                                                                                                                        | `null \| string \| undefined`                                                 | `undefined` |
| `hostAriaExpanded`    | `aria-expanded`    | Popover-style triggers set these on the host; they belong on the native button (a generic host may not carry them).                                                                                                                                                                                                    | `null \| string \| undefined`                                                 | `undefined` |
| `hostAriaHaspopup`    | `aria-haspopup`    |                                                                                                                                                                                                                                                                                                                        | `null \| string \| undefined`                                                 | `undefined` |
| `hostAriaLabel`       | `aria-label`       | `aria-label` set on the host moves onto the inner control: the focusable element lives in the shadow root and must carry the accessible name (axe `button-name`), and a generic host must not keep it (axe `aria-prohibited-attr`). Bound as a prop so framework re-renders that re-apply the attribute are picked up. | `null \| string \| undefined`                                                 | `undefined` |
| `href`                | `href`             | Render as a link.                                                                                                                                                                                                                                                                                                      | `string \| undefined`                                                         | `undefined` |
| `icon`                | `icon`             | Square icon-only button. Provide an accessible name via `aria-label` on the host.                                                                                                                                                                                                                                      | `boolean`                                                                     | `false`     |
| `loading`             | `loading`          | Loading: shows a spinner in place of `start`, sets `aria-busy`, blocks activation.                                                                                                                                                                                                                                     | `boolean`                                                                     | `false`     |
| `rel`                 | `rel`              | Link rel (only with `href`).                                                                                                                                                                                                                                                                                           | `string \| undefined`                                                         | `undefined` |
| `rounded`             | `rounded`          | Pill shape: the `full` step of the one radius scale (N4), never a default.                                                                                                                                                                                                                                             | `boolean`                                                                     | `false`     |
| `size`                | `size`             | Control size; aligns with Input, Select and Combobox.                                                                                                                                                                                                                                                                  | `"lg" \| "md" \| "sm"`                                                        | `'md'`      |
| `target`              | `target`           | Link target (only with `href`).                                                                                                                                                                                                                                                                                        | `string \| undefined`                                                         | `undefined` |
| `type`                | `type`             | Native button type. `submit` / `reset` act on the surrounding `<form>`.                                                                                                                                                                                                                                                | `"button" \| "reset" \| "submit"`                                             | `'button'`  |
| `variant`             | `variant`          | Visual variant.                                                                                                                                                                                                                                                                                                        | `"default" \| "destructive" \| "ghost" \| "link" \| "outline" \| "secondary"` | `'default'` |


## Slots

| Slot      | Description                                                                      |
| --------- | -------------------------------------------------------------------------------- |
|           | Label.                                                                           |
| `"end"`   | Trailing icon.                                                                   |
| `"start"` | Leading icon (`<art-icon slot="start">`). Replaced by the spinner while loading. |


## Shadow Parts

| Part       | Description                                          |
| ---------- | ---------------------------------------------------- |
| `"button"` | The native `<button>` (or `<a>` when `href` is set). |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
