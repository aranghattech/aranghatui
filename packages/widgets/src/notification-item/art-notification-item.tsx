import { Component, Element, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';

/**
 * Notification Item — one row of an `art-notification-centre`: media, heading, description,
 * time, and the unread dot. The whole row activates (`select`, then the centre marks it read);
 * with `href` it is a link. Extra actions go in the default slot and stay clickable on their own.
 *
 * @slot media - An icon or avatar at the start.
 * @slot - Extra content under the text (buttons).
 * @part item - The row.
 * @part heading - The heading (a link with `href`).
 * @part time - The time.
 */
@Component({ tag: 'art-notification-item', styleUrl: 'art-notification-item.css', shadow: true })
export class ArtNotificationItem {
  @Element() host!: HTMLElement;

  /** Reported by `select`. */
  @Prop() value = '';
  @Prop() heading = '';
  @Prop() description?: string;
  /** Relative or absolute time, as text (`2m ago`). */
  @Prop() time?: string;
  @Prop({ mutable: true, reflect: true }) unread = false;
  /** Makes the heading a link. */
  @Prop() href?: string;
  @State() hasMedia = false;
  @State() hasBody = false;

  /** Emitted when the row is activated; `detail.value`. Cancelable — `preventDefault()` keeps it unread. */
  @Event({ eventName: 'select', bubbles: true, composed: true, cancelable: true }) selectEvent!: EventEmitter<{ value: string }>;

  connectedCallback() {
    this.host.setAttribute('role', 'listitem');
  }
  componentWillLoad() {
    this.wire();
  }
  componentDidLoad() {
    this.host.shadowRoot?.addEventListener('slotchange', this.wire);
  }
  private wire = () => {
    this.hasMedia = !!this.host.querySelector(':scope > [slot="media"]');
    this.hasBody = !!this.host.querySelector(':scope > :not([slot])');
  };
  private onActivate = () => {
    if (!this.selectEvent.emit({ value: this.value }).defaultPrevented) this.unread = false;
  };

  render() {
    const heading = this.href ? (
      <a part="heading" class="heading stretched text-sm font-medium" href={this.href} onClick={this.onActivate}>{this.heading}</a>
    ) : (
      <button part="heading" type="button" class="heading stretched text-start text-sm font-medium" onClick={this.onActivate}>{this.heading}</button>
    );
    return (
      <Host>
        <div part="item" class="item relative flex gap-3 p-3">
          <div class="media flex shrink-0 items-center justify-center rounded-full bg-muted text-fg-muted" hidden={!this.hasMedia}><slot name="media" /></div>
          <div class="text flex min-w-0 flex-1 flex-col gap-1">
            <div class="flex items-start justify-between gap-2">
              {heading}
              {this.time && <span part="time" class="time shrink-0 text-xs text-fg-muted">{this.time}</span>}
            </div>
            {this.description && <p class="m-0 text-sm text-fg-muted">{this.description}</p>}
            <div class="body relative flex flex-wrap gap-2" hidden={!this.hasBody}><slot /></div>
          </div>
          <span class="dot" hidden={!this.unread} aria-hidden="true" />
        </div>
      </Host>
    );
  }
}
