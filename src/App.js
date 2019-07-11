import React, {Component} from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Card from './components/Card'
import cards from './cards.json'

// function App() {
//   return (
//     <div className="App">
//       <Card />
//     </div>
//   );
// }
class App extends Component {
  // Setting this.state.cards equal to the array of cards in the JSON object
  state = {
    cards
  };
  render() {
    return (
      <Wrapper>
        {this.state.cards.map(card => (
          <Card
            id={card.id}
            name={card.name}
            image={card.image}
          />
          ))}
      </Wrapper>
    );
  }
}

export default App;
