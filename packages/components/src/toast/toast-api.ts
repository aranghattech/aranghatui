/**
 * Toast queue shared by every `<art-toaster>` on the page and the imperative `toast()` API
 * (shadcn's Sonner idiom: `toast('Saved')`, `toast.success(…)`, `toast.promise(…)`), exported
 * from `@aranghat/components`. The store only holds data; timers, hover-pause and rendering
 * belong to the toaster component. Lives in the tier, not in primitives: it is used by one
 * component and the primitives bundle has no headroom.
 */
export type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info' | 'loading';

export interface ToastAction {
  label: string;
  onClick?: (event: MouseEvent) => void;
}
export interface ToastOptions {
  id?: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
  /** ms until auto-dismiss; `Infinity` keeps it until dismissed. Loading toasts never auto-dismiss. */
  duration?: number;
  action?: ToastAction;
  cancel?: ToastAction;
  /** Show a close button. */
  closeButton?: boolean;
  /** Called when the toast leaves for any reason. */
  onDismiss?: (id: string) => void;
}
export interface ToastData extends ToastOptions {
  id: string;
  createdAt: number;
}
type Listener = (toasts: ToastData[]) => void;

let seq = 0;
let toasts: ToastData[] = [];
const listeners = new Set<Listener>();
const notify = () => { for (const l of listeners) l(toasts); };

export const toastStore = {
  get toasts(): ToastData[] { return toasts; },
  add(options: ToastOptions): string {
    const id = options.id ?? `art-toast-${++seq}`;
    if (toasts.some((t) => t.id === id)) return this.update(id, options);
    toasts = [...toasts, { ...options, id, createdAt: Date.now() }];
    notify();
    return id;
  },
  update(id: string, options: ToastOptions): string {
    toasts = toasts.map((t) => (t.id === id ? { ...t, ...options, id, createdAt: Date.now() } : t));
    notify();
    return id;
  },
  /** Removes one toast (or all). */
  dismiss(id?: string) {
    const gone = id === undefined ? toasts : toasts.filter((t) => t.id === id);
    if (!gone.length) return;
    toasts = id === undefined ? [] : toasts.filter((t) => t.id !== id);
    for (const t of gone) t.onDismiss?.(t.id);
    notify();
  },
  subscribe(listener: Listener): () => void {
    listeners.add(listener);
    listener(toasts);
    return () => { listeners.delete(listener); };
  },
};

const normalize = (message: string | ToastOptions, options: ToastOptions = {}): ToastOptions =>
  typeof message === 'string' ? { ...options, title: message } : { ...message, ...options };

/** Show a toast; returns its id. `<art-toaster>` must be on the page to render it. */
export function toast(message: string | ToastOptions, options?: ToastOptions): string {
  return toastStore.add(normalize(message, options));
}
type Show = (message: string | ToastOptions, options?: ToastOptions) => string;
const withVariant = (variant: ToastVariant): Show => (message, options) => toastStore.add({ ...normalize(message, options), variant });
toast.success = withVariant('success');
toast.error = withVariant('error');
toast.warning = withVariant('warning');
toast.info = withVariant('info');
toast.loading = withVariant('loading');
toast.dismiss = (id?: string) => toastStore.dismiss(id);
/** A loading toast that turns into success or error when the promise settles. */
toast.promise = <T>(promise: Promise<T>, messages: { loading: string | ToastOptions; success: string | ToastOptions | ((value: T) => string | ToastOptions); error: string | ToastOptions | ((reason: unknown) => string | ToastOptions) }): Promise<T> => {
  const id = toastStore.add({ ...normalize(messages.loading), variant: 'loading' });
  promise.then(
    (value) => toastStore.update(id, { ...normalize(typeof messages.success === 'function' ? messages.success(value) : messages.success), variant: 'success' }),
    (reason) => toastStore.update(id, { ...normalize(typeof messages.error === 'function' ? messages.error(reason) : messages.error), variant: 'error' }),
  );
  return promise;
};
