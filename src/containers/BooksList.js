import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Book from '../components/Book';
import { removeBook } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

class BooksList extends Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove = book => {
    const { removeBook } = this.props;
    const { books } = this.props;
    const index = books.findIndex(book1 => book1 === book);
    removeBook(index);
  }

  render() {
    const { books } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Title</td>
              <td>Category</td>
              <td>Remove</td>
              <td><CategoryFilter /></td>
            </tr>
          </thead>
          <tbody>

            {books.map(
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
};

const mapStateToProps = state => ({ books: state.books });
const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
