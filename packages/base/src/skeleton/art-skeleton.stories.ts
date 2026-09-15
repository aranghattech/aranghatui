import type { ComponentStories } from '@artui/stories';

export const stories: ComponentStories = {
  tag: 'art-skeleton',
  tier: 'base',
  variants: ['default'],
  sizes: [],
  states: ['default'],
  directional: false,
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => `<art-skeleton style="height: 1rem; width: 15rem"></art-skeleton>\n<art-skeleton style="height: 1rem; width: 12rem"></art-skeleton>`, note: 'Size the host; the pulse fills it. Motion collapses under `prefers-reduced-motion`.' },
    card: { title: 'Card', render: () => `<art-skeleton style="height: 8rem; width: 100%"></art-skeleton>\n<art-skeleton style="height: 1rem; width: 60%"></art-skeleton>\n<art-skeleton style="height: 1rem; width: 40%"></art-skeleton>` },
    circle: { title: 'Circle', frame: 'inline', render: () => `<art-skeleton style="height: 3rem; width: 3rem; border-radius: 9999px"></art-skeleton>`, note: 'Override the radius on the host for avatars.' },
  },
  render: () => `<art-skeleton style="height: 1rem; width: 15rem"></art-skeleton>`,
  docs: {
    description: 'Use to show a placeholder while content is loading. shadcn/ui parity.',
    usage: 'Give the host a width and height (inline style or a class). Wrap the loading region in `aria-busy="true"` so the state is announced once.',
    keyboard: [['None', 'Not focusable']],
    roles: 'The host is `aria-hidden`; skeletons carry no meaning for assistive tech.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    states: 'Not interactive — the only state is the loading pulse.',
    tokens: [['`--art-color-bg-accent`', 'fill'], ['`--art-radius-md`', 'shape'], ['`--art-duration-pulse`', 'pulse cycle']],
    dos: [['Match the shape of the content it stands in for', 'Show one generic block for a whole page'], ['Set `aria-busy` on the region', 'Announce every skeleton']],
  },
};
