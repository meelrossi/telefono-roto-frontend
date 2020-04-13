import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CanvasDraw  from 'react-canvas-draw';

import { downloadCanvasAsPng } from 'utils/canvas';

import './Draw.scss';

export class Draw extends Component {
  state = {
    time: 5
  }

  componentDidMount() {
    setInterval(() => {
      const { time } = this.state;
      if (time > 0) {
        this.setState({ time: time - 1 })
      } else {
        this.handleFinishTurn()
      }
    }, 1000)
  }

  handleFinishTurn = () => {
    const base64Canvas = this.canvas.canvas.drawing.toDataURL();
    this.props.onFinishTurn(base64Canvas);
  };

  exportToPng = () => {
    downloadCanvasAsPng(this.canvas.canvas.drawing);
  }

  undoCanvas = () => this.canvas.undo();

  clearCanvas = () => this.canvas.clear();

  render() {
    const HEIGHT = window.outerHeight > 550 ? 550 : window.outerHeight - 40;
    const WIDTH = window.outerWidth > 400 ? 400 : window.outerWidth - 40;

    const { time } = this.state;

    const displayTime = `00:${`0${time}`.slice(-2)}`;

    return (
      <div className="game-draw-container">
        <span className="game-word">{this.props.word}</span>
        <div className="game-info">
          <span className="timer">{displayTime}</span>
          <div className='button-container'>
          <button className="action-button" onClick={this.undoCanvas}>
            Deshacer
          </button>
          <button className="action-button" onClick={this.clearCanvas}>
            Borrar
          </button>
          <button className="action-button" onClick={this.exportToPng}>
            Exportar a .png
          </button>
        </div>
        </div>
        <CanvasDraw
          ref={canvasDraw => this.canvas = canvasDraw}
          hideGrid
          brushRadius={3}
          lazyRadius={0}
          canvasWidth={WIDTH}
          canvasHeight={HEIGHT}
        />
        <button className="draw-send" onClick={this.handleFinishTurn}>Terminar turno</button>
      </div>
    )
  }
}

Draw.propTypes = {
  word: PropTypes.string,
  onFinishTurn: PropTypes.func
}

export default Draw;
