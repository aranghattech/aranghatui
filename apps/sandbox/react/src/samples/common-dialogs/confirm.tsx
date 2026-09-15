import { useState } from 'react';
import { Button } from '@aranghat/base-react';
import { confirm } from '@aranghat/modals';

export default function Confirm() {
  const [result, setResult] = useState('');
  // confirm() mounts the dialog itself and resolves when it closes — no element to render
  const ask = async () => {
    setResult((await confirm({ title: 'Delete account?', description: 'This permanently removes your account and all of its data.', actionLabel: 'Delete', destructive: true })) ? 'Deleted.' : 'Kept.');
  };
  return (
    <>
      <Button variant="outline" onClick={ask}>Delete account</Button>
      <p>{result}</p>
    </>
  );
}
