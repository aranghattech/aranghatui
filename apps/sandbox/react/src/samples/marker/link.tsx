import { Icon, Marker } from '@aranghat/base-react';

export default function Link() {
  return (
    <>
      <Marker href="#">
        <Icon slot="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></Icon>
        View the full report
      </Marker>
    </>
  );
}
