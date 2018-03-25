import React from 'react';
import PropTypes from 'prop-types';

class Favorito extends React.Component {
  constructor(props) {
    super(props)
    this.state = {mostrar: false}
  }

  renderStars(personaje) {
    var cantidad_estrellas = personaje.stars;
    if (cantidad_estrellas === 0) return null;

    var estrellas = [];
    for (var i = 0 ; i < cantidad_estrellas; i++) {
      estrellas.push(<img src="/img/star.png" alt="" style={{height: 30}}/>)
    }
    return estrellas;
  }

  dibujarAvatar(avatar) {
    return "/img/" + avatar;
  }

  render(){

    var self = this;

    return(
      <div className="characterElem">
        <div className="stars">
          {self.renderStars(this.props.current_personaje)}
        </div>
        <div className="imageCharacter">
          <img onClick={ () => this.props.handlerMostrar(true, this.props.current_personaje) } src={self.dibujarAvatar(this.props.current_personaje.avatar)} alt="" className="avatar2"/>
        </div>
        <div className="nameCharacter">
          <b className="bold">{this.props.current_personaje.name}</b>
          <br/>
          {this.props.current_personaje.familia}
        </div>
      </div>
    )
  }
}

Favorito.propTypes = {
  handlerMostrar: PropTypes.func.isRequired,
  current_personaje: PropTypes.object.isRequired
}

export default Favorito;
