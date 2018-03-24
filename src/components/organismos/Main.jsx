import React from 'react';
import PropTypes from 'prop-types';

import Favoritos from '../moleculas/Favoritos';
import HousesList from '../moleculas/HousesList';

class Main extends React.Component {

  constructor(props) {
    super(props);
  }




  openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
  }

  render() {

    var self = this;

    return(
      <div className="main">

        <div className="tab" style={{marginTop:"20px"}}>
          <button className="tablinks" onClick={ () => this.openTab(this, 'favoritos') } id="defaultOpen">Favoritos</button>
          <button className="tablinks" onClick={ () => this.openTab(this, 'listado_de_casas') }>Listado de Casas</button>
          <button className="tablinks" onClick={ () => this.openTab(this, 'personajes_secundarios') }>Personajes Secundarios</button>
        </div>

        <div id="favoritos" className="tabcontent">
          <Favoritos characters={this.props.characters} />
        </div>

        <div id="listado_de_casas" className="tabcontent">
          <HousesList houses={this.props.houses} />
        </div>

        <div id="personajes_secundarios" className="tabcontent">
          <h3>Personajes Secundarios</h3>
          <p>Lista vacia</p>
        </div>

      </div>
    )
  }
}


Main.propTypes = {
  houses: PropTypes.array.isRequired,
  characters: PropTypes.array.isRequired
}

export default Main;
