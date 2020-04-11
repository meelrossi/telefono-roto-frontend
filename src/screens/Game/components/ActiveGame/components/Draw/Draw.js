import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CanvasDraw  from 'react-canvas-draw';

import { downloadCanvasAsPng } from 'utils/canvas';

export class Draw extends Component {
  static propTypes = {
    word: PropTypes.string,
    onFinishTurn: PropTypes.func
  }

  handleFinishTurn = () => {
    this.props.onFinishTurn(this.canvas.canvas.drawing.toDataURL());
  }

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
      <div>
        <span style={{color: 'white'}}>{this.props.word}</span>
        <CanvasDraw
          ref={canvasDraw => this.canvas = canvasDraw}
          hideGrid
          brushRadius={3}
          lazyRadius={0}
          canvasWidth={width}
          canvasHeight={height}
        />
        <button onClick={this.handleFinishTurn}>Enviar</button>
      </div>
    )
  }
}

export default Draw
