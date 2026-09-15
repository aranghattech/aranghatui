import { Calendar } from '@aranghat/components-react';

export default function Dropdown() {
  return (
    <>
      <Calendar captionLayout="dropdown" value="1990-06-15" month="1990-06" min="1900-01-01" max="2026-12-31" aria-label="Date of birth" />
    </>
  );
}
