import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {reset} from 'redux-form';
import _ from 'lodash';
import getAnswerKeyAction from './actions';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgressbar from 'react-circular-progressbar';

import './styles.css';

class QuizResults extends Component {
  constructor(props) {
    super(props);

    this._getColor = this._getColor.bind(this);
    this._clearForm = this._clearForm.bind(this);
    this._calculateScore = this._calculateScore.bind(this);
  }

  componentDidMount() {
    this.props.getAnswerKeyAction(this.props.activeQuiz.id);
  }

  _calculateScore(){
    let loading = true;
    let numQuestionsCorrect = 0;
    let score = 0;

    let answers = (this.props.form.wizard) ? this.props.form.wizard.values : undefined;
    let answer_key = this.props.answerKey;

    if(!answers || !answer_key) {
      return {loading: loading, numQuestionsCorrect, numQuestionsCorrect, score: score};
    }

    _.each(answers, (answer, answer_id) => {
      _.map(answer_key, (correct_answer) => {
        if( answer === correct_answer.answer && answer_id === correct_answer.question_id ) {
          numQuestionsCorrect++;
        }
      });
    });

    loading = false;
    score = (( numQuestionsCorrect / answer_key.length ) * 100).toFixed(2);

    if(isNaN(score)){
      score = 0;
    }

    return {loading: loading, numQuestionsCorrect, numQuestionsCorrect, score: score};
  }

  _getColor(score){
    let s = score;
    let className = '';
    if(s <= 75 && s >= 50){
      className = 'yellow';
    } else if ( s < 50 && s >= 25) {
      className = 'orange';
    } else if (s < 25 ){
      className = 'red';
    } else {
      className = 'green';
    }
    return className;
  }

  _clearForm(){
    this.props.dispatch(reset('wizard'));
  }

  render() {
    let {loading, numQuestionsCorrect, score} = this._calculateScore();

    if(loading) {
      return (<h1>Calculating Score...</h1>)
    } else {
      return (
        <div className="QuizResult">
          <div className="progressBar">
            <CircularProgressbar
              className={`progressbar-${this._getColor(score)}`}
              initialAnimation={true}
              percentage={score}
            />
          </div>
          <div className="action-buttons">
          <RaisedButton
            label="Take Another Quiz"
            primary={true}
            containerElement={<Link
              className="Link"
              to="/book-list"
              onClick={this.props.onClick}
            />}
          />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = function(state){
  return {
    activeQuiz: state.activeQuiz,
    answerKey: state.answerKey,
    form: state.form,
    questionList: state.questionList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    getAnswerKeyAction: (question) => {
      dispatch(getAnswerKeyAction(question))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizResults);
