import React, { Component } from 'react';

// Material
import Icon from '@material-ui/core/Icon';

// Estilos
import './Equipo.css';

class Equipo extends Component {

  state = {
    fav: { value: 'star' }
  }

  setFav() {
    // Respaldamos el estado existente
    const fav = { ...this.state.fav };

    // Modificamos el valor
    fav.value = fav.value === 'star' ? 'star_selected' : 'star';

    // Recargamos el estado
    this.setState({ fav });
  }

  render() {
    return (
      <div>
        <img className="team-logo" src={this.props.logo} alt={this.props.nombre} />
        <Icon onClick={ this.setFav.bind(this) } className={ this.state.fav.value }>star</Icon>
      </div>
    );
  }
}

export default Equipo;
