import { InputOtp } from '@aranghat/base-react';

export default function Disabled() {
  return (
    <>
      <InputOtp value="123456" disabled aria-label="One-time code" />
    </>
  );
}
