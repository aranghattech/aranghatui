import { Component } from '@angular/core';
import { ArtForgotPassword } from '@aranghat/widgets-angular';

@Component({
  selector: 'sample-forgot-password-basic',
  imports: [ArtForgotPassword],
  template: `
    <art-forgot-password login-href="#login"></art-forgot-password>
  `,
})
export class ForgotPasswordBasic {}
