import type { ComponentStories } from '@artui/stories';

export const stories: ComponentStories = {
  tag: 'art-input-otp',
  tier: 'base',
  variants: ['default'],
  sizes: [],
  states: ['default', 'focus-visible', 'disabled', 'invalid'],
  directional: true,
  examples: {
    basic: { title: 'Basic', render: () => `<art-input-otp aria-label="One-time code"></art-input-otp>`, note: 'Six digits by default. Typing, pasting a full code, autofill from SMS (`autocomplete="one-time-code"`), Backspace and the arrow keys are all native.' },
    groups: { title: 'Groups', render: () => `<art-input-otp group-size="3" aria-label="One-time code"></art-input-otp>`, note: '`group-size` splits the slots into groups with a separator between them.' },
    length: { title: 'Length', render: () => `<art-input-otp length="4" aria-label="PIN"></art-input-otp>` },
    alphanumeric: { title: 'Alphanumeric', render: () => `<art-input-otp pattern="alphanumeric" group-size="4" length="8" aria-label="Licence key"></art-input-otp>`, note: '`pattern="alphanumeric"` accepts letters and digits; `numeric` (default) filters to digits and shows the numeric keyboard.' },
    'with-value': { title: 'With value', render: () => `<art-input-otp value="1234" aria-label="One-time code"></art-input-otp>` },
    disabled: { title: 'Disabled', render: () => `<art-input-otp value="123456" disabled aria-label="One-time code"></art-input-otp>` },
    invalid: { title: 'Invalid', render: () => `<art-input-otp value="000000" invalid aria-label="One-time code"></art-input-otp>` },
    'with-label': { title: 'With label', frame: 'stack', render: () => `<art-field>\n  <art-label slot="label">Verification code</art-label>\n  <art-input-otp group-size="3"></art-input-otp>\n  <p slot="description">Enter the 6-digit code we sent to your phone.</p>\n</art-field>` },
  },
  render: ({ state }) => `<art-input-otp group-size="3" aria-label="Code" value="12"${state === 'disabled' ? ' disabled' : ''}${state === 'invalid' ? ' invalid' : ''}></art-input-otp>`,
  focusTarget: 'art-input-otp input',
  docs: {
    description: 'Accessible one-time password component with copy paste functionality. shadcn/ui parity, form-associated, one native input.',
    usage: 'Bind `value`; `input` fires on every character, `change` on blur and `complete` when all slots are filled. React `onInput` / `onComplete`, Vue `v-model` + `@complete`, Angular `[(ngModel)]` + `(complete)`.',
    keyboard: [['Tab', 'Focus the field'], ['Digits / characters', 'Fill the next slot'], ['Backspace', 'Clear the previous slot'], ['← / →', 'Move the caret between slots'], ['⌘V / Ctrl+V', 'Paste a whole code']],
    roles: 'One native `<input>` (named via `aria-label` / `aria-labelledby`, described via `aria-describedby`) carries all semantics; the slots are decorative (`aria-hidden`).',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    states: '`focus-visible` (ring on the active slot), `disabled` and `invalid` (destructive border on every slot) are implemented. `hover`, `active` and `loading` do not apply.',
    tokens: [['`--art-control-height-md`', 'slot size'], ['`--art-color-border-default`, `--art-color-border-strong`, `--art-border-width`, `--art-radius-md`', 'slot frame'], ['`--art-ring-width`, `--art-ring-offset`, `--art-color-ring`', 'active slot ring'], ['`--art-color-destructive-solid`', 'invalid border'], ['`--art-color-fg-default`, `--art-size-icon-md`, `--art-duration-caret-blink`', 'caret'], ['`--art-color-fg-muted`', 'separator'], ['`--art-space-2`', 'group gap']],
    dos: [['Set `length` to the code you actually send', 'Ask for more digits than the code has'], ['Submit on `complete`', 'Make the user press a button after the last digit'], ['Name it (“One-time code”)', 'Leave the field unnamed']],
  },
};
