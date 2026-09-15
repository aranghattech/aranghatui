# Combobox

Autocomplete input and command palette with a list of suggestions. shadcn/ui parity, form-associated, single or multiple choice.

## Preview

<Preview frame="stack">
  <art-combobox placeholder="Select a framework" aria-label="Framework">
    <art-combobox-item value="next">Next.js</art-combobox-item>
    <art-combobox-item value="sveltekit">SvelteKit</art-combobox-item>
    <art-combobox-item value="nuxt">Nuxt.js</art-combobox-item>
    <art-combobox-item value="remix" disabled>Remix</art-combobox-item>
    <art-combobox-item value="astro">Astro</art-combobox-item>
  </art-combobox>
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
<<< ../../../sandbox/html/src/samples/combobox/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/combobox/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/combobox/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/combobox/basic.ts [Angular]
:::

Put `art-combobox-item`s (optionally in `art-combobox-group`s) inside. Bind `value` (a string, or an array with `multiple`); `change` gives `{ value, item, element }`. For server-side search set `should-filter="false"`, listen to `query-change` and swap the items. React `onChange`, Vue `v-model`, Angular `[(ngModel)]` / reactive forms.

## Examples

### Basic

Type to filter; ↓ / ↑ move the highlight, Enter chooses, Escape closes. `value` reflects the choice and `change` reports `{ value, item, element }`.

<Preview frame="stack">
  <art-combobox placeholder="Select a framework" aria-label="Framework">
    <art-combobox-item value="next">Next.js</art-combobox-item>
    <art-combobox-item value="sveltekit">SvelteKit</art-combobox-item>
    <art-combobox-item value="nuxt">Nuxt.js</art-combobox-item>
    <art-combobox-item value="remix" disabled>Remix</art-combobox-item>
    <art-combobox-item value="astro">Astro</art-combobox-item>
  </art-combobox>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/combobox/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/combobox/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/combobox/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/combobox/basic.ts [Angular]
:::

### Open

Controlled with `open`; the list is as wide as the field and marks the chosen item.

<Preview frame="stack">
  <art-combobox value="nuxt" aria-label="Framework" open>
    <art-combobox-item value="next">Next.js</art-combobox-item>
    <art-combobox-item value="sveltekit">SvelteKit</art-combobox-item>
    <art-combobox-item value="nuxt">Nuxt.js</art-combobox-item>
    <art-combobox-item value="remix" disabled>Remix</art-combobox-item>
    <art-combobox-item value="astro">Astro</art-combobox-item>
  </art-combobox>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/combobox/open.html [HTML]
<<< ../../../sandbox/react/src/samples/combobox/open.tsx [React]
<<< ../../../sandbox/vue/src/samples/combobox/open.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/combobox/open.ts [Angular]
:::

### Groups

Groups hide when none of their items match.

<Preview frame="stack">
  <art-combobox placeholder="Pick a fruit or a vegetable" aria-label="Produce">
    <art-combobox-group label="Fruits">
      <art-combobox-item value="apple">Apple</art-combobox-item>
      <art-combobox-item value="banana">Banana</art-combobox-item>
    </art-combobox-group>
    <art-combobox-group label="Vegetables">
      <art-combobox-item value="carrot">Carrot</art-combobox-item>
      <art-combobox-item value="pea">Pea</art-combobox-item>
    </art-combobox-group>
  </art-combobox>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/combobox/groups.html [HTML]
<<< ../../../sandbox/react/src/samples/combobox/groups.tsx [React]
<<< ../../../sandbox/vue/src/samples/combobox/groups.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/combobox/groups.ts [Angular]
:::

### Rich items

An item can be any template — an avatar, a name and an email as one option. `label` is the text the field shows once chosen; `keywords` adds words the filter should match (the email here). Bind your data object to `item` and get it back from `change` as `detail.item`.

