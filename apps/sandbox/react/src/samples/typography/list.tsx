import { Typography } from '@aranghat/base-react';

export default function List() {
  return (
    <>
      <Typography>
        <ol>
          <li>Install the package</li>
          <li>Import the token sheet</li>
          <li>Use the components</li>
        </ol>
        <hr />
        <ul>
          <li>HTML</li>
          <li>React, Vue and Angular</li>
        </ul>
      </Typography>
    </>
  );
}
