import { containsAcrossShadow } from '../dom/index.js';
import { lockScroll, unlockScroll } from '../scroll-lock/index.js';

export type DismissReason = 'escape' | 'pointer-outside' | 'focus-outside';

export interface DismissableOptions {
  onDismiss: (reason: DismissReason, event: Event) => void;
  /** @default true */
  escape?: boolean;
  /** @default true */
  pointerOutside?: boolean;
  /** @default false */
  focusOutside?: boolean;
  /** Elements whose events never dismiss (e.g. the trigger). */
  ignore?: () => Iterable<Element | null | undefined>;
  /** Lock document scroll while active (modal layers). @default false */
  lockScroll?: boolean;
}

export interface Dismissable {
  destroy(): void;
}

interface Entry { el: Element; options: DismissableOptions }
const stack: Entry[] = [];

/**
 * Outside-click / Escape / focus-outside dismissal (CLAUDE.md §6). Layered: only the
 * top-most active dismissable reacts to Escape, so nested overlays close one at a time.
 * Shadow-DOM aware via `composedPath()`.
 */
export function createDismissable(el: Element, options: DismissableOptions): Dismissable {
  const entry: Entry = { el, options };
  stack.push(entry);
  const { escape = true, pointerOutside = true, focusOutside = false } = options;
  const isTop = () => stack[stack.length - 1] === entry;
  const ignored = (path: EventTarget[]) => Array.from(options.ignore?.() ?? []).some((i) => i && path.includes(i));

  const onKeydown = (e: KeyboardEvent) => {
    if (!escape || e.key !== 'Escape' || e.defaultPrevented || !isTop()) return;
    e.preventDefault();
    options.onDismiss('escape', e);
  };
  const onPointerdown = (e: PointerEvent) => {
    if (!pointerOutside || !isTop()) return;
    const path = e.composedPath();
    if (containsAcrossShadow(el, e.target as Node, path) || ignored(path)) return;
    options.onDismiss('pointer-outside', e);
  };
  // Focus outside dismisses only once focus has actually been inside (or on an ignored element such as
  // the trigger): a layer open at page load must not close because the page focused something else.
  let hadFocus = containsAcrossShadow(el, document.activeElement as Node) || ignored([document.activeElement as EventTarget]);
  const onFocusin = (e: FocusEvent) => {
    if (!focusOutside || !isTop()) return;
    const path = e.composedPath();
    if (containsAcrossShadow(el, e.target as Node, path) || ignored(path)) { hadFocus = true; return; }
    if (!hadFocus) return;
    options.onDismiss('focus-outside', e);
  };

  document.addEventListener('keydown', onKeydown, true);
  document.addEventListener('pointerdown', onPointerdown, true);
  document.addEventListener('focusin', onFocusin, true);
  if (options.lockScroll) lockScroll();

  return {
    destroy() {
      document.removeEventListener('keydown', onKeydown, true);
      document.removeEventListener('pointerdown', onPointerdown, true);
      document.removeEventListener('focusin', onFocusin, true);
      if (options.lockScroll) unlockScroll();
      const i = stack.indexOf(entry);
      if (i >= 0) stack.splice(i, 1);
    },
  };
}
