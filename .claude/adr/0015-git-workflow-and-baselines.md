# ADR-0015: Branch per component, PR, self-merge on green; baseline policy

**Status:** Accepted (2026-09-14). **Amended 2026-09-15:** no PRs are opened by Claude. Work is committed locally on a feature branch, docs updated, and the user is asked to review; the PR is created together afterwards.

## Decision
- `origin` is `github.com/aranghattech/aranghatui`. Work happens on `phase-N/<slug>` or `component/<name>` branches, one PR each, with the verify report and bundle delta in the PR body.
- Claude merges a PR when `pnpm verify` and CI are green. The next component does not start before that merge.
- First-ever baselines of a new component are committed by Claude after every image has been reviewed; the review is noted in the PR.
- Any change to an existing baseline requires the user's explicit approval in conversation before `pnpm test:visual -u` is run.

## Consequences
- The one-component-at-a-time rule never blocks on a human, while baseline drift always does.
