import { Component } from '@angular/core';
import { ArtLabel, ArtNativeSelect } from '@aranghat/base-angular';

@Component({
  selector: 'sample-native-select-invalid',
  imports: [ArtLabel, ArtNativeSelect],
  template: `
    <art-label for="status-2">Status</art-label>
    <art-native-select id="status-2" invalid required aria-describedby="status-2-error">
      <option value="">Select status</option>
      <option value="todo">Todo</option>
      <option value="in-progress">In Progress</option>
      <option value="done">Done</option>
      <option value="cancelled">Cancelled</option>
    </art-native-select>
    <p id="status-2-error">Please choose a status.</p>
  `,
})
export class NativeSelectInvalid {}
