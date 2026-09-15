import { Progress } from '@aranghat/base-react';

export default function Values() {
  return (
    <>
      <Progress value="0" aria-label="Empty" />
      <Progress value="50" aria-label="Half" />
      <Progress value="100" aria-label="Complete" />
    </>
  );
}
