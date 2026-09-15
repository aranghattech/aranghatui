import { Component } from '@angular/core';
import { ArtField, ArtInputOtp, ArtLabel } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-otp-with-label',
  imports: [ArtField, ArtInputOtp, ArtLabel],
  template: `
    <art-field>
      <art-label slot="label">Verification code</art-label>
      <art-input-otp group-size="3"></art-input-otp>
      <p slot="description">Enter the 6-digit code we sent to your phone.</p>
    </art-field>
  `,
})
export class InputOtpWithLabel {}
