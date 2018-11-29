import * as React from 'react';
import './App.css';
import {ExchangeRates} from "./ExchangeRates";
import {SelectedValuesForm} from "./SelectedValuesForm";

export class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header>
          <h1>Example</h1>
        </header>
        <div>
          <ExchangeRates/>
          <SelectedValuesForm/>
        </div>
      </div>
    );
  }
}
