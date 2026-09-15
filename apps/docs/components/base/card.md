# Card

Displays a card with header, content, and footer. shadcn/ui parity.

## Preview

<Preview frame="stack">
  <art-card>
    <h3 slot="title">Card title</h3>
    <p slot="description">Card description</p>
    <p>Card content</p>
    <p slot="footer">Card footer</p>
  </art-card>
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
<<< ../../../sandbox/html/src/samples/card/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/card/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/card/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/card/basic.ts [Angular]
:::

Slot a heading as `title`, text as `description`, a control as `action`, anything as content, and buttons as `footer`. Empty regions collapse.

## Examples

### Basic

Title, description, content and footer each go in their slot; a region that is not filled takes no space.

<Preview frame="stack">
  <art-card>
    <h3 slot="title">Card title</h3>
    <p slot="description">Card description</p>
    <p>Card content</p>
    <p slot="footer">Card footer</p>
  </art-card>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/card/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/card/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/card/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/card/basic.ts [Angular]
:::

### With action

<Preview frame="stack">
  <art-card>
    <h3 slot="title">Notifications</h3>
    <p slot="description">You have 3 unread messages.</p>
    <art-button slot="action" variant="ghost" size="sm">Mark all read</art-button>
    <p>Your inbox is quiet today.</p>
  </art-card>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/card/with-action.html [HTML]
<<< ../../../sandbox/react/src/samples/card/with-action.tsx [React]
<<< ../../../sandbox/vue/src/samples/card/with-action.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/card/with-action.ts [Angular]
:::

### Login form

Cards compose with Field, Input and Button; the footer lays its buttons out in a row.

<Preview frame="stack">
  <art-card>
    <h3 slot="title">Login to your account</h3>
    <p slot="description">Enter your email below to login to your account</p>
    <art-button slot="action" variant="link">Sign up</art-button>
    <art-field-group>
      <art-field>
        <art-label slot="label">Email</art-label>
        <art-input type="email" placeholder="m@example.com"></art-input>
      </art-field>
      <art-field>
        <art-label slot="label">Password</art-label>
        <art-input type="password"></art-input>
      </art-field>
    </art-field-group>
    <art-button slot="footer">Login</art-button>
    <art-button slot="footer" variant="outline">Login with Google</art-button>
  </art-card>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/card/login.html [HTML]
<<< ../../../sandbox/react/src/samples/card/login.tsx [React]
<<< ../../../sandbox/vue/src/samples/card/login.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/card/login.ts [Angular]
:::

### Content only

<Preview frame="stack">
  <art-card>
    <p>Just content — no header, no footer.</p>
  </art-card>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/card/content-only.html [HTML]
<<< ../../../sandbox/react/src/samples/card/content-only.tsx [React]
<<< ../../../sandbox/vue/src/samples/card/content-only.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/card/content-only.ts [Angular]
:::

## API Reference

<ApiReference tag="art-card" />

## Accessibility

| Key | Action |
|---|---|
| `None` | The card itself is not focusable; its controls are |

No role — a card is a visual grouping. Use a real heading element for the title so the page outline stays meaningful. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/).

States: Not interactive — no states.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-color-bg-surface`, `--art-color-fg-default`` | surface and text |
| ``--art-color-border-default`, `--art-border-width`, `--art-radius-xl`, `--art-shadow-raised`` | frame |
| ``--art-space-6`, `--art-space-2`` | padding and gaps |
| ``--art-font-weight-semibold`, `--art-font-size-sm`, `--art-color-fg-muted`` | title and description |

## Do / Don't

| Do | Don't |
|---|---|
| One topic per card | Nest cards inside cards |
| Use a heading element for the title | Style a `<div>` to look like a heading |
| Keep footer actions to two | Line up five buttons in a footer |
