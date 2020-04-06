import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import socketIOClient from 'socket.io-client';

import * as gameService from 'services/game-service';
import { GlobalContext } from 'contexts/GlobalContext';

import ActiveGame from './components/ActiveGame'
import FinishedGame from './components/FinishedGame'
import Lobby from './components/Lobby';
import JoinGame from './components/JoinGame';


class NotFound extends Component {
  render() {
    return (<span>NotFound</span>)
  }
}

class Game extends Component {
  handleGameEvent = data => {
    switch (data['type']) {
      case 'player_joined':
        this.context.addPlayer(data.content);
        break;
      case 'game_started':
        this.updateGameInfo();
        console.log(`Game started! by socketio`);
        break;
      case 'turn_ended':
        console.log(`Next turn! by socketio`);
        break;
      case 'round_ended':
        console.log(`Round ended! Next round incoming`);
        break;
      case 'game_ended':
        console.log(`Game ended!`);
        break;
    }
  }

  updateGameInfo = async () => {
    const gameId = this.props.match.params.id;
    const response = await gameService.getGame(gameId);
    this.context.setGame(response.data);
    return response;
  }

  async componentDidMount() {
    await this.updateGameInfo();
    if (this.context.username) {
      const socket = socketIOClient('http://localhost:5000');
      socket.on('game_event', data => { this.handleGameEvent(data) });
      socket.emit('join_game', { username: this.context.username, game_id: this.props.match.params.id })
    }
  }

  joinGame = async username => {
    this.context.updateUsername(username);
    const gameId = this.props.match.params.id;
    const gameInfo = await gameService.joinGame(gameId, username)
    this.context.setGame(gameInfo.data);
    const socket = socketIOClient('http://localhost:5000');
    socket.on('game_event', data => { this.handleGameEvent(data) });
    socket.emit('join_game', { username: this.context.username, game_id: gameId })
  }

  render() {
    let Component;
    console.dir(this.context.game);
    if (!this.context.username) {
      return (<JoinGame joinGame={this.joinGame}/>);
    }
    switch (this.context.game.status) {
      case 'active':
        Component = ActiveGame;
        break;
      case 'lobby':
        Component = Lobby;
        break;
      case 'finished':
        Component = FinishedGame;
        break;
      default:
        Component = NotFound;
    }
    return (
      <Component />
    )
  }
}

Game.propTypes = {
  match: PropTypes.object
}

Game.contextType = GlobalContext;

export default withRouter(Game)
