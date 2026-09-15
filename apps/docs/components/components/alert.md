# Alert

Displays a callout for user attention. shadcn/ui parity.

## Preview

<Preview frame="stack">
  <art-alert>
    <art-icon slot="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg></art-icon>
    <h5 slot="title">Success! Your changes have been saved</h5>
    <p slot="description">This is an alert with icon, title and description.</p>
  </art-alert>
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
<<< ../../../sandbox/html/src/samples/alert/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/alert/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/alert/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/alert/basic.ts [Angular]
:::

Slot an icon as `icon`, a heading as `title` and text as `description`. `variant="destructive"` colours the whole callout for errors.

## Examples

### Basic

Icon, title and description each have a slot; any of them can be left out.

<Preview frame="stack">
  <art-alert>
    <art-icon slot="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg></art-icon>
    <h5 slot="title">Success! Your changes have been saved</h5>
    <p slot="description">This is an alert with icon, title and description.</p>
  </art-alert>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/alert/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/alert/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/alert/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/alert/basic.ts [Angular]
:::

### Destructive

<Preview frame="stack">
  <art-alert variant="destructive">
    <art-icon slot="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg></art-icon>
    <h5 slot="title">Unable to process your payment.</h5>
    <p slot="description">Please verify your billing information and try again.</p>
  </art-alert>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/alert/destructive.html [HTML]
<<< ../../../sandbox/react/src/samples/alert/destructive.tsx [React]
<<< ../../../sandbox/vue/src/samples/alert/destructive.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/alert/destructive.ts [Angular]
:::

### Title only

<Preview frame="stack">
  <art-alert>
    <art-icon slot="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg></art-icon>
    <h5 slot="title">This alert has a title and an icon. No description.</h5>
  </art-alert>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/alert/title-only.html [HTML]
<<< ../../../sandbox/react/src/samples/alert/title-only.tsx [React]
<<< ../../../sandbox/vue/src/samples/alert/title-only.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/alert/title-only.ts [Angular]
:::

### Without icon

<Preview frame="stack">
  <art-alert>
    <h5 slot="title">Heads up</h5>
    <p slot="description">You can add components to your app using the CLI.</p>
  </art-alert>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/alert/no-icon.html [HTML]
<<< ../../../sandbox/react/src/samples/alert/no-icon.tsx [React]
<<< ../../../sandbox/vue/src/samples/alert/no-icon.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/alert/no-icon.ts [Angular]
:::

## API Reference

<ApiReference tag="art-alert" />

## Accessibility

| Key | Action |
|---|---|
| `None` | Not focusable; links inside are |

`role="alert"` on the host: assistive tech announces the callout when it is inserted. For static, always-present notes use a Card instead. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/alert/).

States: Not interactive — the two variants are the only states.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-color-bg-surface`, `--art-color-border-default`, `--art-border-width`, `--art-radius-lg`` | box |
| ``--art-color-fg-default`, `--art-color-fg-muted`` | default text |
| ``--art-color-destructive-fg`` | destructive text |
| ``--art-space-4`, `--art-space-3`, `--art-space-0-5`` | padding and gaps |
| ``--art-font-weight-medium`, `--art-font-tracking-tight`, `--art-font-size-sm`` | title and description |
| ``--art-size-icon-md`` | icon |

## Do / Don't

| Do | Don't |
|---|---|
| Use it for a message that needs attention now | Use it as a decorative info box everywhere |
| One alert per situation | Stack alerts |
