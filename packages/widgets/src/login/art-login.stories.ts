import type { ComponentStories } from '@artui/stories';

const logo = `  <a slot="logo" href="#" style="display: inline-flex; align-items: center; gap: var(--art-space-2); color: inherit; text-decoration: none"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: var(--art-size-icon-lg); height: var(--art-size-icon-lg)"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/></svg>Acme Inc.</a>`;
const social = `  <art-button slot="social" variant="outline"><art-icon slot="start"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg></art-icon>Login with Apple</art-button>\n  <art-button slot="social" variant="outline"><art-icon slot="start"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg></art-icon>Login with Google</art-button>`;
const login = (attrs = '', extra = '') => `<art-login forgot-href="#forgot" signup-href="#signup"${attrs}>${extra ? `\n${extra}\n` : ''}</art-login>`;

export const stories: ComponentStories = {
  tag: 'art-login',
  tier: 'widgets',
  variants: ['default'],
  sizes: [],
  states: ['default'],
  directional: true,
  frame: 'inline',
  examples: {
    basic: { title: 'Basic', render: () => login(), note: 'A card with email and password, the "forgot" link (`forgot-href`), the submit button and the sign-up line (`signup-href`). Fields are required; `submit` fires with `detail.email` / `detail.password` once they validate — you call your API and set `loading` / `error`.' },
    logo: { title: 'With logo', render: () => login('', logo), note: 'Brand in the `logo` slot sits above the card (shadcn login-03).' },
    social: { title: 'With social login', render: () => login('', social), note: '`art-button`s in the `social` slot appear under an "Or continue with" divider.' },
    'email-only': { title: 'Email only', render: () => login(' email-only submit-label="Send magic link"'), note: '`email-only` drops the password for magic-link sign-in.' },
    error: { title: 'Error', render: () => login(' error="Wrong email or password."'), note: '`error` shows a live-region line above the button.' },
    loading: { title: 'Loading', render: () => login(' loading'), note: '`loading` puts a spinner on the button and ignores submits.' },
  },
  render: () => login(),
  docs: {
    description: 'The login screen as one element: a card with email, password, forgot-password and sign-up links, optional social buttons. shadcn/ui login blocks, compiled (ADR-0010).',
    usage: 'Place `<art-login forgot-href signup-href>` and listen to `submit` (`detail.email`, `detail.password`); set `loading` while you authenticate and `error` when it fails. Slots: `logo`, `social`, `footer`. Text props (`heading`, `description`, `submit-label`, the labels) localise the copy. React `<Login onSubmit>`, Vue `@submit`, Angular `(submit)`.',
    requires: ['base'],
    keyboard: [['Tab', 'Email, forgot link, password, button, social buttons, sign-up link'], ['Enter', 'Submit from any field'], ['Escape', '—']],
    roles: 'A native `<form>` inside the card with labelled fields (`art-field` wires `for`); required fields block submission with the native messages; the error line is `role="alert"`; the button reports `aria-busy` while `loading`.',
    apg: 'https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html',
    states: '`loading` and `error` on the widget; hover / focus-visible / disabled / invalid belong to the fields and buttons inside.',
    tokens: [['`--art-container-sm`', 'card width'], ['`--art-space-6`, `--art-space-3`, `--art-space-4`, `--art-space-2`', 'form gaps, logo spacing'], ['`--art-color-fg-muted`, `--art-color-border-default`, `--art-font-size-sm`', 'divider and helper text'], ['`--art-color-destructive-fg`', 'error line'], ['(Card, Field, Input, Button tokens)', 'the parts']],
    dos: [['Set `error` with a human sentence', 'Show a raw API error code'], ['Keep `loading` on until the redirect', 'Let the user double-submit'], ['Offer the forgot and sign-up links', 'Dead-end a wrong password']],
  },
};
