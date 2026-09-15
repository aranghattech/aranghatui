import type { ComponentStories } from '@artui/stories';

const bold = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/></svg>`;
const italic = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg>`;
export const stories: ComponentStories = {
  tag: 'art-toggle',
  tier: 'base',
  variants: ['default', 'outline'],
  sizes: ['sm', 'md', 'lg'],
  states: ['default', 'hover', 'focus-visible', 'active', 'disabled'],
  directional: true,
  examples: {
    basic: { title: 'Basic', render: () => `<art-toggle icon aria-label="Toggle bold"><art-icon>${bold}</art-icon></art-toggle>` },
    outline: { title: 'Outline', render: () => `<art-toggle variant="outline" icon aria-label="Toggle italic"><art-icon>${italic}</art-icon></art-toggle>` },
    'with-text': { title: 'With text', render: () => `<art-toggle><art-icon>${italic}</art-icon>Italic</art-toggle>` },
    sizes: { title: 'Sizes', render: () => `<art-toggle size="sm" icon aria-label="Toggle bold"><art-icon>${bold}</art-icon></art-toggle>\n<art-toggle icon aria-label="Toggle bold"><art-icon>${bold}</art-icon></art-toggle>\n<art-toggle size="lg" icon aria-label="Toggle bold"><art-icon>${bold}</art-icon></art-toggle>` },
    pressed: { title: 'Pressed', render: () => `<art-toggle pressed><art-icon>${bold}</art-icon>Bold</art-toggle>` },
    disabled: { title: 'Disabled', render: () => `<art-toggle disabled><art-icon>${bold}</art-icon>Bold</art-toggle>` },
  },
  render: ({ variant, size, state }) => `<art-toggle variant="${variant}" size="${size}" pressed${state === 'disabled' ? ' disabled' : ''}><art-icon>${bold}</art-icon>Bold</art-toggle>`,
  focusTarget: 'art-toggle button',
  docs: {
    description: 'A two-state button that can be either on or off. shadcn/ui parity, form-associated.',
    usage: '`pressed` is the state; `change` bubbles from the host with `detail.pressed`. Icon-only toggles need `aria-label`. Use `art-toggle-group` for a set of related toggles.',
    keyboard: [['Tab', 'Focus'], ['Space / Enter', 'Toggle']],
    roles: 'Native `<button>` with `aria-pressed`; icon-only toggles are named by `aria-label` (forwarded across the shadow boundary).',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/button/',
    states: 'hover, active (press), focus-visible and disabled are implemented; `invalid` and `loading` are not applicable.',
    tokens: [['`--art-control-height-{sm,md,lg}`, `--art-control-padding-x-field-{sm,md,lg}`', 'sizes'], ['`--art-color-bg-accent`, `--art-color-bg-muted`, `--art-color-fg-muted`', 'pressed and hover fills'], ['`--art-color-border-default`, `--art-shadow-raised`', 'outline variant'], ['`--art-radius-md`', 'shape'], ['`--art-ring-*`', 'focus ring']],
    dos: [['Use for formatting-style on/off tools', 'Use for settings that persist (use Switch)'], ['Keep the icon and label stable across states', 'Swap the label between "On" and "Off"']],
  },
};
