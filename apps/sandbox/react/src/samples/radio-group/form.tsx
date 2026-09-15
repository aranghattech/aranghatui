import { useState, type FormEvent } from 'react';
import { Button, Radio, RadioGroup } from '@aranghat/base-react';

export default function InAForm() {
  const [notify, setNotify] = useState('');
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted', Object.fromEntries(new FormData(e.currentTarget)), notify);
  };
  return (
    <form onSubmit={onSubmit}>
      <RadioGroup name="notify" required aria-label="Notify me about" value={notify} onChange={(e) => setNotify(e.detail.value)}>
        <Radio value="all">All new messages</Radio>
        <Radio value="mentions">Direct messages and mentions</Radio>
        <Radio value="none">Nothing</Radio>
      </RadioGroup>
      <Button type="submit">Submit</Button>
    </form>
  );
}
