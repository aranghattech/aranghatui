# Item

A versatile component that you can use to display any content. shadcn/ui parity.

## Preview

<Preview frame="stack">
  <art-item variant="outline">
    <art-icon slot="media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"/><path d="m9 12 2 2 4-4"/></svg></art-icon>
    <p slot="title">Basic Item</p>
    <p slot="description">A simple item with title and description.</p>
    <art-button slot="actions" variant="outline" size="sm">Action</art-button>
  </art-item>
</Preview>

## Installation

Lives in `@aranghat/base`.

::: code-group
```bash [HTML]
pnpm add @aranghat/tokens @aranghat/base
```
```bash [React]
pnpm add @aranghat/tokens @aranghat/base @aranghat/base-react
```
```bash [Vue]
pnpm add @aranghat/tokens @aranghat/base @aranghat/base-vue
```
```bash [Angular]
pnpm add @aranghat/tokens @aranghat/base @aranghat/base-angular
```
:::

## Usage

::: code-group
<<< ../../../sandbox/html/src/samples/item/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/item/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/item/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/item/basic.ts [Angular]
:::

Fill the `media`, `title`, `description` and `actions` slots; add `header` / `footer` rows when needed. `variant` and `size` style the row; `href` makes it a link. Group rows in `art-item-group`.

## Examples

### Basic

Media, title, description and actions each have a slot; an `art-icon` in `media` gets a bordered box, an `<img>` becomes a thumbnail.

<Preview frame="stack">
  <art-item variant="outline">
    <art-icon slot="media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"/><path d="m9 12 2 2 4-4"/></svg></art-icon>
    <p slot="title">Basic Item</p>
    <p slot="description">A simple item with title and description.</p>
    <art-button slot="actions" variant="outline" size="sm">Action</art-button>
  </art-item>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/item/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/item/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/item/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/item/basic.ts [Angular]
:::

### Variants

<Preview frame="stack">
  <art-item>
    <p slot="title">Default</p>
    <p slot="description">No border, no fill.</p>
  </art-item>
  <art-item variant="outline">
    <p slot="title">Outline</p>
    <p slot="description">Bordered.</p>
  </art-item>
  <art-item variant="muted">
    <p slot="title">Muted</p>
    <p slot="description">Filled with the muted background.</p>
  </art-item>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/item/variants.html [HTML]
<<< ../../../sandbox/react/src/samples/item/variants.tsx [React]
<<< ../../../sandbox/vue/src/samples/item/variants.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/item/variants.ts [Angular]
:::

### Sizes

<Preview frame="stack">
  <art-item variant="outline" size="sm">
    <art-icon slot="media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"/><path d="m9 12 2 2 4-4"/></svg></art-icon>
    <p slot="title">Small item</p>
    <art-button slot="actions" variant="ghost" size="sm">Open</art-button>
  </art-item>
  <art-item variant="outline">
    <art-icon slot="media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"/><path d="m9 12 2 2 4-4"/></svg></art-icon>
    <p slot="title">Medium item</p>
    <art-button slot="actions" variant="ghost" size="sm">Open</art-button>
  </art-item>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/item/sizes.html [HTML]
<<< ../../../sandbox/react/src/samples/item/sizes.tsx [React]
<<< ../../../sandbox/vue/src/samples/item/sizes.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/item/sizes.ts [Angular]
:::

### With image

<Preview frame="stack">
  <art-item variant="outline">
    <img slot="media" alt="" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23a3a3a3'/%3E%3C/svg%3E">
    <p slot="title">Photo album</p>
    <p slot="description">124 photos · Updated yesterday</p>
  </art-item>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/item/with-image.html [HTML]
<<< ../../../sandbox/react/src/samples/item/with-image.tsx [React]
<<< ../../../sandbox/vue/src/samples/item/with-image.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/item/with-image.ts [Angular]
:::

### Group

`art-item-group` is a list (`role="list"`); its items are list items. Put an `art-separator` between them for dividers.

<Preview frame="stack">
  <art-item-group>
    <art-item>
      <art-icon slot="media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"/><path d="m9 12 2 2 4-4"/></svg></art-icon>
      <p slot="title">Personal</p>
      <p slot="description">Your private workspace.</p>
    </art-item>
    <art-separator></art-separator>
    <art-item>
      <art-icon slot="media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"/><path d="m9 12 2 2 4-4"/></svg></art-icon>
      <p slot="title">Team</p>
      <p slot="description">Shared with 4 people.</p>
    </art-item>
  </art-item-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/item/group.html [HTML]
<<< ../../../sandbox/react/src/samples/item/group.tsx [React]
<<< ../../../sandbox/vue/src/samples/item/group.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/item/group.ts [Angular]
:::

### As a link

`href` renders the row as a link with hover and focus states.

<Preview frame="stack">
  <art-item variant="outline" href="#">
    <art-icon slot="media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"/><path d="m9 12 2 2 4-4"/></svg></art-icon>
    <p slot="title">Open settings</p>
    <p slot="description">Manage your account, billing and teams.</p>
  </art-item>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/item/link.html [HTML]
<<< ../../../sandbox/react/src/samples/item/link.tsx [React]
<<< ../../../sandbox/vue/src/samples/item/link.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/item/link.ts [Angular]
:::

### Header and footer

<Preview frame="stack">
  <art-item variant="outline">
    <span slot="header">Release notes<art-badge variant="secondary">New</art-badge></span>
    <p slot="title">v1.2.0</p>
    <p slot="description">Field, Input OTP and Button Group land in base.</p>
    <span slot="footer">Published today<art-button variant="link" size="sm">Read more</art-button></span>
  </art-item>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/item/header-and-footer.html [HTML]
<<< ../../../sandbox/react/src/samples/item/header-and-footer.tsx [React]
<<< ../../../sandbox/vue/src/samples/item/header-and-footer.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/item/header-and-footer.ts [Angular]
:::

## API Reference

<ApiReference tag="art-item" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focus a linked item (`href`), then the buttons in its actions |
| `Enter` | Follow the link |

A plain row, or an `<a>` when `href` is set. Inside `art-item-group` (`role="list"`) each item is a `listitem`. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/).

States: `hover` and `focus-visible` apply to linked items; `active`, `disabled`, `loading` and `invalid` do not apply to a row.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-space-4`, `--art-space-2-5`, `--art-space-3`, `--art-space-1`, `--art-space-2`` | padding and gaps per size |
| ``--art-color-border-default`, `--art-border-width`, `--art-radius-md`` | outline |
| ``--art-color-bg-muted`` | muted variant, icon box |
| ``--art-color-bg-accent`` | link hover |
| ``--art-space-8`, `--art-space-10`, `--art-radius-sm`` | media box and thumbnail |
| ``--art-font-size-sm`, `--art-font-weight-medium`, `--art-color-fg-muted`` | title and description |

## Do / Don't

| Do | Don't |
|---|---|
| Keep the description to two lines | Put paragraphs in an item |
| Use one primary action per item | Stack many buttons in the actions slot |
| Use `art-item-group` for lists | Space items with margins |
