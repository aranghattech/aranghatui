import { Component } from '@angular/core';
import { ArtInputOtp } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-otp-disabled',
  imports: [ArtInputOtp],
  template: `
    <art-input-otp value="123456" disabled aria-label="One-time code"></art-input-otp>
  `,
})
export class InputOtpDisabled {}
