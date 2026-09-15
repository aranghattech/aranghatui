# art-wizard-step



<!-- Auto Generated Below -->


## Overview

Wizard Step — one step of an `art-onboarding-wizard`: its `label` / `description` feed the
stepper, its content is shown while it is the current step (the wizard hides the others).

## Properties

| Property      | Attribute     | Description                                             | Type                  | Default     |
| ------------- | ------------- | ------------------------------------------------------- | --------------------- | ----------- |
| `description` | `description` |                                                         | `string \| undefined` | `undefined` |
| `label`       | `label`       |                                                         | `string`              | `''`        |
| `optional`    | `optional`    | May be skipped (the wizard offers a Skip button on it). | `boolean`             | `false`     |


## Slots

| Slot | Description                           |
| ---- | ------------------------------------- |
|      | The step content (a form, a summary). |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
