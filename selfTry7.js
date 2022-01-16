//card
class Card {
  constructor(suit, number) {
    this.suit = suit
    this.number = number
  }
}

//user
class User {
  constructor(name, card) {
    this.name = name
    this.card = card
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
    let suits = [""]
    for (let suit in suits) {
      let numbers = [""]
      for (let number in numbers) {
        this.deck.push(new Card(suit, number))
      }
    }
  }
  //shuffle
  shuffle() {
    const getRandomInt = (max) => {
      return Math.floor(Math.random() * max);
    }
    let deck = []
    let index = getRandomInt(this.deck.length)
    let card = this.deck[index]
  }


  //deal
  deal(user) {

  }

  //play
  play() {

  }
}