import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import socketIOClient from 'socket.io-client';

import { GlobalContext } from 'contexts/GlobalContext';
import ActiveGame from './components/ActiveGame'
import FinishedGame from './components/FinishedGame'
import Lobby from './components/Lobby';


class NotFound extends Component {
  render() {
    return (<span>NotFound</span>)
  }
}

class Game extends Component {
  componentDidMount() {
    console.log(`GameID: ${this.props.match.params.id}`);
    const socket = socketIOClient('http://localhost:5000');
    socket.emit('join_game', { username: this.context.username, game_id: this.props.match.params.id })
    socket.on('user_joined', data => { console.dir(data) });
    // open websocket
    // register events for updating
  }

  render() {
    let Component;
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