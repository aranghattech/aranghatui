import { Calendar } from '@aranghat/components-react';

export default function Multiple() {
  return (
    <>
      <Calendar mode="multiple" value="2026-09-03,2026-09-10,2026-09-17" month="2026-09" aria-label="Pick dates" />
    </>
  );
}
