import { Component } from '@angular/core';
import { ArtForgotPassword } from '@aranghat/widgets-angular';

@Component({
  selector: 'sample-forgot-password-sent',
  imports: [ArtForgotPassword],
  template: `
    <art-forgot-password login-href="#login" sent></art-forgot-password>
  `,
})
export class ForgotPasswordSent {}
