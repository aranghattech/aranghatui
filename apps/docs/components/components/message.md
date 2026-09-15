# Message

Displays a message in a conversation with avatar, header, bubble and footer. shadcn/ui parity: a layout wrapper around Bubble.

## Preview

<Preview frame="thread">
  <art-message>
    <art-avatar slot="avatar" size="sm" alt="">AL</art-avatar>
    <art-bubble variant="muted">Hey! Are we still on for lunch tomorrow?</art-bubble>
  </art-message>
  <art-message align="end">
    <art-avatar slot="avatar" size="sm" alt="">ME</art-avatar>
    <art-bubble>Yes — 12:30 at the usual place.</art-bubble>
  </art-message>
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
<<< ../../../sandbox/html/src/samples/message/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/message/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/message/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/message/basic.ts [Angular]
:::

Put an `art-avatar` in the `avatar` slot, text in `header` / `footer`, and an `art-bubble` (or `art-bubble-group`, attachments) in the default slot. `align="end"` for the current user. Wrap runs from one sender in `art-message-group`.

## Examples

### Basic

The avatar hugs the bottom of the bubble; `align="end"` mirrors the row for the current user.

<Preview frame="thread">
  <art-message>
    <art-avatar slot="avatar" size="sm" alt="">AL</art-avatar>
    <art-bubble variant="muted">Hey! Are we still on for lunch tomorrow?</art-bubble>
  </art-message>
  <art-message align="end">
    <art-avatar slot="avatar" size="sm" alt="">ME</art-avatar>
    <art-bubble>Yes — 12:30 at the usual place.</art-bubble>
  </art-message>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/message/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/message/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/message/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/message/basic.ts [Angular]
:::

### Grouped messages

One avatar for a run of bubbles: put an `art-bubble-group` inside the message.

<Preview frame="thread">
  <art-message-group>
    <art-message>
      <art-avatar slot="avatar" size="sm" alt="">AL</art-avatar>
      <art-bubble-group>
        <art-bubble variant="muted">I pushed the fix.</art-bubble>
        <art-bubble variant="muted">CI is green.</art-bubble>
        <art-bubble variant="muted">Ready for review whenever you are.</art-bubble>
      </art-bubble-group>
    </art-message>
  </art-message-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/message/group.html [HTML]
<<< ../../../sandbox/react/src/samples/message/group.tsx [React]
<<< ../../../sandbox/vue/src/samples/message/group.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/message/group.ts [Angular]
:::

### Header and footer

Header and footer are muted small text aligned with the bubble's padding (and with the text for a ghost bubble). Use `art-marker` with `role="status"` for progress the screen reader should announce.

<Preview frame="thread">
  <art-message>
    <art-avatar slot="avatar" size="sm" alt="">AL</art-avatar>
    <span slot="header">Ada Lovelace · 09:41</span>
    <art-bubble variant="muted">The analytical engine has no pretensions to originate anything.</art-bubble>
    <span slot="footer">Delivered</span>
  </art-message>
  <art-message align="end">
    <art-avatar slot="avatar" size="sm" alt="">ME</art-avatar>
    <span slot="header">You · 09:42</span>
    <art-bubble>It can do whatever we know how to order it to perform.</art-bubble>
    <art-marker slot="footer" role="status">Sending…</art-marker>
  </art-message>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/message/header-footer.html [HTML]
<<< ../../../sandbox/react/src/samples/message/header-footer.tsx [React]
<<< ../../../sandbox/vue/src/samples/message/header-footer.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/message/header-footer.ts [Angular]
:::

### Action buttons

Footer buttons are icon-only ghost buttons with an `aria-label`. A `ghost` bubble suits assistant prose.

<Preview frame="thread">
  <art-message>
    <art-avatar slot="avatar" size="sm" alt="">AI</art-avatar>
    <art-bubble variant="ghost">Here is a summary of the document you shared: it covers three quarters of results and ends with next year's targets.</art-bubble>
    <art-button slot="footer" variant="ghost" size="sm" icon aria-label="Copy"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg></art-icon></art-button>
    <art-button slot="footer" variant="ghost" size="sm" icon aria-label="Retry"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg></art-icon></art-button>
  </art-message>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/message/actions.html [HTML]
<<< ../../../sandbox/react/src/samples/message/actions.tsx [React]
<<< ../../../sandbox/vue/src/samples/message/actions.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/message/actions.ts [Angular]
:::

### Attachments

Anything in the default slot stacks under the bubble and follows the alignment.

<Preview frame="thread">
  <art-message align="end">
    <art-avatar slot="avatar" size="sm" alt="">ME</art-avatar>
    <art-bubble>Here are the files.</art-bubble>
    <art-attachment name="q3-results.pdf" description="PDF · 1.2 MB"></art-attachment>
  </art-message>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/message/attachments.html [HTML]
<<< ../../../sandbox/react/src/samples/message/attachments.tsx [React]
<<< ../../../sandbox/vue/src/samples/message/attachments.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/message/attachments.ts [Angular]
:::

## API Reference

<ApiReference tag="art-message" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Reaches buttons and links inside the message (footer actions, link bubbles) |

A layout wrapper: the content decides the semantics. Icon-only footer buttons need `aria-label`; use `art-marker` with `role="status"` for in-progress states so they are announced. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/).

States: None of the interactive states apply to the row itself; buttons and link bubbles inside carry their own.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-space-2`, `--art-space-2-5`, `--art-space-3`, `--art-space-8`` | row gap, column gap, header / footer inset, avatar lift |
| ``--art-font-size-sm`, `--art-font-size-xs`, `--art-font-weight-medium`, `--art-color-fg-muted`` | text, header and footer |

## Do / Don't

| Do | Don't |
|---|---|
| Show one avatar per run of messages (group them) | Repeat the avatar on every bubble |
| Put timestamps and status in the header / footer | Put them inside the bubble text |
| Label icon-only actions | Ship unlabeled icon buttons |
