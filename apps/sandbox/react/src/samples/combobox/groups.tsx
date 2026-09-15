import { Combobox, ComboboxGroup, ComboboxItem } from '@aranghat/components-react';

export default function Groups() {
  return (
    <>
      <Combobox placeholder="Pick a fruit or a vegetable" aria-label="Produce">
        <ComboboxGroup label="Fruits">
          <ComboboxItem value="apple">Apple</ComboboxItem>
          <ComboboxItem value="banana">Banana</ComboboxItem>
        </ComboboxGroup>
        <ComboboxGroup label="Vegetables">
          <ComboboxItem value="carrot">Carrot</ComboboxItem>
          <ComboboxItem value="pea">Pea</ComboboxItem>
        </ComboboxGroup>
      </Combobox>
    </>
  );
}
