import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GenericListItem from '../../GenericListItem';
import setActiveBookAction from './actions';
import './styles.css';

class BookListItem extends Component {
  render() {
    return (
      <div className="BookListItem">
        <GenericListItem
          buttonText={'Select Book'}
          history={this.props.history}
          name={this.props.name}
          onClick={() => { this.props.setActiveBookAction({name: this.props.name, activeBookId: this.props.id}) }}
          to="/quiz-list"
        />
      </div>
    );
  }
}

BookListItem.propTypes = {
  history: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func
}

export default connect(null, {setActiveBookAction})(BookListItem);
