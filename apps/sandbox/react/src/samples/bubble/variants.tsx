import { Bubble } from '@aranghat/components-react';

export default function Variants() {
  return (
    <>
      <Bubble variant="default">Default bubble</Bubble>
      <Bubble variant="secondary">Secondary bubble</Bubble>
      <Bubble variant="muted">Muted bubble</Bubble>
      <Bubble variant="tinted">Tinted bubble</Bubble>
      <Bubble variant="outline">Outline bubble</Bubble>
      <Bubble variant="ghost">Ghost bubble</Bubble>
      <Bubble variant="destructive">Destructive bubble</Bubble>
    </>
  );
}
