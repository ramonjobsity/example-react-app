import * as React from 'react';

export class SelectedValuesForm extends React.Component {
  public render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Select Values</legend>
            <div>
              <label>
                From Currency:
                <select>
                  <option>USD</option>
                  <option>GBP</option>
                  <option>EUR</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                From Amount:
                <input type="text" value={1.23} readOnly={true}/>
              </label>
            </div>
            <div>
              <label>
                To Currency:
                <select>
                  <option>USD</option>
                  <option>GBP</option>
                  <option>EUR</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                To Amount:
                <input type="text" value={4.56} readOnly={true}/>
              </label>
            </div>
            <div>
              <button type="button">Save</button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
