import { Component } from '@angular/core';
import { ArtButton, ArtIcon } from '@aranghat/base-angular';
import { plus } from '@aranghat/icons/plus';

@Component({
  selector: 'sample-button-icon-only',
  imports: [ArtButton, ArtIcon],
  template: `
    <art-button variant="outline" icon aria-label="Add">
      <art-icon [icon]="plus"></art-icon>
    </art-button>
  `,
})
export class ButtonIconOnly {
  plus = plus;
}
