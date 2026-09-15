import { Component } from '@angular/core';
import { ArtInput } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-sizes',
  imports: [ArtInput],
  template: `
    <art-input size="sm" placeholder="Small" aria-label="Small"></art-input>
    <art-input placeholder="Medium" aria-label="Medium"></art-input>
    <art-input size="lg" placeholder="Large" aria-label="Large"></art-input>
  `,
})
export class InputSizes {}
