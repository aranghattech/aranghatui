import { HoverCard } from '@aranghat/components-react';
import { Button } from '@aranghat/base-react';

export default function Open() {
  return (
    <>
      <HoverCard open>
        <Button slot="trigger" variant="link">@nextjs</Button>
        <h4>@nextjs</h4>
        <p>The React Framework – created and maintained by @vercel.</p>
        <p className="muted">Joined December 2021</p>
      </HoverCard>
    </>
  );
}
