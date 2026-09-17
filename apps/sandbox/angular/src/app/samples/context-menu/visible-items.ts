import { Component } from '@angular/core';
import { ArtContextMenu, ArtMenuItem, ArtMenuLabel, ArtMenuRadioGroup, ArtMenuSeparator, ArtMenuSub } from '@aranghat/navigation-angular';

@Component({
  selector: 'sample-context-menu-visible-items',
  imports: [ArtContextMenu, ArtMenuItem, ArtMenuLabel, ArtMenuRadioGroup, ArtMenuSeparator, ArtMenuSub],
  template: `
    <art-context-menu open visible-items="5">
      <div style="display: flex; align-items: center; justify-content: center; height: calc(var(--art-space-20) * 2); width: var(--art-container-xs); border: var(--art-border-width) dashed var(--art-color-border-default); border-radius: var(--art-radius-md); font-size: var(--art-font-size-sm); color: var(--art-color-fg-muted)">Right click here</div>
      <art-menu-item slot="menu" value="back">Back<span slot="shortcut">⌘[</span></art-menu-item>
      <art-menu-item slot="menu" value="forward" disabled>Forward<span slot="shortcut">⌘]</span></art-menu-item>
      <art-menu-item slot="menu" value="reload">Reload<span slot="shortcut">⌘R</span></art-menu-item>
      <art-menu-sub slot="menu">
        <art-menu-item slot="trigger">More tools</art-menu-item>
        <art-menu-item value="save">Save page…<span slot="shortcut">⇧⌘S</span></art-menu-item>
        <art-menu-item value="shortcut">Create shortcut…</art-menu-item>
        <art-menu-separator></art-menu-separator>
        <art-menu-item value="devtools">Developer tools</art-menu-item>
      </art-menu-sub>
      <art-menu-separator slot="menu"></art-menu-separator>
      <art-menu-item slot="menu" type="checkbox" value="bookmarks" checked>Show bookmarks</art-menu-item>
      <art-menu-item slot="menu" type="checkbox" value="urls">Show full URLs</art-menu-item>
      <art-menu-separator slot="menu"></art-menu-separator>
      <art-menu-radio-group slot="menu" value="pedro">
        <art-menu-label inset>People</art-menu-label>
        <art-menu-item type="radio" value="pedro">Pedro Duarte</art-menu-item>
        <art-menu-item type="radio" value="colm">Colm Tuite</art-menu-item>
      </art-menu-radio-group>
    </art-context-menu>
  `,
})
export class ContextMenuVisibleItems {}
