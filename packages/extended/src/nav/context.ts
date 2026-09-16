/**
 * The rail tells its slotted sections whether the panel is collapsed, and each section tells its
 * own links. A shadow root cannot style another component's internals and a custom property cannot
 * be branched on in CSS, so the state travels down the flat tree as the `collapsed` attribute —
 * the same fan-out the Sidebar family uses (ADR-0019), kept small because the tree is two deep.
 * Both receivers declare it as a prop, which is what lets Stencil observe the attribute at all.
 */
export const COLLAPSED = 'collapsed';

/** Sets or clears `collapsed` on every element matching `selector` slotted into `host`. */
export function applyCollapsed(host: Element, selector: string, collapsed: boolean): void {
  for (const slot of Array.from(host.shadowRoot?.querySelectorAll('slot') ?? [])) {
    for (const el of slot.assignedElements({ flatten: true })) {
      if (el.matches(selector)) el.toggleAttribute(COLLAPSED, collapsed);
    }
  }
}
