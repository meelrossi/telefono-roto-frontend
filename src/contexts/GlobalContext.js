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

  getUsername = gameId => {
    if (this.state.username) return this.state.username;
    
    const storageUserInfo = JSON.parse(localStorage.getItem('userinfo')) || {};
  
    console.log(storageUserInfo)
    // eslint-disable-next-line
    if (storageUserInfo.username && storageUserInfo.gameId == gameId) {
      this.setState({ username: storageUserInfo.username });
      return storageUserInfo.username;
    }
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
        addPlayer: this.addPlayer,
        getUsername: this.getUsername
      }}>
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}
GlobalContextProvider.propTypes = { children: PropTypes.node }