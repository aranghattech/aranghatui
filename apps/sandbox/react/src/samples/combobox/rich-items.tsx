import { useState } from 'react';
import { Avatar, Combobox, ComboboxItem } from '@aranghat/components-react';

interface Person { id: string; name: string; email: string }
const people: Person[] = [
  { id: 'ada', name: 'Ada Lovelace', email: 'ada@example.com' },
  { id: 'grace', name: 'Grace Hopper', email: 'grace@example.com' },
];
const initials = (p: Person) => p.name.split(' ').map((n) => n[0]).join('');

export default function RichItems() {
  const [assignee, setAssignee] = useState<Person>();
  return (
    <>
      {/* `item` carries the data object; `change` hands it back as `detail.item`; `keywords` lets the email match too */}
      <Combobox placeholder="Search people…" aria-label="Assignee" onChange={(e) => setAssignee(e.detail.item as Person | undefined)}>
        {people.map((p) => (
          <ComboboxItem key={p.id} value={p.id} label={p.name} keywords={p.email} item={p}>
            <Avatar size="sm" alt="">{initials(p)}</Avatar>
            <span>{p.name}</span>
            <span className="muted">{p.email}</span>
          </ComboboxItem>
        ))}
      </Combobox>
      <p>{assignee ? `Assigned to ${assignee.email}` : 'Nobody assigned'}</p>
    </>
  );
}
