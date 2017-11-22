import React, { Component } from 'react';
import { connect } from 'react-redux';

import getBooksAction from './actions';

import BookListItem from '../BookListItem';

import './styles.css';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.bookList = this.bookList.bind(this);
  }

  componentDidMount(){
    if(this.props.bookList.length === 0 ) {
      this.props.getBooksAction();
    }
  }

  bookList() {
    return this.props.bookList.map((book) => {
      return (
        <BookListItem
          id={book.id}
          key={book.id}
          name={book.name}
        />
      );
    });
  }

  render() {
    let bookList = this.bookList();

    return (
      <div className="bookList">
        {bookList}
      </div>
    );
  }
}

function mapStateToProps(state){
  return { bookList: state.bookList }
}

export default connect(mapStateToProps, {getBooksAction})(BookList);
