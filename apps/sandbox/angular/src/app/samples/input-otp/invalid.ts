import { Component } from '@angular/core';
import { ArtInputOtp } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-otp-invalid',
  imports: [ArtInputOtp],
  template: `
    <art-input-otp value="000000" invalid aria-label="One-time code"></art-input-otp>
  `,
})
export class InputOtpInvalid {}
