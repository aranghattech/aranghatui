import { Skeleton } from '@aranghat/base-react';

export default function Circle() {
  return (
    <>
      <Skeleton style={{ height: '3rem', width: '3rem', borderRadius: '9999px' }} />
    </>
  );
}
