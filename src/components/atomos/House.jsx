import React from 'react';
import PropTypes from 'prop-types';

class House extends React.Component {
  constructor(props) {
    super(props)
  }

  dibujarEscudoCasa(casa) {
    var escudo = "/img/h" + casa.id + ".png";
    return (<img src={escudo} alt="" className="avatar2"/>)
  }

  render(){

    var self = this;

    return(
      <div className="characterElem">
        <div className="house-img">
          {self.dibujarEscudoCasa(this.props.current_house)}
        </div>
        <div className="house-name">
          Nombre de la Casa: <b className="">{this.props.current_house.name}</b>
        </div>
      </div>
    )
  }
}


House.propTypes = {
  current_house: PropTypes.array.isRequired
}

export default House;
