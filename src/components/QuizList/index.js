import React, { Component } from 'react';
import { connect } from 'react-redux';
import getQuizAction from './actions';
import setActiveQuizAction from '../Quiz/actions';
import QuizListItem from '../QuizListItem';

import './styles.css';

class QuizList extends Component {
  constructor(props) {
    super(props);
    this.getQuizList = this.getQuizList.bind(this);
  }

  componentDidMount() {
    this.props.getQuizAction(this.props.user.token);
  }

  getQuizList() {
    return this.props.quizList.map((quiz) => {
      let name = quiz.name;
      return (
        <QuizListItem name={name} onClick={this.props.setActiveQuizAction} key={name} />
      );
    });
  }

  render() {
    let quizList = this.getQuizList();


    return (
      <div className="quizList">
        {quizList}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    user: state.user,
    quizList: state.quizList
  }
}

export default connect(mapStateToProps, { getQuizAction, setActiveQuizAction })(QuizList);
