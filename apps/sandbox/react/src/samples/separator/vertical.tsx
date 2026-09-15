import { Button, Separator } from '@aranghat/base-react';

export default function Vertical() {
  return (
    <>
      <Button variant="ghost">Blog</Button>
      <Separator orientation="vertical" />
      <Button variant="ghost">Docs</Button>
      <Separator orientation="vertical" />
      <Button variant="ghost">Source</Button>
    </>
  );
}
