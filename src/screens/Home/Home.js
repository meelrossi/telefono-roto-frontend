import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import * as gameService from 'services/game-service';
import { GlobalContext } from 'contexts/GlobalContext';
import SheepIcon from 'assets/sheep_draw.png';
import OwlIcon from 'assets/owl_draw.png';
import HashIcon from 'assets/hash_draw.png';
import HouseIcon from 'assets/house_draw.png';
import CoronavirusIcon from 'assets/coronavirus_draw.png';

import './Home.scss';

const ENTER_CODE = 13;

class Home extends Component {
  createNewGame = async () => {
    const { username } = this.context;

    if (!username) return;

    const response = await gameService.createNewGame(username);
    const gameId = response.data.id;
    const userinfo = { username: username, gameId: gameId }
    localStorage.setItem('userinfo', JSON.stringify(userinfo));
    this.props.history.push(`/game/${gameId}`);
  }

  updateUsername = evt => {
    this.context.updateUsername(evt.target.value);
  }

  handleKeyDown = evt => {
    if (evt.keyCode === ENTER_CODE) {
      this.createNewGame();
    }
  }

  render() {
    const { username } = this.context;
    return (
      <div className="home-container">
        <div className="home-game-container">
          <img className="sheep-draw" src={SheepIcon} alt="sheep" />
          <img className="owl-draw" src={OwlIcon} alt="owl" />
          <img className="house-draw" src={HouseIcon} alt="house" />
          <img className="hash-draw" src={HashIcon} alt="hash" />
          <img className="coronavirus-draw" src={CoronavirusIcon} alt="coronavirus" />
          <h1 className="home-title">Telefono Roto</h1>
          <div className="home-input-container">
            <span className="home-username-label">Nombre de usuario</span>
            <input
              className="home-username-input"
              type='text'
              onChange={this.updateUsername}
              placeholder="Ingresar tu nombre de usuario"
              onKeyDown={this.handleKeyDown}
            />
          </div>
          <button
            className="base-button"
            onClick={this.createNewGame}
            disabled={!username}
          >
            Crear nueva partida
          </button>
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