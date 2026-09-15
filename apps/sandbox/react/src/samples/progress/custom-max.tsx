import { Progress } from '@aranghat/base-react';

export default function CustomMax() {
  return (
    <>
      <Progress value="3" max="8" aria-label="Steps" />
    </>
  );
}
