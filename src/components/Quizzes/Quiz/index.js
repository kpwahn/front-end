import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import getQuestionsAction from './actions';
import { incrementPage, decrementPage, resetPage } from '../QuizListItem/actions';

import QuizQuestion from '../QuizQuestion';
import './styles.css';

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.createForm = this.createForm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getQuestionsAction({
      activeBook: this.props.activeBook,
      activeQuiz: this.props.activeQuiz
    })

    this.props.resetPage();
  }

  onSubmit() {
    console.log(this.props.formValues.wizard.values);
  }

  createForm() {
    return this.props.questionList.map((question, index) => {
      let lastPage = (this.props.activeQuiz.page === (this.props.questionList.length - 1) ) ? true : false;

      let onSubmit = this.props.incrementPage;
      if(lastPage) {
        onSubmit = this.onSubmit;
      }

      return (
        <div key={question.id}>
          {
            this.props.activeQuiz.page === index &&
            <div>
              <QuizQuestion
                cardHeaderTitle={this.props.activeQuiz.name}
                cardHeadersubtitle={this.props.activeBook.name}
                onPrevious={this.props.decrementPage}
                onSubmit={onSubmit}
                question={question.question}
                questionId={question.id}
              />
             </div>
           }
        </div>
      )
    });
  }

  render() {
    return (
      <Card className="Quiz">
        {this.createForm()}
      </Card>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    formValues: state.form,
    activeBook: state.activeBook,
    activeQuiz: state.activeQuiz,
    questionList: state.questionList
  };
}

export default connect(mapStateToProps, {getQuestionsAction, decrementPage, incrementPage, resetPage})(Quiz);
