import type { ComponentStories } from '@artui/stories';

export const stories: ComponentStories = {
  tag: 'art-checkbox',
  tier: 'base',
  variants: ['default'],
  sizes: ['sm', 'md', 'lg'],
  states: ['default', 'hover', 'focus-visible', 'active', 'disabled', 'invalid'],
  directional: false,
  examples: {
    basic: { title: 'Basic', render: () => `<art-checkbox id="terms"></art-checkbox>\n<art-label for="terms">Accept terms and conditions</art-label>` },
    checked: { title: 'Checked', render: () => `<art-checkbox id="terms-2" checked></art-checkbox>\n<art-label for="terms-2">Accept terms and conditions</art-label>` },
    indeterminate: { title: 'Indeterminate', render: () => `<art-checkbox id="all" indeterminate></art-checkbox>\n<art-label for="all">Select all</art-label>`, note: '`indeterminate` shows the mixed state (`aria-checked="mixed"`); the next toggle checks it.' },
    sizes: { title: 'Sizes', render: () => `<art-checkbox size="sm" checked aria-label="Small"></art-checkbox>\n<art-checkbox checked aria-label="Medium"></art-checkbox>\n<art-checkbox size="lg" checked aria-label="Large"></art-checkbox>` },
    'with-text': { title: 'With text', frame: 'stack', render: () => `<art-checkbox id="terms-3" aria-describedby="terms-3-help"></art-checkbox>
<art-label for="terms-3">Accept terms and conditions</art-label>
<p id="terms-3-help">You agree to our Terms of Service and Privacy Policy.</p>` },
    disabled: { title: 'Disabled', render: () => `<art-checkbox id="d1" disabled></art-checkbox>\n<art-label for="d1" disabled>Unavailable</art-label>` },
    invalid: { title: 'Invalid', render: () => `<art-checkbox id="i1" invalid required></art-checkbox>\n<art-label for="i1">Required</art-label>` },
  },
  render: ({ size, state }) => `<art-checkbox size="${size}" aria-label="Accept" checked${state === 'disabled' ? ' disabled' : ''}${state === 'invalid' ? ' invalid' : ''}></art-checkbox>`,
  focusTarget: 'art-checkbox button',
  docs: {
    description: 'A control that allows the user to toggle between checked and not checked. shadcn/ui parity, form-associated.',
    usage: 'Pair it with `art-label for="…"`: the label names the control and toggles it on click. `change` bubbles from the host with `detail.checked` (`event.target.checked` too).',
    keyboard: [['Tab', 'Focus the checkbox'], ['Space', 'Toggle (Enter does nothing, per APG)']],
    roles: '`role="checkbox"` with `aria-checked` (`mixed` when indeterminate), `aria-required`, `aria-invalid`; name from `aria-label` / `art-label`.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/',
    states: 'All six: hover (border), active (press), focus-visible (ring), disabled, invalid (destructive ring). `loading` is not applicable.',
    tokens: [['`--art-size-icon-{sm,md,lg}`', 'box size'], ['`--art-radius-xs`', 'shape'], ['`--art-color-border-default`, `--art-border-width`', 'frame'], ['`--art-color-primary-solid`, `--art-color-fg-on-primary`', 'checked fill and mark'], ['`--art-color-destructive-solid`', 'invalid ring'], ['`--art-ring-*`', 'focus ring'], ['`--art-shadow-raised`', 'elevation']],
    dos: [['Use for independent yes/no options', 'Use for mutually exclusive choices (use Radio Group)'], ['Put the label to the right', 'Rely on colour alone for the checked state']],
  },
};
