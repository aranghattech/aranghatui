import { AttachInternals, Component, Element, Event, EventEmitter, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import { uniqueId } from '@aranghat/primitives/id';

export interface QuestionnaireChoice {
  value: string;
  label: string;
  description?: string;
}
export interface QuestionnaireItem {
  /** Answer key (FormData entry name). */
  name: string;
  prompt: string;
  description?: string;
  required?: boolean;
  choices?: QuestionnaireChoice[];
  /** Checkboxes instead of radios; the answer is an array. */
  multiple?: boolean;
  /** A free-text answer, alone or as "another answer" below the choices. */
  input?: { label: string; placeholder?: string; multiline?: boolean };
  /** Validation (no schema library): a regex for text, min / max selections for `multiple`, length bounds for text. */
  pattern?: string;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  /** Message shown instead of the built-in one. */
  errorMessage?: string;
}
export type QuestionnaireAnswers = Record<string, string | string[]>;

/**
 * Questionnaire — shadcn/ui parity. A multi-step form: one question at a time with single or
 * multiple choice, a free-text answer, progress, previous / skip / next / submit, keyboard
 * shortcuts and built-in validation (required, pattern, min / max, length). Questions come as
 * data (`items`); answers leave as an object and as FormData (form-associated).
 *
 * @part progress - The "Question n of N" progress bar.
 * @part item - The `<fieldset>` of the active question.
 * @part title - The `<legend>`.
 * @part description - The question's description.
 * @part choices - The choices list.
 * @part choice - One choice card.
 * @part input - The free-text field.
 * @part error - The validation message.
 * @part actions - The navigation row.
 * @part previous - The Previous button.
 * @part skip - The Skip button.
 * @part next - The Next / Submit button.
 */
@Component({ tag: 'art-questionnaire', styleUrl: 'art-questionnaire.css', shadow: { delegatesFocus: true }, formAssociated: true })
export class ArtQuestionnaire {
  @Element() host!: HTMLElement;
  @AttachInternals() internals?: ElementInternals;
  private id = uniqueId('art-questionnaire');
  private fieldset?: HTMLFieldSetElement;

  /** The questions (array, or a JSON string attribute). */
  @Prop() items: QuestionnaireItem[] | string = [];
  /** Answers by question name; `multiple` answers are arrays. */
  @Prop({ mutable: true }) value: QuestionnaireAnswers = {};
  /** Zero-based index of the visible question. */
  @Prop({ mutable: true, reflect: true }) step = 0;
  /** Keyboard shortcuts on choices: `letters` (A, B, C…), `numbers` (1, 2, 3…) or `none`. */
  @Prop() shortcuts: 'letters' | 'numbers' | 'none' = 'letters';
  /** Custom validation: return a message to block, or nothing to accept. */
  @Prop() validate?: (item: QuestionnaireItem, answer: string | string[] | undefined) => string | undefined | void;
  @Prop({ attribute: 'previous-label' }) previousLabel = 'Previous';
  @Prop({ attribute: 'next-label' }) nextLabel = 'Next';
  @Prop({ attribute: 'skip-label' }) skipLabel = 'Skip';
  @Prop({ attribute: 'submit-label' }) submitLabel = 'Submit';
  @Prop({ reflect: true }) name?: string;
  @Prop({ reflect: true }) disabled = false;
  @State() private error?: string;
  @State() private submitted = false;

  /** Emitted when an answer changes; `detail.name`, `detail.value`, `detail.answers`. */
  @Event({ eventName: 'answer-change', bubbles: true, composed: true }) answerChange!: EventEmitter<{ name: string; value: string | string[] | undefined; answers: QuestionnaireAnswers }>;
  /** Emitted when the visible question changes; `detail.step`, `detail.item`. */
  @Event({ eventName: 'step-change', bubbles: true, composed: true }) stepChange!: EventEmitter<{ step: number; item: QuestionnaireItem }>;
  /** Emitted on Submit once every question validates; `detail.answers`. (`submit` is the native form event.) */
  @Event({ eventName: 'complete', bubbles: true, composed: true }) complete!: EventEmitter<{ answers: QuestionnaireAnswers }>;

  private list(): QuestionnaireItem[] {
    if (typeof this.items === 'string') { try { return JSON.parse(this.items) as QuestionnaireItem[]; } catch { return []; } }
    return this.items ?? [];
  }
  private current(): QuestionnaireItem | undefined { return this.list()[this.step]; }

  componentDidLoad() { this.syncForm(); }
  formResetCallback() { this.value = {}; this.step = 0; this.error = undefined; this.submitted = false; }
  formDisabledCallback(disabled: boolean) { this.disabled = disabled; }

  @Watch('value')
  syncForm() {
    if (!this.internals?.setFormValue) return;
    const fd = new FormData();
    for (const [k, v] of Object.entries(this.value)) for (const x of Array.isArray(v) ? v : [v]) if (x !== undefined && x !== '') fd.append(k, x);
    this.internals.setFormValue(fd);
  }
  @Watch('step')
  onStep(step: number) {
    this.error = undefined;
    const item = this.list()[step];
    if (item) this.stepChange.emit({ step, item });
    requestAnimationFrame(() => this.fieldset?.querySelector<HTMLElement>('input, textarea')?.focus({ preventScroll: true }));
  }

  /** Focus the active question. */
  @Method() async setFocus() { this.fieldset?.querySelector<HTMLElement>('input, textarea')?.focus(); }
  /** Validate the visible question and move on (or complete on the last one). */
  @Method() async next() { this.goNext(); }

  private set(name: string, v: string | string[] | undefined) {
    const answers = { ...this.value };
    if (v === undefined || v === '' || (Array.isArray(v) && !v.length)) delete answers[name]; else answers[name] = v;
    this.value = answers;
    this.error = undefined;
    this.answerChange.emit({ name, value: v, answers });
  }
  private choose(item: QuestionnaireItem, value: string, checked: boolean) {
    if (item.multiple) {
      const cur = ([] as string[]).concat((this.value[item.name] as string[] | undefined) ?? []);
      this.set(item.name, checked ? [...new Set([...cur, value])] : cur.filter((x) => x !== value));
    } else this.set(item.name, value);
  }
  private check(item: QuestionnaireItem): string | undefined {
    const v = this.value[item.name];
    const empty = v === undefined || v === '' || (Array.isArray(v) && !v.length);
    if (item.required && empty) return item.errorMessage ?? 'Please answer this question.';
    if (!empty && Array.isArray(v)) {
      if (item.min !== undefined && v.length < item.min) return item.errorMessage ?? `Choose at least ${item.min}.`;
      if (item.max !== undefined && v.length > item.max) return item.errorMessage ?? `Choose at most ${item.max}.`;
    }
    if (!empty && typeof v === 'string' && !item.choices?.some((c) => c.value === v)) {
      if (item.minLength !== undefined && v.length < item.minLength) return item.errorMessage ?? `Use at least ${item.minLength} characters.`;
      if (item.maxLength !== undefined && v.length > item.maxLength) return item.errorMessage ?? `Use at most ${item.maxLength} characters.`;
      if (item.pattern && !new RegExp(`^(?:${item.pattern})$`).test(v)) return item.errorMessage ?? 'That answer is not in the expected format.';
    }
    return this.validate?.(item, v) ?? undefined;
  }
  private goNext() {
    const item = this.current();
    if (!item) return;
    const err = this.check(item);
    if (err) { this.error = err; return; }
    if (this.step < this.list().length - 1) { this.step++; return; }
    // last question: every earlier one must validate too
    const firstBad = this.list().findIndex((it) => this.check(it));
    if (firstBad >= 0) { this.step = firstBad; this.error = this.check(this.list()[firstBad]!); return; }
    this.submitted = true;
    this.complete.emit({ answers: this.value });
  }
  private goPrevious() { if (this.step > 0) this.step--; }
  private skip() {
    const item = this.current();
    if (!item || item.required) return;
    this.set(item.name, undefined);
    if (this.step < this.list().length - 1) this.step++; else this.goNext();
  }
  private onKeydown = (e: KeyboardEvent) => {
    const item = this.current();
    if (!item || this.disabled) return;
    const inText = (e.target as HTMLElement).matches?.('input[type="text"], textarea');
    if (e.key === 'Enter' && !(inText && (e.target as HTMLElement).tagName === 'TEXTAREA')) { e.preventDefault(); this.goNext(); return; }
    if (inText || this.shortcuts === 'none' || !item.choices || e.metaKey || e.ctrlKey || e.altKey) return;
    const idx = this.shortcutIndex(e.key);
    const choice = idx >= 0 ? item.choices[idx] : undefined;
    if (!choice) return;
    e.preventDefault();
    const selected = item.multiple ? ((this.value[item.name] as string[] | undefined) ?? []).includes(choice.value) : false;
    this.choose(item, choice.value, !selected);
  };
  private shortcutIndex(key: string): number {
    if (this.shortcuts === 'letters') { const c = key.toUpperCase().charCodeAt(0); return key.length === 1 && c >= 65 && c <= 90 ? c - 65 : -1; }
    if (this.shortcuts === 'numbers') { const n = +key; return key.length === 1 && n >= 1 && n <= 9 ? n - 1 : -1; }
    return -1;
  }
  private shortcut(i: number): string | undefined {
    if (this.shortcuts === 'letters') return i < 26 ? String.fromCharCode(65 + i) : undefined;
    if (this.shortcuts === 'numbers') return i < 9 ? String(i + 1) : undefined;
    return undefined;
  }

  render() {
    const items = this.list();
    const item = this.current();
    const total = items.length;
    const last = this.step >= total - 1;
    const answer = item ? this.value[item.name] : undefined;
    const isChosen = (v: string) => (Array.isArray(answer) ? answer.includes(v) : answer === v);
    const freeText = item && typeof answer === 'string' && !item.choices?.some((c) => c.value === answer) ? answer : '';
    const btn = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-interactive motion-fast focus-ring select-none control-md disabled:pointer-events-none disabled:opacity-50';
    return (
      <Host onKeyDown={this.onKeydown}>
        <div class="flex flex-col gap-6" data-submitted={this.submitted ? '' : undefined}>
          <div part="progress" role="progressbar" aria-label="Progress" aria-valuemin="1" aria-valuemax={total} aria-valuenow={Math.min(this.step + 1, total)} aria-valuetext={`Question ${Math.min(this.step + 1, total)} of ${total}`} class="progress flex flex-col gap-2 text-xs font-medium text-fg-muted">
            <span>Question {Math.min(this.step + 1, total)} of {total}</span>
            <span class="track block h-1 w-full overflow-hidden rounded-full bg-muted"><span class="fill block h-full rounded-full bg-primary transition-interactive motion-base" style={{ width: `${total ? ((this.step + 1) / total) * 100 : 0}%` }} /></span>
          </div>
          {item && (
            <fieldset part="item" ref={(el) => (this.fieldset = el)} class="m-0 flex min-w-0 flex-col gap-4 border-0 p-0" aria-invalid={this.error ? 'true' : undefined} aria-describedby={this.error ? `${this.id}-error` : undefined} disabled={this.disabled}>
              <legend part="title" class="text-lg font-semibold text-fg">{item.prompt}</legend>
              {item.description && <p part="description" class="m-0 text-sm text-fg-muted">{item.description}</p>}
              {(item.choices?.length || item.input) && (
                <div part="choices" class="flex flex-col gap-2">
                  {item.choices?.map((c, i) => (
                    <label part="choice" class="choice relative flex cursor-pointer items-start gap-3 rounded-lg border-default bg-canvas p-3 text-sm transition-interactive motion-fast hover:bg-accent" data-checked={isChosen(c.value) ? '' : undefined}>
                      <input class="pick" type={item.multiple ? 'checkbox' : 'radio'} name={item.name} value={c.value} checked={isChosen(c.value)} onChange={(e) => this.choose(item, c.value, (e.target as HTMLInputElement).checked)} />
                      {this.shortcut(i) && <kbd class="shortcut inline-flex shrink-0 items-center justify-center rounded-sm border-default bg-muted text-xs font-medium text-fg-muted" aria-hidden="true">{this.shortcut(i)}</kbd>}
                      <span class="flex min-w-0 flex-col gap-0.5">
                        <span class="font-medium text-fg">{c.label}</span>
                        {c.description && <span class="text-fg-muted">{c.description}</span>}
                      </span>
                    </label>
                  ))}
                  {item.input && (item.input.multiline ? (
                    <textarea part="input" class="field min-h-16 w-full rounded-md border-default bg-transparent px-3 py-2 text-md md:text-sm text-fg placeholder:text-fg-muted focus-ring" aria-label={item.input.label} placeholder={item.input.placeholder} value={freeText} onInput={(e) => this.set(item.name, (e.target as HTMLTextAreaElement).value)} />
                  ) : (
                    <input part="input" type="text" class="field w-full rounded-md border-default bg-transparent text-md md:text-sm text-fg placeholder:text-fg-muted focus-ring field-md" aria-label={item.input.label} placeholder={item.input.placeholder} value={freeText} onInput={(e) => this.set(item.name, (e.target as HTMLInputElement).value)} />
                  ))}
                </div>
              )}
              {this.error && <p part="error" id={`${this.id}-error`} role="alert" class="m-0 text-sm text-destructive-fg">{this.error}</p>}
            </fieldset>
          )}
          <div part="actions" class="flex flex-wrap items-center gap-2">
            <button part="previous" type="button" class={`${btn} border-default bg-canvas text-fg shadow-raised hover:bg-accent`} disabled={this.disabled || this.step === 0} onClick={() => this.goPrevious()}>{this.previousLabel}</button>
            <span class="flex-1" />
            {item && !item.required && <button part="skip" type="button" class={`${btn} text-fg hover:bg-accent`} disabled={this.disabled} onClick={() => this.skip()}>{this.skipLabel}</button>}
            <button part="next" type="button" class={`${btn} bg-primary text-primary-fg shadow-raised hover:bg-primary-hover`} disabled={this.disabled || !item} onClick={() => this.goNext()}>{last ? this.submitLabel : this.nextLabel}</button>
          </div>
        </div>
      </Host>
    );
  }
}
