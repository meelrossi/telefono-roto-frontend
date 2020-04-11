import React, { Component } from 'react';

import { GlobalContext } from 'contexts/GlobalContext';
import * as gameService from 'services/game-service';

import './ActiveGame.scss';
import Guess from './components/Guess';
import Draw from './components/Draw';

class ActiveGame extends Component {
  state = { myTurn: {} }

  async componentDidMount() {
    const myTurn = await gameService.getTurn(this.context.game.id, this.context.username)
    this.setState({ myTurn: myTurn.data })
  }

  endTurn = async value => {
    await gameService.endTurn(value, this.context.game.id, this.context.username);
    // Maybe update to next turn?
    // Listen for event?
  }

  render() {
    console.log(this.state.myTurn)
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
          {this.state.myTurn.task === 'DRAW' && <Draw word={this.state.myTurn.challenge} onFinishTurn={this.endTurn}/>}
          {this.state.myTurn.task === 'GUESS' &&  <Guess draw={this.state.myTurn.challenge} onFinishTurn={this.endTurn}/>}
        </div>
      </div>
    );
  }
}
ActiveGame.contextType = GlobalContext;

export default ActiveGame;