import { DatePicker } from '@aranghat/components-react';

export default function DateOfBirth() {
  return (
    <>
      <DatePicker captionLayout="dropdown" min="1900-01-01" max="2026-12-31" placeholder="Select date" aria-label="Date of birth" />
    </>
  );
}
