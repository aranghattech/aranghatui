import { Component, Host, Prop, h } from '@stencil/core';

/**
 * Aspect Ratio — shadcn/ui parity. Constrains its content to a ratio (`16/9`, `1`, `4/3`)
 * with the native `aspect-ratio` property; the slotted element fills the box.
 *
 * @slot - The content (an `<img>`, `<video>`, `<iframe>` or any element); it is stretched to the box.
 */
@Component({ tag: 'art-aspect-ratio', styleUrl: 'art-aspect-ratio.css', shadow: true })
export class ArtAspectRatio {
  /** Width / height: `"16/9"`, `"1"`, `"4/3"` or a number. */
  @Prop() ratio: string | number = '1';

  render() {
    return (
      <Host style={{ aspectRatio: String(this.ratio) }}>
        <slot />
      </Host>
    );
  }
}
