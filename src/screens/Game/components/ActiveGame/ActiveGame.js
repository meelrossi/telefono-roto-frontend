import React, { Component } from 'react';
import CanvasDraw from "react-canvas-draw";

import { downloadCanvasAsPng } from 'utils/canvas';

import './ActiveGame.scss';

class ActiveGame extends Component {
  clearCanvas = () => {
    this.canvas.clear();
  }

  undoCanvas = () => {
    this.canvas.undo();
  }

  exportToPng = () => {
    downloadCanvasAsPng(this.canvas.canvas.drawing);
  }

  render() {
    const height = window.outerHeight > 550 ? 550 : window.outerHeight - 40;
    const width = window.outerWidth > 400 ? 400 : window.outerWidth - 40;
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
    );
  }
}

export default ActiveGame