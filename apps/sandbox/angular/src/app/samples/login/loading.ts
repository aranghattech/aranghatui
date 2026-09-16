import { Component } from '@angular/core';
import { ArtLogin } from '@aranghat/widgets-angular';

@Component({
  selector: 'sample-login-loading',
  imports: [ArtLogin],
  template: `
    <art-login forgot-href="#forgot" signup-href="#signup" loading></art-login>
  `,
})
export class LoginLoading {}
