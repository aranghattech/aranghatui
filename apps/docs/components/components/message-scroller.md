# Message Scroller

A transcript scroller for streaming conversations that keeps the reader where they are. shadcn/ui parity: following, anchoring, prepend preservation and a jump-to-latest button.

## Preview

<Preview frame="stack">
  <art-message-scroller aria-label="Chat" style="height: var(--art-space-24); height: calc(var(--art-space-20) * 4)">
    <art-message-scroller-item message-id="m1-preview" scroll-anchor>
      <art-message align="end">
        <art-avatar slot="avatar" size="sm" alt="">ME</art-avatar>
        <art-bubble>Question 1: could you expand on the previous point?</art-bubble>
      </art-message>
    </art-message-scroller-item>
    <art-message-scroller-item message-id="m2-preview">
      <art-message>
        <art-avatar slot="avatar" size="sm" alt="">AI</art-avatar>
        <art-bubble variant="muted">Answer 2: certainly. The main idea is that the reader's position is sacred, so the transcript only moves when they are already following the live edge.</art-bubble>
      </art-message>
    </art-message-scroller-item>
    <art-message-scroller-item message-id="m3-preview" scroll-anchor>
      <art-message align="end">
        <art-avatar slot="avatar" size="sm" alt="">ME</art-avatar>
        <art-bubble>Question 3: could you expand on the previous point?</art-bubble>
      </art-message>
    </art-message-scroller-item>
    <art-message-scroller-item message-id="m4-preview">
      <art-message>
        <art-avatar slot="avatar" size="sm" alt="">AI</art-avatar>
        <art-bubble variant="muted">Answer 4: certainly. The main idea is that the reader's position is sacred, so the transcript only moves when they are already following the live edge.</art-bubble>
      </art-message>
    </art-message-scroller-item>
    <art-message-scroller-item message-id="m5-preview" scroll-anchor>
      <art-message align="end">
        <art-avatar slot="avatar" size="sm" alt="">ME</art-avatar>
        <art-bubble>Question 5: could you expand on the previous point?</art-bubble>
      </art-message>
    </art-message-scroller-item>
    <art-message-scroller-item message-id="m6-preview">
      <art-message>
        <art-avatar slot="avatar" size="sm" alt="">AI</art-avatar>
        <art-bubble variant="muted">Answer 6: certainly. The main idea is that the reader's position is sacred, so the transcript only moves when they are already following the live edge.</art-bubble>
      </art-message>
    </art-message-scroller-item>
    <art-message-scroller-item message-id="m7-preview" scroll-anchor>
      <art-message align="end">
        <art-avatar slot="avatar" size="sm" alt="">ME</art-avatar>
        <art-bubble>Question 7: could you expand on the previous point?</art-bubble>
      </art-message>
    </art-message-scroller-item>
    <art-message-scroller-item message-id="m8-preview">
      <art-message>
        <art-avatar slot="avatar" size="sm" alt="">AI</art-avatar>
        <art-bubble variant="muted">Answer 8: certainly. The main idea is that the reader's position is sacred, so the transcript only moves when they are already following the live edge.</art-bubble>
      </art-message>
    </art-message-scroller-item>
  </art-message-scroller>
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
<<< ../../../sandbox/html/src/samples/message-scroller/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/message-scroller/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/message-scroller/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/message-scroller/basic.ts [Angular]
:::

Wrap each turn in `art-message-scroller-item` (with `message-id`, and `scroll-anchor` on the rows that start a turn) and give the scroller a height. Append rows as they arrive; listen to `scroll-state-change` for `atEnd` / `following`; call `scrollToEnd()`, `scrollToStart()` or `scrollToMessage(id)`. React `onScrollStateChange`, Vue `@scroll-state-change`, Angular `(scrollStateChange)`.

## Examples

### Basic

Give the scroller a height. It opens on the latest message; scroll up and the jump button appears; press it (or `scrollToEnd()`) to follow again.

