# Empty / 404 / 500 States

Full-page empty, 404 and 500 states: a centred Empty with an optional status code, default copy per kind, media and actions. Compiled widget (ADR-0010).

## Preview

<Preview frame="shell">
  <art-state-page>
    <art-icon slot="media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg></art-icon>
    <art-button slot="actions">Create project</art-button>
  </art-state-page>
</Preview>

## Installation

Lives in `@aranghat/widgets` (requires `@aranghat/base`).

::: code-group
```bash [HTML]
pnpm add @aranghat/tokens @aranghat/widgets @aranghat/base
```
```bash [React]
pnpm add @aranghat/tokens @aranghat/widgets @aranghat/base @aranghat/widgets-react
```
```bash [Vue]
pnpm add @aranghat/tokens @aranghat/widgets @aranghat/base @aranghat/widgets-vue
```
```bash [Angular]
pnpm add @aranghat/tokens @aranghat/widgets @aranghat/base @aranghat/widgets-angular
```
:::

## Usage

::: code-group
<<< ../../../sandbox/html/src/samples/state-page/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/state-page/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/state-page/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/state-page/basic.ts [Angular]
:::

Place `<art-state-page kind="not-found" code="404">` where the page content would be; put an `art-icon` in `media`, buttons in `actions`, anything else in the default slot. `heading` and `description` override the default copy. React `<StatePage kind code>`, Vue and Angular likewise.

## Examples

### Empty

The default `kind="empty"` copy with a media icon and an action. Override `heading` and `description` for your own words.

<Preview frame="shell">
  <art-state-page>
    <art-icon slot="media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg></art-icon>
    <art-button slot="actions">Create project</art-button>
  </art-state-page>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/state-page/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/state-page/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/state-page/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/state-page/basic.ts [Angular]
:::

### Not found (404)

`kind="not-found"` with `code="404"`; the code sits above the heading.

<Preview frame="shell">
  <art-state-page kind="not-found" code="404">
    <art-icon slot="media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg></art-icon>
    <art-button slot="actions" href="#">Go home</art-button>
    <art-button slot="actions" variant="outline" href="#">Contact support</art-button>
  </art-state-page>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/state-page/not-found.html [HTML]
<<< ../../../sandbox/react/src/samples/state-page/not-found.tsx [React]
<<< ../../../sandbox/vue/src/samples/state-page/not-found.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/state-page/not-found.ts [Angular]
:::

### Error (500)

`kind="error"` with `code="500"`, a custom description and extra content (a request id) in the default slot.

<Preview frame="shell">
  <art-state-page kind="error" code="500" description="Our servers had a hiccup. Try again in a moment — if it keeps happening, tell us.">
    <art-icon slot="media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg></art-icon>
    <art-button slot="actions">Try again</art-button>
    <span style="font-size: var(--art-font-size-xs); color: var(--art-color-fg-muted)">Request id 8f3c-21ab</span>
  </art-state-page>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/state-page/error.html [HTML]
<<< ../../../sandbox/react/src/samples/state-page/error.tsx [React]
<<< ../../../sandbox/vue/src/samples/state-page/error.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/state-page/error.ts [Angular]
:::

## API Reference

<ApiReference tag="art-state-page" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | The action buttons and any link in the content |
| `Enter / Space` | Activate |

Static content: the `art-empty` renders the heading and description; the code is plain text before the heading so it is read with it. Actions are the slotted buttons. Pattern: [APG](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html).

States: Three kinds (empty, not-found, error). Interactive states belong to the actions.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-container-md`, `--art-space-6`, `--art-space-2`` | width, padding, gaps |
| ``--art-font-size-4xl`, `--art-font-line-height-4xl`, `--art-font-tracking-tight`, `--art-font-weight-semibold`, `--art-color-fg-muted`` | the status code |
| `(Empty tokens)` | media box, heading, description |

## Do / Don't

| Do | Don't |
|---|---|
| Say what happened and what to do next | Show a bare "404" |
| Offer one primary way out | List every page of the app |
| Keep the code for real HTTP states | Invent codes for empty lists |
