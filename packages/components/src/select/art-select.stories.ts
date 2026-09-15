import type { ComponentStories } from '@artui/stories';

const fruits = `  <art-select-item value="apple">Apple</art-select-item>\n  <art-select-item value="banana">Banana</art-select-item>\n  <art-select-item value="blueberry">Blueberry</art-select-item>\n  <art-select-item value="grapes" disabled>Grapes</art-select-item>\n  <art-select-item value="pineapple">Pineapple</art-select-item>`;
const avatar = (initials: string) => `<art-avatar size="sm" alt="">${initials}</art-avatar>`;

export const stories: ComponentStories = {
  tag: 'art-select',
  tier: 'components',
  variants: ['default'],
  sizes: ['sm', 'md', 'lg'],
  states: ['default', 'focus-visible', 'disabled', 'invalid'],
  directional: true,
  screenshot: 'viewport',
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => `<art-select placeholder="Select a fruit" aria-label="Fruit">\n${fruits}\n</art-select>`, note: 'Items are `art-select-item`s in the light DOM. `value` reflects the choice; `change` reports `{ value, item, element }`. Enter, Space or the arrows open the list; type to jump; Escape closes.' },
    open: { title: 'Open', render: () => `<art-select value="banana" aria-label="Fruit" open>\n${fruits}\n</art-select>`, note: 'Controlled with `open`; the list is as wide as the trigger and marks the selected item.' },
    groups: { title: 'Groups', render: () => `<art-select placeholder="Select a timezone" aria-label="Timezone">\n  <art-select-group label="North America">\n    <art-select-item value="est">Eastern Standard Time (EST)</art-select-item>\n    <art-select-item value="cst">Central Standard Time (CST)</art-select-item>\n    <art-select-item value="pst">Pacific Standard Time (PST)</art-select-item>\n  </art-select-group>\n  <art-select-group label="Europe">\n    <art-select-item value="gmt">Greenwich Mean Time (GMT)</art-select-item>\n    <art-select-item value="cet">Central European Time (CET)</art-select-item>\n  </art-select-group>\n</art-select>` },
    'rich-items': { title: 'Rich items', manual: true, render: () => `<art-select placeholder="Assign to…" aria-label="Assignee">\n  <art-select-item value="ada" label="Ada Lovelace">\n    ${avatar('AL')}\n    <span>Ada Lovelace</span>\n    <span class="muted">ada@example.com</span>\n  </art-select-item>\n  <art-select-item value="grace" label="Grace Hopper">\n    ${avatar('GH')}\n    <span>Grace Hopper</span>\n    <span class="muted">grace@example.com</span>\n  </art-select-item>\n</art-select>`, note: 'An item can be any template — an avatar, a name and an email as one option. `label` gives the trigger (and type-ahead) plain text; without it the trigger shows a copy of the item\'s content. Bind your data object to `item` and get it back from `change` as `detail.item` — no lookup by value needed.' },
    sizes: { title: 'Sizes', render: () => `<art-select size="sm" placeholder="Small" aria-label="Small">\n${fruits}\n</art-select>\n<art-select placeholder="Medium" aria-label="Medium">\n${fruits}\n</art-select>\n<art-select size="lg" placeholder="Large" aria-label="Large">\n${fruits}\n</art-select>` },
    disabled: { title: 'Disabled', render: () => `<art-select placeholder="Select a fruit" aria-label="Fruit" disabled>\n${fruits}\n</art-select>` },
    form: { title: 'In a form', manual: true, render: () => `<form onsubmit="event.preventDefault()">\n  <art-label for="fruit">Fruit</art-label>\n  <art-select id="fruit" name="fruit" placeholder="Select a fruit" required>\n${fruits}\n  </art-select>\n  <art-button type="submit">Submit</art-button>\n</form>`, note: 'Form-associated: the value is submitted under `name`; `required` participates in validation.' },
  },
  render: ({ size, state }) => `<art-select size="${size}" placeholder="Select a fruit" aria-label="Fruit"${state === 'disabled' ? ' disabled' : ''}${state === 'invalid' ? ' invalid' : ''}>\n${fruits}\n</art-select>`,
  focusTarget: 'art-select button',
  docs: {
    description: 'Displays a list of options for the user to pick from—triggered by a button. shadcn/ui parity, form-associated, items in the light DOM.',
    usage: 'Put `art-select-item`s (optionally in `art-select-group`s) inside. Bind `value`; `change` gives `{ value, item, element }`. React `onChange`, Vue `v-model`, Angular `[(ngModel)]` / reactive forms.',
    requires: ['base'],
    keyboard: [['Tab', 'Focus the trigger'], ['Enter / Space / ↓ / ↑', 'Open the list on the selected item'], ['↓ / ↑', 'Move the highlight (skips disabled items)'], ['Home / End', 'First / last item'], ['Typing', 'Jump to the matching item'], ['Enter / Space', 'Choose the highlighted item'], ['Escape', 'Close and return to the trigger']],
    roles: 'The trigger is a `<button role="combobox">` with `aria-haspopup="listbox"`, `aria-expanded` and `aria-controls`; the panel is `role="listbox"` with `aria-activedescendant` pointing at the highlighted `role="option"` item (element reflection across the shadow boundary). The select is named via `aria-label`, `aria-labelledby` or `art-label`.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/',
    states: '`focus-visible`, `disabled` and `invalid` on the trigger; open / closed with enter and exit motion; highlighted and selected items. `hover`, `active` and `loading` do not apply.',
    tokens: [['`--art-control-height-{sm,md,lg}`, `--art-control-padding-x-field-{sm,md,lg}`', 'trigger sizes'], ['`--art-color-border-default`, `--art-border-width`, `--art-radius-md`, `--art-shadow-raised`', 'trigger frame'], ['`--art-color-bg-popover`, `--art-shadow-popover`, `--art-space-1`, `--art-space-72`', 'listbox'], ['`--art-color-bg-accent`, `--art-radius-sm`, `--art-space-1-5`, `--art-space-2`, `--art-space-8`', 'items'], ['`--art-color-fg-muted`, `--art-font-size-xs`, `--art-font-size-sm`', 'placeholder, group labels, text'], ['`--art-size-icon-md`, `--art-size-icon-sm`', 'chevron and checkmark']],
    dos: [['Use it for 5–15 options; Native Select for short lists on mobile', 'Use it for two options (use a Radio Group)'], ['Give rich items a `label`', 'Put interactive controls inside an item'], ['Name it with a visible `art-label`', 'Rely on the placeholder as the name']],
  },
};
