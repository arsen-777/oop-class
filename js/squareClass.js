"use strict";

class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  toString() {
    return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;
  }
  get area() {
    return this.width * this.height;
  }
  set side(value) {
    this.width = value;
    this.height = value;
  }
  get side() {
    if (this.width !== this.height) throw new Error("not a Square");
  }
}

class Square extends Rect {
  constructor({ x, y, width, height } = {}) {
    super(x, y, width, height);
    this.width = width;
    this.height = height;
  }
}

const p1 = { x: 10, y: 20, width: 50, height: 50 };
const squareOne = new Square(p1);
// console.log(squareOne.toString());
const p2 = new Rect(10, 20, 50, 100);
console.log(p2.area);
p2.side = 150;
console.log(p2.side);
console.log(p2.area);
