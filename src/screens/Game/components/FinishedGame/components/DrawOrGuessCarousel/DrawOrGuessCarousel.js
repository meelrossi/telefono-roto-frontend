import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { getIconWithString } from 'utils/icons';

import './DrawOrGuessCarousel.scss';
import { GlobalContext } from 'contexts/GlobalContext';

export default class DrawOrGuessCarousel extends PureComponent {
  state = {
    currentIndex: 0
  };

  previousElement = () => {
    const { currentIndex } = this.state;
    if (currentIndex > 0) {
      this.setState({ currentIndex: currentIndex - 1 });
    }
  }

  nextElement = () => {
    const { currentIndex } = this.state;
    const { drawingsOrGuesses } = this.props;

    if (currentIndex < (drawingsOrGuesses.length - 1)) {
      this.setState({ currentIndex: currentIndex + 1 });
    }
  }

  render() {
    const { drawingsOrGuesses } = this.props;
    const { currentIndex } = this.state;
    const { game } = this.context;

    const drawOrGuess = drawingsOrGuesses[currentIndex];

    return (
      <div className="draw-guess-container">
        <button className="navigation-button" onClick={this.previousElement}>{'<'}</button>
        {drawOrGuess.step_type === 'DRAW' && (
          <div className="carousel-drawing-container">
            <img src={drawOrGuess.value} alt='drawing' className="carousel-drawing" />
          </div>
        )}
        {drawOrGuess.step_type === 'GUESS' && (
          <div className={`carousel-guess-container ${currentIndex === 0 && 'first'}`}>
            <span className="carousel-guess">{drawOrGuess.value}</span>
          </div>
        )}
        {currentIndex !== 0 && (
          <div className="draw-guess-user-container">
            <span className="draw-guess-username">{drawOrGuess.player}</span>
            <img className="draw-guess-icon" src={getIconWithString(`${drawOrGuess.player}${game.id}`)} />
          </div>
        )}
        <button className="navigation-button" onClick={this.nextElement}>{'>'}</button>
      </div>
    )
  }
}

DrawOrGuessCarousel.contextType = GlobalContext;

DrawOrGuessCarousel.propTypes = {
  drawingsOrGuesses: PropTypes.array
}
