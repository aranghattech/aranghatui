# art-questionnaire



<!-- Auto Generated Below -->


## Overview

Questionnaire — shadcn/ui parity. A multi-step form: one question at a time with single or
multiple choice, a free-text answer, progress, previous / skip / next / submit, keyboard
shortcuts and built-in validation (required, pattern, min / max, length). Questions come as
data (`items`); answers leave as an object and as FormData (form-associated).

## Properties

| Property        | Attribute        | Description                                                                          | Type                                                                                                               | Default      |
| --------------- | ---------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------ |
| `disabled`      | `disabled`       |                                                                                      | `boolean`                                                                                                          | `false`      |
| `items`         | `items`          | The questions (array, or a JSON string attribute).                                   | `QuestionnaireItem[] \| string`                                                                                    | `[]`         |
| `name`          | `name`           |                                                                                      | `string \| undefined`                                                                                              | `undefined`  |
| `nextLabel`     | `next-label`     |                                                                                      | `string`                                                                                                           | `'Next'`     |
| `previousLabel` | `previous-label` |                                                                                      | `string`                                                                                                           | `'Previous'` |
| `shortcuts`     | `shortcuts`      | Keyboard shortcuts on choices: `letters` (A, B, C…), `numbers` (1, 2, 3…) or `none`. | `"letters" \| "none" \| "numbers"`                                                                                 | `'letters'`  |
| `skipLabel`     | `skip-label`     |                                                                                      | `string`                                                                                                           | `'Skip'`     |
| `step`          | `step`           | Zero-based index of the visible question.                                            | `number`                                                                                                           | `0`          |
| `submitLabel`   | `submit-label`   |                                                                                      | `string`                                                                                                           | `'Submit'`   |
| `validate`      | --               | Custom validation: return a message to block, or nothing to accept.                  | `((item: QuestionnaireItem, answer: string \| string[] \| undefined) => string \| void \| undefined) \| undefined` | `undefined`  |
| `value`         | --               | Answers by question name; `multiple` answers are arrays.                             | `{ [x: string]: string \| string[]; }`                                                                             | `{}`         |


## Events

| Event           | Description                                                                                             | Type                                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `answer-change` | Emitted when an answer changes; `detail.name`, `detail.value`, `detail.answers`.                        | `CustomEvent<{ name: string; value: string \| string[] \| undefined; answers: QuestionnaireAnswers; }>` |
| `complete`      | Emitted on Submit once every question validates; `detail.answers`. (`submit` is the native form event.) | `CustomEvent<{ answers: QuestionnaireAnswers; }>`                                                       |
| `step-change`   | Emitted when the visible question changes; `detail.step`, `detail.item`.                                | `CustomEvent<{ step: number; item: QuestionnaireItem; }>`                                               |


## Methods

### `next() => Promise<void>`

Validate the visible question and move on (or complete on the last one).

#### Returns

Type: `Promise<void>`



### `setFocus() => Promise<void>`

Focus the active question.

#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part            | Description                              |
| --------------- | ---------------------------------------- |
| `"actions"`     | The navigation row.                      |
| `"choice"`      | One choice card.                         |
| `"choices"`     | The choices list.                        |
| `"description"` | The question's description.              |
| `"error"`       | The validation message.                  |
| `"input"`       | The free-text field.                     |
| `"item"`        | The `<fieldset>` of the active question. |
| `"next"`        | The Next / Submit button.                |
| `"previous"`    | The Previous button.                     |
| `"progress"`    | The "Question n of N" progress bar.      |
| `"skip"`        | The Skip button.                         |
| `"title"`       | The `<legend>`.                          |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
