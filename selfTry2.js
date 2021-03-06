const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//user
class User {
  constructor(name, cards) {
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
  }
}
// card

class Card {
  constructor(number, suits) {
    this.number = number
    this.suits = suits
  }
  name() {
    return `${this.number}of${this.suits}`
  }

  score(aceI11) {
    if (this.number === "Ace") {
      return aceIs11 ? 11 : 1
    }
    if (this.number === "K" || this.number === "Q" || this.number === "J") {
      return 10
    }
    return new Number(this.number)
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
    let suits = ["hearts", "diamonds", "spades", "clubs"]
    for (let i = 0; i < suits.length; i++) {
      let numbers = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
      for (let j = 0; j < numbers.length; j++) {
        this.deck.push(new Card(suits[i], numbers[j]))
      }
    }
  }
  shuffle() {
    let deck = []
    const len = this.deck.length
    let getRandomInt = (max) => {
      return Math.floor(Math.random() * max);
    }
    for (let i = 0; i < len; i++) {
      let index = getRandomInt(this.deck.length)
      let card = this.deck.splice(index, 1)[0]
      deck.push(card)
    }
    this.deck = deck
  }

  deal(user) {
    let card = this.deck.pop()
    user.cards.push(card)
  }

  display() {
    console.log()

    for (let i = 0; i < this.users.length; i++) {
      let user = this.users[i]
      console.log(`User ${user.name}'s Cards'`)
      for (let j = 0; j < user.cards.length; j++) {
        console.log(`${user.cards[j].name()}`)
      }
      console.log(`score: ${user.score()}`)

      console.log()

    }
  }

  choice() {
    return new Promise((resolve) => {
      rl.question(`User ${user.name} hit? [y/n]\n`, (ans) => {
        if ("y" === ans) {
          this.deal(user)
        }
        resolve()
      })
    })

  }

  win() {
    let scores = []
    for (let i = 0; i < this.users.length; i++) {
      let user = this.users[i]
      let score = user.score()
      scores.push([score, user])
    }

    scores.sort((a, b) => {
      if (a[0] > 21) {
        return 1
      } else if (b[0] > 21) {
        return -1
      }
      return b[0] - a[0]
    })

    for (let i = 0; i < scores.length; i++) {
      const score = scores[i][0]
      const user = scores[i][1]
      if (score !== scores[0][0]) {
        break
      }
      console.log(`User ${user.name} wins!`)
    }

  }

  play() {

    this.shuffle()

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < this.users.length; i++) {
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
}

let game = new Game
game.play()