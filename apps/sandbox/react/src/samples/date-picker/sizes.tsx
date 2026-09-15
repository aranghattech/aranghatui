import { DatePicker } from '@aranghat/components-react';

export default function Sizes() {
  return (
    <>
      <DatePicker size="sm" aria-label="Small" />
      <DatePicker aria-label="Medium" />
      <DatePicker size="lg" aria-label="Large" />
    </>
  );
}
