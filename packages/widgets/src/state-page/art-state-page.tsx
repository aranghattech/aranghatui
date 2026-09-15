import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { defineCustomElement as defineButton } from '@aranghat/base/button';
import { defineCustomElement as defineEmpty } from '@aranghat/base/empty';

const COPY = {
  empty: { heading: 'Nothing here yet', description: 'When there is something to show, it will appear here.' },
  'not-found': { heading: 'Page not found', description: "The page you are looking for doesn't exist or has been moved." },
  error: { heading: 'Something went wrong', description: 'An unexpected error occurred. Try again, or come back later.' },
} as const;

/**
 * State Page — a full-page empty / 404 / 500 state: a centred `art-empty` with an optional
 * status code, default copy per `kind` (override with `heading` / `description`), media and
 * actions. Fill the viewport (or a docs frame) and put the way out in `actions`.
 *
 * @slot media - An icon or illustration (`<art-icon slot="media">`).
 * @slot actions - Buttons (`<art-button slot="actions">`).
 * @slot - Extra content under the actions (a search box, a request id).
 * @part page - The centring wrapper.
 * @part code - The status code.
 */
@Component({ tag: 'art-state-page', styleUrl: 'art-state-page.css', shadow: true })
export class ArtStatePage {
  @Element() host!: HTMLElement;

  /** Which state; picks the default copy. */
  @Prop({ reflect: true }) kind: 'empty' | 'not-found' | 'error' = 'empty';
  /** Status code shown above the heading (`404`, `500`). */
  @Prop() code?: string;
  @Prop() heading?: string;
  @Prop() description?: string;
  @State() hasMedia = false;
  @State() hasActions = false;
  @State() hasBody = false;

  connectedCallback() {
    defineEmpty();
    defineButton();
  }
  componentWillLoad() {
    this.wire();
  }
  componentDidLoad() {
    this.host.shadowRoot?.addEventListener('slotchange', this.wire);
  }
  private wire = () => {
    this.hasMedia = !!this.host.querySelector(':scope > [slot="media"]');
    this.hasActions = !!this.host.querySelector(':scope > [slot="actions"]');
    this.hasBody = !!this.host.querySelector(':scope > :not([slot])');
  };

  render() {
    const copy = COPY[this.kind] ?? COPY.empty;
    return (
      <Host>
        <div part="page" class="page flex min-h-full w-full flex-1 items-center justify-center p-6">
          <art-empty class="empty">
            {this.hasMedia && <slot name="media" slot="media" />}
            <div slot="title" class="flex flex-col items-center gap-2">
              {this.code && <span part="code" class="code font-semibold text-fg-muted">{this.code}</span>}
              <span>{this.heading ?? copy.heading}</span>
            </div>
            <span slot="description">{this.description ?? copy.description}</span>
            <div class="actions flex flex-wrap items-center justify-center gap-2" hidden={!this.hasActions}><slot name="actions" /></div>
            <div class="body" hidden={!this.hasBody}><slot /></div>
          </art-empty>
        </div>
      </Host>
    );
  }
}
