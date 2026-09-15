import { Component, Host, Prop, h } from '@stencil/core';

/**
 * Badge — shadcn/ui parity. A small status label; renders as a link when `href` is set.
 * Every variant keeps the same border box so filled and outline badges align.
 *
 * @slot - Label text; an `<art-icon>` or `<svg>` before or after the text takes the small icon size.
 * @part badge - The `<span>` (or `<a>` when `href` is set).
 */
@Component({ tag: 'art-badge', styleUrl: 'art-badge.css', shadow: true })
export class ArtBadge {
  @Prop({ reflect: true }) variant: 'default' | 'secondary' | 'outline' | 'destructive' = 'default';
  /** Renders an `<a>` instead of a `<span>`. */
  @Prop() href?: string;
  @Prop() target?: string;
  @Prop() rel?: string;

  render() {
    const variants = {
      default: 'bg-primary text-primary-fg',
      secondary: 'bg-secondary text-secondary-fg',
      destructive: 'bg-destructive text-on-destructive',
      outline: 'text-fg',
    };
    const link = !!this.href;
    const cls = {
      'inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md px-2 py-0.5 text-xs font-medium transition-interactive motion-fast': true,
      [variants[this.variant]]: true,
      'focus-ring': link,
      'hover:bg-primary-hover': link && this.variant === 'default',
      'hover:bg-secondary-hover': link && this.variant === 'secondary',
      'hover:bg-destructive-hover': link && this.variant === 'destructive',
      'hover:bg-accent': link && this.variant === 'outline',
    };
    return (
      <Host>
        {link ? (
          <a part="badge" class={cls} href={this.href} target={this.target} rel={this.rel}>
            <slot />
          </a>
        ) : (
          <span part="badge" class={cls}>
            <slot />
          </span>
        )}
      </Host>
    );
  }
}
