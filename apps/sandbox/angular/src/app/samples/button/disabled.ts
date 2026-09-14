import { Component } from '@angular/core';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-button-disabled',
  imports: [ArtButton],
  template: `<art-button disabled>Disabled</art-button>`,
})
export class ButtonDisabled {}
