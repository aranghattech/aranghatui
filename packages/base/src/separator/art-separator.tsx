import { Component, Host, Prop, h } from '@stencil/core';

/**
 * Separator — shadcn/ui parity. A native `<hr>` drawn with the one border colour and width,
 * horizontal or vertical. Decorative by default (`role="none"`); `semantic` exposes the
 * `separator` role for rules that structure content.
 *
 * @part separator - The native `<hr>`.
 */
@Component({ tag: 'art-separator', styleUrl: 'art-separator.css', shadow: true })
export class ArtSeparator {
  @Prop({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';
  /** Announce the rule as a separator instead of hiding it from assistive tech. */
  @Prop() semantic = false;

  render() {
    const vertical = this.orientation === 'vertical';
    return (
      <Host>
        <hr part="separator" class="shrink-0 bg-border" role={this.semantic ? undefined : 'none'} aria-orientation={this.semantic && vertical ? 'vertical' : undefined} />
      </Host>
    );
  }
}
