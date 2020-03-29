import React, { Component } from 'react';
import CanvasDraw from "react-canvas-draw";

import './Game.scss';

export default class Game extends Component {
  render() {
    const height = window.outerHeight > 550 ? 550 : window.outerHeight - 40;
    const width = window.outerWidth > 400 ? 400 : window.outerWidth - 40;
    return (
      <div className="container">
        <div className="canvas-container">
          <div className="game-info">
            <span>00:20</span>
            <button onClick={() => console.log("undo")}>
              Undo
            </button>
            <button onClick={() => console.log("clear")}>
              Clear
            </button>
          </div>
          <CanvasDraw
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
