import React, { Component } from 'react';

import { GlobalContext } from 'contexts/GlobalContext';
import PropTypes from 'prop-types'

import './FinishedGame.scss'
import DrawOrGuessCarousel from './components/DrawOrGuessCarousel';
class Libretita extends Component {
  propTypes = {
    libretita: PropTypes.object
  } 
  render() {
    const { libretita } = this.props;

    return (
      <div className="libretita-container">
        <DrawOrGuessCarousel drawingsOrGuesses={libretita.drawings_or_guesses} />
        <span className="libretita-owner-name">Libretita de {this.props.libretita.first_player}</span>
      </div>
    )
  }
}

class FinishedGame extends Component {
  render() {
    const { game } = this.context;
    return (
      <div className="finish-container">
        <span className="finish-title">Partida terminada</span>
        <div className="libretitas">
          {game.libretitas.map(l => <Libretita key={l.id} libretita={l}/>)}
        </div>
      </div>
    )
  }
}
export default FinishedGame;

FinishedGame.contextType = GlobalContext;