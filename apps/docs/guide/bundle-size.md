# Bundle Size

Two levers: install only the tiers you need, and import only the components you use (`@aranghat/base-react/button`). Budgets (gzip) are enforced by `size-limit` in CI — see `CLAUDE.md` §7 and `.size-limit.json`. Each tier carries its own feature-tree-shaken Stencil runtime (≈7 kB gzip); see ADR-0002.

Three reference pages are measured in CI as the real-world proof (`tooling/size/`): a landing page (`base` only) ≤ 15 kB, an auth screen (`base` + `widgets/login`) ≤ 30 kB, and a full admin shell (every tier through `@aranghat/ui`) ≤ 180 kB. `@aranghat/ui` and its `defineAll()` are the ceiling, not the recommendation.

Server-side rendering costs the default client nothing: the hydratable runtime is a separate build behind the `artui-ssr` export condition ([Server-Side Rendering](./ssr)).

