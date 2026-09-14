/** Shared DOM helpers that are shadow-DOM aware. Internal to primitives but exported for tiers. */

/** The deepest active element, following open shadow roots. */
export function deepActiveElement(root: Document | ShadowRoot = document): Element | null {
  let active = root.activeElement;
  while (active?.shadowRoot?.activeElement) active = active.shadowRoot.activeElement;
  return active;
}

/** Walks up through shadow hosts. */
export function parentAcrossShadow(node: Node): Node | null {
  if (node.parentNode) return node.parentNode;
  const root = node.getRootNode();
  return root instanceof ShadowRoot ? root.host : null;
}

/** `closest()` that crosses shadow boundaries (host → light DOM ancestors). */
export function closestAcrossShadow(node: Node | null, selector: string): Element | null {
  let cur: Node | null = node;
  while (cur) {
    if (cur instanceof Element && cur.matches(selector)) return cur;
    cur = parentAcrossShadow(cur);
  }
  return null;
}

/** True when `target` is inside `container`, crossing shadow boundaries (uses the event path when given). */
export function containsAcrossShadow(container: Node, target: Node | null, path?: EventTarget[]): boolean {
  if (path) return path.includes(container);
  let cur: Node | null = target;
  while (cur) {
    if (cur === container) return true;
    cur = parentAcrossShadow(cur);
  }
  return false;
}

export function isRtl(el: Element): boolean {
  const dir = closestAcrossShadow(el, '[dir]')?.getAttribute('dir');
  if (dir) return dir === 'rtl';
  return typeof getComputedStyle === 'function' && getComputedStyle(el).direction === 'rtl';
}

/**
 * Reads a CSS custom property (token) as pixels, e.g. `cssLength(host, '--art-space-1')`.
 * Keeps JS positioning maths on tokens (CLAUDE.md N6). rem/em are resolved; unitless → px.
 */
export function cssLength(el: Element, property: string): number {
  const raw = getComputedStyle(el).getPropertyValue(property).trim();
  if (!raw) return 0;
  const n = parseFloat(raw);
  if (Number.isNaN(n)) return 0;
  if (raw.endsWith('rem')) return n * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
  if (raw.endsWith('em')) return n * (parseFloat(getComputedStyle(el).fontSize) || 16);
  return n;
}

const TABBABLE = 'a[href],area[href],button,input,select,textarea,iframe,audio[controls],video[controls],[contenteditable]:not([contenteditable="false"]),[tabindex],summary';

function isVisible(el: HTMLElement): boolean {
  if (typeof (el as any).checkVisibility === 'function') return (el as any).checkVisibility();
  return true; // jsdom: no layout information
}

/** Tabbable elements in DOM order, descending into open shadow roots and assigned slot content. */
export function getTabbables(root: ParentNode): HTMLElement[] {
  const out: HTMLElement[] = [];
  const walk = (node: ParentNode) => {
    for (const child of Array.from(node.children)) {
      const el = child as HTMLElement;
      if (el instanceof HTMLSlotElement) {
        for (const assigned of el.assignedElements({ flatten: true })) { visit(assigned as HTMLElement); }
        continue;
      }
      visit(el);
    }
  };
  const visit = (el: HTMLElement) => {
    if (el.matches(TABBABLE) && !isDisabled(el) && el.tabIndex >= 0 && !el.hasAttribute('inert') && isVisible(el)) out.push(el);
    if (el.shadowRoot) walk(el.shadowRoot);
    else walk(el);
  };
  walk(root);
  return out;
}

function isDisabled(el: HTMLElement): boolean {
  return (el as HTMLButtonElement).disabled === true || el.getAttribute('aria-disabled') === 'true';
}
