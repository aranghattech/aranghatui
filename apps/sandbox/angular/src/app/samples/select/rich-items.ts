import { Component } from '@angular/core';
import { ArtAvatar, ArtSelect, ArtSelectItem } from '@aranghat/components-angular';

interface Person { id: string; name: string; email: string }

@Component({
  selector: 'sample-select-rich-items',
  imports: [ArtAvatar, ArtSelect, ArtSelectItem],
  template: `
    <art-select placeholder="Assign to…" aria-label="Assignee" (change)="onChange($event)">
      @for (p of people; track p.id) {
        <art-select-item [value]="p.id" [label]="p.name" [item]="p">
          <art-avatar size="sm" alt="">{{ initials(p) }}</art-avatar>
          <span>{{ p.name }}</span>
          <span class="muted">{{ p.email }}</span>
        </art-select-item>
      }
    </art-select>
    <p>{{ assignee ? 'Assigned to ' + assignee.email : 'Nobody assigned' }}</p>
  `,
})
export class SelectRichItems {
  people: Person[] = [
    { id: 'ada', name: 'Ada Lovelace', email: 'ada@example.com' },
    { id: 'grace', name: 'Grace Hopper', email: 'grace@example.com' },
  ];
  assignee?: Person;
  initials(p: Person) { return p.name.split(' ').map((n) => n[0]).join(''); }
  // `item` carries the data object; `change` hands it back as `detail.item`
  onChange(e: CustomEvent<{ item?: unknown }>) { this.assignee = e.detail.item as Person; }
}
