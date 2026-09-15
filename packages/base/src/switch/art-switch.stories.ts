import type { ComponentStories } from '@artui/stories';

export const stories: ComponentStories = {
  tag: 'art-switch',
  tier: 'base',
  variants: ['default'],
  sizes: ['sm', 'md', 'lg'],
  states: ['default', 'hover', 'focus-visible', 'active', 'disabled', 'invalid'],
  directional: true,
  examples: {
    basic: { title: 'Basic', render: () => `<art-switch id="airplane"></art-switch>\n<art-label for="airplane">Airplane Mode</art-label>` },
    checked: { title: 'Checked', render: () => `<art-switch id="wifi" checked></art-switch>\n<art-label for="wifi">Wi-Fi</art-label>` },
    sizes: { title: 'Sizes', render: () => `<art-switch size="sm" checked aria-label="Small"></art-switch>\n<art-switch checked aria-label="Medium"></art-switch>\n<art-switch size="lg" checked aria-label="Large"></art-switch>` },
    disabled: { title: 'Disabled', render: () => `<art-switch id="off" disabled></art-switch>\n<art-label for="off" disabled>Unavailable</art-label>` },
  },
  render: ({ size, state }) => `<art-switch size="${size}" aria-label="Airplane mode" checked${state === 'disabled' ? ' disabled' : ''}${state === 'invalid' ? ' invalid' : ''}></art-switch>`,
  focusTarget: 'art-switch input',
  docs: {
    description: 'A control that allows the user to toggle between checked and not checked. shadcn/ui parity, form-associated.',
    usage: 'Same contract as Checkbox: `art-label for="…"` names and toggles it; `change` bubbles from the host with `detail.checked`.',
    keyboard: [['Tab', 'Focus the switch'], ['Space', 'Toggle (native)']],
    roles: 'A native `<input type="checkbox" role="switch">`; the name comes from `aria-label` or `art-label`.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/switch/',
    states: 'All six: hover, active, focus-visible, disabled, invalid. `loading` is not applicable.',
    tokens: [['`--art-space-*`', 'track and thumb geometry (h-4/5/6, w-7/9/11, thumb 3/4/5)'], ['`--art-radius-full`', 'shape'], ['`--art-color-primary-solid`, `--art-color-border-default`', 'on / off track'], ['`--art-color-bg-canvas`', 'thumb'], ['`--art-ring-*`', 'focus ring'], ['`--art-duration-fast`, `--art-ease-out`', 'thumb motion']],
    dos: [['Use for settings that take effect immediately', 'Use for choices that need a submit button (use Checkbox)'], ['Label the state, not the action', 'Write "Turn on" as the label']],
  },
};
