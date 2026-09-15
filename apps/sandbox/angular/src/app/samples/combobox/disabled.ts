import { Component } from '@angular/core';
import { ArtCombobox, ArtComboboxItem } from '@aranghat/components-angular';

@Component({
  selector: 'sample-combobox-disabled',
  imports: [ArtCombobox, ArtComboboxItem],
  template: `
    <art-combobox placeholder="Select a framework" aria-label="Framework" disabled>
      <art-combobox-item value="next">Next.js</art-combobox-item>
      <art-combobox-item value="sveltekit">SvelteKit</art-combobox-item>
      <art-combobox-item value="nuxt">Nuxt.js</art-combobox-item>
      <art-combobox-item value="remix" disabled>Remix</art-combobox-item>
      <art-combobox-item value="astro">Astro</art-combobox-item>
    </art-combobox>
  `,
})
export class ComboboxDisabled {}
