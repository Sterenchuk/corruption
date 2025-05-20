import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import ModelController from "./main.js"; // Coraption class

const dummy = new ModelController({});

const range = (from, to, step) => {
  const res = [];
  for (let i = from; i <= to; i += step) res.push(i);
  return res;
};

const createDataset = (name, values, xValues) => ({
  label: name,
  data: values.map((y, i) => ({ x: xValues[i], y })),
  fill: false,
  borderWidth: 2,
  pointRadius: 0,
  borderColor: getRandomColor(),
});

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const groupings = {
  Bribe: {
    fns: ["A1", "A2", "A3"],
    input: "bribeSize",
    title: "Bribe Size Membership Functions (A1–A3)",
    xLabel: "Bribe Size",
  },
  Rang: {
    fns: ["B1", "B2", "B3"],
    input: "rang",
    title: "Rang Membership Functions (B1–B3)",
    xLabel: "Rang",
  },
  Salary: {
    fns: ["C1", "C2", "C3"],
    input: "salary",
    title: "Salary Membership Functions (C1–C3)",
    xLabel: "Salary",
  },
  Faith: {
    fns: ["F1", "F2", "F3"],
    input: "faith",
    title: "Faith Membership Functions (F1–F3)",
    xLabel: "Faith Level",
  },
  CompanyCorruption: {
    fns: ["K1", "K2", "K3"],
    input: "companyCorruptionLevel",
    title: "Company Corruption Level Membership Functions (K1–K3)",
    xLabel: "Corruption Level",
  },
  CompanyTransparency: {
    fns: ["T1", "T2", "T3"],
    input: "companyTransparencyLevel",
    title: "Company Transparency Level Membership Functions (T1–T3)",
    xLabel: "Transparency Level",
  },
};

export default function Graphs() {
  const canvasRefs = useRef([]);

  useEffect(() => {
    const charts = [];
    const inputs = {
      bribeSize: range(0, 50000, 100),
      rang: range(1, 10, 0.1),
      salary: range(0, 30000, 100),
      faith: range(1, 10, 0.1),
      companyCorruptionLevel: range(1, 10, 0.1),
      companyTransparencyLevel: range(1, 10, 0.1),
    };

    const runFunction = (fn, inputName, inputValues) => {
      try {
        return inputValues.map((val) => {
          const tempState = { ...dummy.state, [inputName]: val };
          const result = dummy[fn](tempState);
          if (typeof result !== "number" || isNaN(result)) {
            throw new Error(
              `Function ${fn} returned ${result} for input ${val}`
            );
          }
          return Math.max(0, Math.min(1, result)); // Clamp to [0, 1]
        });
      } catch (error) {
        console.error(`Error in ${fn} with input ${inputName}:`, error.message);
        return inputValues.map(() => 0);
      }
    };

    Object.values(groupings).forEach((group, i) => {
      const canvas = canvasRefs.current[i];
      if (!canvas) {
        console.warn(`Canvas for group ${group.title} is not available`);
        return;
      }
      const xVals = inputs[group.input];
      const datasets = group.fns.map((fn) =>
        createDataset(fn, runFunction(fn, group.input, xVals), xVals)
      );

      const ctx = canvas.getContext("2d");
      charts.push(
        new Chart(ctx, {
          type: "line",
          data: { datasets },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              title: { display: true, text: group.title },
            },
            scales: {
              x: {
                type: "linear",
                title: { display: true, text: group.xLabel },
              },
              y: {
                min: 0,
                max: 1,
                title: { display: true, text: "Membership Degree" },
              },
            },
          },
        })
      );
    });

    // Rule chart (P1–P6)
    const ruleCanvas = canvasRefs.current[Object.keys(groupings).length];
    if (ruleCanvas) {
      const ruleCtx = ruleCanvas.getContext("2d");
      const ruleX = range(0, 1, 0.01);
      const rules = ["P1", "P2", "P3", "P4", "P5", "P6"];

      const ruleDatasets = rules.map((rule) =>
        createDataset(
          rule,
          ruleX.map((i) => {
            try {
              const result = dummy[rule](i);
              if (typeof result !== "number" || isNaN(result)) {
                throw new Error(`Rule ${rule} returned ${result}`);
              }
              return Math.max(0, Math.min(1, result));
            } catch (error) {
              console.error(`Error in rule ${rule}:`, error.message);
              return 0;
            }
          }),
          ruleX
        )
      );

      charts.push(
        new Chart(ruleCtx, {
          type: "line",
          data: { datasets: ruleDatasets },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { title: { display: true, text: "Fuzzy Rules (P1–P6)" } },
            scales: {
              x: { title: { display: true, text: "i (Bribe Chance)" } },
              y: {
                min: 0,
                max: 1,
                title: { display: true, text: "Membership Degree" },
              },
            },
          },
        })
      );
    }

    return () => charts.forEach((chart) => chart.destroy());
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Fuzzy Logic Membership Functions and Rules</h1>
      {Array.from({ length: Object.keys(groupings).length + 1 }).map((_, i) => (
        <div key={i} style={{ marginBottom: "2rem" }}>
          <canvas
            ref={(el) => (canvasRefs.current[i] = el)}
            style={{
              margin: "auto",
              width: "100%",
              maxWidth: "800px",
              height: "400px",
            }}
          />
        </div>
      ))}
    </div>
  );
}
