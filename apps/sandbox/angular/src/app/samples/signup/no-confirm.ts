import { Component } from '@angular/core';
import { ArtSignup } from '@aranghat/widgets-angular';

@Component({
  selector: 'sample-signup-no-confirm',
  imports: [ArtSignup],
  template: `
    <art-signup login-href="#login" hide-confirm></art-signup>
  `,
})
export class SignupNoConfirm {}
