import React from 'react';
import PropTypes from 'prop-types';
import Favorito from '../atomos/Favorito';
import CharacterInfo from '../moleculas/CharacterInfo';

class Favoritos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      character_seleccionado: null,
      mostrar: false
    }
  }

  handlerMostrar(mostrar, character_seleccionado) {
    this.setState({mostrar: mostrar})
    this.setState({character_seleccionado: character_seleccionado})
  }

  render() {

    var self = this;

    var modal = (this.state.mostrar === true) ? (
      <CharacterInfo character={this.state.character_seleccionado} hideModal={ this.handlerMostrar.bind(this) } />
    ) : ( <div></div> )

    return(
      <div>
        {this.props.characters.map(function(current_personaje) {
          return (
            <Favorito key={current_personaje.id} current_personaje={current_personaje} handlerMostrar={self.handlerMostrar.bind(self)} />
          )
        })}
        {modal}
      </div>
    )
  }
}

Favoritos.propTypes = {
  characters: PropTypes.array.isRequired
}

export default Favoritos
