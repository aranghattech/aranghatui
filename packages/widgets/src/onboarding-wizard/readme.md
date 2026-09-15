# art-onboarding-wizard



<!-- Auto Generated Below -->


## Overview

Onboarding Wizard — a multi-step flow: a stepper (numbers, check marks, the current step),
one `art-wizard-step` shown at a time, and Back / Next / Finish (and Skip on optional steps).
`step` is 1-based; `step-change` is cancelable so you can validate before moving on.

## Properties

| Property      | Attribute      | Description                                                       | Type                         | Default        |
| ------------- | -------------- | ----------------------------------------------------------------- | ---------------------------- | -------------- |
| `backLabel`   | `back-label`   |                                                                   | `string`                     | `'Back'`       |
| `finishLabel` | `finish-label` |                                                                   | `string`                     | `'Finish'`     |
| `label`       | `label`        | Accessible name of the stepper.                                   | `string`                     | `'Setup'`      |
| `loading`     | `loading`      | Spinner on the Next / Finish button; moves are ignored meanwhile. | `boolean`                    | `false`        |
| `nextLabel`   | `next-label`   |                                                                   | `string`                     | `'Next'`       |
| `orientation` | `orientation`  | Stepper beside the content instead of above it.                   | `"horizontal" \| "vertical"` | `'horizontal'` |
| `skipLabel`   | `skip-label`   |                                                                   | `string`                     | `'Skip'`       |
| `step`        | `step`         | Current step, 1-based.                                            | `number`                     | `1`            |


## Events

| Event         | Description                                                                                                                        | Type                                           |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| `finish`      | Emitted when Finish is pressed on the last step.                                                                                   | `CustomEvent<void>`                            |
| `step-change` | Emitted before the step changes; `detail.step` (target), `detail.from`. Cancelable — `preventDefault()` stays on the current step. | `CustomEvent<{ step: number; from: number; }>` |


## Slots

| Slot | Description                  |
| ---- | ---------------------------- |
|      | `art-wizard-step`s in order. |


## Shadow Parts

| Part            | Description                         |
| --------------- | ----------------------------------- |
| `"description"` | The step description.               |
| `"footer"`      | The buttons.                        |
| `"indicator"`   | The number / check circle.          |
| `"label"`       | The step label.                     |
| `"panel"`       | The current step's content wrapper. |
| `"step"`        | One stepper item.                   |
| `"steps"`       | The stepper (`<nav>`).              |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
