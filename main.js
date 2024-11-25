//TODO write test for all data constractor recive
class Validate {
  constructor(
    rang,
    salary,
    bribeSize,
    companyTransparencyLevel,
    companyCoraptionLevel,
    faith
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

export class Coraption extends Validate {
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
  amplificate(a, b) {
    return a * b;
  }
  disjunction(a, b) {
    return Math.max(a, b);
  }
  conjunction(a, b) {
    return Math.min(a, b);
  }
  A1() {
    return this.bribeSize >= 1000 && this.bribeSize <= 5000
      ? 1
      : 10 / 9 - bribeSize / 45_000;
  }

  A2() {
    if (this.bribeSize >= 1000 && this.bribeSize < 15_000) {
      return this.bribeSize / 14_000 - 1 / 14;
    } else if (this.bribeSize >= 15_000 && this.bribeSize <= 25_000) {
      return 1;
    } else {
      return -this.bribeSize / 25_000 + 2;
    }
  }
  A3() {
    return this.bribeSize >= 35_000 && this.bribeSize <= 50_000
      ? 1
      : bribeSize / 34_000 + 1 / 34;
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
    return this.salary >= 3_000 && this.salary <= 5_000
      ? 1
      : (1 / 500) * Math.pow(-10 * this.salary + 300_000, 1 / 2);
  }

  C2() {
    if (this.salary >= 3_000 && this.salary <= 8_000) {
      return 0.01 * Math.pow(2 * this.salary - 6000, 1 / 2);
    } else if (this.salary >= 8_000 && this.salary <= 15_000) {
      return 1;
    } else {
      (1 / 300) * Math.pow(-6 * this.salary + 180_000, 1 / 2);
    }
  }

  C3() {
    return this.salary >= 20_000 && this.salary <= 30_000
      ? 1
      : (1 / 1700) * Math.pow(170 * this.salary - 510_000);
  }

  E1() {
    return Math.pow(Math.E, Math.pow(-10 * this.bribeSize, 2));
  }

  E2() {
    return Math.pow(Math.E, -10 * Math.pow(this.bribeSize * -0.5, 2));
  }

  E3() {
    return Math.pow(Math.E, -10 * Math.pow(this.bribeSize * -1, 2));
  }
}
