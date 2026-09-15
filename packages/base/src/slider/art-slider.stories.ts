import type { ComponentStories } from '@artui/stories';

export const stories: ComponentStories = {
  tag: 'art-slider',
  tier: 'base',
  variants: ['default'],
  sizes: ['sm', 'md', 'lg'],
  states: ['default', 'hover', 'focus-visible', 'active', 'disabled'],
  directional: true,
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => `<art-slider value="33" aria-label="Volume"></art-slider>` },
    step: { title: 'Steps', render: () => `<art-slider value="40" step="10" aria-label="Opacity"></art-slider>` },
    sizes: { title: 'Sizes', render: () => `<art-slider size="sm" value="30" aria-label="Small"></art-slider>\n<art-slider value="50" aria-label="Medium"></art-slider>\n<art-slider size="lg" value="70" aria-label="Large"></art-slider>` },
    vertical: { title: 'Vertical', frame: 'inline', render: () => `<art-slider orientation="vertical" value="60" aria-label="Level"></art-slider>` },
    disabled: { title: 'Disabled', render: () => `<art-slider value="50" disabled aria-label="Volume"></art-slider>` },
  },
  render: ({ size, state }) => `<art-slider size="${size}" value="40" aria-label="Volume"${state === 'disabled' ? ' disabled' : ''}></art-slider>`,
  focusTarget: 'art-slider input',
  docs: {
    description: 'An input where the user selects a value from within a given range. A styled native `<input type="range">`, form-associated.',
    usage: '`input` fires continuously while dragging or stepping, `change` when the interaction ends; both bubble from the host with `detail.value` (a number). `v-model` and `ngModel` work out of the box. A two-thumb range is not part of this control.',
    keyboard: [['Tab', 'Focus the slider'], ['Arrow keys, Page Up / Down, Home / End', 'Native range-input behaviour (Left/Right swap in RTL)']],
    roles: 'A native `<input type="range">`: value announcements, keyboard and touch behaviour come from the platform. `aria-label`, `aria-labelledby` and `aria-describedby` are resolved across the shadow boundary; vertical sliders set `aria-orientation`.',
    states: 'hover (thumb grows), active (dragging), focus-visible (ring on the thumb) and disabled are implemented; `invalid` and `loading` are not applicable.',
    tokens: [['`--art-space-*`', 'track thickness (1 / 1.5 / 2) and thumb size (3 / 4 / 5)'], ['`--art-color-bg-muted`, `--art-color-primary-solid`', 'track and filled range'], ['`--art-color-bg-canvas`, `--art-color-primary-solid`, `--art-border-width`', 'thumb'], ['`--art-radius-full`', 'shape'], ['`--art-ring-*`', 'focus ring on the thumb'], ['`--art-shadow-raised`', 'thumb elevation'], ['`--art-duration-fast`, `--art-ease-out`', 'thumb motion']],
    dos: [['Show the current value next to the slider', 'Rely on the thumb position alone'], ['Use a step that matches meaningful increments', 'Use a slider for precise numeric entry (use Input)']],
  },
};
