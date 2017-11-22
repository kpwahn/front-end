import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.css';

class GenericListItem extends Component {
  render() {
    return (
      <div className="GenericListItem">
        <h4>{this.props.name}</h4>
        <Link to={this.props.to} onClick={this.props.onClick}>Take Quiz</Link>
      </div>
    );
  }
}

GenericListItem.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string
}

export default GenericListItem;
