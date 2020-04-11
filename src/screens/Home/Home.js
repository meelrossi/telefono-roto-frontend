import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import * as gameService from 'services/game-service';
import { GlobalContext } from 'contexts/GlobalContext';

import './Home.scss';

class Home extends Component {
  createNewGame = async () => {
    const response = await gameService.createNewGame(this.context.username);
    const gameId = response.data.id;
    const userinfo = { username: this.context.username, gameId: gameId }
    localStorage.setItem('userinfo', JSON.stringify(userinfo));
    this.props.history.push(`/game/${gameId}`);
  }

  updateUsername = evt => {
    this.context.updateUsername(evt.target.value);
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
          <button className="home-new-game-button" onClick={this.createNewGame}>Crear nueva partida</button>
        </div>
      </div>
    );
  }
}

Home.contextType = GlobalContext;

Home.propTypes = {
  history: PropTypes.object
}
export default withRouter(Home);