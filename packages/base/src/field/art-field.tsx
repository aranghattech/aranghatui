import { Component, Element, Host, Prop, Watch, h } from '@stencil/core';
import { uniqueId } from '@aranghat/primitives/id';
import { child } from '@aranghat/primitives/dom';

type ControlEl = HTMLElement & { invalid?: boolean; disabled?: boolean };
const CONTROLS = 'art-input, art-textarea, art-native-select, art-checkbox, art-switch, art-radio-group, art-slider, art-toggle-group, art-input-otp';

/**
 * Field — shadcn/ui parity. Wires a label, a control, a description and an error message
 * together: the label names the control, description and error become its accessible
 * description, an error (or `invalid`) marks the control invalid, and a disabled control dims
 * the label. Stack fields with `<art-field-group>`; group related fields with `<art-field-set>`.
 *
 * @slot label - `<art-label>` (its `for` is filled in when omitted).
 * @slot - The control (`art-input`, `art-checkbox`, `art-radio-group`, … or an `art-input-group`).
 * @slot description - Help text (`<p slot="description">`).
 * @slot error - Error text (`<p slot="error">`); announced as an alert and marks the control invalid.
 * @part field - The layout wrapper.
 */
@Component({ tag: 'art-field', styleUrl: 'art-field.css', shadow: true })
export class ArtField {
  @Element() host!: HTMLElement;
  private observer?: MutationObserver;

  /** `vertical`: label above the control. `horizontal`: control first, label and description beside it (checkbox, switch). */
  @Prop({ reflect: true }) orientation: 'vertical' | 'horizontal' = 'vertical';
  /** Marks the control invalid; set automatically while the `error` slot has content. */
  @Prop({ reflect: true }) invalid = false;

  componentDidLoad() {
    this.host.shadowRoot?.addEventListener('slotchange', this.sync);
    if (typeof MutationObserver !== 'undefined') {
      this.observer = new MutationObserver(this.sync);
      this.observer.observe(this.host, { attributes: true, attributeFilter: ['disabled'], subtree: true, childList: true, characterData: true });
    }
    this.sync();
  }
  disconnectedCallback() {
    this.observer?.disconnect();
  }

  private control(): ControlEl | null {
    const c = Array.from(this.host.children).find((el) => !el.hasAttribute('slot') && el.matches(`${CONTROLS}, art-input-group`)) as ControlEl | undefined;
    if (!c) return null;
    return c.tagName === 'ART-INPUT-GROUP' ? (c.querySelector('art-input, art-textarea') as ControlEl | null) : c;
  }
  private slotted(name: string): HTMLElement | null {
    return child(this.host, `[slot="${name}"]`);
  }

  @Watch('invalid')
  onInvalid() { this.sync(); }

  private sync = () => {
    const control = this.control();
    const label = this.slotted('label');
    const description = this.slotted('description');
    const error = this.slotted('error');
    const hasError = !!error?.textContent?.trim();
    if (error) error.setAttribute('role', 'alert');
    if (!control) return;
    if (!control.id) control.id = uniqueId('art-field');
    if (label && !label.hasAttribute('for')) label.setAttribute('for', control.id);
    const ids = [description, hasError ? error : null].filter(Boolean).map((el) => (el!.id ||= uniqueId('art-field-text')));
    if (ids.length) control.setAttribute('aria-describedby', ids.join(' '));
    else control.removeAttribute('aria-describedby');
    if ('invalid' in control) control.invalid = this.invalid || hasError;
    const disabled = !!control.disabled;
    this.host.toggleAttribute('data-disabled', disabled);
    if (label) label.toggleAttribute('disabled', disabled);
  };

  render() {
    const horizontal = this.orientation === 'horizontal';
    return (
      <Host>
        <div part="field" class={{ 'flex w-full': true, 'flex-col gap-2': !horizontal, 'flex-row items-start gap-3': horizontal }}>
          {horizontal ? (
            [<slot />, <div class="flex min-w-0 flex-1 flex-col gap-1"><slot name="label" /><slot name="description" /><slot name="error" /></div>]
          ) : (
            [<slot name="label" />, <slot />, <slot name="description" />, <slot name="error" />]
          )}
        </div>
      </Host>
    );
  }
}
