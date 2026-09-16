import { Component } from '@angular/core';
import { ArtButton, ArtIcon } from '@aranghat/base-angular';
import { plus } from '@aranghat/icons/plus';

@Component({
  selector: 'sample-button-rounded',
  imports: [ArtButton, ArtIcon],
  template: `
    <art-button rounded>Button</art-button>
    <art-button rounded variant="outline">Outline</art-button>
    <art-button rounded icon aria-label="Add">
      <art-icon [icon]="plus"></art-icon>
    </art-button>
  `,
})
export class ButtonRounded {
  plus = plus;
}
