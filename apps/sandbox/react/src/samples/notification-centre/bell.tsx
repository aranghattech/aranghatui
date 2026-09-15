import { NotificationCentre, NotificationItem } from '@aranghat/widgets-react';
import { Button } from '@aranghat/base-react';

export default function Bell() {
  return (
    <>
      <NotificationCentre open>
        <NotificationItem value="n1" heading="Pedro mentioned you" description="in #design-system: “can you review the sidebar tokens?”" time="2m" unread href="#thread"><svg slot="media" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></svg></NotificationItem>
        <NotificationItem value="n2" heading="Deploy finished" description="artui-docs v0.9.4 is live on production." time="1h" unread><svg slot="media" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg></NotificationItem>
        <NotificationItem value="n3" heading="Sofia invited you to Acme" description="Accept to join the workspace." time="3h"><svg slot="media" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>
          <Button size="sm">Accept</Button>
          <Button size="sm" variant="outline">Decline</Button>
        </NotificationItem>
        <NotificationItem value="n4" heading="Weekly report ready" description="Your usage summary for last week." time="1d"><svg slot="media" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg></NotificationItem>
      </NotificationCentre>
    </>
  );
}
