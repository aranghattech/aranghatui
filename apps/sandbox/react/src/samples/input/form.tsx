import { useState, type FormEvent } from 'react';
import { Button, Input, Label } from '@aranghat/base-react';

export default function InAForm() {
  const [username, setUsername] = useState('');
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted', Object.fromEntries(new FormData(e.currentTarget)));
  };
  return (
    <form onSubmit={onSubmit}>
      <Label htmlFor="username">Username</Label>
      <Input id="username" name="username" placeholder="shadcn" required minlength={2} value={username} onInput={(e) => setUsername(e.detail.value)} />
      <Button type="submit">Submit</Button>
      <Button type="reset" variant="ghost" onClick={() => setUsername('')}>Reset</Button>
    </form>
  );
}
