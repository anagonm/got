import React from 'react';
import CharacterResumen from '../atomos/CharacterResumen';
import CharacterTarjetaInfo from '../atomos/CharacterTarjetaInfo';

class CharacterInfo extends React.Component {

  constructor(props) {
    super(props)
    this.state = { character: this.props.character }
  }

  componentWillReceiveProps(newProps) {
    this.setState({character: newProps.character })
  }

  render() {
    var self = this;
    return(
      <div className="characterInfo">
        <div onClick={() => this.props.hideModal(false, null)}><span className="close-modal">X</span></div>
        <CharacterResumen character={this.state.character} />
        <CharacterTarjetaInfo character={this.state.character} />
      </div>
    )
  }
}

export default CharacterInfo;
