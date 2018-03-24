import React from 'react';

// import './CharacterInfo.scss'
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
      <div className="characterInfo" style={{ float: "right", position: "absolute", background: "white", top:0, right: 0, marginRight: 10, height: "100%", boxShadow: "-10px 0px 40px 1px #aaaaaa", paddingLeft: 10}}>
        <div style={{float: "rigth"}} onClick={() => this.props.hideModal(false, null)}>X</div>
        <CharacterResumen character={this.state.character} />
        <CharacterTarjetaInfo character={this.state.character} />
      </div>
    )
  }
}


export default CharacterInfo;
