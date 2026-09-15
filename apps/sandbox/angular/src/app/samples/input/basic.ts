import { Component } from '@angular/core';
import { ArtInput } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-basic',
  imports: [ArtInput],
  template: `
    <art-input type="email" placeholder="Email" aria-label="Email"></art-input>
  `,
})
export class InputBasic {}
