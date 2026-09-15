import { Component } from '@angular/core';
import { ArtBubble } from '@aranghat/components-angular';

@Component({
  selector: 'sample-bubble-variants',
  imports: [ArtBubble],
  template: `
    <art-bubble variant="default">Default bubble</art-bubble>
    <art-bubble variant="secondary">Secondary bubble</art-bubble>
    <art-bubble variant="muted">Muted bubble</art-bubble>
    <art-bubble variant="tinted">Tinted bubble</art-bubble>
    <art-bubble variant="outline">Outline bubble</art-bubble>
    <art-bubble variant="ghost">Ghost bubble</art-bubble>
    <art-bubble variant="destructive">Destructive bubble</art-bubble>
  `,
})
export class BubbleVariants {}
