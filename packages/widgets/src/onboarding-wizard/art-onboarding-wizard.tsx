import { Component, Element, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';
import { defineCustomElement as defineButton } from '@aranghat/base/button';

interface StepInfo { label: string; description?: string; optional: boolean }
type StepEl = HTMLElement & { label?: string; description?: string; optional?: boolean };

/**
 * Onboarding Wizard — a multi-step flow: a stepper (numbers, check marks, the current step),
 * one `art-wizard-step` shown at a time, and Back / Next / Finish (and Skip on optional steps).
 * `step` is 1-based; `step-change` is cancelable so you can validate before moving on.
 *
 * @slot - `art-wizard-step`s in order.
 * @part steps - The stepper (`<nav>`).
 * @part step - One stepper item.
 * @part indicator - The number / check circle.
 * @part label - The step label.
 * @part description - The step description.
 * @part panel - The current step's content wrapper.
 * @part footer - The buttons.
 */
@Component({ tag: 'art-onboarding-wizard', styleUrl: 'art-onboarding-wizard.css', shadow: true })
export class ArtOnboardingWizard {
  @Element() host!: HTMLElement;
  private panel?: HTMLDivElement;

  /** Current step, 1-based. */
  @Prop({ mutable: true, reflect: true }) step = 1;
  /** Stepper beside the content instead of above it. */
  @Prop({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';
  /** Accessible name of the stepper. */
  @Prop() label = 'Setup';
  @Prop({ attribute: 'back-label' }) backLabel = 'Back';
  @Prop({ attribute: 'next-label' }) nextLabel = 'Next';
  @Prop({ attribute: 'finish-label' }) finishLabel = 'Finish';
  @Prop({ attribute: 'skip-label' }) skipLabel = 'Skip';
  /** Spinner on the Next / Finish button; moves are ignored meanwhile. */
  @Prop({ reflect: true }) loading = false;
  @State() steps: StepInfo[] = [];

  /** Emitted before the step changes; `detail.step` (target), `detail.from`. Cancelable — `preventDefault()` stays on the current step. */
  @Event({ eventName: 'step-change', bubbles: true, composed: true, cancelable: true }) stepChange!: EventEmitter<{ step: number; from: number }>;
  /** Emitted when Finish is pressed on the last step. */
  @Event({ eventName: 'finish', bubbles: true, composed: true }) finishEvent!: EventEmitter<void>;

  connectedCallback() {
    defineButton();
  }
  componentWillLoad() {
    this.read();
  }
  componentDidLoad() {
    this.host.shadowRoot?.addEventListener('slotchange', this.read);
  }

  private items(): StepEl[] { return Array.from(this.host.querySelectorAll(':scope > art-wizard-step')) as StepEl[]; }
  /** Properties first: a framework sets them before the step reflects them as attributes. */
  private info(el: StepEl): StepInfo { return { label: el.label ?? el.getAttribute('label') ?? '', description: el.description ?? el.getAttribute('description') ?? undefined, optional: el.optional === true || el.hasAttribute('optional') }; }
  private read = () => {
    this.steps = this.items().map((el) => this.info(el));
    this.apply();
  };
  /** Show the current step only; each step is a named group for assistive tech. */
  @Watch('step')
  apply() {
    const items = this.items();
    const current = Math.min(Math.max(1, this.step), Math.max(1, items.length));
    items.forEach((el, i) => {
      el.hidden = i !== current - 1;
      el.setAttribute('role', 'group');
      el.setAttribute('aria-label', this.info(el).label || `Step ${i + 1}`);
    });
  }
  private go(to: number) {
    if (this.loading) return;
    const target = Math.min(Math.max(1, to), Math.max(1, this.steps.length));
    if (target === this.step) return;
    if (this.stepChange.emit({ step: target, from: this.step }).defaultPrevented) return;
    this.step = target;
    this.panel?.focus({ preventScroll: true });
  }
  private next = () => {
    if (this.loading) return;
    if (this.step >= this.steps.length) { this.finishEvent.emit(); return; }
    this.go(this.step + 1);
  };

  render() {
    const total = this.steps.length;
    const last = this.step >= total;
    const current = this.steps[this.step - 1];
    return (
      <Host>
        <nav part="steps" aria-label={this.label} class="stepper">
          <ol class="steps m-0 list-none p-0">
            {this.steps.map((s, i) => {
              const n = i + 1;
              const state = n < this.step ? 'complete' : n === this.step ? 'current' : 'upcoming';
              return (
                <li part="step" class="step" data-state={state} aria-current={n === this.step ? 'step' : undefined}>
                  <span part="indicator" class="indicator flex shrink-0 items-center justify-center rounded-full text-sm font-medium" aria-hidden="true">
                    {state === 'complete' ? (
                      <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" focusable="false"><path d="M20 6 9 17l-5-5" /></svg>
                    ) : n}
                  </span>
                  <span class={{ 'text min-w-0 flex-col': true, flex: state === 'current', 'hidden sm:flex': state !== 'current' }}>
                    <span part="label" class="label truncate text-sm font-medium">{s.label}</span>
                    {s.description && <span part="description" class="description truncate text-xs text-fg-muted">{s.description}</span>}
                  </span>
                  {i < total - 1 && <span class="connector" aria-hidden="true" />}
                </li>
              );
            })}
          </ol>
          <p class="sr-only" aria-live="polite">Step {this.step} of {total}: {current?.label ?? ''}</p>
        </nav>
        <div part="panel" class="panel" tabindex="-1" ref={(el) => (this.panel = el)}>
          <slot />
        </div>
        <div part="footer" class="footer flex items-center gap-2">
          <art-button variant="outline" disabled={this.step <= 1 || this.loading} onClick={() => this.go(this.step - 1)}>{this.backLabel}</art-button>
          <span class="ms-auto" />
          {current?.optional && !last && <art-button variant="ghost" disabled={this.loading} onClick={() => this.go(this.step + 1)}>{this.skipLabel}</art-button>}
          <art-button loading={this.loading} onClick={this.next}>{last ? this.finishLabel : this.nextLabel}</art-button>
        </div>
      </Host>
    );
  }
}
