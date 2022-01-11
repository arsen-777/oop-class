"use strict";

class Account {
  constructor(id, name, balance) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }

  get fid() {
    return this.id;
  }

  set fid(value) {
    if (typeof value === "number") {
      this.id = value;
    } else {
      throw new Error("This field should be a number!");
    }
  }

  set fname(newName) {
    if (typeof newName === "string") {
      this.name = newName;
    } else {
      throw new Error("This field should be a string!");
    }
  }

  get fname() {
    return this.name;
  }

  get fbalance() {
    return this.balance;
  }

  set fbalance(value) {
    if (typeof value === "number") {
      this.balance = value;
    } else {
      throw new Error("This field should be a number!");
    }
  }
  credit(amount) {
    return (this.balance = this.balance + amount);
  }
  debit(amount) {
    if (amount < this.balance) {
      return "Amount exceeded balance";
    } else {
      return amount - this.balance;
    }
  }
  transferTo(anotherAccount, amount) {
    if (amount > this.balance) {
      return "Amount exceeded balance.";
    }
    this.debit(amount);
    return anotherAccount.credit(amount);
  }
}
let savingAcc = new Account(0, "Saving account", 2000);

let cardAcc = new Account(1, "Card account", 1000);
console.log(savingAcc);
console.log(cardAcc);
console.log(savingAcc.balance);
console.log(savingAcc.credit(400));
console.log(savingAcc.debit(9000));
console.log(savingAcc.transferTo(cardAcc, 1000));
console.log(savingAcc.balance);
console.log(cardAcc.balance); // 2000
