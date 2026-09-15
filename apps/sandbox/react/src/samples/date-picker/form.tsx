import { useState, type FormEvent } from 'react';
import { Button, Label } from '@aranghat/base-react';
import { DatePicker } from '@aranghat/components-react';

export default function InAForm() {
  const [dob, setDob] = useState('');
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted', Object.fromEntries(new FormData(e.currentTarget)));
  };
  return (
    <form onSubmit={onSubmit}>
      <Label htmlFor="dob">Date of birth</Label>
      <DatePicker id="dob" name="dob" captionLayout="dropdown" min="1900-01-01" max="2026-12-31" required value={dob} onChange={(e) => setDob(e.detail.value)} />
      <Button type="submit">Submit</Button>
    </form>
  );
}