<Preview frame="stack">
  <art-message-scroller aria-label="Chat" style="height: var(--art-space-24); height: calc(var(--art-space-20) * 4)">
    <art-message-scroller-item message-id="m1" scroll-anchor>
      <art-message align="end">
        <art-avatar slot="avatar" size="sm" alt="">ME</art-avatar>
        <art-bubble>Question 1: could you expand on the previous point?</art-bubble>
      </art-message>
    </art-message-scroller-item>
    <art-message-scroller-item message-id="m2">
      <art-message>
        <art-avatar slot="avatar" size="sm" alt="">AI</art-avatar>
        <art-bubble variant="muted">Answer 2: certainly. The main idea is that the reader's position is sacred, so the transcript only moves when they are already following the live edge.</art-bubble>
      </art-message>
    </art-message-scroller-item>
    <art-message-scroller-item message-id="m3" scroll-anchor>
      <art-message align="end">
        <art-avatar slot="avatar" size="sm" alt="">ME</art-avatar>
        <art-bubble>Question 3: could you expand on the previous point?</art-bubble>
      </art-message>
    </art-message-scroller-item>
    <art-message-scroller-item message-id="m4">
      <art-message>
        <art-avatar slot="avatar" size="sm" alt="">AI</art-avatar>
        <art-bubble variant="muted">Answer 4: certainly. The main idea is that the reader's position is sacred, so the transcript only moves when they are already following the live edge.</art-bubble>
      </art-message>
    </art-message-scroller-item>
    <art-message-scroller-item message-id="m5" scroll-anchor>
      <art-message align="end">
        <art-avatar slot="avatar" size="sm" alt="">ME</art-avatar>
        <art-bubble>Question 5: could you expand on the previous point?</art-bubble>
      </art-message>
    </art-message-scroller-item>
    <art-message-scroller-item message-id="m6">
      <art-message>
        <art-avatar slot="avatar" size="sm" alt="">AI</art-avatar>
        <art-bubble variant="muted">Answer 6: certainly. The main idea is that the reader's position is sacred, so the transcript only moves when they are already following the live edge.</art-bubble>
      </art-message>
    </art-message-scroller-item>
    <art-message-scroller-item message-id="m7" scroll-anchor>
      <art-message align="end">
        <art-avatar slot="avatar" size="sm" alt="">ME</art-avatar>
        <art-bubble>Question 7: could you expand on the previous point?</art-bubble>
      </art-message>
    </art-message-scroller-item>
    <art-message-scroller-item message-id="m8">
      <art-message>
        <art-avatar slot="avatar" size="sm" alt="">AI</art-avatar>
        <art-bubble variant="muted">Answer 8: certainly. The main idea is that the reader's position is sacred, so the transcript only moves when they are already following the live edge.</art-bubble>
      </art-message>
    </art-message-scroller-item>
  </art-message-scroller>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/message-scroller/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/message-scroller/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/message-scroller/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/message-scroller/basic.ts [Angular]
:::

### Opening at the start

`default-scroll-position="start"` for reading a saved thread from the top; `"last-anchor"` opens on the last turn with context above it.

