# Empty

Use the Empty component to display a empty state. shadcn/ui parity.

## Preview

<Preview frame="stack">
  <art-empty>
    <art-icon slot="media" size="lg"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg></art-icon>
    <h3 slot="title">No projects yet</h3>
    <p slot="description">You haven't created any projects yet. Get started by creating your first project.</p>
    <art-button>Create project</art-button>
  </art-empty>
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
<<< ../../../sandbox/html/src/samples/empty/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/empty/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/empty/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/empty/basic.ts [Angular]
:::

Slot an icon or image as `media`, a heading as `title`, text as `description`, and the actions in the default slot.

## Examples

### Basic

An `art-icon` in the `media` slot gets a muted rounded box; title, description and actions stack under it.

<Preview frame="stack">
  <art-empty>
    <art-icon slot="media" size="lg"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg></art-icon>
    <h3 slot="title">No projects yet</h3>
    <p slot="description">You haven't created any projects yet. Get started by creating your first project.</p>
    <art-button>Create project</art-button>
  </art-empty>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/empty/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/empty/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/empty/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/empty/basic.ts [Angular]
:::

### With actions

<Preview frame="stack">
  <art-empty>
    <art-icon slot="media" size="lg"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg></art-icon>
    <h3 slot="title">No notifications</h3>
    <p slot="description">You're all caught up. New notifications will appear here.</p>
    <art-button-group>
      <art-button variant="outline">Settings</art-button>
      <art-button variant="outline">Learn more</art-button>
    </art-button-group>
  </art-empty>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/empty/with-actions.html [HTML]
<<< ../../../sandbox/react/src/samples/empty/with-actions.tsx [React]
<<< ../../../sandbox/vue/src/samples/empty/with-actions.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/empty/with-actions.ts [Angular]
:::

### Without media

<Preview frame="stack">
  <art-empty>
    <h3 slot="title">Nothing to show</h3>
    <p slot="description">Try adjusting your filters.</p>
    <art-button variant="link">Clear filters</art-button>
  </art-empty>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/empty/without-media.html [HTML]
<<< ../../../sandbox/react/src/samples/empty/without-media.tsx [React]
<<< ../../../sandbox/vue/src/samples/empty/without-media.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/empty/without-media.ts [Angular]
:::

### In a card

<Preview frame="stack">
  <art-card>
    <art-empty>
      <art-icon slot="media" size="lg"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg></art-icon>
      <h3 slot="title">No files</h3>
      <p slot="description">Upload a file to get started.</p>
      <art-button variant="outline">Upload</art-button>
    </art-empty>
  </art-card>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/empty/in-card.html [HTML]
<<< ../../../sandbox/react/src/samples/empty/in-card.tsx [React]
<<< ../../../sandbox/vue/src/samples/empty/in-card.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/empty/in-card.ts [Angular]
:::

## API Reference

<ApiReference tag="art-empty" />

## Accessibility

| Key | Action |
|---|---|
| `None` | The state itself is not focusable; its buttons are |

No role. Use a real heading for the title; the icon is decorative (`art-icon` without `label` is `aria-hidden`). Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/).

States: Not interactive — no states.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-space-6`, `--art-space-12`, `--art-space-4`, `--art-space-2`` | padding and gaps |
| ``--art-space-10`, `--art-radius-lg`, `--art-color-bg-muted`` | icon box |
| ``--art-font-size-lg`, `--art-font-weight-medium`, `--art-font-tracking-tight`` | title |
| ``--art-font-size-sm`, `--art-color-fg-muted`` | description |
| ``--art-container-sm`` | text measure |

## Do / Don't

| Do | Don't |
|---|---|
| Say what to do next and offer the action | Show “No data” and nothing else |
| Keep the description to one sentence | Explain the whole feature in the empty state |
