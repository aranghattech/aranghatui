# Tabs

A set of layered sections of content—known as tab panels—that are displayed one at a time. shadcn/ui parity.

## Preview

<Preview frame="stack">
  <art-tabs value="account">
    <art-tab value="account">Account</art-tab>
    <art-tab value="password">Password</art-tab>
    <art-tab-panel value="account">
      <art-card>
        <h3 slot="title">Account</h3>
        <p slot="description">Make changes to your account here. Click save when you're done.</p>
        <art-field>
          <art-label slot="label">Name</art-label>
          <art-input value="Pedro Duarte"></art-input>
        </art-field>
        <art-button slot="footer">Save changes</art-button>
      </art-card>
    </art-tab-panel>
    <art-tab-panel value="password">
      <art-card>
        <h3 slot="title">Password</h3>
        <p slot="description">Change your password here. After saving, you'll be logged out.</p>
        <art-field>
          <art-label slot="label">Current password</art-label>
          <art-input type="password"></art-input>
        </art-field>
        <art-button slot="footer">Save password</art-button>
      </art-card>
    </art-tab-panel>
  </art-tabs>
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
<<< ../../../sandbox/html/src/samples/tabs/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/tabs/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/tabs/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/tabs/basic.ts [Angular]
:::

Put `art-tab`s and `art-tab-panel`s with matching `value`s inside `art-tabs`; bind `value` and listen to `value-change`. React `onValueChange`, Vue `v-model:value`, Angular `[value]` / `(valueChange)`.

## Examples

### Basic

Tabs and panels are siblings inside `art-tabs`; the shared `value` selects one of each. Arrow keys move between tabs and select as they go.

<Preview frame="stack">
  <art-tabs value="account">
    <art-tab value="account">Account</art-tab>
    <art-tab value="password">Password</art-tab>
    <art-tab-panel value="account">
      <art-card>
        <h3 slot="title">Account</h3>
        <p slot="description">Make changes to your account here. Click save when you're done.</p>
        <art-field>
          <art-label slot="label">Name</art-label>
          <art-input value="Pedro Duarte"></art-input>
        </art-field>
        <art-button slot="footer">Save changes</art-button>
      </art-card>
    </art-tab-panel>
    <art-tab-panel value="password">
      <art-card>
        <h3 slot="title">Password</h3>
        <p slot="description">Change your password here. After saving, you'll be logged out.</p>
        <art-field>
          <art-label slot="label">Current password</art-label>
          <art-input type="password"></art-input>
        </art-field>
        <art-button slot="footer">Save password</art-button>
      </art-card>
    </art-tab-panel>
  </art-tabs>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/tabs/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/tabs/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/tabs/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/tabs/basic.ts [Angular]
:::

### Line

`variant="line"` drops the filled list for an underline.

<Preview frame="stack">
  <art-tabs value="overview" variant="line">
    <art-tab value="overview">Overview</art-tab>
    <art-tab value="analytics">Analytics</art-tab>
    <art-tab value="reports">Reports</art-tab>
    <art-tab-panel value="overview"><p>Overview of the last 30 days.</p></art-tab-panel>
    <art-tab-panel value="analytics"><p>Traffic and conversion.</p></art-tab-panel>
    <art-tab-panel value="reports"><p>Downloadable reports.</p></art-tab-panel>
  </art-tabs>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/tabs/line.html [HTML]
<<< ../../../sandbox/react/src/samples/tabs/line.tsx [React]
<<< ../../../sandbox/vue/src/samples/tabs/line.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/tabs/line.ts [Angular]
:::

### Vertical

`orientation="vertical"` stacks the list beside the panels; ↑ / ↓ move between tabs.

<Preview frame="stack">
  <art-tabs value="general" orientation="vertical">
    <art-tab value="general">General</art-tab>
    <art-tab value="security">Security</art-tab>
    <art-tab value="billing">Billing</art-tab>
    <art-tab-panel value="general"><p>General settings.</p></art-tab-panel>
    <art-tab-panel value="security"><p>Security settings.</p></art-tab-panel>
    <art-tab-panel value="billing"><p>Billing settings.</p></art-tab-panel>
  </art-tabs>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/tabs/vertical.html [HTML]
<<< ../../../sandbox/react/src/samples/tabs/vertical.tsx [React]
<<< ../../../sandbox/vue/src/samples/tabs/vertical.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/tabs/vertical.ts [Angular]
:::

### Disabled tab

<Preview frame="stack">
  <art-tabs value="one">
    <art-tab value="one">One</art-tab>
    <art-tab value="two" disabled>Two</art-tab>
    <art-tab value="three">Three</art-tab>
    <art-tab-panel value="one"><p>First panel.</p></art-tab-panel>
    <art-tab-panel value="two"><p>Never reachable.</p></art-tab-panel>
    <art-tab-panel value="three"><p>Third panel.</p></art-tab-panel>
  </art-tabs>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/tabs/disabled.html [HTML]
<<< ../../../sandbox/react/src/samples/tabs/disabled.tsx [React]
<<< ../../../sandbox/vue/src/samples/tabs/disabled.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/tabs/disabled.ts [Angular]
:::

### Manual activation

`activation="manual"` is for panels that are expensive to show: arrows only move focus.

<Preview frame="stack">
  <art-tabs value="a" activation="manual">
    <art-tab value="a">Alpha</art-tab>
    <art-tab value="b">Beta</art-tab>
    <art-tab-panel value="a"><p>Arrows move focus; Enter or Space selects.</p></art-tab-panel>
    <art-tab-panel value="b"><p>Beta panel.</p></art-tab-panel>
  </art-tabs>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/tabs/manual.html [HTML]
<<< ../../../sandbox/react/src/samples/tabs/manual.tsx [React]
<<< ../../../sandbox/vue/src/samples/tabs/manual.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/tabs/manual.ts [Angular]
:::

## API Reference

<ApiReference tag="art-tabs" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focus the selected tab, then the panel |
| `← / → (↑ / ↓ when vertical)` | Move between tabs and select (`activation="automatic"`) |
| `Home / End` | First / last tab |
| `Enter / Space` | Select the focused tab (`activation="manual"`) |

`tablist` with `aria-orientation`; each `art-tab` host is `role="tab"` with `aria-selected` and `aria-controls`; each panel is `role="tabpanel"` with `aria-labelledby`. Only the selected tab is in the tab order. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/).

States: `hover`, `focus-visible`, `disabled` and the selected state are implemented. `active`, `loading` and `invalid` do not apply.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-color-bg-muted`, `--art-radius-lg`, `--art-space-1`, `--art-space-9`` | tab list |
| ``--art-color-bg-canvas`, `--art-shadow-raised`, `--art-radius-md`` | selected tab (default) |
| ``--art-color-fg-default`, `--art-space-0-5`` | underline (line) |
| ``--art-color-fg-muted`, `--art-font-size-sm`, `--art-font-weight-medium`, `--art-space-2`, `--art-space-1-5`` | tab text and padding |
| ``--art-ring-width`, `--art-ring-offset`, `--art-color-ring`` | focus ring |

## Do / Don't

| Do | Don't |
|---|---|
| Use tabs for peer sections of one thing | Use tabs as navigation between pages |
| Keep labels to one or two words | Put counts or long phrases in a tab |
| Prefer automatic activation | Use manual activation unless panels are heavy |
