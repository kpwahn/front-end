import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';

class Quiz extends Component {
  render() {
    return (
      <div className="Quiz">
        Taking the {this.props.activeQuiz.name}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    activeQuiz: state.activeQuiz
  };
}

export default connect(mapStateToProps, null)(Quiz);
