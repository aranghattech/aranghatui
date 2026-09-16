import { Component } from '@angular/core';
import { ArtLogin } from '@aranghat/widgets-angular';

@Component({
  selector: 'sample-login-error',
  imports: [ArtLogin],
  template: `
    <art-login forgot-href="#forgot" signup-href="#signup" error="Wrong email or password."></art-login>
  `,
})
export class LoginError {}
