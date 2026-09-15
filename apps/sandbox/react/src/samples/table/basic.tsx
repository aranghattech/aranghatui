import { Table } from '@aranghat/base-react';

export default function Basic() {
  return (
    <>
      <Table>
      <table>
        <caption>A list of your recent invoices.</caption>
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
          <tr>
            <td>INV004</td>
            <td>Paid</td>
            <td>Credit card</td>
            <td data-align="end">$450.00</td>
          </tr>
        </tbody>
      </table>
      </Table>
    </>
  );
}
