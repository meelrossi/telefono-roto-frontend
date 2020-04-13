import React, { Component } from 'react';

import { GlobalContext } from 'contexts/GlobalContext';
import PropTypes from 'prop-types'

import './FinishedGame.scss'
class Libretita extends Component {
  propTypes = {
    libretita: PropTypes.object
  } 
  render() {
    return (
      <div className="libretita-container">
        <div className="dorgs-container">
        {
        this.props.libretita.drawings_or_guesses.map(dorg => {
          return (
            <div className="dorg" key={dorg.id}>
              {dorg.step_type === 'DRAW' && <img className="guessed-drawing" src={dorg.value}/> }
              {dorg.step_type === 'GUESS' && <span className="guessed-word">{dorg.value}</span>}
            </div>
          )
        }) 
        }
        </div>
        <span className="owner-name">Libretita de {this.props.libretita.first_player}</span>
      </div>
    )
  }
}

class FinishedGame extends Component {
  render() {
    return (
      <div className="finish-container">
        {
          this.context.game.libretitas.map(l => {
            return (
              <Libretita key={l.id} libretita={l}/>
            )
          })
        }
      </div>
    )
  }
}
export default FinishedGame;

FinishedGame.contextType = GlobalContext;