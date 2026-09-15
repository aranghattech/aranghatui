import type { ComponentStories } from '@artui/stories';

const items = JSON.stringify([
  { name: 'direction', required: true, prompt: 'What should we prototype next?', description: 'Choose a direction or write your own.', choices: [{ value: 'delegation', label: 'Delegation', description: 'Show how work moves to a specialist.' }, { value: 'questions', label: 'Question prompts', description: 'Show choices while the interface waits.' }, { value: 'both', label: 'Both together' }], input: { label: 'Another answer', placeholder: 'Type another answer…' } },
  { name: 'detail', required: false, prompt: 'How much detail should it include?', description: 'Skip this if you are not sure yet.', choices: [{ value: 'focused', label: 'Focused' }, { value: 'complete', label: 'Complete flow' }] },
  { name: 'channels', required: true, multiple: true, min: 1, max: 2, prompt: 'Where should we share it?', description: 'Pick one or two.', choices: [{ value: 'slack', label: 'Slack' }, { value: 'email', label: 'Email' }, { value: 'docs', label: 'The docs site' }] },
]).replace(/'/g, '&#39;');
const attr = (json: string) => json.replace(/"/g, '&quot;');

export const stories: ComponentStories = {
  tag: 'art-questionnaire',
  tier: 'components',
  variants: ['default'],
  sizes: [],
  states: ['default', 'hover', 'focus-visible', 'disabled'],
  directional: true,
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', manual: true, render: () => `<art-questionnaire items="${attr(items)}"></art-questionnaire>`, note: 'Questions are data: `items` (an array, or a JSON string attribute). One question shows at a time with progress; Next validates and moves on, Submit on the last one emits `complete` with all answers. A required question cannot be skipped.' },
    multiple: { title: 'Multiple selection', render: () => `<art-questionnaire step="2" items="${attr(items)}"></art-questionnaire>`, note: '`multiple: true` turns choices into checkboxes and the answer into an array; `min` / `max` bound how many.' },
    'free-text': { title: 'Freeform answers', render: () => `<art-questionnaire items="${attr(JSON.stringify([{ name: 'feedback', required: true, prompt: 'Anything else we should know?', input: { label: 'Your feedback', placeholder: 'Write a few words…', multiline: true }, minLength: 10 }]))}"></art-questionnaire>`, note: 'An `input` alone makes a free-text question (`multiline` for a textarea); `pattern`, `minLength` and `maxLength` validate it. With choices, the input is the "another answer" option.' },
    optional: { title: 'Optional questions', render: () => `<art-questionnaire step="1" items="${attr(items)}"></art-questionnaire>`, note: 'A question without `required` shows Skip, which clears its answer and moves on.' },
    shortcuts: { title: 'Keyboard shortcuts', render: () => `<art-questionnaire shortcuts="numbers" items="${attr(items)}"></art-questionnaire>`, note: '`shortcuts="letters"` (default) or `"numbers"` selects a choice with a key; `"none"` hides the badges. Enter moves on.' },
    invalid: { title: 'Validation', manual: true, render: () => `<art-questionnaire id="validated" items="${attr(items)}"></art-questionnaire>`, note: 'Pressing Next on an unanswered required question shows an error (`role="alert"`) and marks the fieldset `aria-invalid`. `validate(item, answer)` adds your own rule and `errorMessage` overrides the built-in text.' },
    disabled: { title: 'Disabled', render: () => `<art-questionnaire items="${attr(items)}" disabled></art-questionnaire>` },
  },
  render: ({ state }) => `<art-questionnaire items="${attr(items)}"${state === 'disabled' ? ' disabled' : ''}></art-questionnaire>`,
  focusTarget: 'art-questionnaire [part="choice"] input',
  docs: {
    description: 'A multi-step form for single-choice, multiple-choice, freeform and optional questions with progress and validation. shadcn/ui parity, form-associated.',
    usage: 'Pass `items` (name, prompt, description, choices, `multiple`, `input`, `required`, validation bounds), bind `value` and `step`, listen to `answer-change`, `step-change` and `complete`. Inside a `<form>` the answers submit as FormData entries under each question\'s `name`. React `onComplete`, Vue `@complete`, Angular `(complete)`.',
    requires: ['base'],
    keyboard: [['Tab', 'Move between choices, the text field and the buttons'], ['↑ / ↓ (radio choices), Space (checkbox choices)', 'Select a choice'], ['A–Z or 1–9', 'Select a choice by its shortcut (outside a text field)'], ['Enter', 'Next / Submit (Shift-free; a textarea keeps Enter)']],
    roles: 'Each question is a `<fieldset>` with a `<legend>`; choices are native radios / checkboxes inside labelled cards (the visible card is the label); progress is a named `progressbar` with `aria-valuetext`; errors are `role="alert"` and the fieldset gets `aria-invalid` and `aria-describedby`. The text field is named by its `input.label`.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/radio/',
    states: '`hover` and `focus-visible` on choice cards and `disabled` for the whole questionnaire are in the matrix; `invalid` is a runtime state (an error after a failed check — see Validation) and is covered by the e2e tests. `active` and `loading` do not apply.',
    tokens: [['`--art-space-6`, `--art-space-4`, `--art-space-2`, `--art-space-3`', 'rhythm and card padding'], ['`--art-color-border-default`, `--art-color-border-strong`, `--art-color-bg-accent`, `--art-color-bg-canvas`, `--art-radius-lg`', 'choice cards'], ['`--art-color-bg-muted`, `--art-color-primary-solid`, `--art-space-1`', 'progress track and fill'], ['`--art-font-size-lg`, `--art-font-weight-semibold`, `--art-font-size-sm`, `--art-font-size-xs`, `--art-color-fg-muted`', 'prompt, description, progress'], ['`--art-color-destructive-fg`', 'error text'], ['`--art-control-height-md`, `--art-color-primary-solid`, `--art-color-primary-hover`, `--art-color-fg-on-primary`, `--art-shadow-raised`', 'buttons'], ['`--art-ring-width`, `--art-ring-offset`, `--art-color-ring`', 'focus ring']],
    dos: [['Keep one question per step and say why you ask', 'Stack several questions on one step'], ['Mark truly optional questions as not required', 'Make everything required'], ['Give the free-text `input` a label', 'Rely on its placeholder']],
  },
};
