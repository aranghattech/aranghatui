import { Component, Element, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';
import { uniqueId } from '@aranghat/primitives/id';
import { defineAuthElements, submitOnEnter } from '../auth/define';

type InputEl = HTMLElement & { value: string };

/**
 * Login — the shadcn login block as one element: a card with email and password, a "forgot
 * password" link, the submit button, optional social buttons and a sign-up link. The widget
 * owns the form; you own what happens on `submit` (`detail.email`, `detail.password`).
 *
 * @slot logo - Brand above the card (a link with an icon and the product name).
 * @slot social - Alternative sign-in buttons (`<art-button slot="social" variant="outline">`), shown under an "Or continue with" divider.
 * @slot footer - Extra content under the card (terms, help).
 * @part card - The card.
 * @part form - The form.
 * @part error - The error line.
 */
@Component({ tag: 'art-login', styleUrl: 'art-login.css', shadow: true })
export class ArtLogin {
  @Element() host!: HTMLElement;
  private email?: InputEl;
  private password?: InputEl;
  private passwordId = uniqueId('art-login-password');

  @Prop() heading = 'Login to your account';
  @Prop() description = 'Enter your email below to login to your account';
  @Prop({ attribute: 'submit-label' }) submitLabel = 'Login';
  @Prop({ attribute: 'email-label' }) emailLabel = 'Email';
  @Prop({ attribute: 'password-label' }) passwordLabel = 'Password';
  /** Shows the "forgot password" link beside the password label. */
  @Prop({ attribute: 'forgot-href' }) forgotHref?: string;
  @Prop({ attribute: 'forgot-label' }) forgotLabel = 'Forgot your password?';
  /** Shows the sign-up line under the button. */
  @Prop({ attribute: 'signup-href' }) signupHref?: string;
  @Prop({ attribute: 'signup-label' }) signupLabel = 'Sign up';
  @Prop({ attribute: 'signup-text' }) signupText = "Don't have an account?";
  /** Email only (a magic link / passwordless flow). */
  @Prop({ reflect: true, attribute: 'email-only' }) emailOnly = false;
  /** Spinner on the button; submits are ignored meanwhile. */
  @Prop({ reflect: true }) loading = false;
  /** Error line above the button (wrong credentials, network). */
  @Prop() error?: string;
  @State() hasLogo = false;
  @State() hasSocial = false;
  @State() hasFooter = false;

  /** Emitted when the form is submitted with valid fields; `detail.email`, `detail.password` (empty when `email-only`). */
  @Event({ eventName: 'submit', bubbles: true, composed: true }) submitEvent!: EventEmitter<{ email: string; password: string }>;

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
    this.hasLogo = !!this.host.querySelector(':scope > [slot="logo"]');
    this.hasSocial = !!this.host.querySelector(':scope > [slot="social"]');
    this.hasFooter = !!this.host.querySelector(':scope > [slot="footer"]');
  };
  private onSubmit = (e: Event) => {
    e.preventDefault();
    if (this.loading) return;
    this.submitEvent.emit({ email: this.email?.value ?? '', password: this.emailOnly ? '' : (this.password?.value ?? '') });
  };

  render() {
    return (
      <Host>
        <div class="logo flex flex-col items-center gap-2 text-sm font-medium" hidden={!this.hasLogo}><slot name="logo" /></div>
        <art-card part="card">
          <span slot="title">{this.heading}</span>
          <span slot="description">{this.description}</span>
          <form part="form" class="form grid gap-6" onSubmit={this.onSubmit} onKeyDown={submitOnEnter}>
            <art-field>
              <art-label slot="label">{this.emailLabel}</art-label>
              <art-input type="email" name="email" placeholder="m@example.com" autocomplete="email" required ref={(el) => (this.email = el as unknown as InputEl)} />
            </art-field>
            {!this.emailOnly && (
              <art-field>
                <div slot="label" class="flex items-center">
                  <art-label htmlFor={this.passwordId}>{this.passwordLabel}</art-label>
                  {this.forgotHref && <a class="link ms-auto text-sm" href={this.forgotHref}>{this.forgotLabel}</a>}
                </div>
                <art-input id={this.passwordId} type="password" name="password" autocomplete="current-password" required ref={(el) => (this.password = el as unknown as InputEl)} />
              </art-field>
            )}
            {this.error && <p part="error" role="alert" class="error m-0 text-sm">{this.error}</p>}
            <div class="grid gap-3">
              <art-button type="submit" loading={this.loading}>{this.submitLabel}</art-button>
              <div class="divider" hidden={!this.hasSocial}><span>Or continue with</span></div>
              <slot name="social" />
            </div>
            {this.signupHref && (
              <p class="m-0 text-center text-sm">{this.signupText} <a class="link underline" href={this.signupHref}>{this.signupLabel}</a></p>
            )}
          </form>
        </art-card>
        <div class="footer mt-4 text-center text-sm text-fg-muted" hidden={!this.hasFooter}><slot name="footer" /></div>
      </Host>
    );
  }
}
