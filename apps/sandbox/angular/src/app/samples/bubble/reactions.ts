import { Component } from '@angular/core';
import { ArtBubble } from '@aranghat/components-angular';

@Component({
  selector: 'sample-bubble-reactions',
  imports: [ArtBubble],
  template: `
    <art-bubble variant="muted" reactions-side="bottom" reactions-align="start"><span>Reactions at the bottom start.</span><span slot="reactions" role="img" aria-label="heart and fire">❤️ 🔥</span></art-bubble>
    <art-bubble align="end" reactions-side="top" reactions-align="end"><span>Reactions at the top end.</span><span slot="reactions" role="img" aria-label="3 laughing">😂 3</span></art-bubble>
  `,
})
export class BubbleReactions {}
