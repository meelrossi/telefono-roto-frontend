import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { GlobalContext } from 'contexts/GlobalContext';
import SmileIcon from 'assets/smile_draw.png';

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
          <h1 className="title">Telefono Roto</h1>
          <h3 className="join-title">Unite a la partida</h3>
          <img className="smile-draw" src={SmileIcon} alt="smile" />
          <div className="join-input-container">
            <span className="join-username-label">Nombre de usuario</span>
            <input
              className="join-username-input"
              type='text'
              onChange={this.updateUsername}
              placeholder="Ingresar tu nombre de usuario"
            />
          </div>
          <button className="second-button" onClick={this.joinGame}>Entrar</button>
        </div>
      </div>
    )
  }
}

JoinGame.contextType = GlobalContext;

JoinGame.propTypes = {
  joinGame: PropTypes.func
}
