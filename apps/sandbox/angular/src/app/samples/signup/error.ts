import { Component } from '@angular/core';
import { ArtSignup } from '@aranghat/widgets-angular';

@Component({
  selector: 'sample-signup-error',
  imports: [ArtSignup],
  template: `
    <art-signup login-href="#login" error="An account with this email already exists."></art-signup>
  `,
})
export class SignupError {}
