import { InputOtp } from '@aranghat/base-react';

export default function Invalid() {
  return (
    <>
      <InputOtp value="000000" invalid aria-label="One-time code" />
    </>
  );
}
