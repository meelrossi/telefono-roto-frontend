import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CanvasDraw  from 'react-canvas-draw';

export class Draw extends Component {
  static propTypes = {
    word: PropTypes.string
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
      </div>
    )
  }
}

export default Draw
