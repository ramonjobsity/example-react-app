import {CurrencyData, ValuesData} from "./Models";
import {Action} from "redux";

export const FETCH_EXCHANGE_RATES = "FETCH_EXCHANGE_RATES";
export const STORE_EXCHANGE_RATES = "STORE_EXCHANGE_RATES";

export const FETCH_VALUES = "FETCH_VALUES";
export const SAVE_VALUES_TO_SERVER = "SAVE_VALUES_TO_SERVER";
export const STORE_VALUES = "STORE_VALUES";

export interface AppStoreState {
  currency: CurrencyData;
  values: ValuesData;
}

export const initialState: AppStoreState = {
  currency: {
    "name": "CURRENCY",
    "exchangeRates": {
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
    }
  },
  values: {
    fromCurrency: "USD",
    fromAmount: 0.0,
    toCurrency: "GBP",
    toAmount: 0.0
  }
};

export function reducer(state: AppStoreState, action: Action) {
  return state;
}
