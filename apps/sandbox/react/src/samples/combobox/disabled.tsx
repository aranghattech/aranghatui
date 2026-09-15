import { Combobox, ComboboxItem } from '@aranghat/components-react';

export default function Disabled() {
  return (
    <>
      <Combobox placeholder="Select a framework" aria-label="Framework" disabled>
        <ComboboxItem value="next">Next.js</ComboboxItem>
        <ComboboxItem value="sveltekit">SvelteKit</ComboboxItem>
        <ComboboxItem value="nuxt">Nuxt.js</ComboboxItem>
        <ComboboxItem value="remix" disabled>Remix</ComboboxItem>
        <ComboboxItem value="astro">Astro</ComboboxItem>
      </Combobox>
    </>
  );
}
