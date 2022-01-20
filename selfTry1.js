//cards
class Card {
  constructor(suit, number) {
    this.suit = suit
    this.number = number
  }
}

//users

class User {
  constructor(name, card) {
    this.name = name
    this.cards = []
  }
}

//game
class Game {
  constructor() {
    this.users = []
    for (let i = 0; i < 2; i++) {
      this.users.push(new User(i))
    }
    this.cards = []
    const suits = ["hearts", "diamonds", "spades", "clubs"]
    for (let suit in suits)
      const numbers = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    for (let number in numbers) {
      this.cards.push(new Card(suit, number))
    }
  }
  suffle() {
    const getRandomInt = (max) => {
      return Math.floor(Math.random() * max);
    }
    let deck = []
    for (let i = 0; i < this.deck.length; i++) {
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

  }
}