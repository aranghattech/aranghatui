# Skeleton

Use to show a placeholder while content is loading. shadcn/ui parity.

## Preview

<Preview frame="stack">
  <art-skeleton style="height: 1rem; width: 15rem"></art-skeleton>
  <art-skeleton style="height: 1rem; width: 12rem"></art-skeleton>
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
<<< ../../../sandbox/html/src/samples/skeleton/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/skeleton/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/skeleton/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/skeleton/basic.ts [Angular]
:::

Give the host a width and height (inline style or a class). Wrap the loading region in `aria-busy="true"` so the state is announced once.

## Examples

### Basic

Size the host; the pulse fills it. Motion collapses under `prefers-reduced-motion`.

<Preview frame="stack">
  <art-skeleton style="height: 1rem; width: 15rem"></art-skeleton>
  <art-skeleton style="height: 1rem; width: 12rem"></art-skeleton>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/skeleton/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/skeleton/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/skeleton/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/skeleton/basic.ts [Angular]
:::

### Card

<Preview frame="stack">
  <art-skeleton style="height: 8rem; width: 100%"></art-skeleton>
  <art-skeleton style="height: 1rem; width: 60%"></art-skeleton>
  <art-skeleton style="height: 1rem; width: 40%"></art-skeleton>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/skeleton/card.html [HTML]
<<< ../../../sandbox/react/src/samples/skeleton/card.tsx [React]
<<< ../../../sandbox/vue/src/samples/skeleton/card.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/skeleton/card.ts [Angular]
:::

### Circle

Override the radius on the host for avatars.

<Preview frame="inline">
  <art-skeleton style="height: 3rem; width: 3rem; border-radius: 9999px"></art-skeleton>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/skeleton/circle.html [HTML]
<<< ../../../sandbox/react/src/samples/skeleton/circle.tsx [React]
<<< ../../../sandbox/vue/src/samples/skeleton/circle.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/skeleton/circle.ts [Angular]
:::

## API Reference

<ApiReference tag="art-skeleton" />

## Accessibility

| Key | Action |
|---|---|
| `None` | Not focusable |

The host is `aria-hidden`; skeletons carry no meaning for assistive tech. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/).

States: Not interactive — the only state is the loading pulse.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-color-bg-accent`` | fill |
| ``--art-radius-md`` | shape |
| ``--art-duration-pulse`` | pulse cycle |

## Do / Don't

| Do | Don't |
|---|---|
| Match the shape of the content it stands in for | Show one generic block for a whole page |
| Set `aria-busy` on the region | Announce every skeleton |
