import { Component } from '@angular/core';
import { ArtField, ArtLabel, ArtNativeSelect, ArtTextarea } from '@aranghat/base-angular';

@Component({
  selector: 'sample-field-select-and-textarea',
  imports: [ArtField, ArtLabel, ArtNativeSelect, ArtTextarea],
  template: `
    <art-field>
      <art-label slot="label">Department</art-label>
      <art-native-select>
        <option value="eng">Engineering</option>
        <option value="design">Design</option>
      </art-native-select>
    </art-field>
    <art-field>
      <art-label slot="label">Feedback</art-label>
      <art-textarea placeholder="Your feedback…"></art-textarea>
      <p slot="description">Max 500 characters.</p>
    </art-field>
  `,
})
export class FieldSelectAndTextarea {}
