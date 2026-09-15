import { DatePicker } from '@aranghat/components-react';

export default function Range() {
  return (
    <>
      <DatePicker mode="range" value="2026-09-08/2026-09-17" placeholder="Pick a date range" aria-label="Dates" open />
    </>
  );
}
