# artui — Implementation Plan

Status: decisions resolved 2026-09-14 (see §14 of `CLAUDE.md` and `.claude/adr/`). This file is the working plan; `CLAUDE.md` remains the rulebook. Update this file when a phase closes.

## 1. Where we are

- **Phase 0 done (2026-09-14, PR #1)** — `pnpm verify` green: 17 workspace projects build; `art-hello` (base) + `art-hello-overlay` (modals) render in html/react/vue/angular sandboxes (smoke 12/12); base-only install contains no modals and no `@stencil/*`; spec 12, e2e 5, VRT 66 baselines (Docker), axe 6/6; size: base runtime chunk 6.9 kB, `art-hello` 1.7 kB, landing-page proxy 13.8 kB (≤ 15 kB).
- **Phase 1 done (2026-09-14, PR #2)** — tokens: AA contrast sweep in `test:unit` (96 checks: text 4.5:1, UI fills 3:1, focus halo as rendered 3:1, brands may only override existing semantic tokens) which caught and fixed destructive-fg, border-strong and ring; brand themes scoped to `data-brand="<name>"` (mode stays `data-theme`), `themes/example` proves it; portable 8-digit-hex scrim for Compose/Swift; flat JSON export drives the generated Tokens page; Theming page has a live brand + mode switch (exit criterion).
- CI fixes from PR #1's failed run ship in PR #2: container jobs do not inherit the image ENV (`PLAYWRIGHT_BROWSERS_PATH`) and Turborepo's strict env mode strips it again (`globalPassThroughEnv`).
- **Phase 2 done (2026-09-14, PR #3)** — primitives: `dom` (shadow-aware helpers, `getTabbables`, `cssLength` token reader), `floating` (@floating-ui/dom), `dismissable` (layered Escape, outside pointer/focus, scroll lock), `scroll-lock`, `focus-trap` (APG, shadow + slot aware, stacked, focus restore), `roving-tabindex` (RTL-aware), `portal` (shared host, `--art-z-*` layers, inherits data-theme/data-brand/dir), `typeahead`. 21 unit tests; all modules incl. floating-ui = 10.3 kB gzip (budget 13 kB; runtime 6.9 kB → 17.2 kB of the 20 kB runtime+primitives budget). `table-state` and `date` follow with their first consumers.
- **Button done (2026-09-14, PR #4)** — first Tier 2 component through the full DoD: strict shadcn API (ADR-0012), form-associated submit/reset, `href` anchor mode, `loading` (stays focusable), host `aria-label` forwarded to the inner control, icon-side padding (`--art-control-padding-x-icon-*`), press scale 0.96 (better-ui pass). Gate: 12 spec, 7 e2e, 846 VRT (variants × sizes × states × themes × viewports + RTL pass + examples pass), 24 axe, 48 smoke; 2.96 kB gzip (budget 3). Also fixed at the shared level: shadow-root base reset in `tailwind.css` (UA button chrome was leaking into every component) and slotted SVG sizing in `art-icon`. Next: Label → Input … per §6 order (no Icon page).
- **Tier 2 in progress (2026-09-15, branch `tier-2/controls`, local commits, no PR)** — Label, Input, Textarea, Checkbox, Switch done through the full DoD. Docs pages and framework samples are now generated from the stories file (`apps/docs/scripts/gen-page.mjs`); preview layout lives in `frame`s so samples contain only components (user feedback). Cross-shadow ARIA naming in `@aranghat/primitives/aria`. Then Radio Group (+ `art-radio` item with the label as its default slot), Native Select (light-DOM options mirrored into the shadow select), Toggle, Toggle Group (capture-phase re-emit, `data-position` edge joining). Spec environment switched to jsdom (mock-doc lacks shadow event retargeting / capture ordering). Shared fix: `@property` is ignored in shadow roots → the Tailwind plugin emits `--tw-*` defaults (thumbs and shadows had never painted). Slider (native `<input type=range>`, vertical, RTL). e2e pages now load the token sheet (token-derived geometry was 0 there before). **Native controls first (2026-09-15, user directive, ADR-0020):** Checkbox, Switch, Radio and Slider were rebuilt on the platform inputs (`<input type=checkbox|radio|range>`, `appearance:none` + pseudo-elements); the custom slider and its 4 kB budget exception were withdrawn, and `CLAUDE.md` §12 now forbids re-implementing a control the platform provides. Sizes after the rewrite: checkbox 2.5, switch 2.2, radio 2.0, slider 2.2 kB gzip (all under the 3 kB budget). Baselines for the four were regenerated and need review. **Input addons (2026-09-15, user request):** `start` / `end` slots for icons or short text inside the field; the frame (`part="field"`, new `field-frame-*` / `focus-ring-within` recipes) carries border, focus ring and invalid ring while the native input stays borderless inside — existing Input baselines unchanged, four new examples. Input Group will build on the same frame for buttons / kbd addons. **PR #7 merged to main (2026-09-15).** **Batches 1 + 2 (branch `tier-2/batch-1-2`, 2026-09-15):** Button Group (+ `art-button-group-text`; the control radius now lives on each host and is inherited, so groups round only the outer corners from outside and neighbours overlap by the border width), Input Group (frame around `art-input`/`art-textarea` with inline and block addons; the control's focus/invalid/disabled are mirrored onto the host because `:host(:has(…))` cannot see slotted state), Field (+ `art-field-group`, `art-field-set`; wires `for`, `aria-describedby`, `invalid`, disabled label), Input OTP (one native input over character slots; no native maxlength so pasted codes with separators survive filtering), Badge, Kbd (+ `art-kbd-group`), Separator (native `<hr>`), Skeleton, Spinner, Progress (native `<progress>`). Tokens: pulse / caret-blink motion, `focus-ring-shadow` recipe. Label's click handler moved to the host (block-level labels in a Field were only clickable on their text). **Batch 3 (branch `tier-2/batch-3`, 2026-09-15):** Aspect Ratio (native `aspect-ratio`), Card (regions collapse when their slot is empty), Item (+ `art-item-group`; media box for icons, thumbnail for images, `href` link rows), Empty, Marker (default / border / separator, `href`), Table and Typography as light-DOM components with tag-scoped stylesheets (ADR-0021; the Tailwind plugin skips the shadow reset for files starting with `/* light-dom */`). That completes Tier 2 (28 of 28) apart from removing `art-hello`. Next: Button Group → Input Group → Field → Input OTP → Badge → Kbd → Separator → Skeleton → Spinner → Progress → Aspect Ratio → Card → Item → Empty → Table → Typography → Marker.
- Fresh repository. `origin` = `github.com/aranghattech/aranghatui` (empty). Nothing from the previous React/Radix incarnation is reused; it remains only as a reference for the six brand themes (ADR-0014).
- Working agreement (amended 2026-09-15): Claude commits locally on a feature branch, one commit per component, docs updated, then asks for review; PRs are created together after review (ADR-0015). No publishing before 1.0 (ADR-0016).
- Icons (amended 2026-09-15): consumers bring their own icon library; `@aranghat/icons` / `art-icon` are internal, no docs page (ADR-0007).
- This run stops after Phase 2 and the Button component (Phase 3 first item) for review.

## 2. Architecture blueprint

### 2.1 Package graph

| Package | Kind | Depends on (peer + dev) | Runtime deps |
|---|---|---|---|
| `@aranghat/tokens` | Style Dictionary → `aranghat.css`, `themes/*.css`, scss, js/ts, json, compose, swift | — | — |
| `@aranghat/primitives` | plain TS, tree-shakable modules | tokens | `@floating-ui/dom` |
| `@aranghat/icons` | per-icon modules (lucide subset) | — | — |
| `@aranghat/base` | Stencil project (Tier 2) | tokens, primitives, icons | — (runtime inlined, ADR-0002) |
| `@aranghat/components` | Stencil project (Tier 3) | tokens, primitives, base | `embla-carousel` |
| `@aranghat/navigation` | Stencil project (Tier 4) | tokens, primitives, base | — |
| `@aranghat/modals` | Stencil project (Tier 5) | tokens, primitives, base | — |
| `@aranghat/widgets` | Stencil project (Tier 6) | all above | — |
| `@aranghat/<tier>-react` | generated by react-output-target, built with tsc | `@aranghat/<tier>`, react | `@stencil/react-output-target/runtime` |
| `@aranghat/<tier>-vue` | generated by vue-output-target, built with tsc | `@aranghat/<tier>`, vue | — |
| `@aranghat/<tier>-angular` | generated by angular-output-target, built with ng-packagr | `@aranghat/<tier>`, @angular/core | — |
| `@aranghat/ui` | meta re-export of all tiers | all | — |

Workspace globs: `packages/*`, `packages/react/*`, `packages/vue/*`, `packages/angular/*`, `apps/*`, `apps/sandbox/*`, `tooling/*`.

### 2.2 Stencil build per tier

- Shared factory `tooling/stencil-config/index.ts` → `createTierConfig({ namespace, tier, tailwindEntry })`. Each tier's `stencil.config.ts` is three lines.
- Output targets per tier:
  - `dist-custom-elements` — `externalRuntime: false` (inlined, feature-tree-shaken runtime; ADR-0002 revised after measurement), `customElementsExportBehavior: 'single-export-module'`, `generateTypeDeclarations: true`, `dir: 'dist/components'`, `empty: false` (dev builds must not wipe dist; the build script cleans).
  - `docs-readme` (per-component `readme.md`, never hand-edited) and `docs-json` (`dist/docs.json`, consumed by the docs site for API tables).
  - `react-output-target` → `packages/react/<tier>/src/components/` (`stencilPackageName`, `esModules: true` so each component is its own file for subpath exports).
  - `vue-output-target` → `packages/vue/<tier>/src/components/` with `componentModels` for form controls.
  - `angular-output-target` → `packages/angular/<tier>/src/directives/` with `outputType: 'standalone'`, `valueAccessorConfigs` for form controls.
- Registration: Stencil's generated `defineCustomElement()` is already guarded with `customElements.get(tag)`; any hand-written registration must go through `defineIdempotent` from `@aranghat/primitives/define`. The token lint forbids raw `customElements.define`.
- Cross-tier typing: a tier that renders a lower tier's element imports that tier's `components.d.ts` JSX declarations (`import type {} from '@aranghat/base'`).
- Framework package entry points: `exports` map with one subpath per component (`@aranghat/base-react/button`) generated by a script from `docs.json`, so subpaths never drift from the component list.

### 2.3 Styling pipeline

1. `packages/tokens/src/**/*.json` (DTCG) → Style Dictionary 5 → `dist/css/aranghat.css` (`:root` light, `[data-theme="dark"]`, `prefers-color-scheme` guarded), `dist/css/themes/*.css`, `dist/scss/_tokens.scss`, `dist/js|ts`, `dist/json`, `dist/compose`, `dist/swift`.
2. `packages/tokens/tailwind.css` — Tailwind v4 `@theme` block mapping utilities to `var(--art-*)` only. No literal values. Shared by every tier via the Tailwind entry.
3. `stencil-tailwind-plugin` compiles Tailwind per component into its shadow stylesheet at build time.
4. `tooling/token-lint` — a small Node script run as `pnpm lint:tokens`: fails on hex/rgb/hsl/oklch literals, bare `px`/`rem` values, arbitrary Tailwind values (`[...]`), `!important`, `customElements.define`, and any `--art-*` custom property declared inside `packages/*/src` (tokens are only born in `packages/tokens`).
5. Focus ring, motion, elevation and control-height recipes live once in `packages/tokens/tailwind.css` as `@utility` definitions (`focus-ring`, `motion-fast`, `elevation-popover`, `control-md`) so every component uses the identical recipe.

### 2.4 Event and form contract mechanics (§3a)

- `@aranghat/primitives/events`: `redispatch(host, event)` re-emits `input`, `change`, `reset`, `submit` from the host with `{ bubbles: true, composed: true }`, so `event.target` is the `<art-*>` element. Every wrapping component uses it; a spec test asserts it.
- Form-associated controls: `@Component({ formAssociated: true })` + `@AttachInternals()`; `setFormValue`, validity mirroring, `formResetCallback`, `formDisabledCallback`.
- Custom events: `@Event({ eventName: 'open-change', bubbles: true, composed: true }) openChange: EventEmitter<{ open: boolean }>` (kebab-case on the DOM per ADR-0001). `detail` is always a typed object, never a DOM event.
- Vue: `componentModels: [{ elements: ['art-input'], targetAttr: 'value', event: 'input' }]`; open state via `{ targetAttr: 'open', event: 'open-change' }`.
- Angular: `valueAccessorConfigs` per control type (text, boolean, select, number).

### 2.5 Stories model → tests and docs from one source

Each component has `art-<name>.stories.ts` exporting a typed `ComponentStories` object: variants, sizes, states (`default | hover | focus-visible | active | disabled | loading | invalid`), directional flag, and named examples with a render function (returns an HTML string).

Consumers of the model:

- `tests/visual` generates the Playwright matrix: themes × viewports × states × variants × sizes (+ RTL when directional). Screenshots taken from a gallery page served by `apps/gallery` (Vite, renders any story by URL).
- `tests/a11y` runs axe on every story in both themes.
- `apps/docs` renders the Examples section from the same stories; `pnpm verify:docs-parity` diffs the story names against the page's example headings.
- The stories file is the "same source data" §10 requires.

### 2.6 Testing stack

| Gate | Tool | Runs |
|---|---|---|
| `test:unit` | Stencil spec (`newSpecPage`) | host, per tier |
| `test:e2e` | `@stencil/playwright` (Playwright, no Puppeteer) | host, Chromium |
| `test:visual` | Playwright screenshots, `maxDiffPixelRatio: 0.001` | Docker `mcr.microsoft.com/playwright` (ADR-0018) |
| `test:a11y` | `@axe-core/playwright` | Docker |
| `lint:tokens` | `tooling/token-lint` | host |
| `size` | `size-limit` with `@size-limit/esbuild` (imports the published subpath, gzip) + `@size-limit/file` for the IIFE | host |
| `smoke:frameworks` | builds the four sandbox apps and asserts each renders every component's smoke sample (Playwright) | Docker |
| `verify` | all of the above via Turborepo | host + Docker |

Budgets in `.size-limit.json`: one entry per component subpath, one per full tier, one per reference app (`apps/sandbox/*` entries `landing`, `auth`, `admin`), and one for `@stencil/core/internal/client` + primitives.

### 2.7 Docs site

- VitePress 1.6 in `apps/docs`. Web components are used directly in markdown; a `<Preview>` Vue component provides the frame with light/dark toggle and RTL toggle.
- Usage and Examples tabs are `<<< @/apps/sandbox/<framework>/src/samples/<component>/<example>.<ext>` snippet imports, so every sample is a real file that the framework smoke test renders.
- API Reference is rendered from each tier's `dist/docs.json` by a VitePress data loader (Props, Events, Methods, Slots, CSS custom properties, Shadow parts).
- Page generator `apps/docs/scripts/scaffold-page.mjs <tier> <component>` emits the nine-section skeleton; `verify:docs-parity` checks headings order, all four framework tabs present, and stories ↔ examples parity.
- Sidebar is generated from the tier lists in `tooling/catalog.json` (the single component catalogue also used by the scaffolder and the size-limit generator).

### 2.8 CI (GitHub Actions)

- `ci.yml` on PR and `main`: pnpm install (frozen lockfile) → `turbo run build` → `lint:tokens` → `test:unit` → `test:e2e` → `size` → `test:visual` + `test:a11y` + `smoke:frameworks` inside the Playwright container → install-isolation check (`pnpm pack` each tier, install `base` alone into a temp dir, assert no `modals` in `node_modules`).
- Diff images and reports uploaded as artifacts on failure.
- `release.yml` exists but is `workflow_dispatch` only and gated behind a `RELEASE_ENABLED` variable until Phase 8.

## 3. Phase 0 — Foundation

Branch `phase-0/foundation`. Exit criteria per §13: `art-hello` in `base`, `art-hello-overlay` in `modals` consuming it, both render in all four sandbox apps, `base` installs without `modals`, `pnpm verify` green.

1. Root: `package.json` (private, `packageManager: pnpm@11.5.0`, engines node ≥ 24), `pnpm-workspace.yaml` (globs + `allowBuilds` for esbuild/@stencil/core), `turbo.json`, `tsconfig.base.json`, `.editorconfig`, `.nvmrc`, `.gitignore`, `scripts/check-stencil-pin.mjs`.
2. `tooling/catalog.json` — the component catalogue (tier, tag, status). Drives scaffolding, sidebar, size-limit entries, docs-parity.
3. `packages/tokens` — Phase 0 minimal set needed by `art-hello` (colour bg/fg/border/primary, radius, space, font, duration, ring). Build pipeline complete (all platforms) so Phase 1 only adds tokens.
4. `packages/primitives` — `define` (idempotent registration), `id`, `events/redispatch`. Vitest unit tests.
5. `packages/icons` — generator script over a lucide subset (start with ~24 icons used by shadcn examples) → per-icon modules; `art-icon` lives in `base`.
6. `tooling/stencil-config` — shared factory (§2.2). `packages/base` and `packages/modals` Stencil projects with `art-hello` and `art-hello-overlay`.
7. Framework packages for `base` and `modals`: react (tsc), vue (tsc), angular (ng-packagr). Subpath `exports` generator.
8. `apps/sandbox/{html,react,vue,angular}` — Vite (html/react/vue) and Angular CLI 22. Each renders the two hello components using the idiomatic API. `apps/gallery` for stories.
9. Test infrastructure: spec + e2e for hello; `tests/visual` + `tests/a11y` + Docker wrapper (`scripts/pw-docker.sh`); `.size-limit.json`; `tooling/token-lint`; `smoke:frameworks`; `verify` pipeline.
10. `apps/docs` VitePress shell: Getting Started, Theming, Tokens, Dark Mode, RTL, Bundle Size, Migration, Contributing stubs; `<Preview>`; API-reference loader; `scaffold-page.mjs`; `verify:docs-parity`; a page for `art-hello` proving the nine-section template end to end.
11. Skills: install `better-ui`, `better-accessibility`, `better-typography`, `better-colors`, `better-layout` (jakubkrehel/skills) and `frontend-design`, `skill-creator`, `webapp-testing` (anthropics/skills); record in `skills/INSTALLED.md`. Author the five repo-local skills in `skills/` (§11), each a checklist mapping 1:1 to §9.
12. CI workflows. Changesets config (`fixed` group, all packages). README.
13. Install-isolation check green, `pnpm verify` green → PR → merge.

Phase 0 leaves `art-hello*` in place until Button lands, then removes them in the Button PR.

## 4. Phase 1 — Tokens

Branch `phase-1/tokens`. Exit: theme switch and a brand override both demonstrated in docs.

Semantic token set (names are final; they are public API):

| Group | Tokens |
|---|---|
| Surfaces | `color-bg-canvas`, `color-bg-surface`, `color-bg-popover`, `color-bg-muted`, `color-bg-accent` (hover/selected wash), `color-bg-overlay` (scrim) |
| Text | `color-fg-default`, `color-fg-muted`, `color-fg-on-primary`, `color-fg-on-destructive`, `color-fg-link` |
| Intent fills | `color-primary-solid`, `color-primary-hover`, `color-secondary-solid`, `color-secondary-hover`, `color-destructive-solid`, `color-destructive-hover`; status `success | warning | info` each with `solid` and `muted` + matching `fg` |
| Borders | `color-border-default`, `color-border-strong` (focus/selected only), `border-width` |
| Focus | `ring-width`, `ring-color`, `ring-offset` |
| Shape | `radius` (base), derived `radius-sm | md | lg | full` via `calc()` |
| Space | `space-0 … space-16` (4 px grid as rem) |
| Type | `font-sans`, `font-mono`, `text-xs … text-2xl` (size + line-height pairs), `font-weight-normal | medium | semibold`, `tracking-tight | normal` |
| Motion | `duration-fast` (120 ms), `duration-base` (180 ms), `ease-out`, `ease-in-out` |
| Elevation | `shadow-raised`, `shadow-overlay`, `shadow-popover` |
| Density | `control-height-sm | md | lg`, `control-padding-x-sm | md | lg`, `icon-size-sm | md | lg` |
| Layers | `z-dropdown`, `z-sticky`, `z-overlay`, `z-modal`, `z-toast` |

Deliverables: full primitive ramps (neutral scale, red/green/amber/blue for status), semantic light + dark, `themes/example.css` override, all six Style Dictionary platforms, token docs pages generated from the JSON (Tokens, Theming, Dark Mode), `check:contrast` script (AA sweep on semantic pairs), and the token lint extended to forbid non-semantic tokens in components.

## 5. Phase 2 — Primitives

Branch `phase-2/primitives`. Exit: unit-tested, `@stencil/core/internal/client` + primitives ≤ 20 kB gzip.

| Module | API sketch | First consumer |
|---|---|---|
| `floating` | `createFloating(reference, floating, { placement, offset, flip, shift, arrow })` → `update()`, `destroy()`; wraps `@floating-ui/dom` | Tooltip, Popover |
| `dismissable` | `createDismissable(el, { onDismiss, outsideClick, escape, lockScroll })` | Popover, Dialog |
| `focus-trap` | `trapFocus(container, { initialFocus, returnFocus })` | Dialog, Sheet |
| `roving-tabindex` | `createRovingTabindex(container, { orientation, loop, selector })` | Tabs, Menus |
| `portal` | `mountInLayer(el, layer)` with a single overlay host and z-index tokens | Toast, Dialog |
| `typeahead` | `createTypeahead(getItems, onMatch)` | Select, Menus |
| `id` | `uniqueId(prefix)` SSR-stable | every ARIA wiring |
| `events` | `redispatch`, `emitCustom` | every form control |
| `define` | `defineIdempotent` | every component |
| `table-state` | sort/filter/paginate/select/visibility over `T[]` (ADR-0006) | Data Table recipe |
| `date` | UTC-safe day math, week grids, locale formatting via `Intl` only | Calendar |

Each module: Vitest unit tests, size entry, a docs page under Contributing.

## 6. Phase 3 — Tier 2 Base

Button first (branch `component/button`). Scope: variants `default | secondary | outline | ghost | destructive | link`; sizes `sm | md | lg` + `icon` boolean; props `disabled`, `loading` (spinner slot replaces `start`), `type`, `href` (renders `<a>`), `form`; slots default, `start`, `end`; native `click` (no custom event); ARIA button pattern; states all six. Button also lands: the focus-ring recipe, motion timing, the first full stories file, the first nine-section docs page, the first four sandbox samples, and the `component-authoring` skill validated end to end. `art-hello*` removed in this PR.

Order after Button (dependency-driven, one PR each): Label → Input → Textarea → Checkbox → Radio Group → Switch → Native Select → Slider → Toggle → Toggle Group → Button Group → Input Group → Field → Input OTP → Badge → Kbd → Separator → Skeleton → Spinner → Progress → Aspect Ratio → Card → Item → Empty → Table → Typography → Marker. (28 components.)

## 7. Phases 4–7 — order and cross-tier notes

- **Tier 3** (`phase-4`): Popover → Tooltip → Hover Card → Collapsible → Accordion → Tabs → Alert → Avatar → Scroll Area → Toast → Select → Command → Combobox → Calendar → Date Picker → Resizable → Carousel (Embla) → Data Table recipe → Bubble → Message → Message Scroller → Attachment → Questionnaire. Command has no dialog mode (ADR-0019). Questionnaire ships its own tiny validation (required, pattern, min/max) — no Zod.
- **Tier 4** (`phase-5`): Breadcrumb → Pagination → Dropdown Menu → Context Menu → Menubar → Navigation Menu → Sidebar (mobile via primitives, ADR-0019) → TopNav → Tree View. TopNav and Tree View follow shadcn Navigation Menu/Sidebar idioms and the APG toolbar/tree patterns.
- **Tier 5** (`phase-6`): Dialog → Alert Dialog → Sheet → Drawer → Common Dialogs (`confirm`/`alert`/`prompt` imperative API returning promises).
- **Tier 6** (`phase-7`): App Shell → Login → Signup → Forgot Password → Settings Page → Data Table Page → Empty/404/500 → Onboarding Wizard → Notification Centre. Reference app budgets are asserted from these.
- Brand themes (ADR-0014) are re-ported between Phase 3 and Phase 4, one PR each.

## 8. Phase 8 — 1.0

SSR/hydration verification (React SSR via output-target hydrate module, Vue SSR, Angular SSR), migration guide from `@aranghat/ui-*` (previous incarnation), versioning policy doc, Figma token sync (Tokens Studio JSON export from Style Dictionary), first publish `1.0.0` to GitHub Packages, revisit ADR-0008.

## 9. Risks and how they are handled

| Risk | Mitigation |
|---|---|
| `stencil-tailwind-plugin` behaviour with Tailwind 4.3 in shadow roots | Proven in Phase 0 with `art-hello`; fallback is a PostCSS step on each component's CSS driven by `@tailwindcss/postcss`. |
| Cross-project JSX typing (`modals` rendering `art-hello`) | Proven in Phase 0 exit criterion; fallback is a generated `jsx.d.ts` per tier. |
| Angular 22 + `@stencil/angular-output-target` 1.5 | Proven in Phase 0 via the Angular sandbox build. |
| Screenshot flakiness | Docker-pinned browser, `animations: 'disabled'`, fonts fixed by OS, `reducedMotion` for state shots, retry 0 (flakes must be fixed, not retried). |
| Budgets too tight once runtime is measured | Runtime measured in Phase 0; if over, raise via ADR before Phase 3, never per component. |
| Questionnaire/Message family complexity | Placed last in Tier 3; scope confirmed against shadcn pages when reached. |
| TypeScript 7 | Pinned to 5.9 workspace-wide until Stencil supports 7. |

## 10. Toolchain pins (2026-09-14)

Node 24 · pnpm 11.5 · Turborepo 2.10 · TypeScript 5.9 · Stencil 4.45 · react-output-target 1.6 · vue-output-target 0.14 · angular-output-target 1.5 · `@stencil/playwright` 0.5 · Playwright 1.63 · Tailwind 4.3 + `stencil-tailwind-plugin` 2.0 · Style Dictionary 5.5 · size-limit 13 · VitePress 1.6 · Vite 8 · Angular 22 · React 19 · Vue 3.5 · axe-core 4.13 · Changesets 3 · `@floating-ui/dom` 1.8 · `embla-carousel` 8.6
