import React, { Component } from "react";

export default class Coraption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rang: 2,
      salary: 4000,
      bribeSize: 20000,
      companyTransparencyLevel: 2,
      companyCorruptionLevel: 5, // Fixed typo
      faith: 2,
      result: 0,
      resutArray: [], // Fixed typo: resutArray -> resultArray
    };

    this.calculateCoraption = this.calculateCoraption.bind(this);
  }

  amplificate(...args) {
    return args.reduce((acc, curr) => acc * curr, 1);
  }

  disjunction(...args) {
    return args.reduce((acc, curr) => Math.max(acc, curr), 0);
  }

  conjunction(...args) {
    return args.reduce((acc, curr) => Math.min(acc, curr), 1);
  }

  // bribe
  A1(inputState = this.state) {
    let result =
      inputState.bribeSize >= 1000 && inputState.bribeSize <= 5000
        ? 1
        : 10 / 9 - inputState.bribeSize / 45000;
    return Math.max(0, Math.min(1, result));
  }

  A2(inputState = this.state) {
    let result;
    if (inputState.bribeSize >= 1000 && inputState.bribeSize < 15000) {
      result = inputState.bribeSize / 14000 - 1 / 14;
    } else if (inputState.bribeSize >= 15000 && inputState.bribeSize <= 25000) {
      result = 1;
    } else {
      result = -inputState.bribeSize / 25000 + 2;
    }
    return Math.max(0, Math.min(1, result));
  }

  A3(inputState = this.state) {
    let result =
      inputState.bribeSize >= 35000 && inputState.bribeSize <= 50000
        ? 1
        : inputState.bribeSize / 35000 + 1 / 35;
    return Math.max(0, Math.min(1, result));
  }

  // rang
  B1(inputState = this.state) {
    let result =
      inputState.rang >= 1 && inputState.rang <= 3
        ? 1
        : Math.pow(-inputState.rang / 7 + 10 / 7, 2);
    return Math.max(0, Math.min(1, result));
  }

  B2(inputState = this.state) {
    let result;
    if (inputState.rang >= 1 && inputState.rang < 5) {
      result = Math.pow(inputState.rang / 4 - 1 / 4, 2);
    } else if (inputState.rang >= 5 && inputState.rang <= 7) {
      result = 1;
    } else {
      result = Math.pow(-inputState.rang / 3 + 10 / 3, 2);
    }
    return Math.max(0, Math.min(1, result));
  }

  B3(inputState = this.state) {
    let result =
      inputState.rang >= 8 && inputState.rang <= 10
        ? 1
        : inputState.rang / 7 - 1 / 7;
    return Math.max(0, Math.min(1, result));
  }

  // salary
  C1(inputState = this.state) {
    let result;
    if (inputState.salary >= 3000 && inputState.salary <= 5000) {
      result = 1;
    } else if (inputState.salary < 3000 || inputState.salary > 30000) {
      result = 0; // Prevent NaN from sqrt of negative number
    } else {
      result = (1 / 500) * Math.sqrt(-10 * inputState.salary + 300000);
    }
    return Math.max(0, Math.min(1, result));
  }

  C2(inputState = this.state) {
    let result;
    if (inputState.salary >= 8000 && inputState.salary <= 15000) {
      result = 1;
    } else if (inputState.salary < 3000 || inputState.salary > 30000) {
      result = 0; // Prevent NaN from sqrt of negative number
    } else if (inputState.salary >= 3000 && inputState.salary < 8000) {
      result = 0.01 * Math.sqrt(2 * inputState.salary - 6000);
    } else {
      result = Math.sqrt(-6 * inputState.salary + 180000) / 300;
    }
    return Math.max(0, Math.min(1, result));
  }

  C3(inputState = this.state) {
    let result;
    if (inputState.salary >= 20000 && inputState.salary <= 30000) {
      result = 1;
    } else if (inputState.salary < 3000 || inputState.salary > 30000) {
      result = 0; // Prevent NaN from sqrt of negative number
    } else {
      result = (1 / 1700) * Math.sqrt(170 * inputState.salary - 510000);
    }
    return Math.max(0, Math.min(1, result));
  }

  // faith level
  F1(inputState = this.state) {
    let result;
    if (inputState.faith >= 1 && inputState.faith <= 3) {
      result = 1;
    } else {
      result = (-Math.pow(Math.abs(inputState.faith - 2), 1 / 3) + 2) / 2;
    }
    return Math.max(0, Math.min(1, result));
  }

  F2(inputState = this.state) {
    let result;
    if (inputState.faith >= 4 && inputState.faith <= 6) {
      result = 1;
    } else if (inputState.faith >= 1 && inputState.faith < 4) {
      const a = 1 / (Math.pow(4, 1 / 3) - 1);
      result = a * Math.pow(inputState.faith, 1 / 3) - a;
    } else {
      const scale = 1 / Math.pow(4, 1 / 3);
      result = -Math.pow(inputState.faith - 6, 1 / 3) * scale + 1;
    }
    return Math.max(0, Math.min(1, result));
  }

  F3(inputState = this.state) {
    let result;
    if (inputState.faith >= 8 && inputState.faith <= 10) {
      result = 1;
    } else {
      const scale = 1 / Math.pow(7, 1 / 3);
      result = -scale * Math.pow(Math.abs(inputState.faith - 8), 1 / 3) + 1;
    }
    return Math.max(0, Math.min(1, result));
  }

  // company corruption level
  K1(inputState = this.state) {
    const x = inputState.companyCorruptionLevel;
    let result = x >= 1 && x <= 2 ? 1 : -Math.pow(x - 2, 2) / 64 + 1;
    return Math.max(0, Math.min(1, result));
  }

  K2(inputState = this.state) {
    const x = inputState.companyCorruptionLevel;
    let result;
    if (x >= 4 && x <= 6) {
      result = 1;
    } else if (x >= 1 && x < 4) {
      result = -Math.pow(x - 4, 2) / 9 + 1;
    } else {
      result = -Math.pow(x - 6, 2) / 16 + 1;
    }
    return Math.max(0, Math.min(1, result));
  }

  K3(inputState = this.state) {
    const x = inputState.companyCorruptionLevel;
    let result = x >= 8 && x <= 10 ? 1 : -Math.pow(x - 8, 2) / 49 + 1;
    return Math.max(0, Math.min(1, result));
  }

  // company transparency
  T1(inputState = this.state) {
    let result =
      inputState.companyTransparencyLevel >= 1 &&
      inputState.companyTransparencyLevel <= 2
        ? 1
        : -(inputState.companyTransparencyLevel - 2) / 8 + 1;
    return Math.max(0, Math.min(1, result));
  }

  T2(inputState = this.state) {
    let result;
    if (
      inputState.companyTransparencyLevel >= 4 &&
      inputState.companyTransparencyLevel <= 6
    ) {
      result = 1;
    } else if (
      inputState.companyTransparencyLevel >= 1 &&
      inputState.companyTransparencyLevel < 4
    ) {
      result = (inputState.companyTransparencyLevel - 4) / 3 + 1;
    } else {
      result = -(inputState.companyTransparencyLevel - 6) / 4 + 1;
    }
    return Math.max(0, Math.min(1, result));
  }

  T3(inputState = this.state) {
    let result =
      inputState.companyTransparencyLevel >= 8 &&
      inputState.companyTransparencyLevel <= 10
        ? 1
        : (inputState.companyTransparencyLevel - 8) / 8 + 1;
    return Math.max(0, Math.min(1, result));
  }

  // chance to bribe
  E1(i) {
    return Math.exp(-10 * Math.pow(i, 2));
  }

  E2(i) {
    return Math.exp(-10 * Math.pow(i - 0.5, 2));
  }

  E3(i) {
    return Math.exp(-10 * Math.pow(i - 1, 2));
  }

  P1(i) {
    return this.conjunction(this.conjunction(this.B3(), this.C3()), this.E1(i));
  }

  P2(i) {
    return this.conjunction(
      this.conjunction(this.A3(), this.B1(), this.C1()),
      this.E3(i)
    );
  }

  P3(i) {
    return this.conjunction(
      this.conjunction(this.A2(), this.C2(), this.K2()),
      this.E2(i)
    );
  }

  P4(i) {
    return this.conjunction(
      this.conjunction(this.K3(), this.F1(), this.B2()),
      this.E2(i)
    );
  }

  P5(i) {
    return this.conjunction(
      this.conjunction(this.T3(), this.K1(), this.A3()),
      this.E2(i)
    );
  }

  P6(i) {
    return this.conjunction(
      this.conjunction(this.F2(), this.T1(), this.A1()),
      this.E1(i)
    );
  }

  findFirstMaximum(data, step = 0.01) {
    const validData = data.map((val) =>
      isNaN(val) ? 0 : Math.max(0, Math.min(1, val))
    );
    if (validData.every((val) => val === 0)) return 0;
    let max = Math.max(...validData);
    let index = validData.findIndex((value) => value === max);
    return index * step;
  }

  calculateCoraption() {
    let resultArray = [];
    for (let i = 0; i <= 1; i += 0.01) {
      const p1 = this.P1(i);
      const p2 = this.P2(i);
      const p3 = this.P3(i);
      const p4 = this.P4(i);
      const p5 = this.P5(i);
      const p6 = this.P6(i);
      resultArray.push(this.disjunction(p1, p2, p3, p4, p5, p6));
    }
    const result = this.findFirstMaximum(resultArray);

    this.setState({ resultArray: resultArray, result: result.toFixed(2) });
  }
}
