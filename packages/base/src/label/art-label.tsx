import { Component, Element, Host, Prop, Watch, h } from '@stencil/core';
import { uniqueId } from '@aranghat/primitives/id';

/**
 * Label — shadcn/ui parity. A styled `<label>` for any control. Because shadow roots scope
 * ids, `for` is resolved at click time: activating the label focuses the target control
 * (or toggles it for checkbox-like controls), matching native label behaviour across tiers.
 *
 * @slot - Label text.
 * @part label - The native `<label>`.
 */
@Component({ tag: 'art-label', styleUrl: 'art-label.css', shadow: true })
export class ArtLabel {
  @Element() host!: HTMLElement;

  /** id of the control this label describes (looked up in the label's own DOM tree, then the document). Attribute: `for`. */
  @Prop({ attribute: 'for' }) htmlFor?: string;
  /** Dimmed and inert; Field sets this when its control is disabled. */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Native `for` association cannot cross the shadow boundary, so the label also names the
   * control with `aria-labelledby` pointing at this host (the accessible name is computed
   * from the flattened tree, shadow text included). Existing `aria-labelledby` is respected.
   */
  @Watch('htmlFor')
  wire() {
    const el = this.target();
    if (!el) return;
    if (!this.host.id) this.host.id = uniqueId('art-label');
    if (!el.hasAttribute('aria-labelledby')) el.setAttribute('aria-labelledby', this.host.id);
  }
  componentDidLoad() {
    this.wire();
  }

  private target(): HTMLElement | null {
    if (!this.htmlFor) return null;
    const root = this.host.getRootNode() as Document | ShadowRoot;
    return (root.getElementById?.(this.htmlFor) ?? document.getElementById(this.htmlFor)) as HTMLElement | null;
  }

  private onClick = (e: MouseEvent) => {
    const el = this.target();
    if (!el || e.defaultPrevented) return;
    const toggles = el.matches('input[type="checkbox"],input[type="radio"],art-checkbox,art-radio,art-switch,art-toggle');
    if (toggles) el.click();
    el.focus();
  };

  render() {
    return (
      <Host>
        <label part="label" class="inline-flex items-center gap-2 text-sm font-medium leading-none select-none" onClick={this.onClick}>
          <slot />
        </label>
      </Host>
    );
  }
}
