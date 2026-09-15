import type { ComponentStories } from '@artui/stories';

const slide = (n: number) => `  <art-carousel-item>\n    <art-card><p class="slide">${n}</p></art-card>\n  </art-carousel-item>`;
const slides = (count: number) => Array.from({ length: count }, (_, i) => slide(i + 1)).join('\n');

export const stories: ComponentStories = {
  tag: 'art-carousel',
  tier: 'components',
  variants: ['default'],
  sizes: [],
  states: ['default', 'hover', 'focus-visible', 'disabled'],
  directional: true,
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => `<art-carousel aria-label="Numbers" style="max-width: var(--art-container-xs); margin-inline: var(--art-space-12)">\n${slides(5)}\n</art-carousel>`, note: 'Drag or swipe, use the buttons, or press ← / → with the carousel focused. The buttons sit outside the viewport, so leave a margin for them. `slide-change` reports the selected index.' },
    'multiple-per-view': { title: 'Several per view', render: () => `<art-carousel aria-label="Numbers" style="max-width: var(--art-container-sm); margin-inline: var(--art-space-12); --art-carousel-basis: 33.333%">\n${slides(5)}\n</art-carousel>`, note: 'Set `--art-carousel-basis` (any width) to show more than one slide; slides keep their gap.' },
    loop: { title: 'Loop', render: () => `<art-carousel loop align="center" aria-label="Numbers" style="max-width: var(--art-container-xs); margin-inline: var(--art-space-12)">\n${slides(5)}\n</art-carousel>`, note: '`loop` wraps around; `align="center"` settles slides in the middle.' },
    vertical: { title: 'Vertical', render: () => `<art-carousel orientation="vertical" aria-label="Numbers" style="max-width: var(--art-container-xs); margin-block: var(--art-space-12)">\n${slides(5)}\n</art-carousel>`, note: 'The viewport takes the height of one slide; ↑ / ↓ move.' },
    'no-controls': { title: 'Without buttons', render: () => `<art-carousel controls="false" drag-free aria-label="Numbers" style="max-width: var(--art-container-sm); --art-carousel-basis: 50%">\n${slides(6)}\n</art-carousel>`, note: '`controls="false"` leaves drag, keys and your own buttons (`scrollPrev()` / `scrollNext()` / `scrollToSlide(i)`); `drag-free` scrolls with momentum instead of snapping.' },
  },
  render: () => `<art-carousel aria-label="Numbers" style="max-width: var(--art-container-xs); margin-inline: var(--art-space-12)">\n${slides(3)}\n</art-carousel>`,
  focusTarget: 'art-carousel [part="next"]',
  docs: {
    description: 'A carousel with motion and swipe built using Embla. shadcn/ui parity; Embla is the only runtime dependency (ADR-0005).',
    usage: 'Put `art-carousel-item`s inside; each slide is any content. Listen to `slide-change` (`detail.index`), call `scrollToSlide(i)` for tabs or dots. React `onSlideChange`, Vue `@slide-change`, Angular `(slideChange)`.',
    requires: ['base'],
    keyboard: [['Tab', 'Focus the previous / next buttons (and anything inside slides)'], ['← / → (↑ / ↓ when vertical)', 'Previous / next slide while the carousel has focus'], ['Enter / Space', 'Activate a button']],
    roles: 'The host is `role="region"` with `aria-roledescription="carousel"` and your `aria-label`; each item is `role="group"` with `aria-roledescription="slide"` and an `aria-label` of "n of N" unless you set one. Buttons are named "Previous slide" / "Next slide" and disable at the ends (never when `loop`).',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/carousel/',
    states: '`hover`, `focus-visible` and `disabled` (at the ends) on the buttons. `active`, `loading` and `invalid` do not apply.',
    tokens: [['`--art-space-4`', 'gap between slides'], ['`--art-space-12`', 'button offset outside the viewport'], ['`--art-control-height-sm`, `--art-color-border-default`, `--art-color-bg-canvas`, `--art-shadow-raised`, `--art-color-bg-accent`', 'buttons'], ['`--art-size-icon-md`', 'arrow icons'], ['`--art-ring-width`, `--art-ring-offset`, `--art-color-ring`', 'focus ring']],
    dos: [['Keep slides the same size', 'Mix tall and short slides'], ['Give the carousel an `aria-label`', 'Leave the region unnamed'], ['Leave room for the buttons or hide them with `controls="false"`', 'Let the buttons overlap the slides']],
  },
};
