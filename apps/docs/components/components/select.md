# Select

Displays a list of options for the user to pick from—triggered by a button. shadcn/ui parity, form-associated, items in the light DOM.

## Preview

<Preview frame="stack">
  <art-select placeholder="Select a fruit" aria-label="Fruit">
    <art-select-item value="apple">Apple</art-select-item>
    <art-select-item value="banana">Banana</art-select-item>
    <art-select-item value="blueberry">Blueberry</art-select-item>
    <art-select-item value="grapes" disabled>Grapes</art-select-item>
    <art-select-item value="pineapple">Pineapple</art-select-item>
  </art-select>
</Preview>

## Installation

Lives in `@aranghat/components` (requires `@aranghat/base`).

::: code-group
```bash [HTML]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base
```
```bash [React]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base @aranghat/components-react
```
```bash [Vue]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base @aranghat/components-vue
```
```bash [Angular]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base @aranghat/components-angular
```
:::

## Usage

::: code-group
<<< ../../../sandbox/html/src/samples/select/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/select/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/select/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/select/basic.ts [Angular]
:::

Put `art-select-item`s (optionally in `art-select-group`s) inside. Bind `value`; `change` gives `{ value, item, element }`. React `onChange`, Vue `v-model`, Angular `[(ngModel)]` / reactive forms.

## Examples

### Basic

Items are `art-select-item`s in the light DOM. `value` reflects the choice; `change` reports `{ value, item, element }`. Enter, Space or the arrows open the list; type to jump; Escape closes.

<Preview frame="stack">
  <art-select placeholder="Select a fruit" aria-label="Fruit">
    <art-select-item value="apple">Apple</art-select-item>
    <art-select-item value="banana">Banana</art-select-item>
    <art-select-item value="blueberry">Blueberry</art-select-item>
    <art-select-item value="grapes" disabled>Grapes</art-select-item>
    <art-select-item value="pineapple">Pineapple</art-select-item>
  </art-select>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/select/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/select/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/select/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/select/basic.ts [Angular]
:::

### Open

Controlled with `open`; the list is as wide as the trigger and marks the selected item.

<Preview frame="stack">
  <art-select value="banana" aria-label="Fruit" open>
    <art-select-item value="apple">Apple</art-select-item>
    <art-select-item value="banana">Banana</art-select-item>
    <art-select-item value="blueberry">Blueberry</art-select-item>
    <art-select-item value="grapes" disabled>Grapes</art-select-item>
    <art-select-item value="pineapple">Pineapple</art-select-item>
  </art-select>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/select/open.html [HTML]
<<< ../../../sandbox/react/src/samples/select/open.tsx [React]
<<< ../../../sandbox/vue/src/samples/select/open.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/select/open.ts [Angular]
:::

### Groups

<Preview frame="stack">
  <art-select placeholder="Select a timezone" aria-label="Timezone">
    <art-select-group label="North America">
      <art-select-item value="est">Eastern Standard Time (EST)</art-select-item>
      <art-select-item value="cst">Central Standard Time (CST)</art-select-item>
      <art-select-item value="pst">Pacific Standard Time (PST)</art-select-item>
    </art-select-group>
    <art-select-group label="Europe">
      <art-select-item value="gmt">Greenwich Mean Time (GMT)</art-select-item>
      <art-select-item value="cet">Central European Time (CET)</art-select-item>
    </art-select-group>
  </art-select>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/select/groups.html [HTML]
<<< ../../../sandbox/react/src/samples/select/groups.tsx [React]
<<< ../../../sandbox/vue/src/samples/select/groups.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/select/groups.ts [Angular]
:::

### Rich items

An item can be any template — an avatar, a name and an email as one option. `label` gives the trigger (and type-ahead) plain text; without it the trigger shows a copy of the item's content. Bind your data object to `item` and get it back from `change` as `detail.item` — no lookup by value needed.

<Preview frame="stack">
  <art-select placeholder="Assign to…" aria-label="Assignee">
    <art-select-item value="ada" label="Ada Lovelace">
      <art-avatar size="sm" alt="">AL</art-avatar>
      <span>Ada Lovelace</span>
      <span class="muted">ada@example.com</span>
    </art-select-item>
    <art-select-item value="grace" label="Grace Hopper">
      <art-avatar size="sm" alt="">GH</art-avatar>
      <span>Grace Hopper</span>
      <span class="muted">grace@example.com</span>
    </art-select-item>
  </art-select>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/select/rich-items.html [HTML]
<<< ../../../sandbox/react/src/samples/select/rich-items.tsx [React]
<<< ../../../sandbox/vue/src/samples/select/rich-items.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/select/rich-items.ts [Angular]
:::

### Sizes

