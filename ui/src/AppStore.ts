import {createStore} from "redux";
import {initialState, reducer} from "./AppActions";

declare global {
  interface Window {
    [key: string]: any;
  }
}

export const appStore = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
