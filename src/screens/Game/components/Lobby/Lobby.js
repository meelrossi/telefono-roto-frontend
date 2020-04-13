import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as gameService from 'services/game-service';
import { GlobalContext } from 'contexts/GlobalContext';
import { ICONS } from 'utils/icons';

import './Lobby.scss';

class Lobby extends Component {
  startGame = async () => {
    const { username } = this.context;
    const gameId = this.props.match.params.id;
  
    await gameService.startGame(gameId, username);
  }

  copyToClipboard = () => {
    const copyInput = document.getElementById("url-input");
    copyInput.select();
    copyInput.setSelectionRange(0, 99999);

    document.execCommand("copy");
  }

  render() {
    const { game, username } = this.context;
    const { players, owner } = game;

    const isOwner = owner === username;
    const waitingText = isOwner ? 'Esperando que inicies la partida' : `Esperando que ${owner} incie la partida`;
    return (
      <div className="container">
        <div className="lobby-container">
          <div className="owner-container">
            <span className="owner-text">{waitingText}</span>
            <span className="loader" />
          </div>
          <span className="invite-title">En la partida</span>
          <ul className="users-container">
            {players.map(player => (
              <li key={player.id} className="user-container">
                <span>{player.username}</span>
                <img className="user-icon" src={ICONS[Math.floor(Math.random() * ICONS.length)]} />
              </li>
            ))}
          </ul>
          <div className="invite-container">
            <span className="invite-title">Invita otros amigos</span>
            <div>
              <input id="url-input" className="url-input" value={window.location.href} />
              <button className="copy-button" onClick={this.copyToClipboard}>Copy</button>
            </div>
          </div>
          {isOwner && <button className="base-button" onClick={this.startGame}>Empezar partida</button>}
        </div>
      </div>
    )
  }
}

Lobby.contextType = GlobalContext;

Lobby.propTypes = {
  match: PropTypes.object
}

export default withRouter(Lobby);
