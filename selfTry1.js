const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//card class

class Card {
  constructor(number, suit) {
    this.number = number
    this.suit = suit
  }

  name() {
    return `${this.number} of ${this.suit}`
  }
  score(aceIs11) {
    if(this.number === "Ace") {
      return aceIs11 ? 11 : 1
    }
    if(this.number === "K" || this.number === "Q" || this.number === "J") {
      return 10
    }
    return Number(this.number)
  }
}

//user class

class User {
  constructor(name, card) {
    this.name = name
    this.card = []
  }
  score(

  )
}

//game class