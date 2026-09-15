import { useState } from 'react';
import { Button } from '@aranghat/base-react';
import { prompt } from '@aranghat/modals';

export default function Prompt() {
  const [result, setResult] = useState('');
  // prompt() mounts the dialog itself and resolves when it closes — no element to render
  const ask = async () => {
    const name = await prompt({ title: 'Rename project', description: 'Pick a short, memorable name.', label: 'Name', defaultValue: 'Design system', required: true });
    setResult(name === null ? 'Cancelled.' : `Renamed to ${name}.`);
  };
  return (
    <>
      <Button variant="outline" onClick={ask}>Rename</Button>
      <p>{result}</p>
    </>
  );
}
