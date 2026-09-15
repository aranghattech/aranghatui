import { Component } from '@angular/core';
import { ArtButton, ArtInput } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-with-button',
  imports: [ArtButton, ArtInput],
  template: `
    <art-input type="email" placeholder="Email" aria-label="Email"></art-input>
    <art-button type="submit">Subscribe</art-button>
  `,
})
export class InputWithButton {}
