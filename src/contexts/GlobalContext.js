import React, { Component, createContext } from "react";
import PropTypes from 'prop-types';

const DEFAULT_CONTEXT = {
  username: '',
  game: { status: 'lobby' }
}

export const GlobalContext = createContext(DEFAULT_CONTEXT);

export class GlobalContextProvider extends Component {
  state = DEFAULT_CONTEXT; 

  updateUsername = username => {
    this.setState({ username })
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