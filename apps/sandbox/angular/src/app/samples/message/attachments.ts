import { Component } from '@angular/core';
import { ArtAttachment, ArtAvatar, ArtBubble, ArtMessage } from '@aranghat/components-angular';

@Component({
  selector: 'sample-message-attachments',
  imports: [ArtAttachment, ArtAvatar, ArtBubble, ArtMessage],
  template: `
    <art-message align="end">
      <art-avatar slot="avatar" size="sm" alt="">ME</art-avatar>
      <art-bubble>Here are the files.</art-bubble>
      <art-attachment name="q3-results.pdf" description="PDF · 1.2 MB"></art-attachment>
    </art-message>
  `,
})
export class MessageAttachments {}
