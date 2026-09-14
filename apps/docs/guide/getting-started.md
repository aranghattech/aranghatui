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

> Publishing to a registry starts at 1.0. Until then consume the workspace packages directly.
