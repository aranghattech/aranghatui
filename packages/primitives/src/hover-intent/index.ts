export interface HoverIntentOptions {
  onOpen: () => void;
  onClose: () => void;
  /** Delay before opening on hover, ms. @default `--art-duration-hover-open` (300) */
  openDelay?: number;
  /** Delay before closing after the pointer leaves, ms. @default `--art-duration-hover-close` (150) */
  closeDelay?: number;
  /** Open on keyboard focus (`:focus-visible`), close on blur. @default true */
  focus?: boolean;
  /** Open on press-and-hold with a touch pointer (touch has no hover). @default true */
  touch?: boolean;
  /** Extra elements that count as "inside" (the panel itself keeps a hover card open). */
  also?: () => Iterable<Element | null | undefined>;
}

export interface HoverIntent {
  /** Cancel pending timers (e.g. when the component closes for another reason). */
  cancel(): void;
  destroy(): void;
}

/** Reads a `<duration>` token off the root, in ms. */
export function durationToken(name: string, fallback: number): number {
  if (typeof getComputedStyle !== 'function') return fallback;
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  if (!raw) return fallback;
  const n = parseFloat(raw);
  return Number.isNaN(n) ? fallback : raw.endsWith('ms') ? n : n * 1000;
}

/**
 * Hover-to-open with intent delays (Tooltip, Hover Card): pointer enter/leave with open and
 * close timers, keyboard focus-visible, and press-and-hold on touch. Timers are shared across
 * the trigger and any `also` elements, so moving from trigger to panel never closes.
 */
export function createHoverIntent(target: Element, options: HoverIntentOptions): HoverIntent {
  const { onOpen, onClose, focus = true, touch = true, also } = options;
  const openDelay = options.openDelay ?? durationToken('--art-duration-hover-open', 300);
  const closeDelay = options.closeDelay ?? durationToken('--art-duration-hover-close', 150);
  let openTimer: ReturnType<typeof setTimeout> | undefined;
  let closeTimer: ReturnType<typeof setTimeout> | undefined;
  let holdTimer: ReturnType<typeof setTimeout> | undefined;
  let isOpen = false; // only what this helper opened gets closed by it
  const clear = () => { clearTimeout(openTimer); clearTimeout(closeTimer); clearTimeout(holdTimer); openTimer = closeTimer = holdTimer = undefined; };
  const doOpen = () => { if (isOpen) return; isOpen = true; onOpen(); };
  const scheduleOpen = (delay: number) => { clearTimeout(closeTimer); closeTimer = undefined; if (openTimer || isOpen) return; openTimer = setTimeout(() => { openTimer = undefined; doOpen(); }, delay); };
  const scheduleClose = () => { clearTimeout(openTimer); openTimer = undefined; if (closeTimer || !isOpen) return; closeTimer = setTimeout(() => { closeTimer = undefined; isOpen = false; onClose(); }, closeDelay); };

  const enter = (e: Event) => { if ((e as PointerEvent).pointerType === 'touch') return; scheduleOpen(openDelay); };
  const leave = (e: Event) => { if ((e as PointerEvent).pointerType === 'touch') return; scheduleClose(); };
  // The focused element itself, not the (retargeted) event target: a delegates-focus host such as Button or
  // Toggle matches `:focus` but never `:focus-visible`, so a tooltip on it would not open from the keyboard.
  const focusIn = (e: Event) => { if (focus && (e.composedPath()[0] as Element).matches?.(':focus-visible')) scheduleOpen(0); };
  const focusOut = () => { if (focus) scheduleClose(); };
  const down = (e: Event) => {
    if (!touch || (e as PointerEvent).pointerType !== 'touch') return;
    clearTimeout(holdTimer);
    holdTimer = setTimeout(() => { holdTimer = undefined; doOpen(); }, openDelay);
  };
  const up = () => { clearTimeout(holdTimer); holdTimer = undefined; };

  const elements = () => [target, ...Array.from(also?.() ?? [])].filter(Boolean) as Element[];
  const bound: Array<[Element, string, EventListener]> = [];
  const listen = (el: Element, type: string, fn: EventListener) => { el.addEventListener(type, fn); bound.push([el, type, fn]); };
  for (const el of elements()) {
    listen(el, 'pointerenter', enter);
    listen(el, 'pointerleave', leave);
  }
  listen(target, 'focusin', focusIn);
  listen(target, 'focusout', focusOut);
  listen(target, 'pointerdown', down);
  listen(target, 'pointerup', up);
  listen(target, 'pointercancel', up);

  return {
    /** Forget pending timers and the open state (the component closed for another reason). */
    cancel() { clear(); isOpen = false; },
    destroy() {
      clear();
      for (const [el, type, fn] of bound) el.removeEventListener(type, fn);
    },
  };
}
