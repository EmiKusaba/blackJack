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
   for(let i = 0; i < 2; i++) {
    this.users.push(new User[i])
   }
   let suits = ["hearts", "diamonds", "spades", "clubs"]
   for(suits in suit) {
     
   }
   let number = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
   let deck = []

  }
}