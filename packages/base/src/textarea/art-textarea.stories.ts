import type { ComponentStories } from '@artui/stories';

export const stories: ComponentStories = {
  tag: 'art-textarea',
  tier: 'base',
  variants: ['default'],
  sizes: ['sm', 'md', 'lg'],
  states: ['default', 'focus-visible', 'disabled', 'invalid'],
  directional: true,
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => `<art-textarea placeholder="Type your message here." aria-label="Message"></art-textarea>` },
    'with-label': { title: 'With label', render: () => `<art-label for="message">Your message</art-label>\n<art-textarea id="message" placeholder="Type your message here."></art-textarea>` },
    'with-text': { title: 'With text', render: () => `<art-label for="message-2">Your message</art-label>\n<art-textarea id="message-2" placeholder="Type your message here." aria-describedby="message-2-help"></art-textarea>\n<p id="message-2-help">Your message will be copied to the support team.</p>` },
    disabled: { title: 'Disabled', render: () => `<art-textarea placeholder="Type your message here." aria-label="Message" disabled></art-textarea>` },
    invalid: { title: 'Invalid', render: () => `<art-label for="bio">Bio</art-label>\n<art-textarea id="bio" value="Too short" invalid aria-describedby="bio-error"></art-textarea>\n<p id="bio-error">Bio must be at least 10 characters.</p>` },
    'with-button': { title: 'With button', render: () => `<art-textarea placeholder="Type your message here." aria-label="Message"></art-textarea>\n<art-button>Send message</art-button>` },
  },
  render: ({ size, state }) => `<art-textarea size="${size}" placeholder="Type your message here." aria-label="Message"${state === 'disabled' ? ' disabled' : ''}${state === 'invalid' ? ' invalid value="Too short"' : ''}></art-textarea>`,
  focusTarget: 'art-textarea textarea',
  docs: {
    description: 'Displays a form textarea or a component that looks like a textarea. Grows with its content. shadcn/ui parity, form-associated.',
    usage: 'Same event contract as Input: `input` per keystroke, `change` on commit, both from the host with `detail.value`; `v-model` and `ngModel` work out of the box.',
    keyboard: [['Tab', 'Focus the field'], ['Typing / Enter', 'Edits the value (Enter inserts a newline), emits `input`'], ['Blur', 'Emits `change`']],
    roles: 'Native `<textarea>` semantics; names and descriptions from `aria-label`, `aria-labelledby` / `art-label` and `aria-describedby` are resolved across the shadow boundary.',
    states: '`focus-visible`, `disabled` and `invalid` are implemented. `hover`, `active` and `loading` do not apply.',
    tokens: [['`--art-control-padding-x-field-{sm,md,lg}`, `--art-space-2`, `--art-space-16`', 'padding, minimum height'], ['`--art-color-border-default`, `--art-border-width`, `--art-radius-md`', 'frame'], ['`--art-color-fg-default`, `--art-color-fg-muted`', 'text, placeholder'], ['`--art-color-destructive-solid`', 'invalid ring'], ['`--art-ring-*`', 'focus ring'], ['`--art-shadow-raised`', 'elevation']],
    dos: [['Let it grow with content', 'Fix a small height and force scrolling'], ['Explain limits in the description', 'Truncate silently at `maxlength`']],
  },
};
