import type { ComponentStories } from '@artui/stories';

export const stories: ComponentStories = {
  tag: 'art-progress',
  tier: 'base',
  variants: ['default'],
  sizes: [],
  states: ['default'],
  directional: true,
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => `<art-progress value="33" aria-label="Upload"></art-progress>` },
    values: { title: 'Values', render: () => `<art-progress value="0" aria-label="Empty"></art-progress>\n<art-progress value="50" aria-label="Half"></art-progress>\n<art-progress value="100" aria-label="Complete"></art-progress>` },
    'custom-max': { title: 'Custom max', render: () => `<art-progress value="3" max="8" aria-label="Steps"></art-progress>`, note: '`max` sets the scale; here 3 of 8 steps.' },
    'with-label': { title: 'With label', render: () => `<art-label id="upload-label">Uploading photo…</art-label>\n<art-progress value="66" aria-labelledby="upload-label"></art-progress>`, note: 'Name the bar with `aria-labelledby` (resolved across the shadow boundary) or `aria-label`.' },
  },
  render: () => `<art-progress value="60" aria-label="Progress"></art-progress>`,
  docs: {
    description: 'Displays an indicator showing the completion progress of a task. shadcn/ui parity, a native `<progress>`.',
    usage: 'Set `value` (0–`max`); the fill animates between values. Omit `value` for the platform\'s indeterminate bar. Always name it with `aria-label` or `aria-labelledby`.',
    keyboard: [['None', 'Not focusable']],
    roles: 'Native `<progress>` — `progressbar` role, `aria-valuenow`/`aria-valuemax` from the platform. The name is `aria-label` or the resolved `aria-labelledby` text.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/meter/',
    states: 'Not interactive — no hover, focus, active, disabled, loading or invalid state.',
    tokens: [['`--art-color-bg-muted`', 'track'], ['`--art-color-primary-solid`', 'fill'], ['`--art-radius-full`, `--art-space-2`', 'shape and height'], ['`--art-duration-base`, `--art-ease-out`', 'fill motion']],
    dos: [['Pair it with a visible label or status text', 'Show a bar with no name'], ['Update `value` as work completes', 'Fake progress with a timer']],
  },
};
