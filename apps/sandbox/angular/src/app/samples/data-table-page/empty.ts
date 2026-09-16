import { Component } from '@angular/core';
import { ArtDataTablePage } from '@aranghat/widgets-angular';
import { ArtButton, ArtCheckbox, ArtTable } from '@aranghat/base-angular';

@Component({
  selector: 'sample-data-table-page-empty',
  imports: [ArtButton, ArtCheckbox, ArtDataTablePage, ArtTable],
  template: `
    <art-data-table-page filter-placeholder="Filter tasks…" total="0" page-count="1" page-size="10" filter="zzz">
      <art-button slot="actions" variant="outline" size="sm">Export</art-button>
      <art-button slot="filters" variant="outline" size="sm">Status</art-button>
      <art-button slot="filters" variant="outline" size="sm">Priority</art-button>
      <art-button slot="view" variant="outline" size="sm">View</art-button>
      <art-table>
        <table>
          <thead>
            <tr>
              <th><art-checkbox aria-label="Select all"></art-checkbox></th>
              <th>Task</th>
              <th>Title</th>
              <th>Status</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr><td colspan="5" style="text-align: center; padding-block: var(--art-space-6)">No results.</td></tr>
          </tbody>
        </table>
      </art-table>
    </art-data-table-page>
  `,
})
export class DataTablePageEmpty {}
