import { Component } from '@angular/core';
import { ArtHello } from '@aranghat/base-angular';

@Component({
  selector: 'sample-hello-outline',
  imports: [ArtHello],
  template: `<art-hello name="artui" variant="outline">Outline variant with slotted text.</art-hello>`,
})
export class HelloOutline {}
