const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//user
class User {
  constructor(name) {
    this.name = name
    this.cards = []
  }
  score() {

  }
}

//card
class Card {
  constructor(number, suit) {
    this.number = number
    this.suit = suit
  }

}

//game
class Game {
  constructor() {
    this.users = []
    
  }
  shuffle() {

  }
  deal() {

  }
  play() {

  }
}