import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';

import CategoryFilter from '../components/CategoryFilter';

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleRemove = book => {
    const { removeBook } = this.props;
    const { books } = this.props;
    const index = books.findIndex(book1 => book1 === book);
    removeBook(index);
  }

  handleFilterChange(event) {
    const { changeFilter } = this.props;
    const category = event.target.value;
    changeFilter(category);
  }

  render() {
    const { books, filter } = this.props;
    const cat = filter;
    const filteredBooks = (cat === 'All') ? books : books.filter(book => book.category === cat);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Title</td>
              <td>Category</td>
              <td>Remove</td>
              <td><CategoryFilter handleFilterChange={this.handleFilterChange} /></td>
            </tr>
          </thead>
          <tbody>

            {filteredBooks.map(
              book => <Book key={book.id} book={book} trigerParent={this.handleRemove} />,
            )}

          </tbody>
        </table>
      </div>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
