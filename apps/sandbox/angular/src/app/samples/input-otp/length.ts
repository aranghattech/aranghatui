import { Component } from '@angular/core';
import { ArtInputOtp } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-otp-length',
  imports: [ArtInputOtp],
  template: `
    <art-input-otp length="4" aria-label="PIN"></art-input-otp>
  `,
})
export class InputOtpLength {}
