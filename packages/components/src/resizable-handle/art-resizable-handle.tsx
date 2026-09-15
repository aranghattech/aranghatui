import { Component, Element, Host, Prop, h } from '@stencil/core';

/**
 * Resizable Handle — the draggable, keyboard-operable divider between two panels
 * (`role="separator"` with the preceding panel's size as its value).
 *
 * @part grip - The optional grip shown with `with-handle`.
 */
@Component({ tag: 'art-resizable-handle', styleUrl: 'art-resizable-handle.css', shadow: true })
export class ArtResizableHandle {
  @Element() host!: HTMLElement;

  /** Show a grip in the middle of the divider. */
  @Prop({ attribute: 'with-handle', reflect: true }) withHandle = false;

  connectedCallback() {
    this.host.setAttribute('role', 'separator');
    if (!this.host.hasAttribute('tabindex')) this.host.tabIndex = 0;
  }

  render() {
    return (
      <Host>
        {this.withHandle && (
          <div part="grip" class="grip z-10 flex items-center justify-center rounded-xs border-default bg-border">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
              <circle cx="9" cy="12" r="1" /><circle cx="9" cy="5" r="1" /><circle cx="9" cy="19" r="1" /><circle cx="15" cy="12" r="1" /><circle cx="15" cy="5" r="1" /><circle cx="15" cy="19" r="1" />
            </svg>
          </div>
        )}
      </Host>
    );
  }
}
