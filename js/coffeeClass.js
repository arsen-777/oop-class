"use strict";

class CoffeeShop {
  constructor(name) {
    this.name = name;
    this.menu = [];
    this.orders = [];
  }

  addItems(item) {
    this.menu.push(...item);
  }

  addOrder(item) {
    let isExist = false;
    this.menu.forEach((e) => {
      if (item === e.name) {
        this.orders.push(e);
        isExist = true;
      }
    });

    if (!isExist) {
      console.log(`${item} is currently unavailable!`);
    }
  }

  listOrders() {
    console.log("List Orders = ", this.orders);
  }

  dueAmount() {
    const totalPrice = this.orders.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
    console.log("Total Price = ", totalPrice);
  }
  cheapestItem() {
    const cheapestItemName = this.menu.reduce((aggr, item) => {
      if (aggr < item.price) {
        return item.price;
      }
      return item.name;
    }, 0);
    console.log(cheapestItemName);
  }

  drinksOnly() {
    const drinkOnly = this.menu
      .filter((item) => {
        if (item.type === "drinck") {
          return item.name;
        }
      })
      .reduce(function (accl, curValue) {
        accl.push(curValue.name);
        return accl;
      }, []);
    console.log(drinkOnly);
  }
  foodOnly() {
    const foodOnly = this.menu
      .filter((item) => {
        if (item.type === "food") {
          return item.name;
        }
      })
      .reduce(function (accl, curValue) {
        accl.push(curValue.name);
        return accl;
      }, []);
    console.log(foodOnly);
  }

  fulfillOrder() {
    if (this.orders.length === 0) {
      console.log("All orders have been fulfilled!");
    } else {
      let readyItem = this.orders.shift();
      console.log(`${readyItem.name} is ready!`);
    }
  }
}

class Item {
  constructor(name, type, price) {
    this.name = name;
    this.type = type;
    this.price = price;
  }
}

const pepsi = new Item("pepsi", "drinck", 650);
const milk = new Item("milk", "drinck", 450);
const kebab = new Item("kebab", "food", 1100);
const orax = new Item("orax", "drinck", 2000);
const xash = new Item("xash", "food", 3000);

const coffee = new CoffeeShop("Pele");

coffee.addItems([pepsi, milk, kebab, orax, xash]);

coffee.addOrder("moxito");
coffee.addOrder("pepsi");
coffee.addOrder("milk");
coffee.addOrder("xash");

coffee.listOrders();

coffee.fulfillOrder();
coffee.listOrders();

coffee.dueAmount();
coffee.cheapestItem();
coffee.drinksOnly();
coffee.foodOnly();
