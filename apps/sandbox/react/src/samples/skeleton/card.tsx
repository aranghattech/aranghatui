import { Skeleton } from '@aranghat/base-react';

export default function Card() {
  return (
    <>
      <Skeleton style={{ height: '8rem', width: '100%' }} />
      <Skeleton style={{ height: '1rem', width: '60%' }} />
      <Skeleton style={{ height: '1rem', width: '40%' }} />
    </>
  );
}
