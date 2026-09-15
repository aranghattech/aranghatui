import { InputOtp } from '@aranghat/base-react';

export default function Alphanumeric() {
  return (
    <>
      <InputOtp pattern="alphanumeric" groupSize="4" length="8" aria-label="Licence key" />
    </>
  );
}
