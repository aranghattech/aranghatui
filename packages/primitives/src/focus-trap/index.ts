import { containsAcrossShadow, deepActiveElement, getTabbables } from '../dom/index.js';

export interface FocusTrapOptions {
  /** Where focus goes on activation. @default 'first' */
  initialFocus?: 'first' | 'container' | HTMLElement | (() => HTMLElement | null);
  /** Restore focus to the previously focused element on release. @default true */
  returnFocus?: boolean;
}

export interface FocusTrap {
  release(): void;
}

const stack: FocusTrap[] = [];

/**
 * Modal focus containment (WAI-ARIA APG dialog pattern): Tab / Shift+Tab cycle inside the
 * container (shadow roots and slots included), focus that escapes is pulled back, and the
 * previous focus is restored on release. Traps stack; only the top-most one is active.
 */
export function trapFocus(container: HTMLElement, options: FocusTrapOptions = {}): FocusTrap {
  const { initialFocus = 'first', returnFocus = true } = options;
  const previouslyFocused = deepActiveElement() as HTMLElement | null;
  let released = false;

  const trap: FocusTrap = {
    release() {
      if (released) return;
      released = true;
      document.removeEventListener('keydown', onKeydown, true);
      document.removeEventListener('focusin', onFocusin, true);
      const i = stack.indexOf(trap);
      if (i >= 0) stack.splice(i, 1);
      if (returnFocus && previouslyFocused && typeof previouslyFocused.focus === 'function') previouslyFocused.focus();
    },
  };
  const isTop = () => stack[stack.length - 1] === trap;

  const focusEdge = (edge: 'first' | 'last') => {
    const tabbables = getTabbables(container);
    const target = edge === 'first' ? tabbables[0] : tabbables[tabbables.length - 1];
    (target ?? container).focus();
  };

  const onKeydown = (e: KeyboardEvent) => {
    if (e.key !== 'Tab' || !isTop()) return;
    const tabbables = getTabbables(container);
    if (tabbables.length === 0) { e.preventDefault(); container.focus(); return; }
    const active = deepActiveElement();
    const index = tabbables.indexOf(active as HTMLElement);
    if (e.shiftKey) {
      if (index <= 0) { e.preventDefault(); tabbables[tabbables.length - 1]!.focus(); }
    } else if (index === -1 || index === tabbables.length - 1) {
      e.preventDefault();
      tabbables[0]!.focus();
    }
  };
  const onFocusin = (e: FocusEvent) => {
    if (!isTop()) return;
    if (!containsAcrossShadow(container, e.target as Node, e.composedPath())) focusEdge('first');
  };

  stack.push(trap);
  document.addEventListener('keydown', onKeydown, true);
  document.addEventListener('focusin', onFocusin, true);

  if (!container.hasAttribute('tabindex')) container.tabIndex = -1;
  const target = typeof initialFocus === 'function' ? initialFocus() : initialFocus;
  if (target === 'container') container.focus();
  else if (target instanceof HTMLElement) target.focus();
  else focusEdge('first');

  return trap;
}
