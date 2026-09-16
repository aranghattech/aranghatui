/**
 * Registers the lower-tier elements a widget renders inside its shadow root (idempotent; peers,
 * never bundled). A no-op on the server: `@aranghat/hydrate` renders every tier itself (ADR-0023).
 */
export function defineOnClient(...defines: Array<() => void>): void {
  if (!globalThis.customElements) return;
  for (const define of defines) define();
}
