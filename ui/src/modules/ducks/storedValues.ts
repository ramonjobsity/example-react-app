
import { createReducer, createActions } from 'reduxsauce';
import { StoredValuesState } from '../../Models';

// definition of the actions.
const { Types, Creators } = createActions({
  getStoredValues: null,
  getStoredValuesSuccess: ['data'],
  getStoredValuesError: ['error'],

  postStoredValues: ['data'],
  postStoredValuesSuccess: null,
  postStoredValuesError: ['error']
});

export { Types, Creators };

// definition of the default state.
const defaultState: StoredValuesState = {
  storedValues: {
    fromCurrency: '',
    fromAmount: 0,
    toCurrency: '',
    toAmount: 0
  },
  isLoading: false
}

export default createReducer(defaultState, {
  [Types.GET_STORED_VALUES]: (state: any) => {
    return {
      ...state,
      isLoading: true
    }
  },
  [Types.GET_STORED_VALUES_SUCCESS]: ( state: any, { data: storedValues }: any) => {
    return {
      ...state,
      storedValues,
      isLoading: false
    }
  },
  [Types.GET_STORED_VALUES_ERROR]: (state: any, error: any) => {
    return {
      ...state,
      isLoading: false,
      error
    }
  },
  [Types.POST_STORED_VALUES]: (state: any) => {
    return {
      ...state,
      isLoading: true
    }
  },
  [Types.POST_STORED_VALUES_SUCCESS]: ( state: any) => {
    return {
      ...state,
      isLoading: false
    }
  },
  [Types.POST_STORED_VALUES_ERROR]: (state: any, error: any) => {
    return {
      ...state,
      isLoading: false,
      error
    }
  }
})