# Questionnaire

A multi-step form for single-choice, multiple-choice, freeform and optional questions with progress and validation. shadcn/ui parity, form-associated.

## Preview

<Preview frame="stack">
  <art-questionnaire items="[{&quot;name&quot;:&quot;direction&quot;,&quot;required&quot;:true,&quot;prompt&quot;:&quot;What should we prototype next?&quot;,&quot;description&quot;:&quot;Choose a direction or write your own.&quot;,&quot;choices&quot;:[{&quot;value&quot;:&quot;delegation&quot;,&quot;label&quot;:&quot;Delegation&quot;,&quot;description&quot;:&quot;Show how work moves to a specialist.&quot;},{&quot;value&quot;:&quot;questions&quot;,&quot;label&quot;:&quot;Question prompts&quot;,&quot;description&quot;:&quot;Show choices while the interface waits.&quot;},{&quot;value&quot;:&quot;both&quot;,&quot;label&quot;:&quot;Both together&quot;}],&quot;input&quot;:{&quot;label&quot;:&quot;Another answer&quot;,&quot;placeholder&quot;:&quot;Type another answer…&quot;}},{&quot;name&quot;:&quot;detail&quot;,&quot;required&quot;:false,&quot;prompt&quot;:&quot;How much detail should it include?&quot;,&quot;description&quot;:&quot;Skip this if you are not sure yet.&quot;,&quot;choices&quot;:[{&quot;value&quot;:&quot;focused&quot;,&quot;label&quot;:&quot;Focused&quot;},{&quot;value&quot;:&quot;complete&quot;,&quot;label&quot;:&quot;Complete flow&quot;}]},{&quot;name&quot;:&quot;channels&quot;,&quot;required&quot;:true,&quot;multiple&quot;:true,&quot;min&quot;:1,&quot;max&quot;:2,&quot;prompt&quot;:&quot;Where should we share it?&quot;,&quot;description&quot;:&quot;Pick one or two.&quot;,&quot;choices&quot;:[{&quot;value&quot;:&quot;slack&quot;,&quot;label&quot;:&quot;Slack&quot;},{&quot;value&quot;:&quot;email&quot;,&quot;label&quot;:&quot;Email&quot;},{&quot;value&quot;:&quot;docs&quot;,&quot;label&quot;:&quot;The docs site&quot;}]}]"></art-questionnaire>
</Preview>

## Installation

Lives in `@aranghat/components` (requires `@aranghat/base`).

::: code-group
```bash [HTML]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base
```
```bash [React]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base @aranghat/components-react
```
```bash [Vue]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base @aranghat/components-vue
```
```bash [Angular]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base @aranghat/components-angular
```
:::

## Usage

::: code-group
<<< ../../../sandbox/html/src/samples/questionnaire/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/questionnaire/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/questionnaire/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/questionnaire/basic.ts [Angular]
:::

Pass `items` (name, prompt, description, choices, `multiple`, `input`, `required`, validation bounds), bind `value` and `step`, listen to `answer-change`, `step-change` and `complete`. Inside a `<form>` the answers submit as FormData entries under each question's `name`. React `onComplete`, Vue `@complete`, Angular `(complete)`.

## Examples

### Basic

Questions are data: `items` (an array, or a JSON string attribute). One question shows at a time with progress; Next validates and moves on, Submit on the last one emits `complete` with all answers. A required question cannot be skipped.

