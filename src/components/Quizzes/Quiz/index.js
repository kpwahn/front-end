import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';

class Quiz extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="Quiz">
        You ready to take the {this.props.activeQuiz.name}?
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
