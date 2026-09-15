import { Component, Element, Host, Prop, h } from '@stencil/core';
import { resolveAria } from '@aranghat/primitives/aria';

/**
 * Progress — shadcn/ui parity. A native `<progress>` styled on tokens: a muted track with a
 * primary fill that animates between values. Omit `value` for the platform's indeterminate bar.
 *
 * @part progress - The native `<progress>`.
 */
@Component({ tag: 'art-progress', styleUrl: 'art-progress.css', shadow: true })
export class ArtProgress {
  @Element() host!: HTMLElement;

  /** Completed amount, 0–`max`. Omit for indeterminate. */
  @Prop() value?: number;
  @Prop() max = 100;

  // cross-shadow ARIA naming (idrefs cannot cross the boundary)
  @Prop({ attribute: 'aria-label' }) hostAriaLabel?: string | null;
  @Prop({ attribute: 'aria-labelledby' }) hostAriaLabelledby?: string | null;
  private directLabel?: string;
  private ariaLabel?: string;

  componentWillRender() {
    if (this.hostAriaLabel != null) {
      this.directLabel = this.hostAriaLabel;
      this.host.removeAttribute('aria-label');
    }
    this.ariaLabel = resolveAria(this.host, { labelledby: this.hostAriaLabelledby }, this.directLabel).label;
  }

  render() {
    return (
      <Host>
        <progress part="progress" class="block h-2 w-full overflow-hidden rounded-full bg-muted" value={this.value} max={this.max} aria-label={this.ariaLabel} />
      </Host>
    );
  }
}
