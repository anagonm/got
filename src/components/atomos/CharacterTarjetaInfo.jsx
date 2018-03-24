import React from 'react';

import './CharacterTarjetaInfo.scss'

class CharacterTarjetaInfo extends React.Component {
  render() {
    return(
      <div className="">

        <div style={{ display: "flex" }}>
          <div className="margin-rigth-40" style={{borderBottom: "2px solid green"}}>Description </div>
          <div className="margin-rigth-40">Historia </div>
          <div className="margin-rigth-40">Actriz </div>
        </div>

        <div className="info justify" style={{marginTop: 20, width: 500}}>
          <p dangerouslySetInnerHTML={{__html: this.props.character.description }} />
        </div>

      </div>
    )
  }
}


export default CharacterTarjetaInfo;
