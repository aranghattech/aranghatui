import { createFloating, type FloatingController, type Placement, type VirtualElement } from '../floating/index.js';

export interface OverlayOptions {
  /** Preferred side / alignment; flips and shifts to stay in view. @default 'bottom' */
  placement?: Placement;
  /** Gap between anchor and panel, in px. @default 4 */
  offset?: number;
  /** Arrow element positioned by floating-ui (Tooltip). */
  arrow?: HTMLElement | null;
  /** Make the panel as wide as the anchor (Select, Combobox). */
  matchReferenceWidth?: boolean;
  /** Publish the room that is left as `--art-available-height` on the panel (menus cap themselves with it). */
  availableHeight?: boolean;
}

export interface Overlay {
  readonly isOpen: boolean;
  /** Show the panel in the top layer and position it. Resolves once the panel is placed and visible (focus it then). */
  open(): Promise<void>;
  /** Play the exit animation (if the panel defines one), then hide. Resolves when hidden. */
  close(): Promise<void>;
  update(): Promise<void>;
  destroy(): void;
}

/** Enter/exit slide vector per side: the panel moves *towards* its anchor as it appears. */
const SLIDE: Record<string, string> = {
  top: '0 var(--art-space-2)',
  bottom: '0 calc(-1 * var(--art-space-2))',
  left: 'var(--art-space-2) 0',
  right: 'calc(-1 * var(--art-space-2)) 0',
};
/** The zoom grows out of the anchored edge (shadcn `origin-(--radix-*-transform-origin)`). */
const ORIGIN: Record<string, string> = { top: 'bottom center', bottom: 'top center', left: 'right center', right: 'left center' };

/**
 * Floating panel on the platform's top layer (Popover API, `popover="manual"`): the panel
 * stays where it is authored — inside the component's shadow root, so its styles keep
 * applying — yet escapes every `overflow: hidden` and stacking context, with no DOM moves.
 * Positioned by `createFloating` with the fixed strategy; `data-state="open|closed"` drives
 * the enter/exit animation and `--art-overlay-slide` its direction. Dismissal (Escape,
 * outside pointer) is the component's decision via `createDismissable`.
 *
 * The anchor may be a floating-ui virtual element: a panel that spans the viewport (the Mega
 * Menu's full-width panel) anchors to a rectangle as wide as the viewport at the bar's height.
 */
export function createOverlay(anchor: Element | VirtualElement, panel: HTMLElement, options: OverlayOptions = {}): Overlay {
  const { placement = 'bottom', offset = 4, arrow = null, matchReferenceWidth = false, availableHeight = false } = options;
  const native = typeof (panel as HTMLElement & { showPopover?: () => void }).showPopover === 'function';
  if (native) panel.setAttribute('popover', 'manual');
  let floating: FloatingController | undefined;
  let isOpen = false;

  // Without the Popover API the panel simply stays in place: `data-state` makes it visible
  // (component CSS hides an idle panel) and the fixed strategy still positions it.
  const show = () => { if (native && !panel.matches(':popover-open')) panel.showPopover(); };
  const hide = () => { if (native && panel.matches(':popover-open')) panel.hidePopover(); };
  const stopFloating = () => { floating?.destroy(); floating = undefined; };

  return {
    get isOpen() { return isOpen; },
    open() {
      if (isOpen) return Promise.resolve();
      isOpen = true;
      // The panel has to be rendered before it can be measured, but it must not be seen at the
      // viewport origin for that frame: show it hidden, then reveal and start the enter motion
      // from the computed position.
      panel.style.visibility = 'hidden';
      show();
      stopFloating();
      return new Promise<void>((resolve) => {
        floating = createFloating(anchor, panel, {
          placement, offset, arrow, matchReferenceWidth, availableHeight, strategy: 'fixed',
          onPositioned: ({ placement: p }) => {
            const side = p.split('-')[0] ?? '';
            panel.style.setProperty('--art-overlay-slide', SLIDE[side] ?? '0 0');
            panel.style.transformOrigin = ORIGIN[side] ?? 'center';
            if (panel.style.visibility) {
              panel.style.visibility = '';
              if (isOpen) panel.dataset.state = 'open';
              resolve();
            }
          },
        });
      });
    },
    close() {
      if (!isOpen) return Promise.resolve();
      isOpen = false;
      if (panel.style.visibility) { // never became visible: nothing to animate
        panel.style.visibility = '';
        stopFloating();
        hide();
        delete panel.dataset.state;
        return Promise.resolve();
      }
      panel.dataset.state = 'closed';
      return new Promise<void>((resolve) => {
        const done = () => {
          panel.removeEventListener('animationend', done);
          if (isOpen) return resolve(); // reopened during the exit animation
          stopFloating();
          hide();
          delete panel.dataset.state;
          resolve();
        };
        panel.addEventListener('animationend', done);
        const name = typeof getComputedStyle === 'function' ? getComputedStyle(panel).animationName : 'none';
        if (!name || name === 'none') queueMicrotask(done);
      });
    },
    update: () => floating?.update() ?? Promise.resolve(),
    destroy() {
      isOpen = false;
      stopFloating();
      hide();
      delete panel.dataset.state;
    },
  };
}
