import { Combobox, ComboboxItem } from '@aranghat/components-react';

export default function NoTrigger() {
  return (
    <>
      <Combobox placeholder="Search…" aria-label="Framework" showTrigger="false">
        <ComboboxItem value="next">Next.js</ComboboxItem>
        <ComboboxItem value="sveltekit">SvelteKit</ComboboxItem>
        <ComboboxItem value="nuxt">Nuxt.js</ComboboxItem>
        <ComboboxItem value="remix" disabled>Remix</ComboboxItem>
        <ComboboxItem value="astro">Astro</ComboboxItem>
      </Combobox>
    </>
  );
}
