import { defineCustomElement as defineButton } from '@aranghat/base/button';
import { defineCustomElement as defineField } from '@aranghat/base/field';
import { defineCustomElement as defineInput } from '@aranghat/base/input';
import { defineCustomElement as defineLabel } from '@aranghat/base/label';

/** Options shared by `confirm`, `alert` and `prompt`; a plain string is the title. */
export interface CommonDialogOptions {
  title: string;
  description?: string;
  /** The confirming button. @default 'Continue' (`alert`: 'OK') */
  actionLabel?: string;
  /** @default 'Cancel' */
  cancelLabel?: string;
  /** Style the action as destructive (deleting something). */
  destructive?: boolean;
  /** Panel width (`alert` / `confirm`). @default 'md' */
  size?: 'sm' | 'md';
}
export interface PromptOptions extends CommonDialogOptions {
  /** Field label. @default the title */
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  /** Input type. @default 'text' */
  type?: string;
  /** Keep the dialog open until something is typed. */
  required?: boolean;
}

type Opts<T extends CommonDialogOptions> = string | T;
type Openable = HTMLElement & { open: boolean };
const norm = <T extends CommonDialogOptions>(o: Opts<T>): T => (typeof o === 'string' ? ({ title: o } as T) : o);

/** The dialogs are lazily registered from the tier's own component modules when nothing did it yet. */
async function ensure(tag: 'art-dialog' | 'art-alert-dialog'): Promise<void> {
  if (!customElements.get(tag)) {
    const mod = (tag === 'art-dialog' ? await import('../dialog/art-dialog') : await import('../alert-dialog/art-alert-dialog')) as unknown as { defineCustomElement?: () => void };
    mod.defineCustomElement?.();
  }
  await customElements.whenDefined(tag);
}
function text(slot: string, value: string): HTMLElement {
  const s = document.createElement('span');
  s.slot = slot;
  s.textContent = value;
  return s;
}
function button(label: string, slot: string, variant?: string, close = false): HTMLElement {
  const b = document.createElement('art-button');
  b.slot = slot;
  if (variant) b.setAttribute('variant', variant);
  if (close) b.setAttribute('dialog-close', '');
  b.textContent = label;
  return b;
}
/** Mounts the dialog at the end of `<body>`, opens it, resolves when it closes and removes it after the exit motion. */
function run<T>(el: Openable, result: () => T, settle?: (resolve: (v: T) => void) => void): Promise<T> {
  return new Promise<T>((resolve) => {
    let done = false;
    const finish = (v: T) => { if (done) return; done = true; resolve(v); setTimeout(() => el.remove(), 400); };
    el.setAttribute('data-art-common-dialog', '');
    el.addEventListener('open-change', (e) => { if (!(e as CustomEvent<{ open: boolean }>).detail.open) finish(result()); });
    settle?.((v) => { finish(v); el.open = false; });
    document.body.append(el);
    el.open = true;
  });
}

/** Asks a yes / no question in an Alert Dialog; resolves `true` for the action, `false` for cancel / Escape. */
export async function confirm(options: Opts<CommonDialogOptions>): Promise<boolean> {
  const o = norm(options);
  await ensure('art-alert-dialog');
  defineButton();
  const el = document.createElement('art-alert-dialog') as Openable;
  if (o.size) el.setAttribute('size', o.size);
  el.append(text('title', o.title));
  if (o.description) el.append(text('description', o.description));
  el.append(button(o.cancelLabel ?? 'Cancel', 'cancel', 'outline'), button(o.actionLabel ?? 'Continue', 'action', o.destructive ? 'destructive' : undefined));
  let ok = false;
  el.addEventListener('action', () => { ok = true; });
  return run(el, () => ok);
}

/** Shows a message the user must acknowledge (an Alert Dialog with one button); resolves when it closes. */
export async function alert(options: Opts<CommonDialogOptions>): Promise<void> {
  const o = norm(options);
  await ensure('art-alert-dialog');
  defineButton();
  const el = document.createElement('art-alert-dialog') as Openable;
  if (o.size) el.setAttribute('size', o.size);
  el.append(text('title', o.title));
  if (o.description) el.append(text('description', o.description));
  el.append(button(o.actionLabel ?? 'OK', 'action'));
  return run(el, () => undefined);
}

/** Asks for a value in a Dialog with one field; resolves the text for the action, `null` for cancel / Escape. */
export async function prompt(options: Opts<PromptOptions>): Promise<string | null> {
  const o = norm(options);
  await ensure('art-dialog');
  defineButton();
  defineField();
  defineInput();
  defineLabel();
  const el = document.createElement('art-dialog') as Openable;
  el.append(text('title', o.title));
  if (o.description) el.append(text('description', o.description));
  const field = document.createElement('art-field');
  const label = document.createElement('art-label');
  label.slot = 'label';
  label.textContent = o.label ?? o.title;
  const input = document.createElement('art-input') as HTMLElement & { value: string; invalid: boolean };
  if (o.type) input.setAttribute('type', o.type);
  if (o.placeholder) input.setAttribute('placeholder', o.placeholder);
  if (o.defaultValue) input.setAttribute('value', o.defaultValue);
  field.append(label, input);
  const cancel = button(o.cancelLabel ?? 'Cancel', 'footer', 'outline', true);
  const action = button(o.actionLabel ?? 'OK', 'footer', o.destructive ? 'destructive' : undefined);
  el.append(field, cancel, action);
  return run<string | null>(el, () => null, (resolve) => {
    const submit = () => {
      const value = input.value ?? '';
      if (o.required && !value.trim()) { input.invalid = true; input.focus(); return; }
      resolve(value);
    };
    action.addEventListener('click', submit);
    el.addEventListener('keydown', (e) => { if (e.key === 'Enter' && e.composedPath().includes(input)) { e.preventDefault(); submit(); } });
  });
}
