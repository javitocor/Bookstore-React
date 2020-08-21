import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const mapStateToProps = state => ({ books: state.books });

class BooksList extends Component {
  constructor(props) {
    super(props);
    const { books } = props;
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
          </thead>
          <tbody>

            {this.books.map(book => <Book key={book.id} book={book} />)}

          </tbody>
        </table>
      </div>
    );
  }
}
BooksList.prototype = {
  book: Proptypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, null)(BooksList);
