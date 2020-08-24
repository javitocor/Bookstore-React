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
        <header>
          <div className="header">
            <h1 className="title">Bookstore CMS</h1>
            <span className="books">BOOKS</span>
            <span className="categories"><CategoryFilter handleFilterChange={this.handleFilterChange} /></span>
            <div className="image">
              <span className="icon"><i className="fas fa-user" /></span>
            </div>
          </div>
        </header>
        <main className="main">
          <div className="books-container">
            {filteredBooks.map(
              book => <Book key={book.id} book={book} trigerParent={this.handleRemove} />,
            )}
          </div>
        </main>
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
