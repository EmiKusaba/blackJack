const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//card class
class Card {
  constructor(suit,number) {
    this.suit = suit
    this.number = number
  }
  name() {
    return `${this.number} of ${this.suit}`
  }
  score(aceIs11) {
    if(this.number === "Ace") {
      return aceIs11 ? 11 : 1
    }
    if(this.number === "J" || this.number === "Q" || this.number === "K") {
      return 10
    }
    return Number(this.number)
  }
}

//user class
class User {
  contructor(name) {
    this.name = name
    this.number = []
  }

}