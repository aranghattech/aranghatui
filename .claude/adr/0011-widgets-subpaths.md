# ADR-0011: Widgets are addressed by subpath, not separate packages

**Status:** Accepted (2026-09-14)

## Context
Splitting each widget into its own package would multiply lockstep releases without a bundle-size benefit, since subpath exports already tree-shake.

## Decision
`@aranghat/widgets/login`, `@aranghat/widgets/app-shell`, etc., via `package.json` `exports`; likewise for the framework packages (`@aranghat/widgets-react/login`).

## Consequences
- The "auth screen" reference budget imports only `base` and `widgets/login`.
