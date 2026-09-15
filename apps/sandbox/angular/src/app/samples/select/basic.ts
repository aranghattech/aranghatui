import { Component } from '@angular/core';
import { ArtSelect, ArtSelectItem } from '@aranghat/components-angular';

@Component({
  selector: 'sample-select-basic',
  imports: [ArtSelect, ArtSelectItem],
  template: `
    <art-select placeholder="Select a fruit" aria-label="Fruit">
      <art-select-item value="apple">Apple</art-select-item>
      <art-select-item value="banana">Banana</art-select-item>
      <art-select-item value="blueberry">Blueberry</art-select-item>
      <art-select-item value="grapes" disabled>Grapes</art-select-item>
      <art-select-item value="pineapple">Pineapple</art-select-item>
    </art-select>
  `,
})
export class SelectBasic {}
