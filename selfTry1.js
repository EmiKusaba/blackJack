const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//card class

class Card {
  constructor(number, suit) {
    this.number = number
    this.suit = suit
  }

  name() {
    return `${this.number} of ${this.suit}`
  }
  score(aceIs11) {
    if(this.number === "Ace") {
      return aceIs11 ? 11 : 1
    }
    if(this.number === "K" || this.number === "Q" || this.number === "J") {
      return 10
    }
    return Number(this.number)
  }
}

//user class

class User {
  constructor(name, cards) {
    this.name = name
    this.cards = []
  }
  score(){
    let sums = [0]
    for(let i = 0; i < this.cards.length; i++) {
      const card = this.cards[i]
        if (card.number === "Ace") {
          sums = sums.concat(sums)
          for (let j = 0; j < sums.length; j++) {
            if (j < sums.length / 2) {
              sums[j] += card.score(false)
            } else {
              sums[j] += card.score(true)
            }
          }
        } else {
          for (let j = 0; j < sums.length; j++) {
            sums[j] += card.score()
          }
        }
}

//game class

class Game {
  constructor(users) {
    this.users = []
    for(let i = 0; i < 2; i++){
      this.users.push(new User(i))
    }


  }
}