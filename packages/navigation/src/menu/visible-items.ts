/**
 * `visible-items`: cap a menu at a number of rows rather than at a pixel height.
 *
 * The row height is not a constant we can put in CSS — it comes from the control padding and the
 * line height, and an inset or a shortcut changes neither — so it is measured from a real item and
 * the panel's own padding and borders are added on top. The result is written as
 * `--art-menu-max-height`, the same knob a consumer sets by hand, so the two cannot disagree.
 *
 * A menu written with `open` runs this before its items have finished upgrading, when a row has no
 * height yet, so the first item is watched and the cap recomputed once it has one. The returned
 * disposer stops that watch.
 */
const ITEM = 'art-menu-item, [role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"]';
const NOOP = () => {};

export function applyVisibleItems(panel: HTMLElement | undefined, host: Element, visibleItems?: number, rowSelector: string = ITEM): () => void {
  if (!panel) return NOOP;
  if (!visibleItems || visibleItems < 1) {
    panel.style.removeProperty('--art-menu-max-height');
    return NOOP;
  }
  const item = host.querySelector<HTMLElement>(rowSelector);
  const apply = () => {
    // `offsetHeight`, not a client rect: the panel plays a scale-in animation, and a rect measured
    // mid-animation is 5% short — which would cap the menu 5% short for the rest of its life.
    const row = item?.offsetHeight ?? 0;
    if (!row) return; // not laid out yet (or a server document): the CSS default still applies
    const s = getComputedStyle(panel);
    const chrome = parseFloat(s.paddingBlockStart) + parseFloat(s.paddingBlockEnd) + parseFloat(s.borderBlockStartWidth) + parseFloat(s.borderBlockEndWidth);
    // Never taller than the room the panel has: asking for twenty rows on a phone must not push
    // half the menu off the screen. `--art-available-height` is set already — positioning ran first.
    const room = parseFloat(s.getPropertyValue('--art-available-height'));
    const wanted = Math.round(row * visibleItems + chrome);
    panel.style.setProperty('--art-menu-max-height', `${room > 0 ? Math.min(wanted, room) : wanted}px`);
  };
  apply();
  if (!item || typeof ResizeObserver === 'undefined') return NOOP;
  const observer = new ResizeObserver(apply);
  observer.observe(item);
  return () => observer.disconnect();
}

/**
 * An open menu owns exactly one tab stop (WAI-ARIA APG, menu pattern). Items rely on programmatic
 * focus, so at rest every one of them is `tabindex="-1"` — which leaves an open menu with nothing
 * a keyboard can reach, and a menu that scrolls then fails axe's `scrollable-region-focusable`:
 * its content is unreachable in Safari, which cannot scroll a region it cannot focus.
 *
 * So while the menu is open, its first enabled item is the tab stop; closing gives it back.
 */
export function setRestingTabStop(host: Element, open: boolean, rowSelector: string = 'art-menu-item'): void {
  const items = Array.from(host.querySelectorAll<HTMLElement>(rowSelector)).filter(
    (i) => !i.hasAttribute('disabled') && i.getAttribute('aria-disabled') !== 'true' && i.getAttribute('slot') !== 'trigger',
  );
  if (!items.length) return;
  for (const item of items) item.setAttribute('tabindex', '-1');
  if (open) items[0]!.setAttribute('tabindex', '0');
}
