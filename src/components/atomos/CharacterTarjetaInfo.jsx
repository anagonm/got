import React from 'react';

class CharacterTarjetaInfo extends React.Component {
  render() {
    return(
      <div className="tarjeta-info">
        <ul className="tarjeta-menu" style={{ display: "flex" }}>
          <li className="selected">Description </li>
          <li>Historia </li>
          <li>Actriz </li>
        </ul>
        <div className="justify">
          <p dangerouslySetInnerHTML={{__html: this.props.character.description }} />
        </div>
      </div>
    )
  }
}


export default CharacterTarjetaInfo;
