import { Button, Input } from '@aranghat/base-react';

export default function WithButton() {
  return (
    <>
      <Input type="email" placeholder="Email" aria-label="Email" />
      <Button type="submit">Subscribe</Button>
    </>
  );
}
