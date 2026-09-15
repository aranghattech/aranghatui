import { Skeleton } from '@aranghat/base-react';

export default function Basic() {
  return (
    <>
      <Skeleton style={{ height: '1rem', width: '15rem' }} />
      <Skeleton style={{ height: '1rem', width: '12rem' }} />
    </>
  );
}
