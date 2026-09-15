import { Component } from '@angular/core';
import { ArtInput, ArtLabel } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-file',
  imports: [ArtInput, ArtLabel],
  template: `
    <art-label for="picture">Picture</art-label>
    <art-input id="picture" type="file"></art-input>
  `,
})
export class InputFile {}
