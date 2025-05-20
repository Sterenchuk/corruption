import React, { Component } from "react";
import Chart from "chart.js/auto";
import ModelController from "./main.js";
import "./Model.css";

class Model extends ModelController {
  constructor(props) {
    super(props);

    this.handleInputOneToBillion = this.handleInputOneToBillion.bind(this);
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.drawChart = this.drawChart.bind(this);
    this.drawResultArrayChart = this.drawResultArrayChart.bind(this);
    this.chartRef = React.createRef();
    this.chartInstance = null;
  }

  handleInputOneToBillion(event) {
    const { name, value } = event.target;

    const isValid =
      /^[0-9]*$/.test(value) &&
      Number(value) >= 1 &&
      Number(value) <= 1000000000;

    if (isValid || value === "") {
      this.setState({ [name]: value === "" ? 1 : Number(value) });
    }
  }

  handleRangeChange(event) {
    const { name, value } = event.target;

    const clampedValue = Math.min(Math.max(Number(value), 1), 10);
    this.setState({ [name]: clampedValue });
  }

  drawChart() {
    if (this.chartInstance) {
      this.chartInstance.destroy();
      this.chartInstance = null;
    }

    const ctx = this.chartRef.current.getContext("2d");
    const range = (from, to, step) => {
      const res = [];
      for (let i = from; i <= to; i += step) res.push(i);
      return res;
    };
    const xValues = range(0, 1, 0.01);
    const datasets = [
      { label: "P1", data: xValues.map((i) => this.P1(i)) },
      { label: "P2", data: xValues.map((i) => this.P2(i)) },
      { label: "P3", data: xValues.map((i) => this.P3(i)) },
      { label: "P4", data: xValues.map((i) => this.P4(i)) },
      { label: "P5", data: xValues.map((i) => this.P5(i)) },
      { label: "P6", data: xValues.map((i) => this.P6(i)) },
    ].map((d) => ({
      ...d,
      fill: false,
      borderWidth: 2,
      pointRadius: 0,
      borderColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
    }));

    this.chartInstance = new Chart(ctx, {
      type: "line",
      data: { labels: xValues, datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { title: { display: true, text: "Fuzzy Rules (P1–P6)" } },
        scales: {
          x: { title: { display: true, text: "Bribe Chance" } },
          y: {
            min: 0,
            max: 1,
            title: { display: true, text: "Membership Degree" },
          },
        },
      },
    });
  }

  drawResultArrayChart() {
    if (this.chartInstance) {
      this.chartInstance.destroy();
      this.chartInstance = null;
    }

    const ctx = this.chartRef.current.getContext("2d");
    const step = 0.01;
    const labels = Array.from({ length: 101 }, (_, i) => i * step);

    this.chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Result Array",
            data: this.state.resultArray,
            fill: false,
            borderWidth: 2,
            pointRadius: 0,
            borderColor: "#007bff",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { title: { display: true, text: "Result Array Chart" } },
        scales: {
          x: { title: { display: true, text: "Bribe Chance" } },
          y: {
            min: 0,
            max: 1,
            title: { display: true, text: "Membership Degree" },
          },
        },
      },
    });
  }

  componentWillUnmount() {
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
  }

  render() {
    return (
      <div className="fuzzyLogicContent">
        <h1>
          Modeling the Social Phenomenon of Corruption Using Fuzzy Logic Methods
        </h1>
        <div className="fuzzyLogicWrapper">
          {/* Inputs Column */}
          <div className="fuzzyLogicInputs">
            <div className="fuzzyLogic">
              <h3>Rang</h3>
              <div>
                {this.state.rang}
                <input
                  type="range"
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
                name="bribeSize"
                value={this.state.bribeSize}
                onChange={this.handleInputOneToBillion}
              />
            </div>

            <div className="fuzzyLogic">
              <h3>Risk</h3>
              <div>
                {this.state.companyTransparencyLevel}
                <input
                  type="range"
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
                {this.state.companyCorruptionLevel}
                <input
                  type="range"
                  name="companyCorruptionLevel"
                  min="1"
                  max="10"
                  value={this.state.companyCorruptionLevel}
                  onChange={this.handleRangeChange}
                />
              </div>
            </div>

            <div className="fuzzyLogic">
              <h3>Honesty</h3>
              <div>
                {this.state.faith}
                <input
                  type="range"
                  name="faith"
                  min="1"
                  max="10"
                  value={this.state.faith}
                  onChange={this.handleRangeChange}
                />
              </div>
            </div>

            <div style={{ marginTop: "20px" }}>
              <button onClick={() => this.calculateCoraption()}>
                Calculate
              </button>
              <button onClick={this.drawChart} style={{ marginLeft: "10px" }}>
                Draw Rules Chart
              </button>
              <button
                onClick={this.drawResultArrayChart}
                style={{ marginLeft: "10px" }}
              >
                Draw Result Chart
              </button>
              <button
                onClick={() => this.props.navigate("/graphs")}
                style={{ marginLeft: "10px" }}
              >
                Go to Graphs
              </button>
            </div>

            <div className="fuzzyLogicResult">
              <h3>Result: {this.state.result}</h3>
            </div>
          </div>

          {/* Chart Column */}
          <div className="fuzzyLogicGraph">
            <canvas ref={this.chartRef}></canvas>
          </div>
        </div>
      </div>
    );
  }
}

export default Model;
