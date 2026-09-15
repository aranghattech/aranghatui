import { useState, type FormEvent } from 'react';
import { Button, Label } from '@aranghat/base-react';
import { Combobox, ComboboxItem } from '@aranghat/components-react';

export default function InAForm() {
  const [framework, setFramework] = useState('');
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted', Object.fromEntries(new FormData(e.currentTarget)));
  };
  return (
    <form onSubmit={onSubmit}>
      <Label htmlFor="framework">Framework</Label>
      <Combobox id="framework" name="framework" placeholder="Select a framework" required value={framework} onChange={(e) => setFramework(e.detail.value as string)}>
        <ComboboxItem value="next">Next.js</ComboboxItem>
        <ComboboxItem value="sveltekit">SvelteKit</ComboboxItem>
        <ComboboxItem value="nuxt">Nuxt.js</ComboboxItem>
        <ComboboxItem value="remix" disabled>Remix</ComboboxItem>
        <ComboboxItem value="astro">Astro</ComboboxItem>
      </Combobox>
      <Button type="submit">Submit</Button>
    </form>
  );
}
