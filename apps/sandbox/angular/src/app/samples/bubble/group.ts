import { Component } from '@angular/core';
import { ArtBubble, ArtBubbleGroup } from '@aranghat/components-angular';

@Component({
  selector: 'sample-bubble-group',
  imports: [ArtBubble, ArtBubbleGroup],
  template: `
    <art-bubble-group>
      <art-bubble variant="muted">First of three.</art-bubble>
      <art-bubble variant="muted">Second, from the same sender.</art-bubble>
      <art-bubble variant="muted">Third.</art-bubble>
    </art-bubble-group>
  `,
})
export class BubbleGroup {}
