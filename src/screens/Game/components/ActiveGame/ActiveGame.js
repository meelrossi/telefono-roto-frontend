import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { GlobalContext } from 'contexts/GlobalContext';

import './ActiveGame.scss';
import Guess from './components/Guess';
import Draw from './components/Draw';

class ActiveGame extends Component {
  static propTypes = { onEndTurn: PropTypes.func, turn: PropTypes.object }

  render() {
    return (
      <div className = "container" >
        <div id='canvas-container' className="canvas-container">
          <div className="game-info">
            <div className='button-container'>
              <button className="action-button" onClick={this.undoCanvas}>
                Undo
              </button>
              <button className="action-button" onClick={this.clearCanvas}>
                Clear
              </button>
              <button className="action-button" onClick={this.exportToPng}>
                To .png
              </button>
            </div>
            <span className="timer">00:20</span>
          </div>
          {this.props.turn.task === 'DRAW' && <Draw word={this.props.turn.challenge} onFinishTurn={this.props.onEndTurn}/>}
          {this.props.turn.task === 'GUESS' &&  <Guess draw={this.props.turn.challenge} onFinishTurn={this.props.onEndTurn}/>}
          {this.props.turn.task === 'WAIT' && <span style={{color: 'white'}}>Wait, fucker</span>}
        </div>
      </div>
    );
  }
}
ActiveGame.contextType = GlobalContext;

export default ActiveGame;