import React from 'react';

import './CharacterResume.scss'

class CharacterResumen extends React.Component {


  dibujarAvatar(avatar) {
    return "/img/" + avatar;
  }

  render() {
    return(
      <div className="characterResume" style={{display: "flex"}}>
        <div className="" style={{marginRight: 10}}>
          <img src={this.dibujarAvatar(this.props.character.avatar)} className="avatar" alt=""/>
        </div>
        <div className="characterInfo">
          <p className="bold">{this.props.character.name}</p>
          <p><b>Alias:</b> {this.props.character.alias}</p>
          <p><b>Nacimiento:</b> {this.props.character.nacimiento}</p>
          <p><b>Familia:</b> {this.props.character.familia}</p>
        </div>

      </div>
    )
  }
}


export default CharacterResumen;
