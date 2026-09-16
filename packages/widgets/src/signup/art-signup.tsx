import { Component, Element, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';
import { defineAuthElements, submitOnEnter } from '../auth/define';
import { child } from '@aranghat/primitives/dom';

type InputEl = HTMLElement & { value: string; invalid: boolean };

/**
 * Signup — the shadcn signup block as one element: name, email, password and confirmation in a
 * card, the create-account button, optional social buttons and a sign-in link. The widget checks
 * that the passwords match; you own what happens on `submit` (`detail.name`, `detail.email`,
 * `detail.password`).
 *
 * @slot logo - Brand above the card.
 * @slot social - Alternative sign-up buttons under an "Or continue with" divider.
 * @slot footer - Extra content under the card (terms).
 * @part card - The card.
 * @part form - The form.
 * @part error - The error line.
 */
@Component({ tag: 'art-signup', styleUrl: 'art-signup.css', shadow: true })
export class ArtSignup {
  @Element() host!: HTMLElement;
  private name?: InputEl;
  private email?: InputEl;
  private password?: InputEl;
  private confirm?: InputEl;

  @Prop() heading = 'Create your account';
  @Prop() description = 'Enter your details below to create your account';
  @Prop({ attribute: 'submit-label' }) submitLabel = 'Create account';
  @Prop({ attribute: 'name-label' }) nameLabel = 'Full name';
  @Prop({ attribute: 'email-label' }) emailLabel = 'Email';
  @Prop({ attribute: 'password-label' }) passwordLabel = 'Password';
  @Prop({ attribute: 'confirm-label' }) confirmLabel = 'Confirm password';
  @Prop({ attribute: 'mismatch-text' }) mismatchText = 'Passwords do not match.';
  /** Drop the confirmation field. */
  @Prop({ reflect: true, attribute: 'hide-confirm' }) hideConfirm = false;
  /** Shows the sign-in line under the button. */
  @Prop({ attribute: 'login-href' }) loginHref?: string;
  @Prop({ attribute: 'login-label' }) loginLabel = 'Sign in';
  @Prop({ attribute: 'login-text' }) loginText = 'Already have an account?';
  /** Spinner on the button; submits are ignored meanwhile. */
  @Prop({ reflect: true }) loading = false;
  /** Error line above the button. */
  @Prop() error?: string;
  @State() mismatch = false;
  @State() hasLogo = false;
  @State() hasSocial = false;
  @State() hasFooter = false;

  /** Emitted when the form is submitted with valid, matching fields; `detail.name`, `detail.email`, `detail.password`. */
  @Event({ eventName: 'submit', bubbles: true, composed: true }) submitEvent!: EventEmitter<{ name: string; email: string; password: string }>;

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
    this.hasSocial = !!child(this.host, '[slot="social"]');
    this.hasFooter = !!child(this.host, '[slot="footer"]');
  };
  private onSubmit = (e: Event) => {
    e.preventDefault();
    if (this.loading) return;
    const password = this.password?.value ?? '';
    if (!this.hideConfirm && (this.confirm?.value ?? '') !== password) { this.mismatch = true; this.confirm?.focus(); return; }
    this.mismatch = false;
    this.submitEvent.emit({ name: this.name?.value ?? '', email: this.email?.value ?? '', password });
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
              <art-label slot="label">{this.nameLabel}</art-label>
              <art-input name="name" placeholder="Ada Lovelace" autocomplete="name" required ref={(el) => (this.name = el as unknown as InputEl)} />
            </art-field>
            <art-field>
              <art-label slot="label">{this.emailLabel}</art-label>
              <art-input type="email" name="email" placeholder="m@example.com" autocomplete="email" required ref={(el) => (this.email = el as unknown as InputEl)} />
            </art-field>
            <art-field>
              <art-label slot="label">{this.passwordLabel}</art-label>
              <art-input type="password" name="password" autocomplete="new-password" required ref={(el) => (this.password = el as unknown as InputEl)} onInput={() => (this.mismatch = false)} />
            </art-field>
            {!this.hideConfirm && (
              <art-field>
                <art-label slot="label">{this.confirmLabel}</art-label>
                <art-input type="password" name="confirm" autocomplete="new-password" required ref={(el) => (this.confirm = el as unknown as InputEl)} onInput={() => (this.mismatch = false)} />
                {this.mismatch && <p slot="error">{this.mismatchText}</p>}
              </art-field>
            )}
            {this.error && <p part="error" role="alert" class="error m-0 text-sm">{this.error}</p>}
            <div class="grid gap-3">
              <art-button full type="submit" loading={this.loading}>{this.submitLabel}</art-button>
              <div class="divider" hidden={!this.hasSocial}><span>Or continue with</span></div>
              <slot name="social" />
            </div>
            {this.loginHref && (
              <p class="m-0 text-center text-sm">{this.loginText} <a class="link underline" href={this.loginHref}>{this.loginLabel}</a></p>
            )}
          </form>
        </art-card>
        <div class="footer mt-4 text-center text-sm text-fg-muted" hidden={!this.hasFooter}><slot name="footer" /></div>
      </Host>
    );
  }
}
