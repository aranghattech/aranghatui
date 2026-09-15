import { Input } from '@aranghat/base-react';

export default function Disabled() {
  return (
    <>
      <Input placeholder="Email" aria-label="Email" disabled />
    </>
  );
}
