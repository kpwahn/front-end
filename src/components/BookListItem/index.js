import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.css';

class BookListItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.name);
  }

  render() {
    return (
      <div className="BookListItem">
        <h4>{this.props.name}</h4>
        <Link to="" onClick={this.onClick}>Select Book</Link>
      </div>
    );
  }
}

BookListItem.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func
}

export default BookListItem;
