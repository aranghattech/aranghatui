/**
 * Reference-counted document scroll lock for modal overlays. Compensates the
 * scrollbar width with `scrollbar-gutter`-style padding so layout does not jump.
 */
let count = 0;
let previous: { overflow: string; paddingInlineEnd: string } | null = null;

export function lockScroll(): void {
  count += 1;
  if (count > 1 || typeof document === 'undefined') return;
  const root = document.documentElement;
  previous = { overflow: root.style.overflow, paddingInlineEnd: root.style.paddingInlineEnd };
  const scrollbar = window.innerWidth - root.clientWidth;
  root.style.overflow = 'hidden';
  if (scrollbar > 0) root.style.paddingInlineEnd = `${scrollbar}px`;
}

export function unlockScroll(): void {
  if (count === 0) return;
  count -= 1;
  if (count > 0 || typeof document === 'undefined') return;
  const root = document.documentElement;
  root.style.overflow = previous?.overflow ?? '';
  root.style.paddingInlineEnd = previous?.paddingInlineEnd ?? '';
  previous = null;
}

/** Test-only. */
export function isScrollLocked(): boolean {
  return count > 0;
}
