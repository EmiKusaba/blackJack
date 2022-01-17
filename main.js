const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//card class

class Card {
  constructor(suit, number) {
    this.suit = suit
    this.number = number
  }

  name() {
    return `${this.number} of ${this.suit}`
  }
}

//user class
class User {
  constructor(name) {
    this.name = name
    this.cards = []
  }
}

//game class

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
        this.deck.push(new Card(suits[i], numbers[j]))
      }
    }
  }

  shuffle() {
    const getRandomInt = (max) => {
      return Math.floor(Math.random() * max)
    }

    let deck = []
    const len = this.deck.length
    for (let i = 0; i < len; i++) {
      let index = getRandomInt(this.deck.length)
      let card = this.deck[index]
      deck.push(card)
      this.deck.splice(index, 1)
    }
    this.deck = deck
  }

  deal(user) {
    let card = this.deck.pop()
    user.cards.push(card)
  }

  play() {
    this.shuffle()
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < this.users.length; j++) {
        this.deal(this.users[j])
      }
    }

    this.display()

    for(let i = 0; i < this.users.length; i++) {
      this.choice(this.users[i])
    }

    this.display()
  }

  choice(user) {
    rl.question(`User ${user.name} hit? [y/n]`, (ans) => {
      if ("y" === ans) {
        this.deal(user)
      }
    })
  }

  display() {
    for (let i = 0; i < this.users.length; i++) {
      let user = this.users[i]
      console.log(`User ${user.name}'s cards:`)
      for (let j = 0; j < user.cards.length; j++) {
        console.log(user.cards[j].name())
      }
    }
  }
}

// Main

let game = new Game()
game.play()