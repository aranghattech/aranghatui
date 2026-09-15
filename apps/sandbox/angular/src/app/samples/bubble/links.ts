import { Component } from '@angular/core';
import { ArtBubble } from '@aranghat/components-angular';

@Component({
  selector: 'sample-bubble-links',
  imports: [ArtBubble],
  template: `
    <art-bubble variant="outline" href="https://example.com" target="_blank" rel="noreferrer">Open the shared document ↗</art-bubble>
    <art-bubble variant="muted">Reply with <a href="#">a link</a> inside the text.</art-bubble>
  `,
})
export class BubbleLinks {}
