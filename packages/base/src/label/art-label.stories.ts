import type { ComponentStories } from '@artui/stories';

const field = `style="display:flex;flex-direction:column;gap:var(--art-space-2)"`;
const input = (id: string, extra = '') => `<input id="${id}" type="email" placeholder="you@example.com" ${extra} style="font:inherit;padding:var(--art-space-2);border:var(--art-border-width) solid var(--art-color-border-default);border-radius:var(--art-radius-md);background:transparent;color:inherit">`;

export const stories: ComponentStories = {
  tag: 'art-label',
  tier: 'base',
  variants: ['default'],
  sizes: [],
  states: ['default', 'disabled'],
  directional: true,
  examples: {
    basic: { title: 'Basic', render: () => `<div ${field}><art-label for="email">Your email address</art-label>${input('email')}</div>`, note: 'Clicking the label focuses the control with the matching `id`, even across shadow boundaries.' },
    disabled: { title: 'Disabled', render: () => `<div ${field}><art-label for="email-off" disabled>Your email address</art-label>${input('email-off', 'disabled')}</div>`, note: 'Field sets `disabled` on the label automatically when its control is disabled.' },
  },
  render: ({ state }) => `<art-label${state === 'disabled' ? ' disabled' : ''}>Your email address</art-label>`,
  docs: {
    description: 'Renders an accessible label associated with a control. shadcn/ui parity.',
    usage: '`for` works across shadow boundaries: the label resolves the id in its own tree, then the document, and focuses (or toggles) the control on click. Pair it with `art-field` for automatic wiring and error states.',
    keyboard: [['Click / tap', 'Focuses the associated control; toggles checkbox-like controls']],
    roles: 'Native `<label>` semantics inside the shadow root, plus `aria-labelledby` set on the `for` target pointing at the label host, so the control gets its accessible name across the shadow boundary (existing `aria-labelledby` is respected).',
    states: '`disabled` dims the label and disables pointer events. `hover`, `active`, `focus-visible`, `loading` and `invalid` do not apply — a label is not interactive on its own; the control carries those states.',
    tokens: [['`--art-font-size-sm`, `--art-font-weight-medium`', 'type'], ['`--art-space-2`', 'gap to inline content'], ['`--art-color-fg-default`', 'text colour (inherited)']],
    dos: [['Always give a control a visible label', 'Rely on `placeholder` as the only label'], ['Keep labels short and sentence case', 'Use ALL CAPS or trailing colons']],
  },
};
