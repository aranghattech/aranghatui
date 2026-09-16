import { Component } from '@angular/core';
import { ArtDataTablePage } from '@aranghat/widgets-angular';
import { ArtBadge, ArtButton, ArtCheckbox, ArtTable } from '@aranghat/base-angular';

@Component({
  selector: 'sample-data-table-page-filtered',
  imports: [ArtBadge, ArtButton, ArtCheckbox, ArtDataTablePage, ArtTable],
  template: `
    <art-data-table-page filter-placeholder="Filter tasks…" total="100" page-count="10" page-size="10" filter="pixel" selected="2" page="3">
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
            <tr><td><art-checkbox aria-label="Select row"></art-checkbox></td><td>TASK-8782</td><td><art-badge variant="outline">Documentation</art-badge> You can't compress the program without quantifying the open-source SSD pixel!</td><td>In Progress</td><td>Medium</td></tr>
            <tr><td><art-checkbox aria-label="Select row"></art-checkbox></td><td>TASK-7878</td><td><art-badge variant="outline">Documentation</art-badge> Try to calculate the EXE feed, maybe it will index the multi-byte pixel!</td><td>Backlog</td><td>Medium</td></tr>
            <tr><td><art-checkbox aria-label="Select row"></art-checkbox></td><td>TASK-5562</td><td><art-badge variant="outline">Feature</art-badge> The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!</td><td>Backlog</td><td>Medium</td></tr>
          </tbody>
        </table>
      </art-table>
    </art-data-table-page>
  `,
})
export class DataTablePageFiltered {}
