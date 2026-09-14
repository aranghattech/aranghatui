# ADR-0001: Custom DOM events use lowercase kebab-case names

**Status:** Accepted (2026-09-14)

## Context
CLAUDE.md originally mandated all-lowercase, separator-free event names (`openchange`). The Stencil React output target builds the React prop as `on-` + event name run through kebab→camelCase, and the Angular output target camel-cases only on hyphens. With `openchange` the generated API would be `onOpenchange` and `(openchange)`, contradicting the idiomatic API promised in §3a.

## Decision
Custom events are named in lowercase kebab-case: `open-change`, `value-change`, `dismiss`. Prefixed collision forms are `art-select`, `art-close`. This yields `onOpenChange` (React), `(openChange)` (Angular) and `@open-change` (Vue) with zero post-processing.

## Consequences
- Web-platform idiomatic (`addEventListener('open-change')`), no case-sensitivity traps in plain HTML.
- §3a rules 2 and 3 amended. Event names remain public API; renaming is breaking.
