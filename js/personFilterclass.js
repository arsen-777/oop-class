"use strict";

const data = [
  ["Arsen Grigoryan", "1992-03-31", "Tashir"],
  ["Gurgen Isakhanyan", "1992-09-18", "Yerevan"],
  ["Armen Grigoryan", "1989-05-21", "Ashxabad"],
  ["Ani Mkrtchyan", "1989-03-13", "Sisian"],
];

class Person {
  get name() {
    return this[0];
  }
  get birth() {
    return this[1];
  }
  get city() {
    return this[2];
  }
  get age() {
    const difference = new Date() - new Date(this.birth);
    return Math.floor(difference / 31536000000);
  }
  toString() {
    return `${this.name} age is ${this.age}`;
  }
}

const query = function (person) {
  return person.name !== "" && person.age > 18 && person.city === "Tashir";
};
const queryNameAge = function (person) {
  return person.name !== "" && person.age > 30;
};

data.forEach((pers) => {
  Object.setPrototypeOf(pers, Person.prototype);
});

const res = data.filter(query);
const res2 = data.filter(queryNameAge);
console.log(res + "");
console.dir(res2);
