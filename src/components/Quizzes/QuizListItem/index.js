import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Card} from 'material-ui/Card';

import GenericListItem from '../../GenericListItem';
import { setActiveQuizAction } from './actions';
import './styles.css';

class QuizListItem extends Component {
  render() {
    return (
      <Card className="QuizListItem">
      <GenericListItem
        buttonText={'Select Quiz'}
        history={this.props.history}
        name={this.props.name}
        onClick={() => { this.props.setActiveQuizAction({
            id: this.props.id,
            name: this.props.name
          }); }
        }
        to="/quiz"
      />
      </Card>
    );
  }
}

QuizListItem.propTypes = {
  history: PropTypes.object,
  name: PropTypes.string,
  onClick: PropTypes.func
}

export default connect(null, {setActiveQuizAction})(QuizListItem);
