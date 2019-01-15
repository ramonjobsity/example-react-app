export interface CurrencyData {
  name: string;
  exchangeRates: {
    [fromCurrency: string]: {
      [toCurrency: string]: number;
    }
  }
}

export interface ValuesData {
  fromCurrency: string;
  fromAmount: number;
  toCurrency: string;
  toAmount: number;
}

export interface CurrencyRates {
  currencyRates: {
    [fromCurrency: string]: {
      [toCurrency: string]: number;
    }
  }
}

export interface CurrencyState extends CurrencyRates {
  isLoading: boolean
}

export interface StoredValuesState {
  storedValues: ValuesData,
  isLoading: boolean
}
