import { Component } from '@angular/core';
import { ArtInputOtp } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-otp-alphanumeric',
  imports: [ArtInputOtp],
  template: `
    <art-input-otp pattern="alphanumeric" group-size="4" length="8" aria-label="Licence key"></art-input-otp>
  `,
})
export class InputOtpAlphanumeric {}
