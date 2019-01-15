import { takeLatest, put, call } from 'redux-saga/effects';
import { Types, Creators } from '../ducks/currency';

export function* getCurrencyRates(api: any) {
  try {
    const { ok, data } = yield call(api.getCurrencyRates);

    if(!ok) {
      throw new Error('Server Error');
    }

    yield put(Creators.getCurrencyRatesSuccess(data));
  } catch(e) {
    yield call( Creators.getCurrencyRatesError() )
  }
}

export function* watchCurrency(api: any) {
  yield takeLatest(Types.GET_CURRENCY_RATES,getCurrencyRates, api);
}