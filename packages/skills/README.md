# @aranghat/skills

Agent skills for artui: what an AI assistant needs to know to build with `@aranghat/*` — which tier a component lives in, how composition works (slots, not compound components), the framework idioms, and the token rules.

They are for **consumers** of the library. The skills in this repository's root `skills/` directory are for people working *on* artui.

## Install

The [`skills`](https://github.com/vercel-labs/skills) CLI resolves git sources, not npm names, so there are two ways in.

**From the repository** — pick the skill by name:

```bash
pnpm dlx skills add aranghattech/aranghatui --skill artui
```

**From the package** — add it, then sync what is in `node_modules`:

```bash
pnpm add -D @aranghat/skills
pnpm dlx skills experimental_sync
```

Either way the skill lands in your agent's skills directory (`.claude/skills/`, `.agents/skills/`, …) and is tracked in `skills-lock.json`. `pnpm dlx skills list` shows what is installed.

## What is in here

| Skill | Use it for |
|---|---|
| `artui` | Building an application UI with artui: choosing the tier, composing with slots, wiring events per framework, theming with tokens, and server-side rendering. |

Adding a skill: create `skills/<name>/SKILL.md` with `name` and `description` frontmatter. The description is what an agent matches against, so say when the skill applies, not what it contains.
