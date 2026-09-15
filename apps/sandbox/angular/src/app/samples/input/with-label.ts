import { Component } from '@angular/core';
import { ArtInput, ArtLabel } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-with-label',
  imports: [ArtInput, ArtLabel],
  template: `
    <art-label for="email-1">Email</art-label>
    <art-input id="email-1" type="email" placeholder="Email"></art-input>
  `,
})
export class InputWithLabel {}
