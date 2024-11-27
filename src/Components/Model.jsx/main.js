//this remove warning from console about useless react, but this component use React
// eslint-disable-next-line
import React, { Component } from "react";

// class Validate extends Component {
//   constructor(
//     rang,
//     salary,
//     bribeSize,
//     companyTransparencyLevel = 1,
//     companyCoraptionLevel = 1,
//     faith = 1
//   ) {
//     super();
//     this.rang = rang;
//     this.salary = salary;
//     this.bribeSize = bribeSize;
//     this.companyTransparencyLevel = companyTransparencyLevel;
//     this.companyCoraptionLevel = companyCoraptionLevel;
//     this.faith = faith;
//     this.validateData();
//   }

//   validateData() {}
// }
//this remove warning from console about useless react, but this component use React
// eslint-disable-next-line

export default class Coraption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rang: 2,
      salary: 4000,
      bribeSize: 20000,
      companyTransparencyLevel: 2,
      companyCoraptionLevel: 5,
      faith: 2,
      result: 0,
      resutArray: [],
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

  //bribe
  A1() {
    return this.state.bribeSize >= 1000 && this.state.bribeSize <= 5000
      ? 1
      : 10 / 9 - this.state.bribeSize / 45000;
  }

  A2() {
    if (this.state.bribeSize >= 1000 && this.state.bribeSize < 15000) {
      return this.state.bribeSize / 14000 - 1 / 14;
    } else if (this.state.bribeSize >= 15000 && this.state.bribeSize <= 25000) {
      return 1;
    } else {
      return -this.state.bribeSize / 25000 + 2;
    }
  }

  A3() {
    return this.state.bribeSize >= 35000 && this.state.bribeSize <= 50000
      ? 1
      : this.state.bribeSize / 35000 + 1 / 35;
  }

  //rang
  B1() {
    return this.state.rang >= 1 && this.state.rang <= 3
      ? 1
      : Math.pow(-this.state.rang / 7 + 10 / 7, 2);
  }

  B2() {
    if (this.state.rang >= 1 && this.state.rang < 5) {
      return Math.pow(this.state.rang / 4 - 1 / 4, 2);
    } else if (this.state.rang >= 5 && this.state.rang <= 7) {
      return 1;
    } else {
      return Math.pow(-this.state.rang / 3 + 10 / 3, 2);
    }
  }

  B3() {
    return this.state.rang >= 8 && this.state.rang <= 10
      ? 1
      : this.state.rang / 7 - 1 / 7;
  }
  //salary
  C1() {
    return this.state.salary >= 3000 && this.state.salary <= 5000
      ? 1
      : (1 / 500) * Math.sqrt(-10 * this.state.salary + 300000);
  }

  C2() {
    if (this.state.salary >= 3000 && this.state.salary <= 8000) {
      return 0.01 * Math.sqrt(2 * this.state.salary - 6000);
    } else if (this.state.salary >= 8000 && this.state.salary <= 15000) {
      return 1;
    } else {
      return Math.sqrt(-6 * this.state.salary + 180000) / 300;
    }
  }

  C3() {
    return this.state.salary >= 20000 && this.state.salary <= 30000
      ? 1
      : (1 / 1700) * Math.sqrt(170 * this.state.salary - 510000);
  }

  //corruption lvl
  F1() {
    if (this.state.faith >= 1 && this.state.faith <= 3) {
      return 1;
    } else {
      return (-Math.pow(Math.abs(this.state.faith - 2), 1 / 3) + 2) / 2;
    }
  }

  F2() {
    if (this.state.faith >= 4 && this.state.faith <= 6) {
      return 1;
    } else if (this.state.faith >= 1 && this.state.faith < 4) {
      const a = 1 / (Math.pow(4, 1 / 3) - 1);
      return a * Math.pow(this.state.faith, 1 / 3) - a;
    } else {
      const scale = 1 / Math.pow(4, 1 / 3);
      return -Math.pow(this.state.faith - 6, 1 / 3) * scale + 1;
    }
  }

  F3() {
    if (this.state.faith >= 8 && this.state.faith <= 10) {
      return 1;
    } else {
      const scale = 1 / Math.pow(7, 1 / 3);
      return -scale * Math.pow(Math.abs(this.state.faith - 8), 1 / 3) + 1;
    }
  }

  //faith lvl

  K1() {
    return this.state.companyCoraptionLevel >= 1 &&
      this.state.companyCoraptionLevel <= 2
      ? 1
      : -Math.pow(this.state.companyCoraptionLevel - 2, 2) / 64 + 1;
  }

  K2() {
    if (
      this.state.companyCoraptionLevel >= 4 &&
      this.state.companyCoraptionLevel <= 6
    ) {
      return 1;
    } else if (
      this.state.companyCoraptionLevel >= 1 &&
      this.state.companyCoraptionLevel < 4
    ) {
      return -Math.pow(this.state.companyCoraptionLevel - 4, 2) / 9 + 1;
    } else {
      return -Math.pow(this.state.companyCoraptionLevel - 6, 2) / 16 + 1;
    }
  }

  K3() {
    return this.state.companyCoraptionLevel >= 8 &&
      this.state.companyCoraptionLevel <= 10
      ? 1
      : -Math.pow(this.state.companyCoraptionLevel - 6, 2) / 49 + 1;
  }

  //company transparency

  T1() {
    return this.state.companyTransparencyLevel >= 1 &&
      this.state.companyTransparencyLevel <= 2
      ? 1
      : -(this.state.companyTransparencyLevel - 2) / 8 + 1;
  }

  T2() {
    if (
      this.state.companyTransparencyLevel >= 4 &&
      this.state.companyTransparencyLevel <= 6
    ) {
      return 1;
    } else if (
      this.state.companyTransparencyLevel >= 1 &&
      this.state.companyTransparencyLevel < 4
    ) {
      return (this.state.companyTransparencyLevel - 4) / 3 + 1;
    } else {
      return -(this.state.companyTransparencyLevel - 6) / 4 + 1;
    }
  }

  T3() {
    return this.state.companyTransparencyLevel >= 8 &&
      this.state.companyTransparencyLevel <= 10
      ? 1
      : (this.state.companyTransparencyLevel - 8) / 8 + 1;
  }

  //chance to bribe
  E1(i) {
    return Math.exp(-10 * Math.pow(i, 2));
  }

  E2(i) {
    return Math.exp(-10 * Math.pow(i - 0.5, 2));
  }

  E3(i) {
    return Math.exp(-10 * Math.pow(i - 1, 2));
  }

  //lin variables
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
  //   P7(i) {
  //     return this.conjunction(this.conjunction(this.T3(), this.A3()), this.E1(i));
  //   }

  findFirstMaximum(data, step = 0.01) {
    let max = Math.max(...data);
    let index = data.findIndex((value) => value === max);
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
      //const p7 = this.P7(i);
      //console.log("p1", p1);
      resultArray.push(this.disjunction(p1, p2, p3, p4, p5, p6));
    }
    const result = this.findFirstMaximum(resultArray);

    console.log("state: ", this.state);
    console.log(resultArray);
    console.log("\n\n", result);
    this.setState({ resultArray: resultArray });
    this.setState({ result: result.toFixed(2) });
  }
}
