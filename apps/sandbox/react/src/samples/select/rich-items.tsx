import { useState } from 'react';
import { Avatar, Select, SelectItem } from '@aranghat/components-react';

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
      {/* `item` carries the data object; `change` hands it back as `detail.item` */}
      <Select placeholder="Assign to…" aria-label="Assignee" onChange={(e) => setAssignee(e.detail.item as Person)}>
        {people.map((p) => (
          <SelectItem key={p.id} value={p.id} label={p.name} item={p}>
            <Avatar size="sm" alt="">{initials(p)}</Avatar>
            <span>{p.name}</span>
            <span className="muted">{p.email}</span>
          </SelectItem>
        ))}
      </Select>
      <p>{assignee ? `Assigned to ${assignee.email}` : 'Nobody assigned'}</p>
    </>
  );
}
