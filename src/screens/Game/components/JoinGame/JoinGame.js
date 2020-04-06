import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { GlobalContext } from 'contexts/GlobalContext';

export default class JoinGame extends Component {
  updateUsername = evt => {
    this.setState({ username : evt.target.value })
  }

  joinGame = () => {
    this.props.joinGame(this.state.username);
  }

  render() {
    return (
      <div className="home-container">
        <div className="home-game-container">
          <h1 className="home-title">Telefono Roto</h1>
          <div className="home-input-container">
            <span className="home-username-label">Nombre de usuario</span>
            <input className="home-username-input" type='text' onChange={this.updateUsername} placeholder="Ingresar tu nombre de usuario" />
          </div>
          <button className="home-new-game-button" onClick={this.joinGame}>Entrar</button>
        </div>
      </div>
    )
  }
}

JoinGame.contextType = GlobalContext;

JoinGame.propTypes = {
  joinGame: PropTypes.func
}