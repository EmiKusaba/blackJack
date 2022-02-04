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
    let sums = [0]
    for (let i = 0; i < this.cards.length; i++) {
      let card = this.card[i]
      if (card === "Ace") {

      }
    }
  }
}

//card
class Card {
  constructor(number, suit) {
    this.number = number
    this.suit = suit
  }
  name() {
    return `${this.number} of ${this.suit}`
  }

  score(aceIs11) {
    if (this.number === "Ace") {
      return aceIs11 ? 11 : 1
    }
    if (this.number === "K" || this.number === "Q" || this.number === "J") {
      return 10
    }
    return Number(this.number)
  }
}

//game
class Game {
  constructor() {
    this.users = []
    for (let i = 0; i < 2; i++) {
      this.users.push(new User(i))
    }
    this.deck = []
    const suits = ["hearts", "diamonds", "spades", "clubs"]
    for (let i = 0; i < suits.length; i++) {
      const numbers = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
      for (let j = 0; j < numbers.length; j++) {
        this.desk.push(new Card(suits[i], numbers[j]))
      }
    }
  }
  shuffle() {
    
  }
  deal(user) {

  }
  play() {

  }
}