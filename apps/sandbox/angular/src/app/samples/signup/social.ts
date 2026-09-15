import { Component } from '@angular/core';
import { ArtSignup } from '@aranghat/widgets-angular';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-signup-social',
  imports: [ArtButton, ArtSignup],
  template: `
    <art-signup login-href="#login">
      <art-button slot="social" variant="outline">Sign up with Google</art-button>
    </art-signup>
  `,
})
export class SignupSocial {}
