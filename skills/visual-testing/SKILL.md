---
name: visual-testing
description: Generate, run and review the artui visual-regression matrix (Playwright in Docker), approve baselines, and diagnose diffs. Use for any screenshot, VRT, baseline or diff task.
---

# Visual testing (artui)

- Source of the matrix: `art-<name>.stories.ts` (variants × sizes × states × themes light/dark × viewports 390/768/1280 × RTL when `directional`). The gallery (`apps/gallery`) renders `?story=<tag>&variant=&size=&state=&theme=&dir=`.
- Run (always Docker, ADR-0018): `pnpm build && pnpm test:visual`. Baselines: `tests/visual/__screenshots__/<tag>/<theme>-<width>-<variant>-<size>-<state>[-rtl].png`.
- First baselines of a **new** component: run once; Playwright writes missing snapshots. Open every image (Read tool) and check: both themes, focus ring visible on `focus-visible`, disabled at 50 % opacity, no clipped text, RTL mirrored. Record "baselines reviewed: N images" in the PR.
- Changed baselines: **never** run `pnpm test:visual -u` (or `ARTUI_UPDATE_SNAPSHOTS`) without the user's explicit approval in the conversation. Attach the diff images (`tests/test-results/**/*-diff.png`) and explain the cause first.
- Diagnosing diffs: font fallback (host vs Docker), animation not disabled (`animations: 'disabled'` + `reducedMotion`), hover state left over between tests, scrollbars (element screenshots only), sub-pixel layout (`maxDiffPixelRatio: 0.001` is strict on purpose — fix the cause, do not loosen the threshold).
- a11y sweep: `pnpm test:a11y` (axe, every example, both themes). Zero violations, no rule disabling.
- Smoke: `pnpm smoke:frameworks` — every HTML sample must exist and render in html/react/vue/angular sandboxes.
