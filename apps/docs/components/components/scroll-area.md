# Scroll Area

Augments native scroll functionality for custom, cross-browser styling. shadcn/ui parity, on native overflow.

## Preview

<Preview frame="inline">
  <art-scroll-area style="height: 18rem; width: 12rem; border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-md)">
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.30</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.29</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.28</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.27</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.26</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.25</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.24</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.23</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.22</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.21</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.20</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.19</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.18</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.17</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.16</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.15</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.14</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.13</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.12</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.11</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.10</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.9</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.8</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.7</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.6</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.5</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.4</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.3</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.2</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.1</p>
    </art-item>
  </art-scroll-area>
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
<<< ../../../sandbox/html/src/samples/scroll-area/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/scroll-area/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/scroll-area/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/scroll-area/basic.ts [Angular]
:::

Give the host a size (and a border or radius if you like); the content scrolls inside. `orientation` picks the axis.

## Examples

### Basic

Size the host; the content scrolls inside with a thin scrollbar. The viewport is a tab stop, so keyboard users can scroll it. Here the rows are small Items.

<Preview frame="inline">
  <art-scroll-area style="height: 18rem; width: 12rem; border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-md)">
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.30</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.29</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.28</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.27</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.26</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.25</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.24</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.23</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.22</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.21</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.20</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.19</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.18</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.17</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.16</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.15</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.14</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.13</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.12</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.11</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.10</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.9</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.8</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.7</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.6</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.5</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.4</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.3</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.2</p>
    </art-item>
    <art-item size="sm">
      <p slot="title">v1.2.0-beta.1</p>
    </art-item>
  </art-scroll-area>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/scroll-area/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/scroll-area/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/scroll-area/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/scroll-area/basic.ts [Angular]
:::

### Horizontal

`orientation="horizontal"` scrolls sideways; `both` allows both axes.

<Preview frame="inline">
  <art-scroll-area orientation="horizontal" style="width: 24rem; border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-md); padding: var(--art-space-4); display: flex; gap: var(--art-space-4)">
    <art-skeleton style="flex: none; width: 10rem; height: 6rem"></art-skeleton>
    <art-skeleton style="flex: none; width: 10rem; height: 6rem"></art-skeleton>
    <art-skeleton style="flex: none; width: 10rem; height: 6rem"></art-skeleton>
    <art-skeleton style="flex: none; width: 10rem; height: 6rem"></art-skeleton>
    <art-skeleton style="flex: none; width: 10rem; height: 6rem"></art-skeleton>
    <art-skeleton style="flex: none; width: 10rem; height: 6rem"></art-skeleton>
  </art-scroll-area>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/scroll-area/horizontal.html [HTML]
<<< ../../../sandbox/react/src/samples/scroll-area/horizontal.tsx [React]
<<< ../../../sandbox/vue/src/samples/scroll-area/horizontal.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/scroll-area/horizontal.ts [Angular]
:::

## API Reference

<ApiReference tag="art-scroll-area" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focus the viewport |
| `↑ / ↓ / Page Up / Page Down / Home / End` | Scroll (native) |

A plain scroll container with `tabindex="0"`, so it is reachable and scrollable from the keyboard; content keeps its own semantics. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/).

States: `focus-visible` (ring on the viewport) is implemented; other states do not apply.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-color-border-default`` | scrollbar thumb |
| ``--art-space-2-5`, `--art-space-0-5`, `--art-radius-full`` | scrollbar size and shape (WebKit) |
| ``--art-ring-width`, `--art-ring-offset`, `--art-color-ring`` | focus ring |

## Do / Don't

| Do | Don't |
|---|---|
| Use it for lists and panes with a fixed height | Nest scroll areas |
| Let the browser scroll (wheel, touch, keys) | Reimplement scrolling with drag handlers |
