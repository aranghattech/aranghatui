---
name: component-authoring
description: Full artui component pipeline — scaffold → tokens → Stencil markup → a11y → tests → docs → verify. Use for every new component in packages/<tier>/src.
---

# Component authoring (artui)

One component at a time. Do not start until the previous PR is merged (CLAUDE.md §12).

## 0. Restate scope
- Tier (§5), tag `art-<name>`, shadcn page URL, variants ⊆ `default|secondary|outline|ghost|destructive|link`, sizes `sm|md|lg`, states (all six or a documented reason), slots (`start`,`end`,`label`,`description`,`header`,`footer`), events (kebab-case, ADR-0001; native re-dispatched via `redispatch`), ARIA pattern (APG link), form-associated? (`formAssociated` + `@AttachInternals`).
- Check `@aranghat/primitives` first. Shared behaviour needed by a second component moves into primitives **before** this component ships.

## 1. Scaffold
```
packages/<tier>/src/<name>/art-<name>.{tsx,css,spec.tsx,e2e.ts,stories.ts}
node apps/docs/scripts/scaffold-page.mjs <tier> art-<name>
```
Add the catalogue entry status `in-progress` in `tooling/catalog.json`. Angular samples must be listed in `apps/sandbox/angular/src/app/samples/index.ts` and in `app.ts` imports.

## 2. Tokens
- Every design value is a **semantic** token. Missing one? Add it in `packages/tokens` in its own commit (see `token-authoring`). Never a literal, never `px`, never `!important`, never arbitrary Tailwind values.
- Use the recipes: `focus-ring`, `motion-fast|base`, `control-sm|md|lg`, `field-*`, `icon-*`.
- **Conditional utilities must be exclusive pairs.** Never put `bg-transparent` (unconditional) next to `'bg-primary': checked` — Tailwind's emit order decides the winner, not your intent; write `'bg-transparent': !checked`. Checkbox shipped with an invisible checked state this way. Review baselines for BOTH states of every toggle.
- **Dotted utility names (`h-1.5`, `p-0.5`) are only scanned inside real class strings**, not comments — write them as literal keys in the class object.
- **Interpolated class names are invisible to the Tailwind scanner.** Any `` `x-${size}` `` must be accompanied by a comment listing every literal (`// safelist: field-sm field-md field-lg`), or the utility is silently missing (Input's sizes shipped without heights once).

## 3. Implement (Stencil)
- **Native first (ADR-0020).** If HTML has the element, wrap it and style it (`appearance: none` + pseudo-elements on tokens); do not rebuild its behaviour. Custom logic only where no native element exists or to orchestrate natives across shadow roots.
- `shadow: true`; document `::part()` and CSS custom property hooks in JSDoc (`@part`, `@slot`).
- Props camelCase + reflect where styling depends on them; booleans default `false`.
- Native events: re-dispatch `input|change|reset|submit` with `redispatch(host, e)`.
- Custom events: `@Event({ eventName: 'open-change' })`, typed `detail`, never the raw DOM event.
- Lower-tier elements: import their `defineCustomElement` and call it in `connectedCallback`.
- Stories file: variants/sizes/states/examples + `render(ctx)` + `focusTarget`.

## 4. Framework bindings
- Add `componentModels` (Vue v-model) and `valueAccessorConfigs` (Angular) in the tier's `stencil.config.ts` for any form control.
- Rebuild; wrappers are generated. Never hand-edit `packages/{react,vue,angular}/*/src/components|directives`.

## 5. Craft pass
Run the `better-ui` skill on the gallery page (`apps/gallery` → `?story=art-<name>&example=…`) in light and dark. Fix, re-screenshot.

## 6. Tests
- Spec (`@stencil/vitest`): render, props, events, slots, re-dispatch.
- e2e (`@stencil/playwright`): full keyboard map per APG, `spyOnEvent` for events.
- Visual + a11y + smoke run from the stories: `pnpm build && pnpm test:visual && pnpm test:a11y && pnpm smoke:frameworks` (Docker). Review every new baseline image; note the review in the PR. Existing baselines change only with explicit human approval.

## 7. Docs
Nine sections in order; four framework tabs from real sandbox files; Examples headings == stories titles (`pnpm verify:docs-parity`).

## 8. Gate
`pnpm verify` green → PR with: scope restatement, shadcn parity notes/deviations, tokens added, bundle delta (`pnpm size`), keyboard walkthrough, baseline review note. Merge on green. Set catalogue status `done`.
