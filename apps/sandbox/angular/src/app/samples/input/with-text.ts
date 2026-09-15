import { Component } from '@angular/core';
import { ArtInput } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-with-text',
  imports: [ArtInput],
  template: `
    <art-input placeholder="example" aria-label="Domain">
      <span slot="start">https://</span>
      <span slot="end">.com</span>
    </art-input>
  `,
})
export class InputWithText {}
