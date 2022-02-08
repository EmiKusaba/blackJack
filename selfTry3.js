const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//card
class Card {
  constructor(number, suit){
  this.number = number
  this.suit = suit
  }
}

//user
class User {
  constructor(name) {
    this.name  = name
    this.card = []
  }
  score() {

  }
}

//game

class Game {
  constructor() {
    this.users = []
    for(let i = 0; i < 2; i++){
      this.users.push(new User[i])
    }
  }
  shuffle(){

  }
  deal(){

  }
  play() {

  }
}