import { Select, SelectItem } from '@aranghat/components-react';

export default function Basic() {
  return (
    <>
      <Select placeholder="Select a fruit" aria-label="Fruit">
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes" disabled>Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </Select>
    </>
  );
}
