class Person {
  constructor({ firstName, lastName, gender, age } = {}) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (typeof value === "string" && value.length > 3) {
      this._firstName = value;
    } else throw new Error("error!!");
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value === "string" && value.length > 5) {
      this._lastName = value;
    } else throw new Error("error!!");
  }

  get gender() {
    return this._gender;
  }

  set gender(value) {
    if (
      typeof value === "string" &&
      (value === "male" || value === "female" || value === "other")
    ) {
      this._gender = value;
    } else throw new Error("error!!!");
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (typeof value !== "number" && value < 10 && value > 100) {
      throw new Error("error!!!");
    }

    this._age = value;
  }

  toString() {
    return `${this._firstName} ${this._lastName}, ${this.age} years old.`;
  }
}

const person1 = {
  firstName: "Arsen",
  lastName: "Grigoryan",
  gender: "male",
  age: 29,
};

//console.log(user1.toString())

class Student extends Person {
  constructor({ persInfo, year, fee, program }) {
    super(persInfo);
    this._year = year;
    this._fee = fee;
    this._program = program;
  }

  get year() {
    return this._year;
  }
  set year(value) {
    if (typeof value === "number" && value > 0 && value <= 10) {
      this._year = value;
    } else {
      throw new Error("Error!");
    }
  }

  get fee() {
    return this._fee;
  }
  set fee(value) {
    if (typeof value === "number") {
      this._fee = value;
    } else {
      throw new Error("Error!");
    }
  }

  get program() {
    return this._program;
  }
  set program(value) {
    if (Array.isArray(value)) {
      this._program = value;
    } else {
      throw new Error("Error!");
    }
  }
  passExam(programName, grade) {
    // console.log("hi");
    let index = this.program.findIndex(
      (item) => item.programName === programName
    );
    console.log(index);

    if (index !== -1) {
      this.program[index].grade = grade;
    }

    if (this.isAllPassed()) {
      console.log(this.program);
      this.year++;
      return `Congratulations ${this.firstName}, you've passed this year!`;
    }

    return `Try again!`;
  }

  isAllPassed() {
    return this.program.every((item) => item.grade >= 50);
  }
}

const firstStudent = {
  persInfo: person1,
  year: 1,
  fee: 100000,
  program: [
    { programName: "math", grade: 60 },
    { programName: "english", grade: undefined },
  ],
};

const student1 = new Student(firstStudent);
console.log(student1.isAllPassed());
console.log(student1.passExam("english", 60));
