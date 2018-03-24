import React, { Component } from 'react';
import './App.css';
import './styles/styles.scss';
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
