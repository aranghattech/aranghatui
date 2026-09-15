import { Checkbox } from '@aranghat/base-react';

export default function Sizes() {
  return (
    <>
      <Checkbox size="sm" checked aria-label="Small" />
      <Checkbox checked aria-label="Medium" />
      <Checkbox size="lg" checked aria-label="Large" />
    </>
  );
}
