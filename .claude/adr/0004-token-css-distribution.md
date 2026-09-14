# ADR-0004: One token stylesheet plus per-brand override files

**Status:** Accepted (2026-09-14)

## Context
§4 already requires consumers to import exactly one CSS file. The question was whether light/dark and brand themes are split into separate files.

## Decision
`@aranghat/tokens/aranghat.css` contains the default theme: `:root` light values, `[data-theme="dark"]` values, and a `prefers-color-scheme: dark` block guarded so `data-theme="light"` wins. Brand themes ship as `@aranghat/tokens/themes/<name>.css`, override semantic tokens only, and are imported after `aranghat.css`.

## Consequences
- Dark mode is always available without a second import.
- Brand themes cannot introduce primitives or component tokens; the token lint enforces it.
