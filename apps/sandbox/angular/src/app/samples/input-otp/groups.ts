import { Component } from '@angular/core';
import { ArtInputOtp } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-otp-groups',
  imports: [ArtInputOtp],
  template: `
    <art-input-otp group-size="3" aria-label="One-time code"></art-input-otp>
  `,
})
export class InputOtpGroups {}
