import { Alert } from '@aranghat/components-react';
import { Icon } from '@aranghat/base-react';

export default function Basic() {
  return (
    <>
      <Alert>
        <Icon slot="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg></Icon>
        <h5 slot="title">Success! Your changes have been saved</h5>
        <p slot="description">This is an alert with icon, title and description.</p>
      </Alert>
    </>
  );
}
