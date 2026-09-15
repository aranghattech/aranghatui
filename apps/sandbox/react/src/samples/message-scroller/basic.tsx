import { Avatar, Bubble, Message, MessageScroller, MessageScrollerItem } from '@aranghat/components-react';

export default function Basic() {
  return (
    <>
      <MessageScroller aria-label="Chat" style={{ height: 'var(--art-space-24)', height: 'calc(var(--art-space-20) * 4)' }}>
        <MessageScrollerItem messageId="m1" scroll-anchor>
          <Message align="end">
            <Avatar slot="avatar" size="sm" alt="">ME</Avatar>
            <Bubble>Question 1: could you expand on the previous point?</Bubble>
          </Message>
        </MessageScrollerItem>
        <MessageScrollerItem messageId="m2">
          <Message>
            <Avatar slot="avatar" size="sm" alt="">AI</Avatar>
            <Bubble variant="muted">Answer 2: certainly. The main idea is that the reader's position is sacred, so the transcript only moves when they are already following the live edge.</Bubble>
          </Message>
        </MessageScrollerItem>
        <MessageScrollerItem messageId="m3" scroll-anchor>
          <Message align="end">
            <Avatar slot="avatar" size="sm" alt="">ME</Avatar>
            <Bubble>Question 3: could you expand on the previous point?</Bubble>
          </Message>
        </MessageScrollerItem>
        <MessageScrollerItem messageId="m4">
          <Message>
            <Avatar slot="avatar" size="sm" alt="">AI</Avatar>
            <Bubble variant="muted">Answer 4: certainly. The main idea is that the reader's position is sacred, so the transcript only moves when they are already following the live edge.</Bubble>
          </Message>
        </MessageScrollerItem>
        <MessageScrollerItem messageId="m5" scroll-anchor>
          <Message align="end">
            <Avatar slot="avatar" size="sm" alt="">ME</Avatar>
            <Bubble>Question 5: could you expand on the previous point?</Bubble>
          </Message>
        </MessageScrollerItem>
        <MessageScrollerItem messageId="m6">
          <Message>
            <Avatar slot="avatar" size="sm" alt="">AI</Avatar>
            <Bubble variant="muted">Answer 6: certainly. The main idea is that the reader's position is sacred, so the transcript only moves when they are already following the live edge.</Bubble>
          </Message>
        </MessageScrollerItem>
        <MessageScrollerItem messageId="m7" scroll-anchor>
          <Message align="end">
            <Avatar slot="avatar" size="sm" alt="">ME</Avatar>
            <Bubble>Question 7: could you expand on the previous point?</Bubble>
          </Message>
        </MessageScrollerItem>
        <MessageScrollerItem messageId="m8">
          <Message>
            <Avatar slot="avatar" size="sm" alt="">AI</Avatar>
            <Bubble variant="muted">Answer 8: certainly. The main idea is that the reader's position is sacred, so the transcript only moves when they are already following the live edge.</Bubble>
          </Message>
        </MessageScrollerItem>
      </MessageScroller>
    </>
  );
}
