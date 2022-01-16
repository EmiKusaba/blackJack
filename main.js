//card class

class Card {
  constructor(suit, number) {
    this.suit = suit
    this.number = number
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
    for (let suit in suits) {
      const numbers = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
      for (let number in numbers) {
        this.deck.push(new Card(suit, number))
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
    for(let i = 0; i < 2; i++) {
      for(let j = 0; j < this.users.length; j++) {
        this.deal(this.users[j])
      }
    }
  }
}