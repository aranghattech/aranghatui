import { Component } from '@angular/core';
import { ArtAvatar, ArtBubble, ArtMessage, ArtMessageScroller, ArtMessageScrollerItem } from '@aranghat/components-angular';

@Component({
  selector: 'sample-message-scroller-open-at-start',
  imports: [ArtAvatar, ArtBubble, ArtMessage, ArtMessageScroller, ArtMessageScrollerItem],
  template: `
    <art-message-scroller default-scroll-position="start" style="height: var(--art-space-24); height: calc(var(--art-space-20) * 4)">
      <art-message-scroller-item message-id="m1" scroll-anchor>
        <art-message align="end">
          <art-avatar slot="avatar" size="sm" alt="">ME</art-avatar>
          <art-bubble>Question 1: could you expand on the previous point?</art-bubble>
        </art-message>
      </art-message-scroller-item>
      <art-message-scroller-item message-id="m2">
        <art-message>
          <art-avatar slot="avatar" size="sm" alt="">AI</art-avatar>
          <art-bubble variant="muted">Answer 2: certainly. The main idea is that the reader's position is sacred, so the transcript only moves when they are already following the live edge.</art-bubble>
        </art-message>
      </art-message-scroller-item>
      <art-message-scroller-item message-id="m3" scroll-anchor>
        <art-message align="end">
          <art-avatar slot="avatar" size="sm" alt="">ME</art-avatar>
          <art-bubble>Question 3: could you expand on the previous point?</art-bubble>
        </art-message>
      </art-message-scroller-item>
      <art-message-scroller-item message-id="m4">
        <art-message>
          <art-avatar slot="avatar" size="sm" alt="">AI</art-avatar>
          <art-bubble variant="muted">Answer 4: certainly. The main idea is that the reader's position is sacred, so the transcript only moves when they are already following the live edge.</art-bubble>
        </art-message>
      </art-message-scroller-item>
      <art-message-scroller-item message-id="m5" scroll-anchor>
        <art-message align="end">
          <art-avatar slot="avatar" size="sm" alt="">ME</art-avatar>
          <art-bubble>Question 5: could you expand on the previous point?</art-bubble>
        </art-message>
      </art-message-scroller-item>
      <art-message-scroller-item message-id="m6">
        <art-message>
          <art-avatar slot="avatar" size="sm" alt="">AI</art-avatar>
          <art-bubble variant="muted">Answer 6: certainly. The main idea is that the reader's position is sacred, so the transcript only moves when they are already following the live edge.</art-bubble>
        </art-message>
      </art-message-scroller-item>
    </art-message-scroller>
  `,
})
export class MessageScrollerOpenAtStart {}
