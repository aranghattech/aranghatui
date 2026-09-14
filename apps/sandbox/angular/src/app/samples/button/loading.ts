import { Component } from '@angular/core';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-button-loading',
  imports: [ArtButton],
  template: `<art-button loading>Please wait</art-button>`,
})
export class ButtonLoading {}
