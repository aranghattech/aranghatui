import { Component } from '@angular/core';
import { ArtTypography } from '@aranghat/base-angular';

@Component({
  selector: 'sample-typography-text-styles',
  imports: [ArtTypography],
  template: `
    <art-typography>
      <p class="lead">A modal dialog that interrupts the user with important content and expects a response.</p>
      <p class="large">Are you absolutely sure?</p>
      <p class="small">Email address</p>
      <p class="muted">Enter your email address.</p>
    </art-typography>
  `,
})
export class TypographyTextStyles {}
