import * as React from 'react';
import './App.css';
import {appStore} from "./AppStore";
import {ExchangeRates} from "./ExchangeRates";
import {Provider} from "react-redux";
import {SelectedValuesForm} from "./SelectedValuesForm";

export class App extends React.Component {
  public render() {
    return (
      <Provider store={appStore}>
        <div className="App">
          <header>
            <h1>Example</h1>
          </header>
          <div>
            <ExchangeRates/>
            <SelectedValuesForm/>
          </div>
        </div>
      </Provider>
    );
  }
}
