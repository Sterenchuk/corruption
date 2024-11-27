import React from 'react';
import ModelController from './main.js';
import './Model.css';

class Model extends ModelController {
  constructor(props) {
    super(props);

    this.handleInputOneToTen = this.handleInputOneToTen.bind(this);
    this.handleInputOneToBillion = this.handleInputOneToBillion.bind(this);
    this.handleRangeChange = this.handleRangeChange.bind(this);
  }

  handleInputOneToTen(event) {
    const { name, value } = event.target;

    const isValid = /^[0-9]*$/.test(value) && Number(value) >= 1 && Number(value) <= 10;

    if (isValid || value === "") {
      this.setState({ [name]: value === "" ? 1 : Number(value) });
    }
  }

  handleInputOneToBillion(event) {
    const { name, value } = event.target;

    const isValid = /^[0-9]*$/.test(value) && Number(value) >= 1 && Number(value) <= 1000000000;

    if (isValid || value === "") {
      this.setState({ [name]: value === "" ? 1 : Number(value) });
    }
  }

  handleRangeChange(event) {
    const { value } = event.target;

    const clampedValue = Math.min(Math.max(Number(value), 1), 10);
    this.setState({ rang: clampedValue });
  }

  render() {
    return (
      <div className="fuzzyLogicContent">
        <div>
          <h1>Fuzzy logic</h1>
        </div>
        <div className="fuzzyLogic">
          <h3 className="fuzzyLogic__label">Rang</h3>
          <div>
            {this.state.rang}
            <input
              type="range"
              className="fuzzyLogic__rangeInput"
              name="rang"
              min="1"
              max="10"
              value={this.state.rang}
              onChange={this.handleRangeChange}
            />
          </div>
        </div>
        <div className="fuzzyLogic">
          <h3>Salary</h3>
          <input
            type="number"
            step={1000}
            className="fuzzyLogic__rangeInput"
            name="salary"
            value={this.state.salary}
            onChange={this.handleInputOneToBillion}
          />
        </div>
        <div className="fuzzyLogic">
          <h3>Bribe size</h3>
          <input
            type="number"
            step={1000}
            className="fuzzyLogic__rangeInput"
            name="bribeSize"
            value={this.state.bribeSize}
            onChange={this.handleInputOneToBillion}
          />
        </div>
        <div className="fuzzyLogic">
          <h3>Company transparency level</h3>
          <div>
            {this.state.companyTransparencyLevel}
            <input
              type="range"
              className="fuzzyLogic__rangeInput"
              name="companyTransparencyLevel"
              min="1"
              max="10"
              value={this.state.companyTransparencyLevel}
              onChange={this.handleRangeChange}
            />
          </div>
        </div>
        <div className="fuzzyLogic">
          <h3>Company corruption level</h3>
          <div>
            {this.state.companyCoraptionLevel}
            <input
              type="range"
              className="fuzzyLogic__rangeInput"
              name="companyCoraptionLevel"
              min="1"
              max="10"
              value={this.state.companyCoraptionLevel}
              onChange={this.handleRangeChange}
            />
          </div>
        </div>
        <div className="fuzzyLogic">
          <h3>Faith</h3>
          <div>
            {this.state.faith}
            <input
              type="range"
              className="fuzzyLogic__rangeInput"
              name="faith"
              min="1"
              max="10"
              value={this.state.faith}
              onChange={this.handleRangeChange}
            />
          </div>
        </div>
        <div>
          <button onClick={() => this.calculateCoraption()}>Calculate</button>
        </div>
        <div className="fuzzyLogicResult">
          <h3>Result: {this.state.result}</h3>
        </div>
      </div>
    );
  }
}

export default Model;
