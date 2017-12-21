import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {reset} from 'redux-form';
import _ from 'lodash';
import getCorrectAnswersAction from './actions';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgressbar from 'react-circular-progressbar';

import './styles.css';

class QuizResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      numQuestionsCorrect: 0,
      score: 0
    }

    this.getColor = this.getColor.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  componentDidMount() {
    Promise.all(
      this.props.questionList.map((question, index)=> {
        if(index === 0){
          question.first = true;
        }
        return this.props.getCorrectAnswersAction(question);
      })
    ).then(() => {
      setTimeout(() => {
        let al = this.props.form.wizard.values;
        let cal = this.props.correctAnswerList;

        _.each(al, (cvalue, ckey) => {
          _.each(cal, (avalue, akey) => {
              if(cvalue === avalue.answer.answer && ckey === avalue.answer.question_id ){
                this.setState({numQuestionsCorrect: this.state.numQuestionsCorrect + 1})
              }
          });
        });

        this.setState({loading: false});
        this.clearForm();
        setTimeout(()=>{
          this.setState({score: (( this.state.numQuestionsCorrect / cal.length ) * 100).toFixed() });
        }, 100);
      }, 1000)
    });
  }

  getColor(){
    let s = this.state.score;
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

  clearForm(){
    this.props.dispatch(reset('wizard'));
  }

  render() {
    if(this.state.loading) {
      return (<h1>Calculating Score...</h1>)
    } else {
      return (
        <div className="QuizResult">
          <div className="progressBar">
            <CircularProgressbar
              className={`progressbar-${this.getColor()}`}
              initialAnimation={true}
              percentage={this.state.score}
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
  console.log(state)
  return {
    correctAnswerList: state.correctAnswerList,
    form: state.form,
    questionList: state.questionList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    getCorrectAnswersAction: (question) => {
      dispatch(getCorrectAnswersAction(question))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizResults);
