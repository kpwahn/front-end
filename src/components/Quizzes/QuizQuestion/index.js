import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {RadioButton} from 'material-ui/RadioButton';
import {  RadioButtonGroup } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

import getAnswersAction from './actions';

import './styles.css';

class QuizQuestion extends Component {
  constructor(props){
    super(props)

    this.answerList = this.answerList.bind(this);
  }

  componentDidMount() {
    this.props.getAnswersAction({id: this.props.questionId});
  }

  answerList() {
    return this.props.answerList.map((answer) => {
      return (
          <RadioButton value={answer.answer} label={answer.answer} key={answer.answer}/>
      );
    })
  }

  render() {
    let nextButtonText = 'next';
    if(this.props.activeQuiz.page === this.props.questionList.length - 1){
      nextButtonText = 'submit'
    }
    let previousButton = (<RaisedButton label="Previous" secondary={true} onClick={this.props.onPrevious} />);
    if(this.props.activeQuiz.page === 0 ) {
      previousButton = null;
    }
    return (
      <form onSubmit={this.props.handleSubmit(this.props.onSubmit)} className="QuizQuestion">
        <CardHeader
          title={this.props.cardHeaderTitle}
          subtitle={this.props.cardHeadersubtitle}
        />
        <CardTitle title={this.props.question} />
        <Field
          name={this.props.question}
          component={RadioButtonGroup}
          className="RadioButtonGroup"
        >
          {this.answerList()}
        </Field>
        <CardActions style={{padding: 16}}>
         {previousButton}
         <RaisedButton type="submit" label={nextButtonText} primary={true}/>
       </CardActions>
      </form>
    )
  }
}

QuizQuestion.propTypes = {
  onPrevious: PropTypes.func,
  onSubmit: PropTypes.func
}

function mapStateToProps(state) {
  return {
    activeQuiz: state.activeQuiz,
    answerList: state.answerList,
    questionList: state.questionList
  }
}

QuizQuestion = connect(mapStateToProps, {getAnswersAction})(QuizQuestion);

export default reduxForm({
  form: 'wizard', // <------ same form name
 destroyOnUnmount: false, // <------ preserve form data
 forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(QuizQuestion);
