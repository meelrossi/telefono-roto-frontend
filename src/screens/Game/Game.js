import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as gameService from 'services/game-service';
import { GlobalContext } from 'contexts/GlobalContext';

import ActiveGame from './components/ActiveGame';
import FinishedGame from './components/FinishedGame';
import Lobby from './components/Lobby';
import JoinGame from './components/JoinGame';
import { connectToSocket } from './utils';
import { EVENTS, GAME_STATUS } from './constants';
import NotFound from 'screens/NotFound';

class Game extends Component {
  state = { turn: {} };

  async componentDidMount() {
    const gameId = this.props.match.params.id;
    await this.getGameInfo();

    const username = this.context.getUsername(gameId);
    if (username) {
      connectToSocket(username, gameId, this.handleGameEvent);

      if (this.context.game.status === 'active') this.getTurnInfo();
    }
  }

  handleGameEvent = (type, content) => {
    switch (type) {
      case EVENTS.PLAYER_JOINED:
        this.context.addPlayer(content);
        break;
      case EVENTS.GAME_STARTED:
        this.getGameInfo();
        this.getTurnInfo();
        break;
      case EVENTS.TURN_ENDED:
        break;
      case EVENTS.ROUND_ENDED:
        this.getTurnInfo();
        break;
      case EVENTS.GAME_ENDED:
        this.getGameInfo();
        break;
      default:
        break;
    }
  }

  

  joinGame = async username => {
    const { updateUsername, setGame } = this.context;
    const gameId = this.props.match.params.id;
  
    updateUsername(username);
    localStorage.setItem('userinfo', JSON.stringify({ username, gameId }));

    const gameInfo = await gameService.joinGame(gameId, username)
    setGame(gameInfo.data);

    const socket = connectToSocket(username, gameId, this.handleGameEvent);
    this.setState({ socket });
  }

  endTurn = async value => {
    const { game, username } = this.context;
    await gameService.endTurn(value, game.id, username);
  }

  getTurnInfo = async () => {
    const { username, game } = this.context;
    const turn = await gameService.getTurn(game.id, username)
    this.setState({ turn: turn.data })
  }

  getGameInfo = async () => {
    const gameId = this.props.match.params.id;
    const response = await gameService.getGame(gameId);
    this.context.setGame(response.data);
  }

  render() {
    const { username, game } = this.context;
    const { turn, loading } = this.state;

    if (!username && game.status !== GAME_STATUS.FINISHED) return <JoinGame joinGame={this.joinGame}/>;

    if (loading) return <span>Loading...</span>

    switch (game.status) {
      case GAME_STATUS.ACTIVE:
        return <ActiveGame onEndTurn={this.endTurn} turn={turn} />
      case GAME_STATUS.LOBBY:
        return <Lobby />
      case GAME_STATUS.FINISHED:
        return <FinishedGame />
      default:
        return <NotFound />
    }
  }
}

Game.propTypes = {
  match: PropTypes.object
}

Game.contextType = GlobalContext;

export default withRouter(Game)
