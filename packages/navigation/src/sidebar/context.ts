/**
 * Internal state fan-out for the Sidebar family. The provider owns the state (`open`,
 * `open-mobile`, the breakpoint); `art-sidebar` mirrors it as data attributes on its host and
 * every descendant re-reads them on the non-composed `sidebar-state` event. Plain class methods
 * of a Stencil component are not reachable from another element, so coordination goes through
 * props, attributes and events only.
 */
export const STATE_EVENT = 'sidebar-state';

export interface SidebarProviderLike extends HTMLElement {
  open: boolean;
  openMobile: boolean;
  toggle(): Promise<void>;
  setOpen(open: boolean): Promise<void>;
}

/** The provider around `from` (a trigger may also sit outside it: the first one on the page then). */
export function findProvider(from: Element): SidebarProviderLike | null {
  return (from.closest('art-sidebar-provider') ?? document.querySelector('art-sidebar-provider')) as SidebarProviderLike | null;
}

/** Runs `apply` now and after every state change of `source`; returns the unsubscribe. */
export function watchState(source: Element | null, apply: () => void): () => void {
  apply();
  if (!source) return () => {};
  source.addEventListener(STATE_EVENT, apply);
  return () => source.removeEventListener(STATE_EVENT, apply);
}

/** True while the sidebar shows icons only (collapsed with `collapsible="icon"`, desktop). */
export function isIconMode(sidebar: Element | null): boolean {
  return sidebar?.getAttribute('data-collapsible') === 'icon';
}
