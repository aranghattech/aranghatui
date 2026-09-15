import { Component } from '@angular/core';
import { ArtCommand, ArtCommandGroup, ArtCommandItem } from '@aranghat/components-angular';
import { ArtIcon, ArtKbd, ArtKbdGroup, ArtSeparator } from '@aranghat/base-angular';

@Component({
  selector: 'sample-command-empty',
  imports: [ArtCommand, ArtCommandGroup, ArtCommandItem, ArtIcon, ArtKbd, ArtKbdGroup, ArtSeparator],
  template: `
    <art-command query="zzz" style="border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-lg)">
      <art-command-group label="Suggestions">
        <art-command-item value="calendar"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg></art-icon>Calendar</art-command-item>
        <art-command-item value="emoji"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg></art-icon>Search Emoji</art-command-item>
        <art-command-item value="calculator" disabled>Calculator</art-command-item>
      </art-command-group>
      <art-separator></art-separator>
      <art-command-group label="Settings">
        <art-command-item value="profile"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></art-icon>Profile<art-kbd-group slot="shortcut"><art-kbd>⌘</art-kbd><art-kbd>P</art-kbd></art-kbd-group></art-command-item>
        <art-command-item value="settings"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg></art-icon>Settings<art-kbd-group slot="shortcut"><art-kbd>⌘</art-kbd><art-kbd>S</art-kbd></art-kbd-group></art-command-item>
      </art-command-group>
      <span slot="empty">Nothing matches that.</span>
    </art-command>
  `,
})
export class CommandEmpty {}
