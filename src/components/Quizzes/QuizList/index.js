import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuizListItem from '../QuizListItem';
import getQuizzesAction from './actions';

import './styles.css';

class QuizList extends Component {
  constructor(props) {
    super(props);
    this.quizList = this.quizList.bind(this);
  }

  componentDidMount(){
    this.props.getQuizzesAction(this.props.activeBook)
  }

  quizList() {
    return this.props.quizList.map((quiz) => {
      return (
        <QuizListItem
          history={this.props.history}
          id={quiz.id}
          key={quiz.id}
          name={quiz.name}
        />
      );
    });
  }

  render() {
    let quizList = this.quizList();

    return (
      <div className="QuizList">
        {quizList}
        {!this.props.quizList.length && <div>No Quizzes found</div>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {quizList: state.quizList, activeBook: state.activeBook}
}

export default connect(mapStateToProps, {getQuizzesAction})(QuizList);
