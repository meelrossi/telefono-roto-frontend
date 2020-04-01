import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

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
  compoenntDidMount() {
    console.log(`GameID: ${this.props.match.params.id}`);
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