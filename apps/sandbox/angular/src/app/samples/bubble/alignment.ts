import { Component } from '@angular/core';
import { ArtBubble } from '@aranghat/components-angular';

@Component({
  selector: 'sample-bubble-alignment',
  imports: [ArtBubble],
  template: `
    <art-bubble variant="muted">Received on the start side.</art-bubble>
    <art-bubble align="end">Sent on the end side.</art-bubble>
  `,
})
export class BubbleAlignment {}
