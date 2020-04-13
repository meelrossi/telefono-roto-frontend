import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Guess.scss';

export class Guess extends Component {
  state = {
    guess: '',
    time: 60
  };

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
    const { onFinishTurn } = this.props;
    const { guess } = this.state;

    onFinishTurn(guess);
  }

  updateGuess = evt => {
    this.setState({ guess: evt.target.value });
  }

  render() {
    const { time } = this.state;

    const displayTime = `00:${`0${time}`.slice(-2)}`;
    return (
      <div className="guess-container">
        <span className="guess-timer">{displayTime}</span>
        <img className="guess-draw-img" src={this.props.draw} alt="guess" />
        <input className="guess-input" placeholder={'Aca escribis tu respuesta'} onChange={this.updateGuess}></input>
        <button className="guess-button" onClick={this.handleFinishTurn}>Terminar turno</button>
      </div>
    )
  }
}

Guess.propTypes = {
  draw: PropTypes.string,
  onFinishTurn: PropTypes.func
}

export default Guess;
