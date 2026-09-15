import { Component } from '@angular/core';
import { ArtResizable, ArtResizableHandle, ArtResizablePanel } from '@aranghat/components-angular';

@Component({
  selector: 'sample-resizable-basic',
  imports: [ArtResizable, ArtResizableHandle, ArtResizablePanel],
  template: `
    <art-resizable style="height: 12rem; border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-lg)">
      <art-resizable-panel default-size="50">
        <div style="display: flex; height: 100%; align-items: center; justify-content: center; font-size: var(--art-font-size-sm); font-weight: var(--art-font-weight-semibold)">One</div>
      </art-resizable-panel>
      <art-resizable-handle></art-resizable-handle>
      <art-resizable-panel default-size="50">
        <div style="display: flex; height: 100%; align-items: center; justify-content: center; font-size: var(--art-font-size-sm); font-weight: var(--art-font-weight-semibold)">Two</div>
      </art-resizable-panel>
    </art-resizable>
  `,
})
export class ResizableBasic {}
