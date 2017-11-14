import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.css';

class QuizListItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.name);
  }

  render() {
    return (
      <div className="QuizListItem">
        <h4>{this.props.name}</h4>
        <Link to="/take-quiz" onClick={this.onClick}>Take Quiz</Link>
      </div>
    );
  }
}

QuizListItem.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func
}

export default QuizListItem;
