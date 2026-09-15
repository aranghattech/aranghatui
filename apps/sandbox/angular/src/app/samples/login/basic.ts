import { Component } from '@angular/core';
import { ArtLogin } from '@aranghat/widgets-angular';

@Component({
  selector: 'sample-login-basic',
  imports: [ArtLogin],
  template: `
    <art-login forgot-href="#forgot" signup-href="#signup"></art-login>
  `,
})
export class LoginBasic {}
