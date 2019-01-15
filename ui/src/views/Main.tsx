
declare module 'lodash';

import * as React from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { Container, Header, Divider } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import { ExchangeRates } from '../views/components/ExchangeRates';
import { SelectedValuesForm } from '../views/components/SelectedValuesForm';
import { Creators as CurrencyActions } from '../modules/ducks/currency';
import { Creators as StoredValuesActions } from '../modules/ducks/storedValues';
import { CurrencyData, ValuesData } from '../Models';
import 'react-toastify/dist/ReactToastify.min.css';

interface MyProps {
  getCurrencyRates: () => void,
  getStoredValues: () => void,
  postStoredValues: () => void,
  currency: CurrencyData,
  storedValues: ValuesData
};

interface MyState {
  currency: CurrencyData
};

class Main extends React.Component<MyProps, MyState> {
  // getting currency rates and stored values from the API
  public componentDidMount() {
    this.props.getCurrencyRates();
    this.props.getStoredValues();
  }

  public render() {
    // getting currency rates from the global state.
    const currencyRates = get(this.props, 'currency.currencyRates.exchangeRates', null);
    // getting stored values from the global state.
    const storedValues = get(this.props, 'storedValues.storedValues', null);

    return (
      <Container>
        <br/>
        <Header as='h2' textAlign='center'>Challenge Wintellect</Header>
        <ExchangeRates currencyRates={currencyRates}/>
        <Divider/>
        <SelectedValuesForm storedValues={storedValues} submit={this.props.postStoredValues}/>
        <ToastContainer />
      </Container>
    );
  }
}
// mapping state properties to props.
const mapStateToProps = ({currency, storedValues}: any) => ({
  currency,
  storedValues
});

// attaching currency and stored values from the global state to main component props.
// attaching dispacher.
export default connect(mapStateToProps, {
  getCurrencyRates: CurrencyActions.getCurrencyRates,
  getStoredValues: StoredValuesActions.getStoredValues,
  postStoredValues: StoredValuesActions.postStoredValues
}) (Main)