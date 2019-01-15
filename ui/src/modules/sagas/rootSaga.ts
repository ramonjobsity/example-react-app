import { fork, all } from 'redux-saga/effects';

import createApi from '../../common/api';

import { watchCurrency } from '../sagas/currencySaga';
import { watchStoredvalues } from '../sagas/storedValuesSaga';

const api = createApi();

export default function* rootSaga() {
  yield all([
    fork(watchCurrency, api),
    fork(watchStoredvalues, api)
  ])
}