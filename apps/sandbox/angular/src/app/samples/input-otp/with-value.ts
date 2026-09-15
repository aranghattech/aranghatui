import { Component } from '@angular/core';
import { ArtInputOtp } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-otp-with-value',
  imports: [ArtInputOtp],
  template: `
    <art-input-otp value="1234" aria-label="One-time code"></art-input-otp>
  `,
})
export class InputOtpWithValue {}
