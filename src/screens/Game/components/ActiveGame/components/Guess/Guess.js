import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Guess extends Component {
  state = {
    guess: ''
  };

  handleFinishTurn = () => {
    const { onFinishTurn } = this.props;
    const { guess } = this.state;

    onFinishTurn(guess);
  }

  updateGuess = evt => {
    this.setState({ guess: evt.target.value });
  }

  render() {
    return (
      <div>
        <img src={this.props.draw} alt="guess" />
        <input placeholder={'Aca escribis tu respuesta'} onChange={this.updateGuess}></input>
        <button onClick={this.handleFinishTurn}>Enviar</button>
      </div>
    )
  }
}

Guess.propTypes = {
  draw: PropTypes.string,
  onFinishTurn: PropTypes.func
}

export default Guess;
