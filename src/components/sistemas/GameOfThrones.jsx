// Sistema

import React from 'react';
import PropTypes from 'prop-types'
import Header from '../organismos/Header';
import Main from '../organismos/Main';

class GameOfThrones extends React.Component {

  constructor(props) {
    super(props);
    // this.props = props;
    // this.props.houses
    // this.props.characters
  }

  render() {
    return(
      <div>
        <Header />
        <Main houses={this.props.houses} characters={this.props.characters} />
      </div>
    )
  }
}

GameOfThrones.propTypes = {
  houses: PropTypes.array.isRequired,
  characters: PropTypes.array.isRequired
}

export default GameOfThrones;
