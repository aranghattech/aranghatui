import { Select, SelectItem } from '@aranghat/components-react';

export default function Open() {
  return (
    <>
      <Select value="banana" aria-label="Fruit" open>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes" disabled>Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </Select>
    </>
  );
}
