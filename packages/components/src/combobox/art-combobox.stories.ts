import type { ComponentStories } from '@artui/stories';

const frameworks = `  <art-combobox-item value="next">Next.js</art-combobox-item>\n  <art-combobox-item value="sveltekit">SvelteKit</art-combobox-item>\n  <art-combobox-item value="nuxt">Nuxt.js</art-combobox-item>\n  <art-combobox-item value="remix" disabled>Remix</art-combobox-item>\n  <art-combobox-item value="astro">Astro</art-combobox-item>`;
const avatar = (initials: string) => `<art-avatar size="sm" alt="">${initials}</art-avatar>`;

export const stories: ComponentStories = {
  tag: 'art-combobox',
  tier: 'components',
  variants: ['default'],
  sizes: ['sm', 'md', 'lg'],
  states: ['default', 'focus-visible', 'disabled', 'invalid'],
  directional: true,
  screenshot: 'viewport',
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => `<art-combobox placeholder="Select a framework" aria-label="Framework">\n${frameworks}\n</art-combobox>`, note: 'Type to filter; ↓ / ↑ move the highlight, Enter chooses, Escape closes. `value` reflects the choice and `change` reports `{ value, item, element }`.' },
    open: { title: 'Open', render: () => `<art-combobox value="nuxt" aria-label="Framework" open>\n${frameworks}\n</art-combobox>`, note: 'Controlled with `open`; the list is as wide as the field and marks the chosen item.' },
    groups: { title: 'Groups', render: () => `<art-combobox placeholder="Pick a fruit or a vegetable" aria-label="Produce">\n  <art-combobox-group label="Fruits">\n    <art-combobox-item value="apple">Apple</art-combobox-item>\n    <art-combobox-item value="banana">Banana</art-combobox-item>\n  </art-combobox-group>\n  <art-combobox-group label="Vegetables">\n    <art-combobox-item value="carrot">Carrot</art-combobox-item>\n    <art-combobox-item value="pea">Pea</art-combobox-item>\n  </art-combobox-group>\n</art-combobox>`, note: 'Groups hide when none of their items match.' },
    'rich-items': { title: 'Rich items', manual: true, render: () => `<art-combobox placeholder="Search people…" aria-label="Assignee">\n  <art-combobox-item value="ada" label="Ada Lovelace" keywords="ada@example.com">\n    ${avatar('AL')}\n    <span>Ada Lovelace</span>\n    <span class="muted">ada@example.com</span>\n  </art-combobox-item>\n  <art-combobox-item value="grace" label="Grace Hopper" keywords="grace@example.com">\n    ${avatar('GH')}\n    <span>Grace Hopper</span>\n    <span class="muted">grace@example.com</span>\n  </art-combobox-item>\n</art-combobox>`, note: 'An item can be any template — an avatar, a name and an email as one option. `label` is the text the field shows once chosen; `keywords` adds words the filter should match (the email here). Bind your data object to `item` and get it back from `change` as `detail.item`.' },
    multiple: { title: 'Multiple', render: () => `<art-combobox multiple placeholder="Add frameworks…" aria-label="Frameworks" show-clear>\n${frameworks}\n</art-combobox>`, note: '`multiple` turns choices into chips; the list stays open and Enter toggles. Backspace in the empty field removes the last chip, and `show-clear` adds a clear button. `value` is an array.' },
    'no-trigger': { title: 'Without trigger', render: () => `<art-combobox placeholder="Search…" aria-label="Framework" show-trigger="false">\n${frameworks}\n</art-combobox>`, note: '`show-trigger="false"` drops the chevron for a plain search field.' },
    sizes: { title: 'Sizes', render: () => `<art-combobox size="sm" placeholder="Small" aria-label="Small">\n${frameworks}\n</art-combobox>\n<art-combobox placeholder="Medium" aria-label="Medium">\n${frameworks}\n</art-combobox>\n<art-combobox size="lg" placeholder="Large" aria-label="Large">\n${frameworks}\n</art-combobox>` },
    disabled: { title: 'Disabled', render: () => `<art-combobox placeholder="Select a framework" aria-label="Framework" disabled>\n${frameworks}\n</art-combobox>` },
    form: { title: 'In a form', manual: true, render: () => `<form onsubmit="event.preventDefault()">\n  <art-label for="framework">Framework</art-label>\n  <art-combobox id="framework" name="framework" placeholder="Select a framework" required>\n${frameworks}\n  </art-combobox>\n  <art-button type="submit">Submit</art-button>\n</form>`, note: 'Form-associated: the value is submitted under `name` (one entry per chip when `multiple`); `required` participates in validation.' },
  },
  render: ({ size, state }) => `<art-combobox size="${size}" placeholder="Select a framework" aria-label="Framework"${state === 'disabled' ? ' disabled' : ''}${state === 'invalid' ? ' invalid' : ''}>\n${frameworks}\n</art-combobox>`,
  focusTarget: 'art-combobox input',
  docs: {
    description: 'Autocomplete input and command palette with a list of suggestions. shadcn/ui parity, form-associated, single or multiple choice.',
    usage: 'Put `art-combobox-item`s (optionally in `art-combobox-group`s) inside. Bind `value` (a string, or an array with `multiple`); `change` gives `{ value, item, element }`. For server-side search set `should-filter="false"`, listen to `query-change` and swap the items. React `onChange`, Vue `v-model`, Angular `[(ngModel)]` / reactive forms.',
    requires: ['base'],
    keyboard: [['Tab', 'Focus the field'], ['Typing', 'Opens and filters the list; the first match is highlighted'], ['↓ / ↑', 'Open the list; move the highlight (skips disabled items)'], ['Home / End', 'First / last item'], ['Enter', 'Choose the highlighted item (toggle it when `multiple`)'], ['Backspace', 'In an empty `multiple` field, remove the last chip'], ['Escape', 'Close the list and restore the field']],
    roles: 'The field is `<input role="combobox">` with `aria-autocomplete="list"`, `aria-expanded`, `aria-controls` and `aria-activedescendant` on the highlighted `role="option"` item (element reflection across the shadow boundary); the panel is `role="listbox"` (`aria-multiselectable` when `multiple`). Chips carry a labelled remove button. Name the combobox with `aria-label`, `aria-labelledby` or `art-label`.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/',
    states: '`focus-visible`, `disabled` and `invalid` on the field; open / closed with enter and exit motion; highlighted and selected items; the empty state. `hover`, `active` and `loading` do not apply.',
    tokens: [['`--art-control-height-{sm,md,lg}`, `--art-control-padding-x-field-{sm,md,lg}`', 'field sizes'], ['`--art-color-border-default`, `--art-border-width`, `--art-radius-md`, `--art-shadow-raised`', 'field frame'], ['`--art-color-bg-secondary`, `--art-color-fg-secondary`, `--art-font-size-xs`, `--art-space-6`', 'chips'], ['`--art-color-bg-popover`, `--art-shadow-popover`, `--art-space-1`', 'list panel'], ['`--art-color-bg-accent`, `--art-radius-sm`, `--art-space-1-5`, `--art-space-2`, `--art-space-8`', 'items'], ['`--art-color-fg-muted`, `--art-font-size-sm`, `--art-space-6`', 'placeholder, headings, empty state'], ['`--art-size-icon-md`, `--art-size-icon-sm`', 'chevron, clear, checkmark']],
    dos: [['Use it for long lists people search', 'Use it for a handful of options (use Select)'], ['Give rich items a `label` and `keywords`', 'Rely on the visible text alone for matching'], ['Name it with a visible `art-label`', 'Rely on the placeholder as the name']],
  },
};
