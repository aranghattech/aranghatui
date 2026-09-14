import { Component } from '@angular/core';
import { ArtHello } from '@aranghat/base-angular';

@Component({
  selector: 'sample-hello-basic',
  imports: [ArtHello],
  template: `<art-hello name="artui" (greet)="onGreet($event.detail)"></art-hello>`,
})
export class HelloBasic {
  onGreet(detail: { name: string }) {
    console.log('greet', detail);
  }
}
