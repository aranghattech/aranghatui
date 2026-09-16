import { DataTablePage } from '@aranghat/widgets-react';
import { Button, Checkbox, Table } from '@aranghat/base-react';

export default function Empty() {
  return (
    <>
      <DataTablePage filterPlaceholder="Filter tasks…" total="0" pageCount="1" pageSize="10" filter="zzz">
        <Button slot="actions" variant="outline" size="sm">Export</Button>
        <Button slot="filters" variant="outline" size="sm">Status</Button>
        <Button slot="filters" variant="outline" size="sm">Priority</Button>
        <Button slot="view" variant="outline" size="sm">View</Button>
        <Table>
          <table>
            <thead>
              <tr>
                <th><Checkbox aria-label="Select all" /></th>
                <th>Task</th>
                <th>Title</th>
                <th>Status</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <tr><td colSpan="5" style={{ textAlign: 'center', paddingBlock: 'var(--art-space-6)' }}>No results.</td></tr>
            </tbody>
          </table>
        </Table>
      </DataTablePage>
    </>
  );
}
