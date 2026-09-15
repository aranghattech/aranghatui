import { Label, Progress } from '@aranghat/base-react';

export default function WithLabel() {
  return (
    <>
      <Label id="upload-label">Uploading photo…</Label>
      <Progress value="66" aria-labelledby="upload-label" />
    </>
  );
}
