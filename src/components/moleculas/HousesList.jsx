import React from 'react';
import PropTypes from 'prop-types';
import House from '../atomos/House';

class HousesList extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){

    var self = this;

    return(
      <div>
        <h3>Listado de casas</h3>

        { this.props.houses.map(function(current_house) {
          return (
            <House current_house={current_house}/>
           )
        })}
      </div>
    )
  }
}

HousesList.propTypes = {
  houses: PropTypes.array.isRequired
}

export default HousesList;
