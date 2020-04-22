import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Guess.scss';

const ENTER_CODE = 13;

export class Guess extends Component {
  state = {
    guess: ''
  };

  handleFinishTurn = () => {
    const { onFinishTurn } = this.props;
    const { guess } = this.state;
    
    if(!guess.length) return;
    onFinishTurn(guess);
  }

  updateGuess = evt => {
    this.setState({ guess: evt.target.value });
  }

  handleKeyDown = evt => {
    if (evt.keyCode === ENTER_CODE) {
      this.handleFinishTurn();
    }
  }

  render() {
    const { guess } = this.state;
  
    return (
      <div className="guess-container">
        <img className="guess-draw-img" src={this.props.draw} alt="guess" />
        <input
          className="guess-input"
          placeholder="Aca escribis tu respuesta"
          onChange={this.updateGuess}
          onKeyDown={this.handleKeyDown}
        />
        <button className="guess-button" onClick={this.handleFinishTurn} disabled={!guess.length}>Terminar turno</button>
      </div>
    )
  }
}

Guess.propTypes = {
  draw: PropTypes.string,
  onFinishTurn: PropTypes.func
}

export default Guess;
