# Avatar

An image element with a fallback for representing the user. shadcn/ui parity.

## Preview

<Preview frame="inline">
  <art-avatar src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23737373'/%3E%3Ccircle cx='20' cy='15' r='7' fill='%23f5f5f5'/%3E%3Cpath d='M6 38c2-9 8-13 14-13s12 4 14 13Z' fill='%23f5f5f5'/%3E%3C/svg%3E" alt="Colm Tuite">CT</art-avatar>
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
<<< ../../../sandbox/html/src/samples/avatar/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/avatar/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/avatar/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/avatar/basic.ts [Angular]
:::

Give it `src`, `alt` and fallback text (initials) in the default slot. `size` follows the `sm | md | lg` scale.

## Examples

### Basic

The fallback (initials) shows until the image loads, and stays if it fails.

<Preview frame="inline">
  <art-avatar src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23737373'/%3E%3Ccircle cx='20' cy='15' r='7' fill='%23f5f5f5'/%3E%3Cpath d='M6 38c2-9 8-13 14-13s12 4 14 13Z' fill='%23f5f5f5'/%3E%3C/svg%3E" alt="Colm Tuite">CT</art-avatar>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/avatar/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/avatar/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/avatar/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/avatar/basic.ts [Angular]
:::

### Fallback

No `src`: only the fallback renders.

<Preview frame="inline">
  <art-avatar alt="">CN</art-avatar>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/avatar/fallback.html [HTML]
<<< ../../../sandbox/react/src/samples/avatar/fallback.tsx [React]
<<< ../../../sandbox/vue/src/samples/avatar/fallback.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/avatar/fallback.ts [Angular]
:::

### Sizes

<Preview frame="inline">
  <art-avatar size="sm" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23737373'/%3E%3Ccircle cx='20' cy='15' r='7' fill='%23f5f5f5'/%3E%3Cpath d='M6 38c2-9 8-13 14-13s12 4 14 13Z' fill='%23f5f5f5'/%3E%3C/svg%3E" alt="">CT</art-avatar>
  <art-avatar src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23737373'/%3E%3Ccircle cx='20' cy='15' r='7' fill='%23f5f5f5'/%3E%3Cpath d='M6 38c2-9 8-13 14-13s12 4 14 13Z' fill='%23f5f5f5'/%3E%3C/svg%3E" alt="">CT</art-avatar>
  <art-avatar size="lg" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23737373'/%3E%3Ccircle cx='20' cy='15' r='7' fill='%23f5f5f5'/%3E%3Cpath d='M6 38c2-9 8-13 14-13s12 4 14 13Z' fill='%23f5f5f5'/%3E%3C/svg%3E" alt="">CT</art-avatar>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/avatar/sizes.html [HTML]
<<< ../../../sandbox/react/src/samples/avatar/sizes.tsx [React]
<<< ../../../sandbox/vue/src/samples/avatar/sizes.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/avatar/sizes.ts [Angular]
:::

### In an item

<Preview frame="stack">
  <art-item variant="outline">
    <art-avatar slot="media" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23737373'/%3E%3Ccircle cx='20' cy='15' r='7' fill='%23f5f5f5'/%3E%3Cpath d='M6 38c2-9 8-13 14-13s12 4 14 13Z' fill='%23f5f5f5'/%3E%3C/svg%3E" alt="">CT</art-avatar>
    <p slot="title">Colm Tuite</p>
    <p slot="description">colm@example.com</p>
  </art-item>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/avatar/with-item.html [HTML]
<<< ../../../sandbox/react/src/samples/avatar/with-item.tsx [React]
<<< ../../../sandbox/vue/src/samples/avatar/with-item.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/avatar/with-item.ts [Angular]
:::

## API Reference

<ApiReference tag="art-avatar" />

## Accessibility

| Key | Action |
|---|---|
| `None` | Not focusable |

A native `<img>` with `alt`; when the avatar sits next to the person's name, leave `alt` empty so the name is not read twice. The fallback is hidden from assistive tech while an image is present. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/).

States: Not interactive — loading (fallback shown) and loaded are the only states.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-space-6`, `--art-space-8`, `--art-space-10`` | sizes |
| ``--art-radius-full`` | shape |
| ``--art-color-bg-muted`, `--art-color-fg-muted`, `--art-font-size-sm`, `--art-font-size-xs`` | fallback |

## Do / Don't

| Do | Don't |
|---|---|
| Use two-letter initials as the fallback | Leave the fallback empty |
| Set `alt` when the avatar stands alone | Repeat the name in `alt` next to a visible name |
