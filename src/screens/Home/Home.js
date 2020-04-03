import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import * as gameService from 'services/game-service';
import { GlobalContext } from 'contexts/GlobalContext';

class Home extends Component {
  createNewGame = async () => {
    const response = await gameService.createNewGame(this.context.username);
    console.dir(response.data);
    this.context.setGame(response.data);
    this.props.history.push(`/game/${response.data.id}`);
  }

  updateUsername = evt => {
    this.context.updateUsername(evt.target.value);
  }

  render() {
    return (
      <div>
        <input type='text' onChange={this.updateUsername}/>
        <button onClick={this.createNewGame}>Create new game</button>
      </div>
    );
  }
}

Home.contextType = GlobalContext;

Home.propTypes = {
  history: PropTypes.object
}
export default withRouter(Home);