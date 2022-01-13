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
    this.deck = []
    let numbers = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    for (let number in numbers) {
      let suits = ["hearts", "diamonds", "spades", "clubs"]
      for (let suit in suits) {
        this.deck.push(new Card(suit,number))
      }
    }
  }
  //shuffle
  suffle(){
    const getRandomInt = (max) => {
      return Math.floor(Math.random() * max);
    }
    let deck = []
    for(let i = 0; i < this.deck.length; i++){
    let index = getRandomInt(this.deck.length)
    let card = this.deck[index]
  }
  }
  //deal
  deal(){

  }

  //play
  play(){

  }
}