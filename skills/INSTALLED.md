# Installed skills (2026-09-14)

Installed with `npx skills add … -a claude-code` into `.claude/skills/` (tracked in `skills-lock.json`):

| Skill | Source | Purpose in this repo |
|---|---|---|
| `better-ui` | jakubkrehel/skills | **Mandatory** visual craft pass before DoD sign-off (§12 step 7) |
| `better-accessibility` | jakubkrehel/skills | WCAG audit companion for the a11y gate |
| `better-typography` | jakubkrehel/skills | Type scale and wrapping checks (Typography, Kbd, Label) |
| `better-colors` | jakubkrehel/skills | Contrast and palette checks when brand themes are re-ported (ADR-0014) |
| `better-layout` | jakubkrehel/skills | Grouping / alignment review for widgets |
| `frontend-design` | anthropics/skills | Aesthetic direction and restraint checks |
| `skill-creator` | anthropics/skills | Used to author the repo-local skills below |
| `webapp-testing` | anthropics/skills | Playwright-driven verification of the sandbox apps |

Not found in the catalogues: a dedicated Playwright/visual-regression skill — covered by the repo-local `visual-testing` skill.

Repo-local skills live in `skills/<name>/SKILL.md` (this directory) and mirror CLAUDE.md §9 one-to-one.
