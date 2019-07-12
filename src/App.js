import React, {Component} from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Card from './components/Card'
import Header from './components/Header'
import Scorecard from "./components/Scorecard";
// import cards from './cards.json'

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
  state = {
    cards
  };
  render() {
    return (
      <div>
      <Header /> 
      <Wrapper>
        <Scorecard score={12}/>
      </Wrapper>
      <Wrapper>
        {this.state.cards.map(card => (
          <Card
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
