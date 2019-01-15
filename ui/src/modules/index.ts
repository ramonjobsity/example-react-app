import { combineReducers } from 'redux';

import currency from './ducks/currency';
import storedValues from './ducks/storedValues';

export default combineReducers({
  currency,
  storedValues
})