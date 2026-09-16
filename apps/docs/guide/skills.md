# Agent Skills

artui ships a skill for AI coding agents: what an assistant needs to know to build with `@aranghat/*` — which tier a component lives in, that composition is by slot rather than by compound component, the framework idioms, the token rules, and how server-side rendering works.

It is published as `@aranghat/skills` and installed with the [`skills`](https://github.com/vercel-labs/skills) CLI, which works with Claude Code, Cursor, Copilot, Codex, Gemini CLI, Zed and most other agents.

## Install

Add the package, then sync what is in `node_modules`:

```bash
pnpm add -D @aranghat/skills
pnpm dlx skills experimental_sync
```

The skill lands in your agent's skills directory (`.agents/skills/artui`, `.claude/skills/artui`, …) and is recorded in `skills-lock.json`, so a teammate gets the same version with `pnpm dlx skills experimental_install`.

If you have access to the repository you can install it from there instead. The skill lives inside a package rather than at the repository root, so the CLI needs `--full-depth` to find it:

```bash
pnpm dlx skills add aranghattech/aranghatui --full-depth --skill artui
```

::: tip
`skills add` resolves git sources and download URLs, not npm names — `skills add @aranghat/skills` will not work. The package route above is the npm one.
:::

## What the agent learns

| Section | Covers |
|---|---|
| Tiers | Which package holds which component, and why an app installs two rather than all seven |
| Composition | Named slots instead of `<CardHeader>` / `<SelectTrigger>` / `asChild`, which is the difference most mistakes come from |
| Events | Native events staying native, kebab-case custom events, `v-model` and `ngModel`, form-associated controls |
| Styling | `className` on the host, `::part()` and CSS custom properties for internals, never a hardcoded value |
| Theming | `data-theme` for mode, `data-brand` for a brand, semantic tokens as the only vocabulary |
| SSR | `@aranghat/hydrate` and the `artui-ssr` resolve condition |

It closes by pointing at the component pages, because the generated API reference on each one is the authority for slot names and event payloads.

## Keeping it current

The skill is versioned with everything else in the scope, so `pnpm up "@aranghat/*"` followed by `pnpm dlx skills experimental_sync` refreshes it alongside the components it describes.
