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

/**
 * `closest()` through the flat tree: slotted content climbs to its slot (into a widget's shadow
 * root, e.g. `art-app-shell`) and shadow roots climb to their host. Light-DOM `closest()` cannot
 * see an `art-sidebar` that lives in the shadow root a group or button is slotted into.
 */
export function flatClosest(from: Element, selector: string): HTMLElement | null {
  let n: Node | null = from;
  while (n) {
    if (n.nodeType === 1 && (n as Element).matches(selector)) return n as HTMLElement;
    const slot: HTMLSlotElement | null = (n as Element).assignedSlot;
    if (slot) n = slot;
    else if (n.parentNode) n = n.parentNode;
    else { const root = n.getRootNode() as ShadowRoot; n = 'host' in root ? root.host : null; }
  }
  return null;
}

/** The provider around `from` (a trigger may also sit outside it: the first one on the page then). */
export function findProvider(from: Element): SidebarProviderLike | null {
  return (flatClosest(from, 'art-sidebar-provider') ?? document.querySelector('art-sidebar-provider')) as SidebarProviderLike | null;
}

/** Runs `apply` now and after every state change of `source`; returns the unsubscribe. */
export function watchState(source: Element | null, apply: () => void): () => void {
  apply();
  if (!source) return () => {};
  source.addEventListener(STATE_EVENT, apply);
  return () => source.removeEventListener(STATE_EVENT, apply);
}

/** Dispatched by `art-sidebar` on its slotted family members when it (re)applies its state — a member that
 *  connected before the sidebar existed (content slotted through a widget's shadow root) binds then. */
export const REBIND_EVENT = 'sidebar-rebind';
export const FAMILY = 'art-sidebar-group, art-sidebar-menu-item, art-sidebar-menu-button, art-sidebar-menu-sub';

/** Binds a family member to the nearest `art-sidebar` in the flat tree, now and on every rebind; returns the unsubscribe. */
export function bindSidebar(host: HTMLElement, apply: (sidebar: HTMLElement | null) => void): () => void {
  let sidebar: HTMLElement | null = null;
  let off: () => void = () => {};
  const bind = () => {
    const found = flatClosest(host, 'art-sidebar');
    if (found === sidebar) { apply(sidebar); return; }
    off();
    sidebar = found;
    off = watchState(sidebar, () => apply(sidebar));
  };
  bind();
  host.addEventListener(REBIND_EVENT, bind);
  return () => { off(); host.removeEventListener(REBIND_EVENT, bind); };
}

/** True while the sidebar shows icons only (collapsed with `collapsible="icon"`, desktop). */
export function isIconMode(sidebar: Element | null): boolean {
  return sidebar?.getAttribute('data-collapsible') === 'icon';
}