<Preview frame="stack">
  <art-questionnaire items="[{&quot;name&quot;:&quot;direction&quot;,&quot;required&quot;:true,&quot;prompt&quot;:&quot;What should we prototype next?&quot;,&quot;description&quot;:&quot;Choose a direction or write your own.&quot;,&quot;choices&quot;:[{&quot;value&quot;:&quot;delegation&quot;,&quot;label&quot;:&quot;Delegation&quot;,&quot;description&quot;:&quot;Show how work moves to a specialist.&quot;},{&quot;value&quot;:&quot;questions&quot;,&quot;label&quot;:&quot;Question prompts&quot;,&quot;description&quot;:&quot;Show choices while the interface waits.&quot;},{&quot;value&quot;:&quot;both&quot;,&quot;label&quot;:&quot;Both together&quot;}],&quot;input&quot;:{&quot;label&quot;:&quot;Another answer&quot;,&quot;placeholder&quot;:&quot;Type another answer…&quot;}},{&quot;name&quot;:&quot;detail&quot;,&quot;required&quot;:false,&quot;prompt&quot;:&quot;How much detail should it include?&quot;,&quot;description&quot;:&quot;Skip this if you are not sure yet.&quot;,&quot;choices&quot;:[{&quot;value&quot;:&quot;focused&quot;,&quot;label&quot;:&quot;Focused&quot;},{&quot;value&quot;:&quot;complete&quot;,&quot;label&quot;:&quot;Complete flow&quot;}]},{&quot;name&quot;:&quot;channels&quot;,&quot;required&quot;:true,&quot;multiple&quot;:true,&quot;min&quot;:1,&quot;max&quot;:2,&quot;prompt&quot;:&quot;Where should we share it?&quot;,&quot;description&quot;:&quot;Pick one or two.&quot;,&quot;choices&quot;:[{&quot;value&quot;:&quot;slack&quot;,&quot;label&quot;:&quot;Slack&quot;},{&quot;value&quot;:&quot;email&quot;,&quot;label&quot;:&quot;Email&quot;},{&quot;value&quot;:&quot;docs&quot;,&quot;label&quot;:&quot;The docs site&quot;}]}]"></art-questionnaire>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/questionnaire/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/questionnaire/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/questionnaire/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/questionnaire/basic.ts [Angular]
:::

### Multiple selection

`multiple: true` turns choices into checkboxes and the answer into an array; `min` / `max` bound how many.

<Preview frame="stack">
  <art-questionnaire step="2" items="[{&quot;name&quot;:&quot;direction&quot;,&quot;required&quot;:true,&quot;prompt&quot;:&quot;What should we prototype next?&quot;,&quot;description&quot;:&quot;Choose a direction or write your own.&quot;,&quot;choices&quot;:[{&quot;value&quot;:&quot;delegation&quot;,&quot;label&quot;:&quot;Delegation&quot;,&quot;description&quot;:&quot;Show how work moves to a specialist.&quot;},{&quot;value&quot;:&quot;questions&quot;,&quot;label&quot;:&quot;Question prompts&quot;,&quot;description&quot;:&quot;Show choices while the interface waits.&quot;},{&quot;value&quot;:&quot;both&quot;,&quot;label&quot;:&quot;Both together&quot;}],&quot;input&quot;:{&quot;label&quot;:&quot;Another answer&quot;,&quot;placeholder&quot;:&quot;Type another answer…&quot;}},{&quot;name&quot;:&quot;detail&quot;,&quot;required&quot;:false,&quot;prompt&quot;:&quot;How much detail should it include?&quot;,&quot;description&quot;:&quot;Skip this if you are not sure yet.&quot;,&quot;choices&quot;:[{&quot;value&quot;:&quot;focused&quot;,&quot;label&quot;:&quot;Focused&quot;},{&quot;value&quot;:&quot;complete&quot;,&quot;label&quot;:&quot;Complete flow&quot;}]},{&quot;name&quot;:&quot;channels&quot;,&quot;required&quot;:true,&quot;multiple&quot;:true,&quot;min&quot;:1,&quot;max&quot;:2,&quot;prompt&quot;:&quot;Where should we share it?&quot;,&quot;description&quot;:&quot;Pick one or two.&quot;,&quot;choices&quot;:[{&quot;value&quot;:&quot;slack&quot;,&quot;label&quot;:&quot;Slack&quot;},{&quot;value&quot;:&quot;email&quot;,&quot;label&quot;:&quot;Email&quot;},{&quot;value&quot;:&quot;docs&quot;,&quot;label&quot;:&quot;The docs site&quot;}]}]"></art-questionnaire>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/questionnaire/multiple.html [HTML]
<<< ../../../sandbox/react/src/samples/questionnaire/multiple.tsx [React]
<<< ../../../sandbox/vue/src/samples/questionnaire/multiple.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/questionnaire/multiple.ts [Angular]
:::

### Freeform answers

An `input` alone makes a free-text question (`multiline` for a textarea); `pattern`, `minLength` and `maxLength` validate it. With choices, the input is the "another answer" option.

