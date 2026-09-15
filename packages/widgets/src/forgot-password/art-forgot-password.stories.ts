import type { ComponentStories } from '@artui/stories';

const forgot = (attrs = '') => `<art-forgot-password login-href="#login"${attrs}></art-forgot-password>`;

export const stories: ComponentStories = {
  tag: 'art-forgot-password',
  tier: 'widgets',
  variants: ['default'],
  sizes: [],
  states: ['default'],
  directional: true,
  frame: 'inline',
  examples: {
    basic: { title: 'Basic', render: () => forgot(), note: 'One email field and the send button; `submit` fires with `detail.email`. `login-href` adds the way back.' },
    sent: { title: 'Sent', render: () => forgot(' sent'), note: 'Set `sent` after your API accepted the request: the card confirms and offers the way back to login.' },
    error: { title: 'Error', render: () => forgot(' error="We could not find an account with that email."'), note: '`error` shows a live-region line above the button.' },
  },
  render: () => forgot(),
  docs: {
    description: 'The forgot-password screen as one element: an email field, the send button and a confirmation once the link is out. Compiled widget (ADR-0010).',
    usage: 'Place `<art-forgot-password login-href>`, listen to `submit` (`detail.email`), set `loading` while you send and `sent` when done (or `error`). Slots: `logo`, `footer`. React `<ForgotPassword onSubmit sent>`, Vue `:sent`, Angular `[sent]`.',
    requires: ['base'],
    keyboard: [['Tab', 'Email, button, back link'], ['Enter', 'Submit from the field']],
    roles: 'A native `<form>` with a labelled, required email field; `error` is a `role="alert"` line; the confirmation replaces the form (heading and description change, so screen readers hear the new state on the next focus).',
    apg: 'https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html',
    states: '`loading`, `error` and `sent` on the widget; the field and buttons carry their own.',
    tokens: [['`--art-container-sm`', 'card width'], ['`--art-space-6`, `--art-space-3`, `--art-space-4`', 'form gaps'], ['`--art-color-fg-muted`, `--art-font-size-sm`', 'helper text'], ['`--art-color-destructive-fg`', 'error line'], ['(Card, Field, Input, Button tokens)', 'the parts']],
    dos: [['Confirm without revealing whether the email exists', 'Say "no account found" (account enumeration)'], ['Tell users how long the link lasts', 'Send a link that never expires'], ['Offer the way back to login', 'Strand the user on the confirmation']],
  },
};
