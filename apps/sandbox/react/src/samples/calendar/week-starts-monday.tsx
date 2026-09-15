import { Calendar } from '@aranghat/components-react';

export default function WeekStartsMonday() {
  return (
    <>
      <Calendar value="2026-09-15" month="2026-09" weekStartsOn="1" aria-label="Pick a date" />
    </>
  );
}
