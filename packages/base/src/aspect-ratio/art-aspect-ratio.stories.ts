import type { ComponentStories } from '@artui/stories';

const box = `<div style="background: var(--art-color-bg-muted); border-radius: var(--art-radius-md)"></div>`;

export const stories: ComponentStories = {
  tag: 'art-aspect-ratio',
  tier: 'base',
  variants: ['default'],
  sizes: [],
  states: ['default'],
  directional: false,
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => `<art-aspect-ratio ratio="16/9">\n  ${box}\n</art-aspect-ratio>`, note: 'The box is as wide as its container and as tall as the ratio dictates; the slotted element is stretched to fill it (`object-fit: cover` for images and video).' },
    square: { title: 'Square', render: () => `<art-aspect-ratio ratio="1">\n  ${box}\n</art-aspect-ratio>` },
    portrait: { title: 'Portrait', render: () => `<art-aspect-ratio ratio="3/4">\n  ${box}\n</art-aspect-ratio>` },
  },
  render: () => `<art-aspect-ratio ratio="16/9">\n  ${box}\n</art-aspect-ratio>`,
  docs: {
    description: 'Displays content within a desired ratio. shadcn/ui parity, on the native `aspect-ratio` property.',
    usage: 'Set `ratio` as `width/height` (or a number) and put one element inside — an image, a video, an iframe or a placeholder.',
    keyboard: [['None', 'Not focusable; the content keeps its own behaviour']],
    roles: 'No role; the slotted content keeps its native semantics (give images an `alt`).',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    states: 'Not interactive — no states.',
    tokens: [['none', 'the box is pure geometry; the example placeholder uses `--art-color-bg-muted` and `--art-radius-md`']],
    dos: [['Use it for media whose size is not known up front', 'Wrap text content in it'], ['Set the ratio the media was produced in', 'Force a square onto a wide photo']],
  },
};
