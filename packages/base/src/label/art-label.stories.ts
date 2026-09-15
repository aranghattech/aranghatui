import type { ComponentStories } from '@artui/stories';

export const stories: ComponentStories = {
  tag: 'art-label',
  tier: 'base',
  variants: ['default'],
  sizes: [],
  states: ['default', 'disabled'],
  directional: true,
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => `<art-label for="email">Your email address</art-label>\n<art-input id="email" type="email" placeholder="Email"></art-input>`, note: 'Clicking the label focuses the control with the matching `id`, even across shadow boundaries, and names it for assistive technology.' },
    disabled: { title: 'Disabled', render: () => `<art-label for="email-off" disabled>Your email address</art-label>\n<art-input id="email-off" type="email" placeholder="Email" disabled></art-input>`, note: 'Field sets `disabled` on the label automatically when its control is disabled.' },
  },
  render: ({ state }) => `<art-label${state === 'disabled' ? ' disabled' : ''}>Your email address</art-label>`,
  docs: {
    description: 'Renders an accessible label associated with a control. shadcn/ui parity.',
    usage: '`for` works across shadow boundaries: the label resolves the id in its own tree, then the document, focuses (or toggles) the control on click and names it with `aria-labelledby`. Pair it with `art-field` for automatic wiring and error states.',
    keyboard: [['Click / tap', 'Focuses the associated control; toggles checkbox-like controls']],
    roles: 'Native `<label>` semantics inside the shadow root, plus `aria-labelledby` set on the `for` target pointing at the label host, so the control gets its accessible name across the shadow boundary (existing `aria-labelledby` is respected).',
    states: '`disabled` switches the text to the muted foreground (kept AA-readable; opacity would fail contrast) and disables pointer events. `hover`, `active`, `focus-visible`, `loading` and `invalid` do not apply — a label is not interactive on its own; the control carries those states.',
    tokens: [['`--art-font-size-sm`, `--art-font-weight-medium`', 'type'], ['`--art-space-2`', 'gap to inline content'], ['`--art-color-fg-default`', 'text colour (inherited)']],
    dos: [['Always give a control a visible label', 'Rely on `placeholder` as the only label'], ['Keep labels short and sentence case', 'Use ALL CAPS or trailing colons']],
  },
};
