import { Component } from '@angular/core';
import { ArtCombobox, ArtComboboxItem } from '@aranghat/components-angular';

@Component({
  selector: 'sample-combobox-no-trigger',
  imports: [ArtCombobox, ArtComboboxItem],
  template: `
    <art-combobox placeholder="Search…" aria-label="Framework" show-trigger="false">
      <art-combobox-item value="next">Next.js</art-combobox-item>
      <art-combobox-item value="sveltekit">SvelteKit</art-combobox-item>
      <art-combobox-item value="nuxt">Nuxt.js</art-combobox-item>
      <art-combobox-item value="remix" disabled>Remix</art-combobox-item>
      <art-combobox-item value="astro">Astro</art-combobox-item>
    </art-combobox>
  `,
})
export class ComboboxNoTrigger {}
