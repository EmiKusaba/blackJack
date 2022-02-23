const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//card class

class Card {
  constructor(suit, number) {
    this.suit = suit
    this.number = number
  }

  name() {
    return `${this.number} of ${this.suit}`
  }

  score(aceIs11) {
    if (this.number === "Ace") {
      return aceIs11 ? 11 : 1
    }

    if (this.number === "J" || this.number === "Q" || this.number === "K") {
      return 10
    }

    return Number(this.number)
  }
}

//User

class User {
  constructor(name) {
    this.name = name
    this.cards = []
  }
  score() {
    let sums = [0]

    for (let i = 0; i < this.cards.length; i++) {
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

    sums.sort((a, b) => {
      if (a > 21) {
        return 1
      } else if (b > 21) {
        return -1
      }

      return b - a
    })

    return sums[0]
  }
}
//Game

class Game {
  constructor(){
    this.users = []
    for(let i = 0; i < 2; i++){
    this.users.push(new User(i))
    }
    this.deck = []
    let suits = ["hearts", "diamonds", "spades", "clubs"]
    for(let i = 0; i < suits.length; i++){
      let numbers = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
      for (let j = 0; j < numbers.length; i++) {
        this.deck.push(new Card(suits[i],numbers[j]))
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
      // let card = this.deck[index]
      let card = this.deck.splice(index, 1)[0]
      deck.push(card)
    }
    this.deck = deck
  }
  deal() {

  }

  play() {

  }
  
}