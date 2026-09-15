import { InputOtp } from '@aranghat/base-react';

export default function WithValue() {
  return (
    <>
      <InputOtp value="1234" aria-label="One-time code" />
    </>
  );
}
