import * as React from 'react';
import { Form } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import { ValuesData } from '../../Models';

const options = [
  { key: 'usd', text: 'USD', value: 'USD' },
  { key: 'gbp', text: 'GBP', value: 'GBP' },
  { key: 'eur', text: 'EUR', value: 'EUR' },
]

interface MyProps {
  storedValues: ValuesData,
  submit(data: ValuesData): void
};

interface MyState {
  fromCurrency: string;
  fromAmount: number;
  toCurrency: string;
  toAmount: number;
  propsUpdated: boolean
};

export class SelectedValuesForm extends React.Component<MyProps, MyState> {
  public static getDerivedStateFromProps(props: any, state: any) {
    if(!state.propsUpdated && props.storedValues.fromCurrency) {
      return { ...props.storedValues, propsUpdated: true }; 
    }

    return null;
  }
 
  constructor(props: any) {
    super(props);

    this.state = {
      fromCurrency: '',
      fromAmount: 0,
      toCurrency: '',
      toAmount: 0,
      propsUpdated: false
    };
  }
  //  updating state by input name
  public handleChange = (e: any, { value, name }: any) => {
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  // sending stored values to the server.
  public submit = () => {
    const { fromCurrency, fromAmount, toCurrency, toAmount } = this.state;
    
    const data: ValuesData = {
      fromCurrency,
      fromAmount,
      toCurrency,
      toAmount
    }
    
    this.props.submit(data);

    toast('Stored Values Updated.!', { type: 'success'});
  }

  public render() {
    const { fromCurrency, fromAmount, toCurrency, toAmount } = this.state;
    
    return (
      <div>
        <Form>
          <Form.Group widths='equal'>
            <Form.Select
              name='fromCurrency'
              fluid={true} 
              label='From Currency' 
              options={options} 
              placeholder='From Currency'
              value={fromCurrency}
              onChange={this.handleChange}
            />
            <Form.Input
              name='fromAmount'
              fluid={true} 
              label='From Amount' 
              placeholder='From Amount'
              value={fromAmount}
              onChange={this.handleChange}
            />
            <Form.Select
              name='toCurrency'
              fluid={true} 
              label='To Currency' 
              options={options} 
              placeholder='To Currency'
              value={toCurrency}
              onChange={this.handleChange}
            />
            <Form.Input 
              name='toAmount'
              fluid={true} 
              label='To Amount' 
              placeholder='To Amount'
              value={toAmount}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button onClick={this.submit}>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}
