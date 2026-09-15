# Bubble

Displays conversational content in a message bubble. shadcn/ui parity: seven variants, alignment, reactions and grouping.

## Preview

<Preview frame="thread">
  <art-bubble>Hey! Are we still on for lunch tomorrow?</art-bubble>
  <art-bubble variant="muted" align="end">Yes — 12:30 at the usual place.<span slot="reactions" role="img" aria-label="thumbs up">👍</span></art-bubble>
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
<<< ../../../sandbox/html/src/samples/bubble/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/bubble/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/bubble/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/bubble/basic.ts [Angular]
:::

Put the text (or media) inside; set `variant` and `align`. Add `<span slot="reactions">` for a reactions pill and wrap consecutive bubbles in `art-bubble-group`. Compose with `art-message` for avatar, header and footer.

## Examples

### Basic

A bubble takes up to 80 % of its row; `align="end"` puts it on the sender's side. Reactions hang off an edge in a pill.

<Preview frame="thread">
  <art-bubble>Hey! Are we still on for lunch tomorrow?</art-bubble>
  <art-bubble variant="muted" align="end">Yes — 12:30 at the usual place.<span slot="reactions" role="img" aria-label="thumbs up">👍</span></art-bubble>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/bubble/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/bubble/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/bubble/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/bubble/basic.ts [Angular]
:::

### Variants

`default` is the primary fill for the sender; `muted` / `secondary` for the other side; `tinted` is a light primary wash; `outline`, `ghost` (no surface) and `destructive` for system or error content.

<Preview frame="thread">
  <art-bubble variant="default">Default bubble</art-bubble>
  <art-bubble variant="secondary">Secondary bubble</art-bubble>
  <art-bubble variant="muted">Muted bubble</art-bubble>
  <art-bubble variant="tinted">Tinted bubble</art-bubble>
  <art-bubble variant="outline">Outline bubble</art-bubble>
  <art-bubble variant="ghost">Ghost bubble</art-bubble>
  <art-bubble variant="destructive">Destructive bubble</art-bubble>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/bubble/variants.html [HTML]
<<< ../../../sandbox/react/src/samples/bubble/variants.tsx [React]
<<< ../../../sandbox/vue/src/samples/bubble/variants.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/bubble/variants.ts [Angular]
:::

### Alignment

<Preview frame="thread">
  <art-bubble variant="muted">Received on the start side.</art-bubble>
  <art-bubble align="end">Sent on the end side.</art-bubble>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/bubble/alignment.html [HTML]
<<< ../../../sandbox/react/src/samples/bubble/alignment.tsx [React]
<<< ../../../sandbox/vue/src/samples/bubble/alignment.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/bubble/alignment.ts [Angular]
:::

### Bubble group

`art-bubble-group` stacks consecutive bubbles from one sender with a tighter gap.

<Preview frame="thread">
  <art-bubble-group>
    <art-bubble variant="muted">First of three.</art-bubble>
    <art-bubble variant="muted">Second, from the same sender.</art-bubble>
    <art-bubble variant="muted">Third.</art-bubble>
  </art-bubble-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/bubble/group.html [HTML]
<<< ../../../sandbox/react/src/samples/bubble/group.tsx [React]
<<< ../../../sandbox/vue/src/samples/bubble/group.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/bubble/group.ts [Angular]
:::

### Links and buttons

A bubble with `href` is one big link with the focus ring and a hover tint; a link inside the text stays a normal link.

<Preview frame="thread">
  <art-bubble variant="outline" href="https://example.com" target="_blank" rel="noreferrer">Open the shared document ↗</art-bubble>
  <art-bubble variant="muted">Reply with <a href="#">a link</a> inside the text.</art-bubble>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/bubble/links.html [HTML]
<<< ../../../sandbox/react/src/samples/bubble/links.tsx [React]
<<< ../../../sandbox/vue/src/samples/bubble/links.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/bubble/links.ts [Angular]
:::

### Reactions

Give the reactions slot `role="img"` and an `aria-label` so screen readers hear one unit.

<Preview frame="thread">
  <art-bubble variant="muted" reactions-side="bottom" reactions-align="start"><span>Reactions at the bottom start.</span><span slot="reactions" role="img" aria-label="heart and fire">❤️ 🔥</span></art-bubble>
  <art-bubble align="end" reactions-side="top" reactions-align="end"><span>Reactions at the top end.</span><span slot="reactions" role="img" aria-label="3 laughing">😂 3</span></art-bubble>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/bubble/reactions.html [HTML]
<<< ../../../sandbox/react/src/samples/bubble/reactions.tsx [React]
<<< ../../../sandbox/vue/src/samples/bubble/reactions.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/bubble/reactions.ts [Angular]
:::

## API Reference

<ApiReference tag="art-bubble" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Reaches a bubble with `href` (and any link or button inside) |
| `Enter` | Follows the link |

A bubble is plain content; with `href` its surface is an `<a>`. Reactions should carry `role="img"` and an `aria-label`. Meaning must not rely on colour alone — the alignment and text carry it. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/link/).

States: Only `hover` and `focus-visible` apply, and only to a bubble with `href` (or links inside). `active`, `disabled`, `loading` and `invalid` do not apply to static content.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-color-primary-solid`, `--art-color-primary-hover`, `--art-color-fg-on-primary`` | default variant |
| ``--art-color-secondary-solid`, `--art-color-secondary-fg`, `--art-color-bg-muted`, `--art-color-bg-canvas`, `--art-color-border-default`` | secondary, muted, tinted, outline |
| ``--art-color-destructive-muted`, `--art-color-destructive-fg`` | destructive |
| ``--art-radius-xl`, `--art-space-3`, `--art-space-2`, `--art-space-1`, `--art-font-size-sm`, `--art-font-line-height-relaxed`` | surface |
| ``--art-ring-width`, `--art-space-1-5`, `--art-space-0-5`` | reactions pill |

## Do / Don't

| Do | Don't |
|---|---|
| Use `default` for the current user and `muted` for others | Give every sender the primary fill |
| Keep one idea per bubble; group consecutive ones | Put a whole thread in one bubble |
| Label reactions for screen readers | Rely on the emoji glyph alone |
