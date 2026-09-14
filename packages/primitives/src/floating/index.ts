import {
  arrow as arrowMiddleware,
  autoUpdate,
  computePosition,
  flip as flipMiddleware,
  offset as offsetMiddleware,
  shift as shiftMiddleware,
  size as sizeMiddleware,
  type Middleware,
  type Placement,
  type Strategy,
  type VirtualElement,
} from '@floating-ui/dom';

export type { Placement, Strategy, VirtualElement };

export interface FloatingOptions {
  /** Preferred placement. @default 'bottom' */
  placement?: Placement;
  /** Gap between reference and floating element in px — pass a token via `cssLength()`. @default 0 */
  offset?: number | (() => number);
  /** Flip to the opposite side when there is no room. @default true */
  flip?: boolean;
  /** Shift along the axis to stay in view. @default true */
  shift?: boolean;
  /** Viewport padding for flip/shift in px. @default 0 */
  padding?: number;
  /** Arrow element positioned against the reference. */
  arrow?: HTMLElement | null;
  /** Match the reference width (Select, Combobox). @default false */
  matchReferenceWidth?: boolean;
  /** `fixed` for portaled content. @default 'absolute' */
  strategy?: Strategy;
  /** Called after every position update. */
  onPositioned?: (position: FloatingPosition) => void;
}

export interface FloatingPosition {
  x: number;
  y: number;
  placement: Placement;
}

export interface FloatingController {
  /** Recompute now (autoUpdate already tracks scroll/resize/layout). */
  update(): Promise<void>;
  destroy(): void;
}

/**
 * Positions `floating` relative to `reference` with @floating-ui/dom (the only approved
 * positioning dependency, CLAUDE.md §6). Sets `data-placement` on the floating element
 * so components can style arrows/animations per side. Uses translate() with rounded
 * coordinates so text stays crisp.
 */
export function createFloating(reference: Element | VirtualElement, floating: HTMLElement, options: FloatingOptions = {}): FloatingController {
  const {
    placement = 'bottom',
    offset = 0,
    flip = true,
    shift = true,
    padding = 0,
    arrow = null,
    matchReferenceWidth = false,
    strategy = 'absolute',
    onPositioned,
  } = options;
  let destroyed = false;

  const update = async () => {
    if (destroyed) return;
    const middleware: Middleware[] = [offsetMiddleware(typeof offset === 'function' ? offset() : offset)];
    if (flip) middleware.push(flipMiddleware({ padding }));
    if (shift) middleware.push(shiftMiddleware({ padding }));
    if (matchReferenceWidth) {
      middleware.push(sizeMiddleware({ apply({ rects, elements }) { elements.floating.style.width = `${rects.reference.width}px`; } }));
    }
    if (arrow) middleware.push(arrowMiddleware({ element: arrow }));

    const result = await computePosition(reference, floating, { placement, strategy, middleware });
    if (destroyed) return;
    Object.assign(floating.style, { position: strategy, left: '0', top: '0', transform: `translate(${Math.round(result.x)}px, ${Math.round(result.y)}px)` });
    floating.dataset.placement = result.placement;
    if (arrow && result.middlewareData.arrow) {
      const { x, y } = result.middlewareData.arrow;
      const side = result.placement.split('-')[0] as 'top' | 'bottom' | 'left' | 'right';
      const opposite = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' }[side];
      Object.assign(arrow.style, { position: 'absolute', left: x != null ? `${x}px` : '', top: y != null ? `${y}px` : '', right: '', bottom: '', [opposite]: `${-arrow.offsetWidth / 2}px` });
    }
    onPositioned?.({ x: result.x, y: result.y, placement: result.placement });
  };

  const cleanup = autoUpdate(reference, floating, () => { void update(); }, {
    elementResize: typeof ResizeObserver !== 'undefined',
    layoutShift: typeof IntersectionObserver !== 'undefined',
  });

  return {
    update,
    destroy() {
      destroyed = true;
      cleanup();
    },
  };
}
