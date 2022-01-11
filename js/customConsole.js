"use strict";

class Console {
  constructor(string) {
    this.string = string;
  }
  log(...args) {
    const result = args.reduce((acc, val) => {
      acc +=
        typeof val === "string" || typeof val === "number"
          ? val
          : JSON.stringify(val);
      return acc;
    }, "");
    return `${this.string} : ${result}`;
  }
}

const myConsole = new Console("Regular");
const fancyConsole = new Console("Fancy");
// console.log(myConsole.log("ok : ", 1, 2, 3));
console.log(myConsole.log([0, 1, 2, 3])); // "Regular: [0,1,2,3]"
console.log(fancyConsole.log({ a: 1, b: 2 })); // "Fancy: {a:1, b:2}"
