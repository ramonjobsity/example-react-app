import * as React from 'react';

export class ExchangeRates extends React.Component {
  public render() {
    return (
      <div>
        <table>
          <thead>
          <tr>
            <th>&nbsp;</th>
            <th>USD</th>
            <th>GBP</th>
            <th>EUR</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>USD</td>
            <td />
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>GBP</td>
            <td>0</td>
            <td />
            <td>0</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>0</td>
            <td>0</td>
            <td />
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
