import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Guess extends Component {
  static propTypes = {
    draw: PropTypes.string
  }

  render() {
    return (
      <div>
        <img src={this.props.draw}></img>
        <input placeholder={'Aca escribis tu respuesta'}></input>
      </div>
    )
  }
}

export default Guess;
