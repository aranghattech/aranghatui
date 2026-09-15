import { Component } from '@angular/core';
import { ArtButton } from '@aranghat/base-angular';
import { ArtBubble, ArtMessage, ArtMessageScroller, ArtMessageScrollerItem } from '@aranghat/components-angular';

@Component({
  selector: 'sample-message-scroller-load-earlier',
  imports: [ArtButton, ArtBubble, ArtMessage, ArtMessageScroller, ArtMessageScrollerItem],
  template: `
    <art-button variant="outline" (click)="earlier()">Load earlier messages</art-button>
    <art-message-scroller default-scroll-position="start" style="height: calc(var(--art-space-20) * 4)">
      @for (n of ids; track n) {
        <art-message-scroller-item [messageId]="'m' + n">
          <art-message [align]="n % 2 ? 'start' : 'end'">
            <art-bubble [variant]="n % 2 ? 'muted' : 'default'">Message {{ n }}</art-bubble>
          </art-message>
        </art-message-scroller-item>
      }
    </art-message-scroller>
  `,
})
export class MessageScrollerLoadEarlier {
  ids = [21, 22, 23, 24];
  // rows inserted before the first one keep the visible row exactly where it is
  earlier() { const first = this.ids[0]!; this.ids = [...Array.from({ length: 5 }, (_, i) => first - 5 + i), ...this.ids]; }
}
