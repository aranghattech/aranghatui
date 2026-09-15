import { Component, Host, Prop, h } from '@stencil/core';

/**
 * Alert — shadcn/ui parity. A callout that draws attention: optional icon, a title and a
 * description. `role="alert"` so assistive tech announces it when it appears.
 *
 * @slot icon - `<art-icon slot="icon">` or an `<svg>`.
 * @slot title - The heading.
 * @slot description - Supporting text.
 * @part alert - The box.
 */
@Component({ tag: 'art-alert', styleUrl: 'art-alert.css', shadow: true })
export class ArtAlert {
  @Prop({ reflect: true }) variant: 'default' | 'destructive' = 'default';

  render() {
    return (
      <Host role="alert">
        <div part="alert" class={{ 'relative flex w-full items-start gap-3 rounded-lg border-default bg-surface px-4 py-3 text-sm': true, 'text-fg': this.variant === 'default', 'text-destructive-fg': this.variant === 'destructive' }}>
          <slot name="icon" />
          <div class="grid min-w-0 flex-1 gap-0.5">
            <slot name="title" />
            <slot name="description" />
          </div>
        </div>
      </Host>
    );
  }
}
