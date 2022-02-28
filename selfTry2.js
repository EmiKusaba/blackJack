const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//user
class User {
  constructor(name, cards){
    this.name = name
    this.cards = []
  }
  score(){

  }
}

// card

class Card {
  constructor(number, suits){
    this.number = number
    this.suits = suits
  }
}

//game

