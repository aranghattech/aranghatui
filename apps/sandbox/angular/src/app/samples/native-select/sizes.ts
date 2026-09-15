import { Component } from '@angular/core';
import { ArtNativeSelect } from '@aranghat/base-angular';

@Component({
  selector: 'sample-native-select-sizes',
  imports: [ArtNativeSelect],
  template: `
    <art-native-select size="sm" aria-label="Small">
      <option value="">Select status</option>
      <option value="todo">Todo</option>
      <option value="in-progress">In Progress</option>
      <option value="done">Done</option>
      <option value="cancelled">Cancelled</option>
    </art-native-select>
    <art-native-select aria-label="Medium">
      <option value="">Select status</option>
      <option value="todo">Todo</option>
      <option value="in-progress">In Progress</option>
      <option value="done">Done</option>
      <option value="cancelled">Cancelled</option>
    </art-native-select>
    <art-native-select size="lg" aria-label="Large">
      <option value="">Select status</option>
      <option value="todo">Todo</option>
      <option value="in-progress">In Progress</option>
      <option value="done">Done</option>
      <option value="cancelled">Cancelled</option>
    </art-native-select>
  `,
})
export class NativeSelectSizes {}
