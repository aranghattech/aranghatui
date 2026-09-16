import { Component } from '@angular/core';
import { ArtForgotPassword } from '@aranghat/widgets-angular';

@Component({
  selector: 'sample-forgot-password-error',
  imports: [ArtForgotPassword],
  template: `
    <art-forgot-password login-href="#login" error="We could not find an account with that email."></art-forgot-password>
  `,
})
export class ForgotPasswordError {}
