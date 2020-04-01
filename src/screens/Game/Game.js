import React, { Component } from 'react';
import CanvasDraw from "react-canvas-draw";

import './Game.scss';

export default class Game extends Component {

  clearCanvas = () => {
    this.canvas.clear();
  }

  undoCanvas = () => {
    this.canvas.undo();
  }

  render() {
    const height = window.outerHeight > 550 ? 550 : window.outerHeight - 40;
    const width = window.outerWidth > 400 ? 400 : window.outerWidth - 40;
    return (
      <div className="container">
        <div id='canvas-container' className="canvas-container">
          <div className="game-info">
            <div className='button-container'>
              <button className="action-button" onClick={this.undoCanvas}>
                Undo
              </button>
              <button className="action-button"  onClick={this.clearCanvas}>
                Clear
              </button>
            </div>
            
            <span className="timer">00:20</span>
          </div>
          <CanvasDraw
            ref={canvasDraw => this.canvas = canvasDraw}
            hideGrid
            brushRadius={3}
            lazyRadius={0}
            canvasWidth={width}
            canvasHeight={height}
          />
        </div>
      </div>
    )
  }
}  
