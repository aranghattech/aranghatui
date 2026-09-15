import { Component } from '@angular/core';
import { ArtLabel, ArtNativeSelect } from '@aranghat/base-angular';

@Component({
  selector: 'sample-native-select-with-label',
  imports: [ArtLabel, ArtNativeSelect],
  template: `
    <art-label for="status">Status</art-label>
    <art-native-select id="status" value="in-progress">
      <option value="">Select status</option>
      <option value="todo">Todo</option>
      <option value="in-progress">In Progress</option>
      <option value="done">Done</option>
      <option value="cancelled">Cancelled</option>
    </art-native-select>
  `,
})
export class NativeSelectWithLabel {}
