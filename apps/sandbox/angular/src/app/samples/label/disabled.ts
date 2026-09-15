import { Component } from '@angular/core';
import { ArtInput, ArtLabel } from '@aranghat/base-angular';

@Component({
  selector: 'sample-label-disabled',
  imports: [ArtInput, ArtLabel],
  template: `
    <art-label for="email-off" disabled>Your email address</art-label>
    <art-input id="email-off" type="email" placeholder="Email" disabled></art-input>
  `,
})
export class LabelDisabled {}