<Preview frame="stack">
  <art-combobox placeholder="Search people…" aria-label="Assignee">
    <art-combobox-item value="ada" label="Ada Lovelace" keywords="ada@example.com">
      <art-avatar size="sm" alt="">AL</art-avatar>
      <span>Ada Lovelace</span>
      <span class="muted">ada@example.com</span>
    </art-combobox-item>
    <art-combobox-item value="grace" label="Grace Hopper" keywords="grace@example.com">
      <art-avatar size="sm" alt="">GH</art-avatar>
      <span>Grace Hopper</span>
      <span class="muted">grace@example.com</span>
    </art-combobox-item>
  </art-combobox>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/combobox/rich-items.html [HTML]
<<< ../../../sandbox/react/src/samples/combobox/rich-items.tsx [React]
<<< ../../../sandbox/vue/src/samples/combobox/rich-items.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/combobox/rich-items.ts [Angular]
:::

### Multiple

`multiple` turns choices into chips; the list stays open and Enter toggles. Backspace in the empty field removes the last chip, and `show-clear` adds a clear button. `value` is an array.

<Preview frame="stack">
  <art-combobox multiple placeholder="Add frameworks…" aria-label="Frameworks" show-clear>
    <art-combobox-item value="next">Next.js</art-combobox-item>
    <art-combobox-item value="sveltekit">SvelteKit</art-combobox-item>
    <art-combobox-item value="nuxt">Nuxt.js</art-combobox-item>
    <art-combobox-item value="remix" disabled>Remix</art-combobox-item>
    <art-combobox-item value="astro">Astro</art-combobox-item>
  </art-combobox>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/combobox/multiple.html [HTML]
<<< ../../../sandbox/react/src/samples/combobox/multiple.tsx [React]
<<< ../../../sandbox/vue/src/samples/combobox/multiple.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/combobox/multiple.ts [Angular]
:::

### Without trigger

`show-trigger="false"` drops the chevron for a plain search field.

<Preview frame="stack">
  <art-combobox placeholder="Search…" aria-label="Framework" show-trigger="false">
    <art-combobox-item value="next">Next.js</art-combobox-item>
    <art-combobox-item value="sveltekit">SvelteKit</art-combobox-item>
    <art-combobox-item value="nuxt">Nuxt.js</art-combobox-item>
    <art-combobox-item value="remix" disabled>Remix</art-combobox-item>
    <art-combobox-item value="astro">Astro</art-combobox-item>
  </art-combobox>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/combobox/no-trigger.html [HTML]
<<< ../../../sandbox/react/src/samples/combobox/no-trigger.tsx [React]
<<< ../../../sandbox/vue/src/samples/combobox/no-trigger.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/combobox/no-trigger.ts [Angular]
:::

### Sizes

<Preview frame="stack">
  <art-combobox size="sm" placeholder="Small" aria-label="Small">
    <art-combobox-item value="next">Next.js</art-combobox-item>
    <art-combobox-item value="sveltekit">SvelteKit</art-combobox-item>
    <art-combobox-item value="nuxt">Nuxt.js</art-combobox-item>
    <art-combobox-item value="remix" disabled>Remix</art-combobox-item>
    <art-combobox-item value="astro">Astro</art-combobox-item>
  </art-combobox>
  <art-combobox placeholder="Medium" aria-label="Medium">
    <art-combobox-item value="next">Next.js</art-combobox-item>
    <art-combobox-item value="sveltekit">SvelteKit</art-combobox-item>
    <art-combobox-item value="nuxt">Nuxt.js</art-combobox-item>
    <art-combobox-item value="remix" disabled>Remix</art-combobox-item>
    <art-combobox-item value="astro">Astro</art-combobox-item>
  </art-combobox>
  <art-combobox size="lg" placeholder="Large" aria-label="Large">
    <art-combobox-item value="next">Next.js</art-combobox-item>
    <art-combobox-item value="sveltekit">SvelteKit</art-combobox-item>
    <art-combobox-item value="nuxt">Nuxt.js</art-combobox-item>
    <art-combobox-item value="remix" disabled>Remix</art-combobox-item>
    <art-combobox-item value="astro">Astro</art-combobox-item>
  </art-combobox>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/combobox/sizes.html [HTML]
