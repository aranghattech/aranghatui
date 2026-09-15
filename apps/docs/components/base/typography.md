# Typography

Styles for headings, paragraphs, lists and other prose. shadcn/ui parity, applied to native HTML.

## Preview

<Preview frame="stack">
  <art-typography>
    <h1>The Joke Tax Chronicles</h1>
    <p class="lead">Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne.</p>
    <h2>The King's Plan</h2>
    <p>The king thought long and hard, and finally came up with <a href="#">a brilliant plan</a>: he would tax the jokes in the kingdom.</p>
    <blockquote>"After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."</blockquote>
    <h3>The Joke Tax</h3>
    <p>The king's subjects were not amused. They grumbled and complained, but the king was firm:</p>
    <ul>
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners: 20 gold coins</li>
    </ul>
    <p>Run <code>joke --tax</code> to see the current rate.</p>
  </art-typography>
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
<<< ../../../sandbox/html/src/samples/typography/article.html [HTML]
<<< ../../../sandbox/react/src/samples/typography/article.tsx [React]
<<< ../../../sandbox/vue/src/samples/typography/article.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/typography/article.ts [Angular]
:::

Wrap prose in `art-typography` and write ordinary HTML. Add `class="lead|large|small|muted"` for the four text styles. Outside the wrapper nothing is styled, so app chrome keeps its own type.

## Examples

### Article

Plain HTML inside `art-typography` — headings, paragraphs, lists, quotes, links and inline code pick up the scale.

<Preview frame="stack">
  <art-typography>
    <h1>The Joke Tax Chronicles</h1>
    <p class="lead">Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne.</p>
    <h2>The King's Plan</h2>
    <p>The king thought long and hard, and finally came up with <a href="#">a brilliant plan</a>: he would tax the jokes in the kingdom.</p>
    <blockquote>"After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."</blockquote>
    <h3>The Joke Tax</h3>
    <p>The king's subjects were not amused. They grumbled and complained, but the king was firm:</p>
    <ul>
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners: 20 gold coins</li>
    </ul>
    <p>Run <code>joke --tax</code> to see the current rate.</p>
  </art-typography>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/typography/article.html [HTML]
<<< ../../../sandbox/react/src/samples/typography/article.tsx [React]
<<< ../../../sandbox/vue/src/samples/typography/article.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/typography/article.ts [Angular]
:::

### Headings

<Preview frame="stack">
  <art-typography>
    <h1>Heading one</h1>
    <h2>Heading two</h2>
    <h3>Heading three</h3>
    <h4>Heading four</h4>
  </art-typography>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/typography/headings.html [HTML]
<<< ../../../sandbox/react/src/samples/typography/headings.tsx [React]
<<< ../../../sandbox/vue/src/samples/typography/headings.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/typography/headings.ts [Angular]
:::

### Text styles

`lead`, `large`, `small` and `muted` are the four text styles shadcn documents; use them on a `<p>` or `<span>`.

<Preview frame="stack">
  <art-typography>
    <p class="lead">A modal dialog that interrupts the user with important content and expects a response.</p>
    <p class="large">Are you absolutely sure?</p>
    <p class="small">Email address</p>
    <p class="muted">Enter your email address.</p>
  </art-typography>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/typography/text-styles.html [HTML]
<<< ../../../sandbox/react/src/samples/typography/text-styles.tsx [React]
<<< ../../../sandbox/vue/src/samples/typography/text-styles.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/typography/text-styles.ts [Angular]
:::

### Lists

<Preview frame="stack">
  <art-typography>
    <ol>
      <li>Install the package</li>
      <li>Import the token sheet</li>
      <li>Use the components</li>
    </ol>
    <hr>
    <ul>
      <li>HTML</li>
      <li>React, Vue and Angular</li>
    </ul>
  </art-typography>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/typography/list.html [HTML]
<<< ../../../sandbox/react/src/samples/typography/list.tsx [React]
<<< ../../../sandbox/vue/src/samples/typography/list.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/typography/list.ts [Angular]
:::

## API Reference

<ApiReference tag="art-typography" />

## Accessibility

| Key | Action |
|---|---|
| `None` | Links inside are focusable as usual |

Native semantics — real headings, lists and quotes. Keep heading levels in order. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/).

States: Not interactive — no states.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-font-size-{4xl,3xl,2xl,xl,lg,md,sm}`` | scale |
| ``--art-font-weight-{bold,semibold,medium}`, `--art-font-tracking-tight`` | headings |
| ``--art-font-line-height-{xs,md}`` | leading |
| ``--art-space-{10,8,6,4,2,1,0-5}`` | rhythm |
| ``--art-color-border-default`, `--art-border-width`` | h2 rule, blockquote bar, hr |
| ``--art-color-bg-muted`, `--art-radius-xs`, `--art-font-family-mono`` | inline code |
| ``--art-color-fg-link`` | links |
| ``--art-color-fg-muted`` | lead and muted |

## Do / Don't

| Do | Don't |
|---|---|
| Use it for long-form content | Wrap app UI (forms, tables) in it |
| Keep one `<h1>` per page | Skip heading levels for size |
