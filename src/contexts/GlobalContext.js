import React, { Component, createContext } from "react";
import PropTypes from 'prop-types';

const DEFAULT_CONTEXT = {
  username: '',
  game: {}
}

export const GlobalContext = createContext(DEFAULT_CONTEXT);

export class GlobalContextProvider extends Component {
  state = DEFAULT_CONTEXT;

  updateUsername = username => {
    this.setState({ username })
  }

  setGame = game => {
    this.setState({ game })
  }

  addPlayer = player => {
    if (this.state.game.players.find(p => p.username === player.username)) return;
    this.setState(previousState => {
      return {
        ...previousState,
        game: { ...previousState.game, players: [...previousState.game.players, player] }
      }
    });
  }

  render() {
    return (
      <GlobalContext.Provider value={{
        ...this.state,
        updateUsername: this.updateUsername,
        setGame: this.setGame,
        addPlayer: this.addPlayer
      }}>
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}
GlobalContextProvider.propTypes = { children: PropTypes.node }