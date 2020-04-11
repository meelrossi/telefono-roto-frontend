import React, { Component } from 'react';

import { GlobalContext } from 'contexts/GlobalContext';
import * as gameService from 'services/game-service';
import { downloadCanvasAsPng } from 'utils/canvas';

import './ActiveGame.scss';
import Guess from './components/Guess';
import Draw from './components/Draw';

class ActiveGame extends Component {
  state = { myTurn: {} }

  clearCanvas = () => {
    this.canvas.clear();
  }

  undoCanvas = () => {
    this.canvas.undo();
  }

  exportToPng = () => {
    downloadCanvasAsPng(this.canvas.canvas.drawing);
  }

  async componentDidMount() {
    const myTurn = await gameService.getTurn(this.context.game.id, this.context.username)
    this.setState({ myTurn: myTurn.data })
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
          {this.state.myTurn.task === 'DRAW' && <Draw word={this.state.myTurn.challenge}/>}
          {this.state.myTurn.task === 'GUESS' &&  <Guess draw={this.state.myTurn.challenge}/>}
        </div>
      </div>
    );
  }
}
ActiveGame.contextType = GlobalContext;

export default ActiveGame;