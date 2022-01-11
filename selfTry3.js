//card

class Card {
  constructor(suit, number) {
    this.suit = suit
    this.number = number
  }
}

//user
class User {
  constructor(name) {
    this.name = name
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
    for (let suit in suits) {
      const numbers = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
      for(let number in numbers) {
        this.deck.push(new Card(suit, number))
      }
    }
  }

  shuffle(){
    const getRandomInt = (max) => {
      return Math.floor(Math.random() * max)
    }
    let deck = []
    for(let i = 0; i < this.deck.length; i++){
    let index = getRandomInt(this.deck.length)
    let card = this.deck[index]

    }
  }

  deal(user){

  }

  play() {

  }
}