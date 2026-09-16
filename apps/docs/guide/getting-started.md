# Getting Started

artui is published as one package per tier. Install only the tiers you use.

::: code-group
```bash [HTML]
pnpm add @aranghat/tokens @aranghat/base
```
```bash [React]
pnpm add @aranghat/tokens @aranghat/base @aranghat/base-react
```
```bash [Vue]
pnpm add @aranghat/tokens @aranghat/base @aranghat/base-vue
```
```bash [Angular]
pnpm add @aranghat/tokens @aranghat/base @aranghat/base-angular
```
:::

Import exactly one stylesheet, once:

```ts
import '@aranghat/tokens/aranghat.css';
```

Then use components from the tier packages — see any component page for the four-framework usage. Tiers: `base` → `components` → `navigation` → `modals` → `widgets`; each depends only on the tiers above it, plus `tokens` and `primitives`.

::: tip Just get me started
`@aranghat/ui` re-exports every tier (and `defineAll()` registers every element) for a prototype or an internal tool. It costs the bundle of every tier you do not use — the [Bundle Size](./bundle-size) guide explains why the per-tier packages are the default.
:::

> Packages are published to GitHub Packages from 1.0 ([Versioning](./versioning)); before that, consume the workspace packages directly.