<Preview frame="stack">
  <art-questionnaire items="[{&quot;name&quot;:&quot;feedback&quot;,&quot;required&quot;:true,&quot;prompt&quot;:&quot;Anything else we should know?&quot;,&quot;input&quot;:{&quot;label&quot;:&quot;Your feedback&quot;,&quot;placeholder&quot;:&quot;Write a few words…&quot;,&quot;multiline&quot;:true},&quot;minLength&quot;:10}]"></art-questionnaire>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/questionnaire/free-text.html [HTML]
<<< ../../../sandbox/react/src/samples/questionnaire/free-text.tsx [React]
<<< ../../../sandbox/vue/src/samples/questionnaire/free-text.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/questionnaire/free-text.ts [Angular]
:::

### Optional questions

A question without `required` shows Skip, which clears its answer and moves on.

<Preview frame="stack">
  <art-questionnaire step="1" items="[{&quot;name&quot;:&quot;direction&quot;,&quot;required&quot;:true,&quot;prompt&quot;:&quot;What should we prototype next?&quot;,&quot;description&quot;:&quot;Choose a direction or write your own.&quot;,&quot;choices&quot;:[{&quot;value&quot;:&quot;delegation&quot;,&quot;label&quot;:&quot;Delegation&quot;,&quot;description&quot;:&quot;Show how work moves to a specialist.&quot;},{&quot;value&quot;:&quot;questions&quot;,&quot;label&quot;:&quot;Question prompts&quot;,&quot;description&quot;:&quot;Show choices while the interface waits.&quot;},{&quot;value&quot;:&quot;both&quot;,&quot;label&quot;:&quot;Both together&quot;}],&quot;input&quot;:{&quot;label&quot;:&quot;Another answer&quot;,&quot;placeholder&quot;:&quot;Type another answer…&quot;}},{&quot;name&quot;:&quot;detail&quot;,&quot;required&quot;:false,&quot;prompt&quot;:&quot;How much detail should it include?&quot;,&quot;description&quot;:&quot;Skip this if you are not sure yet.&quot;,&quot;choices&quot;:[{&quot;value&quot;:&quot;focused&quot;,&quot;label&quot;:&quot;Focused&quot;},{&quot;value&quot;:&quot;complete&quot;,&quot;label&quot;:&quot;Complete flow&quot;}]},{&quot;name&quot;:&quot;channels&quot;,&quot;required&quot;:true,&quot;multiple&quot;:true,&quot;min&quot;:1,&quot;max&quot;:2,&quot;prompt&quot;:&quot;Where should we share it?&quot;,&quot;description&quot;:&quot;Pick one or two.&quot;,&quot;choices&quot;:[{&quot;value&quot;:&quot;slack&quot;,&quot;label&quot;:&quot;Slack&quot;},{&quot;value&quot;:&quot;email&quot;,&quot;label&quot;:&quot;Email&quot;},{&quot;value&quot;:&quot;docs&quot;,&quot;label&quot;:&quot;The docs site&quot;}]}]"></art-questionnaire>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/questionnaire/optional.html [HTML]
<<< ../../../sandbox/react/src/samples/questionnaire/optional.tsx [React]
<<< ../../../sandbox/vue/src/samples/questionnaire/optional.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/questionnaire/optional.ts [Angular]
:::

### Keyboard shortcuts

`shortcuts="letters"` (default) or `"numbers"` selects a choice with a key; `"none"` hides the badges. Enter moves on.

