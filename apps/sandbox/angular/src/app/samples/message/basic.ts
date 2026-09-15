import { Component } from '@angular/core';
import { ArtAvatar, ArtBubble, ArtMessage } from '@aranghat/components-angular';

@Component({
  selector: 'sample-message-basic',
  imports: [ArtAvatar, ArtBubble, ArtMessage],
  template: `
    <art-message>
      <art-avatar slot="avatar" size="sm" alt="">AL</art-avatar>
      <art-bubble variant="muted">Hey! Are we still on for lunch tomorrow?</art-bubble>
    </art-message>
    <art-message align="end">
      <art-avatar slot="avatar" size="sm" alt="">ME</art-avatar>
      <art-bubble>Yes — 12:30 at the usual place.</art-bubble>
    </art-message>
  `,
})
export class MessageBasic {}
