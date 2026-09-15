import { Component } from '@angular/core';
import { ArtBubble } from '@aranghat/components-angular';

@Component({
  selector: 'sample-bubble-basic',
  imports: [ArtBubble],
  template: `
    <art-bubble>Hey! Are we still on for lunch tomorrow?</art-bubble>
    <art-bubble variant="muted" align="end">Yes — 12:30 at the usual place.<span slot="reactions" role="img" aria-label="thumbs up">👍</span></art-bubble>
  `,
})
export class BubbleBasic {}
