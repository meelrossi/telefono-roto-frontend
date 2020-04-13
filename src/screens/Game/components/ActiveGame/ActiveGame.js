import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { GlobalContext } from 'contexts/GlobalContext';
import { TASKS } from 'screens/Game/constants';

import './ActiveGame.scss';
import Guess from './components/Guess';
import Draw from './components/Draw';

class ActiveGame extends Component {
  render() {
    const { onEndTurn, turn } = this.props;
    const { task, challenge } = turn;

    return (
      <div className = "container" >
        <div id='canvas-container' className="canvas-container">
          {task === TASKS.DRAW && <Draw word={challenge} onFinishTurn={onEndTurn}/>}
          {task === TASKS.GUESS &&  <Guess draw={challenge} onFinishTurn={onEndTurn}/>}
          {task === TASKS.WAIT && <span style={{color: 'white'}}>Wait, fucker</span>}
        </div>
      </div>
    );
  }
}

ActiveGame.propTypes = {
  onEndTurn: PropTypes.func,
  turn: PropTypes.object
}

ActiveGame.contextType = GlobalContext;

export default ActiveGame;
