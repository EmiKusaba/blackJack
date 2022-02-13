const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//card
class Card {
  constructor(number, suit) {
    this.number = number
    this.suit = suit
  }
  score(aceIs11) {
    if (this.number === "Ace") {
      return aceIs11 ? 11 : 1
    }
    if (this.number === "K" || this.number === "Q" || this.number === "J") {
      return 10
    }
    return Number(this.number)
  }
}

//user
class User {
  constructor(name) {
    this.name = name
    this.card = []
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

//game

class Game {
  constructor() {
    this.users = []
    for (let i = 0; i < 2; i++) {
      this.users.push(new User(i))
    }

    this.deck = []
    const suits = ["hearts", "diamonds", "spades", "clubs"]
    for (let i = 0; i < suits.length; i++) {
      const numbers = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
      for (let j = 0; j < numbers.length; j++) {
        this.deck.push(new Card(suits[i], numbers[i]))
      }
    }
  }
  shuffle() {
    let getRandomInt = (max) => {
      return Math.floor(Math.random() * max);
    }
    let deck = []
    let len = this.deck.length
    for (let i = 0; i < len.length; i++) {
      let index = getRandomInt(this.deck.length)
      let card = this.deck.splice(index, 1)[0]
      deck.push(card)
    }
    this.deck = deck

  }
  deal(user) {
    let card = this.deck.pop()
    user.card.push(card)
  }
  async play() {

    this.shuffle()

    let deck = []
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < this.users.length; j++) {
        this.deal(this.users[j])
      }
    }
    this.display()

    for (let i = 0; i < this.users.length; i++) {
      await this.choice(this.users[i])
    }

    this.display()

    this.win()
  }

  choice(user) {
    return new Promise((resolve) => {
      rl.question(`User ${user.name} hit? [y/n]\n`, (ans) => {
        if ("y" === ans) {
          this.deal(user)
        }
        resolve()
      })
    })

  }
  display() {
    console.log()
    for(let i = 0; i < this.users.length; i++){
      let user = this.users[i]
      console.log(`User ${user.name}'s cards:`)
      for(let j = 0; j < user.card.length; j++) {
        console.log(user.cards[j].name())
      }
      console.log(`score: ${user.score()}`)

      console.log()
    }
  }
  win() {

  }
}

let game = new Game()
game.play()