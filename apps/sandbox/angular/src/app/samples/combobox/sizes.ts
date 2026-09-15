import { Component } from '@angular/core';
import { ArtCombobox, ArtComboboxItem } from '@aranghat/components-angular';

@Component({
  selector: 'sample-combobox-sizes',
  imports: [ArtCombobox, ArtComboboxItem],
  template: `
    <art-combobox size="sm" placeholder="Small" aria-label="Small">
      <art-combobox-item value="next">Next.js</art-combobox-item>
      <art-combobox-item value="sveltekit">SvelteKit</art-combobox-item>
      <art-combobox-item value="nuxt">Nuxt.js</art-combobox-item>
      <art-combobox-item value="remix" disabled>Remix</art-combobox-item>
      <art-combobox-item value="astro">Astro</art-combobox-item>
    </art-combobox>
    <art-combobox placeholder="Medium" aria-label="Medium">
      <art-combobox-item value="next">Next.js</art-combobox-item>
      <art-combobox-item value="sveltekit">SvelteKit</art-combobox-item>
      <art-combobox-item value="nuxt">Nuxt.js</art-combobox-item>
      <art-combobox-item value="remix" disabled>Remix</art-combobox-item>
      <art-combobox-item value="astro">Astro</art-combobox-item>
    </art-combobox>
    <art-combobox size="lg" placeholder="Large" aria-label="Large">
      <art-combobox-item value="next">Next.js</art-combobox-item>
      <art-combobox-item value="sveltekit">SvelteKit</art-combobox-item>
      <art-combobox-item value="nuxt">Nuxt.js</art-combobox-item>
      <art-combobox-item value="remix" disabled>Remix</art-combobox-item>
      <art-combobox-item value="astro">Astro</art-combobox-item>
    </art-combobox>
  `,
})
export class ComboboxSizes {}
