import { Component } from '@angular/core';
import { ArtLogin } from '@aranghat/widgets-angular';

@Component({
  selector: 'sample-login-email-only',
  imports: [ArtLogin],
  template: `
    <art-login forgot-href="#forgot" signup-href="#signup" email-only submit-label="Send magic link"></art-login>
  `,
})
export class LoginEmailOnly {}
