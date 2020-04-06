import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as gameService from 'services/game-service';
import { GlobalContext } from 'contexts/GlobalContext';
import { withRouter } from 'react-router-dom';

class Lobby extends Component {
  startGame = async () => {
    await gameService.startGame(this.props.match.params.id, this.context.username)
  }

  render() {
    const players = this.context.game.players;
    const isOwner = this.context.game.owner === this.context.username;
    return (
      <div>
        <span>Lobby</span>
        <ul>
          {players.map(player => <li key={player.id}>{player.username}</li>)}
        </ul>
        { isOwner && <button onClick={this.startGame}>Empezar partida</button> }
      </div>
    )
  }
}

Lobby.contextType = GlobalContext;

Lobby.propTypes = {
  match: PropTypes.object
}

export default withRouter(Lobby);
