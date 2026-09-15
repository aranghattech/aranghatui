import { Component } from '@angular/core';
import { ArtNativeSelect } from '@aranghat/base-angular';

@Component({
  selector: 'sample-native-select-groups',
  imports: [ArtNativeSelect],
  template: `
    <art-native-select aria-label="Country">
      <optgroup label="Europe">
        <option value="de">Germany</option>
        <option value="fr">France</option>
      </optgroup>
      <optgroup label="Asia">
        <option value="in">India</option>
        <option value="jp">Japan</option>
      </optgroup>
    </art-native-select>
  `,
})
export class NativeSelectGroups {}
