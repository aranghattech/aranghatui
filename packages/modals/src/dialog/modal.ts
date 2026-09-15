import { lockScroll, unlockScroll } from '@aranghat/primitives/scroll-lock';

export type ModalReason = 'escape' | 'outside' | 'close';

export interface ModalOptions {
  /** Escape (the native `cancel` event) requests a close. @default true */
  escape?: boolean;
  /** A click on the backdrop requests a close. @default true */
  outside?: boolean;
  /** The component decides: it flips `open`, which calls `close()`. */
  onRequestClose: (reason: ModalReason) => void;
}

export interface Modal {
  readonly isOpen: boolean;
  open(): void;
  /** Plays the exit animation, then closes the native dialog (which returns focus). */
  close(): Promise<void>;
  destroy(): void;
}

/**
 * Modal behaviour on a native `<dialog>` (ADR-0020): `showModal()` puts it on the top layer,
 * makes the rest of the page inert and returns focus on close; this adds the document scroll
 * lock, exit animation (`data-state="open|closed"`), backdrop-click dismissal and keeps the
 * component's state in sync when the browser closes the dialog itself (Escape without a user
 * activation cannot be cancelled).
 */
export function createModal(dialog: HTMLDialogElement, options: ModalOptions): Modal {
  const { escape = true, outside = true, onRequestClose } = options;
  let shown = false;
  let locked = false;
  const lock = () => { if (!locked) { lockScroll(); locked = true; } };
  const unlock = () => { if (locked) { unlockScroll(); locked = false; } };
  const native = typeof dialog.showModal === 'function';

  const onCancel = (e: Event) => {
    e.preventDefault();
    if (escape) onRequestClose('escape');
  };
  const onClick = (e: MouseEvent) => {
    if (!outside || e.target !== dialog) return; // backdrop clicks target the dialog element itself
    const r = dialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) onRequestClose('outside');
  };
  /** The browser closed it on its own (Escape without activation): sync the component. */
  const onNativeClose = () => {
    if (!shown) return;
    shown = false;
    delete dialog.dataset.state;
    unlock();
    onRequestClose('escape');
  };
  dialog.addEventListener('cancel', onCancel);
  dialog.addEventListener('click', onClick);
  dialog.addEventListener('close', onNativeClose);

  return {
    get isOpen() { return shown; },
    open() {
      if (shown) return;
      shown = true;
      lock();
      if (native) { if (!dialog.open) dialog.showModal(); } else dialog.setAttribute('open', '');
      dialog.dataset.state = 'open';
    },
    close() {
      if (!shown) return Promise.resolve();
      shown = false;
      dialog.dataset.state = 'closed';
      return new Promise<void>((resolve) => {
        const done = (e?: Event) => {
          if (e && (e as AnimationEvent).pseudoElement) return; // the backdrop's own animation
          dialog.removeEventListener('animationend', done);
          if (dialog.dataset.state !== 'closed') return resolve(); // reopened meanwhile
          delete dialog.dataset.state;
          if (native) { if (dialog.open) dialog.close(); } else dialog.removeAttribute('open');
          unlock();
          resolve();
        };
        dialog.addEventListener('animationend', done);
        const name = typeof getComputedStyle === 'function' ? getComputedStyle(dialog).animationName : 'none';
        if (!name || name === 'none') queueMicrotask(done);
      });
    },
    destroy() {
      dialog.removeEventListener('cancel', onCancel);
      dialog.removeEventListener('click', onClick);
      dialog.removeEventListener('close', onNativeClose);
      if (shown) { shown = false; delete dialog.dataset.state; if (native && dialog.open) dialog.close(); }
      unlock();
    },
  };
}
