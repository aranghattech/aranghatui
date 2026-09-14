---
name: docs-authoring
description: Produce an artui component docs page (VitePress, nine fixed sections) and the four framework samples in apps/sandbox. Use for any docs page, sample or usage-tab task.
---

# Docs authoring (artui)

1. `node apps/docs/scripts/scaffold-page.mjs <tier> art-<name>` → `apps/docs/components/<tier>/<name>.md` + sample stubs.
2. Sections, exact order, no extras: Title+description · Preview · Installation · Usage · Examples · API Reference · Accessibility · Tokens used · Do / Don't.
3. Samples are real files: `apps/sandbox/{html,react,vue}/src/samples/<name>/<example>.{html,tsx,vue}` and `apps/sandbox/angular/src/app/samples/<name>/<example>.ts` (+ list it in `samples/index.ts` and `app.ts` imports). Each uses the idiomatic API (§3a): `onOpenChange`, `@open-change`/`v-model:open`, `(openChange)`/`[(ngModel)]`.
4. Every code group has the four tabs in order HTML | React | Vue | Angular via `<<<` snippet imports.
5. `### Example` headings must equal `stories.examples[*].title`; every variant and size in the stories must be named on the page (`pnpm verify:docs-parity`).
6. API Reference is `<ApiReference tag="art-<name>" />` (generated from `dist/docs.json`) — never type tables by hand.
7. Accessibility: keyboard table, roles, APG link. Tokens used: every semantic token the component consumes. Do/Don't: at least one pair.
8. `pnpm --filter @artui/docs build` must pass; check the page in `pnpm --filter @artui/docs dev` in light and dark (Preview frame toggle).
