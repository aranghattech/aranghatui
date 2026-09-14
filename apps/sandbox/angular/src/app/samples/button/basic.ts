import { Component } from '@angular/core';
import { ArtButton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-button-basic',
  imports: [ArtButton],
  template: `<art-button (click)="onClick()">Button</art-button>`,
})
export class ButtonBasic {
  onClick() {
    console.log('clicked');
  }
}
