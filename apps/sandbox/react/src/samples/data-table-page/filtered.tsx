import { DataTablePage } from '@aranghat/widgets-react';
import { Badge, Button, Checkbox, Table } from '@aranghat/base-react';

export default function Filtered() {
  return (
    <>
      <DataTablePage filterPlaceholder="Filter tasks…" total="100" pageCount="10" pageSize="10" filter="pixel" selected="2" page="3">
        <Button slot="actions" variant="outline" size="sm">Export</Button>
        <Button slot="filters" variant="outline" size="sm">Status</Button>
        <Button slot="filters" variant="outline" size="sm">Priority</Button>
        <Button slot="view" variant="outline" size="sm">View</Button>
        <Table>
          <table>
            <thead>
              <tr>
                <th><Checkbox aria-label="Select all" /><span className="sr-only">Select</span></th>
                <th>Task</th>
                <th>Title</th>
                <th>Status</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><Checkbox aria-label="Select row" /></td><td>TASK-8782</td><td><Badge variant="outline">Documentation</Badge> You can't compress the program without quantifying the open-source SSD pixel!</td><td>In Progress</td><td>Medium</td></tr>
              <tr><td><Checkbox aria-label="Select row" /></td><td>TASK-7878</td><td><Badge variant="outline">Documentation</Badge> Try to calculate the EXE feed, maybe it will index the multi-byte pixel!</td><td>Backlog</td><td>Medium</td></tr>
              <tr><td><Checkbox aria-label="Select row" /></td><td>TASK-5562</td><td><Badge variant="outline">Feature</Badge> The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!</td><td>Backlog</td><td>Medium</td></tr>
            </tbody>
          </table>
        </Table>
      </DataTablePage>
    </>
  );
}
