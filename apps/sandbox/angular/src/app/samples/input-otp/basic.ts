import { Component } from '@angular/core';
import { ArtInputOtp } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-otp-basic',
  imports: [ArtInputOtp],
  template: `
    <art-input-otp aria-label="One-time code"></art-input-otp>
  `,
})
export class InputOtpBasic {}
