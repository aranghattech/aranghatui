# ADR-0007: Per-icon ES modules and one generic `<art-icon>`

**Status:** Accepted (2026-09-14)

## Context
Options were a sprite sheet (requires hosting an asset and fetch), one custom element per icon (hundreds of registrations), or per-icon modules.

## Decision
`@aranghat/icons` exports one tiny module per lucide icon (`@aranghat/icons/check`) containing the SVG path data, plus a single `<art-icon>` element (in `base`) that renders any imported icon via its `icon` property, or a named slot for raw SVG. Components never bundle icons; they expose slots.

## Consequences
- Tree-shaking is trivially correct: an app pays only for icons it imports.
- Framework wrappers pass icon data as a property, not an attribute.
