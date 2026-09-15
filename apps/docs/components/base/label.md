# Label

Renders an accessible label associated with a control. shadcn/ui parity.

## Preview

<Preview frame="stack">
  <art-label for="email">Your email address</art-label>
  <art-input id="email" type="email" placeholder="Email"></art-input>
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
<<< ../../../sandbox/html/src/samples/label/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/label/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/label/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/label/basic.ts [Angular]
:::

`for` works across shadow boundaries: the label resolves the id in its own tree, then the document, focuses (or toggles) the control on click and names it with `aria-labelledby`. Pair it with `art-field` for automatic wiring and error states.

## Examples

### Basic

Clicking the label focuses the control with the matching `id`, even across shadow boundaries, and names it for assistive technology.

<Preview frame="stack">
  <art-label for="email">Your email address</art-label>
  <art-input id="email" type="email" placeholder="Email"></art-input>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/label/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/label/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/label/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/label/basic.ts [Angular]
:::

### Disabled

Field sets `disabled` on the label automatically when its control is disabled.

<Preview frame="stack">
  <art-label for="email-off" disabled>Your email address</art-label>
  <art-input id="email-off" type="email" placeholder="Email" disabled></art-input>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/label/disabled.html [HTML]
<<< ../../../sandbox/react/src/samples/label/disabled.tsx [React]
<<< ../../../sandbox/vue/src/samples/label/disabled.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/label/disabled.ts [Angular]
:::

## API Reference

<ApiReference tag="art-label" />

## Accessibility

| Key | Action |
|---|---|
| `Click / tap` | Focuses the associated control; toggles checkbox-like controls |

Native `<label>` semantics inside the shadow root, plus `aria-labelledby` set on the `for` target pointing at the label host, so the control gets its accessible name across the shadow boundary (existing `aria-labelledby` is respected).

States: `disabled` switches the text to the muted foreground (kept AA-readable; opacity would fail contrast) and disables pointer events. `hover`, `active`, `focus-visible`, `loading` and `invalid` do not apply — a label is not interactive on its own; the control carries those states.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-font-size-sm`, `--art-font-weight-medium`` | type |
| ``--art-space-2`` | gap to inline content |
| ``--art-color-fg-default`` | text colour (inherited) |

## Do / Don't

| Do | Don't |
|---|---|
| Always give a control a visible label | Rely on `placeholder` as the only label |
| Keep labels short and sentence case | Use ALL CAPS or trailing colons |
