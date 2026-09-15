import { Marker, Spinner } from '@aranghat/base-react';

export default function Status() {
  return (
    <>
      <Marker role="status">
        <Spinner slot="icon" size="sm" label="Thinking" />
        Thinking…
      </Marker>
    </>
  );
}
