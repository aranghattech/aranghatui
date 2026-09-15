import { Component } from '@angular/core';
import { ArtInput, ArtLabel } from '@aranghat/base-angular';

@Component({
  selector: 'sample-label-basic',
  imports: [ArtInput, ArtLabel],
  template: `
    <art-label for="email">Your email address</art-label>
    <art-input id="email" type="email" placeholder="Email"></art-input>
  `,
})
export class LabelBasic {}
