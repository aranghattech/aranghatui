import { DatePicker } from '@aranghat/components-react';

export default function Disabled() {
  return (
    <>
      <DatePicker value="2026-09-15" aria-label="Date" disabled />
    </>
  );
}
