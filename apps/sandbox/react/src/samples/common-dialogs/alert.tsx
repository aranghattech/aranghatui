import { useState } from 'react';
import { Button } from '@aranghat/base-react';
import { alert } from '@aranghat/modals';

export default function Alert() {
  const [result, setResult] = useState('');
  // alert() mounts the dialog itself and resolves when it closes — no element to render
  const ask = async () => {
    await alert({ title: 'Export finished', description: 'Your report is ready to download.' });
    setResult('Acknowledged.');
  };
  return (
    <>
      <Button variant="outline" onClick={ask}>Show alert</Button>
      <p>{result}</p>
    </>
  );
}
