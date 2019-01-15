import * as React from 'react';
import { Table } from 'semantic-ui-react';
import { map, keys } from 'lodash';

interface MyProps {
  currencyRates: {
    [fromCurrency: string]: {
      [toCurrency: string]: number;
    }
  }
};

export class ExchangeRates extends React.Component<MyProps> {
  // rendering currency table headers
  public renderCurrencyHeaders(currencies: any) {
    return currencies.map((currency: string, index: string) => {
      return <Table.HeaderCell key={index}>{currency}</Table.HeaderCell>
    }) 
  }

  // rendering currency table body
  public renderCurrencyBody(currencies: any) {
    const { currencyRates } = this.props;

    return map(currencyRates, (currencyRate: any, key: string) => {
      return (
        <Table.Row key={key}>
          <Table.Cell key={key}>{key}</Table.Cell>
          {
            currencies.map((value: string, index: string) => {
              return <Table.Cell key={index}>{currencyRates[key][value] || '-'}</Table.Cell>;
            })
          }
        </Table.Row>
      )
    })
  }

  public renderCurrencyTable() {
    const { currencyRates } = this.props;
    
    // getting current currencies.
    const currencies = keys(currencyRates);

    return (
      <Table definition={true} textAlign='center'>
        <Table.Header>
          <Table.Row>
              <Table.HeaderCell />
                { this.renderCurrencyHeaders(currencies)  }
             </Table.Row>
           </Table.Header>
      
           <Table.Body>
              { this.renderCurrencyBody(currencies) }
           </Table.Body>
       </Table>  
    )
  }
  
  public render() {
    const { currencyRates } = this.props;

    return (
      <div>
        { currencyRates ? this.renderCurrencyTable() : null }
     </div>
    );
  }
}
