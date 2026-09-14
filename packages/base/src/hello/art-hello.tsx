import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

/**
 * Phase 0 proof component. Exercises tokens, Tailwind-in-shadow, the focus-ring
 * recipe, a native `click` passing through and a kebab-case custom event.
 * Removed when Button lands.
 *
 * @slot - Greeting body.
 * @part button - The inner button.
 */
@Component({ tag: 'art-hello', styleUrl: 'art-hello.css', shadow: true })
export class ArtHello {
  /** Who to greet. */
  @Prop() name = 'World';
  /** Visual variant. */
  @Prop({ reflect: true }) variant: 'default' | 'outline' = 'default';
  /** Disabled state. */
  @Prop({ reflect: true }) disabled = false;

  /** Emitted after the greet button is activated. */
  @Event({ eventName: 'greet', bubbles: true, composed: true }) greet!: EventEmitter<{ name: string }>;

  private onClick = () => {
    if (this.disabled) return;
    this.greet.emit({ name: this.name });
  };

  render() {
    const solid = this.variant === 'default';
    return (
      <Host>
        <div class="flex flex-col gap-3 rounded-lg border border-border bg-surface p-4 text-fg shadow-raised">
          <p class="m-0 text-sm text-fg-muted">
            <slot>Hello, {this.name}!</slot>
          </p>
          <button
            part="button"
            type="button"
            disabled={this.disabled}
            onClick={this.onClick}
            class={{
              'control-md inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium focus-ring motion-fast transition-colors disabled:pointer-events-none disabled:opacity-50': true,
              'bg-primary text-primary-fg hover:bg-primary-hover': solid,
              'border border-border bg-canvas text-fg hover:bg-accent': !solid,
            }}
          >
            Greet {this.name}
          </button>
        </div>
      </Host>
    );
  }
}
