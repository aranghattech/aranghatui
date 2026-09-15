import { useState, type FormEvent } from 'react';
import { Button, Label } from '@aranghat/base-react';
import { Select, SelectItem } from '@aranghat/components-react';

export default function InAForm() {
  const [fruit, setFruit] = useState('');
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted', Object.fromEntries(new FormData(e.currentTarget)));
  };
  return (
    <form onSubmit={onSubmit}>
      <Label htmlFor="fruit">Fruit</Label>
      <Select id="fruit" name="fruit" placeholder="Select a fruit" required value={fruit} onChange={(e) => setFruit(e.detail.value)}>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes" disabled>Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </Select>
      <Button type="submit">Submit</Button>
    </form>
  );
}
