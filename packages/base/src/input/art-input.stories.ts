import type { ComponentStories } from '@artui/stories';

const search = `<art-icon slot="start"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></art-icon>`;
const mail = `<art-icon slot="end"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></art-icon>`;

export const stories: ComponentStories = {
  tag: 'art-input',
  tier: 'base',
  variants: ['default'],
  sizes: ['sm', 'md', 'lg'],
  // hover / active / loading do not apply (documented); invalid is a prop
  states: ['default', 'focus-visible', 'disabled', 'invalid'],
  directional: true,
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => `<art-input type="email" placeholder="Email" aria-label="Email"></art-input>`, note: 'An input without a visible label needs `aria-label`; prefer a visible `art-label`.' },
    sizes: { title: 'Sizes', render: () => `<art-input size="sm" placeholder="Small" aria-label="Small"></art-input>\n<art-input placeholder="Medium" aria-label="Medium"></art-input>\n<art-input size="lg" placeholder="Large" aria-label="Large"></art-input>`, note: 'Heights come from `--art-control-height-*`, so an input and a button of the same size line up pixel-perfectly.' },
    'with-label': { title: 'With label', render: () => `<art-label for="email-1">Email</art-label>\n<art-input id="email-1" type="email" placeholder="Email"></art-input>`, note: 'The label names the input across the shadow boundary — no extra ARIA needed.' },
    'with-button': { title: 'With button', render: () => `<art-input type="email" placeholder="Email" aria-label="Email"></art-input>\n<art-button type="submit">Subscribe</art-button>`, frame: 'inline' },
    disabled: { title: 'Disabled', render: () => `<art-input placeholder="Email" aria-label="Email" disabled></art-input>` },
    invalid: { title: 'Invalid', render: () => `<art-label for="email-2">Email</art-label>\n<art-input id="email-2" type="email" value="not-an-email" invalid aria-describedby="email-2-error"></art-input>\n<p id="email-2-error">Enter a valid email address.</p>`, note: '`invalid` sets `aria-invalid` and the destructive ring; the description is read through `aria-describedby`.' },
    'with-icon': { title: 'With icon', render: () => `<art-input placeholder="Search" aria-label="Search">\n  ${search}\n</art-input>`, note: 'Anything in the `start` / `end` slot sits inside the field frame and dims with the muted foreground. Use `<art-icon>` with your icon data, or drop in a raw `<svg>` from the icon set you already use.' },
    'with-end-icon': { title: 'With end icon', render: () => `<art-input type="email" placeholder="Email" aria-label="Email">\n  ${mail}\n</art-input>` },
    'with-text': { title: 'With text', render: () => `<art-input placeholder="example" aria-label="Domain">\n  <span slot="start">https://</span>\n  <span slot="end">.com</span>\n</art-input>`, note: 'Short text addons work the same way — a prefix, a suffix or a unit. Clicking an addon focuses the input.' },
    'addon-sizes': { title: 'Addon sizes', render: () => `<art-input size="sm" placeholder="Search" aria-label="Search small">\n  ${search}\n</art-input>\n<art-input placeholder="Search" aria-label="Search medium">\n  ${search}\n</art-input>\n<art-input size="lg" placeholder="Search" aria-label="Search large">\n  ${search}\n</art-input>`, note: 'The addon padding follows the field padding of each size.' },
    file: { title: 'File', render: () => `<art-label for="picture">Picture</art-label>\n<art-input id="picture" type="file"></art-input>` },
    form: { title: 'In a form', manual: true, render: () => `<form onsubmit="event.preventDefault()">\n  <art-label for="username">Username</art-label>\n  <art-input id="username" name="username" placeholder="shadcn" required minlength="2"></art-input>\n  <art-button type="submit">Submit</art-button>\n  <art-button type="reset" variant="ghost">Reset</art-button>\n</form>`, note: 'Form-associated: the value is submitted under `name`, `required`/`minlength` participate in validation, and reset restores the initial value.' },
  },
  render: ({ size, state }) => `<art-input size="${size}" placeholder="Email" aria-label="Email"${state === 'disabled' ? ' disabled' : ''}${state === 'invalid' ? ' invalid value="not-an-email"' : ''}></art-input>`,
  focusTarget: 'art-input input',
  docs: {
    description: 'Displays a form input field or a component that looks like an input field. shadcn/ui parity, form-associated.',
    usage: '`input` fires on every keystroke and `change` on commit; both bubble from `<art-input>` with `detail.value` (and `event.target.value`). React uses `onInput` / `onChange`, Vue `v-model`, Angular `[(ngModel)]` or reactive forms — no adapters. Icons or short text go in the `start` / `end` slots and render inside the field frame.',
    keyboard: [['Tab', 'Focus the input (focus is delegated to the native control)'], ['Typing', 'Updates `value`, emits `input`'], ['Enter / blur', 'Emits `change`; Enter submits the surrounding form']],
    roles: 'Native `<input>` semantics. Names arrive via `aria-label`, or via `aria-labelledby` / `art-label`, whose referenced text is resolved across the shadow boundary; `aria-describedby` becomes the description.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    states: '`focus-visible`, `disabled` and `invalid` are implemented. `hover`, `active` and `loading` do not apply to a text field (shadcn has no hover style either).',
    tokens: [['`--art-control-height-{sm,md,lg}`, `--art-control-padding-x-field-{sm,md,lg}`', 'sizes'], ['`--art-color-border-default`, `--art-border-width`, `--art-radius-md`', 'frame'], ['`--art-color-fg-default`, `--art-color-fg-muted`', 'text, placeholder, addons'], ['`--art-size-icon-md`, `--art-font-weight-medium`, `--art-font-line-height-sm`', 'addon icon size and text'], ['`--art-color-primary-solid`, `--art-color-fg-on-primary`', 'selection'], ['`--art-color-destructive-solid`', 'invalid ring'], ['`--art-ring-width`, `--art-ring-offset`, `--art-color-ring`', 'focus ring'], ['`--art-shadow-raised`', 'elevation'], ['`--art-font-size-md`, `--art-font-size-sm`', '16 px on small screens (no iOS zoom), 14 px from `md`']],
    dos: [['Pair every input with a visible label', 'Use placeholder text as the label'], ['Match input and button sizes in a row', 'Mix `sm` inputs with `md` buttons'], ['Set `type` so mobile keyboards fit', 'Use `type="text"` for emails and numbers'], ['Put icons and units in the `start` / `end` slots', 'Overlay an icon on the field with absolute positioning']],
  },
};
