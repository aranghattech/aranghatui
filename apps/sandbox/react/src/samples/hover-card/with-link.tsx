import { HoverCard } from '@aranghat/components-react';

export default function WithLink() {
  return (
    <>
      <HoverCard>
        <a slot="trigger" href="#">Read the docs</a>
        <p>A short preview of the page behind the link, so people can decide whether to follow it.</p>
      </HoverCard>
    </>
  );
}
