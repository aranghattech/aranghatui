import { useState } from 'react';
import { Button } from '@aranghat/base-react';
import { Bubble, Message, MessageScroller, MessageScrollerItem } from '@aranghat/components-react';

const initial = [21, 22, 23, 24];

export default function LoadEarlier() {
  const [ids, setIds] = useState(initial);
  // rows inserted before the first one keep the visible row exactly where it is
  const earlier = () => setIds((list) => [...Array.from({ length: 5 }, (_, i) => list[0]! - 5 + i), ...list]);
  return (
    <>
      <Button variant="outline" onClick={earlier}>Load earlier messages</Button>
      <MessageScroller defaultScrollPosition="start" style={{ height: 'calc(var(--art-space-20) * 4)' }}>
        {ids.map((n) => (
          <MessageScrollerItem key={n} messageId={`m${n}`}>
            <Message align={n % 2 ? 'start' : 'end'}>
              <Bubble variant={n % 2 ? 'muted' : 'default'}>Message {n}</Bubble>
            </Message>
          </MessageScrollerItem>
        ))}
      </MessageScroller>
    </>
  );
}
