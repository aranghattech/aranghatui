import { Component, Element, Host, Prop, h } from '@stencil/core';
import { child } from '@aranghat/primitives/dom';

/**
 * Bubble — shadcn/ui parity. The visible surface of a conversational message: seven variants,
 * start / end alignment, an optional reactions row anchored to an edge, and a link form
 * (`href`) when the whole bubble is a target. Compose consecutive bubbles in
 * `<art-bubble-group>`; put one inside `<art-message>` for avatar, header and footer.
 *
 * @slot - The message content (text, links, media).
 * @slot reactions - Emoji or counts shown in a pill on the bubble's edge (`reactions-side` / `reactions-align`).
 * @part content - The bubble surface (`<div>`, or `<a>` when `href` is set).
 * @part reactions - The reactions pill.
 */
@Component({ tag: 'art-bubble', styleUrl: 'art-bubble.css', shadow: true })
export class ArtBubble {
  @Element() host!: HTMLElement;

  @Prop({ reflect: true }) variant: 'default' | 'secondary' | 'muted' | 'tinted' | 'outline' | 'ghost' | 'destructive' = 'default';
  /** `end` aligns the bubble to the end of its row (the sender's side). */
  @Prop({ reflect: true }) align: 'start' | 'end' = 'start';
  /** Renders the surface as a link. */
  @Prop() href?: string;
  @Prop() target?: string;
  @Prop() rel?: string;
  /** Which edge the reactions pill hangs from. */
  @Prop({ attribute: 'reactions-side', reflect: true }) reactionsSide: 'top' | 'bottom' = 'bottom';
  /** Which end of that edge. */
  @Prop({ attribute: 'reactions-align', reflect: true }) reactionsAlign: 'start' | 'end' = 'end';

  componentDidLoad() {
    this.host.shadowRoot?.addEventListener('slotchange', this.sync);
    this.sync();
  }
  /** `:has()` in a shadow stylesheet cannot see slotted nodes, so the filled slot is mirrored on the host. */
  private sync = () => { this.host.toggleAttribute('data-has-reactions', !!child(this.host, '[slot="reactions"]')); };

  render() {
    const content = 'content w-fit max-w-full min-w-0 overflow-hidden rounded-xl px-3 py-2 text-sm leading-relaxed';
    return (
      <Host>
        {this.href ? (
          <a part="content" class={`${content} transition-interactive motion-fast focus-ring`} href={this.href} target={this.target} rel={this.rel}>
            <slot />
          </a>
        ) : (
          <div part="content" class={content}>
            <slot />
          </div>
        )}
        <div part="reactions" class="reactions absolute flex w-fit shrink-0 items-center justify-center gap-1 rounded-full bg-muted px-1.5 py-0.5 text-sm">
          <slot name="reactions" />
        </div>
      </Host>
    );
  }
}
