import React, { Component } from 'react';
import './styles/main.scss';
import Data from './data/Data';
import GameOfThrones from './components/sistemas/GameOfThrones';

class App extends Component {
  render() {
    return (
      <GameOfThrones houses={Data.houses} characters={Data.characters} />
    );
  }
}

export default App;