<Preview frame="stack">
  <art-questionnaire shortcuts="numbers" items="[{&quot;name&quot;:&quot;direction&quot;,&quot;required&quot;:true,&quot;prompt&quot;:&quot;What should we prototype next?&quot;,&quot;description&quot;:&quot;Choose a direction or write your own.&quot;,&quot;choices&quot;:[{&quot;value&quot;:&quot;delegation&quot;,&quot;label&quot;:&quot;Delegation&quot;,&quot;description&quot;:&quot;Show how work moves to a specialist.&quot;},{&quot;value&quot;:&quot;questions&quot;,&quot;label&quot;:&quot;Question prompts&quot;,&quot;description&quot;:&quot;Show choices while the interface waits.&quot;},{&quot;value&quot;:&quot;both&quot;,&quot;label&quot;:&quot;Both together&quot;}],&quot;input&quot;:{&quot;label&quot;:&quot;Another answer&quot;,&quot;placeholder&quot;:&quot;Type another answer…&quot;}},{&quot;name&quot;:&quot;detail&quot;,&quot;required&quot;:false,&quot;prompt&quot;:&quot;How much detail should it include?&quot;,&quot;description&quot;:&quot;Skip this if you are not sure yet.&quot;,&quot;choices&quot;:[{&quot;value&quot;:&quot;focused&quot;,&quot;label&quot;:&quot;Focused&quot;},{&quot;value&quot;:&quot;complete&quot;,&quot;label&quot;:&quot;Complete flow&quot;}]},{&quot;name&quot;:&quot;channels&quot;,&quot;required&quot;:true,&quot;multiple&quot;:true,&quot;min&quot;:1,&quot;max&quot;:2,&quot;prompt&quot;:&quot;Where should we share it?&quot;,&quot;description&quot;:&quot;Pick one or two.&quot;,&quot;choices&quot;:[{&quot;value&quot;:&quot;slack&quot;,&quot;label&quot;:&quot;Slack&quot;},{&quot;value&quot;:&quot;email&quot;,&quot;label&quot;:&quot;Email&quot;},{&quot;value&quot;:&quot;docs&quot;,&quot;label&quot;:&quot;The docs site&quot;}]}]"></art-questionnaire>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/questionnaire/shortcuts.html [HTML]
<<< ../../../sandbox/react/src/samples/questionnaire/shortcuts.tsx [React]
<<< ../../../sandbox/vue/src/samples/questionnaire/shortcuts.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/questionnaire/shortcuts.ts [Angular]
:::

### Validation

Pressing Next on an unanswered required question shows an error (`role="alert"`) and marks the fieldset `aria-invalid`. `validate(item, answer)` adds your own rule and `errorMessage` overrides the built-in text.

<Preview frame="stack">
  <art-questionnaire id="validated" items="[{&quot;name&quot;:&quot;direction&quot;,&quot;required&quot;:true,&quot;prompt&quot;:&quot;What should we prototype next?&quot;,&quot;description&quot;:&quot;Choose a direction or write your own.&quot;,&quot;choices&quot;:[{&quot;value&quot;:&quot;delegation&quot;,&quot;label&quot;:&quot;Delegation&quot;,&quot;description&quot;:&quot;Show how work moves to a specialist.&quot;},{&quot;value&quot;:&quot;questions&quot;,&quot;label&quot;:&quot;Question prompts&quot;,&quot;description&quot;:&quot;Show choices while the interface waits.&quot;},{&quot;value&quot;:&quot;both&quot;,&quot;label&quot;:&quot;Both together&quot;}],&quot;input&quot;:{&quot;label&quot;:&quot;Another answer&quot;,&quot;placeholder&quot;:&quot;Type another answer…&quot;}},{&quot;name&quot;:&quot;detail&quot;,&quot;required&quot;:false,&quot;prompt&quot;:&quot;How much detail should it include?&quot;,&quot;description&quot;:&quot;Skip this if you are not sure yet.&quot;,&quot;choices&quot;:[{&quot;value&quot;:&quot;focused&quot;,&quot;label&quot;:&quot;Focused&quot;},{&quot;value&quot;:&quot;complete&quot;,&quot;label&quot;:&quot;Complete flow&quot;}]},{&quot;name&quot;:&quot;channels&quot;,&quot;required&quot;:true,&quot;multiple&quot;:true,&quot;min&quot;:1,&quot;max&quot;:2,&quot;prompt&quot;:&quot;Where should we share it?&quot;,&quot;description&quot;:&quot;Pick one or two.&quot;,&quot;choices&quot;:[{&quot;value&quot;:&quot;slack&quot;,&quot;label&quot;:&quot;Slack&quot;},{&quot;value&quot;:&quot;email&quot;,&quot;label&quot;:&quot;Email&quot;},{&quot;value&quot;:&quot;docs&quot;,&quot;label&quot;:&quot;The docs site&quot;}]}]"></art-questionnaire>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/questionnaire/invalid.html [HTML]
<<< ../../../sandbox/react/src/samples/questionnaire/invalid.tsx [React]
<<< ../../../sandbox/vue/src/samples/questionnaire/invalid.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/questionnaire/invalid.ts [Angular]
:::

### Disabled

