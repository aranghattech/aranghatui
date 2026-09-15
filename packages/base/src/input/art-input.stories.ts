import type { ComponentStories } from '@artui/stories';

const col = `style="display:flex;flex-direction:column;gap:var(--art-space-2);width:20rem;max-width:100%"`;

export const stories: ComponentStories = {
  tag: 'art-input',
  tier: 'base',
  variants: ['default'],
  sizes: ['sm', 'md', 'lg'],
  // hover / active / loading do not apply (documented); invalid is a prop
  states: ['default', 'focus-visible', 'disabled', 'invalid'],
  directional: true,
  examples: {
    basic: { title: 'Basic', render: () => `<div ${col}><art-input type="email" placeholder="Email" aria-label="Email"></art-input></div>`, note: 'An input without a visible label needs `aria-label`; prefer a visible `art-label`.' },
    sizes: { title: 'Sizes', render: () => `<div ${col}><art-input size="sm" placeholder="Small" aria-label="Small"></art-input><art-input placeholder="Medium" aria-label="Medium"></art-input><art-input size="lg" placeholder="Large" aria-label="Large"></art-input></div>`, note: 'Heights come from `--art-control-height-*`, so an input and a button of the same size line up pixel-perfectly.' },
    'with-label': { title: 'With label', render: () => `<div ${col}><art-label for="email-1">Email</art-label><art-input id="email-1" type="email" placeholder="Email"></art-input></div>`, note: 'The label names the input across the shadow boundary — no extra ARIA needed.' },
    'with-button': { title: 'With button', render: () => `<div style="display:flex;gap:var(--art-space-2);width:20rem;max-width:100%"><art-input type="email" placeholder="Email" aria-label="Email"></art-input><art-button type="submit">Subscribe</art-button></div>` },
    disabled: { title: 'Disabled', render: () => `<div ${col}><art-input placeholder="Email" aria-label="Email" disabled></art-input></div>` },
    invalid: { title: 'Invalid', render: () => `<div ${col}><art-label for="email-2">Email</art-label><art-input id="email-2" type="email" value="not-an-email" invalid aria-describedby="email-2-error"></art-input><p id="email-2-error" style="margin:0;font-size:var(--art-font-size-sm);color:var(--art-color-destructive-fg)">Enter a valid email address.</p></div>`, note: '`invalid` sets `aria-invalid` and the destructive ring; the description is read through `aria-describedby`.' },
    file: { title: 'File', render: () => `<div ${col}><art-label for="picture">Picture</art-label><art-input id="picture" type="file"></art-input></div>` },
    form: { title: 'In a form', manual: true, render: () => `<form onsubmit="event.preventDefault(); this.querySelector('output').value = JSON.stringify(Object.fromEntries(new FormData(this)))" ${col}><art-label for="username">Username</art-label><art-input id="username" name="username" placeholder="shadcn" required minlength="2"></art-input><div style="display:flex;gap:var(--art-space-2)"><art-button type="submit">Submit</art-button><art-button type="reset" variant="ghost">Reset</art-button></div><output style="font-size:var(--art-font-size-sm);color:var(--art-color-fg-muted)"></output></form>`, note: 'Form-associated: the value is submitted under `name`, `required`/`minlength` participate in validation, and reset restores the initial value.' },
  },
  render: ({ size, state }) => `<div style="width:16rem"><art-input size="${size}" placeholder="Email" aria-label="Email"${state === 'disabled' ? ' disabled' : ''}${state === 'invalid' ? ' invalid value="not-an-email"' : ''}></art-input></div>`,
  focusTarget: 'art-input input',
  docs: {
    description: 'Displays a form input field or a component that looks like an input field. shadcn/ui parity, form-associated.',
    usage: '`input` fires on every keystroke and `change` on commit; both bubble from `<art-input>` with `detail.value` (and `event.target.value`). React uses `onInput` / `onChange`, Vue `v-model`, Angular `[(ngModel)]` or reactive forms — no adapters.',
    keyboard: [['Tab', 'Focus the input (focus is delegated to the native control)'], ['Typing', 'Updates `value`, emits `input`'], ['Enter / blur', 'Emits `change`; Enter submits the surrounding form']],
    roles: 'Native `<input>` semantics. Names arrive via `aria-label`, or via `aria-labelledby` / `art-label`, whose referenced text is resolved across the shadow boundary; `aria-describedby` becomes the description.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    states: '`focus-visible`, `disabled` and `invalid` are implemented. `hover`, `active` and `loading` do not apply to a text field (shadcn has no hover style either).',
    tokens: [['`--art-control-height-{sm,md,lg}`, `--art-control-padding-x-field-{sm,md,lg}`', 'sizes'], ['`--art-color-border-default`, `--art-border-width`, `--art-radius-md`', 'frame'], ['`--art-color-fg-default`, `--art-color-fg-muted`', 'text, placeholder'], ['`--art-color-primary-solid`, `--art-color-fg-on-primary`', 'selection'], ['`--art-color-destructive-solid`', 'invalid ring'], ['`--art-ring-width`, `--art-ring-offset`, `--art-color-ring`', 'focus ring'], ['`--art-shadow-raised`', 'elevation'], ['`--art-font-size-md`, `--art-font-size-sm`', '16 px on small screens (no iOS zoom), 14 px from `md`']],
    dos: [['Pair every input with a visible label', 'Use placeholder text as the label'], ['Match input and button sizes in a row', 'Mix `sm` inputs with `md` buttons'], ['Set `type` so mobile keyboards fit', 'Use `type="text"` for emails and numbers']],
  },
};
