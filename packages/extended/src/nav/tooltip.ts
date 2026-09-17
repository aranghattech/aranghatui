import { isRtl } from '@aranghat/primitives/dom';
import { createHoverIntent, type HoverIntent } from '@aranghat/primitives/hover-intent';
import { createOverlay, type Overlay } from '@aranghat/primitives/overlay';

/**
 * The label beside an icon-only row. Shared by the rail's items and by the panel's links while it
 * is collapsed — in both places the text is clipped, so hover and keyboard focus must reveal it.
 * Lives in the tier (not in primitives, which is at budget) because both consumers are here.
 */
export interface NavTip {
  /** Re-reads the anchor's direction and re-places the panel. */
  update(): void;
  destroy(): void;
}

export function createNavTip(anchor: HTMLElement, tip: HTMLElement, host: Element, enabled: () => boolean): NavTip {
  let overlay: Overlay | undefined;
  let hover: HoverIntent | undefined;
  const show = (open: boolean) => {
    if (open && !enabled()) return;
    if (open) {
      overlay ??= createOverlay(anchor, tip, { placement: isRtl(host) ? 'left' : 'right', offset: 6 });
      void overlay.open();
    } else void overlay?.close();
  };
  hover = createHoverIntent(anchor, { onOpen: () => show(true), onClose: () => show(false), focus: true, touch: false });
  return {
    update() {
      overlay?.destroy();
      overlay = undefined;
    },
    destroy() {
      hover?.destroy();
      overlay?.destroy();
      overlay = undefined;
    },
  };
}
