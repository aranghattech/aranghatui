---
name: component-review
description: Pre-merge critique of an artui component PR — consistency with siblings, token compliance, bundle delta, motion restraint, API surface, event contract. Use before merging any component.
---

# Component review (artui)

Answer each with evidence (file:line, numbers, screenshots):

- **Scope**: matches the restated scope and shadcn's page; every deviation has a reason in the PR (and an ADR if it is a rule change). No variant/prop/slot that shadcn does not have unless explicitly requested.
- **Tier placement**: right package; no downward dependency; lower tiers are `peerDependencies + devDependencies`.
- **Tokens**: `pnpm lint:tokens` clean; only semantic tokens; one border width/colour; radius via the ladder; recipes used for focus ring, motion, control heights. No local `--art-*` declarations.
- **Consistency with siblings**: same density (`control-*`), same focus ring, same disabled treatment (opacity 50 %, pointer-events none), same hover wash (`bg-accent`), same motion timings. Compare side by side in the gallery.
- **Motion**: micro, user-triggered, reduced-motion respected; no decorative animation.
- **Events**: native events re-dispatched with host as `target`; custom events kebab-case with typed `detail`; React `onXxx`, Vue `v-model`, Angular `ngModel`/reactive forms verified in the sandboxes; no `art-` prefix without a documented collision.
- **A11y**: APG pattern complete, keyboard map in docs, axe clean in both themes, labels for icon-only controls.
- **Bundle**: `pnpm size` delta within budget (§7); no new runtime dependency without an ADR; icons via slot/`@aranghat/icons`.
- **Tests**: spec + e2e + full VRT matrix + a11y + smoke green; baselines reviewed, not blind-approved.
- **Docs**: nine sections, four tabs, parity check green, API tables generated.
Verdict: merge / changes requested, with a ranked list.
