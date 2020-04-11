import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { GlobalContext } from 'contexts/GlobalContext';

import './JoinGame.scss';

export default class JoinGame extends Component {
  updateUsername = evt => {
    const username = evt.target.value;
    this.setState({ username });
  }

  joinGame = () => {
    const { username } = this.state;
    const { joinGame } = this.props;

    joinGame(username);
  }

  render() {
    return (
      <div className="join-container">
        <div className="join-game-container">
          <h1 className="join-title">Telefono Roto</h1>
          <div className="join-input-container">
            <span className="join-username-label">Nombre de usuario</span>
            <input
              className="join-username-input"
              type='text'
              onChange={this.updateUsername}
              placeholder="Ingresar tu nombre de usuario"
            />
          </div>
          <button className="join-new-game-button" onClick={this.joinGame}>Entrar</button>
        </div>
      </div>
    )
  }
}

JoinGame.contextType = GlobalContext;

JoinGame.propTypes = {
  joinGame: PropTypes.func
}
