import React, { Component } from 'react';
import { connect } from 'react-redux';
import getBooksAction from './actions';
import BookListItem from '../BookListItem';

import './styles.css';

class BookList extends Component {
  componentDidMount() {
    this.props.getBooksAction();
  }

  bookList() {
    return this.props.bookList.map((book) => {
      let name = book.name;
      return (
        <BookListItem name={name} onClick={()=>{}} key={name} />
      );
    });
  }

  render() {
    return (
      <div className="bookList">
        {this.bookList()}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    bookList: state.bookList
  }
}

export default connect(mapStateToProps, { getBooksAction })(BookList);
