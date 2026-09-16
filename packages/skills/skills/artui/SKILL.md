---
name: artui
description: Build application UI with artui (@aranghat/* web components) in HTML, React, Vue or Angular. Use when the project imports @aranghat/base, /components, /navigation, /modals, /widgets or /extended — for choosing a component, composing it, wiring its events, theming it with tokens, or rendering it on the server.
---

# artui

A framework-agnostic design system: authored once as web components, shipped to HTML, React, Vue and Angular. It follows shadcn/ui's visual language closely, but **composition is by slot, not by compound component** — that is the single biggest difference, and the one most mistakes come from.

## 1. Install the tier you need, and exactly one stylesheet

Packages are per tier, so an app takes only the layers it uses. Every `@aranghat/*` package ships at one version; upgrade the scope, never a single package.

```bash
pnpm add @aranghat/tokens @aranghat/base @aranghat/base-react   # React; -vue / -angular likewise, or none for HTML
```

```ts
import '@aranghat/tokens/aranghat.css';   // once, in the app entry. The only stylesheet artui needs.
```

| Tier | Package | What is in it |
|---|---|---|
| 2 | `@aranghat/base` | Button, Label, Input, Textarea, Checkbox, Radio Group, Switch, Native Select, Slider, Toggle, Toggle Group, Button Group, Input Group, Field, Input OTP, Badge, Kbd, Separator, Skeleton, Spinner, Progress, Aspect Ratio, Card, Item, Empty, Table, Typography, Marker |
| 3 | `@aranghat/components` | Popover, Tooltip, Hover Card, Collapsible, Accordion, Tabs, Alert, Avatar, Scroll Area, Toast, Select, Command, Combobox, Calendar, Date Picker, Resizable, Carousel, Data Table, Bubble, Message, Message Scroller, Attachment, Questionnaire |
| 4 | `@aranghat/navigation` | Breadcrumb, Pagination, Dropdown Menu, Context Menu, Menubar, Navigation Menu, Sidebar, TopNav, Tree View |
| 5 | `@aranghat/modals` | Dialog, Alert Dialog, Sheet, Drawer, Common Dialogs (`confirm` / `alert` / `prompt`) |
| 6 | `@aranghat/widgets` | App Shell, Login, Signup, Forgot Password, Settings Page, Data Table Page, Empty / 404 / 500 States, Onboarding Wizard, Notification Centre |
| 7 | `@aranghat/extended` | Nav Rail (icon rail + collapsible secondary panel) |

`@aranghat/ui` re-exports every tier for a prototype. It costs the bundle of every tier you do not use — prefer the per-tier packages.

Import one component, not the barrel, when size matters: `import { Button } from '@aranghat/base-react/button'`.

## 2. Compose with slots

There is one element per component. Parts that a React library would expose as `<CardHeader>` are **named slots** on that element.

```tsx
// wrong — these sub-components do not exist
<Card><CardHeader><CardTitle>Total</CardTitle></CardHeader><CardContent>…</CardContent></Card>

// right
<Card>
  <span slot="title">Total</span>
  <span slot="description">This month</span>
  …content…
  <div slot="footer"><Button>Export</Button></div>
</Card>
```

The same shape everywhere: `<Alert>` takes `icon` / `title` / `description`; `<Dialog>` takes `trigger` / `title` / `description` / `footer`; `<Field>` takes `label` / `description` / `error` around its control; `<Item>` takes `media` / `title` / `description` / `actions`. Read the component's page for its slot list — it is in the API reference under *Slots*.

There is no `asChild`. A button that is a link takes `href` (with `target`, `rel`) and renders an anchor itself.

Icons are yours: pass an `<svg>` or an `<art-icon>` into the slot the component names (usually `start`, `end` or `icon`). artui does not bundle an icon set.

## 3. Wire events the way your framework does

The `art-` prefix stops at the custom-element boundary. In a framework the component is named and behaves normally.

| | HTML | React | Vue | Angular |
|---|---|---|---|---|
| Component | `<art-button>` | `<Button>` | `<Button>` | `<art-button>` |
| Import | `@aranghat/base` | `@aranghat/base-react` | `@aranghat/base-vue` | `@aranghat/base-angular` |
| Click | `addEventListener('click')` | `onClick` | `@click` | `(click)` |
| Value | `value` attribute | `value` / `onChange` | `v-model` | `[(ngModel)]` or reactive forms |
| Open state | `open` + `open-change` | `open` / `onOpenChange` | `v-model:open` | `[open]` / `(openChange)` |

- **Native events stay native.** `click`, `input`, `change`, `focus`, `blur`, `submit` are the real events, re-dispatched from the host so `event.target` is the `<art-*>` element. Read `event.target.value` as usual.
- **Custom events are kebab-case with a typed `detail`**: `open-change`, `value-change`, `select`, `dismiss`. React gets `onOpenChange`, Angular `(openChange)`, Vue `@open-change`.
- **Form controls are form-associated.** Input, Textarea, Checkbox, Radio Group, Switch, Select, Native Select, Slider, Toggle and Input OTP submit inside a plain `<form>` and appear in `FormData` with no extra wiring.

In plain HTML, register only what you use:

```ts
import { defineCustomElement as defineButton } from '@aranghat/base/button';
defineButton();   // idempotent — safe to call twice, or from two packages
```

## 4. Style through the documented surface

- `className` / `class` and `style` land on the **host** element. Layout from outside is normal.
- Internals are reachable only through what the component documents: `::part(…)` and its CSS custom properties, both listed on its page.
- **Never hardcode a colour, space, radius, duration or font.** Use the semantic tokens: `--art-color-bg-surface`, `--art-color-fg-muted`, `--art-color-border-default`, `--art-radius`, `--art-space-4`, `--art-duration-fast`. They are what the components themselves consume, so anything built on them stays in step with a theme change.
- **Dark mode** is `data-theme="dark"` on `<html>` or any subtree; with no attribute the system preference applies and `data-theme="light"` pins light.
- **A brand** is an override sheet of semantic tokens, applied with `data-brand="<name>"`. Brand and mode compose.

## 5. Server-side rendering

Components render to declarative shadow DOM on the server, so the first paint is complete before any script runs.

```ts
import { renderToString } from '@aranghat/hydrate';
const { html } = await renderToString('<art-login></art-login>', { fullDocument: false });
```

The client that *adopts* that markup is a separate build behind an export condition — add it to the bundler that builds the app, or the browser will render every component twice:

```ts
export default defineConfig({ resolve: { conditions: ['artui-ssr'] } });   // Vite / Nuxt
```

Next.js App Router: import server components from `@aranghat/<tier>-react/next`. Nuxt: nothing changes in your code. Angular: post-process the prerendered HTML with `renderToString`, and remember that only **attribute** bindings reach the server markup — `[icon]="x"` is applied on hydration, `icon="x"` is in the first paint.

## 6. Mistakes worth avoiding

- Reaching for a compound sub-component (`<SelectTrigger>`, `<DialogContent>`, `<SidebarHeader>`). They do not exist; use the slot.
- Styling an internal with a descendant selector. It is in a shadow root — use `::part()` or the custom property.
- Hardcoding a hex or a pixel value instead of a token, which silently breaks dark mode and brands.
- Installing `@aranghat/ui` in an app that ships to users, when two tier packages would do.
- Mixing versions across `@aranghat/*`. They are released in lockstep; a mismatch causes duplicate element registration.
- Forgetting `@aranghat/tokens/aranghat.css`. Without it every component renders unstyled, because all of its values are token references.

## 7. Where the truth is

Each component's page carries a live preview, the four framework tabs, and a generated API reference (props, events, methods, slots, CSS custom properties, shadow parts), plus its keyboard map and the tokens it consumes. When a detail matters — the exact slot name, the `detail` shape of an event — read that page rather than guessing; the samples on it are real files, verified against the sandbox apps in CI.
