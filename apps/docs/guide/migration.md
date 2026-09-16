# Migration

From the previous React-only packages — `@aranghat/ui-core`, `@aranghat/ui-dialogs`, `@aranghat/ui-navigation` (0.0.x) and `@aranghat/tokens` 0.0.7 — to artui 1.0. The old packages were a shadcn/ui port in React; artui keeps the same look, names and variants but is authored once as web components and consumed through generated bindings, so the shape of composition changes: **compound components become slots**, and **a tier package replaces the old `ui-*` split**.

## 1. Packages

| Before | After (React) | Elements |
|---|---|---|
| `@aranghat/ui-core/button`, `/input`, `/textarea`, `/field`, `/badge`, `/card`, `/skeleton`, `/spinner`, `/empty`, `/button-group`, `/item`, `/table` | `@aranghat/base` + `@aranghat/base-react` | Tier 2 atoms |
| `@aranghat/ui-core/alert`, `/select`, `/avatar` | `@aranghat/components` + `@aranghat/components-react` | Tier 3 |
| `@aranghat/ui-navigation/sidebar`, `/dropdown-menu` | `@aranghat/navigation` + `@aranghat/navigation-react` | Tier 4 |
| `@aranghat/ui-dialogs/dialog`, `/alert-dialog`, `/drawer` | `@aranghat/modals` + `@aranghat/modals-react` | Tier 5 |
| `@aranghat/tokens` 0.0.7 | `@aranghat/tokens` 1.0 | see §2 |

Install the web-component tier **and** its React binding at the same version (every `@aranghat/*` package is released in lockstep — [Versioning](./versioning)):

```bash
pnpm remove @aranghat/ui-core @aranghat/ui-dialogs @aranghat/ui-navigation
pnpm add @aranghat/tokens @aranghat/base @aranghat/base-react @aranghat/components @aranghat/components-react \
  @aranghat/navigation @aranghat/navigation-react @aranghat/modals @aranghat/modals-react
```

Per-component imports keep working, now under the tier: `import { Button } from '@aranghat/base-react/button'`. Vue and Angular apps use `-vue` / `-angular` the same way; the HTML form needs no binding at all.

## 2. Tokens and themes

```css
/* before */
@import "@aranghat/tokens/css";
@import "@aranghat/tokens/css/spring.scoped";

/* after */
@import "@aranghat/tokens/aranghat.css";      /* light + dark, one sheet */
@import "@aranghat/tokens/themes/spring.css"; /* a brand: semantic overrides only */
```

- Dark mode: `data-theme="dark"` on `<html>` (or any subtree); without it the system preference applies, and `data-theme="light"` pins light ([Dark Mode](./dark-mode)).
- A brand applies with `data-brand="spring"` on `<html>` or a subtree; several brands can coexist ([Theming](./theming)).
- Token names are `--art-*` throughout; the semantic set (`--art-color-bg-surface`, `--art-color-fg-muted`, `--art-radius`, …) is what components consume and what a brand may override ([Tokens](./tokens)). Anything you styled with the old primitives should move to a semantic token.

## 3. Composition: compound components become slots

The old API expressed structure with sub-components; artui expresses it with **named slots** on one element. In React you keep JSX children and add `slot="…"` to the parts that had a sub-component name:

```tsx
// before
<Alert variant="destructive">
  <AlertTitle>Heads up</AlertTitle>
  <AlertDescription>Something needs your attention.</AlertDescription>
</Alert>

// after
import { Alert } from '@aranghat/components-react';
<Alert variant="destructive">
  <h5 slot="title">Heads up</h5>
  <p slot="description">Something needs your attention.</p>
</Alert>
```

