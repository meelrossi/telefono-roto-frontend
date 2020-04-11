import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Guess extends Component {
  static propTypes = {
    draw: PropTypes.string,
    onFinishTurn: PropTypes.func
  }

  handleFinishTurn = () => {
    this.props.onFinishTurn(this.state.guess);
  }

  updateGuess = evt => {
    this.setState({ guess: evt.target.value });
  }

  render() {
    return (
      <div>
        <img src={this.props.draw}></img>
        <input placeholder={'Aca escribis tu respuesta'} onChange={this.updateGuess}></input>
        <button onClick={this.handleFinishTurn}>Enviar</button>
      </div>
    )
  }
}

export default Guess;
