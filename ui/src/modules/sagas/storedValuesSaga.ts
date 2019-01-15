import { takeLatest, put, call } from 'redux-saga/effects';
import { Types, Creators } from '../ducks/storedValues';

export function* getStoredValues(api: any) {
  try {
    const { ok, data } = yield call(api.getStoredValues);

    if(!ok) {
      throw new Error('Server Error');
    }

    yield put(Creators.getStoredValuesSuccess(data));
  } catch(e) {
    yield call(Creators.getStoredValuesError())
  }
}

export function* postStoredValues(api: any, { data }: any) {
  try {
    const { ok } = yield call(api.postStoredValues, data);

    if(!ok) {
      throw new Error('Server Error');
    }

    yield put(Creators.postStoredValuesSuccess());
  } catch(e) {
    yield call(Creators.postStoredValuesError());
  }
}


export function* watchStoredvalues(api: any) {
  yield takeLatest(Types.GET_STORED_VALUES, getStoredValues, api);
  yield takeLatest(Types.POST_STORED_VALUES, postStoredValues, api);
}