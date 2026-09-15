# Label

Renders an accessible label associated with a control. shadcn/ui parity.

## Preview

<Preview>
  <div style="display:flex;flex-direction:column;gap:var(--art-space-2)"><art-label for="email">Your email address</art-label><input id="email" type="email" placeholder="you@example.com"  style="font:inherit;padding:var(--art-space-2);border:var(--art-border-width) solid var(--art-color-border-default);border-radius:var(--art-radius-md);background:transparent;color:inherit"></div>
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

`for` works across shadow boundaries: the label resolves the id in its own tree, then the document, and focuses (or toggles) the control on click. Pair it with `art-field` for automatic wiring and error states.

## Examples

### Basic

Clicking the label focuses the control with the matching `id`, even across shadow boundaries.

<Preview>
  <div style="display:flex;flex-direction:column;gap:var(--art-space-2)"><art-label for="email">Your email address</art-label><input id="email" type="email" placeholder="you@example.com"  style="font:inherit;padding:var(--art-space-2);border:var(--art-border-width) solid var(--art-color-border-default);border-radius:var(--art-radius-md);background:transparent;color:inherit"></div>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/label/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/label/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/label/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/label/basic.ts [Angular]
:::

### Disabled

Field sets `disabled` on the label automatically when its control is disabled.

<Preview>
  <div style="display:flex;flex-direction:column;gap:var(--art-space-2)"><art-label for="email-off" disabled>Your email address</art-label><input id="email-off" type="email" placeholder="you@example.com" disabled style="font:inherit;padding:var(--art-space-2);border:var(--art-border-width) solid var(--art-color-border-default);border-radius:var(--art-radius-md);background:transparent;color:inherit"></div>
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

States: `disabled` dims the label and disables pointer events. `hover`, `active`, `focus-visible`, `loading` and `invalid` do not apply — a label is not interactive on its own; the control carries those states.

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
