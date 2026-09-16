import { Login } from '@aranghat/widgets-react';

export default function Logo() {
  return (
    <>
      <Login forgotHref="#forgot" signupHref="#signup">
        <a slot="logo" href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--art-space-2)', color: 'inherit', textDecoration: 'none' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 'var(--art-size-icon-lg)', height: 'var(--art-size-icon-lg)' }}><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/></svg>Acme Inc.</a>
      </Login>
    </>
  );
}
