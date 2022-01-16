"use strict";

class Shiritori {
  constructor(name) {
    this.name = name;
    this.words = [];
  }

  play(word) {
    if (this.words.length === 0) {
      this.words.push(word);
    } else if (
      this.words[this.words.length - 1][
        this.words[this.words.length - 1].length - 1
      ] === word[0]
    ) {
      this.words.push(word);
    } else {
      console.log("game over");
    }
  }
  restart() {
    console.log("game restarted");
    this.words = [];
  }
}
const myShiritori = new Shiritori();
myShiritori.play("apple");
myShiritori.play("ear");
// myShiritori.play("rhino");
// myShiritori.play("corn");
console.log(myShiritori.words);
myShiritori.restart();
console.log(myShiritori.words);
myShiritori.play("hostess");
myShiritori.play("stash");
myShiritori.play("hostess");
console.log(myShiritori.words);
