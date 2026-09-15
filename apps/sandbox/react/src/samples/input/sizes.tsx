import { Input } from '@aranghat/base-react';

export default function Sizes() {
  return (
    <>
      <Input size="sm" placeholder="Small" aria-label="Small" />
      <Input placeholder="Medium" aria-label="Medium" />
      <Input size="lg" placeholder="Large" aria-label="Large" />
    </>
  );
}
