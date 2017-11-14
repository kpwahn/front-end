import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenericButton extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>{this.props.children}</button>
    );
  }
}

GenericButton.propTypes ={
  onClick: PropTypes.func
}

export default GenericButton;
