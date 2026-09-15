import { Component } from '@angular/core';
import { ArtButton } from '@aranghat/base-angular';
import { ArtBubble, ArtMessage, ArtMessageScroller, ArtMessageScrollerItem } from '@aranghat/components-angular';

interface Turn { id: string; mine: boolean; text: string }
const reply = 'The reply streams in word by word while the scroller keeps the end in view as long as you are following it.';

@Component({
  selector: 'sample-message-scroller-streaming',
  imports: [ArtButton, ArtBubble, ArtMessage, ArtMessageScroller, ArtMessageScrollerItem],
  template: `
    <art-message-scroller style="height: calc(var(--art-space-20) * 4)">
      <!-- the question starts a turn: anchored near the top with a peek of the previous row -->
      @for (t of turns; track t.id) {
        <art-message-scroller-item [messageId]="t.id" [scrollAnchor]="t.mine">
          <art-message [align]="t.mine ? 'end' : 'start'">
            <art-bubble [variant]="t.mine ? 'default' : 'muted'">{{ t.text }}</art-bubble>
          </art-message>
        </art-message-scroller-item>
      }
    </art-message-scroller>
    <art-button variant="outline" (click)="ask()">Ask a question</art-button>
  `,
})
export class MessageScrollerStreaming {
  turns: Turn[] = [];
  ask() {
    const n = this.turns.length / 2 + 1;
    this.turns = [...this.turns, { id: `q${n}`, mine: true, text: `Question ${n}: what happens next?` }, { id: `a${n}`, mine: false, text: '' }];
    const words = reply.split(' ');
    let i = 0;
    const tick = setInterval(() => {
      this.turns = this.turns.map((x) => (x.id === `a${n}` ? { ...x, text: words.slice(0, i + 1).join(' ') } : x));
      if (++i >= words.length) clearInterval(tick);
    }, 120);
  }
}
