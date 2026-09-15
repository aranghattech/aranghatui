import { Component } from '@angular/core';
import { ArtNativeSelect } from '@aranghat/base-angular';

@Component({
  selector: 'sample-native-select-disabled',
  imports: [ArtNativeSelect],
  template: `
    <art-native-select aria-label="Status" disabled>
      <option value="">Select status</option>
      <option value="todo">Todo</option>
      <option value="in-progress">In Progress</option>
      <option value="done">Done</option>
      <option value="cancelled">Cancelled</option>
    </art-native-select>
  `,
})
export class NativeSelectDisabled {}