<Preview frame="stack">
  <art-message-scroller default-scroll-position="start" style="height: var(--art-space-24); height: calc(var(--art-space-20) * 4)">
    <art-message-scroller-item message-id="m1" scroll-anchor>
      <art-message align="end">
        <art-avatar slot="avatar" size="sm" alt="">ME</art-avatar>
        <art-bubble>Question 1: could you expand on the previous point?</art-bubble>
      </art-message>
    </art-message-scroller-item>
    <art-message-scroller-item message-id="m2">
      <art-message>
        <art-avatar slot="avatar" size="sm" alt="">AI</art-avatar>
        <art-bubble variant="muted">Answer 2: certainly. The main idea is that the reader's position is sacred, so the transcript only moves when they are already following the live edge.</art-bubble>
      </art-message>
    </art-message-scroller-item>
    <art-message-scroller-item message-id="m3" scroll-anchor>
      <art-message align="end">
        <art-avatar slot="avatar" size="sm" alt="">ME</art-avatar>
        <art-bubble>Question 3: could you expand on the previous point?</art-bubble>
      </art-message>
    </art-message-scroller-item>
    <art-message-scroller-item message-id="m4">
      <art-message>
        <art-avatar slot="avatar" size="sm" alt="">AI</art-avatar>
        <art-bubble variant="muted">Answer 4: certainly. The main idea is that the reader's position is sacred, so the transcript only moves when they are already following the live edge.</art-bubble>
      </art-message>
    </art-message-scroller-item>
    <art-message-scroller-item message-id="m5" scroll-anchor>
      <art-message align="end">
        <art-avatar slot="avatar" size="sm" alt="">ME</art-avatar>
        <art-bubble>Question 5: could you expand on the previous point?</art-bubble>
      </art-message>
    </art-message-scroller-item>
    <art-message-scroller-item message-id="m6">
      <art-message>
        <art-avatar slot="avatar" size="sm" alt="">AI</art-avatar>
        <art-bubble variant="muted">Answer 6: certainly. The main idea is that the reader's position is sacred, so the transcript only moves when they are already following the live edge.</art-bubble>
      </art-message>
    </art-message-scroller-item>
  </art-message-scroller>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/message-scroller/open-at-start.html [HTML]
<<< ../../../sandbox/react/src/samples/message-scroller/open-at-start.tsx [React]
<<< ../../../sandbox/vue/src/samples/message-scroller/open-at-start.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/message-scroller/open-at-start.ts [Angular]
:::

### Following a stream

Append an `art-message-scroller-item` with `scroll-anchor` for each new turn: it lands near the top with a peek of the previous row, and the reply streaming below stays in view while the reader follows. Scrolling up stops following; the button brings them back.

<Preview frame="stack">
  <art-message-scroller id="stream" style="height: var(--art-space-24); height: calc(var(--art-space-20) * 4)">
    <art-message-scroller-item message-id="m1" scroll-anchor>
      <art-message align="end">
        <art-avatar slot="avatar" size="sm" alt="">ME</art-avatar>
        <art-bubble>Question 1: could you expand on the previous point?</art-bubble>
      </art-message>
    </art-message-scroller-item>
    <art-message-scroller-item message-id="m2">
      <art-message>
        <art-avatar slot="avatar" size="sm" alt="">AI</art-avatar>
        <art-bubble variant="muted">Answer 2: certainly. The main idea is that the reader's position is sacred, so the transcript only moves when they are already following the live edge.</art-bubble>
      </art-message>
    </art-message-scroller-item>
    <art-message-scroller-item message-id="m3" scroll-anchor>
      <art-message align="end">
        <art-avatar slot="avatar" size="sm" alt="">ME</art-avatar>
        <art-bubble>Question 3: could you expand on the previous point?</art-bubble>
      </art-message>
    </art-message-scroller-item>
    <art-message-scroller-item message-id="m4">
      <art-message>
        <art-avatar slot="avatar" size="sm" alt="">AI</art-avatar>
        <art-bubble variant="muted">Answer 4: certainly. The main idea is that the reader's position is sacred, so the transcript only moves when they are already following the live edge.</art-bubble>
      </art-message>
    </art-message-scroller-item>
  </art-message-scroller>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/message-scroller/streaming.html [HTML]
<<< ../../../sandbox/react/src/samples/message-scroller/streaming.tsx [React]
<<< ../../../sandbox/vue/src/samples/message-scroller/streaming.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/message-scroller/streaming.ts [Angular]
:::

### Loading earlier messages

Rows inserted before the first one keep the visible row exactly where it was — no jump.

