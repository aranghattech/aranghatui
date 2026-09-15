import { Component } from '@angular/core';
import { ArtAvatar, ArtBubble, ArtBubbleGroup, ArtMessage, ArtMessageGroup } from '@aranghat/components-angular';

@Component({
  selector: 'sample-message-group',
  imports: [ArtAvatar, ArtBubble, ArtBubbleGroup, ArtMessage, ArtMessageGroup],
  template: `
    <art-message-group>
      <art-message>
        <art-avatar slot="avatar" size="sm" alt="">AL</art-avatar>
        <art-bubble-group>
          <art-bubble variant="muted">I pushed the fix.</art-bubble>
          <art-bubble variant="muted">CI is green.</art-bubble>
          <art-bubble variant="muted">Ready for review whenever you are.</art-bubble>
        </art-bubble-group>
      </art-message>
    </art-message-group>
  `,
})
export class MessageGroup {}
