import { Component, signal } from '@angular/core';
import { ArtHelloOverlay } from '@aranghat/modals-angular';

@Component({
  selector: 'sample-hello-overlay-basic',
  imports: [ArtHelloOverlay],
  template: `
    <button type="button" (click)="open.set(true)">Open overlay</button>
    <art-hello-overlay name="artui" [open]="open()" (openChange)="open.set($event.detail.open)"></art-hello-overlay>
  `,
})
export class HelloOverlayBasic {
  open = signal(false);
}
