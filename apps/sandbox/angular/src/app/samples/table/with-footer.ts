import { Component } from '@angular/core';
import { ArtTable } from '@aranghat/base-angular';

@Component({
  selector: 'sample-table-with-footer',
  imports: [ArtTable],
  template: `
    <art-table>
    <table>
      <thead>
        <tr>
          <th>Invoice</th>
          <th>Status</th>
          <th>Method</th>
          <th data-align="end">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>INV001</td>
          <td>Paid</td>
          <td>Credit card</td>
          <td data-align="end">$250.00</td>
        </tr>
        <tr>
          <td>INV002</td>
          <td>Pending</td>
          <td>PayPal</td>
          <td data-align="end">$150.00</td>
        </tr>
        <tr>
          <td>INV003</td>
          <td>Unpaid</td>
          <td>Bank transfer</td>
          <td data-align="end">$350.00</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">Total</td>
          <td data-align="end">$750.00</td>
        </tr>
      </tfoot>
    </table>
    </art-table>
  `,
})
export class TableWithFooter {}
