import { Icon, Marker } from '@aranghat/base-react';

export default function Border() {
  return (
    <>
      <Marker variant="border">
        <Icon slot="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></Icon>
        Sent · 2:14 PM
      </Marker>
    </>
  );
}