| Before | After |
|---|---|
| `<Button variant size asChild>` | `<Button variant size href>` — `asChild` is gone; a link button takes `href` (`target`, `rel`); `loading` and `icon` are props; icons go in the `start` / `end` slots |
| `<Field><FieldLabel/><FieldDescription/><FieldError/></Field>` | `<Field invalid><Label slot="label"/><Input/><span slot="description"/><span slot="error"/></Field>` — the field wires `for`, `aria-describedby` and `invalid` to the control |
| `<Input onChange={e => e.target.value}>` | the same: `input` and `change` are re-dispatched from the host with `event.target.value` |
| `<Select><SelectTrigger><SelectValue/></SelectTrigger><SelectContent><SelectItem/></SelectContent></Select>` | `<Select value onChange placeholder><SelectItem value="a">A</SelectItem></Select>` — items are children; `detail.value` on `change` |
| `<Card><CardHeader><CardTitle/><CardDescription/></CardHeader><CardContent/><CardFooter/></Card>` | `<Card><span slot="title"/><span slot="description"/><div slot="action"/>…content…<div slot="footer"/></Card>` |
| `<Empty><EmptyHeader><EmptyMedia/><EmptyTitle/><EmptyDescription/></EmptyHeader></Empty>` | `<Empty><div slot="media"/><span slot="title"/><span slot="description"/>…actions…</Empty>` |
| `<Item><ItemMedia/><ItemContent><ItemTitle/><ItemDescription/></ItemContent><ItemActions/></Item>` | `<Item variant size href><div slot="media"/><span slot="title"/><span slot="description"/><div slot="actions"/></Item>` |
| `<Avatar><AvatarImage src/><AvatarFallback>AB</AvatarFallback></Avatar>` | `<Avatar src alt size>AB</Avatar>` — the fallback is the default slot |
| `<Badge>`, `<Spinner>`, `<Skeleton>`, `<Textarea>`, `<ButtonGroup>` | unchanged names; `Badge` gains `href`, `Spinner` a `label` |
| `<Table>` with `<TableHeader/><TableRow/>…` | `<Table><table>…plain HTML…</table></Table>` — a light-DOM wrapper that styles native table markup |
| `<Dialog open onOpenChange><DialogTrigger/><DialogContent><DialogHeader><DialogTitle/></DialogHeader>…<DialogFooter/><DialogClose/></DialogContent></Dialog>` | `<Dialog open onOpenChange label><Button slot="trigger"/><span slot="title"/><span slot="description"/>…<div slot="footer"><Button dialog-close/></div></Dialog>` — the native `<dialog>`; any slotted element with `dialog-close` closes |
| `<AlertDialog>` with `AlertDialogCancel` / `AlertDialogAction` | `<AlertDialog open onOpenChange onAction><Button slot="cancel"/><Button slot="action"/>…</AlertDialog>` — `action` is cancelable |
| `<Drawer open onOpenChange><DrawerContent side="right" className="sm:max-w-md">` | `<Drawer open onOpenChange side="right">` — the panel is the element; size it through `::part(content)` (and `::part(body)`, `::part(footer)`), not `className` on a sub-component |
| `<SidebarProvider defaultOpen><Sidebar collapsible="icon"><SidebarHeader/><SidebarContent><SidebarGroup><SidebarGroupLabel/><SidebarMenu><SidebarMenuItem><SidebarMenuButton/>` | `<SidebarProvider open onOpenChange><Sidebar collapsible="icon"><div slot="header"/><SidebarGroup label><SidebarMenu><SidebarMenuItem><SidebarMenuButton href active/>…</Sidebar><SidebarInset>…</SidebarInset></SidebarProvider>` — the same family, `SidebarInset` for the page, no cookie persistence (keep `open` yourself) |
| `<DropdownMenu><DropdownMenuTrigger asChild><Button/></DropdownMenuTrigger><DropdownMenuContent><DropdownMenuItem onSelect/></DropdownMenuContent></DropdownMenu>` | `<DropdownMenu><Button slot="trigger"/><MenuItem onSelect/>…</DropdownMenu>` — items are `MenuItem` (shared by every menu), with `type="checkbox" \| "radio"`, `shortcut` slot |

Rules that hold everywhere:

- **Events** keep their idiomatic React names: `onClick`, `onChange`, `onInput`, `onOpenChange`, `onSelect`, `onValueChange`. Custom events carry a typed `detail`; native ones are the real event, retargeted to the element.
- **`className` and `style`** land on the host element. Internal parts are styled through `::part()` and the component's CSS custom properties (listed on each page under *API Reference*); Tailwind utilities on children of a slot still apply.
- **Variants and sizes** are unchanged (`default | secondary | outline | ghost | destructive | link`, `sm | md | lg`).
- **Forms:** Input, Textarea, Checkbox, Radio Group, Switch, Select, Native Select, Slider, Toggle are form-associated — they submit with a plain `<form>` and `FormData` without extra wiring.

## 4. Step by step (a React app)

1. Swap the packages (§1) and the stylesheet imports (§2); set `data-theme` / `data-brand` on `<html>` where the old app toggled classes.
2. Replace each old import with the tier binding; keep per-component imports for size.
3. Convert compound children to slots with the table in §3, one screen at a time; the TypeScript types of the new bindings flag every removed prop.
4. Replace `className` on old sub-components with `::part()` / custom-property overrides only where it was styling internals; keep it where it was layout on the host.
5. Run the app against `@aranghat/tokens/aranghat.css` in both themes — the semantic palette is the same, but hard-coded primitives in app CSS will stand out.

## 5. Not carried over

- `asChild` and Radix-style `*Trigger` / `*Content` / `*Portal` sub-components (slots and the top layer replace them — ADR-0022).
- The chart components (out of scope, `CLAUDE.md` N2).
- Sidebar open-state persistence in a cookie (keep the state in your app; `SidebarProvider` emits `open-change`).
