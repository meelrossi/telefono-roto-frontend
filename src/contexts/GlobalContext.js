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

  render() {
    return (
      <GlobalContext.Provider value={{ ...this.state, updateUsername: this.updateUsername }}>
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}
GlobalContextProvider.propTypes = { children: PropTypes.node }