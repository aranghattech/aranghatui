/**
 * Stable unique ids for ARIA wiring (`aria-labelledby`, `aria-controls`, …).
 * A monotonic counter is deterministic per document, which keeps server and
 * client output aligned as long as components are created in the same order.
 */
let counter = 0;

export function uniqueId(prefix = 'art'): string {
  counter += 1;
  return `${prefix}-${counter.toString(36)}`;
}

/** Test-only: reset the counter so snapshots are stable. */
export function resetIdCounter(): void {
  counter = 0;
}
