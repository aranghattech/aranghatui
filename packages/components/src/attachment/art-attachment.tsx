import { Component, Element, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';
import { child } from '@aranghat/primitives/dom';

export type AttachmentState = 'idle' | 'uploading' | 'processing' | 'error' | 'done';

/**
 * Attachment — shadcn/ui parity. A file or image card: an icon or image, the file name, a
 * line of metadata, end-aligned actions, and upload states. Horizontal for lists and
 * composers, vertical for image grids. `href` or `trigger-label` make the whole card a target
 * while the actions stay clickable.
 *
 * @slot media - An `<svg>` / `<art-icon>` or an `<img>` (replaces the default file icon).
 * @slot - The file name (or use `name`).
 * @slot description - Metadata such as type, size or status (or use `description`).
 * @slot actions - Icon-only `<art-button size="sm" icon>`s.
 * @part attachment - The card.
 * @part media - The icon / image box.
 * @part title - The file name.
 * @part description - The metadata line.
 * @part actions - The actions container.
 * @part trigger - The full-card link or button.
 */
@Component({ tag: 'art-attachment', styleUrl: 'art-attachment.css', shadow: true })
export class ArtAttachment {
  @Element() host!: HTMLElement;

  /** Upload state: `idle` (dashed, not yet uploaded), `uploading`, `processing`, `error`, `done`. */
  @Prop({ reflect: true }) state: AttachmentState = 'done';
  @Prop({ reflect: true }) size: 'sm' | 'md' = 'md';
  @Prop({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';
  /** File name (alternative to the default slot). */
  @Prop() name?: string;
  /** Metadata line (alternative to the `description` slot). Uploading shows `progress` instead. */
  @Prop() description?: string;
  /** Upload progress 0–100, shown while `uploading`. */
  @Prop() progress?: number;
  /** Makes the card a link (a full-card `<a>` under the actions). */
  @Prop() href?: string;
  @Prop() target?: string;
  /** Makes the card a button with this accessible name; emits `trigger` on activation. */
  @Prop({ attribute: 'trigger-label' }) triggerLabel?: string;

  @State() private hasTitle = false;
  @State() private hasDescription = false;
  @State() private hasActions = false;

  /** The full-card button (`trigger-label`) was activated. */
  @Event({ eventName: 'trigger', bubbles: true, composed: true }) triggerEvent!: EventEmitter<void>;

  componentDidLoad() {
    this.host.shadowRoot?.addEventListener('slotchange', this.sync);
    this.sync();
  }
  /** Slotted state, read from the light DOM into state (a shadow stylesheet's `:has()` cannot see it) so the render follows. */
  private sync = () => {
    this.host.toggleAttribute('data-image', !!child(this.host, 'img[slot="media"], picture[slot="media"]'));
    this.hasActions = !!child(this.host, '[slot="actions"]');
    this.host.toggleAttribute('data-has-actions', this.hasActions);
    this.hasDescription = !!child(this.host, '[slot="description"]');
    // whitespace between child tags is assigned to the default slot and would hide the `name` fallback
    this.hasTitle = Array.from(this.host.childNodes).some((n) => (n.nodeType === Node.TEXT_NODE && !!n.textContent?.trim()) || (n.nodeType === Node.ELEMENT_NODE && !(n as Element).hasAttribute('slot')));
  };

  private status(): string | undefined {
    if (this.state === 'uploading') return this.progress === undefined ? 'Uploading…' : `Uploading ${Math.round(this.progress)}%`;
    if (this.state === 'processing') return 'Processing…';
    if (this.state === 'error') return this.description ?? 'Upload failed';
    return this.description;
  }

  render() {
    const status = this.status();
    return (
      <Host>
        <div part="attachment" class="card relative flex w-fit max-w-full min-w-0 shrink-0 flex-wrap rounded-xl border-default bg-surface text-fg transition-interactive motion-fast">
          {/* first in the tab order: the card itself, then its actions */}
          {this.href ? (
            <a part="trigger" class="trigger absolute inset-0 rounded-xl focus-ring" href={this.href} target={this.target} aria-label={this.triggerLabel ?? this.name} />
          ) : this.triggerLabel ? (
            <button part="trigger" type="button" class="trigger absolute inset-0 rounded-xl focus-ring" aria-label={this.triggerLabel} onClick={() => this.triggerEvent.emit()} />
          ) : null}
          <div part="media" class="media flex shrink-0 items-center justify-center overflow-hidden rounded-lg bg-muted text-fg-muted">
            <slot name="media">
              <svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /></svg>
            </slot>
          </div>
          <div part="content" class="content flex min-w-0 flex-1 flex-col">
            <div part="title" class="title truncate font-medium">{this.hasTitle ? <slot /> : this.name}</div>
            <div part="description" class="description truncate text-fg-muted" hidden={!status && !this.hasDescription} aria-live={this.state === 'uploading' || this.state === 'processing' ? 'polite' : undefined}>
              <slot name="description">{status}</slot>
            </div>
          </div>
          <div part="actions" class="actions flex shrink-0 items-center gap-1">
            <slot name="actions" />
          </div>
        </div>
      </Host>
    );
  }
}
