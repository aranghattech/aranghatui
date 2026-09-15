import { useState } from 'react';
import { Button } from '@aranghat/base-react';
import { Bubble, Message, MessageScroller, MessageScrollerItem } from '@aranghat/components-react';

interface Turn { id: string; mine: boolean; text: string }
const reply = 'The reply streams in word by word while the scroller keeps the end in view as long as you are following it.';

export default function Streaming() {
  const [turns, setTurns] = useState<Turn[]>([]);
  const ask = () => {
    const n = turns.length / 2 + 1;
    setTurns((t) => [...t, { id: `q${n}`, mine: true, text: `Question ${n}: what happens next?` }, { id: `a${n}`, mine: false, text: '' }]);
    const words = reply.split(' ');
    let i = 0;
    const tick = setInterval(() => {
      setTurns((t) => t.map((x) => (x.id === `a${n}` ? { ...x, text: words.slice(0, i + 1).join(' ') } : x)));
      if (++i >= words.length) clearInterval(tick);
    }, 120);
  };
  return (
    <>
      <MessageScroller style={{ height: 'calc(var(--art-space-20) * 4)' }}>
        {turns.map((t) => (
          // the question starts a turn: anchored near the top with a peek of the previous row
          <MessageScrollerItem key={t.id} messageId={t.id} scrollAnchor={t.mine}>
            <Message align={t.mine ? 'end' : 'start'}>
              <Bubble variant={t.mine ? 'default' : 'muted'}>{t.text}</Bubble>
            </Message>
          </MessageScrollerItem>
        ))}
      </MessageScroller>
      <Button variant="outline" onClick={ask}>Ask a question</Button>
    </>
  );
}
