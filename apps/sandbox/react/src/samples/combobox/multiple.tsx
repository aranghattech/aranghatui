import { Combobox, ComboboxItem } from '@aranghat/components-react';

export default function Multiple() {
  return (
    <>
      <Combobox multiple placeholder="Add frameworks…" aria-label="Frameworks" show-clear>
        <ComboboxItem value="next">Next.js</ComboboxItem>
        <ComboboxItem value="sveltekit">SvelteKit</ComboboxItem>
        <ComboboxItem value="nuxt">Nuxt.js</ComboboxItem>
        <ComboboxItem value="remix" disabled>Remix</ComboboxItem>
        <ComboboxItem value="astro">Astro</ComboboxItem>
      </Combobox>
    </>
  );
}
