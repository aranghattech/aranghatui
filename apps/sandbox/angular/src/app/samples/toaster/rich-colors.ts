import { Component } from '@angular/core';
import { ArtToast, ArtToaster } from '@aranghat/components-angular';

@Component({
  selector: 'sample-toaster-rich-colors',
  imports: [ArtToast, ArtToaster],
  template: `
    <art-toaster inline rich-colors>
      <art-toast variant="success" duration="0">Success</art-toast>
      <art-toast variant="error" duration="0">Error</art-toast>
      <art-toast variant="warning" duration="0">Warning</art-toast>
      <art-toast variant="info" duration="0">Info</art-toast>
    </art-toaster>
  `,
})
export class ToasterRichColors {}
