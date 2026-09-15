import { Select, SelectItem } from '@aranghat/components-react';

export default function Sizes() {
  return (
    <>
      <Select size="sm" placeholder="Small" aria-label="Small">
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes" disabled>Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </Select>
      <Select placeholder="Medium" aria-label="Medium">
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes" disabled>Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </Select>
      <Select size="lg" placeholder="Large" aria-label="Large">
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes" disabled>Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </Select>
    </>
  );
}
