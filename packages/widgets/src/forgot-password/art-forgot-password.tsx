import { Component, Element, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';
import { defineAuthElements, submitOnEnter } from '../auth/define';
import { child } from '@aranghat/primitives/dom';

type InputEl = HTMLElement & { value: string };

/**
 * Forgot Password — a card that asks for the account email and, once `sent`, confirms that the
 * reset link is on its way. You own what happens on `submit` (`detail.email`).
 *
 * @slot logo - Brand above the card.
 * @slot footer - Extra content under the card.
 * @part card - The card.
 * @part form - The form.
 * @part error - The error line.
 * @part sent - The confirmation shown while `sent`.
 */
@Component({ tag: 'art-forgot-password', styleUrl: 'art-forgot-password.css', shadow: true })
export class ArtForgotPassword {
  @Element() host!: HTMLElement;
  private email?: InputEl;

  @Prop() heading = 'Forgot your password?';
  @Prop() description = "Enter your email and we'll send you a link to reset it";
  @Prop({ attribute: 'submit-label' }) submitLabel = 'Send reset link';
  @Prop({ attribute: 'email-label' }) emailLabel = 'Email';
  /** Shows the "back to login" link under the button. */
  @Prop({ attribute: 'login-href' }) loginHref?: string;
  @Prop({ attribute: 'login-label' }) loginLabel = 'Back to login';
  /** Replace the form with the confirmation. */
  @Prop({ reflect: true }) sent = false;
  @Prop({ attribute: 'sent-heading' }) sentHeading = 'Check your inbox';
  @Prop({ attribute: 'sent-description' }) sentDescription = 'We sent you a link to reset your password. It expires in an hour.';
  /** Spinner on the button; submits are ignored meanwhile. */
  @Prop({ reflect: true }) loading = false;
  /** Error line above the button. */
  @Prop() error?: string;
  @State() hasLogo = false;
  @State() hasFooter = false;

  /** Emitted when the form is submitted with a valid email; `detail.email`. */
  @Event({ eventName: 'submit', bubbles: true, composed: true }) submitEvent!: EventEmitter<{ email: string }>;

  connectedCallback() {
    defineAuthElements();
  }
  componentWillLoad() {
    this.wire();
  }
  componentDidLoad() {
    this.host.shadowRoot?.addEventListener('slotchange', this.wire);
  }
  private wire = () => {
    this.hasLogo = !!child(this.host, '[slot="logo"]');
    this.hasFooter = !!child(this.host, '[slot="footer"]');
  };
  private onSubmit = (e: Event) => {
    e.preventDefault();
    if (this.loading) return;
    this.submitEvent.emit({ email: this.email?.value ?? '' });
  };

  render() {
    return (
      <Host>
        <div class="logo flex flex-col items-center gap-2 text-sm font-medium" hidden={!this.hasLogo}><slot name="logo" /></div>
        <art-card part="card">
          <span slot="title">{this.sent ? this.sentHeading : this.heading}</span>
          <span slot="description">{this.sent ? this.sentDescription : this.description}</span>
          {this.sent ? (
            <div part="sent" class="sent grid gap-3">
              {this.loginHref && <art-button variant="outline" href={this.loginHref}>{this.loginLabel}</art-button>}
            </div>
          ) : (
            <form part="form" class="form grid gap-6" onSubmit={this.onSubmit} onKeyDown={submitOnEnter}>
              <art-field>
                <art-label slot="label">{this.emailLabel}</art-label>
                <art-input type="email" name="email" placeholder="m@example.com" autocomplete="email" required ref={(el) => (this.email = el as unknown as InputEl)} />
              </art-field>
              {this.error && <p part="error" role="alert" class="error m-0 text-sm">{this.error}</p>}
              <div class="grid gap-3">
                <art-button type="submit" loading={this.loading}>{this.submitLabel}</art-button>
              </div>
              {this.loginHref && (
                <p class="m-0 text-center text-sm"><a class="link underline" href={this.loginHref}>{this.loginLabel}</a></p>
              )}
            </form>
          )}
        </art-card>
        <div class="footer mt-4 text-center text-sm text-fg-muted" hidden={!this.hasFooter}><slot name="footer" /></div>
      </Host>
    );
  }
}
