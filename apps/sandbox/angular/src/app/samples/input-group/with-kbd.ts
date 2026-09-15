import { Component } from '@angular/core';
import { ArtIcon, ArtInput, ArtInputGroup, ArtKbd } from '@aranghat/base-angular';

@Component({
  selector: 'sample-input-group-with-kbd',
  imports: [ArtIcon, ArtInput, ArtInputGroup, ArtKbd],
  template: `
    <art-input-group>
      <art-icon slot="start"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></art-icon>
      <art-input placeholder="Search…" aria-label="Search"></art-input>
      <art-kbd slot="end">⌘K</art-kbd>
    </art-input-group>
  `,
})
export class InputGroupWithKbd {}
