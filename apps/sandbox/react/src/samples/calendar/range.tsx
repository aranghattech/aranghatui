import { Calendar } from '@aranghat/components-react';

export default function Range() {
  return (
    <>
      <Calendar mode="range" value="2026-09-08/2026-09-17" month="2026-09" numberOfMonths="2" aria-label="Pick a date range" />
    </>
  );
}
