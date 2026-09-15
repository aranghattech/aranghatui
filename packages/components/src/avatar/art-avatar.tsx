import { Component, Host, Prop, State, Watch, h } from '@stencil/core';

/**
 * Avatar — shadcn/ui parity. An image with a fallback (initials, an icon) shown until the
 * image has loaded, or instead of it when it fails.
 *
 * @slot - Fallback content (initials).
 * @part image - The `<img>`.
 * @part fallback - The fallback box.
 */
@Component({ tag: 'art-avatar', styleUrl: 'art-avatar.css', shadow: true })
export class ArtAvatar {
  @Prop() src?: string;
  /** Alternative text for the image; leave empty when the avatar is decorative next to a name. */
  @Prop() alt = '';
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';
  @State() private loaded = false;
  @State() private failed = false;

  @Watch('src')
  onSrc() {
    this.loaded = false;
    this.failed = false;
  }

  render() {
    const showImage = !!this.src && !this.failed;
    return (
      <Host>
        {showImage && <img part="image" class={{ 'aspect-square size-full object-cover': true, hidden: !this.loaded }} src={this.src} alt={this.alt} onLoad={() => (this.loaded = true)} onError={() => (this.failed = true)} />}
        {!(showImage && this.loaded) && (
          <span part="fallback" class={{ 'fallback flex size-full items-center justify-center rounded-full bg-muted': true, 'text-sm': this.size !== 'sm', 'text-xs': this.size === 'sm' }} aria-hidden={showImage ? 'true' : undefined}>
            <slot />
          </span>
        )}
      </Host>
    );
  }
}
