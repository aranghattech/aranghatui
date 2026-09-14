/**
 * Event helpers implementing CLAUDE.md §3a.
 *
 * `input`, `change`, `reset` and `submit` are not `composed`, so they never
 * leave a shadow root. Components that wrap a native control re-dispatch them
 * from the host so listeners on `<art-*>` see them with the host as `target`.
 */

const REDISPATCHED = new WeakSet<Event>();
const KEBAB = /^[a-z]+(-[a-z]+)*$/;

/**
 * Re-dispatch a native event from `host`. Returns `false` when the re-dispatched
 * event was cancelled by a listener (mirrors `dispatchEvent`).
 */
export function redispatch(host: HTMLElement, event: Event): boolean {
  if (REDISPATCHED.has(event)) return true;
  const clone = cloneEvent(event);
  REDISPATCHED.add(clone);
  const ok = host.dispatchEvent(clone);
  if (!ok && event.cancelable) event.preventDefault();
  return ok;
}

function cloneEvent(event: Event): Event {
  const init: EventInit = { bubbles: true, cancelable: event.cancelable, composed: true };
  if (event instanceof InputEvent) {
    return new InputEvent(event.type, { ...init, data: event.data, inputType: event.inputType, isComposing: event.isComposing });
  }
  if (event instanceof SubmitEvent) {
    return new SubmitEvent(event.type, { ...init, submitter: event.submitter });
  }
  return new Event(event.type, init);
}

/**
 * Dispatch a typed custom event from `host`. Custom event names are lowercase
 * kebab-case (ADR-0001). `detail` is a typed object, never a DOM event.
 */
export function emit<T>(host: HTMLElement, name: string, detail: T, options: { cancelable?: boolean } = {}): boolean {
  if (!KEBAB.test(name)) {
    throw new Error(`artui: custom event "${name}" must be lowercase kebab-case (ADR-0001)`);
  }
  return host.dispatchEvent(new CustomEvent<T>(name, { detail, bubbles: true, composed: true, cancelable: options.cancelable ?? false }));
}
