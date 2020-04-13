import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { GlobalContext } from 'contexts/GlobalContext';
import { TASKS } from 'screens/Game/constants';

import './ActiveGame.scss';
import Guess from './components/Guess';
import Draw from './components/Draw';
import { ICONS } from 'utils/icons';

class ActiveGame extends Component {
  render() {
    const { onEndTurn, turn } = this.props;
    const { task, challenge } = turn;

    return (
      <div className="active-game-container">
        <div id='canvas-container' className="canvas-container">
          {task === TASKS.DRAW && <Draw word={challenge} onFinishTurn={onEndTurn}/>}
          {task === TASKS.GUESS &&  <Guess draw={challenge} onFinishTurn={onEndTurn}/>}
          {task === TASKS.WAIT && <span style={{color: 'white'}}>Wait, fucker</span>}
        </div>
        <ul className="players-done-container">
          {this.props.playersDone.map(username => (
            <li key={username} className="user-container">
              <span>{username}</span>
              <img className="user-icon" alt={username} src={ICONS[Math.floor(Math.random() * ICONS.length)]} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ActiveGame.propTypes = {
  onEndTurn: PropTypes.func,
  turn: PropTypes.object,
  playersDone: PropTypes.array
}

ActiveGame.contextType = GlobalContext;

export default ActiveGame;
