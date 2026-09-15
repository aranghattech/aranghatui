import { Component } from '@angular/core';
import { ArtAttachment } from '@aranghat/components-angular';

@Component({
  selector: 'sample-attachment-states',
  imports: [ArtAttachment],
  template: `
    <art-attachment state="idle" name="report.docx" description="Not uploaded"></art-attachment>
    <art-attachment state="uploading" progress="42" name="report.docx"></art-attachment>
    <art-attachment state="processing" name="report.docx"></art-attachment>
    <art-attachment state="error" name="report.docx" description="Too large (max 10 MB)"></art-attachment>
    <art-attachment state="done" name="report.docx" description="DOCX · 340 KB"></art-attachment>
  `,
})
export class AttachmentStates {}