<<< ../../../sandbox/react/src/samples/combobox/sizes.tsx [React]
<<< ../../../sandbox/vue/src/samples/combobox/sizes.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/combobox/sizes.ts [Angular]
:::

### Disabled

<Preview frame="stack">
  <art-combobox placeholder="Select a framework" aria-label="Framework" disabled>
    <art-combobox-item value="next">Next.js</art-combobox-item>
    <art-combobox-item value="sveltekit">SvelteKit</art-combobox-item>
    <art-combobox-item value="nuxt">Nuxt.js</art-combobox-item>
    <art-combobox-item value="remix" disabled>Remix</art-combobox-item>
    <art-combobox-item value="astro">Astro</art-combobox-item>
  </art-combobox>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/combobox/disabled.html [HTML]
<<< ../../../sandbox/react/src/samples/combobox/disabled.tsx [React]
<<< ../../../sandbox/vue/src/samples/combobox/disabled.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/combobox/disabled.ts [Angular]
:::

### In a form

Form-associated: the value is submitted under `name` (one entry per chip when `multiple`); `required` participates in validation.

<Preview frame="stack">
  <form onsubmit="event.preventDefault()">
    <art-label for="framework">Framework</art-label>
    <art-combobox id="framework" name="framework" placeholder="Select a framework" required>
    <art-combobox-item value="next">Next.js</art-combobox-item>
    <art-combobox-item value="sveltekit">SvelteKit</art-combobox-item>
    <art-combobox-item value="nuxt">Nuxt.js</art-combobox-item>
    <art-combobox-item value="remix" disabled>Remix</art-combobox-item>
    <art-combobox-item value="astro">Astro</art-combobox-item>
    </art-combobox>
    <art-button type="submit">Submit</art-button>
  </form>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/combobox/form.html [HTML]
<<< ../../../sandbox/react/src/samples/combobox/form.tsx [React]
<<< ../../../sandbox/vue/src/samples/combobox/form.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/combobox/form.ts [Angular]
:::

## API Reference

<ApiReference tag="art-combobox" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focus the field |
| `Typing` | Opens and filters the list; the first match is highlighted |
| `↓ / ↑` | Open the list; move the highlight (skips disabled items) |
| `Home / End` | First / last item |
| `Enter` | Choose the highlighted item (toggle it when `multiple`) |
| `Backspace` | In an empty `multiple` field, remove the last chip |
| `Escape` | Close the list and restore the field |

The field is `<input role="combobox">` with `aria-autocomplete="list"`, `aria-expanded`, `aria-controls` and `aria-activedescendant` on the highlighted `role="option"` item (element reflection across the shadow boundary); the panel is `role="listbox"` (`aria-multiselectable` when `multiple`). Chips carry a labelled remove button. Name the combobox with `aria-label`, `aria-labelledby` or `art-label`. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/).

States: `focus-visible`, `disabled` and `invalid` on the field; open / closed with enter and exit motion; highlighted and selected items; the empty state. `hover`, `active` and `loading` do not apply.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-control-height-{sm,md,lg}`, `--art-control-padding-x-field-{sm,md,lg}`` | field sizes |
| ``--art-color-border-default`, `--art-border-width`, `--art-radius-md`, `--art-shadow-raised`` | field frame |
| ``--art-color-bg-secondary`, `--art-color-fg-secondary`, `--art-font-size-xs`, `--art-space-6`` | chips |
| ``--art-color-bg-popover`, `--art-shadow-popover`, `--art-space-1`` | list panel |
| ``--art-color-bg-accent`, `--art-radius-sm`, `--art-space-1-5`, `--art-space-2`, `--art-space-8`` | items |
| ``--art-color-fg-muted`, `--art-font-size-sm`, `--art-space-6`` | placeholder, headings, empty state |
| ``--art-size-icon-md`, `--art-size-icon-sm`` | chevron, clear, checkmark |

## Do / Don't

| Do | Don't |
|---|---|
| Use it for long lists people search | Use it for a handful of options (use Select) |
| Give rich items a `label` and `keywords` | Rely on the visible text alone for matching |
| Name it with a visible `art-label` | Rely on the placeholder as the name |
