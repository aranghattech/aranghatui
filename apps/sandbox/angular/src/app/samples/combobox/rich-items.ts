import { Component } from '@angular/core';
import { ArtAvatar, ArtCombobox, ArtComboboxItem } from '@aranghat/components-angular';

interface Person { id: string; name: string; email: string }

@Component({
  selector: 'sample-combobox-rich-items',
  imports: [ArtAvatar, ArtCombobox, ArtComboboxItem],
  template: `
    <art-combobox placeholder="Search people…" aria-label="Assignee" (change)="onChange($event)">
      @for (p of people; track p.id) {
        <art-combobox-item [value]="p.id" [label]="p.name" [keywords]="p.email" [item]="p">
          <art-avatar size="sm" alt="">{{ initials(p) }}</art-avatar>
          <span>{{ p.name }}</span>
          <span class="muted">{{ p.email }}</span>
        </art-combobox-item>
      }
    </art-combobox>
    <p>{{ assignee ? 'Assigned to ' + assignee.email : 'Nobody assigned' }}</p>
  `,
})
export class ComboboxRichItems {
  people: Person[] = [
    { id: 'ada', name: 'Ada Lovelace', email: 'ada@example.com' },
    { id: 'grace', name: 'Grace Hopper', email: 'grace@example.com' },
  ];
  assignee?: Person;
  initials(p: Person) { return p.name.split(' ').map((n) => n[0]).join(''); }
  // `item` carries the data object; `change` hands it back as `detail.item`; `keywords` lets the email match too
  onChange(e: CustomEvent<{ item?: unknown }>) { this.assignee = e.detail.item as Person | undefined; }
}
