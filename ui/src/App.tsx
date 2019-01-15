import * as React from 'react';
import './App.css';
import store from './config/store';
import {Provider} from "react-redux";
import Main from './views/Main';

export class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
}
