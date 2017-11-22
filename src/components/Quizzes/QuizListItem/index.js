import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GenericListItem from '../../GenericListItem';
import setActiveQuizAction from './actions';
import './styles.css';

class QuizListItem extends Component {
  render() {
    return (
      <div className="QuizListItem">
      <GenericListItem
        name={this.props.name}
        onClick={() => { this.props.setActiveQuizAction({
            iId: this.props.id,
            name: this.props.name
          }); }
        }
        to="/quiz"
      />
      </div>
    );
  }
}

QuizListItem.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func
}

export default connect(null, {setActiveQuizAction})(QuizListItem);
