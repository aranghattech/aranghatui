import { Component, Element, Host, h } from '@stencil/core';

/**
 * Input Group — shadcn/ui parity. One field frame around an `<art-input>` or `<art-textarea>`
 * and its addons: icons, text, kbd hints, buttons, or whole rows above / below the control.
 * The group draws the border, focus ring, invalid ring and disabled state for everything inside.
 *
 * @slot - The control: `<art-input>` or `<art-textarea>`.
 * @slot start - Leading inline addon (icon, text).
 * @slot end - Trailing inline addon (icon, text, `<art-kbd>`, `<art-button size="sm">`).
 * @slot block-start - A full-width row above the control.
 * @slot block-end - A full-width row below the control (textarea toolbars).
 * @part frame - The bordered frame.
 * @part row - The inline row holding start addon, control and end addon.
 */
@Component({ tag: 'art-input-group', styleUrl: 'art-input-group.css', shadow: true })
export class ArtInputGroup {
  @Element() host!: HTMLElement;
  private observer?: MutationObserver;

  connectedCallback() {
    this.host.setAttribute('role', 'group');
    this.host.addEventListener('focusin', this.onFocus);
    this.host.addEventListener('focusout', this.onFocus);
    this.sync();
  }
  componentDidLoad() {
    this.host.shadowRoot?.addEventListener('slotchange', this.sync);
    // `:host(:has(art-input[invalid]))` does not match inside a shadow stylesheet, so the
    // control's invalid / disabled state is mirrored onto the host as data attributes.
    if (typeof MutationObserver !== 'undefined') {
      this.observer = new MutationObserver(this.sync);
      this.observer.observe(this.host, { attributes: true, attributeFilter: ['invalid', 'disabled'], subtree: true });
    }
    this.sync(); // the control reflects its attributes during its own first render, before this runs
  }
  disconnectedCallback() {
    this.observer?.disconnect();
    this.host.removeEventListener('focusin', this.onFocus);
    this.host.removeEventListener('focusout', this.onFocus);
  }

  private control(): Element | undefined {
    return Array.from(this.host.children).find((c) => c.tagName === 'ART-INPUT' || c.tagName === 'ART-TEXTAREA');
  }
  /** The slotted control drops its own frame (`data-in-group`); the group draws it instead. */
  private sync = () => {
    const c = this.control();
    c?.setAttribute('data-in-group', '');
    this.host.toggleAttribute('data-invalid', !!c?.hasAttribute('invalid'));
    this.host.toggleAttribute('data-disabled', !!c?.hasAttribute('disabled'));
  };
  /** Focus inside the control (retargeted to it) shows the ring; focus on an addon button does not.
   *  Text controls always show a visible focus, so no :focus-visible check is needed. */
  private onFocus = (e: FocusEvent) => {
    this.host.toggleAttribute('data-focus', e.type === 'focusin' && e.target === this.control());
  };

  render() {
    return (
      <Host>
        <div part="frame" class="flex w-full flex-col border-default bg-transparent shadow-raised transition-interactive motion-fast">
          <slot name="block-start" />
          <div part="row" class="flex w-full items-center">
            <slot name="start" />
            <slot />
            <slot name="end" />
          </div>
          <slot name="block-end" />
        </div>
      </Host>
    );
  }
}