<Preview frame="stack">
  <art-message-scroller id="history" style="height: var(--art-space-24); height: calc(var(--art-space-20) * 4)">
    <art-message-scroller-item message-id="m1" scroll-anchor>
      <art-message align="end">
        <art-avatar slot="avatar" size="sm" alt="">ME</art-avatar>
        <art-bubble>Question 1: could you expand on the previous point?</art-bubble>
      </art-message>
    </art-message-scroller-item>
    <art-message-scroller-item message-id="m2">
      <art-message>
        <art-avatar slot="avatar" size="sm" alt="">AI</art-avatar>
        <art-bubble variant="muted">Answer 2: certainly. The main idea is that the reader's position is sacred, so the transcript only moves when they are already following the live edge.</art-bubble>
      </art-message>
    </art-message-scroller-item>
    <art-message-scroller-item message-id="m3" scroll-anchor>
      <art-message align="end">
        <art-avatar slot="avatar" size="sm" alt="">ME</art-avatar>
        <art-bubble>Question 3: could you expand on the previous point?</art-bubble>
      </art-message>
    </art-message-scroller-item>
    <art-message-scroller-item message-id="m4">
      <art-message>
        <art-avatar slot="avatar" size="sm" alt="">AI</art-avatar>
        <art-bubble variant="muted">Answer 4: certainly. The main idea is that the reader's position is sacred, so the transcript only moves when they are already following the live edge.</art-bubble>
      </art-message>
    </art-message-scroller-item>
    <art-message-scroller-item message-id="m5" scroll-anchor>
      <art-message align="end">
        <art-avatar slot="avatar" size="sm" alt="">ME</art-avatar>
        <art-bubble>Question 5: could you expand on the previous point?</art-bubble>
      </art-message>
    </art-message-scroller-item>
    <art-message-scroller-item message-id="m6">
      <art-message>
        <art-avatar slot="avatar" size="sm" alt="">AI</art-avatar>
        <art-bubble variant="muted">Answer 6: certainly. The main idea is that the reader's position is sacred, so the transcript only moves when they are already following the live edge.</art-bubble>
      </art-message>
    </art-message-scroller-item>
  </art-message-scroller>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/message-scroller/load-earlier.html [HTML]
<<< ../../../sandbox/react/src/samples/message-scroller/load-earlier.tsx [React]
<<< ../../../sandbox/vue/src/samples/message-scroller/load-earlier.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/message-scroller/load-earlier.ts [Angular]
:::

## API Reference

<ApiReference tag="art-message-scroller" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focus the viewport (then the jump button when it is shown) |
| `↑ / ↓, Page Up / Down, Home / End` | Scroll the focused viewport; scrolling up stops following |
| `Enter / Space on the button` | Jump to the latest message and follow again |

The viewport is a focusable `role="region"` named by `label`; the transcript is `role="log"` with `aria-relevant="additions"` so new rows are announced; the jump button is inert and out of the tab order while hidden. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/feed/).

States: `focus-visible` on the viewport and the button; the button shows / hides with motion. `hover`, `active`, `disabled`, `loading` and `invalid` do not apply.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-space-8`` | gap between turns |
| ``--art-space-4`` | button offset from the bottom |
| ``--art-color-border-default`` | thin scrollbar |
| ``--art-control-height-sm`, `--art-color-secondary-solid`, `--art-color-secondary-fg`, `--art-color-secondary-hover`, `--art-shadow-raised`, `--art-radius-full`` | jump button |
| ``--art-duration-base`, `--art-ease-out`` | button motion |
| ``--art-ring-width`, `--art-ring-offset`, `--art-color-ring`` | focus ring |

## Do / Don't

| Do | Don't |
|---|---|
| Mark the row that starts a turn with `scroll-anchor` | Anchor every row |
| Give rows a stable `message-id` | Re-create rows on every render |
| Keep the scroller's height bounded by its parent | Let it grow with its content (nothing to scroll) |
