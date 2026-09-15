# Textarea

Displays a form textarea or a component that looks like a textarea. Grows with its content. shadcn/ui parity, form-associated.

## Preview

<Preview frame="stack">
  <art-textarea placeholder="Type your message here." aria-label="Message"></art-textarea>
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
<<< ../../../sandbox/html/src/samples/textarea/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/textarea/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/textarea/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/textarea/basic.ts [Angular]
:::

Same event contract as Input: `input` per keystroke, `change` on commit, both from the host with `detail.value`; `v-model` and `ngModel` work out of the box.

## Examples

### Basic

<Preview frame="stack">
  <art-textarea placeholder="Type your message here." aria-label="Message"></art-textarea>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/textarea/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/textarea/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/textarea/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/textarea/basic.ts [Angular]
:::

### With label

<Preview frame="stack">
  <art-label for="message">Your message</art-label>
  <art-textarea id="message" placeholder="Type your message here."></art-textarea>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/textarea/with-label.html [HTML]
<<< ../../../sandbox/react/src/samples/textarea/with-label.tsx [React]
<<< ../../../sandbox/vue/src/samples/textarea/with-label.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/textarea/with-label.ts [Angular]
:::

### With text

<Preview frame="stack">
  <art-label for="message-2">Your message</art-label>
  <art-textarea id="message-2" placeholder="Type your message here." aria-describedby="message-2-help"></art-textarea>
  <p id="message-2-help">Your message will be copied to the support team.</p>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/textarea/with-text.html [HTML]
<<< ../../../sandbox/react/src/samples/textarea/with-text.tsx [React]
<<< ../../../sandbox/vue/src/samples/textarea/with-text.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/textarea/with-text.ts [Angular]
:::

### Disabled

<Preview frame="stack">
  <art-textarea placeholder="Type your message here." aria-label="Message" disabled></art-textarea>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/textarea/disabled.html [HTML]
<<< ../../../sandbox/react/src/samples/textarea/disabled.tsx [React]
<<< ../../../sandbox/vue/src/samples/textarea/disabled.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/textarea/disabled.ts [Angular]
:::

### Invalid

<Preview frame="stack">
  <art-label for="bio">Bio</art-label>
  <art-textarea id="bio" value="Too short" invalid aria-describedby="bio-error"></art-textarea>
  <p id="bio-error">Bio must be at least 10 characters.</p>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/textarea/invalid.html [HTML]
<<< ../../../sandbox/react/src/samples/textarea/invalid.tsx [React]
<<< ../../../sandbox/vue/src/samples/textarea/invalid.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/textarea/invalid.ts [Angular]
:::

### With button

<Preview frame="stack">
  <art-textarea placeholder="Type your message here." aria-label="Message"></art-textarea>
  <art-button>Send message</art-button>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/textarea/with-button.html [HTML]
<<< ../../../sandbox/react/src/samples/textarea/with-button.tsx [React]
<<< ../../../sandbox/vue/src/samples/textarea/with-button.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/textarea/with-button.ts [Angular]
:::

## API Reference

<ApiReference tag="art-textarea" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focus the field |
| `Typing / Enter` | Edits the value (Enter inserts a newline), emits `input` |
| `Blur` | Emits `change` |

Native `<textarea>` semantics; names and descriptions from `aria-label`, `aria-labelledby` / `art-label` and `aria-describedby` are resolved across the shadow boundary.

States: `focus-visible`, `disabled` and `invalid` are implemented. `hover`, `active` and `loading` do not apply.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-control-padding-x-field-{sm,md,lg}`, `--art-space-2`, `--art-space-16`` | padding, minimum height |
| ``--art-color-border-default`, `--art-border-width`, `--art-radius-md`` | frame |
| ``--art-color-fg-default`, `--art-color-fg-muted`` | text, placeholder |
| ``--art-color-destructive-solid`` | invalid ring |
| ``--art-ring-*`` | focus ring |
| ``--art-shadow-raised`` | elevation |

## Do / Don't

| Do | Don't |
|---|---|
| Let it grow with content | Fix a small height and force scrolling |
| Explain limits in the description | Truncate silently at `maxlength` |
