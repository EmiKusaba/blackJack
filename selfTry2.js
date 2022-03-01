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
  name(){
    return `${this.number}of${this.suits}`
  }

  score(aceI11){
    if(this.number === "Ace") {
      return aceIs11 ? 11 : 1
    }
    if(this.number === "K" || this.number === "Q" || this.number === "J"){
      return 10
    }
    return new Number(this.number)
  }
}

//game