<Preview frame="stack">
  <art-select size="sm" placeholder="Small" aria-label="Small">
    <art-select-item value="apple">Apple</art-select-item>
    <art-select-item value="banana">Banana</art-select-item>
    <art-select-item value="blueberry">Blueberry</art-select-item>
    <art-select-item value="grapes" disabled>Grapes</art-select-item>
    <art-select-item value="pineapple">Pineapple</art-select-item>
  </art-select>
  <art-select placeholder="Medium" aria-label="Medium">
    <art-select-item value="apple">Apple</art-select-item>
    <art-select-item value="banana">Banana</art-select-item>
    <art-select-item value="blueberry">Blueberry</art-select-item>
    <art-select-item value="grapes" disabled>Grapes</art-select-item>
    <art-select-item value="pineapple">Pineapple</art-select-item>
  </art-select>
  <art-select size="lg" placeholder="Large" aria-label="Large">
    <art-select-item value="apple">Apple</art-select-item>
    <art-select-item value="banana">Banana</art-select-item>
    <art-select-item value="blueberry">Blueberry</art-select-item>
    <art-select-item value="grapes" disabled>Grapes</art-select-item>
    <art-select-item value="pineapple">Pineapple</art-select-item>
  </art-select>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/select/sizes.html [HTML]
<<< ../../../sandbox/react/src/samples/select/sizes.tsx [React]
<<< ../../../sandbox/vue/src/samples/select/sizes.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/select/sizes.ts [Angular]
:::

### Disabled

<Preview frame="stack">
  <art-select placeholder="Select a fruit" aria-label="Fruit" disabled>
    <art-select-item value="apple">Apple</art-select-item>
    <art-select-item value="banana">Banana</art-select-item>
    <art-select-item value="blueberry">Blueberry</art-select-item>
    <art-select-item value="grapes" disabled>Grapes</art-select-item>
    <art-select-item value="pineapple">Pineapple</art-select-item>
  </art-select>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/select/disabled.html [HTML]
<<< ../../../sandbox/react/src/samples/select/disabled.tsx [React]
<<< ../../../sandbox/vue/src/samples/select/disabled.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/select/disabled.ts [Angular]
:::

### In a form

Form-associated: the value is submitted under `name`; `required` participates in validation.

<Preview frame="stack">
  <form onsubmit="event.preventDefault()">
    <art-label for="fruit">Fruit</art-label>
    <art-select id="fruit" name="fruit" placeholder="Select a fruit" required>
    <art-select-item value="apple">Apple</art-select-item>
    <art-select-item value="banana">Banana</art-select-item>
    <art-select-item value="blueberry">Blueberry</art-select-item>
    <art-select-item value="grapes" disabled>Grapes</art-select-item>
    <art-select-item value="pineapple">Pineapple</art-select-item>
    </art-select>
    <art-button type="submit">Submit</art-button>
  </form>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/select/form.html [HTML]
<<< ../../../sandbox/react/src/samples/select/form.tsx [React]
<<< ../../../sandbox/vue/src/samples/select/form.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/select/form.ts [Angular]
:::

## API Reference

<ApiReference tag="art-select" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focus the trigger |
| `Enter / Space / ↓ / ↑` | Open the list on the selected item |
| `↓ / ↑` | Move the highlight (skips disabled items) |
| `Home / End` | First / last item |
| `Typing` | Jump to the matching item |
| `Enter / Space` | Choose the highlighted item |
| `Escape` | Close and return to the trigger |

The trigger is a `<button role="combobox">` with `aria-haspopup="listbox"`, `aria-expanded` and `aria-controls`; the panel is `role="listbox"` with `aria-activedescendant` pointing at the highlighted `role="option"` item (element reflection across the shadow boundary). The select is named via `aria-label`, `aria-labelledby` or `art-label`. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/).

States: `focus-visible`, `disabled` and `invalid` on the trigger; open / closed with enter and exit motion; highlighted and selected items. `hover`, `active` and `loading` do not apply.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-control-height-{sm,md,lg}`, `--art-control-padding-x-field-{sm,md,lg}`` | trigger sizes |
| ``--art-color-border-default`, `--art-border-width`, `--art-radius-md`, `--art-shadow-raised`` | trigger frame |
| ``--art-color-bg-popover`, `--art-shadow-popover`, `--art-space-1`, `--art-space-72`` | listbox |
| ``--art-color-bg-accent`, `--art-radius-sm`, `--art-space-1-5`, `--art-space-2`, `--art-space-8`` | items |
| ``--art-color-fg-muted`, `--art-font-size-xs`, `--art-font-size-sm`` | placeholder, group labels, text |
| ``--art-size-icon-md`, `--art-size-icon-sm`` | chevron and checkmark |

## Do / Don't

| Do | Don't |
|---|---|
| Use it for 5–15 options; Native Select for short lists on mobile | Use it for two options (use a Radio Group) |
| Give rich items a `label` | Put interactive controls inside an item |
| Name it with a visible `art-label` | Rely on the placeholder as the name |
