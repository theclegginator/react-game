import React, {Component} from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Card from './components/Card'
import Header from './components/Header'
import Scorecard from "./components/Scorecard";

const cards = [
  {
      "id": 1,
      "image": require("./images/sonic.png"),
      "name": "Sonic the Hedgehog"
  },
  {
      "id": 2,
      "image": require("./images/link.png"),
      "name": "Link"
  },
  {
      "id": 3,
      "image": require("./images/mario.png"),
      "name": "Mario"
  },
  {
      "id": 4,
      "image": require("./images/luigi.png"),
      "name": "Luigi"
  },
  {
      "id": 5,
      "image": require("./images/megaman.jpeg"),
      "name": "Megaman"
  },
  {
      "id": 6,
      "image": require("./images/kirby.png"),
      "name": "Kirby"
  },
  {
      "id": 7,
      "image": require("./images/pikachu.jpg"),
      "name": "Pikachu"
  },
  {
      "id": 8,
      "image": require("./images/yoshi.png"),
      "name": "Yoshi"
  },
  {
      "id": 9,
      "image": require("./images/donkeykong.jpg"),
      "name": "Donkey Kong"
  },
  {
      "id": 10,
      "image": require("./images/ghost.png"),
      "name": "Pacman Ghost"
  },
  {
      "id": 11,
      "image": require("./images/bowser.png"),
      "name": "Bowser"
  },
  {
      "id": 12,
      "image": require("./images/peach.png"),
      "name": "Princess Peach"
  },
]

class App extends Component {
  // Setting this.state.cards equal to the array of cards in the JSON object
  guesses = [];

  state = {
    cards,
    score: 0,
    // guesses: []
  };

  randomizeCards = (cards) => {
    // use the Durstenfeld Shuffle algo to shuffle the cards array into a new order
    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let tempArray = cards[i];
      cards[i] = cards[j];
      cards[j] = tempArray;
    }
    // Now that we have shuffled all the cards around, set the state to trigger a re-render
    this.setState({cards: cards});
  }

  checkGuess = (id) => {
    // console.log(id)
    // first, check to see if the id has already been guessed. If it has, the score will reset.
    if (this.guesses.includes(id)) {
      this.guesses=[]; // we also clear out the guesses array to reset the round.
      this.setState({score: 0});
    }
    // if the guess had not already been guessed, we'll add it to the guesses array and increase the score.
    else {
      this.guesses.push(id);
      this.setState({score: this.state.score + 1});
    }
    // regardless of the outcome, we will randomize the array again.
    this.randomizeCards(cards);
  }
  

  
  render() {
    return (
      <div>
      <Header /> 
      <Wrapper>
        <Scorecard score={this.state.score} />
      </Wrapper>
      <Wrapper>
        {this.state.cards.map(card => (
          <Card
            checkGuess={this.checkGuess}
            key={card.id}
            id={card.id}
            name={card.name}
            image={card.image}
          />
          ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