<Preview frame="stack">
  <art-questionnaire items="[{&quot;name&quot;:&quot;direction&quot;,&quot;required&quot;:true,&quot;prompt&quot;:&quot;What should we prototype next?&quot;,&quot;description&quot;:&quot;Choose a direction or write your own.&quot;,&quot;choices&quot;:[{&quot;value&quot;:&quot;delegation&quot;,&quot;label&quot;:&quot;Delegation&quot;,&quot;description&quot;:&quot;Show how work moves to a specialist.&quot;},{&quot;value&quot;:&quot;questions&quot;,&quot;label&quot;:&quot;Question prompts&quot;,&quot;description&quot;:&quot;Show choices while the interface waits.&quot;},{&quot;value&quot;:&quot;both&quot;,&quot;label&quot;:&quot;Both together&quot;}],&quot;input&quot;:{&quot;label&quot;:&quot;Another answer&quot;,&quot;placeholder&quot;:&quot;Type another answer…&quot;}},{&quot;name&quot;:&quot;detail&quot;,&quot;required&quot;:false,&quot;prompt&quot;:&quot;How much detail should it include?&quot;,&quot;description&quot;:&quot;Skip this if you are not sure yet.&quot;,&quot;choices&quot;:[{&quot;value&quot;:&quot;focused&quot;,&quot;label&quot;:&quot;Focused&quot;},{&quot;value&quot;:&quot;complete&quot;,&quot;label&quot;:&quot;Complete flow&quot;}]},{&quot;name&quot;:&quot;channels&quot;,&quot;required&quot;:true,&quot;multiple&quot;:true,&quot;min&quot;:1,&quot;max&quot;:2,&quot;prompt&quot;:&quot;Where should we share it?&quot;,&quot;description&quot;:&quot;Pick one or two.&quot;,&quot;choices&quot;:[{&quot;value&quot;:&quot;slack&quot;,&quot;label&quot;:&quot;Slack&quot;},{&quot;value&quot;:&quot;email&quot;,&quot;label&quot;:&quot;Email&quot;},{&quot;value&quot;:&quot;docs&quot;,&quot;label&quot;:&quot;The docs site&quot;}]}]" disabled></art-questionnaire>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/questionnaire/disabled.html [HTML]
<<< ../../../sandbox/react/src/samples/questionnaire/disabled.tsx [React]
<<< ../../../sandbox/vue/src/samples/questionnaire/disabled.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/questionnaire/disabled.ts [Angular]
:::

## API Reference

<ApiReference tag="art-questionnaire" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Move between choices, the text field and the buttons |
| `↑ / ↓ (radio choices), Space (checkbox choices)` | Select a choice |
| `A–Z or 1–9` | Select a choice by its shortcut (outside a text field) |
| `Enter` | Next / Submit (Shift-free; a textarea keeps Enter) |

Each question is a `<fieldset>` with a `<legend>`; choices are native radios / checkboxes inside labelled cards (the visible card is the label); progress is a named `progressbar` with `aria-valuetext`; errors are `role="alert"` and the fieldset gets `aria-invalid` and `aria-describedby`. The text field is named by its `input.label`. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/radio/).

States: `hover` and `focus-visible` on choice cards and `disabled` for the whole questionnaire are in the matrix; `invalid` is a runtime state (an error after a failed check — see Validation) and is covered by the e2e tests. `active` and `loading` do not apply.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-space-6`, `--art-space-4`, `--art-space-2`, `--art-space-3`` | rhythm and card padding |
| ``--art-color-border-default`, `--art-color-border-strong`, `--art-color-bg-accent`, `--art-color-bg-canvas`, `--art-radius-lg`` | choice cards |
| ``--art-color-bg-muted`, `--art-color-primary-solid`, `--art-space-1`` | progress track and fill |
| ``--art-font-size-lg`, `--art-font-weight-semibold`, `--art-font-size-sm`, `--art-font-size-xs`, `--art-color-fg-muted`` | prompt, description, progress |
| ``--art-color-destructive-fg`` | error text |
| ``--art-control-height-md`, `--art-color-primary-solid`, `--art-color-primary-hover`, `--art-color-fg-on-primary`, `--art-shadow-raised`` | buttons |
| ``--art-ring-width`, `--art-ring-offset`, `--art-color-ring`` | focus ring |

## Do / Don't

| Do | Don't |
|---|---|
| Keep one question per step and say why you ask | Stack several questions on one step |
| Mark truly optional questions as not required | Make everything required |
| Give the free-text `input` a label | Rely on its placeholder |
