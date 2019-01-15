import { createReducer, createActions } from 'reduxsauce';
import { CurrencyState } from '../../Models';

// definition of the actions.
const { Types, Creators } = createActions({
  getCurrencyRates: null,
  getCurrencyRatesSuccess: ['data'],
  getCurrencyRatesError: ['error']
});

export { Types, Creators };

// definition of the default state.
const defaultState: CurrencyState = {
  currencyRates: {
    "USD": {
      "GBP": 0.0,
      "EUR": 0.0
    },
    "GBP": {
      "USD": 0.0,
      "EUR": 0.0
    },
    "EUR": {
      "USD": 0.0,
      "GBP": 0.0
    }
  },
  isLoading: false
}
// definition of the reducers.
export default createReducer(defaultState, {
  [Types.GET_CURRENCY_RATES]: (state: any) => {
    return {
      ...state,
      isLoading: true
    }
  },
  [Types.GET_CURRENCY_RATES_SUCCESS]: ( state: any, { data: currencyRates }: any) => {
    return {
      ...state,
      currencyRates,
      isLoading: false
    }
  },
  [Types.GET_CURRENCY_RATES_ERROR]: (state: any, error: any) => {
    return {
      ...state,
      isLoading: false,
      error
    }
  }
})