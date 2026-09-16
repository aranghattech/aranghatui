import type { ComponentStories } from '@artui/stories';

const social = `  <art-button slot="social" variant="outline">Sign up with Google</art-button>`;
const signup = (attrs = '', extra = '') => `<art-signup login-href="#login"${attrs}>${extra ? `\n${extra}\n` : ''}</art-signup>`;

export const stories: ComponentStories = {
  tag: 'art-signup',
  tier: 'widgets',
  variants: ['default'],
  sizes: [],
  states: ['default'],
  directional: true,
  frame: 'inline',
  examples: {
    basic: { title: 'Basic', render: () => signup(), note: 'Name, email, password and confirmation, the create-account button and the sign-in line (`login-href`). The widget refuses mismatched passwords with an inline error; `submit` fires with `detail.name` / `detail.email` / `detail.password` once everything validates.' },
    social: { title: 'With social sign-up', render: () => signup('', social), note: '`art-button`s in the `social` slot appear under an "Or continue with" divider.' },
    'no-confirm': { title: 'Without confirmation', render: () => signup(' hide-confirm'), note: '`hide-confirm` drops the second password field.' },
    error: { title: 'Error', render: () => signup(' error="An account with this email already exists."'), note: '`error` shows a live-region line above the button.' },
  },
  render: () => signup(),
  docs: {
    description: 'The sign-up screen as one element: name, email, password and confirmation in a card, optional social buttons, a sign-in link. shadcn/ui signup blocks, compiled (ADR-0010).',
    usage: 'Place `<art-signup login-href>` and listen to `submit` (`detail.name`, `detail.email`, `detail.password`); set `loading` while you create the account and `error` when it fails. Slots: `logo`, `social`, `footer`; `hide-confirm` for a single password field. React `<Signup onSubmit>`, Vue `@submit`, Angular `(submit)`.',
    requires: ['base'],
    keyboard: [['Tab', 'Name, email, password, confirmation, button, social buttons, sign-in link'], ['Enter', 'Submit from any field']],
    roles: 'A native `<form>` with labelled fields; required fields block submission natively; a mismatch marks the confirmation field invalid with an `alert` message and moves focus there; `error` is a `role="alert"` line.',
    apg: 'https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html',
    states: '`loading`, `error` and the mismatch error on the widget; the fields and buttons carry their own.',
    tokens: [['`--art-container-sm`', 'card width'], ['`--art-space-6`, `--art-space-3`, `--art-space-4`, `--art-space-2`', 'form gaps'], ['`--art-color-fg-muted`, `--art-color-border-default`, `--art-font-size-sm`', 'divider and helper text'], ['`--art-color-destructive-fg`', 'error line'], ['(Card, Field, Input, Button tokens)', 'the parts']],
    dos: [['Ask only for what the account needs', 'Add a phone and a birthday "just in case"'], ['Explain password rules in `description`', 'Reject a password without saying why'], ['Link to sign-in for returning users', 'Let them create a duplicate account']],
  },
};
