<!-- hand-written -->
# Button

Displays a button or a component that looks like a button. shadcn/ui parity (ADR-0012): six variants, three sizes, icon-only, loading, and an anchor mode via `href`.

## Preview

<Preview>
  <art-button>Button</art-button>
  <art-button variant="secondary">Secondary</art-button>
  <art-button variant="outline">Outline</art-button>
  <art-button variant="ghost">Ghost</art-button>
  <art-button variant="destructive">Destructive</art-button>
  <art-button variant="link">Link</art-button>
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
<<< ../../../sandbox/html/src/samples/button/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/button/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/button/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/button/basic.ts [Angular]
:::

`click` is the native event — no custom event, no `art-` prefix (CLAUDE.md §3a). Disabled and loading buttons emit no `click`.

## Examples

### Basic

<Preview><art-button>Button</art-button></Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/button/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/button/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/button/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/button/basic.ts [Angular]
:::

### Variants

`default` is the primary fill (ink in the neutral theme, brand colour in brand themes). `secondary`, `outline`, `ghost`, `destructive`, `link`.

<Preview>
  <art-button>Default</art-button>
  <art-button variant="secondary">Secondary</art-button>
  <art-button variant="outline">Outline</art-button>
  <art-button variant="ghost">Ghost</art-button>
  <art-button variant="destructive">Destructive</art-button>
  <art-button variant="link">Link</art-button>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/button/variants.html [HTML]
<<< ../../../sandbox/react/src/samples/button/variants.tsx [React]
<<< ../../../sandbox/vue/src/samples/button/variants.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/button/variants.ts [Angular]
:::

### Sizes

`sm`, `md` (default), `lg` — heights come from the shared `--art-control-height-*` tokens so buttons line up with inputs and selects.

<Preview>
  <art-button size="sm">Small</art-button>
  <art-button>Medium</art-button>
  <art-button size="lg">Large</art-button>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/button/sizes.html [HTML]
<<< ../../../sandbox/react/src/samples/button/sizes.tsx [React]
<<< ../../../sandbox/vue/src/samples/button/sizes.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/button/sizes.ts [Angular]
:::

### With icon

Icons go in the `start` or `end` slot. Import the icon you need from `@aranghat/icons` and pass it to `<art-icon>` — icons are never bundled into components (ADR-0007).

<Preview>
  <art-button variant="outline"><art-icon slot="start"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></art-icon>Login with Email</art-button>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/button/with-icon.html [HTML]
<<< ../../../sandbox/react/src/samples/button/with-icon.tsx [React]
<<< ../../../sandbox/vue/src/samples/button/with-icon.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/button/with-icon.ts [Angular]
:::

### Icon only

`icon` makes the button square at the control height. Always provide `aria-label`.

<Preview>
  <art-button variant="outline" icon aria-label="Add"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg></art-icon></art-button>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/button/icon-only.html [HTML]
<<< ../../../sandbox/react/src/samples/button/icon-only.tsx [React]
<<< ../../../sandbox/vue/src/samples/button/icon-only.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/button/icon-only.ts [Angular]
:::

### Loading

`loading` swaps the `start` slot for a spinner, sets `aria-busy="true"` and blocks activation while keeping the label readable.

<Preview><art-button loading>Please wait</art-button></Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/button/loading.html [HTML]
<<< ../../../sandbox/react/src/samples/button/loading.tsx [React]
<<< ../../../sandbox/vue/src/samples/button/loading.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/button/loading.ts [Angular]
:::

### Disabled

<Preview><art-button disabled>Disabled</art-button><art-button variant="outline" disabled>Disabled</art-button></Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/button/disabled.html [HTML]
<<< ../../../sandbox/react/src/samples/button/disabled.tsx [React]
<<< ../../../sandbox/vue/src/samples/button/disabled.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/button/disabled.ts [Angular]
:::

### As link

`href` renders an `<a>` with the same look and real link semantics (Enter follows, Space scrolls). `target` and `rel` pass through.

<Preview><art-button href="https://ui.shadcn.com/docs/components/button" target="_blank" rel="noreferrer" variant="outline">Open shadcn</art-button></Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/button/link.html [HTML]
<<< ../../../sandbox/react/src/samples/button/link.tsx [React]
<<< ../../../sandbox/vue/src/samples/button/link.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/button/link.ts [Angular]
:::

### In a form

The button is form-associated: `type="submit"` calls `requestSubmit()` on the surrounding `<form>` (validation included) and `type="reset"` resets it — no framework glue needed.

<Preview><form onsubmit="event.preventDefault()"><input name="email" type="email" required placeholder="you@example.com" style="font:inherit;padding:8px;border:1px solid var(--art-color-border-default);border-radius:var(--art-radius-md)"><art-button type="submit">Subscribe</art-button><art-button type="reset" variant="ghost">Reset</art-button></form></Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/button/form.html [HTML]
<<< ../../../sandbox/react/src/samples/button/form.tsx [React]
<<< ../../../sandbox/vue/src/samples/button/form.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/button/form.ts [Angular]
:::

## API Reference

<ApiReference tag="art-button" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` / `Shift+Tab` | Move focus to / from the button. `disabled` leaves the tab order; `loading` stays focusable (so a button that starts loading after activation does not drop focus) but ignores activation |
| `Enter` | Activate |
| `Space` | Activate (`<button>` only — with `href` the element is a real link and follows link semantics, as in shadcn) |

Roles: native `<button>` (`<a>` with `href`). `loading` sets `aria-busy="true"` on the host and `aria-disabled` on the control. Icon-only buttons need `aria-label`. Pattern: [APG Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/).

States: `hover`, `active` (press scales to 0.96, interruptible, collapses under reduced motion), `focus-visible`, `disabled`, `loading` are implemented. `invalid` does not apply — a button has no validity state.

## Tokens used

| Token | Used for |
|---|---|
| `--art-color-primary-solid`, `--art-color-primary-hover`, `--art-color-fg-on-primary` | `default` |
| `--art-color-secondary-solid`, `--art-color-secondary-hover`, `--art-color-secondary-fg` | `secondary` |
| `--art-color-bg-canvas`, `--art-color-border-default`, `--art-border-width`, `--art-color-bg-accent`, `--art-color-fg-default` | `outline`, `ghost` |
| `--art-color-destructive-solid`, `--art-color-destructive-hover`, `--art-color-fg-on-destructive` | `destructive` |
| `--art-color-fg-link` | `link` |
| `--art-control-height-{sm,md,lg}`, `--art-control-padding-x-{sm,md,lg}`, `--art-control-padding-x-icon-{sm,md,lg}` | sizes, icon buttons, tighter padding beside an icon |
| `--art-radius-md` | shape |
| `--art-shadow-raised` | filled and outline variants |
| `--art-ring-width`, `--art-ring-offset`, `--art-color-ring` | focus ring |
| `--art-duration-fast`, `--art-ease-out`, `--art-duration-spin` | hover transition, spinner |
| `--art-font-size-sm`, `--art-font-weight-medium`, `--art-space-2` | type and icon gap |

## Do / Don't

| Do | Don't |
|---|---|
| Use one `default` button per view for the primary action | Put several primary buttons side by side |
| Use `destructive` only for irreversible actions, paired with confirmation | Use `destructive` for "cancel" |
| Give icon-only buttons an `aria-label` | Rely on the icon alone to convey the action |
| Use `href` for navigation that looks like a button | Use a button with a click handler that only navigates |