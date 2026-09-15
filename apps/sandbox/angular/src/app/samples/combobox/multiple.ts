import { Component } from '@angular/core';
import { ArtCombobox, ArtComboboxItem } from '@aranghat/components-angular';

@Component({
  selector: 'sample-combobox-multiple',
  imports: [ArtCombobox, ArtComboboxItem],
  template: `
    <art-combobox multiple placeholder="Add frameworks…" aria-label="Frameworks" show-clear>
      <art-combobox-item value="next">Next.js</art-combobox-item>
      <art-combobox-item value="sveltekit">SvelteKit</art-combobox-item>
      <art-combobox-item value="nuxt">Nuxt.js</art-combobox-item>
      <art-combobox-item value="remix" disabled>Remix</art-combobox-item>
      <art-combobox-item value="astro">Astro</art-combobox-item>
    </art-combobox>
  `,
})
export class ComboboxMultiple {}
