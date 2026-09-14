# Bundle Size

Two levers: install only the tiers you need, and import only the components you use (`@aranghat/base-react/button`). Budgets (gzip) are enforced by `size-limit` in CI — see `CLAUDE.md` §7 and `.size-limit.json`. Each tier carries its own feature-tree-shaken Stencil runtime (≈7 kB gzip); see ADR-0002.
