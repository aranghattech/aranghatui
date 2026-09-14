import type { FormEvent } from 'react';
import { Button } from '@aranghat/base-react/button';

export default function InAForm() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted', Object.fromEntries(new FormData(e.currentTarget)));
  };
  return (
    <form onSubmit={onSubmit}>
      <input name="email" type="email" required placeholder="you@example.com" />
      <Button type="submit">Subscribe</Button>
      <Button type="reset" variant="ghost">Reset</Button>
    </form>
  );
}
