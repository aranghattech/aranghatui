import { Component } from '@angular/core';
import { ArtSignup } from '@aranghat/widgets-angular';

@Component({
  selector: 'sample-signup-basic',
  imports: [ArtSignup],
  template: `
    <art-signup login-href="#login"></art-signup>
  `,
})
export class SignupBasic {}
