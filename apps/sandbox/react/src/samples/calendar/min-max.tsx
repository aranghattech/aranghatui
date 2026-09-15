import { Calendar } from '@aranghat/components-react';

export default function MinMax() {
  return (
    <>
      <Calendar value="2026-09-15" month="2026-09" min="2026-09-05" max="2026-09-25" aria-label="Pick a date" />
    </>
  );
}
