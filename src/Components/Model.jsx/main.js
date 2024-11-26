class Validate {
  constructor(
    rang,
    salary,
    bribeSize,
    companyTransparencyLevel = 0,
    companyCoraptionLevel = 0,
    faith = 0
  ) {
    this.rang = rang;
    this.salary = salary;
    this.bribeSize = bribeSize;
    this.companyTransparencyLevel = companyTransparencyLevel;
    this.companyCoraptionLevel = companyCoraptionLevel;
    this.faith = faith;
    this.validateData();
  }

  validateData() {}
}

class Coraption extends Validate {
  constructor(
    rang,
    salary,
    bribeSize,
    companyTransparencyLevel,
    companyCoraptionLevel,
    faith
  ) {
    super(
      rang,
      salary,
      bribeSize,
      companyTransparencyLevel,
      companyCoraptionLevel,
      faith
    );
    this.calculateCoraption();
  }

  amplificate(...args) {
    return args.reduce((acc, curr) => acc * curr, 1);
  }

  disjunction(...args) {
    return args.reduce((acc, curr) => acc || curr, 0);
  }

  conjunction(a, b) {
    return Math.min(a, b);
  }

  A1() {
    return this.bribeSize >= 1000 && this.bribeSize <= 5000
      ? 1
      : 10 / 9 - this.bribeSize / 45000;
  }

  A2() {
    if (this.bribeSize >= 1000 && this.bribeSize < 15000) {
      return this.bribeSize / 14000 - 1 / 14;
    } else if (this.bribeSize >= 15000 && this.bribeSize <= 25000) {
      return 1;
    } else {
      return -this.bribeSize / 25000 + 2;
    }
  }

  A3() {
    return this.bribeSize >= 35000 && this.bribeSize <= 50000
      ? 1
      : this.bribeSize / 35000 + 1 / 35;
  }

  B1() {
    return this.rang >= 1 && this.rang <= 3
      ? 1
      : Math.pow(-this.rang / 7 + 10 / 7, 2);
  }

  B2() {
    if (this.rang >= 1 && this.rang < 5) {
      return Math.pow(this.rang / 4 - 1 / 4, 2);
    } else if (this.rang >= 5 && this.rang <= 7) {
      return 1;
    } else {
      return Math.pow(-this.rang / 3 + 10 / 3, 2);
    }
  }

  B3() {
    return this.rang >= 8 && this.rang <= 10 ? 1 : this.rang / 7 - 1 / 7;
  }

  C1() {
    return this.salary >= 3000 && this.salary <= 5000
      ? 1
      : (1 / 500) * Math.sqrt(-10 * this.salary + 300000);
  }

  C2() {
    if (this.salary >= 3000 && this.salary <= 8000) {
      return 0.01 * Math.sqrt(2 * this.salary - 6000);
    } else if (this.salary >= 8000 && this.salary <= 15000) {
      return 1;
    } else {
      return Math.sqrt(-6 * this.salary + 180000) / 300;
    }
  }

  C3() {
    return this.salary >= 20000 && this.salary <= 30000
      ? 1
      : (1 / 1700) * Math.sqrt(170 * this.salary - 510000);
  }

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
    return this.amplificate(this.conjunction(this.B3(), this.C3()), this.E1(i));
  }

  P2(i) {
    return this.amplificate(this.conjunction(this.A3(), this.B1()), this.E3(i));
  }

  P3(i) {
    return this.amplificate(this.conjunction(this.A2(), this.C2()), this.E2(i));
  }

  integrate(values, step = 0.01) {
    let total = 0;
    for (let i = 0; i < values.length - 1; i++) {
      total += ((values[i] + values[i + 1]) * step) / 2;
    }
    return total;
  }

  calculateCoraption() {
    let resultArray = [];
    for (let i = 0; i <= 1; i += 0.01) {
      const p1 = this.P1(i);
      const p2 = this.P2(i);
      const p3 = this.P3(i);

      resultArray.push(this.disjunction(p1, p2, p3));
    }
    const result = this.integrate(resultArray);

    //console.log(resultArray);
    //console.log("\n\n", result);

    return result;
  }
}

// Create an instance
const corp = new Coraption(2, 4000, 30000);
