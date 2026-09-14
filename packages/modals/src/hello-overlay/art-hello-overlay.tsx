import { Component, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { defineCustomElement as defineArtHello } from '@aranghat/base/hello';

/**
 * Phase 0 proof overlay. Consumes `<art-hello>` from `@aranghat/base` to prove
 * cross-tier composition: base is a peer dependency, never bundled (ADR-0002).
 * Removed when Dialog lands.
 *
 * @slot - Extra content rendered under the greeting.
 * @part panel - The overlay panel.
 */
@Component({ tag: 'art-hello-overlay', styleUrl: 'art-hello-overlay.css', shadow: true })
export class ArtHelloOverlay {
  @Element() host!: HTMLElement;

  /** Whether the overlay is shown. */
  @Prop({ mutable: true, reflect: true }) open = false;
  /** Passed through to the inner `<art-hello>`. */
  @Prop() name = 'World';

  /** Emitted when `open` changes because of user interaction (Escape / close button). */
  @Event({ eventName: 'open-change', bubbles: true, composed: true }) openChange!: EventEmitter<{ open: boolean }>;

  connectedCallback() {
    // Lower-tier elements register lazily so importing this module has no side effects.
    defineArtHello();
    document.addEventListener('keydown', this.onKeydown);
  }
  disconnectedCallback() {
    document.removeEventListener('keydown', this.onKeydown);
  }

  @Watch('open')
  onOpenChanged(open: boolean) {
    if (open) queueMicrotask(() => this.host.shadowRoot?.querySelector<HTMLElement>('[part=close]')?.focus());
  }

  private close = () => {
    if (!this.open) return;
    this.open = false;
    this.openChange.emit({ open: false });
  };
  private onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') this.close();
  };

  render() {
    return (
      <Host>
        {this.open && (
          <div class="fixed inset-0 z-(--art-z-modal) flex items-center justify-center bg-overlay p-4" onClick={this.close}>
            <div
              part="panel"
              role="dialog"
              aria-modal="true"
              aria-label={`Greeting for ${this.name}`}
              class="w-full max-w-sm rounded-lg border border-border bg-popover p-4 shadow-popover"
              onClick={(e) => e.stopPropagation()}
            >
              <art-hello name={this.name}></art-hello>
              <slot />
              <button part="close" type="button" class="mt-3 appearance-none border-0 bg-transparent p-0 text-sm text-fg-muted underline-offset-4 hover:underline focus-ring rounded-sm cursor-pointer" onClick={this.close}>
                Close
              </button>
            </div>
          </div>
        )}
      </Host>
    );
  }
}
