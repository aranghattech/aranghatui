import { Component } from '@angular/core';
import { ArtButtonGroup, ArtButtonGroupText, ArtInput } from '@aranghat/base-angular';

@Component({
  selector: 'sample-button-group-with-text',
  imports: [ArtButtonGroup, ArtButtonGroupText, ArtInput],
  template: `
    <art-button-group>
      <art-button-group-text>$</art-button-group-text>
      <art-input placeholder="0.00" aria-label="Amount"></art-input>
      <art-button-group-text>USD</art-button-group-text>
    </art-button-group>
  `,
})
export class ButtonGroupWithText {}
