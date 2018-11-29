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
