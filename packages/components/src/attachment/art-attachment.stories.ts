import type { ComponentStories } from '@artui/stories';

const x = `<art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></art-icon>`;
const download = `<art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg></art-icon>`;
const remove = `<art-button slot="actions" variant="ghost" size="sm" icon aria-label="Remove">${x}</art-button>`;
const img = (seed: string) => `<img slot="media" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23${seed}'/%3E%3C/svg%3E" alt="">`;

export const stories: ComponentStories = {
  tag: 'art-attachment',
  tier: 'components',
  variants: ['default'],
  sizes: ['sm', 'md'],
  states: ['default', 'hover', 'focus-visible'],
  directional: true,
  frame: 'inline',
  examples: {
    basic: { title: 'Basic', render: () => `<art-attachment name="q3-results.pdf" description="PDF · 1.2 MB">\n  ${remove}\n</art-attachment>`, note: 'A file icon, the name, a metadata line and end-aligned icon-only actions (with `aria-label`s).' },
    images: { title: 'Image attachments', render: () => `<art-attachment orientation="vertical" name="beach.jpg" description="2.4 MB">\n  ${img('8ab4f8')}\n  ${remove}\n</art-attachment>\n<art-attachment orientation="vertical" name="sunset.jpg" description="1.1 MB">\n  ${img('f8b48a')}\n  ${remove}\n</art-attachment>`, note: '`orientation="vertical"` with an `<img slot="media">` makes a square preview card; actions float over the corner.' },
    states: { title: 'States', render: () => `<art-attachment state="idle" name="report.docx" description="Not uploaded"></art-attachment>\n<art-attachment state="uploading" progress="42" name="report.docx"></art-attachment>\n<art-attachment state="processing" name="report.docx"></art-attachment>\n<art-attachment state="error" name="report.docx" description="Too large (max 10 MB)"></art-attachment>\n<art-attachment state="done" name="report.docx" description="DOCX · 340 KB"></art-attachment>`, note: '`idle` is dashed, `uploading` shows `progress`, `processing` pulses the name, `error` says what went wrong in text (never colour alone), `done` is the resting card.' },
    sizes: { title: 'Sizes', render: () => `<art-attachment size="sm" name="notes.txt" description="TXT · 2 KB">\n  ${remove}\n</art-attachment>\n<art-attachment name="notes.txt" description="TXT · 2 KB">\n  ${remove}\n</art-attachment>`, note: '`sm` for composer strips and dense lists; `md` (default) for message threads.' },
    group: { title: 'Group', render: () => `<art-attachment-group label="Files to send">\n  <art-attachment size="sm" name="a.pdf" description="12 KB">${remove}</art-attachment>\n  <art-attachment size="sm" name="b.pdf" description="80 KB">${remove}</art-attachment>\n  <art-attachment size="sm" name="c.pdf" description="1.4 MB">${remove}</art-attachment>\n  <art-attachment size="sm" name="d.pdf" description="220 KB">${remove}</art-attachment>\n</art-attachment-group>`, note: '`art-attachment-group` scrolls horizontally, is a focusable `role="group"` and names itself with `label`.' },
    trigger: { title: 'Trigger', render: () => `<art-attachment href="#" name="handbook.pdf" description="Open in a new tab" target="_blank">\n  <art-button slot="actions" variant="ghost" size="sm" icon aria-label="Download">${download}</art-button>\n</art-attachment>\n<art-attachment trigger-label="Preview slides.key" name="slides.key" description="Keynote · 8 MB">\n  ${remove}\n</art-attachment>`, note: '`href` makes the card a link; `trigger-label` makes it a button that emits `trigger` (open a preview dialog). The actions stay separately clickable either way.' },
  },
  render: ({ size }) => `<art-attachment size="${size}" trigger-label="Preview q3-results.pdf" name="q3-results.pdf" description="PDF · 1.2 MB">\n  ${remove}\n</art-attachment>`,
  focusTarget: 'art-attachment [part="trigger"]',
  docs: {
    description: 'Displays a file or image with a preview, metadata, upload states and actions. shadcn/ui parity for composers, threads and upload lists.',
    usage: 'Set `name` and `description` (or use the slots), put an `<img slot="media">` for previews, icon-only `art-button`s in the `actions` slot, and drive `state` / `progress` from your upload. `href` or `trigger-label` make the card itself a target; `trigger` fires for the button form. React `onTrigger`, Vue `@trigger`, Angular `(trigger)`.',
    requires: ['base'],
    keyboard: [['Tab', 'The card trigger (if any), then each action button; a group is focusable and scrolls with ← / →'], ['Enter / Space', 'Activate the trigger or an action']],
    roles: 'A card of content; the optional trigger is a real `<a>` / `<button>` under the actions with its own `aria-label`. Icon-only actions need `aria-label`s. Uploading / processing text is a polite live region. `art-attachment-group` is `role="group"` with `tabindex="0"` and an `aria-label`.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/button/',
    states: '`hover` (tint) and `focus-visible` (ring) on a card with a trigger, plus the upload states `idle`, `uploading`, `processing`, `error`, `done`. `active`, `disabled`, `loading` (a state, not a prop) and `invalid` do not apply.',
    tokens: [['`--art-color-bg-surface`, `--art-color-border-default`, `--art-radius-xl`, `--art-radius-lg`', 'card and media box'], ['`--art-space-2`, `--art-space-1-5`, `--art-space-0-5`, `--art-space-3`, `--art-space-10`, `--art-space-8`, `--art-space-24`, `--art-space-6`', 'padding, gaps, media and card sizes'], ['`--art-font-size-sm`, `--art-font-size-xs`, `--art-font-weight-medium`, `--art-color-fg-muted`', 'name and metadata'], ['`--art-color-destructive-solid`, `--art-color-destructive-fg`', 'error state'], ['`--art-color-bg-muted`, `--art-color-ring`, `--art-ring-width`, `--art-ring-offset`', 'hover tint, focus ring']],
    dos: [['Say what went wrong in the description on `error`', 'Rely on the red border'], ['Label every icon-only action', 'Use bare × buttons'], ['Use `sm` in a composer strip', 'Put full-size cards in a one-line composer']],
  },
};
